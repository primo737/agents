---
name: webinar-funnel
description: Build a 4 to 6 page webinar registration funnel for mid and high-ticket offers priced $297 to $2,000+. Trigger phrases include "build a webinar funnel", "webinar registration page", "live webinar funnel", "masterclass funnel", "webinar reg, watch, and sales pages", "webinar reminder sequence", or "webinar pitch funnel". Best for warm and lukewarm audiences who will trade an hour for an outcome. Build pages in Lovable (fast) or Framer (polish) or Next.js plus Tailwind, host on Vercel. Skip for the webinar SCRIPT itself (defer to expert-secrets-perfect-webinar), offer construction (defer to product-creator, grand-slam-offer-architect, or launchmap-offer), Million Dollar Message (launchmap-mdm), storytelling and voice (magnetic-story or cris-vinson-storybank), authority talk (launchmap-authority), and enrollment script (launchmap-enrollment).
---

# Webinar Funnel

The highest converting funnel for $297 to $2,000+ offers. Education builds trust, the offer lands inside the teaching, the bridge page closes the doubters.

## When to use

1. Mid-ticket course or program priced $297 to $997, audience already on the email list or warm to the brand.
2. High-ticket coaching priced $997 to $2,000, paid traffic plus warm audience, conversion call optional.
3. Launching a brand new offer where you need to test the pitch live before going evergreen.
4. Re-activating a cold list with fresh teaching plus a new offer.
5. Selling a methodology or framework that needs explanation before the price makes sense.

## When NOT to use

- The product is over $2,000 and needs a sales conversation. Use `application-funnel` plus `launchmap-enrollment`.
- The product is under $297 and the audience will not trade an hour. Use `vsl-funnel` or `tripwire-funnel`.
- You need to write the 60 to 90 minute teaching SCRIPT itself. Defer to `expert-secrets-perfect-webinar`. This skill builds the funnel around the script, not the script.
- The offer is undefined or weak. Fix that first with `product-creator`, `grand-slam-offer-architect`, or `launchmap-offer`.
- The Million Dollar Message is unclear. Defer to `launchmap-mdm`.
- The story arc, hook, or epiphany bridge needs writing. Defer to `magnetic-story` and `cris-vinson-storybank`.
- The pitch needs to establish authority before selling. Use `launchmap-authority`.
- Building the live conversion call script. Defer to `launchmap-enrollment`.

## The stack defaults

- Pages: Lovable for speed, Framer for polish, or Next.js plus Tailwind for full control. Deploy to Vercel.
- Webinar platform: WebinarJam for live, EverWebinar for evergreen (see `evergreen-webinar-funnel`), or simple Zoom plus a hosted replay page when budget is tight.
- Reg, forms, email, and SMS: GHL main location `[GHL_LOCATION_ID]`. Confirm before any GHL action, main or Fast Track.
- Automation: n8n on the VPS via SSH using the existing Claude SSH pattern. Do not use the Anthropic API node.
- Reminders and SMS: GHL workflows. Never put URLs in SMS, direct to email or WhatsApp.
- Tracking: Meta Pixel and GA4 on every page. Fire `webinar_register`, `webinar_watch_25`, `webinar_watch_50`, `webinar_watch_pitch`, `cta_click`, and `purchase` events.
- Checkout: Stripe via GHL. For $997+ run a 30 minute conversion call after the webinar.

## Page-by-page blueprint

### Page 1, registration page

Goal, get the click on Register. No nav, no footer link bloat.

Sections in order:

1. Pre-headline (5 to 10 words), names the audience.
2. Headline (10 to 16 words), names the outcome plus the timeframe. "Free Live Masterclass: How to [Outcome] in [Timeframe]".
3. Date and time block, with timezone toggle.
4. 3 to 5 learning bullets (15 to 25 words each), specific outcomes not topics.
5. Host bio block, photo plus 40 to 60 word credibility line. Pull from the storybank (`cris-vinson-storybank`) for any bio language.
6. Registration form, name plus email. Fewer fields lift conversion.
7. CTA button, "Reserve My Seat" or "Save My Spot".
8. Social proof strip, 2 to 3 short past attendee quotes (30 to 50 words each).
9. Urgency block, real seat cap or genuine countdown to live date.

Word count caps, headline 14, bullets 22 each, bio 50, urgency 20.

### Page 2, confirmation page

Goal, lock in the calendar add and prime them to attend.

1. Confirmation headline, "You're in. Here's what to do next."
2. Calendar add buttons, Google, Apple, Outlook.
3. Date, time, and timezone repeated.
4. Pre-webinar primer, a short 3 to 7 minute video or a 1 page PDF. Build anticipation.
5. Share prompt, "Know someone who needs this? Send them the link."
6. WhatsApp opt-in checkbox if SMS reminders are part of the sequence.

### Page 3, webinar room page

Goal, deliver the teaching, drop the offer at the right moment, drive the click.

1. Video embed, WebinarJam for live, EverWebinar for evergreen, or a Zoom replay link.
2. Live chat or Q and A widget (live only).
3. Offer reveal CTA, button hidden until the pitch point in the script.
4. Handout download link, slides or worksheet.
5. Countdown to offer expiry (real bonus deadline only, not fake).

### Page 4, bridge page

Goal, recap the pitch in 90 seconds, then push to the sales page or call booking. The bridge page is what catches the people who watched but did not buy on the live pitch.

Bridge page copy block, sized for the offer (use as the body of page 4):

```
You just saw [framework name].

In the training, I walked through:
1. [Pillar 1, one line]
2. [Pillar 2, one line]
3. [Pillar 3, one line]

I showed you how [past customer] used it to [specific result] in [timeframe].

Here's what comes next.

[Offer name] is the full implementation of [framework name]. You get:
- [Deliverable 1, with specific outcome]
- [Deliverable 2, with specific outcome]
- [Deliverable 3, with specific outcome]
- [Bonus 1, with specific outcome]
- [Bonus 2, with specific outcome]

Total value, $[stack value]. Today's investment, $[price].

You're protected by a [X day] guarantee, no questions asked.

[Button: Get [Offer name] Now, $[price]]

The fast-action bonus expires [real time], not before, not after.
```

### Page 5, sales page or call booking page

Goal, full offer presentation for the people who need to read before they buy.

1. Headline restating the transformation promised in the webinar.
2. Problem and solution recap (200 to 300 words).
3. Full benefit stack (8 to 12 line items).
4. Pricing block with value comparison.
5. Bonus stack with real expiry.
6. Testimonials, 3 to 5 case studies (60 to 100 words each).
7. FAQ, 7 to 10 questions (30 to 60 words each).
8. Guarantee box (50 to 80 words), specific terms and timeframe.
9. Final CTA, with the same expiry mentioned in the bridge page copy.

### Page 6, thank you page (optional)

1. Confirmation headline.
2. Access details or "Check your email in 2 minutes".
3. What to do in the next 24 hours.
4. Support contact and refund policy link.

## Conversion essentials

- Risk reversal, 30 day money back, exact mechanism spelled out. Vague guarantees do not lift.
- Scarcity, only if real. Real cohort close, real bonus expiry, real price increase. No fake countdowns.
- Proof placement, 2 to 3 quotes on the registration page, 3 to 5 case studies on the sales page, 1 inside the guarantee box.
- Mobile first, 60 percent of registration traffic is mobile. Test at 375px before launch.
- Show-up rate is the lever. The reminder sequence is worth more than the registration page.

## Process

1. Intake, get the offer, the price, the audience temperature, the source of traffic, the proof assets, and the live date.
2. Script outline, defer to `expert-secrets-perfect-webinar` for the SCRIPT. Pull the offer stack from the offer skill. Confirm the One Big Domino.
3. Page wireframe, sketch the 6 pages above with section headers and word counts.
4. Copy, draft headlines, bullets, button copy, bridge page copy, FAQ. Stay under word count caps.
5. Build, Lovable for first pass. Move to Framer for polish.
6. QA, test on mobile and desktop, Chrome and Safari. Verify Pixel and GA4 fire. Verify the registration form submits to GHL, the confirmation email sends, and the calendar add buttons open the right files.
7. Reminder sequence, build in GHL. See template below.
8. Ship, deploy to Vercel, set the custom domain, run the smoke test registration with a real email, confirm every reminder lands.
9. Post-launch debrief, pull funnel report after the live event. Compare to benchmarks. The biggest leak is usually show-up rate or pitch-to-CTA.

## Brand voice rules

- English only on every page, every email, every SMS.
- No em dashes anywhere in the copy. Use commas, periods, colons, or rewrite.
- No URLs in SMS reminders. Direct to email or WhatsApp instead.
- No auto-send to contacts. Draft every outbound for approval first.
- Sends over 10 contacts must drip at 1 per 30 to 60 seconds, or run via GHL workflow. Confirm cadence first.
- Outreach DMs open with "Hi [Name], this is Alice, The AI assistant." then "You're getting this because you signed up for [event]." before personalization.
- Defensible numbers only, $10M+ revenue, 1,000+ trained. Never $100M+ or 1,500+.
- Voice work and any first-person narrative refer to the storybank (`magnetic-story` and `cris-vinson-storybank`). Do not invent biography.

## Anti-patterns

- Never claim "live" if the webinar is pre-recorded. Use `evergreen-webinar-funnel` for evergreen, and label it on-demand.
- Never use a fake countdown that resets on refresh.
- Never autoplay video unmuted on mobile.
- Never hide the "join the live" link behind a wall.
- Never start the pitch in minute 5. Teach for 40 to 50 minutes minimum before the offer.
- Never leave bonus expiry vague. State the date, the time, and the timezone.
- Never auto-send a "we're starting now" SMS to people who registered after the start time.

## Benchmarks

| Metric | Good | Great | Elite |
|---|---|---|---|
| Registration rate | 20 percent | 35 percent | 50 percent or more |
| Show-up rate | 25 percent | 40 percent | 60 percent or more |
| Offer conversion (live) | 2 percent | 5 percent | 10 percent or more |
| Replay conversion | 1 percent | 3 percent | 5 percent or more |

## Templates

The full HTML plus Tailwind registration page skeleton lives at `templates/registration-page.html`.

Webinar room page skeleton (Tailwind, drop into Lovable):

```html
<section class="bg-neutral-950 text-white min-h-screen">
  <header class="px-6 py-4 border-b border-neutral-800 flex justify-between items-center">
    <div class="font-bold">[Brand]</div>
    <div class="text-sm text-neutral-400">Live now, [topic]</div>
  </header>
  <main class="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2">
      <div class="aspect-video bg-black rounded-2xl overflow-hidden">
        <iframe src="[WebinarJam embed URL]" class="w-full h-full" allow="autoplay; fullscreen"></iframe>
      </div>
      <a id="cta-offer" href="/offer" class="hidden mt-6 block text-center bg-yellow-400 text-black font-bold py-4 rounded-xl text-lg">Get [Offer Name] Now, $[Price]</a>
    </div>
    <aside class="bg-neutral-900 rounded-2xl p-4 h-[600px] overflow-y-auto">
      <div class="font-bold mb-3">Live chat</div>
      <div id="chat" class="text-sm space-y-2"></div>
    </aside>
  </main>
</section>
<script>
  // Reveal CTA at pitch point (e.g., 45 minutes in)
  setTimeout(() => document.getElementById('cta-offer').classList.remove('hidden'), 45 * 60 * 1000);
</script>
```

Bridge page skeleton:

```html
<section class="bg-white py-16 px-4">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">You just saw [framework name].</h1>
    <p class="text-lg text-neutral-700 mb-6">In the training, I walked through 3 pillars and how [past customer] used them to [result] in [timeframe].</p>
    <h2 class="text-xl font-bold mb-3">Here's what comes next.</h2>
    <p class="mb-4">[Offer name] is the full implementation. You get:</p>
    <ul class="space-y-2 mb-6 list-disc list-inside">
      <li>[Deliverable 1]</li>
      <li>[Deliverable 2]</li>
      <li>[Deliverable 3]</li>
    </ul>
    <a href="/checkout" class="block text-center bg-black text-white font-bold py-4 rounded-xl text-lg">Get [Offer Name], $[Price]</a>
    <p class="text-sm text-neutral-500 text-center mt-4">Fast-action bonus expires [date and time], [timezone].</p>
  </div>
</section>
```

GHL workflow outline (registration to cart close):

1. Trigger, registration form submitted.
2. Send confirmation email (delay 0 minutes), with the watch link and calendar add buttons.
3. Send WhatsApp confirmation (delay 5 minutes), if opted in.
4. Day before, 24 hours before live, send "Tomorrow we're live" email plus SMS (no URL in SMS).
5. Day of, 1 hour before, send "Starts in 1 hour" email.
6. Day of, 5 minutes before, send "We're going live now, here's your link" email.
7. Day after live, send "Replay plus offer inside" email with the bridge page link.
8. Day 2 after, send case study email.
9. Day 3 after, send FAQ and objection-handling email.
10. Day 4 after, send "Last chance, bonus expires tonight" email plus SMS.
11. Cart close, tag the contact, remove from sequence, move to next-step pipeline.

## Output checklist

- [ ] All 4 to 6 pages built and deployed
- [ ] Pixel and GA4 verified on all pages
- [ ] Custom events firing (register, watch milestones, CTA, purchase)
- [ ] Registration form submits to GHL, confirmation email lands
- [ ] All 7 to 10 reminder steps built and tested
- [ ] Calendar add buttons download a real .ics file
- [ ] Bridge page mirrors the offer stack from the script
- [ ] Mobile QA passed at 375px
- [ ] Lighthouse mobile score 85+
- [ ] No em dashes anywhere in the copy
- [ ] No URLs in any SMS step
- [ ] Bonus expiry date, time, and timezone all stated explicitly
