#!/usr/bin/env bash
# Installs the v1.7 pre-commit hook: verify-gate must pass before any commit.
set -euo pipefail
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK="$PROJECT_ROOT/.git/hooks/pre-commit"
[[ -d "$PROJECT_ROOT/.git" ]] || { echo "Not a git repository: $PROJECT_ROOT" >&2; exit 1; }
cat > "$HOOK" << 'HOOKEOF'
#!/usr/bin/env bash
# v1.7 evidence gate - Tier B
exec "$(git rev-parse --show-toplevel)/scripts/verify-gate.sh"
HOOKEOF
chmod +x "$HOOK"
echo "Installed pre-commit verify-gate at $HOOK"
