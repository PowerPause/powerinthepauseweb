# Verification Contract (v1.8.1-cc)

This directory is the completion source of truth. The rules are mechanical, not advisory:

- verify-results.json holds every task group and criterion. Criteria are created FAIL. There is no pending state.
- A criterion moves FAIL -> PASS only with evidence: real files in evidence/ matching *.png, *.log, *.testresults.txt, *.http.txt. Prose is not evidence.
- A criterion may be BLOCKED only with a non-empty "disposition" field recording the human-agreed reason and plan (e.g. "Custom OCR model training blocked on client sample set O8; prebuilt-model fallback shipped; revisit at Phase 1 exit"). BLOCKED never fails the gate but is listed on every gate pass, so a completion claim always shows its open edges. BLOCKED without a disposition fails the gate.
- Hooks block illegitimate writes to verify-results.json (Tier A). scripts/verify-gate.sh validates at phase exit and pre-commit (Tier B) and in CI (Tier C).
- When all criteria in a task group are PASS (or BLOCKED with disposition), scripts/run-evaluator.sh runs the fresh-context evaluator. NEEDS_WORK findings open the next build cycle verbatim. Three consecutive NEEDS_WORK verdicts halt work and escalate to the human.

Criterion IDs trace back to the spec (WP5 EARS template) one-to-one.

Runtime note (v1.8.1-cc): the gate and hooks use Python 3 (resolved as python3/python/py) for JSON handling; jq is no longer required. The SessionStart hook warns if Python is missing.
