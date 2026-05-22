---
name: optin-funnel
description: Build a 2-page lead-generation opt-in funnel that grows an email list with a free lead magnet. Trigger phrases include "build an opt-in funnel", "squeeze page for the lead magnet", "free PDF download page", "list-building funnel", "email capture funnel", "free training opt-in". Use for cold-to-warm traffic where the only ask is an email in exchange for a high-value free asset (PDF, checklist, mini-course, video, template, swipe file). No price; the conversion event is the email submit. Build the page in Lovable, Framer, or Next.js for Vercel hosting. Skip if asking for offer design, lead magnet content, or voice work, defer to launchmap-offer, launchmap-lead-magnet, or magnetic-story.
---

# Opt-In Funnel

A two-page lead-generation funnel: squeeze page captures the email, thank-you page delivers the asset and offers the next step. The simplest, highest-volume entry point in any value ladder.

## When to use

1. Building or regrowing an email list from cold or warm traffic (paid ads, organic social, podcast mentions).
2. Front end of a webinar, challenge, or tripwire funnel where the lead magnet is the entry ramp.
3. Lead capture for a pillar content asset (mini-course, swipe file, calculator, template pack).
4. Quiz, event, or partner-promo opt-in where the only ask is the email.
5. Retargeting offer for warm video viewers who have not yet given an email.

Price band: free. Traffic temperature: cold to warm. Conversion event: email submit.

## When NOT to use

- The offer itself needs design, stack, or pricing work, defer to `launchmap-offer` or `grand-slam-offer-architect`.
- The lead magnet content does not exist yet, defer to `launchmap-lead-magnet`.
- Page copy needs voice, story, or hook craft beyond a template fill, defer to `magnetic-story` or `cris-vinson-storybank`.
- Building a webinar SCRIPT, defer to `expert-secrets-perfect-webinar`.
- Designing the underlying training, workshop, or challenge curriculum, defer to `training-designer`.
- Selling at first click ($7 or higher), use `tripwire-funnel` instead.
- Driving signups into a community group, use `group-funnel` instead.
- Multi-day daily challenge sequence, use `challenge-funnel` instead.

## The stack defaults

- Page build: Lovable (preferred for fast iteration with HTML and Tailwind), Framer (preferred for polish and CMS), or Next.js with Tailwind on Vercel for custom builds.
- Forms: GoHighLevel form embed on the main location `[GHL_LOCATION_ID]`. POST a copy to n8n on the VPS via webhook for downstream automation (Slack ping, enrichment, tagging).
- Email and SMS delivery: GHL workflows. Welcome email fires on tag add. SMS only if the contact is in a pre-consented list, and never with a URL.
- Tracking: Meta Pixel and GA4 on every page. Use the `analytics-setup` skill once installed for the full event map. At minimum: PageView on load, Lead on form submit (server-side via GHL webhook so iOS does not eat the conversion).
- Domains: keep GHL-hosted forms on the GHL subdomain. Custom domains route through Vercel with a CNAME to the page host. SPF, DKIM, and DMARC must be live on the sending domain before the welcome email fires.
- Lead magnet delivery: file lives in S3 or GHL file storage with a signed link in the email plus an inline link on the thank-you page. Never rely on email alone.

## Page structure

### Page 1: Squeeze Page

Single-column, no nav. Above-the-fold must contain headline, subhead, asset visual, form, and one social-proof element.

| Block | Target | Notes |
|---|---|---|
| Headline (H1) | 6 to 12 words, under 70 characters | Benefit-led, names the outcome the asset unlocks |
| Subhead | 1 sentence, 12 to 20 words | Specifies what is inside and who it is for |
| Asset visual | 1 image | Mockup of the PDF, checklist, video frame, or device screen |
| Bullet stack | 3 to 5 bullets, 6 to 12 words each | Each bullet is one outcome, not one feature |
| Form | Email only by default | Add first name only if it powers personalization downstream |
| CTA button | 3 to 6 words | First-person voice, e.g. "Send me the playbook" |
| Privacy line | 1 short sentence | Plain language, no legalese |
| Social proof | 1 element | Subscriber count, logo strip, or one short quote |

### Page 2: Thank-You Page

| Block | Target | Notes |
|---|---|---|
| Confirmation hero | 1 line | "Your [asset name] is on its way" plus animated check |
| Inline delivery | 1 button | Direct download link visible immediately, no email wait |
| Email-confirm note | 1 line | "We also sent it to [email]. Check spam if it does not arrive in 5 minutes." |
| Next-step CTA | 1 card | Tripwire, group invite, calendar link, or content piece |
| Share row | 2 buttons | X and copy-link, prefilled message |

## Conversion essentials

- One headline, one promise, one CTA. Cut every link or button that is not the primary form.
- Form above the fold on desktop and mobile. No scroll required to see the email field.
- Asset visual within 200 pixels of the form. The eye must associate the picture with the action.
- Social proof in the form card itself, not parked at the bottom of the page.
- Privacy reassurance inside the form card, not as a footer link.
- Mobile load under 2.5 seconds on 4G. Compress hero image to WebP under 80 KB.
- Form submit fires both the GHL webhook and the n8n VPS webhook so a single platform outage does not lose the lead.
- Welcome email queued to fire within 60 seconds. Subject line names the asset, not the brand.

## Process

1. Intake: confirm lead magnet name, audience, primary outcome, traffic source, and downstream offer. If any of these are missing, pause and ask Cris before designing.
2. Confirm GHL location (main vs Fast Track) before touching any form, automation, or contact data. Default assumption is wrong; ask.
3. Wireframe the squeeze page block-by-block in plain text. Get sign-off before writing copy.
4. Write copy in The voice constraints: English only, no em dashes, no Tagalog, defensible numbers only ($10M+ revenue, 1,000+ trained).
5. Build in Lovable or Framer. Embed the GHL form. Wire the webhook to n8n.
6. QA pass: mobile-first render check, form submit end-to-end with a test email, welcome email arrives within 60 seconds, Meta Pixel fires Lead event, GA4 records the conversion.
7. Drip plan: never blast more than 10 contacts at once. Use the GHL workflow stagger (1 send per 30 to 60 seconds) for any outbound that follows the opt-in.
8. Ship: verify SSL, OG image, favicon, 404 page, and noindex on the thank-you page if the asset URL must stay private.

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish in any outbound copy.
- No em dashes anywhere in the page or follow-up. Use commas, periods, or colons. Rewrite if a dash sneaks in.
- No URLs in any SMS. Move the link to email or WhatsApp, or instruct the recipient to check email.
- No auto-send to real contacts. Always draft the welcome email, the post-opt-in SMS, and the thank-you page copy for Cris to approve before any send.
- Drip outbound at 1 message per 30 to 60 seconds for any list larger than 10 contacts. Confirm cadence with Cris before firing.
- Alice intro pattern for any outreach that follows the opt-in: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event or asset]." Then the personalized line.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never quote the older inflated $100M+ or 1,500+ figures.
- Voice and storytelling work belongs in `magnetic-story` and `cris-vinson-storybank`. Pull from those, do not freestyle.

## Anti-patterns

- Never add a navigation menu to the squeeze page.
- Never put more than one CTA on the squeeze page.
- Never collect phone number on a free opt-in unless SMS is the primary delivery channel and consent is explicit.
- Never rely on email alone for lead-magnet delivery. Always show the inline download.
- Never use a stock photo of a "happy person at a laptop" as the hero image.
- Never write a headline about the lead magnet itself ("Get my free PDF"). Write the headline about the outcome the PDF unlocks.
- Never auto-redirect from squeeze to thank-you before the form submit completes server-side.
- Never use em dashes in copy, code comments, or this skill itself.
- Never send a follow-up SMS that contains a URL.
- Never quote the inflated $100M or 1,500-trained credential numbers.

## Templates

### HTML and Tailwind skeleton (paste into Lovable)

See `templates/squeeze-page.html` and `templates/thank-you.html` in this skill folder for the full source pulled from the funnel-architect base. The skeleton below is the minimum viable opt-in card.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Outcome Headline] | [Brand]</title>
  <meta name="description" content="[12 to 18 word benefit promise]" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans">
  <main class="min-h-screen flex items-center justify-center px-4 py-12">
    <section class="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
      <p class="text-xs font-semibold tracking-widest text-indigo-600 mb-3">FREE [ASSET TYPE]</p>
      <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-3">[Outcome Headline]</h1>
      <p class="text-slate-600 mb-6">[One-sentence subhead naming who it is for and what is inside.]</p>
      <img src="[asset-mockup.webp]" alt="[Asset name] preview" class="mx-auto mb-6 max-h-48" />
      <ul class="text-left space-y-2 mb-6">
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 1]</span></li>
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 2]</span></li>
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 3]</span></li>
      </ul>
      <form action="[ghl-form-endpoint]" method="POST" class="space-y-3">
        <input type="email" name="email" required placeholder="Your best email"
               class="w-full rounded-lg border border-slate-300 px-4 py-3" />
        <button type="submit"
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-3">
          [Send me the playbook]
        </button>
        <p class="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
      </form>
      <p class="text-xs text-slate-400 mt-6">Joined by [10,000]+ [audience].</p>
    </section>
  </main>
</body>
</html>
```

### Form field schema (mapped to GHL custom fields)

| Field name | Type | Required | GHL custom field | Notes |
|---|---|---|---|---|
| `email` | email | yes | (standard) | Primary key |
| `first_name` | text | optional | (standard) | Only collect if used in welcome email merge |
| `lead_magnet_name` | hidden | yes | `cf_lead_magnet` | Tags the contact for routing |
| `traffic_source` | hidden | yes | `cf_utm_source` | UTM passthrough |
| `campaign_id` | hidden | yes | `cf_utm_campaign` | UTM passthrough |
| `consent_marketing` | checkbox | yes if EU traffic | `cf_consent_marketing` | Default unchecked |

### Thank-you page outline

1. Success bar: green strip, "You're in."
2. Hero: "Your [Asset Name] is on its way to [email mask]."
3. Inline delivery: prominent button to the signed asset URL.
4. Spam-folder line: "If you do not see it in 5 minutes, check Promotions or Spam."
5. Next-step card: pick ONE of: tripwire offer, calendar link, group invite, content piece.
6. Share row: X share with prefilled text, copy-link button.
7. Footer: brand mark, contact email, privacy, terms.

### Sample copy block in The voice constraints

```
Eyebrow: FREE PLAYBOOK

Headline:
The 7-step launch plan that took me from zero to my first $10K month.

Subhead:
For coaches and consultants who have an offer, an audience, and zero
patience for fluff. Built and battle-tested across 1,000 trained operators.

Bullets:
+ The exact ad-to-offer sequence I use today
+ The DM script that books calls without pitching
+ The pricing math behind a 30 percent close rate

CTA: Send me the playbook
Privacy: No spam. One unsubscribe click.
Proof: Used by 1,000+ founders across 14 industries.
```

No em dashes. English only. Defensible numbers. Cris-voice ready.
