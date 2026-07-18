#!/usr/bin/env bash
# new-task-group.sh <TG-ID> "<title>" - appends a task group skeleton with startedAt=now.
# Criteria are then added FAIL-first from the spec's EARS criterion IDs.
# v1.8.1-cc: JSON handling via Python (jq is often absent on Windows Git Bash).
set -euo pipefail
TG_ID="${1:?Usage: new-task-group.sh <TG-ID> \"<title>\"}"
TITLE="${2:-}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESULTS="$PROJECT_ROOT/_docs/ai/verify/verify-results.json"
[[ -f "$RESULTS" ]] || echo '{ "spec": "", "taskGroups": [] }' > "$RESULTS"
NOW="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
[[ -z "$PY" ]] && { echo "new-task-group: Python 3 is required (python3/python/py not found)." >&2; exit 1; }

RESULTS_PATH="$RESULTS" TG_ID_VAL="$TG_ID" TITLE_VAL="$TITLE" NOW_VAL="$NOW" \
"$PY" "${PY_ARGS[@]}" -c '
import json, os
path = os.environ["RESULTS_PATH"]
with open(path, encoding="utf-8") as fh:
    data = json.load(fh)
data.setdefault("taskGroups", []).append({
    "id": os.environ["TG_ID_VAL"],
    "title": os.environ["TITLE_VAL"],
    "startedAt": os.environ["NOW_VAL"],
    "criteria": [],
})
with open(path, "w", encoding="utf-8") as fh:
    json.dump(data, fh, indent=2)
    fh.write("\n")
'
echo "Added $TG_ID (startedAt=$NOW). Add criteria FAIL-first with their spec IDs."
