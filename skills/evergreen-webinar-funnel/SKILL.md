---
name: evergreen-webinar-funnel
description: Build an automated on-demand webinar funnel that simulates a "live" experience 24/7 for offers priced $297 to $2,000+. Trigger phrases include "build an evergreen webinar", "automated webinar funnel", "on-demand masterclass funnel", "just-in-time webinar", "scale a proven webinar", "EverWebinar funnel", or "evergreen pitch funnel". Best for warm and cold paid traffic where you have a proven live webinar already converting. Build pages in Lovable (fast) or Framer (polish) or Next.js plus Tailwind, host on Vercel. Skip for the webinar SCRIPT itself (defer to expert-secrets-perfect-webinar), offer construction (defer to product-creator, grand-slam-offer-architect, or launchmap-offer), Million Dollar Message (launchmap-mdm), storytelling and voice (magnetic-story or cris-vinson-storybank), authority talk (launchmap-authority), and enrollment script (launchmap-enrollment).
---

# Evergreen Webinar Funnel

Take a proven live webinar and run it on autopilot. Visitors register, pick a "next available" session, and watch a pre-recorded video that feels live. The pitch lands the same way every time.

## When to use

1. A live webinar already converted at 3 percent or better. You want to scale it without hosting weekly.
2. Cold paid traffic at scale where live timing limits volume.
3. International audience across timezones where one live time excludes most.
4. Warm list re-activation that needs immediate gratification ("starts in 14 minutes").
5. Lead magnet upgrade where the freebie page redirects into an automated webinar registration.

## When NOT to use

- The webinar has not been validated live. Run it live 2 to 4 times first using `webinar-funnel`. Tweak the pitch, then go evergreen.
- Selling under $297. The watch time investment is too high. Use `vsl-funnel` or `tripwire-funnel`.
- Selling over $2,000 where a sales conversation is required. Use `application-funnel` plus `launchmap-enrollment`.
- You need to write the 60 to 90 minute teaching SCRIPT. Defer to `expert-secrets-perfect-webinar`. This skill builds the funnel around the script.
- The offer is undefined or weak. Fix that first with `product-creator`, `grand-slam-offer-architect`, or `launchmap-offer`.
- The Million Dollar Message is unclear. Defer to `launchmap-mdm`.
- The story arc, hook, or epiphany bridge needs writing. Defer to `magnetic-story` and `cris-vinson-storybank`.
- The pitch needs to establish authority before selling. Use `launchmap-authority`.

## The stack defaults

- Pages: Lovable for speed, Framer for polish, or Next.js plus Tailwind for full control. Deploy to Vercel.
- Webinar platform: EverWebinar is the standard for evergreen. Alternative, a custom watch page on Vercel that plays a Vimeo Pro or Wistia file with no scrub bar and a delayed CTA.
- Reg, forms, email, and SMS: GHL main location `[GHL_LOCATION_ID]`. Confirm before proceeding, main or Fast Track.
- Automation: n8n on the VPS via SSH using the existing Claude SSH pattern. Do not use the Anthropic API node.
- Reminders and SMS: GHL workflows. Never URLs in SMS, direct to email or WhatsApp.
- Tracking: Meta Pixel and GA4. Fire `register`, `session_picked`, `watch_25`, `watch_50`, `watch_pitch`, `cta_click`, `purchase`. Tag the session timestamp on every contact.
- Checkout: Stripe via GHL. Cart close at the end of the time-limited replay window.

## Page-by-page blueprint

### Page 1, registration page

Goal, get them to pick a session and register.

Sections in order:

1. Pre-headline (5 to 10 words), names the audience.
2. Headline (10 to 16 words), names the outcome plus the timeframe.
3. Session picker block, 3 to 4 options:
   - "Starting in 15 minutes"
   - "Today at [next hour]"
   - "Tomorrow at 10:00 AM [TZ]"
   - "Tomorrow at 7:00 PM [TZ]"
4. 3 to 5 learning bullets (15 to 25 words each).
5. Host bio block (40 to 60 word credibility line). Pull bio language from the storybank.
6. Registration form, name plus email plus session pick.
7. CTA, "Save My Seat" or "Lock In My Session".
8. Social proof strip, 2 to 3 short quotes.

### Page 2, confirmation and "just in time" page

Goal, prime them to show up. If the session starts in under 30 minutes, count down on this page.

1. Confirmation headline.
2. Session timestamp block, "Your session starts in 14:32".
3. Calendar add buttons.
4. Pre-webinar primer, short video or PDF.
5. WhatsApp opt-in checkbox for SMS reminders.
6. Auto-redirect to the watch page when the countdown hits zero.

### Page 3, watch page (the simulated live room)

Goal, deliver the pitch with the same energy as a live event.

Sections:

1. Header strip, "[Topic], live now with [Host]".
2. Video player, full width on desktop, 16:9. Vimeo Pro or Wistia, no scrub bar, no controls visible (except pause). EverWebinar handles this natively if used.
3. Optional simulated chat sidebar with pre-loaded messages spaced to the script timeline. Never use real names. Always disclose if asked.
4. Delayed CTA button, hidden until the pitch point in the script (typically 40 to 60 minutes in).
5. "X people watching now" counter (use a real or honest range, not a fake static number).
6. Time-limited replay banner, "Replay available for 24 hours".

### Page 4, offer page

Goal, full offer presentation. Same as `webinar-funnel` page 5.

1. Headline restating the transformation.
2. Problem and solution recap (200 to 300 words).
3. Full benefit stack (8 to 12 line items).
4. Pricing block.
5. Bonus stack with real expiry tied to the contact's session timestamp.
6. Testimonials, 3 to 5 case studies.
7. FAQ, 7 to 10 questions.
8. Guarantee box (50 to 80 words).
9. Final CTA with the session-specific deadline.

### Page 5, checkout and thank you

Standard. Stripe via GHL. Confirmation, access details, "what to do next" 3 step list.

## Conversion essentials

- The session picker is the conversion lever. "Starting in 15 minutes" outperforms "next Tuesday" by 3 to 5x for cold paid.
- Risk reversal, 30 day money back, exact mechanism stated.
- Scarcity, only if real. The 24 hour replay must actually expire and the offer must close. Honor it.
- Time-limited offer, tied to the contact's session timestamp, not a global timer.
- Mobile first, 70 percent of cold paid traffic is mobile. Test at 375px before launch.
- Show-up rate is the lever. Reminder cadence matters more than the registration page.

## Process

1. Intake, get the offer, the price, the audience, the source of traffic, the proven live conversion rate, and the expected daily registration volume.
2. Confirm the live webinar is converting at 3 percent or better. If not, do not go evergreen yet.
3. Script review, defer to `expert-secrets-perfect-webinar` if the script needs polishing. Lock the pitch point timestamp.
4. Page wireframe, sketch the 5 pages with section headers and word counts.
5. Copy, draft headlines, bullets, button copy, FAQ. Stay under word count caps.
6. Build, Lovable for first pass. Move to Framer for polish.
7. Video setup, upload to Vimeo Pro or Wistia or EverWebinar. Set the pitch-point CTA timer. Disable scrub bar.
8. QA, test every session option from registration through pitch CTA on mobile and desktop. Verify Pixel and GA4. Verify the right reminder fires for each session pick.
9. Reminder sequence, build in GHL with branching by session timestamp. See template below.
10. Ship, deploy to Vercel, set custom domain, run smoke test registration and watch.
11. Post-launch debrief, pull funnel report at 100, 500, 2,000 registrations. Compare to benchmarks. Fix the leakiest stage first.

## Brand voice rules

- English only on every page, every email, every SMS.
- No em dashes anywhere in the copy. Use commas, periods, colons, or rewrite.
- No URLs in SMS reminders. Direct to email or WhatsApp instead.
- No auto-send to contacts. Draft every outbound for approval first.
- Sends over 10 contacts must drip at 1 per 30 to 60 seconds, or run via GHL workflow.
- Outreach DMs open with "Hi [Name], this is Alice, The AI assistant." then "You're getting this because you signed up for [event]." before personalization.
- Defensible numbers only, $10M+ revenue, 1,000+ trained. Never $100M+ or 1,500+.
- Voice work and any first-person narrative refer to `magnetic-story` and `cris-vinson-storybank`.

## Anti-patterns

- Never claim "live" if the webinar is pre-recorded. Use language like "on-demand training", "automated masterclass", or "instant access". Disclose in the registration fine print.
- Never fake chat messages with real names or fabricated quotes. Generic supportive messages are fine, fake testimonials are not.
- Never use a fake "X people watching" counter that is obviously static (e.g., always says 47).
- Never honor a "limited time bonus" that re-appears on refresh. Set a real expiry per contact.
- Never block the close button on the watch page.
- Never auto-play unmuted on mobile.
- Never embed YouTube on the watch page.
- Never give replay access if the offer says "no replay". Match the promise.

## Benchmarks

| Metric | Target |
|---|---|
| Visitor to registration | 30 percent or more |
| Registration to watch | 35 percent or more |
| Watch over 50 percent of video | 50 percent of attendees |
| Watch to offer page | 20 percent or more |
| Offer page to purchase | 5 percent or more |
| Overall registration to purchase | 2 percent or more |

## Templates

The full HTML plus Tailwind registration page skeleton lives at `templates/registration-page.html`. The full watch page skeleton lives at `templates/watch-page.html`.

Session picker block (drop into Lovable or Framer):

```html
<div class="space-y-3">
  <label class="block">
    <input type="radio" name="session" value="now-15" class="mr-3" required>
    <span class="font-semibold">Starting in 15 minutes</span>
    <span class="text-neutral-500 text-sm block ml-7">Recommended, save your seat now</span>
  </label>
  <label class="block">
    <input type="radio" name="session" value="today-1h" class="mr-3">
    <span class="font-semibold">Today at [next hour, dynamic]</span>
  </label>
  <label class="block">
    <input type="radio" name="session" value="tomorrow-am" class="mr-3">
    <span class="font-semibold">Tomorrow at 10:00 AM [TZ]</span>
  </label>
  <label class="block">
    <input type="radio" name="session" value="tomorrow-pm" class="mr-3">
    <span class="font-semibold">Tomorrow at 7:00 PM [TZ]</span>
  </label>
</div>
```

Just-in-time countdown block:

```html
<div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 text-center">
  <p class="text-sm text-neutral-600 mb-2">Your session starts in</p>
  <div id="countdown" class="text-5xl font-bold text-neutral-900">14:32</div>
  <p class="text-sm text-neutral-600 mt-2">You'll be redirected automatically when we go live.</p>
</div>
<script>
  const target = new Date('[ISO session timestamp]').getTime();
  setInterval(() => {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) { window.location = '/watch?token=[contact token]'; return; }
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    document.getElementById('countdown').textContent = m + ':' + s;
  }, 1000);
</script>
```

GHL workflow outline (registration to cart close, branching by session pick):

1. Trigger, registration form submitted with session pick tag.
2. Send confirmation email (delay 0 minutes), with the session timestamp and watch link.
3. Send WhatsApp confirmation (delay 5 minutes), if opted in.
4. Branch by session pick:
   - "Starting in 15 minutes", send "We're live in 5 minutes" email at session minus 5.
   - "Today at next hour", send 1 hour reminder email plus 5 minute reminder.
   - "Tomorrow", send day before email, 1 hour reminder, 5 minute reminder.
5. After session timestamp + watch length, branch by attended:
   - Attended and bought, move to onboarding pipeline.
   - Attended and did not buy, send "Replay plus offer" email (replay link valid for 24 hours from their session).
   - Did not attend, send "We missed you, here's the replay" email (24 hour window).
6. 12 hours into the replay window, send "Replay expires in 12 hours" email.
7. 1 hour before replay expiry, send "Last chance, expires in 1 hour" email plus SMS (no URL in SMS).
8. After expiry, tag as "did not buy", remove from sequence, move to nurture.

## Output checklist

- [ ] All 5 pages built and deployed
- [ ] EverWebinar (or custom watch page) configured with correct video, pitch CTA timer, no scrub bar
- [ ] Pixel and GA4 verified
- [ ] Custom events firing per stage including session pick
- [ ] Reminder sequence branches correctly by session pick
- [ ] Replay link expires per contact, not globally
- [ ] Bonus expiry tied to session timestamp, not global timer
- [ ] Mobile QA passed at 375px
- [ ] Lighthouse mobile score 85+
- [ ] Page footer discloses on-demand nature ("automated training", not "live")
- [ ] No em dashes anywhere in the copy
- [ ] No URLs in any SMS step
- [ ] Test registration through purchase made, refunded, confirmed
