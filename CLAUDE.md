# CLAUDE.md - Next.js Static Export + Azure Static Web Apps + Cloudflare

**Stack:** Next.js 15+ (App Router, static export) + TypeScript (strict) + Tailwind CSS + Azure Static Web Apps (free tier) + Cloudflare (DNS/CDN/edge)
**Last Updated:** [Set at bootstrap]
**Template Source:** master library `templates/next-static-azure/` (Claude Code edition, v1.8.0-cc)

This is the company-website architecture used by signalcoding.co.uk and tritechsearch.com. It is a STATIC site architecture: Next.js builds to flat HTML/CSS/JS, Azure Static Web Apps serves it, Cloudflare fronts it. There is NO Node server at runtime.

The static-export hard constraint is scoped in `.claude/rules/static-export.md` (loads natively on
matching paths). The v1.7 completion contract is ACTIVE in this template (ported in the CC edition):
see Section 11.

---

## Session Start Protocol

1. **Check `_docs/ai/configuration.md`** for placeholders; if present, walk Configuration Gates.
2. **Check `_docs/ai/_bootstrap-conflicts.md`** for unresolved bootstrap conflicts.
3. **Read `_docs/architecture-starter.md`** for stack patterns.
4. **Check `_docs/ai/specs/`** for active specs. If the user has a spec from another folder, ask them to copy it in here first.
5. **Check `_docs/ai/lessons/`** for lessons carried from prior projects on this stack.
6. **Announce framework activation** per v7.2.0 Section 15.

---

## 1. Active Skills (`.claude/skills/` + `~/.claude/skills/`, auto-invoked by description)

- `startup-configuration` - completed when `_docs/ai/configuration.md` is filled in
- `gate-sequence` - active before every new feature spec
- `ai-code-governance` - active on every AI-touching commit
- `owasp-2025-compliance` - reduced surface (no server), but applies to any Functions API and to third-party script hygiene
- `security-headers` - active before every production deploy. **IMPORTANT: headers are set in `staticwebapp.config.json`, NOT `next.config.js`** - there is no Next server at runtime to apply them
- `package-supply-chain-safety` - active whenever dependencies change (use `safe-npm-install.sh`)
- `perspective-alignment` - continuous
- `delegation-routing` - active on every sub-agent delegation
- `safe-database-operations` - NOT APPLICABLE (no database) unless a Functions API adds one later
- `dotnet-stack-enforcement` - NOT APPLICABLE

## 2. Subagents (`.claude/agents/` + `~/.claude/agents/`)

- `coding-agent` (Sonnet) - default for pages, components, content work
- `coding-agent-cheap` (Haiku) - mechanical work: new content pages from an established pattern, copy changes, metadata updates
- `coding-agent-security` (Sonnet) - any `staticwebapp.config.json` change, any Functions API work, any third-party script or analytics addition
- `coding-agent-opus` (Opus) - novel design systems, complex interactive components
- `test-writer` / `test-writer-cheap` - red phase
- `security-reviewer` - verify phase; `security-reviewer-opus` if posture is COMPREHENSIVE+

## 3. The Hard Constraint: Static Export

`next.config.js` MUST contain:

```javascript
const nextConfig = {
  output: 'export',        // Static HTML export - no Node server
  trailingSlash: true,     // Matches Azure SWA routing and existing site conventions
  images: { unoptimized: true }  // next/image optimisation needs a server; none exists
};
```

Because there is no server, the following Next.js features are FORBIDDEN in this project. The orchestrator must reject any spec or implementation that introduces them:

- Server Actions (`'use server'`)
- Route Handlers (`app/api/*` in Next.js itself)
- SSR / `dynamic = 'force-dynamic'` / ISR revalidation
- Middleware (`middleware.ts`)
- `next/image` without `unoptimized`
- Runtime environment variables (all `NEXT_PUBLIC_*` values are baked in at build time)

Dynamic behaviour has exactly two permitted homes:

1. **Client-side JavaScript** (forms, menus, animations, fetch to external APIs)
2. **Azure Static Web Apps managed Functions** (`/api` directory at repo root - Azure Functions, NOT Next.js route handlers) for things like contact-form submission

## 4. Stack Conventions

### Next.js / Content

- App Router, TypeScript strict, Tailwind CSS
- Content lives in code or markdown/MDX - no CMS in the base architecture
- Page pattern: marketing pages are Server Components rendered at build time; interactivity is isolated into small `'use client'` islands
- Shared components in `components/`; one component library, used everywhere (see UI Consistency rule in Section 7)
- SEO: every page exports `metadata`; `sitemap.ts` and `robots.ts` generate at build; canonical URLs use the `www.` host with trailing slash
- External images (e.g. Unsplash) referenced by URL with explicit dimensions

### Azure Static Web Apps

- Free tier; deployed via GitHub Actions (`Azure/static-web-apps-deploy` action created automatically when the SWA resource links the repo)
- `staticwebapp.config.json` at repo root owns: security headers, redirects, custom 404, MIME types, and any `/api` route auth rules
- PR preview environments come free with SWA - use them for review before merge
- Contact form: SWA managed Functions in `/api` (Node), or an external form service; either way the endpoint is the ONLY dynamic surface and gets `coding-agent-security`

### Cloudflare (in front)

- DNS proxied (orange cloud), SSL/TLS mode **Full (strict)**
- `www` canonical; apex redirects to `www` (Cloudflare redirect rule or SWA config - pick one, document in ADR, do not do both)
- Cache: respect SWA's headers; after deploy, purge Cloudflare cache or use cache-busting asset hashes (Next does this for `/_next/static` automatically; HTML pages may need a purge)
- Do not enable Cloudflare features that rewrite HTML (Rocket Loader, Auto Minify) without testing - they can break hydration

## 5. Validation Commands

| Command Type    | Command |
|-----------------|---------|
| Type check      | `npx tsc --noEmit` |
| Lint            | `npm run lint` |
| Build (the critical one) | `npm run build` - must succeed AND produce `out/` |
| Static purity check | `grep -rn "use server\|force-dynamic\|middleware" app/ components/ - must return nothing` |
| Link integrity  | `npx linkinspector ./out` or equivalent local link checker after build |
| Format          | `npx prettier --check .` |

## 6. Mandated Test Categories (v1.6.1, TriTech lesson)

The red phase for this stack MUST include, where relevant to the spec:

1. **Build-output tests:** the static export succeeds and the expected routes exist in `out/` (a missing `generateStaticParams` on a dynamic route fails silently otherwise)
2. **Static purity:** no server-only features introduced (the grep above, automated in CI)
3. **Component tests** for any interactive island (Vitest + React Testing Library)
4. **Functions API tests** for any `/api` endpoint (input validation, error paths, no secrets in responses)

After every production deploy: verify securityheaders.com grade (target A) and spot-check Cloudflare is serving the new build.

## 7. UI Consistency Rule (TriTech lesson - establish BEFORE building pages)

Before the first page is built, create and get approval on:

1. Tailwind design tokens (`tailwind.config.ts`: colours, spacing, type scale)
2. The core component set (Button, Card, SectionHeader, Badge/TrustStrip, Footer, Nav) in `components/ui/`
3. One template page demonstrating correct usage

Only then build pages, and pages use ONLY the component set. A styling audit across 46 pages cost TriTech 3-4 hours; this rule is why.

## 8. Four-Phase Loop and Conformance

Per v7.2.0 Section 1.3. Additionally (v1.6.1): architectural conformance is enforced by the completion contract (Section 11): the static purity check and build-output evidence are gate criteria, and the fresh-context evaluator checks the diff against this file and the static-export rule at task-group exit.

Pattern-shaped defects (an issue that could exist in multiple pages/components) trigger the comprehensive-audit rule: stop, audit the whole codebase with parallel subagents, fix once. Do not fix incrementally.

## 9. Delegation Routing

Per v7.2.0 Section 5. Stack-specific:

- New content page from an established pattern → `coding-agent-cheap`
- New component or design work → `coding-agent`; novel design system → `coding-agent-opus`
- `staticwebapp.config.json`, headers, redirects, Functions API, third-party scripts → `coding-agent-security`
- Bulk content/metadata updates across many pages → parallel `coding-agent-cheap` batch (5-10 agents, 2-4 pages each, build after each batch)

## 10. References

- Master library: `C:\Sites\_AIAgent-CC-v1.8.0\` (synced to `~/.claude/`; adjust if the library moves)
- Sibling sites on this architecture: signalcoding.co.uk, tritechsearch.com - reuse their conventions where sensible
- Project configuration: `_docs/ai/configuration.md`
- Architecture starter: `_docs/architecture-starter.md`
- ADRs: `_docs/adr/`
- Lessons: `_docs/ai/lessons/`

## 11. Completion Contract (CC edition - mechanical)

- Task group start: `scripts/new-task-group.sh <TG-ID> "<title>"`; criteria added FAIL-first with
  spec IDs (EARS template). No pending state. A criterion blocked on an external dependency may be
  set BLOCKED only with a `disposition` recording the human-agreed reason and plan (see verify/README).
- FAIL -> PASS only with evidence in `_docs/ai/verify/evidence/` (*.png, *.log, *.testresults.txt,
  *.http.txt). For this stack the canonical evidence set: build log showing `out/` produced,
  static-purity grep output, securityheaders.com screenshot post-deploy, page screenshots for UI criteria.
- `scripts/verify-gate.sh` must exit zero before any completion claim (hooks + pre-commit enforce).
- All criteria PASS -> `scripts/run-evaluator.sh <TG-ID> <spec-file>`; NEEDS_WORK findings open the
  next cycle verbatim; three strikes halts and escalates.

## 12. Remote Work (Claude Code edition)

Sessions continue from a phone via Remote Control (`/rc`, or enable for all sessions in `/config`);
the session runs locally with hooks, rules and the gate fully active - the phone is a viewport.
Enable push notifications so permission prompts and long-build completions reach the phone.
