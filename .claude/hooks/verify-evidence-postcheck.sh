#!/usr/bin/env bash
# PostToolUse hook (v1.8.1-cc) - validates verify-results.json after any Write/Edit/MultiEdit.
# Exit 2 = blocking error; stderr fed back to Claude to remediate immediately.
# v1.8.1-cc: JSON parsing via Python (jq is often absent on Windows Git Bash).
set -uo pipefail
INPUT="$(cat)"

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
if [[ -z "$PY" ]]; then
  echo "verify-evidence-postcheck: WARNING - Python 3 not found; post-write validation skipped." >&2
  exit 0
fi

FILE_PATH="$(printf '%s' "$INPUT" | "$PY" "${PY_ARGS[@]}" -c '
import json,sys
d=json.load(sys.stdin)
ti=d.get("tool_input") or {}
print(ti.get("file_path") or ti.get("path") or "")
' 2>/dev/null || echo "")"
case "$FILE_PATH" in
  *"_docs/ai/verify/verify-results.json") : ;;
  *) exit 0 ;;
esac

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
ERR="$(mktemp)"; trap 'rm -f "$ERR"' EXIT
if ! "$PROJECT_DIR/scripts/verify-gate.sh" 1>/dev/null 2>"$ERR"; then
  {
    echo "BLOCKED: verify-results.json now violates the evidence contract. Revert the change or supply real evidence."
    cat "$ERR"
  } >&2
  exit 2
fi
exit 0
