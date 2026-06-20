---
name: group-funnel
description: Build a 2-page community-growth funnel that captures email then drives the new lead into a community group on Skool, Whop, Facebook Group, Discord, Circle, or Mighty Networks. Trigger phrases include "build a group funnel", "Skool funnel", "Whop opt-in page", "Discord community signup", "Facebook group funnel", "membership opt-in", "free community signup", "paid group funnel". Use when the conversion goal is community membership growth (free or paid), with email capture as the bridge. Build the page in Lovable, Framer, or Next.js for Vercel hosting. Skip if asking for offer design, lead magnet content, or voice work, defer to launchmap-offer, launchmap-lead-magnet, or magnetic-story.
---

# Group Funnel

Two-page funnel optimized for community-membership growth. Page 1 captures email with a lead magnet. Page 2 delivers the asset and drives the new lead straight into the community group URL. Works with Skool, Whop, Facebook Groups, Discord, Circle, Mighty Networks, or any community URL.

## When to use

1. Cold or warm traffic where the primary conversion goal is group/community signups, not a sale.
2. Skool or Whop community launch where the email capture is the gate before group join.
3. Facebook Group regrowth where the page seeds the welcome question and prefills it on the group join.
4. Discord server launch with a free training as the entry token.
5. Pre-launch waitlist for a paid community with a free taste asset.

Price band: free (community is free or trial), or paid community $7 to $97/month with a free asset upfront. Traffic temperature: cold to warm. Conversion event: email submit + group-URL click.

## When NOT to use

- The community itself does not exist yet or has no offer design, defer to `launchmap-offer` or `grand-slam-offer-architect`.
- The free asset content is undefined, defer to `launchmap-lead-magnet`.
- Page copy needs voice, hook, or story craft beyond a template fill, defer to `magnetic-story` or `cris-vinson-storybank`.
- Webinar SCRIPT for the community pitch, defer to `expert-secrets-perfect-webinar`.
- Designing the community curriculum, weekly-call format, or onboarding training, defer to `training-designer`.
- The conversion goal is purely email capture with no group, use `optin-funnel` instead.
- The conversion goal is a paid digital product purchase, use `tripwire-funnel` instead.
- Multi-day daily-content sequence, use `challenge-funnel` instead.

## The stack defaults

- Page build: Lovable for first-pass speed, Framer for polish, Next.js with Tailwind on Vercel for custom builds with embedded Skool or Whop widgets.
- Forms: GoHighLevel form embed on the main location `[GHL_LOCATION_ID]` for capture and tagging. POST a copy to n8n on the VPS via webhook for downstream automation.
- Group routing: thank-you page CTA links direct to the community URL with UTM tags so Skool/Whop/Discord analytics can attribute. For Facebook Groups, prefill the group-question with the email-tag for moderator approval.
- Email and SMS: GHL workflows. Welcome email fires on tag add, includes the community URL prominently. SMS only with prior consent and never with a URL.
- Tracking: Meta Pixel and GA4 on both pages. Lead event on form submit, ViewContent on the thank-you page, custom event on community-URL click.
- Domains: GHL-hosted forms stay on the GHL subdomain. Custom domains via Vercel with CNAME.
- WhatsApp follow-up via WAHA on the VPS for any 1-to-1 community-onboarding outreach.

## Page structure

### Page 1: Opt-In Page

Single column, no nav, mobile-first.

| Block | Target | Notes |
|---|---|---|
| Top bar | 1 line | "FREE [asset type]" announcement strip |
| Eyebrow | 2 to 4 words | Audience or topic tag |
| Headline (H1) | 6 to 12 words | Outcome the asset unlocks |
| Subhead | 1 sentence, 12 to 20 words | For whom and what is inside |
| Asset visual | 1 mockup | Video card with play icon, content title, brand badge |
| Bullet stack | 4 to 5 bullets, 6 to 12 words | Each is one outcome |
| Form card | name + email | Icons inside the inputs, form headline above |
| CTA button | 4 to 7 words | First-person voice, pulse animation acceptable |
| Privacy line | 1 line | "Zero spam. Unsubscribe anytime." inside the card |
| Social proof bar | 1 row | Avatar stack + star rating + member count |

### Page 2: Thank-You Page (community-driven)

| Block | Target | Notes |
|---|---|---|
| Success bar | 1 line | Green strip, "You're in." |
| Confirmation hero | animated check + 1 line | "Your [asset name] is on its way" |
| Inline asset | 1 card | Video card with play icon, loading dots, content title |
| Community CTA card | hero block | Eyebrow + headline + 1-paragraph pitch + 4-perk grid + CTA button + free-to-join note |
| Perks grid | 4 perks | Each: emoji + 2-word title + 6 to 10 word description |
| Share row | 2 buttons | X and copy-link, prefilled message |

### Community CTA card content targets

- Eyebrow: "Join the community"
- Headline: 6 to 10 words naming the transformation the community delivers
- Paragraph: 30 to 50 words on what happens inside
- Perk grid: 4 distinct perks (live calls, resource library, weekly challenges, member directory, etc.)
- CTA button: "Join the [Community Name] free" or "Open [Platform] and join"
- Free-to-join note: "100 percent free. No card required."

## Conversion essentials

- Form above the fold on desktop and mobile. Email field visible without scroll.
- Asset visual within 200 pixels of the form to associate the picture with the action.
- Social proof inside the form card itself (avatar stack + member count), not at the bottom.
- Privacy reassurance inside the form card.
- Thank-you page community CTA must be the visual focal point, larger than the asset card itself. The asset is delivered, the community is the prize.
- Community link must include UTM source so the platform analytics can attribute opt-ins back to the page.
- For Facebook Groups, set the group-join question to capture the email so the moderator can match the GHL contact.
- Welcome email arrives within 60 seconds, names the community URL in the subject line and the first paragraph.

## Process

1. Intake: confirm community platform (Skool, Whop, Facebook, Discord, Circle, Mighty), community URL, lead magnet name, target audience, downstream offer if any. If platform or community URL is missing, pause and confirm.
2. Confirm GHL location (main vs Fast Track) before any form, automation, or contact action. Default assumption is wrong; ask.
3. Confirm whether the community is free or paid. If paid, confirm the trial mechanism and whether the page should drive directly to checkout or to a free trial with upgrade.
4. Wireframe both pages block-by-block in plain text. Get sign-off before writing copy.
5. Write copy in The voice constraints: English only, no em dashes, defensible numbers only.
6. Build in Lovable or Framer. Embed the GHL form. Wire the webhook to n8n. Tag the contact with both `lead_[asset]` and `community_[platform]_pending`.
7. Build the thank-you community CTA. Test the community-URL deep link on mobile (Skool app, Whop app, Facebook app, Discord app should each open natively if installed).
8. QA: mobile-first render, form submit end-to-end, welcome email arrives in 60 seconds, community link opens correct app, Meta Pixel fires Lead and ViewContent, GA4 records both events.
9. Drip plan: any reminder sequence over 10 contacts must drip at 1 per 30 to 60 seconds via GHL workflow stagger. Confirm cadence before sending.
10. Ship: SSL, OG image, favicon, 404 page, noindex on thank-you if the asset URL must stay private.

## Brand voice rules (always apply)

- English only across page, emails, SMS, group welcome messages, and onboarding DMs. No Tagalog or Taglish.
- No em dashes anywhere. Use commas, periods, or colons.
- No URLs in any SMS. Move the link to email or WhatsApp, or instruct the recipient to check email.
- No auto-send to real contacts. Always draft the welcome email, the community-onboarding DM, the post-join SMS, and the thank-you page copy for approval before any send.
- Drip outbound at 1 per 30 to 60 seconds for any list larger than 10 contacts. Confirm cadence before sending.
- Alice intro pattern for any 1-to-1 outreach: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [community name]." Then the personalized line.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never quote inflated $100M+ or 1,500+ figures.
- Voice and storytelling work belongs in `magnetic-story` and `cris-vinson-storybank`. Pull from those, do not freestyle.

## Anti-patterns

- Never put navigation on the opt-in page.
- Never make the asset visual larger than the community CTA on the thank-you page. Community is the prize.
- Never deliver the asset link without the community CTA on the same page.
- Never link to the community URL with a bare hostname. Always include UTM source, medium, and campaign.
- Never auto-approve Facebook Group join requests. Set the group-question to capture the email and let the moderator match.
- Never use a stock photo of a "happy person at a laptop" as the hero.
- Never write a headline about the lead magnet itself ("Get my free PDF"). Write about the outcome the community + asset delivers.
- Never use em dashes in copy, code comments, or this skill itself.
- Never include a URL in an SMS. Move it to email or WhatsApp.
- Never quote inflated $100M or 1,500-trained credential numbers.
- Never omit the privacy line from inside the form card.

## Templates

### HTML and Tailwind skeleton (paste into Lovable)

See `templates/opt-in-page.html` and `templates/thank-you.html` for the full source pulled from the funnel-architect base. The skeleton below is the minimum viable opt-in card with the community-bound thank-you.

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
<body class="bg-slate-900 text-white font-sans">
  <div class="bg-emerald-600 text-center text-sm py-2">FREE [ASSET TYPE]</div>
  <main class="min-h-screen flex items-center justify-center px-4 py-12">
    <section class="max-w-xl w-full bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
      <p class="text-xs uppercase tracking-widest text-emerald-400 mb-2">[Audience tag]</p>
      <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-3">[Outcome Headline]</h1>
      <p class="text-slate-300 mb-6">[One-sentence subhead naming who it is for and what is inside.]</p>
      <div class="aspect-video bg-slate-700 rounded-xl mb-6 flex items-center justify-center">
        [Video mockup with play icon]
      </div>
      <ul class="text-left space-y-2 mb-6">
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 1]</span></li>
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 2]</span></li>
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 3]</span></li>
        <li class="flex gap-2"><span>+</span><span>[Outcome bullet 4]</span></li>
      </ul>
      <form action="[ghl-form-endpoint]" method="POST" class="space-y-3">
        <input type="text" name="first_name" required placeholder="First name"
               class="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white" />
        <input type="email" name="email" required placeholder="Best email"
               class="w-full rounded-lg bg-slate-700 border border-slate-600 px-4 py-3 text-white" />
        <button type="submit"
                class="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg px-4 py-3">
          Send me instant access
        </button>
        <p class="text-xs text-slate-400">Zero spam. Unsubscribe anytime.</p>
      </form>
      <p class="text-xs text-slate-400 mt-6">Joined by [2,500]+ [audience].</p>
    </section>
  </main>
</body>
</html>
```

### Form field schema (mapped to GHL custom fields)

| Field name | Type | Required | GHL custom field | Notes |
|---|---|---|---|---|
| `first_name` | text | yes | (standard) | Used in welcome email and group-question |
| `email` | email | yes | (standard) | Primary key |
| `lead_magnet_name` | hidden | yes | `cf_lead_magnet` | Tags routing |
| `community_platform` | hidden | yes | `cf_community_platform` | "skool", "whop", "facebook", "discord", "circle", "mighty" |
| `community_url` | hidden | yes | `cf_community_url` | Used by welcome email and post-opt-in workflow |
| `traffic_source` | hidden | yes | `cf_utm_source` | UTM passthrough |
| `campaign_id` | hidden | yes | `cf_utm_campaign` | UTM passthrough |
| `consent_marketing` | checkbox | yes if EU traffic | `cf_consent_marketing` | Default unchecked |

### Thank-you page outline

1. Success bar: green strip, "You're in."
2. Confirmation hero: animated check + "Your [asset name] is on its way to [email mask]."
3. Inline asset card: video mockup with content title.
4. Community CTA card (the focal point):
   - Eyebrow: "Join the community"
   - Headline: 6 to 10 words
   - Pitch: 30 to 50 words
   - 4-perk grid: emoji + title + description for each
   - CTA button: links to community URL with UTM tags
   - Free-to-join note
5. Share row: X share with prefilled text, copy-link button.
6. Footer: brand mark, contact, privacy, terms.

### Sample copy block in The voice constraints

```
Top bar: FREE MINI-COURSE

Eyebrow: FOR FOUNDERS WHO BUILD ALONE

Headline:
The 7-step launch plan that took me from zero to my first $10K month.

Subhead:
Step-by-step playbook plus weekly live calls inside the free community.
Built for solo operators, refined across 1,000 trained founders.

Bullets:
+ The exact ad-to-offer sequence I run today
+ The DM script that books calls without pitching
+ The pricing math behind a 30 percent close rate
+ Live group calls every Thursday

Form CTA: Send me instant access

Community card headline:
Join 2,500+ founders learning launch math live every week.

Community pitch:
The community is where the playbook becomes practice. Live builds,
weekly Q and A, a resource library that updates monthly, and a member
directory so you can find the operator who solved the exact thing
you are stuck on right now.

Community CTA: Open Skool and join free
```

No em dashes. English only. Defensible numbers. Brand-voice ready.
