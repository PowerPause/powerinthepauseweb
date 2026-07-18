# Architecture Starter - Next.js Static + Azure Static Web Apps + Cloudflare

The company-website architecture (signalcoding.co.uk, tritechsearch.com lineage). Customise as the project evolves.

## 1. Runtime Architecture

```
Visitor
  │
Cloudflare (DNS, CDN cache, WAF, SSL Full-strict)
  │
Azure Static Web Apps (free tier)
  ├── Static assets from out/ (Next.js static export)
  └── /api → managed Azure Functions (ONLY dynamic surface, e.g. contact form)
```

There is no Node server at runtime. Next.js exists only at build time.

## 2. Repository Layout

```
my-site/
├── app/                        # Next.js App Router (build-time only)
│   ├── layout.tsx              # Root layout, fonts, metadata defaults
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # Trailing-slash routes via trailingSlash: true
│   ├── contact/page.tsx
│   ├── sitemap.ts              # Build-time sitemap
│   └── robots.ts
├── components/
│   ├── ui/                     # Design system (Button, Card, SectionHeader...)
│   └── <feature>/
├── content/                    # Markdown/MDX content if used
├── public/                     # Logos, og-image, favicons
├── api/                        # Azure SWA managed Functions (NOT Next.js!)
│   └── contact/                # e.g. contact form handler
├── staticwebapp.config.json    # Headers, redirects, 404 - the "server config"
├── next.config.js              # output: 'export', trailingSlash, unoptimized images
└── tailwind.config.ts          # Design tokens
```

## 3. The Build and Deploy Pipeline

```
push / PR → GitHub Actions (Azure/static-web-apps-deploy)
  → npm ci
  → npm run build          (produces out/)
  → deploy out/ + api/ to SWA
  → PR: preview environment URL  |  main: production
```

Cloudflare sits in front of the production hostname. After production deploys that change HTML (not just hashed assets), purge the Cloudflare cache or set short HTML TTLs.

## 4. staticwebapp.config.json - Security Headers Live Here

Because there is no server, `next.config.js` headers do nothing in production. Set them in SWA config:

```json
{
  "globalHeaders": {
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Content-Security-Policy": "default-src 'self'; img-src 'self' https://images.unsplash.com data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'"
  },
  "responseOverrides": {
    "404": { "rewrite": "/404.html" }
  }
}
```

Tune CSP to the site's actual external dependencies (fonts, analytics, images). Verify with securityheaders.com after deploy; target grade A.

## 5. Canonical Host and Redirects

Pick ONE place for apex → www redirect (Cloudflare redirect rule recommended; SWA can also do it). Document the choice in `_docs/adr/`. All canonical/og URLs use `https://www.<domain>/` with trailing slash.

## 6. Contact Form Pattern

Two acceptable approaches; record the choice as an ADR:

**A. SWA managed Function (`/api/contact`):** Node function validates input (shared Zod schema with the client), sends via an email API (e.g. Resend/ACS Email), returns JSON. Secrets live in SWA application settings, never in the repo. Rate-limit by IP within the function; add a honeypot field client-side.

**B. External form service:** zero backend to maintain; weigh data-residency and branding.

Either way the client side is a `'use client'` island posting JSON; no Next.js server features.

## 7. Performance and SEO

- Hashed `/_next/static` assets cache forever (immutable); HTML short TTL
- Every page exports `metadata` (title, description, og, canonical)
- One `<h1>` per page; semantic sections; skip-link (TriTech site does this correctly)
- Images: explicit width/height to avoid CLS; compressed sources
- Lighthouse pass before launch: target 90+ across the board (static sites have no excuse)

## 8. Testing

- Vitest + RTL for interactive islands
- Build-output assertions in CI (expected routes exist in `out/`)
- Static-purity grep in CI (no `use server`, no middleware, no force-dynamic)
- Functions API: unit tests on validation and error paths
- Link checker over `out/` before release

## 9. Known Foot-Guns (read before first build)

1. **Headers in next.config.js silently do nothing** - they require a server. Use `staticwebapp.config.json`.
2. **`next/image` without `unoptimized: true` breaks the export build.**
3. **Dynamic routes need `generateStaticParams`** or they're silently absent from `out/`.
4. **`NEXT_PUBLIC_*` env vars are baked at build time** - changing them in SWA settings does nothing for the static bundle; rebuild required.
5. **Cloudflare Rocket Loader / Auto Minify can break React hydration** - leave off unless tested.
6. **Double-redirect loops** happen when both Cloudflare and SWA do apex→www; configure exactly one.
7. **Linux build agents are case-sensitive** - `Logo.svg` ≠ `logo.svg`; Windows dev machines hide this until CI fails.
8. **SWA free tier limits:** 100GB bandwidth/month, 0.5GB app size, managed Functions only (no custom Functions app). Fine for a company site; know the ceiling.
