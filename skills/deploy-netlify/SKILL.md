---
name: deploy-netlify
description: Ship a built funnel page or static site to Netlify. Use when Use "deploy to Netlify", "push this site to Netlify", "set up Netlify forms", "add a Netlify redirect", or "wire a custom domain on Netlify". Netlify is a secondary deploy target; Vercel is the default for funnel pages and Lovable exports. Reach for Netlify only when forms, edge functions, or an existing Netlify project make it the right fit. Skip if the request is to build the page, write copy, or pick the funnel type. Defer to funnel page-builder skills, launchmap-* for strategy, or magnetic-story for copy.
---

# Deploy to Netlify

Netlify is the secondary host. Use it for sites that already live there, for built-in form handling without a backend, or when a client requires it. Default to Vercel for new projects.

## When to use

- A site is already on Netlify and needs a redeploy or env change.
- Need built-in form handling (Netlify Forms) without standing up an endpoint.
- Need split testing or branch deploys with Netlify's UI.
- Adding a custom domain (subdomain or apex) to an existing Netlify project.
- Adding redirect rules via `netlify.toml` or `_redirects`.

## When NOT to use

- New funnel with no existing Netlify ties. Use deploy-vercel.
- Page not built. Use the relevant funnel page-builder skill.
- Strategy not defined. Use launchmap or launchmap-offer.
- Copy not written. Use magnetic-story.
- Pure DNS work, no Netlify deploy. Use dns-management.

## The stack defaults

- **Primary host: Vercel.** Lovable exports and Next.js builds default to Vercel. Choose Netlify only for a specific reason (existing project, Netlify Forms, client requirement).
- **Domains and GHL coexistence.** Many apex domains are served by GHL. Before changing nameservers or apex DNS, confirm whether GHL is still serving the domain. If GHL is live, route a subdomain (e.g., `[YOUR_DOMAIN]`) to Netlify via CNAME and leave the apex on GHL until the GHL page is decommissioned.
- **Env vars.** Never commit `.env`. Use `netlify env:set` per environment. Required keys for funnels: GHL API token, Stripe keys, GA4 measurement ID, Meta Pixel ID, any webhook secrets.
- **GHL API reference.** Token in macOS Keychain. Main Location ID `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate; never touch unless Use "Fast Track" by name. Base URL `[N8N_HOST]`.
- **Automation.** Post-deploy hooks ping n8n on the VPS via the Claude SSH wrapper pattern, not the Anthropic node.

## Process

1. **Confirm scope.** Which site, which environment (deploy preview vs prod), custom domain in this run yes/no. If apex is on GHL, default to subdomain.
2. **Install and auth.** `npm install -g netlify-cli`, then `netlify login` (browser flow). Verify with `netlify status`.
3. **Init or link.** From the project directory: `netlify init` (new) or `netlify link` (existing).
4. **Set env vars BEFORE first prod deploy.** `netlify env:set KEY value --context production`. Repeat for `deploy-preview` and `branch-deploy` as needed.
5. **Deploy preview, verify, then promote.** `netlify deploy --dir=.` builds a draft URL. Open it. Confirm forms, copy, pixels. Then `netlify deploy --dir=. --prod`.
6. **Add custom domain.** Site settings → Domain management → Add custom domain. Add a CNAME for subdomain (preferred), or A record for apex (only after GHL is decommissioned). See dns-management for provider quirks.
7. **Verify SSL and propagation.** `dig <domain> +short`, then `curl -I https://<domain>`. Wait for Let's Encrypt cert (usually under an hour).

## Brand voice rules (always apply)

- No URLs in SMS. Send deploy URLs by email or WhatsApp instead.
- No auto-send to contacts. Draft any deploy-announcement for The approval first.
- English only.
- No em dashes in client-facing copy.
- Always confirm GHL location before any action touching GHL (main vs Fast Track).

## Anti-patterns

- Never change apex nameservers without confirming the existing GHL site is decommissioned.
- Never commit secrets. Always `netlify env:set`.
- Never ship to prod without the `--prod` flag. A bare `netlify deploy` is a draft.
- Never run `netlify sites:delete` without explicit confirmation in the same session.
- Never assume DNS is instant. Verify with `dig`.

## Templates and examples

### Full first-deploy command sequence

```bash
# Install + auth
npm install -g netlify-cli
netlify login
netlify status

# Init or link
cd ~/path/to/site
netlify init           # new site
# or: netlify link     # existing site

# Env vars (production context)
netlify env:set GHL_API_TOKEN "$(security find-generic-password -s ghl-api-token -w)" --context production
netlify env:set GHL_LOCATION_ID "[GHL_LOCATION_ID]" --context production
netlify env:set STRIPE_SECRET_KEY "sk_live_..." --context production
netlify env:set NEXT_PUBLIC_GA4_ID "G-..." --context production
netlify env:set NEXT_PUBLIC_META_PIXEL_ID "..." --context production

# Draft deploy
netlify deploy --dir=.

# Production deploy
netlify deploy --dir=. --prod
```

### Sample `netlify.toml`

```toml
[build]
  publish = "."
  command = "npm run build"

# Redirect www to apex
[[redirects]]
  from = "https://www.example.com/*"
  to = "https://example.com/:splat"
  status = 301
  force = true

# SPA fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Custom 404
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Cache headers
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=300"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Common redirect patterns

```
# Force HTTPS (handled by Netlify automatically, but explicit is fine)
http://example.com/*  https://example.com/:splat  301!

# Old slug to new slug
/old-page  /new-page  301

# Country split
/  /us/  302  Country=us
/  /ph/  302  Country=ph

# Proxy to API (avoid CORS in browser)
/api/*  https://[N8N_HOST]/:splat  200
```

### Netlify Forms (built-in, no backend)

```html
<form name="lead-capture" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="lead-capture">
  <p hidden><label>Don't fill this: <input name="bot-field"></label></p>
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>
```

Submissions appear under Site → Forms. To pipe into GHL, set up a Netlify form notification webhook pointing at an n8n webhook on the VPS, then have n8n create the GHL contact (confirm main vs Fast Track location first).

### Custom domain DNS records

Subdomain (preferred when apex is on GHL):

```
Type:  CNAME
Name:  apply
Value: <your-site>.netlify.app
TTL:   Auto (or 300)
```

Apex (only after GHL is decommissioned, requires ALIAS/ANAME or Netlify DNS):

```
Type:  A
Name:  @
Value: 75.2.60.5
TTL:   Auto

Type:  CNAME
Name:  www
Value: <your-site>.netlify.app
TTL:   Auto
```

### Verify after adding domain

```bash
dig [YOUR_DOMAIN] +short
curl -I https://[YOUR_DOMAIN]
# Expect 200 OK and a valid Let's Encrypt cert
```
