# Project Configuration

**Project:** The Power In The Pause® Website
**Date:** 2026-07-18
**Owner:** Katie Cooper

This file captures the output of the `startup-configuration` skill for this project. It is the canonical reference for the project's governance posture. Every other skill reads it to determine the level at which to operate.

Update this file (and bump the date) if any of the parameters change.

## Configuration

| Gate              | Selection | Agent Team Activated |
| ----------------- | --------- | -------------------- |
| Security Posture  | PUBLIC | Basic Security Agent |
| AI Governance     | ENHANCED | AI Code Specialist |
| Deployment        | Azure Static Web Apps (free tier) + Cloudflare CDN | Cloud Security Specialist |
| Compliance        | GDPR, WCAG AA | Data Protection Specialist, Accessibility Specialist |
| Team Experience   | INTERMEDIATE | Standard guidance with explanations |

## Activated Specialist Team

- Basic Security Agent (PUBLIC posture - marketing website)
- AI Code Specialist (ENHANCED governance - professional brand site, all AI-generated code tagged and reviewed)
- Cloud Security Specialist (Azure Static Web Apps + Cloudflare deployment)
- Data Protection Specialist (GDPR compliance for UK/EU visitors, contact form data handling)
- Accessibility Specialist (WCAG AA compliance requirement per project brief)

## Compliance Frameworks In Scope

- **GDPR:** Applicable for UK/EU users. Contact form and email capture require lawful basis (consent), privacy policy, and secure handling. No cookies beyond essential.
- **WCAG AA:** Accessibility requirement per project brief. Navy-on-cream contrast validated, keyboard navigation, semantic HTML, meaningful alt text, focus states, reduced-motion support.
- **ISO 42001 (AI Governance):** All AI-generated code tagged with Co-authored-by marker, reviewed before commit, documented in _docs/ai/logs/.

## AI Tools In Use

- **Tier 1 (approved):** Claude Code (Factory DROID edition) - primary development tool
- **Tier 2 (conditional):** None currently
- **Tier 3:** Prohibited - no third-party AI tools without explicit approval

## Notes

- This is a fully static site (Next.js static export) - no server-side rendering, no database, no authentication
- Single dynamic surface: contact form and email capture (either Azure Functions API or external service like Formspree)
- Shopify Buy Buttons for products - third-party script, requires security review per owasp-2025-compliance
- Premium brand site - design quality and performance are critical success factors
- Lighthouse target: 95+ across all metrics (Performance, Accessibility, Best Practices, SEO)
- All copy provided in project brief is approved; implementation may tighten but not inflate

## Change Log

| Date | Change | Author |
| ---- | ------ | ------ |
| 2026-07-18 | Initial configuration | Claude Code Agent |
