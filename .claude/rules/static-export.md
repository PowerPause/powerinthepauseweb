---
paths: ["next.config.*", "app/**", "components/**", "middleware.ts", "staticwebapp.config.json", ".github/workflows/**", "api/**"]
---
# Scoped Rule: Static Export Hard Constraint
<!-- Relocated from AGENTS.md Section 3 (v1.6.x) - CC edition -->

`next.config.mjs` MUST contain: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.

FORBIDDEN (no server exists at runtime; reject any spec or implementation introducing them):
- Server Actions (`'use server'`), Route Handlers (`app/api/*` in Next.js itself)
- SSR / `dynamic = 'force-dynamic'` / ISR revalidation
- Middleware (`middleware.ts`)
- `next/image` without `unoptimized`
- Runtime environment variables (all `NEXT_PUBLIC_*` values bake in at build time)
- `headers()`/`redirects()` in next.config - they DO NOTHING under static export; headers belong
  to the Cloudflare Worker (or staticwebapp.config.json - one canonical source only, per ADR)

Dynamic behaviour has exactly two permitted homes:
1. Client-side JavaScript islands (forms, menus, animations, fetch to external APIs)
2. Azure SWA managed Functions (`/api` at repo root - Azure Functions, NOT Next.js route handlers)

CSP under static export: no per-request nonces are possible; use 'unsafe-inline' for script-src or
precomputed hashes, and record the trade in an ADR.

Static purity check (run before any completion claim):
`grep -rn "use server\|force-dynamic\|middleware" app/ components/` must return nothing.
