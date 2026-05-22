---
name: vsl-funnel
description: Build a Video Sales Letter funnel for info products, courses, and coaching priced $97 to $2,000. Trigger phrases include "build a VSL funnel", "video sales letter page", "long-form video pitch", "VSL with order page", "warm traffic VSL", or "evergreen VSL for cold paid traffic". Best for warm and cold audiences who will sit through a 15 to 25 minute pitch video. Build pages in Lovable (fast) or Framer (polish) or Next.js plus Tailwind, host on Vercel. Skip for the webinar SCRIPT (defer to expert-secrets-perfect-webinar), offer design (defer to product-creator, grand-slam-offer-architect, or launchmap-offer), Million Dollar Message (launchmap-mdm), storytelling and voice (magnetic-story or cris-vinson-storybank), authority talk (launchmap-authority), and enrollment script (launchmap-enrollment).
---

# VSL Funnel

A Video Sales Letter funnel sells through one persuasive video, then a buy button. No long copy, no live event, no scheduled call. Watch, click, buy.

## When to use

1. Info product, mini-course, or self-study program priced $97 to $497, cold paid traffic from Meta or YouTube.
2. Coaching or done-with-you program priced $497 to $2,000, warm audience from email list, podcast, or content.
3. Evergreen lead magnet upgrade where the freebie page redirects into a 12 to 18 minute VSL.
4. A book or low-ticket front-end where the goal is to break even on ad spend and qualify buyers for a back-end.
5. Replacing a long-form sales page that converts but feels heavy - the same pitch in spoken form usually lifts conversion 1.5x to 2x for visual learners.

## When NOT to use

- The pitch is a 60 to 90 minute teaching event - that is a webinar. Use `webinar-funnel` for the funnel build and `expert-secrets-perfect-webinar` for the SCRIPT.
- The product is over $2,000 and needs a sales conversation - use `application-funnel` and `launchmap-enrollment`.
- The offer itself is undefined or the value stack is weak - fix that first with `product-creator`, `grand-slam-offer-architect`, or `launchmap-offer`.
- The Million Dollar Message is unclear - defer to `launchmap-mdm`.
- The story arc, hook, or epiphany bridge needs writing - defer to `magnetic-story` and `cris-vinson-storybank`.
- The pitch needs to establish authority before selling - use `launchmap-authority` to build the talk first.

## The stack defaults

- Pages: Lovable for speed, Framer for polish, or Next.js plus Tailwind for full control. Deploy to Vercel.
- VSL hosting: Vimeo Pro or Wistia. Never YouTube - sidebar suggestions and ads break attention.
- Reg, forms, email, and order capture: GHL main location `[GHL_LOCATION_ID]`. Confirm with Cris before any GHL action - main or Fast Track.
- Automation: n8n on the VPS via SSH using the existing Claude SSH pattern (see `launchmap-builder-claude` reference workflow). Do not use the Anthropic API node.
- Reminders and SMS: GHL workflows. Never put URLs in SMS - direct to email or WhatsApp.
- Tracking: Meta Pixel and GA4 on every page. Fire a custom `vsl_25`, `vsl_50`, `vsl_75`, and `vsl_cta_visible` event from the player.
- Checkout: Stripe via GHL or direct Stripe Payment Link for $97 to $497. For $497+ use a one-step or two-step order form on a hosted Lovable or Framer page.

## Page-by-page blueprint

### Page 1 - VSL page

Goal: get the visitor watching and clicking buy. No navigation, no footer links, no logo link to home.

Sections, in order:

1. Pre-headline (5 to 10 words): identifies who this is for. Example: "For coaches doing $5k to $20k a month."
2. Headline (8 to 14 words): the outcome and the timeframe. No clever wordplay.
3. Video player (full width on desktop, 16:9): autoplay muted with a "Tap to unmute" overlay on mobile. Vimeo Pro or Wistia, no YouTube.
4. Delayed CTA button: hidden until 60 to 80 percent of the video has played, or a hard 12 to 15 minute mark for a 20 minute VSL. Button copy: "Get [Outcome] Now - $[Price]" or "Yes, I Want In".
5. Below the fold (only visible after CTA reveals): three to five short proof bullets (15 to 25 words each), one risk-reversal line, one final CTA.

Word counts per block: pre-headline 8, headline 12, proof bullets 20 each, risk reversal 25, final CTA 8. Total page copy under 250 words.

### Page 2 - Order page

Sections, in order:

1. Headline restating what they are buying (10 words).
2. Order summary (product name, price, what is included - 4 to 6 line items).
3. Order form: name, email, billing, card. One step preferred for $97 to $297, two step for $497+.
4. Trust strip: payment logos, SSL badge, satisfaction guarantee badge.
5. Three short testimonials (40 to 60 words each).
6. Guarantee box (50 to 80 words): specific terms, specific timeframe.
7. FAQ (5 to 7 questions, 30 to 50 words each).

### Page 3 - One-time offer (optional)

Triggered immediately after purchase. Single page, single CTA.

1. "Wait - before you go" pre-header.
2. Headline naming the upsell and the discount.
3. 60 to 90 second video or 100 to 200 words of copy.
4. Two buttons: "Yes, add to my order for $X" and a smaller "No thanks, take me to my product".
5. No back button trickery, no hidden close X.

### Page 4 - Thank you and access

1. Confirmation headline ("You're in. Here's what happens next.").
2. Login or access details (or "Check your email in 2 minutes").
3. What to do in the next 24 hours (3 step list).
4. Support contact and refund policy link.

## Conversion essentials

- Risk reversal: 30 day money back, no questions asked. Spell out the exact mechanism ("Email support@ and we refund within 48 hours"). Vague guarantees do not lift conversion.
- Scarcity, only if real: a genuine cohort close date, a genuine bonus expiry, a genuine price increase. Never a fake countdown that resets on refresh.
- Proof placement: one proof element above the CTA on the VSL page, three on the order page, one inside the guarantee box.
- Mobile first: 70 percent of cold paid traffic is mobile. Test the VSL page on a 375px viewport before launch.
- Page speed: target Lighthouse mobile score 85+. Compress thumbnail to under 80kb. Lazy load nothing above the fold.

## Process

1. Intake: get the offer, the price, the audience temperature, the source of traffic, the proof assets, and the desired launch date.
2. Script outline: pull from `magnetic-story` for the story beats and from the offer skill for the stack. Confirm the One Big Domino before scripting.
3. Page wireframe: sketch the 4 pages above in plain text with section headers and word counts.
4. Copy: draft headline, pre-headline, button copy, proof bullets, guarantee, FAQ. Keep under word count caps.
5. Build: Lovable for first pass. Move to Framer if Cris wants polish. Move to Next.js only if there is a custom interaction.
6. QA: test on mobile and desktop, Chrome and Safari. Verify Pixel and GA4 fire on page view, video 25 / 50 / 75 percent, CTA click, and purchase. Verify the order form submits to GHL and triggers the access email.
7. Ship: deploy to Vercel, set the custom domain, run the smoke test purchase with a real card, refund it, confirm the refund flow.
8. Post-launch debrief: pull the funnel report at 100 visitors, 500 visitors, and 2,000 visitors. Compare to benchmarks below. If a stage underperforms by more than 30 percent, that is the next test.

## Brand voice rules

- English only on every page, every email, every SMS.
- No em dashes anywhere in the copy. Use commas, periods, colons, or rewrite.
- No URLs in SMS reminders. Direct to email or WhatsApp instead.
- No auto-send to contacts. Draft every outbound message for The approval before firing.
- Sends over 10 contacts must drip at 1 per 30 to 60 seconds, or run via a GHL workflow. Confirm cadence before sending.
- Outreach DMs must open with "Hi [Name], this is Alice, The AI assistant." then "You're getting this because you signed up for [event]." before personalization.
- Defensible numbers only: $10M+ revenue, 1,000+ trained. Never $100M+ or 1,500+.
- Voice work, story beats, and any first-person Cris narrative defer to `magnetic-story` and `cris-vinson-storybank`. Do not invent biography.

## Anti-patterns

- Never use a fake countdown timer that resets on refresh.
- Never autoplay video unmuted on mobile - Safari blocks it and you look broken.
- Never embed YouTube on the VSL page. Sidebar suggestions cost conversions.
- Never hide the close X on the upsell page.
- Never use "doctors hate this" or other clickbait headlines for a Cris brand asset.
- Never ship without Pixel and GA4 verified firing.
- Never claim "as seen on" without a real placement.
- Never put a phone number on the order page unless support is staffed.

## Benchmarks

| Metric | Target |
|---|---|
| Page view to video 25 percent | 50 percent |
| Video 25 percent to video 75 percent | 40 percent |
| Video 75 percent to CTA click | 15 percent |
| CTA click to purchase | 5 percent |
| Overall visitor to purchase | 1.5 percent |

## Templates

The full HTML plus Tailwind page skeleton lives at `templates/vsl-page.html` in this skill. Use it as the starting Lovable or Framer prompt input.

Order page skeleton (Tailwind, drop into Lovable):

```html
<section class="bg-neutral-50 min-h-screen py-12 px-4">
  <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-3xl font-bold text-neutral-900 mb-2">[Product name] order</h1>
    <p class="text-neutral-600 mb-8">Complete your order below. Instant access after checkout.</p>
    <div class="border border-neutral-200 rounded-xl p-4 mb-6">
      <div class="flex justify-between mb-2">
        <span class="font-semibold">[Product name]</span>
        <span class="font-semibold">$[price]</span>
      </div>
      <ul class="text-sm text-neutral-600 space-y-1">
        <li>[Deliverable 1]</li>
        <li>[Deliverable 2]</li>
        <li>[Deliverable 3]</li>
      </ul>
    </div>
    <form class="space-y-4" action="[GHL form endpoint]" method="POST">
      <input type="text" name="name" placeholder="Full name" class="w-full border rounded-lg px-4 py-3" required>
      <input type="email" name="email" placeholder="Email" class="w-full border rounded-lg px-4 py-3" required>
      <div id="stripe-card-element" class="border rounded-lg px-4 py-3"></div>
      <button type="submit" class="w-full bg-black text-white py-4 rounded-xl font-bold text-lg">Complete Order - $[price]</button>
    </form>
    <p class="text-xs text-neutral-500 text-center mt-4">Secure checkout. 30 day money back guarantee.</p>
  </div>
</section>
```

Thank you page skeleton:

```html
<section class="bg-white min-h-screen py-16 px-4">
  <div class="max-w-xl mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4">You're in.</h1>
    <p class="text-lg text-neutral-700 mb-8">Check your email at <strong id="user-email">[email]</strong> in the next 2 minutes for your access link.</p>
    <ol class="text-left space-y-3 text-neutral-700">
      <li>1. Open the email titled "[Subject line]".</li>
      <li>2. Click the access link and set your password.</li>
      <li>3. Watch the first lesson today.</li>
    </ol>
    <p class="mt-12 text-sm text-neutral-500">Need help? Email support@[domain].</p>
  </div>
</section>
```

GHL workflow outline (VSL funnel):

1. Trigger: order form submission tag added.
2. Step 1: send access email with login link (delay 0 minutes).
3. Step 2: send welcome SMS (no URL) "Hi [first name], your access email just landed. Reply HELP if you need anything."
4. Step 3: wait 24 hours, send "did you start" email.
5. Step 4: wait 72 hours, send case study email.
6. Step 5: wait 7 days, tag for next-step offer pipeline.
7. Refund branch: if refund tag added, remove from all sequences, send "we refunded you" confirmation email.

## Output checklist

Before handing off the funnel:

- [ ] All 4 pages built and deployed
- [ ] Pixel and GA4 verified on all pages
- [ ] Custom video events firing (25, 50, 75, CTA visible, CTA click)
- [ ] Order form submits to GHL, tag fires, access email sends
- [ ] Test purchase made and refunded
- [ ] Mobile QA passed at 375px
- [ ] Lighthouse mobile score 85+
- [ ] Refund policy and support email visible on order and thank you pages
- [ ] No em dashes anywhere in the copy
- [ ] No URLs in any SMS step
