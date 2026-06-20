---
name: tripwire-funnel
description: Build a low-ticket cold-traffic tripwire funnel ($7 to $47) that converts strangers into buyers, then upsells to a core product. Trigger phrases include "build a tripwire funnel", "low-ticket front-end offer", "self-liquidating offer", "$27 cold offer", "tripwire to upsell", "ad cost recovery offer", "fast cash funnel". Use when the goal is to flip cold traffic into a buyer list and recover ad spend on day one with a small irresistible digital offer plus order bump and one-click upsell. Build the page in Lovable, Framer, or Next.js for Vercel hosting. Skip if asking for offer design, lead magnet content, or voice work, defer to launchmap-offer, launchmap-lead-magnet, or magnetic-story.
---

# Tripwire Funnel

Convert cold traffic into buyers with a $7 to $47 digital offer, capture an order bump on the same checkout, and present a one-click upsell to the core product. Optimized for self-liquidating ad spend and rapid buyer-list growth.

## When to use

1. Cold paid traffic (Meta, TikTok, YouTube) that needs day-one revenue to offset CPL.
2. Buyer-list seeding before a higher-ticket launch ($497 to $5K) where buyer-list math matters more than email count.
3. Webinar or VSL warm-up where a small purchase pre-qualifies the lead.
4. Low-ticket digital product ($7 to $47): templates, swipe files, recorded mini-class, calculator pro, pre-built playbook.
5. Affiliate pre-sell page where a small purchase is the gate to a back-end commission product.

Price band: $7 to $47 front end, $17 to $37 order bump, $97 to $497 upsell, $47 to $197 downsell. Traffic temperature: cold.

## When NOT to use

- The offer itself needs design, stack, pricing, or guarantee work, defer to `launchmap-offer` or `grand-slam-offer-architect`.
- The lead magnet or pre-tripwire opt-in content does not exist, defer to `launchmap-lead-magnet`.
- Sales page copy, hook, or story craft is the bottleneck, defer to `magnetic-story` or `cris-vinson-storybank`.
- Webinar SCRIPT for an upsell, defer to `expert-secrets-perfect-webinar`.
- Designing the underlying training or workshop content of the upsell, defer to `training-designer`.
- Free email capture only, use `optin-funnel` instead.
- Community group signup, use `group-funnel` instead.
- Multi-day daily challenge, use `challenge-funnel` instead.
- Premium $1K+ offer at first click, that needs an application or VSL funnel, not tripwire.

## The stack defaults

- Page build: Lovable for first-pass speed, Framer for polish, Next.js with Tailwind on Vercel for custom checkout flows or A/B test variants.
- Checkout: Stripe Checkout embedded, with the order bump as a Stripe metadata flag and the upsell as a one-click Stripe customer charge using saved payment method. GHL Payments works only if the bump and upsell math is sub-$500 in total.
- Forms and CRM: GoHighLevel main location `[GHL_LOCATION_ID]` for contact creation, tagging, and pipeline. Server-side webhook from Stripe to n8n on the VPS, n8n writes to GHL with the correct buyer tag.
- Email and SMS: GHL workflows triggered on tag add. Buyer email confirms purchase and delivers product within 60 seconds. Upsell decline triggers a 24-hour downsell email.
- Tracking: Meta Pixel and GA4. Server-side Conversions API on Stripe `checkout.session.completed` so iOS does not eat the purchase event. Track Purchase, AddToCart (bump), and InitiateCheckout separately.
- Domains: external root domain via Vercel for the offer page, Stripe checkout on `checkout.stripe.com` or a Stripe-verified subdomain, thank-you on the same root.

## Page structure

### Page 1: Tripwire Offer Page

Long-form sales page, single column, no nav. Mobile-first.

| Block | Target | Notes |
|---|---|---|
| Pre-headline | 3 to 6 words | Audience call-out, e.g. "For solo coaches" |
| Headline (H1) | 8 to 14 words | Names the outcome and the timeframe |
| Subhead | 1 to 2 sentences, 20 to 35 words | Specifies who, what, and what is excluded |
| Hero visual | 1 image or 60-second VSL | Product mockup or face-to-camera |
| First CTA | 1 button | Same anchor used 3 times down the page |
| Pain section | 3 to 5 bullets | Problems the offer solves, in customer language |
| Solution section | 1 paragraph + 3 to 5 bullets | What is inside, by outcome |
| Stack visual | 1 stack box | Itemized value with crossed-out anchor price |
| Price reveal | 1 line | "Today: $27" with strike-through anchor |
| Guarantee | 30 to 60 words | Risk reversal, refund window, no-questions clause |
| Testimonials | 2 to 4 quotes | Real names, real outcomes, defensible |
| Bio block | 60 to 100 words | The defensible credentials only |
| FAQ | 4 to 6 items | Each FAQ kills one objection |
| Final CTA | 1 button | Same anchor as first CTA |

### Order Bump (on checkout)

| Block | Target |
|---|---|
| Checkbox label | One sentence, 12 to 20 words |
| Bump headline | 6 to 10 words, names the bump benefit |
| Bump price line | "Add this for just $X more" |
| Take-rate cue | "Most buyers add this" |

### Upsell Page (post-purchase, one-click)

| Block | Target |
|---|---|
| Pattern interrupt | "Wait, your order is not complete" |
| Congratulations frame | 1 line, positive momentum |
| Upsell pitch | 100 to 200 words, one outcome focus |
| Stack visual | Itemized value, today price |
| One-click YES button | Charges saved card, no re-entry |
| Visible "No thanks" link | Same width as YES, lower contrast |

### Downsell Page (if upsell declined, optional)

Lighter version of the upsell at 40 to 60 percent of the price. Same structure, smaller scope.

### Thank-You Page

Delivers the bought asset, sets the next-step expectation, and surfaces customer support contact. No further upsell here.

## Conversion essentials

- Hero VSL or hero image must be inside 200 pixels of the first CTA.
- Price anchor visible at every CTA (today $27, value $197).
- Guarantee badge in the price area, not buried at the bottom.
- Order bump take rate is dead without "Most buyers add this" social proof on the checkout.
- Upsell page must charge with one click. If the customer has to re-enter card details, take rate drops 60 percent.
- Mobile checkout must complete in under 3 taps after CTA click.
- Stripe webhook must fire to n8n which fires to GHL within 10 seconds. Delayed buyer-tag = delayed delivery email = refund risk.
- Refund link visible in the buyer email, never hidden. Reduces chargebacks.

## Process

1. Intake: confirm tripwire price, what is in the box, what the upsell is, what the bump is, target CPL, target cost-per-acquisition. If the bump and upsell are not defined, pause and pull `launchmap-offer` first.
2. Confirm GHL location (main vs Fast Track) before any contact, automation, or pipeline action. Default assumption is wrong; ask.
3. Confirm Stripe account and product IDs. Verify the upsell SKU exists with its own price ID before building.
4. Wireframe the offer page block-by-block in plain text. Map every CTA to the same Stripe checkout link.
5. Write copy in The voice constraints: English only, no em dashes, defensible numbers only, no inflated credentials.
6. Build the page in Lovable or Framer. Embed Stripe checkout with order bump line item. Build the post-purchase upsell page on Vercel for the one-click charge endpoint.
7. Wire Stripe webhook to n8n VPS. n8n branches: bump-purchased tag, upsell-purchased tag, downsell-purchased tag, refunded tag.
8. QA: end-to-end test purchase with a real $1 SKU, verify Meta CAPI fires, GA4 logs Purchase, GHL receives the tag, buyer email arrives in under 60 seconds, refund flow works.
9. Drip plan: any post-purchase email sequence over 10 buyers must drip at 1 per 30 to 60 seconds via GHL workflow stagger. Confirm cadence before sending.
10. Ship: SSL, OG image, favicon, refund and terms pages live, customer-support email monitored.

## Brand voice rules (always apply)

- English only across page, checkout, emails, SMS. No Tagalog or Taglish.
- No em dashes anywhere. Use commas, periods, or colons.
- No URLs in any SMS. Move the link to email or WhatsApp, or instruct the recipient to check email.
- No auto-send to real contacts. Always draft the buyer email, the upsell email, the downsell email, the refund email, and the abandoned-checkout sequence for approval before any send.
- Drip outbound at 1 per 30 to 60 seconds for any list larger than 10 contacts. Confirm cadence before sending.
- Alice intro pattern for any 1-to-1 follow-up: "Hi [Name], this is Alice, The AI assistant. You're getting this because you bought [tripwire name]." Then the personalized line.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never quote the older inflated $100M+ or 1,500+ figures.
- Voice and storytelling work belongs in `magnetic-story` and `cris-vinson-storybank`. Pull from those, do not freestyle.

## Anti-patterns

- Never put navigation on the offer page.
- Never charge above $47 on the front-end tripwire. Above $47 needs a different funnel pattern.
- Never hide the "No thanks" link on the upsell page. Hidden declines cause chargebacks.
- Never run the upsell page without a one-click charge endpoint. Re-entering a card kills take rate.
- Never use a stock photo of a "happy person at a laptop" as the hero.
- Never write a headline about the product itself ("Get my $27 template pack"). Write the headline about the outcome.
- Never auto-send a refund without the buyer-confirmation flow firing.
- Never use em dashes in copy, code comments, or this skill itself.
- Never include a URL in a buyer SMS. Email or WhatsApp only.
- Never quote inflated $100M or 1,500-trained credential numbers.
- Never embed an order bump as a separate post-checkout charge. It must be a checkout-time line item or take rate collapses.

## Templates

### HTML and Tailwind skeleton (paste into Lovable)

See `templates/tripwire-offer-page.html` for the full source pulled from the funnel-architect base. The skeleton below is the minimum viable offer card.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Outcome Headline] | [Brand]</title>
  <meta name="description" content="[20 to 30 word benefit promise]" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans">
  <main class="max-w-3xl mx-auto px-4 py-10">
    <p class="text-center text-xs font-semibold tracking-widest text-amber-600 mb-3">FOR [AUDIENCE]</p>
    <h1 class="text-4xl md:text-5xl font-bold text-center leading-tight mb-4">[Outcome Headline]</h1>
    <p class="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
      [One or two sentence subhead naming who it is for and what is excluded.]
    </p>
    <div class="aspect-video bg-slate-200 rounded-xl mb-8 flex items-center justify-center">
      [60-second VSL or product mockup]
    </div>
    <a href="[stripe-checkout-url]"
       class="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl px-6 py-4 mb-10">
      Yes, I want this for $27 today
    </a>
    <section class="bg-white rounded-2xl p-8 shadow mb-10">
      <h2 class="text-2xl font-bold mb-4">What is inside</h2>
      <ul class="space-y-3">
        <li class="flex gap-3"><span class="text-emerald-600 font-bold">+</span><span>[Outcome bullet 1]</span></li>
        <li class="flex gap-3"><span class="text-emerald-600 font-bold">+</span><span>[Outcome bullet 2]</span></li>
        <li class="flex gap-3"><span class="text-emerald-600 font-bold">+</span><span>[Outcome bullet 3]</span></li>
      </ul>
    </section>
    <section class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-center">
      <p class="text-sm uppercase tracking-widest text-amber-700 mb-2">30-day refund</p>
      <p class="text-slate-700">If it does not deliver, reply to your receipt and we refund. No questions, no forms.</p>
    </section>
    <a href="[stripe-checkout-url]"
       class="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl px-6 py-4">
      Get instant access for $27
    </a>
  </main>
</body>
</html>
```

### Form field schema (mapped to GHL custom fields)

| Field name | Type | Required | GHL custom field | Notes |
|---|---|---|---|---|
| `email` | email | yes | (standard) | From Stripe checkout |
| `first_name` | text | yes | (standard) | From Stripe billing |
| `tripwire_sku` | hidden | yes | `cf_tripwire_sku` | Stripe price ID |
| `bump_taken` | boolean | yes | `cf_bump_taken` | True if line-item count > 1 |
| `upsell_taken` | boolean | yes | `cf_upsell_taken` | Set by post-purchase webhook |
| `traffic_source` | hidden | yes | `cf_utm_source` | UTM passthrough |
| `campaign_id` | hidden | yes | `cf_utm_campaign` | UTM passthrough |
| `stripe_customer_id` | hidden | yes | `cf_stripe_customer_id` | For one-click upsell |

### Thank-you page outline

1. "Order confirmed" hero with order number.
2. Inline product delivery: download button or member-portal link.
3. Receipt info: amount charged, last 4, email confirmation note.
4. Next-step expectation: "You will get an email in 60 seconds with your access details."
5. Customer support: email and response-time promise.
6. No upsell here. The upsell happens BEFORE this page.

### Sample copy block in The voice constraints

```
Pre-headline: FOR SOLO COACHES AND CONSULTANTS

Headline:
The 50-template DM pack that books me 3 to 5 calls a week without ads.

Subhead:
Lifted from 1,000 trained operators, edited for English-first founders
who hate cold pitches. Not for agencies, not for B2C, not for affiliates.

Stack:
+ 50 plug-and-play DM templates organized by outcome
+ A 4-step qualification script for the first reply
+ My exact "soft-close" line that books the call
+ Bonus: the 3 follow-up sequences I use after a no-show

Today: $27. Real value: $197.

Guarantee:
If you do not book at least one call in 14 days, reply to your receipt
and we refund the full $27. No forms, no questions, no friction.

CTA: Yes, send me the pack for $27.
```

No em dashes. English only. Defensible numbers. Brand-voice ready.
