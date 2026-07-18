#!/usr/bin/env bash
# verify-gate.sh - WP1 Tier B validator (v1.8.1-cc)
# Validates _docs/ai/verify/verify-results.json against the evidence contract.
# Exit 0 = gate passes. Exit 1 = gate fails (offending criteria listed on stderr).
#
# v1.8.1-cc changes:
#   - Engine is Python stdlib (json) instead of jq: jq is frequently absent on
#     Windows Git Bash and a silent Tier-A skip plus hard Tier-B failure was the
#     worst of both worlds. Python 3 is resolved via python3/python/py.
#   - BLOCKED status supported: a criterion may be BLOCKED only with a non-empty
#     "disposition" field (the agreed reason and plan). BLOCKED never fails the
#     gate but is always listed, so a completion claim shows its open edges.
#
# Usage:
#   scripts/verify-gate.sh            # validate the whole file (phase-exit / pre-commit / CI)
#   scripts/verify-gate.sh --file P   # validate a specific results file (used by hooks)
#   scripts/verify-gate.sh --tg TG-01 # validate a single task group
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESULTS="$PROJECT_ROOT/_docs/ai/verify/verify-results.json"
EVIDENCE_DIR="$PROJECT_ROOT/_docs/ai/verify/evidence"
TG_FILTER=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --file) RESULTS="$2"; shift 2 ;;
    --tg)   TG_FILTER="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
if [[ -z "$PY" ]]; then
  echo "verify-gate: Python 3 is required (python3/python/py not found on PATH)." >&2
  echo "The evidence gate cannot run without it; install Python before making completion claims." >&2
  exit 1
fi

if [[ ! -f "$RESULTS" ]]; then
  echo "verify-gate: results file not found: $RESULTS" >&2
  echo "A project under the v1.7+ contract must have verify-results.json before completion claims." >&2
  exit 1
fi

RESULTS_PATH="$RESULTS" EVIDENCE_DIR_PATH="$EVIDENCE_DIR" TG_FILTER_VAL="$TG_FILTER" \
"$PY" "${PY_ARGS[@]}" - <<'PYEOF'
import json, os, re, sys
from datetime import datetime, timezone

results_path = os.environ["RESULTS_PATH"]
evidence_dir = os.environ["EVIDENCE_DIR_PATH"]
tg_filter = os.environ.get("TG_FILTER_VAL", "")

ALLOWED = re.compile(r"\.(png|log|testresults\.txt|http\.txt)$")

try:
    with open(results_path, encoding="utf-8") as fh:
        data = json.load(fh)
except (OSError, json.JSONDecodeError) as exc:
    print(f"verify-gate: verify-results.json unreadable or invalid JSON: {exc}", file=sys.stderr)
    sys.exit(1)

failures = 0
blocked = []

def fail(tg, cid, msg):
    global failures
    print(f"GATE FAIL [{tg}/{cid}]: {msg}", file=sys.stderr)
    failures += 1

def parse_ts(value):
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None

for tg in data.get("taskGroups", []):
    tg_id = tg.get("id", "?")
    if tg_filter and tg_id != tg_filter:
        continue
    started = parse_ts(tg.get("startedAt"))
    for crit in tg.get("criteria", []):
        cid = crit.get("id", "?")
        status = crit.get("status")

        if status not in ("PASS", "FAIL", "BLOCKED"):
            fail(tg_id, cid, f"illegal status '{status}' (only PASS, FAIL, BLOCKED exist)")
            continue

        if status == "FAIL":
            continue

        if status == "BLOCKED":
            disposition = (crit.get("disposition") or "").strip()
            if not disposition:
                fail(tg_id, cid, "BLOCKED without a disposition (state the agreed reason and plan)")
            else:
                blocked.append((tg_id, cid, disposition))
            continue

        # status == PASS: evidence is mandatory
        evidence = crit.get("evidence") or []
        if not evidence:
            fail(tg_id, cid, "PASS with no evidence")
            continue
        for ev in evidence:
            if not ALLOWED.search(ev):
                fail(tg_id, cid, f"evidence '{ev}' does not match allowed patterns (png|log|testresults.txt|http.txt)")
                continue
            ev_path = os.path.join(evidence_dir, ev)
            if not os.path.isfile(ev_path) or os.path.getsize(ev_path) == 0:
                fail(tg_id, cid, f"evidence '{ev}' missing or empty at {ev_path}")
                continue
            if started is not None:
                mtime = datetime.fromtimestamp(os.path.getmtime(ev_path), tz=timezone.utc)
                if started.tzinfo is None:
                    started = started.replace(tzinfo=timezone.utc)
                if mtime < started:
                    fail(tg_id, cid, f"evidence '{ev}' predates task group start ({tg.get('startedAt')})")

for tg_id, cid, disposition in blocked:
    print(f"GATE NOTE [{tg_id}/{cid}]: BLOCKED - {disposition}", file=sys.stderr)

if failures:
    print(f"verify-gate: {failures} violation(s). No completion claim may be made.", file=sys.stderr)
    sys.exit(1)

scope = f"task group {tg_filter}" if tg_filter else "all task groups"
suffix = f"; {len(blocked)} BLOCKED with disposition" if blocked else ""
print(f"verify-gate: PASS ({scope}{suffix})")
PYEOF
