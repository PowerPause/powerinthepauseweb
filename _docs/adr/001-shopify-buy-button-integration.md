# ADR-001: Shopify Buy Button Integration

**Status:** Accepted  
**Date:** 2026-07-18  
**Deciders:** Development team, client (Katie Cooper)

---

## Context

The Power In The Pause® website requires e-commerce capability to sell the
Activation Deck (and future products). The site is a statically exported
Next.js application hosted on Azure Static Web Apps. There is no backend or
server-side runtime available.

Shopify provides a client-side Buy Button JS SDK that can embed a purchase
flow directly in any webpage without a backend, using a read-only Storefront
API access token. This is Shopify's documented approach for headless storefronts
and static sites.

---

## Decision

Adopt the Shopify Buy Button JS SDK loaded via `next/script` with
`strategy="lazyOnload"`.

- The SDK is loaded from Shopify's own CDN:
  `https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js`
- The component gracefully degrades to a direct product link when the
  Storefront API token is not yet configured.
- Initialization is guarded by a `useRef` flag to prevent double-initialization
  in React StrictMode or concurrent renders.

---

## OWASP Top 10 (2025) Review

### A01 — Broken Access Control
Not applicable. The Storefront API token is a **public read-only** credential
by Shopify's design. It cannot create orders, access customer data, or perform
admin operations. No privileged access is granted client-side.

### A02 — Cryptographic Failures
The SDK communicates exclusively over HTTPS. The Storefront API token is a
short-lived, read-only token that is safe to expose in client-side code per
Shopify's documented security model. No sensitive cryptographic material is
involved.

### A03 — Injection
The `containerId` prop is hardcoded at the call site
(`"shopify-activation-deck"`) and is never derived from user input. The SDK
mounts into a DOM element identified by that id. There is no string
interpolation into HTML or SQL. No injection risk.

### A04 — Insecure Design
The SDK loads with `strategy="lazyOnload"` (after the page is interactive),
preventing it from blocking the initial render or critical resources. If the
SDK fails to load, the component catches the error silently and the direct
product link (rendered by the same component as fallback) remains accessible.
Resilience is designed in.

### A05 — Security Misconfiguration
The SDK is loaded from `/latest/` which makes SRI (Subresource Integrity) hash
pinning impractical — the hash would change on every Shopify SDK release.
This is an accepted risk (see Accepted Risks below).

CSP headers must be configured when `staticwebapp.config.json` is created.
Required additions:

```
script-src: https://sdks.shopifycdn.com
connect-src: https://*.myshopify.com https://sdks.shopifycdn.com
frame-src:   https://*.myshopify.com
img-src:     https://cdn.shopify.com
```

### A06 — Vulnerable and Outdated Components
The Shopify Buy Button SDK is an official, actively maintained Shopify product.
The `/latest/` URL ensures the most recent version is always served.
Dependency on a single well-known vendor with a strong security track record is
an acceptable posture for a client-side e-commerce widget.

### A07 — Identification and Authentication Failures
The Storefront API token is read-only and scoped to:
- `unauthenticated_read_product_listings`
- `unauthenticated_write_checkouts`

It cannot authenticate as a customer, access order history, or perform any
admin operation. There is no authentication bypass risk.

### A08 — Software and Data Integrity Failures
The script is loaded from the Shopify CDN (a trusted, first-party origin). No
untrusted code is executed. The SDK operates in the browser sandbox. Data
submitted through the checkout iframe is handled entirely by Shopify's
infrastructure.

### A09 — Security Logging and Monitoring Failures
The component is entirely client-side. No server logs are generated. SDK
initialization errors are caught and swallowed to avoid leaking internal detail
to the browser console in production (only silent failure + graceful fallback).

### A10 — Server-Side Request Forgery (SSRF)
Not applicable. The component runs exclusively in the browser. There is no
server-side HTTP request made on behalf of the user.

---

## CSP Considerations

When `staticwebapp.config.json` is created for Azure SWA deployment, the
Content-Security-Policy header **must** include the following additions to
support the Shopify Buy Button:

| Directive     | Required value(s)                             |
|---------------|-----------------------------------------------|
| `script-src`  | `https://sdks.shopifycdn.com`                 |
| `connect-src` | `https://*.myshopify.com https://sdks.shopifycdn.com` |
| `frame-src`   | `https://*.myshopify.com`                     |
| `img-src`     | `https://cdn.shopify.com`                     |

Failure to add these will cause the SDK to be blocked by the browser.

---

## Accepted Risks

| Risk | Justification |
|------|---------------|
| No SRI on SDK script | `/latest/` URL makes hash pinning impractical. Shopify is a trusted vendor. Risk accepted. |
| Storefront token in source code | Shopify Storefront API tokens are **by design** public read-only credentials, safe for client-side use per Shopify's own documentation. |

---

## Mitigation: Token in Environment Variable

If the repository is ever made public (e.g. open-sourced), the token **must**
be moved to an environment variable:

1. Set `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` in Azure SWA configuration.
2. Update `lib/constants.ts`:
   ```typescript
   storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? '',
   ```

Note: `NEXT_PUBLIC_` prefix means the value is still embedded in the client
bundle at build time — this does not change the public read-only nature of the
token. The benefit is keeping it out of version control.

---

## Consequences

1. The `ShopifyBuyButton` component renders a fallback direct-link when the
   token is absent. The page is never broken.
2. CSP headers must be updated before deployment (see above).
3. If Shopify changes the SDK API, the `window.ShopifyBuy` type declarations
   in `ShopifyBuyButton.tsx` must be updated.

---

## Instructions for Katie: Generating the Storefront API Token

1. Log into **Shopify Admin** → **Settings** → **Apps and sales channels**.
2. Click **"Develop apps"** → **"Create an app"**.
3. Name the app (e.g. "Website Buy Button").
4. Go to **Configuration** → **Storefront API integration**.
5. Enable the following Storefront API scopes:
   - ✓ `unauthenticated_read_product_listings`
   - ✓ `unauthenticated_write_checkouts`
6. Click **Save** then **Install app**.
7. Copy the **Storefront API access token** from the API credentials screen.
8. Provide the token to your developer to add to `lib/constants.ts` (or the
   Azure SWA environment variable `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN`).

---

## References

- [Shopify Buy Button SDK documentation](https://shopify.dev/docs/api/buy-button)
- [Shopify Storefront API authentication](https://shopify.dev/docs/api/storefront/latest/getting-started)
- [OWASP Top 10 2025](https://owasp.org/www-project-top-ten/)
- [Azure Static Web Apps environment variables](https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings)
