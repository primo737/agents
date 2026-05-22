---
name: deploy-vercel
description: Ship a built funnel page or web app to Vercel. Use when Use "deploy to Vercel", "push this Lovable export live", "ship the Next.js build", "set up a custom domain on Vercel", "add an env var to the Vercel project", or "wire the funnel to [YOUR_DOMAIN]". Vercel is The primary deploy target for funnel pages, Lovable exports, and Next.js apps. Skip if the request is to build the page itself, write the copy, or pick the funnel type. Defer to funnel page-builder skills, launchmap-* for strategy, or magnetic-story for copy.
---

# Deploy to Vercel

Vercel is the default host for The funnel pages, Lovable exports, and Next.js builds. This skill covers first-time deploys, custom domains, env vars, and the GHL coexistence pattern.

## When to use

- First deploy of a Lovable export, Next.js app, Vite/React app, or static HTML to Vercel.
- Adding a custom domain (apex or subdomain) to an existing Vercel project.
- Setting or rotating environment variables on a Vercel project (GHL API key, Stripe keys, Meta Pixel ID, GA4 measurement ID).
- Promoting a preview build to production with `vercel --prod`.
- Wiring a Vercel deploy to ping n8n on the VPS post-deploy.

## When NOT to use

- Page is not built yet. Use the appropriate funnel page-builder skill first (challenge-funnel, optin-funnel, evergreen-webinar-funnel, group-funnel, product-launch-funnel).
- Strategy and offer not defined. Use launchmap or launchmap-offer.
- Copy not written. Use magnetic-story or cris-vinson-storybank.
- Picking which funnel to use. Use funnel-select.
- DNS-only changes with no Vercel deploy involved. Use dns-management.

## The stack defaults

- **Primary host: Vercel.** Lovable exports and Next.js builds default here. Use Netlify or Cloudflare Pages only when there is a specific reason (Cloudflare for global edge plus Wrangler workers; Netlify rarely).
- **Domains and GHL coexistence.** Many of The apex domains are still served by GHL funnels. Before changing nameservers or apex DNS, check whether GHL is currently serving the domain. If GHL is live, use a subdomain (e.g., `[YOUR_DOMAIN]`) routed to Vercel via CNAME, leave the apex on GHL, and migrate the apex only when the GHL page is decommissioned.
- **Env vars.** Never commit `.env`. Set per-environment vars through `vercel env add`. Document required keys: GHL API token, Stripe keys, GA4 measurement ID, Meta Pixel ID, any webhook secrets.
- **GHL API reference.** Token in macOS Keychain. Main Location ID `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate; never touch unless Use "Fast Track" by name. Base URL `[N8N_HOST]`.
- **Automation.** Post-deploy hooks should ping n8n on the VPS via the existing Claude SSH wrapper pattern (workflow `launchmap-builder-claude`), not the Anthropic node.

## Process

1. **Confirm scope.** Ask Cris: which project, which environment (preview vs prod), and whether a custom domain is part of this run. If a custom domain is involved and the apex is on GHL, default to subdomain routing.
2. **Install and auth.** `npm install -g vercel`, then `vercel login` (browser flow). Verify with `vercel whoami`.
3. **Link or init.** From the project directory, run `vercel link` to attach to an existing Vercel project, or `vercel` to create one. Vercel auto-detects Next.js, Vite, CRA, Astro, and static HTML.
4. **Set env vars BEFORE first prod deploy.** For each required key: `vercel env add KEY_NAME production` (also add to `preview` and `development` as needed). Pull locally for dev with `vercel env pull .env.local`.
5. **Deploy preview, verify, then promote.** `vercel` builds a preview URL. Open it, confirm copy, forms, and tracking pixels fire. Then `vercel --prod` for production.
6. **Add custom domain.** `vercel domains add [YOUR_DOMAIN] <project>` or use the dashboard. Vercel prints the DNS record to add (CNAME for subdomain, A `76.76.21.21` for apex). Add the record at the DNS provider; see dns-management for provider quirks.
7. **Verify SSL and propagation.** `dig [YOUR_DOMAIN] +short` should return Vercel's IP/CNAME. `curl -I https://[YOUR_DOMAIN]` should return 200 with a valid Vercel cert. Wait up to 24 hours for cert if needed.
8. **Post-deploy hook (optional).** If this deploy needs to trigger n8n (e.g., ping a workflow when a new version ships), wire a Vercel Deploy Hook URL into the n8n webhook node, and have n8n call the VPS Claude SSH wrapper for any downstream Claude work.

## Brand voice rules (always apply)

- No URLs in SMS. If a deploy URL needs to ship to a contact, send it via email or WhatsApp instead.
- No auto-send to contacts. Draft any deploy-announcement message for The approval before sending.
- English only. No Tagalog/Taglish in any deploy comms or commit messages that go to contacts.
- No em dashes in any Cris-facing copy generated around the deploy (release notes, announcement, etc.).
- Always confirm GHL location before any action that touches GHL (main vs Fast Track). Default is main; Fast Track only if Use "Fast Track" by name.

## Anti-patterns

- Never change apex nameservers without confirming the existing GHL site is decommissioned. Subdomain first, apex last.
- Never push secrets to git. Use `vercel env add`, never commit `.env`.
- Never deploy to prod without `vercel --prod`. A bare `vercel` builds a preview, not production.
- Never assume DNS propagation is instant. Always verify with `dig` and a fresh `curl -I`.
- Never run `vercel rm` or remove a domain without explicit confirmation from Cris in the same session.
- Never skip the env-var step and discover at runtime that GHL or Stripe calls fail in prod.

## Templates and examples

### Full first-deploy command sequence

```bash
# Install + auth
npm install -g vercel
vercel login
vercel whoami

# Link or create project
cd ~/path/to/funnel
vercel link            # existing project
# or: vercel           # new project (interactive)

# Env vars (repeat per key, per env)
vercel env add GHL_API_TOKEN production
vercel env add STRIPE_SECRET_KEY production
vercel env add NEXT_PUBLIC_GA4_ID production
vercel env add NEXT_PUBLIC_META_PIXEL_ID production

# Pull locally for dev
vercel env pull .env.local

# Preview deploy
vercel

# Promote to production
vercel --prod
```

### Sample `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*).html",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=300" }]
    },
    {
      "source": "/(.*).css",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*).js",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ],
  "redirects": [
    { "source": "/old-page", "destination": "/new-page", "permanent": true }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Env var checklist for a Cris funnel

| Key | Env | Source |
|---|---|---|
| `GHL_API_TOKEN` | production, preview | Keychain (main location PIT) |
| `GHL_LOCATION_ID` | production, preview | `[GHL_LOCATION_ID]` (main) |
| `STRIPE_SECRET_KEY` | production | Stripe dashboard |
| `STRIPE_PUBLISHABLE_KEY` | production, preview | Stripe dashboard |
| `STRIPE_WEBHOOK_SECRET` | production | Stripe webhook config |
| `NEXT_PUBLIC_GA4_ID` | production, preview | GA4 admin |
| `NEXT_PUBLIC_META_PIXEL_ID` | production, preview | Meta Events Manager |
| `N8N_WEBHOOK_URL` | production | n8n VPS |

### Custom domain DNS records

Subdomain (preferred when apex is on GHL):

```
Type:  CNAME
Name:  apply
Value: cname.vercel-dns.com
TTL:   Auto (or 300)
```

Apex (only after GHL is decommissioned):

```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   Auto

Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   Auto
```

### Verify after adding domain

```bash
dig [YOUR_DOMAIN] +short
curl -I https://[YOUR_DOMAIN]
# Expect 200 OK and a valid Vercel cert (issuer: Let's Encrypt)
```
