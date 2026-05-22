---
name: high-ticket-funnel
description: Build a $3,000+ high-ticket booked-call funnel that combines authority content, a long-form sales page, application/booking, sales call, and onboarding. Trigger when Use "high-ticket funnel", "book a call funnel", "$5K mastermind funnel", "consulting sales page", "long-form pitch page", or describes a $3K-$50K coaching, mastermind, agency-retainer, or done-for-you offer. Audience is warm-to-hot or referral. Build pages in Lovable, Framer, or Next.js + Tailwind on Vercel; integrate with GHL for application form, calendar booking, deposit/full-pay via Stripe, and CRM. Skip for offer design, the call script itself, or voice work, defer to launchmap-offer / launchmap-enrollment / magnetic-story.
---

# High-Ticket Funnel

When the deal size justifies a sales conversation, the page exists to pre-sell, qualify, and earn the call. Long-form. Story-driven. Proof-dense. Pricing stays off the page.

## When to use

- Coaching, mastermind, or agency offer priced $3,000 to $50,000.
- Done-for-you services where every client is a custom scope.
- Enterprise software or consulting requiring a discovery conversation.
- Warm or hot traffic: case study readers, podcast guests, referrals, program alumni, webinar attendees.
- Re-engagement of cold leads who already follow Cris but have not bought.

## When NOT to use

- Offer design, deliverables, pricing, guarantees, defer to `product-creator` / `grand-slam-offer-architect` / `launchmap-offer`.
- The actual sales call script and objection handling, defer to `launchmap-enrollment`.
- The Million Dollar Message and core hook, defer to `launchmap-mdm`.
- Voice, hero arc, story bridges, or first-person narrative copy, defer to `magnetic-story` / `cris-vinson-storybank`.
- Workshop or training program design, defer to `training-designer`.
- $2,000-$3,000 with a heavy qualification gate, route to `application-funnel` instead.
- Self-checkout offers under $3K, route to `vsl-funnel` or `tripwire-funnel`.

## The stack defaults

- Pages: Lovable for fastest ship, Framer for polish, Next.js + Tailwind on Vercel for control.
- Calendar booking: GHL native calendars (preferred). Calendly fallback for non-GHL clients only.
- Application form: GHL custom forms with conditional logic and scoring tags.
- Payments: Stripe via GHL for deposits and full-pay. Payment plans 3-6 months default.
- CRM, email, SMS: GHL main location `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate, never touch unless Use "Fast Track" by name.
- Automation: n8n on VPS via SSH node, not the Anthropic API node.
- Tracking: Meta Pixel + GA4. Conversion events: SalesPageView, ApplicationStarted, ApplicationSubmitted, CallBooked, CallShowed, ClientWon.

## Page-by-page blueprint

### Page 1: Authority content (entry point, optional)

Blog post, video, or case study that warms cold traffic. 800-1500 words or 8-15 min video. Ends with "If this resonates, here is what we do" CTA pointing to the sales page.

### Page 2: Long-form sales page

Section sequence with target word counts:

| Block | Word count | Purpose |
|---|---|---|
| Headline | 8-14 words | Bold transformation outcome |
| Sub-headline | 20-35 words | Mechanism, timeframe, what it removes |
| Opening story | 200-350 words | Empathize with reader's current state |
| The problem | 150-250 words | Articulate their pain better than they can |
| Cost of inaction | 100-200 words | What happens if they keep doing what they are doing |
| The solution | 150-250 words | Introduce the approach, not the product yet |
| Case studies | 3-5 cards, 80-120 words each | Specific numbers, named clients, results |
| The offer | 200-350 words | What is included, how it works, deliverables |
| Who this is for | 4-5 bullets | Identify the qualified buyer |
| Who this is not for | 4-5 bullets | Repel the wrong fit |
| About / credentials | 120-200 words | Defensible: $10M+ revenue, 1,000+ trained |
| Investment frame | 100-180 words | ROI math, not cost |
| FAQ | 8-12 Q&As, 30-60 words each | Process, time, fit, no pricing |
| Final CTA | 2-4 words | "Apply Now" or "Book a Call" |

### Page 3: Application form (GHL)

10-14 questions. Same scoring approach as the application-funnel skill. Pass threshold determines whether the calendar opens.

### Page 4: Calendar booking

GHL native embed. Only shown to qualified applicants. Time zone aware. Buffer time before/after each call.

### Page 5: Booking confirmation + pre-call homework

Sets expectations, sends Zoom link, queues GHL reminder cadence (24hr email, 1hr SMS), serves a pre-call Loom or doc.

### Page 6: Onboarding (post-purchase)

Welcome video, kickoff scheduling, intake form, Slack/portal access, first 30-day plan. Critical for retention and referrals.

## Application qualification logic

### Scoring rubric (0-100)

| Question | Max points | Disqualifier threshold |
|---|---|---|
| Current revenue or situation | 20 | Below floor = auto-disqualify |
| 90-day goal clarity | 15 | Vague = -10 |
| What they have tried | 10 | "Nothing" = -5 |
| Commitment 1-10 | 20 | <8 for $5K+ = auto-disqualify |
| Investment readiness | 20 | Below offer floor = auto-disqualify |
| Start timeline | 15 | "Just exploring" = auto-disqualify |

Pass: 75+ for $5K+ offers. Review: 60-74. Fail: <60.

### Hand-off to call

- Pass: tag `htf-qualified`, calendar link via email + SMS, Slack ping Cris, owner = Cris.
- Review: tag `htf-review`, internal task for Cris, hold email "We are reviewing".
- Fail: tag `htf-disqualified`, polite decline email, route to long-term nurture or down-sell to a lower-tier offer.

## Process

1. **Intake**: confirm offer, price, payment terms, audience temperature, GHL location.
2. **Wireframe**: map all 6 pages and the email flow before writing.
3. **Copy**: draft each block to word counts. Pull case studies and stories from `cris-vinson-storybank`.
4. **Build**: scaffold in Lovable/Framer/Next.js. Embed video, headshots, case study photos.
5. **Integrate**: GHL form, scoring workflow, calendar embed, Stripe deposit checkout, Meta Pixel, GA4.
6. **QA**: test from each scoring tier, every device, every email/SMS step, calendar timezone.
7. **Ship**: custom domain, smoke test, hand Cris a Loom walkthrough.

## Pricing psychology for high-ticket

- Never show price on the sales page. Price is a call conversation.
- Frame as investment: "Our clients typically see X return within Y months."
- Payment plans 3-6 months default, reduce resistance.
- ROI anchor: "If this helps you add one extra $10K client, it pays for itself 3x over."
- Deposit option ($500-$2,000) on the call locks commitment, balance billed on agreed terms.

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish.
- No em dashes anywhere in page copy, emails, or SMS.
- No URLs in any SMS. Move links to email.
- No auto-send to real contacts. Draft for The approval.
- Drip cadence: any send to >10 contacts must be 1 per 30-60 seconds or run via GHL workflow.
- Outreach DM/SMS opener: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." then personalize.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never inflated $100M+/1,500+.
- Defer voice and story work to `magnetic-story`.

## Anti-patterns

- Never let high-ticket buyers self-checkout without a call. Refunds and bad fit double.
- Never run an unqualified booking calendar for a $3K+ offer. The time is the constraint.
- Never put pricing on the sales page. Pre-empts the call's value-anchoring work.
- Never skip case studies with named clients and numbers. Generic testimonials kill trust at this price.
- Never bury the application CTA below the fold on mobile. Sticky CTA bar minimum.
- Never skip the pre-call confirmation sequence. Show rate drops 30%.
- Never use Calendly when GHL native calendars are available. CRM tagging breaks.

## Templates

### HTML + Tailwind long-form sales page skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{OFFER_NAME}}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-900 font-sans">

  <!-- Sticky CTA bar -->
  <div class="fixed bottom-0 inset-x-0 bg-black text-white p-3 text-center md:hidden z-50">
    <a href="#apply" class="font-semibold">Apply Now &rarr;</a>
  </div>

  <!-- Hero -->
  <section class="px-6 py-20 max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold leading-tight">{{HEADLINE}}</h1>
    <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">{{SUBHEADLINE}}</p>
    <a href="#apply" class="inline-block mt-10 px-10 py-4 bg-black text-white font-semibold rounded-lg">Apply Now</a>
  </section>

  <!-- Opening story -->
  <section class="px-6 py-12 max-w-2xl mx-auto prose prose-lg">
    <h2>{{STORY_HEADER}}</h2>
    <p>{{STORY_PARAGRAPH_1}}</p>
    <p>{{STORY_PARAGRAPH_2}}</p>
  </section>

  <!-- Problem -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-2xl mx-auto prose prose-lg">
      <h2>{{PROBLEM_HEADER}}</h2>
      <p>{{PROBLEM_BODY}}</p>
    </div>
  </section>

  <!-- Cost of inaction -->
  <section class="px-6 py-16 max-w-2xl mx-auto prose prose-lg">
    <h2>{{COST_HEADER}}</h2>
    <p>{{COST_BODY}}</p>
  </section>

  <!-- Solution -->
  <section class="bg-black text-white px-6 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-bold">{{SOLUTION_HEADER}}</h2>
      <p class="mt-6 text-lg text-gray-300">{{SOLUTION_BODY}}</p>
    </div>
  </section>

  <!-- Case studies -->
  <section class="px-6 py-16 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Client transformations</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {{REPEAT: CASE_STUDY_CARD x 3-5}}
    </div>
  </section>

  <!-- Offer -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">{{OFFER_HEADER}}</h2>
      <ul class="space-y-3 text-lg">
        <li>{{DELIVERABLE_1}}</li>
        <li>{{DELIVERABLE_2}}</li>
        <li>{{DELIVERABLE_3}}</li>
        <li>{{DELIVERABLE_4}}</li>
      </ul>
    </div>
  </section>

  <!-- Who for / not for -->
  <section class="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
    <div>
      <h2 class="text-2xl font-bold mb-4">This is for you if</h2>
      <ul class="space-y-2 text-gray-700">
        <li>{{FIT_BULLET_1}}</li>
        <li>{{FIT_BULLET_2}}</li>
        <li>{{FIT_BULLET_3}}</li>
        <li>{{FIT_BULLET_4}}</li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-bold mb-4">This is NOT for you if</h2>
      <ul class="space-y-2 text-gray-700">
        <li>{{REPEL_BULLET_1}}</li>
        <li>{{REPEL_BULLET_2}}</li>
        <li>{{REPEL_BULLET_3}}</li>
        <li>{{REPEL_BULLET_4}}</li>
      </ul>
    </div>
  </section>

  <!-- About -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <img src="{{HEADSHOT}}" class="w-32 h-32 rounded-full mx-auto mb-6" />
      <h2 class="text-3xl font-bold">{{ABOUT_HEADER}}</h2>
      <p class="mt-4 text-gray-700">{{ABOUT_BODY}}</p>
    </div>
  </section>

  <!-- FAQ -->
  <section class="px-6 py-16 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Questions</h2>
    {{REPEAT: FAQ_ITEM x 8-12}}
  </section>

  <!-- Final CTA -->
  <section id="apply" class="bg-black text-white px-6 py-20 text-center">
    <h2 class="text-3xl md:text-5xl font-bold">{{FINAL_CTA_HEADER}}</h2>
    <p class="mt-4 text-gray-300 max-w-xl mx-auto">{{FINAL_CTA_BODY}}</p>
    <a href="{{GHL_FORM_URL}}" class="inline-block mt-8 px-10 py-4 bg-white text-black font-semibold rounded-lg">Apply Now</a>
  </section>

</body>
</html>
```

### Case study card template

```
CLIENT: [First name + role/company]
SITUATION: [Where they were, with specific number]
CHALLENGE: [What was not working]
SOLUTION: [What we did together]
RESULT: [Specific measurable outcome]
TIMELINE: [How quickly]
QUOTE: "[In their own words, one sentence]"
```

### Application form schema (GHL)

Same structure as application-funnel, with raised disqualifier thresholds:
- Investment readiness: must include the offer's actual floor.
- Commitment score: <8 = auto-disqualify on $5K+.
- Revenue floor: lift to match the offer (typically $5K-$10K/mo for $5K+ offers).

### GHL workflow outline

1. Trigger: Form submitted = "{{OFFER_NAME}} Application".
2. Calculate score.
3. Branch:
   - Pass (75+): tag `htf-qualified-{{slug}}`, send calendar link email + SMS, Slack Cris, owner = Cris.
   - Review (60-74): tag `htf-review`, hold email, internal task.
   - Fail (<60): tag `htf-disqualified`, polite decline + free resource, nurture pipeline.
4. Reminders: 24hr email, 1hr SMS, 5min "We are starting" SMS.
5. No-show: 1hr later reschedule link, 48hr later tag `no-show`, pause.
6. Won deal: tag `client-{{slug}}`, fire onboarding sequence, Stripe payment confirmation, kickoff call scheduled.

### Stripe deposit checkout config

```json
{
  "mode": "payment",
  "line_items": [{
    "price_data": {
      "currency": "usd",
      "product_data": {"name": "{{OFFER_NAME}} - Deposit"},
      "unit_amount": {{DEPOSIT_AMOUNT_CENTS}}
    },
    "quantity": 1
  }],
  "success_url": "https://{{DOMAIN}}/welcome?session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://{{DOMAIN}}/apply",
  "metadata": {
    "offer": "{{OFFER_SLUG}}",
    "ghl_contact_id": "{{CONTACT_ID}}",
    "balance_due_cents": "{{BALANCE_CENTS}}"
  }
}
```

### Stripe payment plan (subscription style for installments)

```json
{
  "mode": "subscription",
  "line_items": [{
    "price": "{{PRICE_ID_3_MONTH}}",
    "quantity": 1
  }],
  "subscription_data": {
    "iterations": 3
  }
}
```

### Conversion benchmarks

| Metric | Target |
|---|---|
| Content > sales page | >10% |
| Sales page > apply | >5% |
| Apply > qualified | >50% |
| Qualified > book | >75% |
| Show rate | >75% |
| Call > close | >20-30% |
| Revenue per qualified call | >$500 |
