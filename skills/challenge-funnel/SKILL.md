---
name: challenge-funnel
description: Build a 3, 5, or 7-day challenge funnel with daily content pages, an offer page, and a thank-you page. Sells a $197 to $997 mid-ticket offer at the end of a momentum-building daily action sequence. Trigger phrases include "build a challenge funnel", "5-day challenge", "7-day bootcamp funnel", "daily action challenge", "challenge to offer", "free challenge funnel", "midticket challenge launch", "Skool challenge funnel". Use when the audience needs warming over multiple days before a paid pitch, with daily micro-wins driving completion and conversion. Build the page in Lovable, Framer, or Next.js for Vercel hosting. Skip if asking for offer design, lead magnet content, or voice work, defer to launchmap-offer, launchmap-lead-magnet, or magnetic-story.
---

# Challenge Funnel

Multi-day challenge funnel (3, 5, or 7 days). Registration captures email, daily pages deliver training plus action step, offer page presents the paid product on the final day or the day after, thank-you page confirms purchase. Optimized for $197 to $997 mid-ticket offers where momentum and community do the persuasion work.

## When to use

1. Mid-ticket course or program launch ($197 to $997) where cold lead-to-buyer needs more than a single page.
2. Cohort-based program where the challenge IS the pre-cohort warm-up (Day 1 to Day 5, then sell the cohort).
3. Audience reactivation: re-engage a cold list with a free 5-day daily-action sequence.
4. Skool, Whop, Discord, or Facebook Group community paired with a daily-content rhythm.
5. Joint-venture or partner promo where the partner sends traffic into a shared challenge with a back-end paid offer.

Price band: registration free, offer $197 to $997. Traffic temperature: cold to warm. Conversion event: registration submit, daily-page visit, offer-page purchase.

## When NOT to use

- The paid offer itself needs design, stack, pricing, or guarantee work, defer to `launchmap-offer` or `grand-slam-offer-architect`.
- The free-asset or daily-content design is undefined, defer to `launchmap-lead-magnet` or `training-designer`.
- Page copy or daily-email voice is the bottleneck, defer to `magnetic-story` or `cris-vinson-storybank`.
- Webinar SCRIPT for the offer-day pitch, defer to `expert-secrets-perfect-webinar`.
- Designing the underlying daily training content, defer to `training-designer`.
- Single-page email capture only, use `optin-funnel` instead.
- Single low-ticket purchase from cold traffic, use `tripwire-funnel` instead.
- Drive-to-community-only (no paid offer at the end), use `group-funnel` instead.
- High-ticket $2K+ application or booked-call funnel, use a different funnel pattern.

## The stack defaults

- Page build: Lovable for first-pass speed, Framer for polish, Next.js with Tailwind on Vercel for the daily-content portal and offer page.
- Forms: GoHighLevel form embed on the main location `[GHL_LOCATION_ID]` for registration and tagging. POST to n8n on the VPS for the daily-content drip schedule.
- Daily content delivery: each day is a unique URL (`/day-1`, `/day-2`, etc.). Pages are gated by GHL tag or by Memberstack/Outseta if a richer member portal is needed.
- Email and SMS: GHL workflows. Welcome email immediately. Daily morning unlock email. Daily evening reminder. Midpoint check-in. Final-day offer email. 24-hour offer reminder. 48-hour cart-close email.
- Community: Skool, Whop, Facebook Group, or Discord for daily-action accountability. Use `group-funnel` patterns to drive challenge registrants into the community on Day 0.
- Tracking: Meta Pixel, GA4, server-side Conversions API on Stripe for the final purchase. Track registration, each daily-page visit (custom event `challenge_day_X_view`), action-step completion, offer-page view, purchase.
- Domains: external root domain via Vercel for the daily-portal pages. Stripe checkout on `checkout.stripe.com` or Stripe-verified subdomain.
- WhatsApp follow-up via WAHA on the VPS for any 1-to-1 outreach to non-completers.

## Page structure

### Page 1: Registration Page

| Block | Target | Notes |
|---|---|---|
| Top bar | 1 line | "Free [N]-day challenge starts [date]" |
| Headline (H1) | 8 to 14 words | Outcome by Day [N] |
| Subhead | 1 to 2 sentences | Promise + who it is for |
| Hero visual | 1 image | Calendar visual or daily-icon row |
| What you get bullets | 3 to 5 items | Each = one daily outcome |
| Form | name + email | Optional WhatsApp number for community |
| CTA button | 4 to 7 words | "Save my seat" |
| Social proof | avatar stack + count + 2 testimonials | Past cohort completers |
| FAQ | 4 to 6 items | Time per day, cost, replay availability, community access |

### Page 2: Daily Challenge Page (one per day)

| Block | Target | Notes |
|---|---|---|
| Day badge | "Day 3 of 5" | Top of page, prominent |
| Daily theme | 6 to 10 words | The transformation of THIS day |
| Training video | 10 to 20 min | Embedded, autoplay off, with completion tracking |
| Today's action step | 1 paragraph + 1 checklist | Clear, completable in 15 to 30 minutes |
| Completion CTA | 1 button | "Mark as complete" or "Share in community" |
| Community link | 1 button | Direct to today's discussion thread |
| Tomorrow preview | 1 line | "Tomorrow: [theme]. Most powerful day yet." |
| Soft offer seed | 1 line from Day 1 | Mention the paid product naturally, not pitched |

### Page 3: Offer Page (final day or day after)

| Block | Target | Notes |
|---|---|---|
| Hero | 1 line + 1 video | "You completed the challenge. Here is what is next." |
| Transformation recap | 3 to 5 bullets | The result of the challenge as proof |
| Offer headline | 8 to 14 words | Names the next-level outcome |
| Stack visual | itemized value | Each module + bonus + price anchor |
| Price reveal | 1 line | "Today: $497" with strike-through anchor |
| Guarantee | 30 to 60 words | Risk reversal, refund window |
| Testimonials | 3 to 5 quotes | From past program graduates |
| CTA button | 4 to 7 words | "Enroll now" |
| FAQ | 6 to 10 items | Each kills one objection |
| Cart-close timer | optional | Only if real urgency exists |

### Page 4: Thank-You Page

Confirms purchase, sets expectations for onboarding (welcome email, kickoff call, member portal), surfaces support contact. No further upsell.

## Email sequence (mandatory)

| Email | Timing | Purpose |
|---|---|---|
| Welcome | Immediately on registration | Set expectations, name the daily rhythm, link to community |
| Day 1 Unlock | Morning, Day 1 | Link to Day 1 page, action-step preview |
| Day 1 Reminder | Evening, Day 1 | "Did you complete today?" |
| Day 2-X Unlock | Morning, each day | Daily-page link |
| Day 2-X Reminder | Evening, each day | Action-step nudge, social proof from community |
| Midpoint check-in | Halfway day | Celebrate progress, re-engage drop-offs |
| Final-day push | Morning, last day | "Today is the day everything ties together" |
| Offer email | After final training | Present the paid product |
| Offer reminder | 24 hours later | Social proof + scarcity if real |
| Cart-close | 48 hours after offer | "Last chance" |

## Conversion essentials

- Registration page CTA above the fold on desktop and mobile.
- Daily pages must be visually distinct from each other (color accent, day badge, theme card) so completers feel progression.
- Action step must be completable in 15 to 30 minutes. Anything longer crashes Day 3 completion rate.
- Community link on every daily page, prominent and predictable in placement.
- Soft offer seed from Day 1. The audience hears the offer name 5 times before the offer page appears.
- Offer page must reference the specific challenge transformation in the hero. Generic pitch destroys conversion.
- Email send window: morning unlock between 6am and 9am local. Evening reminder between 5pm and 7pm local. Use GHL contact timezone.
- Server-side purchase event via Stripe webhook to n8n to GHL for accurate Meta CAPI attribution.

## Process

1. Intake: confirm challenge length (3, 5, or 7 days), daily topic per day, paid offer name, paid offer price, community platform, registration goal, target purchase rate. If any are missing, pause and pull `launchmap-offer` or `training-designer`.
2. Confirm GHL location (main vs Fast Track) before any form, automation, or contact action. Default assumption is wrong; ask.
3. Confirm Stripe account and product ID for the paid offer.
4. Wireframe registration page, daily-page template, and offer page block-by-block.
5. Write copy in The voice constraints: English only, no em dashes, defensible numbers only.
6. Build registration in Lovable. Build daily-page template once, duplicate per day with content swap. Build offer page on Vercel.
7. Wire GHL workflow for the email sequence. Schedule each unlock email to fire on the correct date/time per registrant. Wire the Stripe webhook to n8n to GHL.
8. Drip plan: any reminder broadcast over 10 contacts must drip at 1 per 30 to 60 seconds via GHL workflow stagger. Confirm cadence with Cris before firing. Especially the Day-N reminder and the cart-close email.
9. QA: register a test contact, verify each daily unlock email fires on schedule, verify daily pages load only for the right tag, run a $1 SKU purchase end-to-end, verify Meta CAPI fires, GA4 logs Purchase, GHL receives the buyer tag, onboarding email arrives.
10. Ship: SSL, OG image, favicon, 404 page, refund and terms pages live, customer-support email monitored, community moderator briefed.

## Brand voice rules (always apply)

- English only across pages, every email, every SMS, every community post, every WhatsApp message. No Tagalog or Taglish.
- No em dashes anywhere. Use commas, periods, or colons.
- No URLs in any SMS. Move the link to email or WhatsApp, or instruct the recipient to check email.
- No auto-send to real contacts. Always draft each daily email, the reminder broadcasts, the offer email, the cart-close email, the buyer email, and any 1-to-1 follow-up for Cris to approve before any send.
- Drip outbound at 1 per 30 to 60 seconds for any list larger than 10 contacts. Confirm cadence with Cris before firing.
- Alice intro pattern for any 1-to-1 outreach: "Hi [Name], this is Alice, The AI assistant. You're getting this because you registered for [challenge name]." Then the personalized line.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never quote inflated $100M+ or 1,500+ figures.
- Voice and storytelling work belongs in `magnetic-story` and `cris-vinson-storybank`. Pull from those, do not freestyle.
- When editing recorded daily-training video, strip "right?" and "okay?" alongside um/uh/etc. Cris uses these as live discourse tags, but they read as padding in the cut.

## Anti-patterns

- Never run a 7-day challenge for a topic that fits in 3 days. Long for the sake of long collapses Day 3 completion.
- Never gate daily pages without a tag check. A leaked URL with no gate destroys the funnel.
- Never let an action step exceed 30 minutes of work. Even Day 1 must feel small.
- Never reveal the offer price before the offer page. Seeding the offer name is fine, seeding the price kills the page.
- Never put the offer page CTA without referencing the challenge transformation in the hero.
- Never skip the midpoint check-in email. Day 3 of a 5-day is the highest drop-off.
- Never use a stock photo of a "happy person at a laptop" as the hero.
- Never use em dashes in copy, code comments, or this skill itself.
- Never include a URL in an SMS. Email or WhatsApp only.
- Never quote inflated $100M or 1,500-trained credential numbers.
- Never blast the cart-close broadcast to all registrants at once. Drip 1 per 30 to 60 seconds via GHL workflow.

## Templates

### HTML and Tailwind skeleton (paste into Lovable)

See `templates/challenge-day-page.html` for the full daily-page source pulled from the funnel-architect base. The skeleton below is the minimum viable daily page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Day [N]: [Theme] | [Challenge Name]</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans">
  <main class="max-w-3xl mx-auto px-4 py-8">
    <div class="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
      Day [N] of [Total]
    </div>
    <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-3">[Daily Theme]</h1>
    <p class="text-slate-600 mb-6">[One sentence on the transformation of today.]</p>

    <div class="aspect-video bg-slate-200 rounded-xl mb-8 flex items-center justify-center">
      [Embed training video, 10 to 20 min]
    </div>

    <section class="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 class="text-xl font-bold mb-3">Today's action step</h2>
      <p class="text-slate-700 mb-4">[Plain-English description of the action, 30 to 60 words.]</p>
      <ul class="space-y-2">
        <li class="flex gap-2"><input type="checkbox" /> [Step 1]</li>
        <li class="flex gap-2"><input type="checkbox" /> [Step 2]</li>
        <li class="flex gap-2"><input type="checkbox" /> [Step 3]</li>
      </ul>
    </section>

    <div class="flex gap-3 mb-8">
      <button class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-3">
        Mark as complete
      </button>
      <a href="[community-thread-url]"
         class="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg px-4 py-3">
        Share in community
      </a>
    </div>

    <p class="text-sm text-slate-500 italic">Tomorrow: [Day N+1 theme]. Most powerful day yet.</p>
  </main>
</body>
</html>
```

### Form field schema (mapped to GHL custom fields)

| Field name | Type | Required | GHL custom field | Notes |
|---|---|---|---|---|
| `first_name` | text | yes | (standard) | Used in every daily email |
| `email` | email | yes | (standard) | Primary key |
| `whatsapp_number` | tel | optional | `cf_whatsapp` | For community onboarding via WAHA |
| `challenge_name` | hidden | yes | `cf_challenge_name` | Tags routing |
| `challenge_start_date` | hidden | yes | `cf_challenge_start_date` | Schedules the daily unlock emails |
| `timezone` | auto | yes | `cf_timezone` | Detected from browser, used for send-time |
| `traffic_source` | hidden | yes | `cf_utm_source` | UTM passthrough |
| `campaign_id` | hidden | yes | `cf_utm_campaign` | UTM passthrough |
| `consent_marketing` | checkbox | yes if EU | `cf_consent_marketing` | Default unchecked |

### Thank-you page outline (post-purchase)

1. "You're enrolled" hero with order number.
2. Inline next-step: link to member portal or Day-1 onboarding video.
3. Receipt info: amount charged, last 4, email confirmation note.
4. Onboarding expectation: "You will get a welcome email in 60 seconds with your full access details."
5. Calendar invite for the kickoff call if applicable.
6. Customer support: email and response-time promise.

### Sample copy block in The voice constraints

```
Top bar: FREE 5-DAY CHALLENGE STARTS MONDAY

Headline:
The 5-day launch sprint that books your first paying client by Friday.

Subhead:
For solo coaches and consultants with an offer, an audience, and zero
patience for theory. 30 minutes a day, live community access included.

What you get:
+ Day 1: Build the offer page that closes
+ Day 2: The DM script that books the call
+ Day 3: Pricing math that holds at the close
+ Day 4: Run the sales call without scripts
+ Day 5: Close, deliver, and ask for the referral

CTA: Save my seat

Social proof:
Run by 1,000+ trained operators across 14 industries.

Day 3 page action step:
Today you set your real price and write the line you say at the close.
30 minutes. By the end of today, you will have a number you can defend
when the prospect pushes back on price.

Offer page hero:
You finished the sprint. You proved the math. Here is the program that
turns this week into the next 12 months.
```

No em dashes. English only. Defensible numbers. Cris-voice ready.
