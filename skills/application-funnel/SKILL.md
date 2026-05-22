---
name: application-funnel
description: Build an application/qualification funnel for high-ticket offers priced $2,000 and up. Trigger when Use "application funnel", "qualify before the call", "build an apply page", "premium coaching funnel", or describes a $2K-$10K coaching, consulting, mastermind, or done-with-you program where leads must apply before booking. Audience is warm-to-hot (newsletter, podcast, program alumni, webinar attendees, referrals). Build pages in Lovable, Framer, or Next.js + Tailwind on Vercel; integrate with GHL for application form, scoring tags, calendar booking, payment, and CRM. Skip for offer design, the enrollment script itself, or voice work, defer to launchmap-offer / launchmap-enrollment / magnetic-story.
---

# Application Funnel

A qualification gate that filters $2K+ buyers before any human gets on a call. The page sells the transformation. The form filters. The calendar only opens for qualified applicants. Every step is wired to GHL.

## When to use

- Coaching or consulting program priced $2,000 to $10,000 where Cris does not want unqualified calls.
- Mastermind, group coaching, or cohort with limited seats and a "right fit" requirement.
- Done-with-you offer where a discovery call is required and The calendar capacity is a real constraint.
- Warm audience flow: webinar attendee, newsletter, podcast listener, program alumni, referral.
- Re-engaging cooled-off leads who already know Cris but have not bought yet.

## When NOT to use

- Offer design, pricing, stack, or guarantees, defer to `product-creator` / `grand-slam-offer-architect` / `launchmap-offer`.
- The actual sales conversation script run on the call, defer to `launchmap-enrollment`.
- The Million Dollar Message or hook positioning, defer to `launchmap-mdm`.
- Brand voice, story bridges, hero arcs, or first-person narrative, defer to `magnetic-story` / `cris-vinson-storybank`.
- Workshop or training curriculum, defer to `training-designer`.
- $3,000+ offers where the long-form sales page does most of the work, route to `high-ticket-funnel` instead.
- Self-checkout under $2,000, route to `tripwire-funnel` or `optin-funnel`.

## The stack defaults

- Pages: Lovable for fastest ship, Framer for design polish, Next.js + Tailwind on Vercel for full control.
- Calendar booking: GHL native calendars (preferred). Calendly only as fallback when client is non-GHL.
- Application form: GHL custom forms with conditional logic and scoring tags.
- Payments: Stripe via GHL.
- CRM, email, SMS: GHL main location `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate, never touch unless Use "Fast Track" by name.
- Automation: n8n on VPS via SSH node, not the Anthropic API node.
- Tracking: Meta Pixel + GA4 on every page, Application Submitted and Call Booked as conversion events.

## Page-by-page blueprint

### Page 1: Application landing page

| Block | Word count | Purpose |
|---|---|---|
| Pre-headline tag | 3-7 words | Audience filter ("For coaches doing $5K-$50K/mo") |
| Headline | 8-14 words | Specific transformation outcome, no method |
| Sub-headline | 18-30 words | Mechanism + timeframe + what it removes |
| Hero CTA | 2-4 words | "Apply Now" never "Buy Now" |
| Who this is for | 4 bullets, 8-12 words each | Identify the qualified buyer |
| Who this is NOT for | 4 bullets, 8-12 words each | Repel the wrong fit |
| Proof block | 3-5 case studies, 40-60 words each | Specific numbers + named clients |
| The process | 3 steps, 20-30 words each | What working together looks like |
| About | 60-90 words | Defensible credentials only ($10M+ revenue, 1,000+ trained) |
| FAQ | 6-8 Q&As, 30-50 words each | Process, time, qualifications, no pricing |
| Final CTA | 2-4 words | "Apply Now" with seat scarcity if real |

### Page 2: Application form (GHL)

10-14 questions max. Mix of multiple choice (scoreable) and short text. Conditional branching to skip irrelevant follow-ups.

### Page 3: Calendar booking

Only shown to applicants who pass the score threshold. Fail state goes to a holding page with "We will be in touch if a seat opens" and tags the contact for later nurture.

### Page 4: Booking confirmation

Sets expectations: call length, who joins, what to bring, what happens after. Adds Zoom link, GHL native reminder cadence (24hr email + 1hr SMS), pre-call homework link.

### Page 5: Pre-call homework (optional but recommended)

A short Loom or doc the applicant must consume before the call. Increases show rate and call close rate.

## Application qualification logic

### Scoring rubric (0-100)

| Question | Max points | Disqualifier threshold |
|---|---|---|
| Current revenue / situation | 20 | Below floor = auto-disqualify |
| 90-day goal clarity | 15 | Vague = -10 |
| What they have tried | 10 | "Nothing" = -5 |
| Commitment 1-10 | 20 | <7 = auto-disqualify |
| Investment readiness | 20 | Below offer floor = auto-disqualify |
| Start timeline | 15 | "Just exploring" = auto-disqualify |

Pass: 70+. Review: 50-69 (Cris reviews manually). Fail: <50 (auto-nurture).

### Disqualifier rules (hard)

- Budget below offer minimum.
- Start timeline = "Just exploring" or ">6 months out".
- Commitment score below 7.
- Industry, geography, or use-case outside The serve zone.

### Hand-off to call

- Pass score: GHL workflow tags `application-qualified`, sends calendar link via email + SMS, adds Cris-internal Slack ping, sets owner to Cris.
- Review score: tags `application-review`, sends "Thanks, we are reviewing" email, queues internal review task.
- Fail: tags `application-disqualified`, sends polite decline email with self-serve resource ([YOUR_PROGRAM], newsletter, low-ticket product), drops into long-term nurture sequence.

## Process

1. **Intake**: confirm offer, price, audience temperature, GHL location (main vs Fast Track), existing assets.
2. **Wireframe**: sketch the 5 pages on paper or in Lovable comments before any copy.
3. **Copy**: draft each block to the word counts above. Run through brand voice rules below.
4. **Build**: scaffold in Lovable/Framer/Next.js. Drop in proof, headshots, case study photos.
5. **Integrate**: GHL form, scoring workflow, calendar embed, Stripe (if applicable), Meta Pixel, GA4.
6. **QA**: submit a real test application from each scoring tier. Confirm tags, emails, SMS, calendar invites all fire correctly. Test on iPhone Safari, Android Chrome, desktop.
7. **Ship**: push to custom domain. Run smoke test. Hand Cris the loom + checklist.

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish.
- No em dashes anywhere in page copy, emails, or SMS. Use commas, periods, colons, or rewrite.
- No URLs in any SMS. Move links to email or tell them to check email.
- No auto-send to real contacts. Draft every email, SMS, and DM for The approval before firing.
- Drip cadence: any send to >10 contacts must be 1 per 30-60 seconds or run via GHL workflow.
- Outreach DM/SMS opener: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." then personalize.
- Defensible credentials only: $10M+ revenue, 1,000+ trained. Never use the inflated $100M+/1,500+ from older docs.
- Defer voice and story work to `magnetic-story`.

## Anti-patterns

- Never run an unqualified booking calendar for a $2K+ offer. Self-serve booking burns The time.
- Never put pricing on the application page. Price is a call conversation.
- Never let the application form exceed 14 questions. Drop-off doubles after that.
- Never auto-book disqualified applicants. Decline politely and route to nurture.
- Never use generic "Book a call" CTAs. Use "Apply Now" to signal exclusivity and pre-frame the gate.
- Never skip the pre-call confirmation sequence. Show rate drops 30% without it.
- Never route applicants into a Calendly link when GHL native calendars are available. You lose CRM tagging.

## Templates

### HTML + Tailwind landing page skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{OFFER_NAME}} | Apply Now</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Meta Pixel -->
  <script>
    !function(f,b,e,v,n,t,s){/* standard pixel snippet */}
    fbq('init', '{{META_PIXEL_ID}}');
    fbq('track', 'PageView');
  </script>
  <!-- GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={{GA4_ID}}"></script>
</head>
<body class="bg-white text-gray-900 font-sans">
  <section class="px-6 py-16 max-w-4xl mx-auto text-center">
    <p class="text-sm uppercase tracking-widest text-gray-500">{{PRE_HEADLINE_TAG}}</p>
    <h1 class="text-4xl md:text-6xl font-bold mt-4 leading-tight">{{HEADLINE}}</h1>
    <p class="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">{{SUBHEADLINE}}</p>
    <a href="#apply" class="inline-block mt-8 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">Apply Now</a>
  </section>

  <section class="px-6 py-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
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

  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Client results</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {{REPEAT: CASE_STUDY_CARD x 3}}
      </div>
    </div>
  </section>

  <section class="px-6 py-16 max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">How it works</h2>
    <ol class="space-y-6">
      <li><strong>1.</strong> {{STEP_1}}</li>
      <li><strong>2.</strong> {{STEP_2}}</li>
      <li><strong>3.</strong> {{STEP_3}}</li>
    </ol>
  </section>

  <section class="bg-black text-white px-6 py-16 text-center" id="apply">
    <h2 class="text-3xl md:text-5xl font-bold">Ready to apply?</h2>
    <p class="mt-4 text-gray-300 max-w-xl mx-auto">{{CTA_SUB}}</p>
    <a href="{{GHL_FORM_URL}}" class="inline-block mt-8 px-10 py-4 bg-white text-black font-semibold rounded-lg">Apply Now</a>
  </section>
</body>
</html>
```

### Application form schema (GHL)

```json
{
  "form_name": "{{OFFER_NAME}} Application",
  "fields": [
    {"key": "first_name", "label": "First name", "type": "text", "required": true},
    {"key": "last_name", "label": "Last name", "type": "text", "required": true},
    {"key": "email", "label": "Email", "type": "email", "required": true},
    {"key": "phone", "label": "Phone (with country code)", "type": "phone", "required": true},
    {"key": "current_revenue", "label": "Current monthly revenue", "type": "select",
     "options": [
       {"label": "Under $5K", "value": "lt_5k", "score": 0, "disqualify": true},
       {"label": "$5K-$15K", "value": "5_15k", "score": 10},
       {"label": "$15K-$50K", "value": "15_50k", "score": 20},
       {"label": "$50K+", "value": "gt_50k", "score": 20}
     ]},
    {"key": "goal_90_days", "label": "What is your #1 goal in the next 90 days?", "type": "textarea", "max_score": 15},
    {"key": "tried_so_far", "label": "What have you tried so far?", "type": "textarea", "max_score": 10},
    {"key": "commitment", "label": "On a 1-10 scale, how committed are you to solving this?", "type": "select",
     "options": [
       {"label": "1-6", "value": "low", "score": 0, "disqualify": true},
       {"label": "7-8", "value": "mid", "score": 15},
       {"label": "9-10", "value": "high", "score": 20}
     ]},
    {"key": "investment", "label": "If we can help you achieve [result], are you in a position to invest $X-$Y?", "type": "select",
     "options": [
       {"label": "Yes", "value": "yes", "score": 20},
       {"label": "Maybe", "value": "maybe", "score": 10},
       {"label": "No", "value": "no", "score": 0, "disqualify": true}
     ]},
    {"key": "timeline", "label": "When do you want to start?", "type": "select",
     "options": [
       {"label": "This week", "value": "now", "score": 15},
       {"label": "This month", "value": "month", "score": 10},
       {"label": "Just exploring", "value": "explore", "score": 0, "disqualify": true}
     ]}
  ],
  "scoring": {
    "pass_threshold": 70,
    "review_threshold": 50,
    "fail_below": 50
  }
}
```

### GHL workflow outline

1. **Trigger**: Form submitted = "{{OFFER_NAME}} Application".
2. **Calculate score**: sum field scores via GHL custom values + math.
3. **Branch on score**:
   - Pass (70+): tag `application-qualified` + `offer-{{slug}}`. Send calendar link via email and SMS. Slack ping Cris. Owner = Cris.
   - Review (50-69): tag `application-review`. Send "We are reviewing" email. Create internal review task.
   - Fail (<50): tag `application-disqualified`. Send polite decline email with free resource link. Add to long-term nurture pipeline.
4. **Reminders** (qualified path): 24hr before call email, 1hr before call SMS (no link, just "Check your email for the Zoom link").
5. **No-show**: 1hr after missed call, send reschedule link. After 48hr no response, tag `no-show` and pause.

### Stripe checkout config (for deposit-on-call)

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
    "ghl_contact_id": "{{CONTACT_ID}}"
  }
}
```

### Conversion benchmarks

| Metric | Target |
|---|---|
| Landing page > start application | >15% |
| Start > complete | >60% |
| Complete > qualified | >50% |
| Qualified > book call | >75% |
| Show rate | >70% |
| Call > close | >20-30% |
| Visitor > client | >1% |
