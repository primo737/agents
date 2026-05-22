---
name: saas-funnel
description: Build a 4-6 page SaaS trial or freemium funnel that converts cold visitors to product signups, then nurtures trial users to paid plans. Trigger when Use "SaaS funnel", "trial signup funnel", "freemium funnel", "build a SaaS landing page", "SaaS pricing page", "convert trial users to paid", or describes a software product with recurring revenue. Audience is mostly cold (paid traffic, SEO, content) or warm (newsletter, podcast). Build pages in Next.js + Tailwind on Vercel/Render/Fly (preferred for SaaS), or Lovable/Framer for marketing pages; integrate with Stripe direct for billing, GHL for marketing-side CRM and email, and product analytics (PostHog, Mixpanel, GA4). Skip for offer design, the in-app onboarding flow itself, or voice work, defer to launchmap-offer / training-designer / magnetic-story.
---

# SaaS Funnel

Designed for software-as-a-service products. Cold visitors become trial users. Trial users hit an Aha moment. Aha moment becomes a subscription. Every page exists to compress the time to value.

## When to use

- Software product with recurring revenue, $9-$299/mo per user or per seat.
- Free trial (7-30 day) or freemium with paid upgrade.
- Self-serve top-of-funnel with sales-assist for enterprise.
- Cold or warm traffic from Google, paid social, content marketing, podcast, or product hunt launch.
- B2B or prosumer software where the user can evaluate the product without a call.

## When NOT to use

- Offer design, pricing strategy, packaging, defer to `product-creator` / `grand-slam-offer-architect` / `launchmap-offer`.
- The actual in-app onboarding curriculum, defer to `training-designer`.
- The Million Dollar Message and core hook, defer to `launchmap-mdm`.
- Voice, story bridges, hero arc, founder narrative copy, defer to `magnetic-story` / `cris-vinson-storybank`.
- High-touch enterprise sales requiring a discovery call, route to `high-ticket-funnel`.
- Subscription community or content membership, route to `membership-funnel`.
- One-time digital product or course, route to `vsl-funnel` or `tripwire-funnel`.

## The stack defaults

- Pages: Next.js + Tailwind on Vercel (preferred for SaaS marketing site), Render or Fly for the app itself. Lovable or Framer for fast marketing-page iteration.
- App auth: Clerk, Auth.js, or Supabase Auth. Always offer Google + email SSO.
- Billing: Stripe direct (subscriptions, customer portal, usage-based metering). Webhooks into the app.
- Product analytics: PostHog (preferred, self-hostable on the VPS) or Mixpanel.
- Web analytics: GA4 + Meta Pixel on marketing pages.
- CRM and email (marketing): GHL main location `[GHL_LOCATION_ID]` for nurture + lifecycle. Fast Track sub-account `[GHL_LOCATION_ID]` is separate, never touch unless Use "Fast Track" by name.
- Transactional email (in-product): Postmark, Resend, or AWS SES.
- Automation: n8n on VPS via SSH node, not the Anthropic API node.

## Page-by-page blueprint

### Page 1: Landing page (homepage)

| Block | Word count | Purpose |
|---|---|---|
| Hero | 12-20 words headline + 20-35 sub | Outcome + CTA + product visual |
| Social proof bar | 8-15 words | Logos or "10,000+ teams" |
| Features grid (3-6 cards) | 30-50 each | Outcome-led, not feature-led |
| How it works | 3 steps, 15-25 each | Sign up > Configure > See results |
| Use cases (2-3) | 60-100 each | Specific persona + outcome |
| Testimonials | 3-5 quotes, 30-50 each | Photos, company names |
| Pricing preview | n/a | Plans overview, "Start Free" CTA |
| FAQ | 6-10 Q&As, 30-50 each | Pricing, security, integrations, cancel |
| Final CTA | 4-8 words | Full-width, repeat primary CTA |

Hero headline patterns:
- "[Verb] your [process] in [fraction of time]"
- "The [category] tool that [specific benefit]"
- "Stop [pain]. Start [desired state]."
- "[N]x faster [process] for [audience]"

CTA patterns:
- "Start Free Trial"
- "Get Started, No Credit Card Required"
- "See It in Action" (for demo-first flow)

### Page 2: Signup page

| Element | Spec |
|---|---|
| Form | Email + password OR Google/GitHub SSO |
| Value reminder | "Start your 14-day free trial" |
| Trust signals | "No credit card required", "Cancel anytime" |
| SSO | Google (always), GitHub if dev tool, Microsoft if B2B |
| Terms | Link to terms + privacy |

Critical rules: NO navigation, NO long forms, NO credit card for trial, social login reduces friction by 30%+.

### Page 3: In-app onboarding

3-5 steps to the Aha moment. Each step is the single most-important action that produces visible value.

| Step | Screen | Goal |
|---|---|---|
| 1 | Welcome + 2-min quick start | Frame the journey |
| 2 | Key action 1 | Most-impactful setup step |
| 3 | Key action 2 | Second-most-impactful action |
| 4 | First result | See value |
| 5 | "You are all set" + next steps | Anchor return visit |

### Page 4: Pricing / upgrade page

| Element | Spec |
|---|---|
| Plan comparison | Feature table, recommended plan visually highlighted |
| Annual vs monthly toggle | Annual default, monthly available |
| Per-seat or usage calculator | If applicable |
| Risk reversal | 30-day refund or money-back |
| FAQ | Pricing-specific |
| Enterprise CTA | "Contact Sales" for >X seats |

Pricing table best practices:
- Highlight recommended plan with color, "Most Popular" badge, slightly larger card.
- Show annual by default (higher LTV), monthly toggle.
- Show per-unit price ("$29/user/month").

### Page 5: Customer portal

Stripe Customer Portal embed or Stripe Billing Portal link. User self-serve: change plan, update card, download invoices, cancel.

### Page 6: Cancellation flow (optional but recommended)

Same approach as membership-funnel. Pause, save offer, exit survey.

## Process

1. **Intake**: confirm product, ICP, pricing model (per-seat, usage, flat), trial length, GHL location.
2. **Wireframe**: marketing pages in Lovable/Framer, app screens separately.
3. **Copy**: outcome-led, not feature-led. Pull testimonials with permission.
4. **Build**: marketing on Vercel, app on Vercel/Render/Fly. Wire Stripe + Clerk/Auth.js + PostHog.
5. **Integrate**: GHL for marketing CRM, Postmark/Resend for transactional, Stripe webhooks for lifecycle tags, PostHog for activation events.
6. **QA**: full lifecycle test, signup > onboarding > activation > paid > cancel > save offer. Failed-payment dunning. Mobile responsive. Lighthouse >90.
7. **Ship**: custom domain, smoke test, set up alerting (Sentry + uptime).

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish.
- No em dashes anywhere in page copy, emails, or in-product strings.
- No URLs in any SMS. Move links to email.
- No auto-send to real contacts. Draft for The approval.
- Drip cadence: any send to >10 contacts must be 1 per 30-60 seconds or run via GHL workflow.
- Outreach DM/SMS opener: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." then personalize.
- Defensible credentials only: $10M+ revenue, 1,000+ trained.
- Defer voice and story work to `magnetic-story`.

## Anti-patterns

- Never bury the trial CTA below the fold. Hero CTA + sticky nav CTA minimum.
- Never require a credit card for a free trial unless the platform forces it. Conversion drops by half.
- Never let the signup page have navigation. Escape routes lose 20-30% of signups.
- Never write feature-led copy on the homepage. Outcome first, feature second.
- Never use a 3-plan pricing table without a "Most Popular" anchor. Plans look identical without it.
- Never skip the activation event in product analytics. Without it, you cannot tell when onboarding is broken.
- Never let trial expire silently. 7-day, 3-day, 1-day, day-of reminder emails are mandatory.

## Templates

### HTML + Tailwind landing page skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{PRODUCT_NAME}} | {{TAGLINE}}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-900 font-sans">

  <!-- Nav with sticky CTA -->
  <nav class="sticky top-0 bg-white border-b z-50 px-6 py-4 flex justify-between items-center">
    <a href="/" class="font-bold text-lg">{{PRODUCT_NAME}}</a>
    <div class="flex gap-4 items-center">
      <a href="/pricing" class="text-sm">Pricing</a>
      <a href="/login" class="text-sm">Log in</a>
      <a href="/signup" class="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold">Start Free</a>
    </div>
  </nav>

  <!-- Hero -->
  <section class="px-6 py-20 max-w-5xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold leading-tight">{{HEADLINE}}</h1>
    <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">{{SUBHEADLINE}}</p>
    <a href="/signup" class="inline-block mt-8 px-8 py-4 bg-black text-white font-semibold rounded-lg">Start Free Trial</a>
    <p class="text-sm text-gray-500 mt-3">No credit card required. Cancel anytime.</p>
    <img src="{{PRODUCT_SCREENSHOT}}" class="mt-12 rounded-xl shadow-2xl mx-auto" alt="{{PRODUCT_NAME}} preview" />
  </section>

  <!-- Social proof -->
  <section class="px-6 py-8 bg-gray-50">
    <div class="max-w-5xl mx-auto text-center">
      <p class="text-sm text-gray-500 uppercase tracking-widest">Trusted by</p>
      <div class="flex flex-wrap justify-center items-center gap-8 mt-4 opacity-60">
        {{REPEAT: CUSTOMER_LOGO x 5-8}}
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="px-6 py-16 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">{{FEATURES_HEADER}}</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {{REPEAT: FEATURE_CARD x 3-6}}
    </div>
  </section>

  <!-- How it works -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">How it works</h2>
      <ol class="space-y-8">
        <li><strong>1. Sign up.</strong> {{STEP_1}}</li>
        <li><strong>2. Configure.</strong> {{STEP_2}}</li>
        <li><strong>3. See results.</strong> {{STEP_3}}</li>
      </ol>
    </div>
  </section>

  <!-- Pricing preview -->
  <section class="px-6 py-16 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Simple pricing</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Starter -->
      <div class="border rounded-xl p-6">
        <h3 class="text-xl font-bold">Starter</h3>
        <p class="text-3xl font-bold mt-2">$0<span class="text-base text-gray-500">/mo</span></p>
        <a href="/signup" class="block mt-6 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg text-center">Current Plan</a>
      </div>
      <!-- Pro highlighted -->
      <div class="border-2 border-black rounded-xl p-6 relative">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>
        <h3 class="text-xl font-bold">Pro</h3>
        <p class="text-3xl font-bold mt-2">$29<span class="text-base text-gray-500">/mo</span></p>
        <a href="/signup?plan=pro" class="block mt-6 px-4 py-2 bg-black text-white rounded-lg text-center">Upgrade to Pro</a>
      </div>
      <!-- Enterprise -->
      <div class="border rounded-xl p-6">
        <h3 class="text-xl font-bold">Enterprise</h3>
        <p class="text-3xl font-bold mt-2">Custom</p>
        <a href="/contact" class="block mt-6 px-4 py-2 border border-black rounded-lg text-center">Contact Sales</a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Common questions</h2>
      {{REPEAT: FAQ_ITEM x 6-10}}
    </div>
  </section>

  <!-- Final CTA -->
  <section class="bg-black text-white px-6 py-20 text-center">
    <h2 class="text-3xl md:text-5xl font-bold">{{FINAL_CTA_HEADER}}</h2>
    <a href="/signup" class="inline-block mt-8 px-10 py-4 bg-white text-black font-semibold rounded-lg">Start Free Trial</a>
  </section>

</body>
</html>
```

### Stripe subscription checkout config (SaaS)

```json
{
  "mode": "subscription",
  "line_items": [{
    "price": "{{STRIPE_PRICE_ID_PRO_MONTHLY}}",
    "quantity": 1
  }],
  "subscription_data": {
    "trial_period_days": 14,
    "metadata": {
      "plan": "pro",
      "user_id": "{{APP_USER_ID}}"
    }
  },
  "success_url": "https://app.{{DOMAIN}}/billing/success?session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://{{DOMAIN}}/pricing",
  "payment_method_collection": "if_required",
  "allow_promotion_codes": true,
  "billing_address_collection": "auto",
  "automatic_tax": {"enabled": true}
}
```

### Customer portal config

```json
{
  "customer": "{{STRIPE_CUSTOMER_ID}}",
  "return_url": "https://app.{{DOMAIN}}/settings",
  "configuration": {
    "features": {
      "subscription_cancel": {"enabled": true, "mode": "at_period_end"},
      "subscription_update": {"enabled": true, "default_allowed_updates": ["price", "quantity"]},
      "payment_method_update": {"enabled": true},
      "invoice_history": {"enabled": true}
    }
  }
}
```

### Trial nurture email sequence (14-day)

| Day | Email Focus |
|---|---|
| 0 | Welcome + quickstart link |
| 1 | Tip: How to [key feature] |
| 3 | Case study: How [Company] uses [Product] |
| 5 | "Have you tried [feature]?" |
| 7 | Midpoint check-in + offer help |
| 10 | Premium feature preview |
| 12 | Trial ending warning + upgrade CTA |
| 13 | Final reminder + special offer |
| 14 | Trial expired + limited-time extension |

### Activation event tracking (PostHog)

```javascript
// Fire when the user completes the Aha moment
posthog.capture('activated', {
  plan: 'trial',
  days_to_activation: 2,
  primary_action: '{{KEY_ACTION_NAME}}'
});

// Fire on upgrade
posthog.capture('upgraded', {
  from: 'trial',
  to: 'pro',
  mrr_added: 29
});
```

### Key metrics

| Metric | Target | Meaning |
|---|---|---|
| Visitor > signup | 3-8% | Landing page effectiveness |
| Signup > activation | 40-70% | Onboarding quality |
| Activation > paid | 15-30% | Product-market fit |
| Monthly churn | <5% | Customer satisfaction |
| LTV:CAC | >3:1 | Business sustainability |
| Net revenue retention | >100% | Expansion offsetting churn |

### A/B test priorities

1. Hero headline, feature-focused vs outcome-focused.
2. CTA copy, "Start Free Trial" vs "Get Started Free" vs "See Demo".
3. Social login on/off.
4. Pricing, 2 vs 3 vs 4 plans.
5. Trial length, 7 vs 14 vs 30 days.
