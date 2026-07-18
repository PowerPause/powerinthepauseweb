#!/usr/bin/env bash
# SessionStart hook (CC edition, v1.8.1-cc) - injects completion-contract state at session start.
# Output on stdout is added to Claude's context (SessionStart semantics).
P="${CLAUDE_PROJECT_DIR:-$(pwd)}"
echo "== Framework session start (AI Agent Master Library, Claude Code edition) =="
[[ -f "$P/CONSTITUTION.md" ]] && echo "CONSTITUTION.md present - it always applies (imported via CLAUDE.md)."

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
if [[ -z "$PY" ]]; then
  echo "ATTENTION: Python 3 not found on PATH. The evidence gate (verify-gate.sh) and its hooks"
  echo "cannot run without it - install Python before any feature work or completion claims."
fi

if [[ -f "$P/_docs/ai/verify/verify-results.json" ]]; then
  if [[ -n "$PY" ]]; then
    COUNTS=$("$PY" "${PY_ARGS[@]}" -c '
import json,sys
try:
    d=json.load(open(sys.argv[1],encoding="utf-8"))
    crits=[c for tg in d.get("taskGroups",[]) for c in tg.get("criteria",[])]
    f=sum(1 for c in crits if c.get("status")=="FAIL")
    b=sum(1 for c in crits if c.get("status")=="BLOCKED")
    print(f"{f} criteria currently FAIL, {b} BLOCKED")
except Exception:
    print("? (verify-results.json unreadable)")
' "$P/_docs/ai/verify/verify-results.json" 2>/dev/null || echo "?")
    echo "Completion contract active: $COUNTS (default-FAIL is correct until evidenced)."
  fi
else
  echo "NOTE: verify-results.json missing - create from _docs/ai/verify/verify-results.example.json before feature work."
fi
[[ -f "$P/_docs/ai/_bootstrap-conflicts.md" ]] && echo "ATTENTION: _bootstrap-conflicts.md exists - resolve before other work."
exit 0
