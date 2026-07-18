#!/usr/bin/env bash
#
# secrets-guard.sh (v1.8.1-cc)
#
# PreToolUse hook for Claude Code.
# Blocks Bash, Edit, Write, and MultiEdit tool calls that touch sensitive paths,
# contain destructive command patterns, or attempt data destruction without
# WHERE clauses.
#
# Stack-agnostic. Works on any project regardless of language or framework.
#
# Registered in each template's .claude/settings.json on PreToolUse.
# Matcher: Bash|Edit|Write|MultiEdit
#
# Exits 2 to block (stderr is fed back to Claude). Exits zero to allow.
# Logs allowed calls to _docs/ai/logs/tool-audit.log when the directory exists.
#
# Reads JSON from stdin (the hook payload).
# v1.8.1-cc: JSON parsing via Python (jq is often absent on Windows Git Bash);
# CLAUDE_PROJECT_DIR replaces FACTORY_PROJECT_DIR.

set -uo pipefail

# Read the tool input JSON
INPUT=$(cat)

PY=""; PY_ARGS=()
for _c in python3 python py; do
  command -v "$_c" >/dev/null 2>&1 || continue
  [[ "$_c" == "py" ]] && _a=(-3) || _a=()
  # Reject non-functional interpreters (e.g. the Windows Store python3 alias stub)
  if "$_c" "${_a[@]}" -c "import sys" >/dev/null 2>&1; then PY="$_c"; PY_ARGS=("${_a[@]}"); break; fi
done
if [[ -z "$PY" ]]; then
  echo "secrets-guard: WARNING - Python 3 not found; guard skipped." >&2
  exit 0
fi

# Extract the tool name and inputs
eval "$(printf '%s' "$INPUT" | "$PY" "${PY_ARGS[@]}" -c '
import json, shlex, sys
d = json.load(sys.stdin)
ti = d.get("tool_input") or {}
print("TOOL_NAME=" + shlex.quote(d.get("tool_name") or ""))
print("COMMAND="   + shlex.quote(ti.get("command") or ""))
print("FILE_PATH=" + shlex.quote(ti.get("file_path") or ""))
' 2>/dev/null || echo 'TOOL_NAME=""; COMMAND=""; FILE_PATH=""')"

# Combined string for pattern matching
TARGET="${COMMAND} ${FILE_PATH}"

# ============================================================
# Category 1: Sensitive paths (never touch)
# ============================================================
BLOCKED_PATHS=(
  "\.env"
  "\.env\.local"
  "\.env\.production"
  "\.env\.development"
  "\.env\.staging"
  "\.git/"
  "id_rsa"
  "id_ed25519"
  "id_ecdsa"
  "\.ssh/"
  "credentials\.json"
  "secrets\.json"
  "\.aws/"
  "\.azure/"
  "\.kube/"
  "\.docker/config\.json"
  "appsettings\.Production\.json"
  "appsettings\.Development\.json"
  "\.npmrc"
  "package-lock\.json"
  "pnpm-lock\.yaml"
  "yarn\.lock"
  "Gemfile\.lock"
  "Cargo\.lock"
  "poetry\.lock"
  "uv\.lock"
  "packages\.lock\.json"
)

# ============================================================
# Category 2: Destructive shell commands
# ============================================================
BLOCKED_COMMANDS=(
  "curl.*-d.*[a-zA-Z0-9]{30,}"
  "wget.*--post-data"
  "rm -rf /"
  "rm -rf \*"
  "rm -rf ~"
  "rm -rf \\$"
  "force-with-lease"
  "git push.*--force"
  "git push.*-f "
  "git push.*-f$"
  "git reset --hard"
  "shutdown"
  "mkfs"
  "dd if=.*of=/dev"
)

# ============================================================
# Category 3: SQL schema destruction (DROP)
# ============================================================
BLOCKED_SQL_DROP=(
  "DROP[[:space:]]+TABLE"
  "DROP[[:space:]]+DATABASE"
  "DROP[[:space:]]+SCHEMA"
  "DROP[[:space:]]+INDEX"
  "DROP[[:space:]]+FUNCTION"
  "DROP[[:space:]]+PROCEDURE"
  "DROP[[:space:]]+TRIGGER"
  "DROP[[:space:]]+POLICY"
  "DROP[[:space:]]+RULE"
  "DROP[[:space:]]+TYPE"
  "DROP[[:space:]]+DOMAIN"
  "DROP[[:space:]]+VIEW"
  "DROP[[:space:]]+SEQUENCE"
  "DROP[[:space:]]+COLUMN"
)

# ============================================================
# Category 4: SQL data destruction (obvious patterns)
# ============================================================
BLOCKED_SQL_DATA=(
  "TRUNCATE"
  "DELETE FROM.*WHERE.*1[[:space:]]*=[[:space:]]*1"
  "UPDATE.*SET.*WHERE.*1[[:space:]]*=[[:space:]]*1"
)

# ============================================================
# Category 5: Tooling-specific destructive commands
# ============================================================
BLOCKED_TOOLING=(
  "supabase db reset"
  "supabase db push.*--force"
  "supabase projects delete"
  "supabase functions delete"
  "prisma migrate reset"
  "prisma db push.*--force-reset"
  "dotnet ef database drop"
  "rails db:drop"
  "flyway clean"
  "docker.*system prune.*-a.*-f"
  "kubectl delete namespace"
)

# Function: check patterns against a target string
# Args: pattern_array_name target_string category_label
check_patterns() {
  local -n patterns=$1
  local target="$2"
  local category="$3"

  for pattern in "${patterns[@]}"; do
    if echo "$target" | grep -qiE "$pattern"; then
      echo "BLOCKED by secrets-guard ($category): matched pattern '$pattern'" >&2
      echo "Tool: $TOOL_NAME" >&2
      echo "Target: $target" >&2
      return 1
    fi
  done
  return 0
}

# Check sensitive paths
check_patterns BLOCKED_PATHS "$TARGET" "sensitive path" || exit 2

# Check destructive shell commands
check_patterns BLOCKED_COMMANDS "$COMMAND" "destructive command" || exit 2

# Check SQL schema destruction
check_patterns BLOCKED_SQL_DROP "$COMMAND" "SQL schema destruction" || exit 2

# Check SQL data destruction (obvious patterns)
check_patterns BLOCKED_SQL_DATA "$COMMAND" "SQL data destruction" || exit 2

# Check WHERE-less DELETE FROM (special case: needs negative check)
if echo "$COMMAND" | grep -qiE "DELETE[[:space:]]+FROM[[:space:]]+[a-zA-Z_\"\.]+"; then
  if ! echo "$COMMAND" | grep -qiE "WHERE"; then
    echo "BLOCKED by secrets-guard (SQL data destruction): DELETE FROM without WHERE clause" >&2
    echo "Tool: $TOOL_NAME" >&2
    echo "Command: $COMMAND" >&2
    exit 2
  fi
fi

# Check WHERE-less UPDATE (special case: needs negative check)
if echo "$COMMAND" | grep -qiE "UPDATE[[:space:]]+[a-zA-Z_\"\.]+[[:space:]]+SET"; then
  if ! echo "$COMMAND" | grep -qiE "WHERE"; then
    echo "BLOCKED by secrets-guard (SQL data destruction): UPDATE without WHERE clause" >&2
    echo "Tool: $TOOL_NAME" >&2
    echo "Command: $COMMAND" >&2
    exit 2
  fi
fi

# Check tooling-specific destructive commands
check_patterns BLOCKED_TOOLING "$COMMAND" "destructive tooling command" || exit 2

# ============================================================
# Allowed: log to audit trail if project has _docs/ai/logs
# ============================================================
AUDIT_DIR="${CLAUDE_PROJECT_DIR:-$PWD}/_docs/ai/logs"
if [ -d "$AUDIT_DIR" ]; then
  echo "$(date -Iseconds) ALLOW $TOOL_NAME $TARGET" >> "$AUDIT_DIR/tool-audit.log"
fi

exit 0
