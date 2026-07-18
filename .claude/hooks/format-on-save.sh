#!/usr/bin/env bash
#
# format-on-save.sh (v1.8.1-cc)
#
# PostToolUse hook for Claude Code.
# Auto-formats files after Write, Edit, or MultiEdit tool calls.
# Supports common file types across stacks.
#
# Registered in each template's .claude/settings.json on PostToolUse.
# Matcher: Write|Edit|MultiEdit
#
# Best-effort: silently skips if the relevant formatter is not installed.
# v1.8.1-cc: JSON parsing via Python (jq is often absent on Windows Git Bash).

set -uo pipefail

INPUT=$(cat)

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
[[ -z "$PY" ]] && exit 0

FILE_PATH="$(printf '%s' "$INPUT" | "$PY" "${PY_ARGS[@]}" -c '
import json,sys
d=json.load(sys.stdin)
print((d.get("tool_input") or {}).get("file_path") or "")
' 2>/dev/null || echo "")"

# Skip if no file path
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Skip if file does not exist (could happen on a failed edit)
if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

# Format by file type
case "$FILE_PATH" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.md|*.css|*.scss|*.html|*.yaml|*.yml)
    if command -v npx >/dev/null 2>&1; then
      npx --no-install prettier --write "$FILE_PATH" 2>/dev/null || true
    fi
    ;;
  *.cs)
    if command -v dotnet >/dev/null 2>&1; then
      dotnet format --include "$FILE_PATH" >/dev/null 2>&1 || true
    fi
    ;;
  *.py)
    if command -v ruff >/dev/null 2>&1; then
      ruff format "$FILE_PATH" >/dev/null 2>&1 || true
    elif command -v black >/dev/null 2>&1; then
      black --quiet "$FILE_PATH" 2>/dev/null || true
    fi
    ;;
  *.go)
    if command -v gofmt >/dev/null 2>&1; then
      gofmt -w "$FILE_PATH" 2>/dev/null || true
    fi
    ;;
  *.rs)
    if command -v rustfmt >/dev/null 2>&1; then
      rustfmt "$FILE_PATH" 2>/dev/null || true
    fi
    ;;
  *.sh)
    if command -v shfmt >/dev/null 2>&1; then
      shfmt -w "$FILE_PATH" 2>/dev/null || true
    fi
    ;;
esac

exit 0
