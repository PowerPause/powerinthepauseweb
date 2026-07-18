# Project Configuration

**Project:** <PROJECT_NAME>
**Date:** <YYYY-MM-DD>
**Owner:** <name>

This file captures the output of the `startup-configuration` skill for this project. It is the canonical reference for the project's governance posture. Every other skill reads it to determine the level at which to operate.

Update this file (and bump the date) if any of the parameters change.

## Configuration

| Gate              | Selection | Agent Team Activated |
| ----------------- | --------- | -------------------- |
| Security Posture  | <PUBLIC \| INTERNAL \| RESTRICTED \| CONFIDENTIAL \| CLASSIFIED> | <Basic \| Enhanced \| Senior \| Principal \| Chief Security Agent> |
| AI Governance     | <BASIC \| ENHANCED \| COMPREHENSIVE \| REGULATORY \| CLASSIFIED> | <AI Code Reviewer \| Specialist \| Manager \| Compliance Officer> |
| Deployment        | <ENVIRONMENT> | <Specialist> |
| Compliance        | <LIST or "None"> | <Agents> |
| Team Experience   | <JUNIOR \| INTERMEDIATE \| SENIOR \| EXPERT> | <Guidance level> |

## Activated Specialist Team

<List the specialists activated. Examples:>

- Basic Security Agent (level-based)
- AI Security Specialist (because AI tools are used)
- Cloud Security Specialist (because Azure deployment)
- Data Protection Specialist (because user data is handled)

## Compliance Frameworks In Scope

<List each framework with a one-line note on what it requires for this project. Examples:>

- **ISO 42001:** AI Management System - we maintain spec / test / impl / security reports per change
- **GDPR:** Applicable for EU users - lawful basis and DSR support required
- **ISO 27001:** Internal posture - access control and logging requirements

## AI Tools In Use

- **Tier 1 (approved):** <list, e.g. GitHub Copilot Enterprise>
- **Tier 2 (conditional):** <list with per-tool approval notes>
- **Tier 3:** Prohibited

## Notes

<Any project-specific overrides, context, or decisions that don't fit elsewhere.>

## Change Log

| Date | Change | Author |
| ---- | ------ | ------ |
| <YYYY-MM-DD> | Initial configuration | <name> |
