---
name: product-launch-funnel
description: Build a Jeff Walker style Product Launch Formula (PLF) funnel for courses, memberships, and high-ticket offers priced $297 to $2,000+. Trigger phrases include "build a PLF launch", "Jeff Walker launch funnel", "product launch sequence", "open cart launch", "4-video pre-launch sequence", "Opportunity Transformation Ownership Sales videos", or "build a 14-day launch". Best for warm lists, JV affiliate launches, and any launch where anticipation can be built over 7 to 14 days. Build pages in Lovable (fast) or Framer (polish) or Next.js plus Tailwind, host on Vercel. Skip for the webinar SCRIPT (defer to expert-secrets-perfect-webinar), offer construction (defer to product-creator, grand-slam-offer-architect, or launchmap-offer), Million Dollar Message (launchmap-mdm), storytelling and voice (magnetic-story or cris-vinson-storybank), authority talk (launchmap-authority), and enrollment script (launchmap-enrollment).
---

# Product Launch Funnel

The Jeff Walker PLF runs a 4-video sequence over 7 to 14 days that builds anticipation, then opens cart for a hard window. The 3 pre-launch content (PLC) videos ARE the sales pitch, spread across days. Sideways sales letter.

## When to use

1. New course or program launch ($297 to $2,000+) to a warm list of 1,000+ subscribers.
2. Affiliate or JV partner launch where you want to coordinate a window.
3. Cohort program with a real start date (the launch deadline matches the cohort kickoff).
4. Re-launch of a proven offer to a list that has not seen it for 6+ months.
5. Membership relaunch where you want a hard cart open and close to drive scarcity.

## When NOT to use

- The list is under 1,000 warm subscribers. PLF needs volume to work. Use `webinar-funnel` or `vsl-funnel` instead.
- The product is over $2,000 and needs sales conversation. Use `application-funnel` plus `launchmap-enrollment`. PLF can feed it.
- You cannot honor a hard cart close. PLF only works if the deadline is real.
- You need to write the 60 to 90 minute teaching SCRIPT inside one of the PLC videos. Defer to `expert-secrets-perfect-webinar` for that block.
- The offer is undefined or weak. Fix that first with `product-creator`, `grand-slam-offer-architect`, or `launchmap-offer`.
- The Million Dollar Message is unclear. Defer to `launchmap-mdm`.
- The story arc, hook, or epiphany bridge needs writing. Defer to `magnetic-story` and `cris-vinson-storybank`.
- The pitch needs to establish authority before selling. Use `launchmap-authority`.

## The stack defaults

- Pages: Lovable for speed, Framer for polish, or Next.js plus Tailwind for full control. Deploy to Vercel.
- Video hosting: Vimeo Pro or Wistia. Never YouTube on PLC pages.
- Reg, forms, email, SMS, and tagging: GHL main location `[GHL_LOCATION_ID]`. Confirm with Cris first, main or Fast Track. Tag every contact with `plc1_watched`, `plc2_watched`, `plc3_watched`, `cart_open`, `cart_close`.
- Automation: n8n on the VPS via SSH using the existing Claude SSH pattern. Do not use the Anthropic API node.
- Reminders and SMS: GHL workflows. Never URLs in SMS.
- Tracking: Meta Pixel and GA4 on every page. Fire `optin`, `plc_view`, `plc_watch_75`, `comment_post`, `cart_open_visit`, `cart_purchase`.
- Checkout: Stripe via GHL. Hard close at the cart deadline.

## Page-by-page blueprint

### Page 1, opt-in / waitlist page

Goal, capture leads 2 to 4 weeks before launch.

1. Pre-headline (5 to 10 words), names the audience.
2. Headline (10 to 16 words), names the outcome plus "first access" or "early notification".
3. 2 to 3 anticipation bullets (15 to 25 words each), what they'll learn in the free pre-launch series.
4. Opt-in form, name plus email.
5. CTA, "Get Early Access" or "Join the Waitlist".
6. Social proof, 2 short past attendee or buyer quotes.
7. Launch date teaser.

### Page 2, PLC 1, "The Opportunity"

Goal, show the gap. Open the loop. Build hope.

1. Video player (15 to 25 minutes). Vimeo Pro or Wistia, no YouTube.
2. Key takeaways below video, 3 to 5 bullets.
3. Comment block, "What's your biggest takeaway? Drop it below." (use Disqus or a custom GHL form, drives engagement signal).
4. Countdown to PLC 2 (3 days max).
5. Social share buttons.

### Page 3, PLC 2, "The Transformation"

Goal, teach a concept. Prove credibility. Show what is possible.

1. Video player (20 to 30 minutes).
2. Key takeaways, 3 to 5 bullets.
3. Comment prompt, "Where would this take you?"
4. Countdown to PLC 3.
5. Mention the cart open coming.

### Page 4, PLC 3, "The Ownership" (or "The Blueprint")

Goal, give actionable framework. Seed the offer hard.

1. Video player (20 to 30 minutes).
2. Framework download PDF.
3. Comment prompt, "Are you ready for the full thing?"
4. Countdown to cart open.
5. "Cart opens in [X] days, here's what's coming" block.

### Page 5, PLC 4 / Cart Open, "The Sales Video"

Goal, full pitch. Cart opens at the end of this video.

1. Sales video (30 to 60 minutes), the full pitch with story, framework, offer, stack, price, guarantee.
2. Buy button, revealed at the offer point.
3. Full benefit stack below video.
4. Bonus stack with real expiry (matches cart close).
5. Testimonials, 3 to 5 case studies.
6. FAQ, 7 to 10 questions.
7. Guarantee box.
8. Final CTA.

### Page 6, sales / cart page

Goal, full read-it-yourself sales page for those who do not watch the sales video. Same elements as PLC 4 in long-form copy.

### Page 7, checkout

Standard. Stripe via GHL. Order bump optional.

### Page 8, thank you and onboarding

Confirmation, access details, "what to do in the next 24 hours" 3 step list.

## 4-video sequence outline

| Video | Theme | Length | Core message | What to seed |
|---|---|---|---|---|
| PLC 1 | The Opportunity | 15 to 25 min | "There is a new way and you can do this" | Hint at the framework |
| PLC 2 | The Transformation | 20 to 30 min | "Here is the journey from where you are to where you want to be" | Name the framework |
| PLC 3 | The Ownership | 20 to 30 min | "Here is the blueprint, you can take action today" | Mention cart opens in X days |
| Sales | The Sales Video | 30 to 60 min | "Here's the full implementation, here's the offer, doors are open" | Full stack, price, guarantee, deadline |

## Conversion essentials

- Hard cart close. The deadline is real, communicate it everywhere, honor it.
- Give your best stuff free in the PLCs. Reciprocity is the engine.
- Seed the offer in every PLC. Do not hide it.
- Comment engagement on PLC pages signals algorithmic warmth and primes attendance.
- Risk reversal in the sales video and on the sales page. 30 day money back, exact mechanism.
- Bonus expiry tied to cart close, not a fake reset.

## Process

1. Intake, get the offer, the price, the cart open date, the cart close date, the list size, the JV partners (if any), and the proof assets.
2. Confirm the cart close is real and you can honor it.
3. Script the 4 videos. Defer to `magnetic-story` for story beats and `expert-secrets-perfect-webinar` for the sales video script.
4. Page wireframe, sketch all 8 pages with section headers and word counts.
5. Copy, draft headlines, bullets, button copy, FAQ, bonus stack. Stay under word count caps.
6. Build, Lovable for first pass. Move to Framer for polish.
7. Video production, record and host on Vimeo Pro or Wistia.
8. QA, test every page on mobile and desktop. Verify Pixel and GA4. Verify GHL tags fire on each PLC view.
9. Email sequence, build in GHL. See template below.
10. JV partner links and tracking, set up if applicable.
11. Pre-launch traffic, drive the list to the opt-in page 2 to 4 weeks before launch.
12. Launch week execution, send PLC drops on schedule, monitor comments, push reminders.
13. Cart open, send launch email, run live Q and A if possible.
14. Cart close, send "doors close in 24 hours", "doors close in 4 hours", "doors close in 1 hour" emails plus SMS (no URLs in SMS).
15. Post-launch debrief, pull funnel report. Compare to benchmarks. The biggest leak is usually PLC1 to PLC3 watch-through.

## Brand voice rules

- English only on every page, every email, every SMS.
- No em dashes anywhere in the copy. Use commas, periods, colons, or rewrite.
- No URLs in SMS reminders. Direct to email or WhatsApp instead.
- No auto-send to contacts. Draft every outbound for Cris approval first.
- Sends over 10 contacts must drip at 1 per 30 to 60 seconds, or run via GHL workflow.
- Outreach DMs open with "Hi [Name], this is Alice, The AI assistant." then "You're getting this because you signed up for [event]." before personalization.
- Defensible numbers only, $10M+ revenue, 1,000+ trained. Never $100M+ or 1,500+.
- Voice work and any first-person Cris narrative defer to `magnetic-story` and `cris-vinson-storybank`.

## Anti-patterns

- Never extend the cart close after announcing it. You destroy trust on the next launch.
- Never re-open the cart 2 days later with a "we got so many requests" email. Same destruction.
- Never use a fake countdown that resets on refresh.
- Never autoplay video unmuted on mobile.
- Never embed YouTube on PLC pages.
- Never skip seeding the offer until PLC 3. Every video should hint at what is coming.
- Never run PLF to a list under 1,000 warm subscribers expecting magic. The math does not work.
- Never copy a competitor's PLC structure without your own framework. PLF works because the framework is differentiated.

## Benchmarks

| Metric | Target |
|---|---|
| Landing to opt-in | 35 percent or more |
| Opt-in to watch PLC 1 | 60 percent or more |
| Watch PLC 1 to watch PLC 3 | 30 percent or more |
| Watch PLC 3 to sales page visit | 40 percent or more |
| Sales page to purchase | 5 percent or more |
| Overall list to purchase | 3 percent or more |

## Templates

The full HTML plus Tailwind PLC video page skeleton lives at `templates/plc-video-page.html`.

Opt-in page skeleton (Tailwind, drop into Lovable):

```html
<section class="bg-neutral-50 min-h-screen flex items-center px-4 py-12">
  <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
    <p class="text-sm uppercase tracking-wide text-neutral-500 mb-2">For [audience]</p>
    <h1 class="text-3xl font-bold text-neutral-900 mb-4">[Headline naming outcome and "early access"]</h1>
    <ul class="text-left space-y-2 mb-6 text-neutral-700">
      <li>[Anticipation bullet 1]</li>
      <li>[Anticipation bullet 2]</li>
      <li>[Anticipation bullet 3]</li>
    </ul>
    <form class="space-y-3" action="[GHL form endpoint]" method="POST">
      <input type="text" name="name" placeholder="First name" class="w-full border rounded-lg px-4 py-3" required>
      <input type="email" name="email" placeholder="Email" class="w-full border rounded-lg px-4 py-3" required>
      <button type="submit" class="w-full bg-black text-white py-4 rounded-xl font-bold">Get Early Access</button>
    </form>
    <p class="text-xs text-neutral-500 mt-4">Launch begins [date]. Watch your inbox.</p>
  </div>
</section>
```

Sales page skeleton (Tailwind):

```html
<section class="bg-white py-16 px-4">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">[Headline restating transformation]</h1>
    <div class="aspect-video bg-black rounded-2xl mb-8">
      <iframe src="[Vimeo Pro embed]" class="w-full h-full" allow="autoplay; fullscreen"></iframe>
    </div>
    <a href="/checkout" class="block text-center bg-yellow-400 text-black font-bold py-4 rounded-xl text-lg mb-12">Get [Offer Name], $[Price]</a>
    <h2 class="text-2xl font-bold mb-4">What's Included</h2>
    <ul class="space-y-3 mb-12">
      <li class="flex"><span class="font-bold mr-2">1.</span> [Deliverable 1]</li>
      <li class="flex"><span class="font-bold mr-2">2.</span> [Deliverable 2]</li>
      <li class="flex"><span class="font-bold mr-2">3.</span> [Deliverable 3]</li>
    </ul>
    <div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 mb-12">
      <h3 class="font-bold mb-2">Fast Action Bonuses (expire [cart close date and time])</h3>
      <ul class="space-y-2">
        <li>[Bonus 1]</li>
        <li>[Bonus 2]</li>
      </ul>
    </div>
    <div class="bg-neutral-100 rounded-2xl p-6 mb-12">
      <h3 class="font-bold mb-2">30 Day Money Back Guarantee</h3>
      <p>[Specific guarantee language with mechanism]</p>
    </div>
    <a href="/checkout" class="block text-center bg-yellow-400 text-black font-bold py-4 rounded-xl text-lg">Get [Offer Name], $[Price]</a>
  </div>
</section>
```

GHL workflow outline (waitlist to cart close):

1. Trigger, opt-in form submitted, tag `plf_waitlist`.
2. Send welcome email (delay 0 minutes), set expectations for the launch.
3. Day 1 of launch, send "PLC 1 is live" email plus SMS (no URL in SMS, send to /plc1).
4. Day 2, send "Did you watch PLC 1?" email.
5. Day 3, send "PLC 2 is live" email plus SMS.
6. Day 5, send "PLC 2 follow-up, this changes everything" email.
7. Day 6, send "PLC 3 is live" email plus SMS.
8. Day 7, send "Last PLC, blueprint inside" email.
9. Day 8, cart open, send "Doors are open" email plus SMS. Tag `cart_open_visited` if they hit the sales page.
10. Day 9, send social proof email "[Name] just enrolled".
11. Day 10, send FAQ and objection email.
12. Day 11, send "Doors close in 48 hours" email.
13. Day 12, send "Doors close in 24 hours" email plus SMS.
14. Day 13, send "Doors close in 4 hours" email plus SMS.
15. Day 13, send "Doors close in 1 hour" email.
16. Day 14, cart close, send "It's over" email. Move buyers to onboarding pipeline. Move non-buyers to nurture for next launch.

## Output checklist

- [ ] All 8 pages built and deployed
- [ ] All 4 videos hosted on Vimeo Pro or Wistia
- [ ] Pixel and GA4 verified on all pages
- [ ] Custom events firing per stage including PLC watch milestones
- [ ] GHL tags applied per PLC view, cart open visit, purchase
- [ ] All 16 email and SMS steps built and tested
- [ ] Bonus expiry matches cart close date, time, and timezone
- [ ] Cart close is real, calendar event blocked
- [ ] JV partner tracking links set up if applicable
- [ ] Mobile QA passed at 375px
- [ ] Lighthouse mobile score 85+
- [ ] No em dashes anywhere in the copy
- [ ] No URLs in any SMS step
- [ ] Test purchase made and refunded
