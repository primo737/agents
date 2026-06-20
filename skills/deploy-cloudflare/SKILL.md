---
name: deploy-cloudflare
description: Ship a built funnel page or static site to Cloudflare Pages via Wrangler. Use when Use "deploy to Cloudflare Pages", "push this to Cloudflare", "I need global edge", "set up Wrangler", "add a Worker", or "wire a custom domain on Cloudflare". Cloudflare is a secondary deploy target; Vercel is the default for funnel pages. Reach for Cloudflare when global edge performance, Workers, or Cloudflare-managed DNS make it the right fit. Skip if the request is to build the page, write copy, or pick the funnel type. Defer to funnel page-builder skills, launchmap-* for strategy, or magnetic-story for copy.
---

# Deploy to Cloudflare Pages

Cloudflare Pages is the secondary host. Use it for global edge performance, Workers integration, or when a domain is already on Cloudflare DNS. Default to Vercel for new projects.

## When to use

- Funnel needs global edge speed (audience spans many regions).
- A Cloudflare Worker is part of the architecture (e.g., edge auth, A/B routing, geo redirects).
- The domain is already on Cloudflare DNS and you want everything in one console.
- Adding a custom domain to an existing Pages project.
- Direct upload of a built `dist/` from Lovable, Vite, or Next.js static export.

## When NOT to use

- New funnel with no specific reason to choose Cloudflare. Use deploy-vercel.
- Page not built. Use the relevant funnel page-builder skill.
- Strategy not defined. Use launchmap or launchmap-offer.
- Copy not written. Use magnetic-story.
- Pure DNS work, no Pages deploy. Use dns-management.

## The stack defaults

- **Primary host: Vercel.** Cloudflare is for edge, Workers, or existing-CF-DNS cases. Don't reflex-deploy here.
- **Domains and GHL coexistence.** Many apex domains are served by GHL. Before changing nameservers or apex DNS, confirm whether GHL is still serving the domain. If GHL is live, route a subdomain (e.g., `[YOUR_DOMAIN]`) to Pages via CNAME and leave the apex on GHL until the GHL page is decommissioned.
- **Env vars.** Never commit `.env`. Use `wrangler pages secret put` (production) or the Pages dashboard. Required keys for funnels: GHL API token, Stripe keys, GA4 measurement ID, Meta Pixel ID, webhook secrets.
- **GHL API reference.** Token in macOS Keychain. Main Location ID `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate; never touch unless Use "Fast Track" by name. Base URL `[N8N_HOST]`.
- **Automation.** Post-deploy hooks ping n8n on the VPS via the Claude SSH wrapper pattern, not the Anthropic node.

## Process

1. **Confirm scope.** Which project, preview vs prod, custom domain in this run yes/no, and any Worker bindings. If apex is on GHL, default to subdomain.
2. **Install and auth.** `npm install -g wrangler`, then `wrangler login` (browser flow). Verify with `wrangler whoami`.
3. **Build the site.** `npm run build` (or equivalent). Confirm the output directory (`dist/`, `build/`, `out/`, or `.`).
4. **Set secrets BEFORE first prod deploy.** For each key: `wrangler pages secret put KEY_NAME --project-name=<project>`. For non-secret env vars use the dashboard or `[vars]` in `wrangler.toml`.
5. **Deploy preview, verify, then promote.** `wrangler pages deploy <dir> --project-name=<project>` creates a preview deployment. Open the preview URL, verify forms, copy, pixels. Then redeploy to the production branch (typically `main`) with `--branch=main`.
6. **Add custom domain.** Pages project → Custom domains → Set up a domain. Cloudflare prompts for the CNAME. If the domain is already on Cloudflare DNS, the record is added automatically.
7. **Verify SSL and propagation.** `dig <domain> +short` should return Cloudflare IPs. `curl -I https://<domain>` should return 200 with a valid cert. Universal SSL is automatic; Full (strict) is recommended if there's a backend origin.

## Brand voice rules (always apply)

- No URLs in SMS. Send deploy URLs by email or WhatsApp instead.
- No auto-send to contacts. Draft any deploy-announcement for The approval first.
- English only.
- No em dashes in client-facing copy.
- Always confirm GHL location before any action touching GHL (main vs Fast Track).

## Anti-patterns

- Never change apex nameservers without confirming the existing GHL site is decommissioned.
- Never commit secrets. Always `wrangler pages secret put`.
- Never ship to prod without `--branch=main` (or whatever the production branch is set to). Default `wrangler pages deploy` is a preview.
- Never delete a Pages project or domain without explicit confirmation in the same session.
- Never assume DNS is instant. Verify with `dig`.
- Never enable "Proxied" (orange cloud) on a CNAME that points to a hostname outside Cloudflare without checking that the cert chain still works.

## Templates and examples

### Full first-deploy command sequence

```bash
# Install + auth
npm install -g wrangler
wrangler login
wrangler whoami

# Build
cd ~/path/to/funnel
npm run build      # or: vite build, next build && next export, etc.

# Create the Pages project (one-time)
wrangler pages project create my-funnel --production-branch=main

# Set secrets (production)
wrangler pages secret put GHL_API_TOKEN --project-name=my-funnel
wrangler pages secret put STRIPE_SECRET_KEY --project-name=my-funnel
wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=my-funnel

# Preview deploy
wrangler pages deploy dist --project-name=my-funnel

# Production deploy (promotes to production branch)
wrangler pages deploy dist --project-name=my-funnel --branch=main
```

### Sample `wrangler.toml` (for a Pages project with a Worker function)

```toml
name = "my-funnel"
compatibility_date = "2026-01-01"
pages_build_output_dir = "dist"

[vars]
NEXT_PUBLIC_GA4_ID = "G-XXXXXXX"
NEXT_PUBLIC_META_PIXEL_ID = "1234567890"
GHL_LOCATION_ID = "[GHL_LOCATION_ID]"

# Bind a KV namespace for edge caching
# [[kv_namespaces]]
# binding = "CACHE"
# id = "..."

# Bind a D1 database
# [[d1_databases]]
# binding = "DB"
# database_name = "leads"
# database_id = "..."
```

### `_headers` file (Cloudflare Pages cache + security)

```
/*.html
  Cache-Control: public, max-age=300

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
```

### `_redirects` file

```
# Force apex
https://www.example.com/*  https://example.com/:splat  301!

# Old slug to new slug
/old-page  /new-page  301

# SPA fallback
/*  /index.html  200
```

### Custom domain DNS records

Subdomain (preferred when apex is on GHL):

```
Type:    CNAME
Name:    apply
Target:  <project>.pages.dev
Proxy:   On (orange cloud)
TTL:     Auto
```

Apex (only after GHL is decommissioned, on Cloudflare DNS):

```
Type:    CNAME (Cloudflare flattens this at the apex)
Name:    @
Target:  <project>.pages.dev
Proxy:   On (orange cloud)
TTL:     Auto
```

### Verify after adding domain

```bash
dig [YOUR_DOMAIN] +short
curl -I https://[YOUR_DOMAIN]
# Expect 200 OK with Cloudflare cf-ray header and a valid cert
```
