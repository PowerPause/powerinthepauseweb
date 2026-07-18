#!/usr/bin/env bash
# run-evaluator.sh <TG-ID> <spec-file> [base-ref]
# WP2 (v1.7.0, revised v1.8.1-cc): runs the fresh-context evaluator as a SEPARATE claude -p
# session at read-only autonomy. The wrapper captures stdout and writes the verdict file itself,
# so the evaluator session needs no write capability at all.
# v1.8.1-cc: model is read from the evaluator agent's frontmatter (single source of truth);
# the claude-CLI existence check is restored; task-group row extraction uses Python (no jq).
set -euo pipefail

TG_ID="${1:?Usage: run-evaluator.sh <TG-ID> <spec-file> [base-ref]}"
SPEC_FILE="${2:?Usage: run-evaluator.sh <TG-ID> <spec-file> [base-ref]}"
BASE_REF="${3:-HEAD~1}"

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERIFY_DIR="$PROJECT_ROOT/_docs/ai/verify"
VERDICT_FILE="$VERIFY_DIR/verdicts/${TG_ID}-verdict.md"
RESULTS="$VERIFY_DIR/verify-results.json"

# --- CONFIG: verify flags against `claude --help` on first run ---
# Read-only enforcement is PRIMARY via --allowedTools (Read, Grep, Glob only).
# Headless -p loads local CLAUDE.md/settings by default; we pass the evaluator
# system prompt from .claude/agents/evaluator.md explicitly so behaviour is pinned.
# Fresh context is guaranteed by this being a separate claude -p process.
CLAUDE_BIN="${CLAUDE_BIN:-claude}"
EVALUATOR_DEF="$PROJECT_ROOT/.claude/agents/evaluator.md"
# Model comes from the evaluator agent frontmatter so it is defined in exactly one place.
EVAL_MODEL="$(sed -n 's/^model:[[:space:]]*//p' "$EVALUATOR_DEF" 2>/dev/null | head -1)"
EVAL_MODEL="${EVAL_MODEL:-claude-opus-4-8}"
CLAUDE_ARGS=(-p --model "$EVAL_MODEL" --allowedTools "Read,Grep,Glob")
# ---------------------------------------------------------------------------

command -v "$CLAUDE_BIN" >/dev/null 2>&1 || { echo "claude CLI not found on PATH" >&2; exit 1; }
[[ -f "$SPEC_FILE" ]] || { echo "Spec file not found: $SPEC_FILE" >&2; exit 1; }
[[ -f "$RESULTS" ]] || { echo "verify-results.json not found" >&2; exit 1; }

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
[[ -z "$PY" ]] && { echo "run-evaluator: Python 3 is required (python3/python/py not found)." >&2; exit 1; }

DIFF="$(git -C "$PROJECT_ROOT" diff "$BASE_REF"...HEAD)"
TG_ROWS="$(RESULTS_PATH="$RESULTS" TG_ID_VAL="$TG_ID" "$PY" "${PY_ARGS[@]}" -c '
import json, os
data = json.load(open(os.environ["RESULTS_PATH"], encoding="utf-8"))
rows = [tg for tg in data.get("taskGroups", []) if tg.get("id") == os.environ["TG_ID_VAL"]]
print(json.dumps(rows, indent=2))
')"
EVIDENCE_LIST="$(ls -la "$VERIFY_DIR/evidence" 2>/dev/null || echo "none")"
EVIDENCE_TEXT="$(for f in "$VERIFY_DIR"/evidence/*.log "$VERIFY_DIR"/evidence/*.txt; do
  [[ -f "$f" ]] && { echo "----- $(basename "$f") -----"; head -c 8000 "$f"; echo; }
done 2>/dev/null || true)"

PROMPT=$(cat <<PROMPTEOF
Evaluate task group ${TG_ID}.

=== SPEC (relevant section incl. EARS criteria and Non-goals) ===
$(cat "$SPEC_FILE")

=== GIT DIFF (${BASE_REF}...HEAD) ===
${DIFF}

=== VERIFY-RESULTS ROWS ===
${TG_ROWS}

=== EVIDENCE FILES ===
${EVIDENCE_LIST}

=== EVIDENCE CONTENT (text files, truncated) ===
${EVIDENCE_TEXT}
PROMPTEOF
)

mkdir -p "$VERIFY_DIR/verdicts"
{
  echo "# Verdict: ${TG_ID}"
  echo "date: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "base-ref: ${BASE_REF}"
  echo "evaluator: claude -p (${EVAL_MODEL}), allowedTools Read/Grep/Glob, agents/evaluator.md system prompt"
  echo ""
  SYS="$(awk 'f;/^---$/{c++;if(c==2)f=1}' "$EVALUATOR_DEF")"   # body after frontmatter
  # Prompt via stdin: spec + diff + evidence routinely exceed the Windows argv size limit
  printf '%s' "$PROMPT" | "$CLAUDE_BIN" "${CLAUDE_ARGS[@]}" --append-system-prompt "$SYS"
} > "$VERDICT_FILE"

echo "Verdict written: $VERDICT_FILE"
grep -m1 "^VERDICT:" "$VERDICT_FILE" || { echo "WARNING: no VERDICT line found - treat as NEEDS_WORK" >&2; exit 1; }
if grep -q "^VERDICT: NEEDS_WORK" "$VERDICT_FILE"; then exit 3; fi
exit 0
