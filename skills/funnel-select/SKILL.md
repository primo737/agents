---
name: funnel-select
description: Decision-tree skill that picks the right funnel type from offer, price point, traffic temperature, and goal. Use when the user says "which funnel should I use", "pick a funnel for this offer", "what funnel fits a $X product", "build a funnel for [offer]", "choose between webinar and challenge", or asks for a recommendation before any page is built. Outputs a primary recommendation, an alternative, the page list, and an estimated build time so a Lovable or Framer build can start. Skip if the user is asking for offer construction, avatar work, messaging, or copy voice — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, or magnetic-story / cris-vinson-storybank.
---

# Funnel Select

Decision tree to pick the funnel type before any page gets built. The output feeds Lovable/Framer page builds, GHL form/automation setup, and the LaunchMap traffic + retargeting plan.

## When to use
- User has an offer and price but no funnel chosen yet.
- User is debating between two funnel types (e.g., webinar vs. challenge, opt-in vs. quiz).
- User wants a build estimate (page count, complexity) before committing.
- User says "what funnel fits this" or "pick a funnel for $X offer to cold/warm traffic".
- Migrating an offer from one funnel type to another and needs a structured choice.

## When NOT to use
- Designing the offer itself, stack, bonuses, guarantees → `product-creator` or `grand-slam-offer-architect`.
- Defining the avatar → `launchmap-avatar`.
- Writing the Million Dollar Message or core messaging → `launchmap-mdm`.
- Writing webinar / VSL / talk SCRIPTS → `expert-secrets-perfect-webinar` or `launchmap-authority`.
- Telling the founder story or finding voice → `magnetic-story` / `cris-vinson-storybank`.
- Page copy or layout patterns once the funnel is picked → `conversion-ux`, `design-system`.

## The stack defaults
- CRM, email, SMS, forms, calendars, workflows: GHL (main location `[GHL_LOCATION_ID]`). Fast Track is a separate sub-account — never touch unless specified.
- Page builds: Lovable for net-new builds, Framer for design-heavy / portfolio pages.
- Hosting: Vercel (custom domains via GHL or Vercel DNS).
- Automation: n8n on the VPS (call Claude via the SSH node + bash wrapper, not the Anthropic API node).
- Decks: Gamma (textMode=preserve, freeform format, "unwiz" theme).

## Process
1. Ask only what is missing: primary goal, offer, price, traffic temperature (cold/warm/hot), required qualification, recurring vs. one-time.
2. Walk the decision tree below. Do not guess past a missing input — ask once.
3. Pick the primary funnel. Pick one alternative.
4. List the exact pages (URL slugs) that will be built and which tool builds each (Lovable, Framer, GHL).
5. Estimate build time in hours, including GHL workflow setup and tracking.
6. Hand off the page list to `conversion-ux` for layout, `design-system` for theming, `mobile-responsive` for breakpoints.

## Brand voice rules (always apply)
- English only. No Tagalog or Taglish in any page copy, button text, email, or SMS.
- No em dashes anywhere in client-facing copy. Use commas, periods, or colons.
- No URLs in any SMS — point to email instead.
- Never auto-send to contacts. Draft, show for approval, then send.
- Outbound sends greater than 10 contacts must be dripped at 1 per 30 to 60 seconds, or run through a GHL workflow. Confirm cadence before sending.
- Outreach DMs and SMS must open with: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." before any personalization.
- Defensible credentials: $10M+ revenue, 1,000+ trained. Never use the older $100M+ or 1,500+ figures.

## Anti-patterns
- Never recommend a webinar funnel under $500 ticket price. The build cost beats the margin.
- Never recommend an application funnel under $2,000. It adds friction the price cannot earn back.
- Never pair cold traffic with a direct-to-checkout page above $50. Use a webinar, challenge, or VSL bridge.
- Never assume "free signup" framing for Nas.com. Nas.com has no free plan as of 2026-04-20. Verify pricing before any Nas.com funnel.
- Never recommend a quiz funnel without naming the segmentation logic and the downstream branches.
- Never skip the page list. "Build a webinar funnel" with no slugs leaves the builder guessing.

## Decision tree

```
START
|
+-- Primary goal?
|   |
|   +-- Lead capture / list growth
|   |   +-- Free PDF, checklist, template     -> OPT-IN FUNNEL
|   |   +-- Need segmentation / qualification -> QUIZ FUNNEL
|   |   +-- Promoting a book                  -> BOOK FUNNEL
|   |   +-- Growing Skool / Whop / FB / Discord -> GROUP FUNNEL
|   |   +-- Pre-launch buzz                   -> WAITLIST FUNNEL
|   |
|   +-- Sell a product / service
|   |   +-- Price < $50
|   |   |   +-- Want immediate upsell    -> TRIPWIRE FUNNEL
|   |   |   +-- Single one-time sale     -> DIRECT RESPONSE FUNNEL
|   |   +-- Price $50 to $500
|   |   |   +-- Physical product         -> E-COMMERCE FUNNEL
|   |   |   +-- Digital / service        -> DIRECT RESPONSE FUNNEL
|   |   +-- Price $500 to $2,000
|   |   |   +-- Education-heavy          -> WEBINAR FUNNEL
|   |   |   +-- Cohort / community       -> CHALLENGE FUNNEL
|   |   +-- Price $2,000+
|   |   |   +-- Needs qualification      -> APPLICATION FUNNEL
|   |   |   +-- Multi-speaker education  -> SUMMIT FUNNEL
|   |   +-- Recurring revenue
|   |       +-- Software                 -> SAAS FUNNEL
|   |       +-- Content / community      -> MEMBERSHIP FUNNEL
|   |
|   +-- Recruit affiliates / partners    -> AFFILIATE FUNNEL
|   |
|   +-- Complex multi-stage B2B sale     -> MULTI-STEP FUNNEL
```

## Funnel comparison table

| Funnel | Pages | Complexity | Best for | Conversion benchmark |
|---|---|---|---|---|
| Opt-in | 2 | 1 | Email list building | 30 to 50% opt-in |
| Quiz | 3 to 5 | 2 | Lead segmentation | 40 to 60% completion |
| Book | 3 to 4 | 2 | Authority + buyer list | 5 to 15% purchase |
| Waitlist | 2 | 1 | Pre-launch demand | 20 to 40% signup |
| Group | 2 | 1 | Skool, Whop, FB, Discord growth | 25 to 50% opt-in, 15 to 40% group join |
| Tripwire | 3 to 4 | 2 | Buyer acquisition | 3 to 8% purchase |
| Direct response | 3 to 5 | 3 | Mid-ticket sales | 1 to 5% purchase |
| E-commerce | 3 to 5 | 3 | Physical products | 2 to 4% purchase |
| Webinar | 4 to 6 | 3 | High-ticket education | 2 to 10% of attendees |
| Challenge | 5 to 8 | 4 | Cohort engagement | 5 to 15% of participants |
| Summit | 5 to 8 | 4 | List + sales spike | 10 to 30% registration |
| Application | 4 to 6 | 3 | Premium services | 5 to 20% application |
| SaaS | 4 to 6 | 4 | Software trials | 2 to 10% trial to paid |
| Membership | 4 to 6 | 4 | Recurring content | 3 to 8% conversion |
| Affiliate | 3 to 4 | 2 | Partner recruitment | 10 to 25% signup |
| Multi-step | 5 to 10 | 5 | Complex B2B sales | Varies |

## Output template

```
PRIMARY RECOMMENDATION: [Funnel type]
Why: [2 sentences tied to the offer, price, traffic, goal]

ALTERNATIVE: [Funnel type]
When to flip: [1 sentence — what would change the call]

PAGES TO BUILD
1. [/slug] [Page name] — [tool: Lovable | Framer | GHL]
2. [/slug] [Page name] — [tool]
3. ...

GHL ASSETS
- Form(s): [name]
- Workflow(s): [name + trigger]
- Pipeline / opportunity stage: [name]
- Tag(s): [name]

ESTIMATED BUILD TIME
- Pages: [hours]
- GHL setup: [hours]
- Tracking + QA: [hours]
- Total: [hours]

NEXT SKILL TO RUN
- conversion-ux for layout patterns on [page]
- design-system for theming
- mobile-responsive for breakpoints + sticky CTA
```
