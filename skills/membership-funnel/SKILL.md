---
name: membership-funnel
description: Build a recurring membership or subscription funnel that acquires members on a free trial or low entry, then retains them with onboarding, content drip, and a community engagement loop. Trigger when Use "membership funnel", "subscription funnel", "build a community signup page", "free trial to paid", "Skool funnel", "Circle funnel", "monthly recurring offer", or describes a $9-$297/mo product. Audience can be cold, warm, or hot. Build pages in Lovable, Framer, or Next.js + Tailwind on Vercel; integrate with Skool/Circle/Whop or Memberstack/MemberSpace, Stripe + GHL for billing and CRM, and a retention email sequence. Skip for offer design, the enrollment script, or voice work, defer to launchmap-offer / launchmap-enrollment / magnetic-story.
---

# Membership Funnel

The money is in the renewal. Acquisition is half the job. Retention is the other half. Onboarding is what bridges them. Build the funnel for both at once.

## When to use

- Recurring community priced $9-$297/mo (Skool, Circle, Whop).
- Site-gated membership with content drip (Memberstack, MemberSpace, Outseta).
- Free-trial-to-paid software where the value lives in ongoing access.
- Coaching subscription, content library, monthly newsletter+, mastermind subscription.
- Audience already has a primary product, this is the always-on layer.

## When NOT to use

- Offer design, tier structure, or pricing strategy, defer to `product-creator` / `grand-slam-offer-architect` / `launchmap-offer`.
- The actual sales conversation if there is one (rare for this funnel), defer to `launchmap-enrollment`.
- The Million Dollar Message and core hook, defer to `launchmap-mdm`.
- Voice, story bridges, hero arc, first-person narrative, defer to `magnetic-story` / `cris-vinson-storybank`.
- Workshop or training program design, defer to `training-designer`.
- One-time courses or info products, route to `vsl-funnel` or `tripwire-funnel`.
- SaaS with per-seat or usage-based pricing, route to `saas-funnel` instead.

## The stack defaults

- Pages: Lovable for fastest ship, Framer for polish, Next.js + Tailwind on Vercel for control.
- Community platform: Skool (preferred for cohort + content + community in one), Circle (more polish, more $), Whop (best for crypto/digital-native audiences).
- Site-gated content: Memberstack or MemberSpace.
- Recurring billing: Stripe Subscriptions, fired by GHL workflows for tagging and notifications.
- CRM, email, SMS: GHL main location `[GHL_LOCATION_ID]`. Fast Track sub-account `[GHL_LOCATION_ID]` is separate, never touch unless Use "Fast Track" by name.
- Automation: n8n on VPS via SSH node, not the Anthropic API node.
- Tracking: Meta Pixel + GA4. Conversion events: TrialStarted, TrialActivated (first key action), TrialConverted, MonthlyRenewed, CancelInitiated, Saved.

## Page-by-page blueprint

### Page 1: Membership landing page

| Block | Word count | Purpose |
|---|---|---|
| Pre-headline tag | 3-7 words | Audience filter |
| Headline | 8-14 words | Community + transformation outcome |
| Sub-headline | 18-30 words | What they get, who it is for, monthly cadence |
| Hero CTA | 2-4 words | "Start Free Trial" or "Join Today" |
| Hero visual | n/a | Screenshot of member area or community |
| What is inside | 4-6 cards, 30-50 words each | Content categories, features |
| Member testimonials | 3-5 quotes, 40-60 words each | Community + results, with photos |
| Pricing | 1-2 plans max | Monthly + annual (with savings highlighted) |
| FAQ | 6-8 Q&As, 30-50 words each | Cancellation, what is included, refund |
| Final CTA | 2-4 words | "Start Your Free Trial" |

### Page 2: Signup / checkout

Stripe Checkout or embedded form. Email + payment. Trial uses card-on-file with 7-14 day grace. Trust signals next to button: "Cancel anytime, no questions asked."

### Page 3: Onboarding flow (3-5 screens, in-product or in-app)

| Step | Screen | Goal |
|---|---|---|
| 1 | Welcome + profile setup | Personalization |
| 2 | "What is your #1 goal?" | Tailor recommendations |
| 3 | Recommend first action | Immediate quick win |
| 4 | Tour of key features | Reduce overwhelm |
| 5 | Join the community space | Social anchor |

### Page 4: Member dashboard

Content library, community feed, progress tracker, upcoming events. The home base. Designed to bring them back weekly.

### Page 5: Cancellation flow

Required. Pause option, save offer, exit survey. Recovers 15-30% of cancels when done well.

## Process

1. **Intake**: confirm offer, price, platform (Skool/Circle/Whop/site-gated), trial terms, GHL location.
2. **Wireframe**: map landing, signup, onboarding screens, dashboard, cancel flow.
3. **Copy**: draft each block to word counts. Pull testimonials with permission, swap stock for real screenshots.
4. **Build**: scaffold landing in Lovable/Framer. Configure Skool/Circle/Whop or Memberstack. Wire Stripe Subscriptions.
5. **Integrate**: GHL workflow on Stripe webhook (TrialStarted, TrialConverted, Renewed, Cancelled). Meta Pixel + GA4.
6. **QA**: test the full lifecycle, trial > paid > renewal > cancel > save offer. Test failed-payment dunning. Test on mobile.
7. **Ship**: custom domain, smoke test, Loom walkthrough, queue first 30-day retention sequence.

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish.
- No em dashes anywhere in page copy, emails, or SMS.
- No URLs in any SMS. Move links to email.
- No auto-send to real contacts. Draft for The approval.
- Drip cadence: any send to >10 contacts must be 1 per 30-60 seconds or run via GHL workflow.
- Outreach DM/SMS opener: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." then personalize.
- Defensible credentials only: $10M+ revenue, 1,000+ trained.
- Defer voice and story work to `magnetic-story`.

## Anti-patterns

- Never run a membership without an onboarding flow. First-week activation predicts lifetime.
- Never give all the content on day one. Drip preserves the "always more coming" feel.
- Never auto-renew without a 7-day pre-renewal email. Surprise charges drive chargebacks.
- Never skip the cancellation flow. One-click cancel kills 20% of recoverable churn.
- Never run trials without card-on-file unless the platform forces it. Free-without-card converts at <10%.
- Never let the member dashboard be empty on day one. New users churn within 48hrs without a clear next action.
- Never bury community engagement. Members who post in week one churn 60% less.

## Templates

### HTML + Tailwind landing page skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{MEMBERSHIP_NAME}} | Join Today</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-900 font-sans">

  <!-- Hero -->
  <section class="px-6 py-20 max-w-5xl mx-auto text-center">
    <p class="text-sm uppercase tracking-widest text-gray-500">{{PRE_HEADLINE_TAG}}</p>
    <h1 class="text-4xl md:text-6xl font-bold mt-4">{{HEADLINE}}</h1>
    <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">{{SUBHEADLINE}}</p>
    <a href="#pricing" class="inline-block mt-8 px-8 py-4 bg-black text-white font-semibold rounded-lg">Start Your Free Trial</a>
    <p class="text-sm text-gray-500 mt-3">Cancel anytime. No questions asked.</p>
    <img src="{{HERO_VISUAL}}" class="mt-12 rounded-xl shadow-2xl mx-auto" alt="Member area preview" />
  </section>

  <!-- What is inside -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">What is inside</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {{REPEAT: FEATURE_CARD x 4-6}}
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="px-6 py-16 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Members are saying</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {{REPEAT: TESTIMONIAL_CARD x 3-5}}
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="bg-gray-50 px-6 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">Simple pricing</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-2xl font-bold">Monthly</h3>
          <p class="text-4xl font-bold mt-4">${{MONTHLY_PRICE}}<span class="text-lg text-gray-500">/mo</span></p>
          <a href="{{STRIPE_MONTHLY_URL}}" class="block mt-6 px-6 py-3 bg-black text-white rounded-lg">Start Free Trial</a>
        </div>
        <div class="bg-black text-white p-8 rounded-xl shadow relative">
          <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">Save 2 months</span>
          <h3 class="text-2xl font-bold">Annual</h3>
          <p class="text-4xl font-bold mt-4">${{ANNUAL_PRICE}}<span class="text-lg text-gray-300">/yr</span></p>
          <a href="{{STRIPE_ANNUAL_URL}}" class="block mt-6 px-6 py-3 bg-white text-black rounded-lg">Start Free Trial</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="px-6 py-16 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Common questions</h2>
    {{REPEAT: FAQ_ITEM x 6-8}}
  </section>

  <!-- Final CTA -->
  <section class="bg-black text-white px-6 py-20 text-center">
    <h2 class="text-3xl md:text-5xl font-bold">{{FINAL_CTA_HEADER}}</h2>
    <a href="#pricing" class="inline-block mt-8 px-10 py-4 bg-white text-black font-semibold rounded-lg">Start Your Free Trial</a>
  </section>

</body>
</html>
```

### Stripe subscription checkout config

```json
{
  "mode": "subscription",
  "line_items": [{
    "price": "{{STRIPE_PRICE_ID}}",
    "quantity": 1
  }],
  "subscription_data": {
    "trial_period_days": 14,
    "metadata": {
      "membership": "{{MEMBERSHIP_SLUG}}",
      "ghl_contact_id": "{{CONTACT_ID}}"
    }
  },
  "success_url": "https://{{DOMAIN}}/welcome?session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://{{DOMAIN}}/join",
  "payment_method_collection": "always",
  "allow_promotion_codes": true
}
```

### GHL workflow outline (Stripe webhook driven)

1. **Trigger**: Stripe webhook = `customer.subscription.created`.
2. **Tag**: `member-trial-{{slug}}`. Add to "Members" pipeline.
3. **Send**: welcome email immediately (login details, quick-start link).
4. **Sequence**: kick off retention email schedule (see below).
5. **Trigger**: webhook = `customer.subscription.trial_will_end` (3 days before).
6. **Send**: "Your trial ends in 3 days, here is what to do next" email.
7. **Trigger**: webhook = `invoice.paid` (first paid invoice).
8. **Tag**: replace `member-trial` with `member-active-{{slug}}`. Slack ping Cris.
9. **Trigger**: webhook = `invoice.payment_failed`.
10. **Send**: dunning sequence (day 1, 3, 5). Tag `member-dunning`.
11. **Trigger**: webhook = `customer.subscription.deleted`.
12. **Send**: exit survey + win-back offer 7 days later.

### Retention email sequence

| Email | Timing | Purpose |
|---|---|---|
| Welcome | Immediately | Login, quick-start guide |
| Quick Win | +24 hours | "Complete this in 10 min and see [result]" |
| Community | +3 days | "Meet other members and introduce yourself" |
| Weekly Value | Every Monday | New content highlight, member spotlight |
| Engagement Check | +14 days | "Have not logged in? Here is what you missed" |
| Win Celebration | Monthly | "Congrats on [milestone]" |
| Pre-Renewal | 7 days before renewal | Value recap, what is coming next month |
| Trial-End Reminder | 3 days before trial ends | "What to do before your trial ends" |
| Cancellation Save | On cancel request | "Before you go, here is a pause option or special save offer" |

### Cancellation flow (page sequence)

1. **Cancel intent page**: "Are you sure?" + show what they will lose.
2. **Pause option**: 30, 60, 90 day pause at $0.
3. **Save offer**: 50% off next 3 months OR drop to a smaller tier.
4. **Exit survey**: 1 question, multiple choice (price, time, value, fit, other).
5. **Confirmation**: cancel confirmed, win-back email queued for +30 days.

### Key metrics

| Metric | Target |
|---|---|
| Trial signup rate | >10% |
| Trial > paid | >40% |
| Monthly churn | <5% |
| Avg member lifetime | >6 months |
| LTV:CAC | >3:1 |
| NPS | >50 |
| Cancel save rate | >15% |

### Churn reduction tactics

1. First 48 hours, get them a quick win.
2. Community engagement, members who post churn 60% less.
3. Visual progress milestones.
4. Drip content, do not give everything at once.
5. Annual plan incentive, 2 months free.
6. Cancellation flow with pause + save offer + exit survey.
