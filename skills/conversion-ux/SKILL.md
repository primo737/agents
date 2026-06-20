---
name: conversion-ux
description: Conversion-focused UX patterns for funnel pages — layout, CTA design and placement, social proof, urgency, friction reduction, visual hierarchy. Use when the user says "lay out this page", "where should the CTA go", "how should the hero look", "fix the form", "add social proof", "reduce friction on checkout", "build a high-converting [page type]", or right after `funnel-select` returns a page list. Pairs with `design-system` for tokens and `mobile-responsive` for breakpoints. Skip if the user is asking for offer construction, avatar work, message strategy, or copy voice — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, magnetic-story / cris-vinson-storybank, or expert-secrets-perfect-webinar for webinar SCRIPT.
---

# Conversion UX

Layout, CTA, social proof, urgency, and friction patterns. Apply on every funnel page you ship in Lovable, Framer, or GHL. These are requirements, not suggestions.

## When to use
- Building or rebuilding a landing, sales, opt-in, checkout, application, webinar registration, or thank-you page.
- Auditor (`conversion-audit`) flagged a UX gap and you need the patch.
- Migrating a page from one tool to another (Framer to Lovable, Lovable to GHL) and need the layout to survive.
- Mobile sticky CTA missing and bounce is high.
- Designing a form and want to minimize fields and friction.

## When NOT to use
- Picking the funnel type → `funnel-select`.
- Choosing colors, type, spacing, components → `design-system`.
- Setting breakpoints, touch targets, typography scale → `mobile-responsive`.
- Writing the offer or stack → `product-creator` or `grand-slam-offer-architect`.
- Writing the message itself → `launchmap-mdm`, `launchmap-content`, or `magnetic-story`.
- Writing the webinar script → `expert-secrets-perfect-webinar`.

## The stack defaults
- CRM, email, SMS, forms, calendars, workflows: GHL (main location `[GHL_LOCATION_ID]`). Fast Track is a separate sub-account — never touch unless specified.
- Page builds: Lovable for net-new builds, Framer for design-heavy / portfolio.
- Hosting: Vercel.
- Automation: n8n on the VPS via SSH node + bash wrapper.
- Decks: Gamma (textMode=preserve, freeform, "unwiz" theme).

## Process
1. Confirm the page type and the single conversion event.
2. Lay out above-the-fold first: headline, sub-headline, primary CTA, hero proof element.
3. Map the scroll: every 2 to 3 viewports must have a CTA or proof.
4. Apply the 12 patterns checklist below. Mark each "applied" or "intentionally skipped".
5. Strip the page nav on landing pages. One way out: the CTA.
6. Spec the form: minimum fields, single column, inline validation.
7. Hand to `design-system` for tokens, `mobile-responsive` for breakpoints.

## Brand voice rules (always apply)
- English only on every label, button, headline, and microcopy. No Tagalog or Taglish.
- No em dashes anywhere. Use commas, periods, or colons.
- No URLs in any SMS the page triggers.
- Never auto-send to contacts. Draft and approve.
- Sends greater than 10 contacts must be dripped at 1 per 30 to 60 seconds, or run via a GHL workflow. Confirm cadence before sending.
- Outreach DMs and SMS open with: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." before any personalization.
- Defensible credentials: $10M+ revenue, 1,000+ trained. Never inflate.

## Anti-patterns
- Never run two competing primary CTAs on one page.
- Never use "Submit" as button text.
- Never run a multi-field form on a top-of-funnel opt-in. Email only beats the alternative.
- Never put fake countdowns or fake scarcity. Real deadlines or nothing.
- Never use carousel testimonials below the fold for offers under $500. They hide proof behind a click.
- Never leave the top nav on a paid-traffic landing page.
- Never use side-by-side form fields on mobile.
- Never put body type below 16 px. iOS will zoom on focus.
- Never inflate The credentials. $10M+ / 1,000+ only.

## 12 proven patterns checklist

| # | Pattern | Apply when | Skip when |
|---|---|---|---|
| 1 | Hero with headline + sub + primary CTA above fold | Every page | Never skip |
| 2 | Trust bar near hero (logos, stats, "as featured in") | Cold or warm traffic | Hot retargeting + private link |
| 3 | Single primary CTA per page | Every page | Never skip |
| 4 | CTA repeats every 2 to 3 viewports | Pages over 1 viewport tall | Single-screen opt-in |
| 5 | Mobile sticky CTA bar | Every mobile page over 1 viewport | None |
| 6 | Action + benefit + first-person CTA copy | Every CTA | None |
| 7 | Testimonial cards with name, photo, specific result | Every page | None — minimum 1 |
| 8 | Numeric proof row (customers, rating, guarantee) | Every page | None |
| 9 | Video testimonial or founder VSL | Offers over $500 | Tripwire under $50 |
| 10 | FAQ block ordered by objection frequency | Every paid page | Pure opt-in (move to email) |
| 11 | Risk reversal / guarantee within 1 screen of CTA | Any paid page | Free opt-in |
| 12 | Exit-intent or scroll-depth prompt | Cold paid traffic, > 30s avg time | Warm retargeting (becomes annoying) |

## Above the fold spec

Required, in order, visible without scrolling on a 667 px mobile viewport:

1. Headline. Benefit-driven. Names the avatar. Under 12 words.
2. Sub-headline. Names the mechanism or offer. Under 20 words.
3. Primary CTA button. Action plus benefit plus first person.
4. One proof element. Pick one: trust bar, rating row, single testimonial line, or a single number.

## CTA button rules

| Rule | Good | Bad |
|---|---|---|
| Action-oriented | "Get my free guide" | "Submit" |
| First person | "Start my trial" | "Start your trial" |
| Benefit-focused | "Unlock 50% more sales" | "Click here" |
| Specificity | "Download the 7-step checklist" | "Download" |
| Real urgency only | "Claim my spot (12 of 50 left)" | "Hurry, limited time" |

Placement:
- Above the fold, always.
- Repeats every 2 to 3 scroll lengths with the same label.
- Sticky bar on mobile.
- Final stack with the full benefit summary at the page bottom.

## Social proof patterns

Testimonial card (every page, minimum one above the fold or near it):
```
[Square photo]   "[Specific result they achieved.]"
                 — Full Name, Title or Context
```

Trust bar (cold traffic or new authority):
```
As featured in:  [Logo] [Logo] [Logo] [Logo]
```

Stats row (every page):
```
$10M+ revenue managed   |   1,000+ trained   |   30-day guarantee
```

Video testimonial: required for offers over $500. 30 to 90 seconds. Caption burned in.

## Urgency (real only)

- Real countdown: course enrollment closes, live event date, price increase date.
- Real scarcity: "12 of 50 spots remaining" only if seats are tracked.
- Seasonal cohort: "Enroll before [date] to join the [month] cohort."
- Never fake. Never ship fake scarcity.

## Friction reduction

Forms:
- Opt-in: email only. Name optional.
- Tripwire / direct response: email, name, payment.
- Application: full form acceptable, multi-step with progress bar.
- Single column always.
- Inline validation. Errors show in real time, not on submit.
- 16 px input text minimum.

Navigation:
- Strip top nav on paid-traffic landing pages.
- Footer can hold privacy, terms, contact.
- One primary action per page.

## Visual hierarchy (in priority)

1. Headline — largest, boldest.
2. Sub-headline — medium, lighter weight.
3. CTA button — high contrast, accent color (see `design-system`).
4. Body copy — 16 px desktop, 18 px mobile.
5. Supporting text — smaller, lighter, fine print only.

## Mobile spec (handoff to `mobile-responsive`)

- Touch targets at least 44 by 44 px.
- CTA full width on mobile.
- Body type at least 16 px to prevent iOS zoom on focus.
- Generous padding between tap targets.
- Sticky bottom CTA bar on every page longer than one viewport.

## Output template

```
PAGE: [name and slug]
Funnel type: [from funnel-select]
Conversion event: [single event]

ABOVE THE FOLD
- Headline: [draft]
- Sub-headline: [draft]
- Primary CTA: [label]
- Proof element: [type]

SCROLL MAP
1. Hero
2. [Section name] - CTA?: [Y/N] - Proof?: [Y/N]
3. ...
N. Final CTA stack with full benefit list

12 PATTERNS CHECK
[1] Hero      : applied
[2] Trust bar : applied | skipped because [reason]
... (all 12)

FORM SPEC
- Fields: [list]
- Validation: inline
- Layout: single column

NAV
- Top nav: removed
- Footer: privacy, terms, contact

HANDOFF
- design-system: [tokens to use]
- mobile-responsive: [breakpoint behavior to confirm]
```
