---
name: conversion-audit
description: Scored audit framework for any existing funnel page or full funnel. Use when the user says "audit this funnel", "audit my landing page", "why isn't this converting", "score this page", "give me a CRO review", "review the funnel before we drive traffic", or hands over a live URL and asks what to fix. Produces a 100-point scorecard plus a prioritized fix list (quick wins first, strategic moves second) so the user can patch in Lovable, Framer, or GHL in one session. Skip if the user is asking for offer construction, avatar work, messaging, or copy voice — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, magnetic-story / cris-vinson-storybank, or expert-secrets-perfect-webinar for webinar SCRIPT review.
---

# Conversion Audit

Scored, prioritized audit of an existing funnel or page. Surfaces the gaps that cost conversions, ranks the fixes, and hands the patch list to `conversion-ux`, `design-system`, and `mobile-responsive` for execution.

## When to use
- A live page or funnel exists and conversion feels low.
- About to spend on traffic and want to de-risk first.
- Comparing two page variants and want a defensible scoring rubric.
- Inheriting a funnel built by someone else and need a baseline.
- Quarterly CRO sweep across multiple Cris-stack pages (Lovable, Framer, GHL forms).

## When NOT to use
- The offer itself is the problem → `product-creator` or `grand-slam-offer-architect`.
- The avatar is wrong → `launchmap-avatar`.
- The headline / message is off because the MDM is off → `launchmap-mdm`.
- Webinar script weakness, not page weakness → `expert-secrets-perfect-webinar`.
- Story or voice not landing → `magnetic-story` / `cris-vinson-storybank`.
- Designing a page from scratch → `funnel-select` first, then `conversion-ux`.

## The stack defaults
- CRM, email, SMS, forms, calendars, workflows: GHL (main location `[GHL_LOCATION_ID]`). Fast Track is a separate sub-account — never touch unless Cris names it.
- Page builds: Lovable for net-new builds, Framer for design-heavy pages.
- Hosting: Vercel.
- Automation: n8n on the VPS via SSH node + bash wrapper.
- Decks: Gamma (textMode=preserve, freeform, "unwiz" theme).

## Process
1. Confirm the URL(s), the funnel type (call `funnel-select` if unclear), and the conversion event being measured.
2. Pull the page on desktop and mobile. Check Lighthouse / PageSpeed for category 7 numbers.
3. Score every category 1 to 10 using the rubric below. Weight and sum to /100.
4. List the top 3 quick wins (under 15 minutes each).
5. List strategic moves ranked by expected lift.
6. Name what is working and must be preserved.
7. Propose 2 to 3 A/B tests with hypothesis and primary metric.
8. Hand the fix list to `conversion-ux`, `design-system`, and `mobile-responsive` and tag the GHL workflow or Lovable / Framer page that needs the change.

## Brand voice rules (always apply)
- English only. No Tagalog or Taglish.
- No em dashes. Use commas, periods, or colons.
- No URLs in any SMS.
- Never auto-send to contacts. Draft, get approval, then send.
- Sends greater than 10 contacts must be dripped at 1 per 30 to 60 seconds, or run via a GHL workflow. Confirm cadence with Cris.
- Outreach DMs and SMS open with: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." before any personalization.
- Defensible credentials: $10M+ revenue, 1,000+ trained. Never use $100M+ or 1,500+.

## Anti-patterns
- Never score a page without seeing it on mobile. Over 60% of traffic is mobile.
- Never give a score without naming the specific element behind each deduction.
- Never recommend "more social proof" without naming which testimonial, which placement, and what specific result it should show.
- Never recommend a redesign as the first move. Quick wins ship today and are reversible.
- Never propose A/B tests on pages with under 1,000 visits per variant per week. Call out sample-size risk instead.
- Never carry a Tagalog headline through into a recommended rewrite. English only.
- Never include a URL in an SMS recommendation.

## Audit scorecard

Rate each category 1 to 10. Weight, sum to /100.

| # | Category | Weight | Score | Weighted | Notes |
|---|---|---|---|---|---|
| 1 | Headline and value prop | 15 | /10 | /15 | |
| 2 | CTA clarity and placement | 15 | /10 | /15 | |
| 3 | Social proof | 10 | /10 | /10 | |
| 4 | Objection handling | 10 | /10 | /10 | |
| 5 | Visual design | 10 | /10 | /10 | |
| 6 | Mobile experience | 10 | /10 | /10 | |
| 7 | Page speed | 10 | /10 | /10 | |
| 8 | Copy quality | 10 | /10 | /10 | |
| 9 | Trust and credibility | 5 | /10 | /5 | |
| 10 | Technical (SEO, forms, tracking) | 5 | /10 | /5 | |
| | TOTAL | 100 | | /100 | |

Score bands:
- 85 to 100: ship traffic, monitor, iterate.
- 70 to 84: fix quick wins, then traffic.
- 50 to 69: rebuild weakest 2 to 3 sections before any spend.
- Under 50: stop. Re-run `funnel-select` and `launchmap-mdm` first.

## Detailed checklist

### 1. Headline and value proposition
- Headline visible without scrolling on mobile and desktop.
- Headline communicates a benefit, not a feature.
- Sub-headline expands the headline and names the mechanism.
- Value prop understood in under 5 seconds (cold reader test).
- Headline speaks to the named avatar, not "everyone".
- No em dashes. English only.

### 2. CTA clarity and placement
- Primary CTA above the fold on mobile and desktop.
- CTA text is action + benefit + first person ("Get my plan", not "Submit").
- Button has strong color contrast vs. background.
- CTA repeats every 2 to 3 scroll lengths.
- Only one primary CTA per page.
- Mobile CTA is full width or sticky bottom bar.

### 3. Social proof
- Testimonials use real names, photos, and specific results.
- Trust bar or "as featured in" present near the fold.
- Number-based proof present ($10M+ revenue, 1,000+ trained for Cris — never inflate).
- Proof placed within one screen of every CTA.
- Video testimonial present for any offer over $500.

### 4. Objection handling
- Top 3 objections addressed before the final CTA.
- FAQ section present, ordered by frequency.
- Guarantee or risk reversal stated and visible.
- Comparison to "do nothing" or to a named alternative if relevant.

### 5. Visual design
- Modern, premium aesthetic (see `design-system`).
- One color system, one type system, generous white space.
- Visual hierarchy guides the eye to the CTA.
- No competing visual elements next to the CTA.

### 6. Mobile experience
- Responsive at 375, 414, 768, 1024, 1280 (see `mobile-responsive`).
- Touch targets at least 44 by 44 pixels.
- Body type at least 16 pixels.
- Forms single column, thumb-friendly.
- No horizontal scroll. No tap-target overlap.

### 7. Page speed
- LCP under 2.5 seconds.
- CLS under 0.1.
- INP under 200 ms.
- Page weight under 500 KB on first view.
- Images in WebP or AVIF, lazy-loaded below the fold.
- No render-blocking third-party scripts.

### 8. Copy quality
- Benefits before features.
- Reader addressed as "you".
- 8th-grade reading level (Hemingway grade 6 to 8).
- Paragraphs 2 to 3 sentences max.
- No em dashes. English only.

### 9. Trust and credibility
- HTTPS active, valid certificate.
- Custom domain, professional email.
- Privacy policy and terms linked in footer.
- Contact info accessible.

### 10. Technical
- Title tag under 60 chars, meta description under 160.
- Single H1 per page.
- Form posts succeed and create the GHL contact / opportunity.
- Pixels and analytics fire on the conversion event.
- All links resolve. No 404s.

## Output template

```
AUDIT: [Page name and URL]
Funnel type: [from funnel-select]
Date: [YYYY-MM-DD]

OVERALL SCORE: [X]/100  ->  Band: [ship | quick-wins | rebuild | stop]

CATEGORY SCORES
1. Headline and value prop      [x]/10  ([weighted]/15)
2. CTA clarity and placement    [x]/10  ([weighted]/15)
3. Social proof                 [x]/10  ([weighted]/10)
4. Objection handling           [x]/10  ([weighted]/10)
5. Visual design                [x]/10  ([weighted]/10)
6. Mobile experience            [x]/10  ([weighted]/10)
7. Page speed                   [x]/10  ([weighted]/10)
8. Copy quality                 [x]/10  ([weighted]/10)
9. Trust and credibility        [x]/10  ([weighted]/5)
10. Technical                   [x]/10  ([weighted]/5)

TOP 3 QUICK WINS (under 15 min each)
1. [Specific fix] -> [Tool: Lovable / Framer / GHL] -> [Expected lift]
2. ...
3. ...

STRATEGIC IMPROVEMENTS (ranked by expected impact)
1. [Fix] -> [Effort: hours] -> [Why it matters]
2. ...

WHAT IS WORKING (preserve)
- [Element] -> [Why it works]

A/B TESTS TO RUN
1. [Hypothesis] -> [Variant A vs B] -> [Primary metric] -> [Min sample size]

HANDOFF
- conversion-ux: [pages and patterns to apply]
- design-system: [tokens to enforce]
- mobile-responsive: [breakpoints to fix]
```
