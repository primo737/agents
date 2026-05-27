# agents

Multi-agent orchestration system and skills library built on the [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk).

A prompt comes in. The orchestrator breaks it into phases and delegates to specialized subagents — researcher, writer, reviewer — coordinating between them until the task is done. The `skills/` directory extends what agents can do with 47+ domain-specific instruction sets covering funnels, launch strategy, deployment, design, and more.

---

## Don't Know Where to Start? Let Claude Interview You

You don't need to know which skill to use. Just describe what you're trying to build, and Claude will ask you a few questions to route you to the right one.

**Example:**

> "I want to sell a high-ticket coaching program but I'm not sure where to begin."

Claude will ask about your offer price, audience size, traffic source, and timeline — then route you to the right skill combination (e.g., `launchmap` → `launchmap-avatar` → `launchmap-offer` → `high-ticket-funnel`).

**To trigger the interview, say things like:**
- _"I'm not sure which funnel to use. Help me figure it out."_
- _"Walk me through what I need to launch this offer."_
- _"Ask me questions and tell me what skill applies."_

The dedicated routing skill is **`funnel-select`** — it runs a decision tree based on your offer price, traffic temperature, and goal, then points you to the right funnel skill to build pages.

**Many skills have mandatory intake built in.** They won't generate output until you've answered their intake questions. For example:
- `blair-singer-intro` requires answers to 10 specific questions before writing a single line of your speaker intro
- `halibut-instructional` runs a 13-question prompt-engineering intake before building your instruction set
- `launchmap-avatar` won't produce an avatar profile until you've gone through the three avatar exercises

If a skill prompts you with questions — answer them. That's the intake phase, and the output quality depends on it.

---

## Architecture

```
orchestrate(prompt)
    │
    ├── researcher  — WebSearch, WebFetch, Read/Glob/Grep  (claude-sonnet, 15 turns)
    ├── writer      — Read, Write, Edit, Glob, Grep        (claude-sonnet, 10 turns)
    └── reviewer    — Read, Glob, Grep, WebSearch          (claude-haiku,  10 turns)
```

The orchestrator routes automatically. For complex tasks it runs research → write → review in sequence; if the reviewer requests revisions, feedback loops back to the writer. You can also call any agent directly.

Skills are declarative `SKILL.md` files — instruction sets that agents load as context for domain-specific work. No code required to add one.

---

## Setup

```bash
git clone https://github.com/primo737/agents
cd agents
npm install
export ANTHROPIC_API_KEY=your_key
```

Requires Node 18+ and TypeScript (via `tsx`).

---

## Usage

### CLI

```bash
# Full orchestrated run — auto-delegates to subagents
npm start "Research React Server Components and write a technical overview"

# Run a single agent directly
npm run research "What changed in TypeScript 5.7?"
npm run write "Write a README for a CLI tool called 'deploy'"
npm run review "Review src/orchestrator.ts for quality issues"
```

Prompt limit: 4,000 characters. Verbose output is on by default — you see tool calls and turn count live.

### Programmatic API

```typescript
import { orchestrate, runAgent } from "./src/lib.js";

// Full orchestrator
const result = await orchestrate("Research and write a report on X");

// Single agent
const brief = await runAgent("researcher", "What is X?");
```

---

## Skills Library

### Funnels

---

#### `funnel-select`
Route to the right funnel type before building anything.

**Use when:** You have an offer but don't know which funnel fits the price, audience, and goal. Use this before any funnel build.

**Skip when:** The offer itself isn't defined yet — use `launchmap-offer` first.

**Say:** _"which funnel should I use"_ · _"funnel recommendation"_ · _"what funnel type fits my offer"_ · _"pick a funnel for me"_

---

#### `challenge-funnel`
3, 5, or 7-day challenge with daily content pages and a mid-ticket offer ($197–$997) at the end.

**Use when:** Mid-ticket course launch with a warm list; re-engaging a cold list with free daily teaching; audience needs multiple days of momentum before the paid pitch.

**Skip when:** The offer is undefined — use `product-creator` first. You can't commit to daily Q&A or live moderation.

**Say:** _"build a challenge funnel"_ · _"5-day challenge"_ · _"7-day bootcamp funnel"_ · _"daily action challenge"_ · _"challenge to offer"_

---

#### `webinar-funnel`
Live webinar registration → watch → offer sequence for $297–$2,000+ offers.

**Use when:** Mid-to-high ticket launch to a warm email list; testing a new pitch live before evergreening; re-activating a cold list with fresh teaching.

**Skip when:** Offer is over $2K and needs a sales call — use `application-funnel`. Offer is under $297 — use `vsl-funnel` or `tripwire-funnel`.

**Say:** _"build a webinar funnel"_ · _"webinar registration page"_ · _"live webinar funnel"_ · _"masterclass funnel"_ · _"webinar pitch funnel"_

---

#### `evergreen-webinar-funnel`
Automated 24/7 webinar funnel with session picker, countdown mechanics, and time-limited replay access.

**Use when:** The webinar pitch has been proven live (3+ runs); scaling a mid-to-high ticket offer continuously without scheduling events; cold paid traffic at scale.

**Skip when:** The webinar hasn't been run live yet — prove it first. List is under 500 warm subscribers.

**Say:** _"evergreen webinar"_ · _"on-demand webinar funnel"_ · _"automated webinar funnel"_ · _"24/7 webinar funnel"_ · _"simulate live webinar"_

---

#### `vsl-funnel`
Video sales letter page with order form for info products and coaching ($97–$2,000).

**Use when:** Cold paid traffic from Meta or YouTube; evergreen lead magnet upgrade; replacing a heavy long-form sales page that converts but feels slow.

**Skip when:** The pitch is 60–90 minutes of teaching — that's a webinar. Offer is over $2K and needs a conversation.

**Say:** _"build a VSL funnel"_ · _"video sales letter page"_ · _"long-form video pitch"_ · _"VSL with order page"_ · _"warm traffic VSL"_

---

#### `optin-funnel`
2-page lead capture + thank-you for a free lead magnet (checklist, template, PDF, mini-course).

**Use when:** Top-of-funnel list building from cold paid or organic traffic; warming an audience before a launch; content marketing where conversion is email captures, not purchases.

**Skip when:** The lead magnet doesn't exist — use `launchmap-lead-magnet` first. The goal is direct sales, not list building.

**Say:** _"build an opt-in funnel"_ · _"lead magnet funnel"_ · _"squeeze page"_ · _"free opt-in page"_ · _"email capture funnel"_

---

#### `tripwire-funnel`
Low-ticket cold-traffic offer ($7–$47) that converts strangers to buyers, then upsells to the core product.

**Use when:** Cold paid traffic that needs day-one revenue to offset ad spend; seeding a buyer list before a high-ticket launch; a small purchase pre-qualifies the lead for the back-end.

**Skip when:** The offer needs design work — use `launchmap-offer` first. You want free email capture only — use `optin-funnel`.

**Say:** _"build a tripwire funnel"_ · _"low-ticket front-end offer"_ · _"self-liquidating offer"_ · _"$27 cold offer"_ · _"tripwire to upsell"_ · _"fast cash funnel"_

---

#### `high-ticket-funnel`
$3K–$50K+ application → call-booking → sales call sequence.

**Use when:** Done-with-you coaching or consulting with a proven track record and case studies; warm list of 1,000+ subscribers; you can run 10–20 sales calls per month.

**Skip when:** List is under 1,000 warm subscribers — the math doesn't work yet. No case studies — use `webinar-funnel` to build proof first.

**Say:** _"build a high-ticket funnel"_ · _"$5K offer funnel"_ · _"$10K coaching funnel"_ · _"booked-call funnel"_ · _"high-ticket sales funnel"_

---

#### `application-funnel`
Qualification form → conditional calendar booking (only if qualified) for $2K–$10K offers.

**Use when:** Limited call capacity and you need to filter unqualified leads; clear 3–5 hard qualification criteria (budget, timeline, fit); sales team ready for callback velocity.

**Skip when:** List is under 500 — the math doesn't work. Offer isn't proven yet. No follow-up infrastructure.

**Say:** _"build an application funnel"_ · _"high-ticket application form"_ · _"qualified lead funnel"_ · _"application to call funnel"_ · _"VIP application funnel"_

---

#### `membership-funnel`
Recurring subscription funnel ($9–$297/mo) with trial-to-paid conversion, retention, and cancellation save.

**Use when:** Recurring offer with product-market fit and a clear Aha moment in the first 7 days; churn under 15% monthly; analytics in place to measure activation and LTV.

**Skip when:** The product doesn't have a clear Aha moment — fix the core product first. Churn is already above 15% — retention is the bottleneck, not the funnel.

**Say:** _"build a membership funnel"_ · _"recurring revenue funnel"_ · _"subscription funnel"_ · _"membership onboarding"_ · _"membership retention funnel"_

---

#### `product-launch-funnel`
Jeff Walker-style PLF multi-phase launch (pre-launch → launch → close) for $297–$2,000+ offers.

**Use when:** New course or program launch to a warm list of 1,000+ subscribers; cohort with a real start date; relaunch of a proven offer to a list that hasn't seen it in 6+ months.

**Skip when:** List under 1,000 — use `webinar-funnel` or `vsl-funnel` first. You can't honor a hard cart close — PLF only works with a real deadline.

**Say:** _"build a PLF launch"_ · _"Jeff Walker launch funnel"_ · _"product launch sequence"_ · _"open cart launch"_ · _"4-video pre-launch sequence"_ · _"14-day launch"_

---

#### `saas-funnel`
Free trial or freemium acquisition flow with trial-to-paid nurture for $9–$299/mo SaaS.

**Use when:** Self-serve software with a 7–30 day trial or freemium model; B2B or prosumer product users can evaluate without a call; cold or warm traffic from Google, social, or content.

**Skip when:** Enterprise sales requiring a discovery call — route to `high-ticket-funnel`. Actual in-app onboarding curriculum — use `training-designer`.

**Say:** _"SaaS funnel"_ · _"trial signup funnel"_ · _"freemium funnel"_ · _"build a SaaS landing page"_ · _"SaaS pricing page"_ · _"convert trial users to paid"_

---

#### `group-funnel`
Community growth funnel: email capture → Skool / Whop / Discord / Circle invite.

**Use when:** Building a free community as a top-of-funnel to warm a list before a paid offer; running cold or warm traffic to grow community membership and email in parallel.

**Skip when:** The community has no clear value prop or daily content plan — empty rooms kill conversion. Goal is direct sales from cold traffic — use `vsl-funnel` or `challenge-funnel`.

**Say:** _"build a group funnel"_ · _"community signup funnel"_ · _"Skool community funnel"_ · _"Discord community funnel"_ · _"email to community funnel"_

---

#### `ecommerce-funnel`
DTC product funnel: product page → cart → checkout → order bumps → post-purchase upsells → cart abandonment recovery.

**Use when:** Physical or digital product brand with 5+ SKUs and repeat purchase potential; proven COGS and unit economics where breakeven is achievable on first purchase.

**Skip when:** Product isn't ready or unit economics are negative. No fulfillment or inventory plan locked in.

**Say:** _"build an ecommerce funnel"_ · _"Shopify funnel"_ · _"product store"_ · _"cart abandonment recovery"_ · _"post-purchase upsell"_ · _"DTC funnel"_

---

### LaunchMap System

End-to-end launch orchestration across 11 skills. Run `launchmap` to coordinate all phases, or run individual phases standalone.

---

#### `launchmap`
Orchestrator — coordinates all 9 LaunchMap phases in sequence.

**Use when:** Building a new offer from scratch with an 8–12 week timeline; established coach or consultant who needs a systematic approach to a new launch.

**Skip when:** The offer is already proven and you just need pages — use the specific funnel skill directly.

**Say:** _"build a LaunchMap"_ · _"Fletcher Method"_ · _"9-step launch"_ · _"complete launch strategy"_ · _"end-to-end product launch"_

---

#### `launchmap-avatar` _(Step 1)_
Perfect Avatar development: Target Market Matchmaker, Avatar Snapshot, Avatar Goals.

**Say:** _"perfect avatar"_ · _"avatar development"_ · _"ideal customer profile"_ · _"target market"_ · _"customer avatar"_

---

#### `launchmap-mdm` _(Step 2)_
Million Dollar Message — single sentence defining who you help, what result, timeframe, and pain eliminated.

**Say:** _"million dollar message"_ · _"MDM"_ · _"core positioning statement"_ · _"what do you do statement"_

---

#### `launchmap-offer` _(Step 3)_
Perfect Offer design: Profit Pyramid (free → low-ticket → core → high-ticket), Product Roadmap (9 steps), Delivery Checklist.

**Say:** _"perfect offer"_ · _"offer design"_ · _"product stack"_ · _"pricing strategy"_ · _"offer architecture"_

---

#### `launchmap-lead-magnet` _(Step 4)_
Ultimate Lead Magnet (ULM) with temperature ratings (HOT/WARM/COLD) and 2–3 step-specific variants by traffic source.

**Say:** _"lead magnet design"_ · _"ultimate lead magnet"_ · _"free opt-in offer"_ · _"what should my lead magnet be"_

---

#### `launchmap-authority` _(Step 5)_
Authority Amplifier: free content that positions you as the expert before the high-ticket pitch. Framing → Content (WHAT not HOW) → single CTA.

**Say:** _"authority amplifier"_ · _"teach to sell"_ · _"free authority content"_ · _"pre-launch content"_ · _"warm up the audience"_

---

#### `launchmap-enrollment` _(Step 6)_
10X Enrollment Script: Frame → Discover → Problems → Prescription → Application → Invitation. For closing high-ticket sales calls.

**Say:** _"enrollment script"_ · _"sales call script"_ · _"close the call"_ · _"conversion call"_ · _"sales conversation"_

---

#### `launchmap-content` _(Step 7)_
Content Roadmap for the full program delivery: 5P framework (Promise/Problem/Proof/Pain/Promotion), module-by-module curriculum map.

**Say:** _"content roadmap"_ · _"program curriculum"_ · _"course outline"_ · _"lesson plan"_ · _"module structure"_

---

#### `launchmap-traffic` _(Step 8)_
Traffic On Demand: 5 ad angles (Case Study / Template / Comparison / Question / How-To), ad concepts, 3-layer testing plan.

**Say:** _"traffic strategy"_ · _"ad strategy"_ · _"cold traffic"_ · _"paid ads"_ · _"Facebook ads"_ · _"media buying"_

---

#### `launchmap-retargeting` _(Step 9)_
Retargeting Roadmap: Metrics Multiplier, TOF/MOF/BOF strategies, 15–30 day rotation of email, SMS, video, and paid ads.

**Say:** _"retargeting strategy"_ · _"cart abandonment email"_ · _"reengagement sequence"_ · _"last chance email"_

---

#### `launchmap-compile`
Assembles all LaunchMap phases into a single deliverable launch plan.

**Say:** _"compile the LaunchMap"_ · _"put it all together"_ · _"final launch plan"_ · _"LaunchMap summary"_

---

### Deployment

---

#### `deploy-vercel`
Ship a funnel page or web app to Vercel: first deploy, custom domains, env vars, preview → production promotion.

**Use when:** Deploying any Lovable export, Next.js build, or static HTML to Vercel. Default deploy target for new funnels.

**Say:** _"deploy to Vercel"_ · _"push this live"_ · _"set up a custom domain on Vercel"_ · _"add an env var"_ · _"wire the funnel to [domain]"_

---

#### `deploy-netlify`
Ship a static site or Next.js app to Netlify: built-in forms, branch deploys, split testing, redirect rules.

**Use when:** Site already exists on Netlify, needs Netlify's built-in form handling, or client requires it. Default to Vercel for new funnels.

**Say:** _"deploy to Netlify"_ · _"push this site to Netlify"_ · _"set up Netlify forms"_ · _"add a Netlify redirect"_

---

#### `deploy-cloudflare`
Ship to Cloudflare Pages via Wrangler: global edge performance, Workers integration, direct upload of built `dist/`.

**Use when:** Domain already on Cloudflare DNS; architecture includes a Cloudflare Worker; global edge speed is a requirement.

**Say:** _"deploy to Cloudflare Pages"_ · _"push to Cloudflare"_ · _"I need global edge"_ · _"set up Wrangler"_ · _"add a Worker"_

---

### Design & UX

---

#### `design-system`
Premium visual language: color tokens, typography scale, spacing, buttons, cards, forms, animation. Returns CSS variable tables ready for Tailwind, Lovable, or Framer.

**Use when:** Starting a new funnel build; existing page looks generic or template-ish; standardizing tokens across multiple pages.

**Say:** _"make this look premium"_ · _"page looks cheap"_ · _"give me design tokens"_ · _"set up the theme"_ · _"spec the buttons and cards"_ · _"build design system"_

---

#### `brand-color-application`
Deploy a defined palette using 5 techniques: product background, gradient headings, color-per-category, color grid, tint unification.

**Use when:** Palette is defined but the page still looks unbranded; color only appears on the CTA button; layout is in place but the brand isn't showing.

**Skip when:** No palette exists yet — run `design-system` first.

**Say:** _"page looks unbranded"_ · _"how do I use my colors"_ · _"make it feel more on-brand"_ · _"apply the palette"_ · _"design feels generic"_

---

#### `conversion-ux`
Conversion-focused UX patterns: layout, CTA design and placement, social proof blocks, urgency, friction reduction, visual hierarchy. 12-pattern checklist for every page type.

**Use when:** Building or rebuilding a landing, sales, opt-in, checkout, application, or webinar page. Auditor flagged UX gaps. Mobile sticky CTA is missing. Form friction is high.

**Say:** _"lay out this page"_ · _"where should the CTA go"_ · _"how should the hero look"_ · _"fix the form"_ · _"add social proof"_ · _"reduce friction on checkout"_

---

#### `conversion-audit`
100-point scored audit for any live page or funnel. Produces a scorecard + prioritized fix list (quick wins first, then strategic moves).

**Use when:** A live page has low conversion and you need to know why. About to run paid traffic. Inheriting someone else's funnel. Quarterly CRO sweep.

**Skip when:** The offer itself is the problem — no audit fixes a weak offer.

**Say:** _"audit this funnel"_ · _"audit my landing page"_ · _"why isn't this converting"_ · _"score this page"_ · _"give me a CRO review"_

---

#### `mobile-responsive`
Mobile-first responsive patterns: breakpoints, touch targets, type scale, sticky CTA bar, single-column layout, viewport meta.

**Use when:** Building any new page; existing page bounces on mobile; auditor flagged mobile experience under 7/10; form is unusable on phone.

**Say:** _"make this mobile-friendly"_ · _"fix the mobile layout"_ · _"page breaks on iPhone"_ · _"add a sticky CTA"_ · _"set up breakpoints"_ · _"audit mobile experience"_

---

#### `jan-mraz-design-trends`
17 web design trends (2025–2026): huge typography, interactive 3D, brutalism, bento grid, AI patterns, parallax, minimalism, glassmorphism, barely-there UI, human touch, grade-school palette, democratized animations, tech bro gradient, and more.

**Use when:** Palette and layout are in place but the page still looks flat, dated, or forgettable. Need a signature visual technique.

**Skip when:** No palette or layout exists yet — finish those first.

**Say:** _"make this feel current"_ · _"what design styles are trending"_ · _"page looks dated"_ · _"add visual interest"_ · _"apply a design trend"_ · _"what's trending in 2026"_

---

### Performance & Analytics

---

#### `page-speed`
Audit and fix Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1. Targets hero images, fonts, and third-party scripts.

**Use when:** Page scores red in Lighthouse; LCP/CLS/INP is failing; about to run paid traffic and speed is a quality score factor.

**Say:** _"page is slow"_ · _"audit speed"_ · _"Lighthouse score"_ · _"Core Web Vitals"_ · _"fix LCP"_ · _"optimize images"_

---

#### `analytics-setup`
Install GA4, Meta Pixel, GTM, conversion tracking, and UTM handling on funnels. Wires to GHL, Vercel, Lovable, and Framer.

**Use when:** Launching paid traffic and conversion events aren't tracking; standing up GA4 or Pixel on a new page; GHL form needs to fire Pixel + GA4; cross-domain tracking is broken.

**Say:** _"install GA4"_ · _"add the Pixel"_ · _"set up GTM"_ · _"track conversions"_ · _"UTM strategy"_ · _"Pixel isn't firing"_

---

#### `security-scan`
AgentShield audit of Claude settings and skills directory: hardcoded secrets, overly permissive allow rules, API key exposure.

**Use when:** After adding new credentials, skills, or MCPs. Periodic security hygiene. Checking whether allow rules are too broad.

**Say:** _"security scan"_ · _"run AgentShield"_ · _"check for secrets"_ · _"scan my settings"_ · _"security check"_

---

### Content & Storytelling

---

#### `magnetic-story`
Build a personal story bank and hook engine: 7 arc types, 10-story template, voice capture, story-to-context matching logic.

**Use when:** Writing a hook, epiphany bridge, reel script, email opener, or talk opening. Any personal narrative where emotional resonance drives action.

**Say:** _"find me a story"_ · _"write a hook"_ · _"make this magnetic"_ · _"origin story"_ · _"epiphany bridge"_ · _"open my talk"_ · _"story for this post"_

---

#### `show-not-tell`
Rewrite copy by replacing labels and summaries with scenes, moments, and sensory details. Reader arrives at conclusions through experience.

**Use when:** Any piece that names conclusions ("I worked hard"), uses abstract language, or tells the reader what to feel instead of showing it. Emails, social captions, sales pages, hooks, intros, bios.

**Say:** _"show not tell"_ · _"show don't tell"_ · _"make this more vivid"_ · _"too abstract"_ · _"make it real"_ · _"I want them to feel it"_

---

#### `blair-singer-intro`
Full 13-section Blair Singer intro sequence for talks, workshops, and keynotes. Produces a ready-to-deliver speaker script (not bullets).

**Intake required:** This skill will ask you 10 specific questions before writing a single line. Answer all of them — topic, A-to-B transformation, what they'll have/feel/see/become, audience context, three modules, objections, and event formality.

**Say:** _"blair singer intro"_ · _"intro sequence"_ · _"open my talk"_ · _"write my talk intro"_ · _"build the opening"_

---

#### `ai-hour-session-framework`
Turn past AI Hour cohort transcripts into a facilitator playbook + Halibut-generated agent prompt.

**Use when:** Preparing a next cohort run; extracting teaching architecture from past sessions; building a runnable facilitator co-pilot.

**Say:** _"turn AI Hour into a framework"_ · _"build the next playbook"_ · _"make a facilitator co-pilot"_ · _"extract teaching architecture"_ · _"design the next session"_

---

#### `halibut-instructional`
Guide through creating powerful instructional prompts via a 13-question intake, then generate polished, human-sounding output free of detectable AI patterns.

**Intake required:** This skill runs a 13-question intake (action, audience, tone, key points, avoid, structure, length, examples, emotional feel, creative vs factual, continuity, terminology, urgency). It asks 2–3 questions at a time, not all at once.

**Say:** _"help me write a prompt"_ · _"build me a prompt for X"_ · _"help me get better results from AI"_ · _"write a prompt that does X"_ · _"prompt engineer this"_

---

### Training & Speaking

---

#### `training-designer`
Design complete training programs, workshops, bootcamps, seminars, masterclasses. Integrates HECSC model, TTT Production System, and game/exercise creation.

**Use when:** Building any live or recorded educational experience — workshop, bootcamp, seminar, masterclass, certification, group coaching, live event. Creating learning objectives or a facilitation plan.

**Say:** _"design a training"_ · _"build me a workshop"_ · _"plan a bootcamp"_ · _"create a curriculum"_ · _"structure a 2-day event"_ · _"training agenda"_ · _"HECSC"_

---

#### `speaking-influence`
Story architecture that changes minds using Eric Edmeades' influence framework: Five Levels of Impact, paradigm shift technique, inception storytelling, Aikido principle.

**Use when:** Crafting stories to move an audience beyond entertainment — to shift beliefs, inspire action, or create realizations that feel like the audience's own idea.

**Say:** _"craft an influence story"_ · _"I want to shift beliefs"_ · _"inception storytelling"_ · _"speaking influence"_ · _"paradigm shift"_

---

#### `product-creator`
Build, package, and price an irresistible offer using Alex Hormozi's $100M Offers methodology: Foundation & Capacity Assessment, Offer Construction (5-step), Offer Enhancement (5 psychological levers).

**Use when:** Creating or packaging anything you sell — new offer, productized service, offer stack, value stack. Before building any funnel.

**Say:** _"build me a product"_ · _"create a new offer"_ · _"productize my service"_ · _"package this"_ · _"price this product"_ · _"build an offer stack"_ · _"make my offer irresistible"_

---

### Marketing & Infrastructure

---

#### `marketing-stack`
Wire funnels to a GHL-centered stack (email, SMS, payments, CRM, workflows) via n8n on VPS. Covers Stripe integration, webhook plumbing, cross-tool automation.

**Use when:** Connecting a Lovable/Framer/Vercel page to GHL; mapping webhook payloads; building n8n automation between tools; integrating Mailchimp, ConvertKit, or HubSpot.

**Say:** _"connect this to GHL"_ · _"wire the form"_ · _"set up Stripe"_ · _"send a webhook to n8n"_ · _"integrate with HubSpot"_ · _"funnel handoff to GHL"_

---

#### `ab-testing`
Design, run, and call A/B tests on funnel pages and email sequences: sample size tables, test briefs, results logging, 95% confidence minimum.

**Use when:** Testing a headline, CTA, hero, or pricing variant; checking whether a winner is statistically significant; setting up split routing in Vercel or audience splits in GHL.

**Skip when:** Copy hasn't been written yet — write and validate before you split-test.

**Say:** _"split test"_ · _"A/B test"_ · _"test the headline"_ · _"is this winning yet"_ · _"what's the sample size"_ · _"should I call the winner"_

---

## Reference Materials

These folders contain supporting materials used by agents during skill execution. They don't have standalone `SKILL.md` files — they're loaded as context.

| Folder | Contents |
|---|---|
| `hr/` | E-Myth job creator for designing systemized roles and Position Contracts |
| `strategy/` | RPM planning methodology, Product Launch Framework sequences, operations manual, CEO scorecard, transformational leadership framework |
| `content/` | YouTube strategy, hook creation frameworks, title formulas, thumbnail scripts, video monetization playbooks |
| `marketing/` | Brand kit templates, customer avatar exercises, funnel taxonomy, digital marketing onboarding, offer stack creation |
| `sales/` | Customer Value Journey copywriter, VSL wizard, sales letter templates and anatomy builder, 4-legged stool copy auditor |
| `storytelling/` | Story extraction and analysis from speaking transcripts; preserves narrative voice for book chapters and stage placement |
| `training/` | Mini-course creator, masterclass wizard, training program developer, instructional prompt guide, prompt engineering docs |

---

## Adding a Skill

1. Create `skills/<your-skill-name>/SKILL.md`
2. Add frontmatter:

```yaml
---
name: your-skill-name
description: One sentence on what this skill does and when to use it. Include trigger phrases.
---
```

3. Write the instruction body — what the agent should do, step by step. If the skill needs information from the user before it can produce output, include an **intake phase** at the top that specifies what questions to ask and in what order.

Use `skills/challenge-funnel/SKILL.md` as a template for structure and `skills/blair-singer-intro/SKILL.md` as a template for intake-first skills.

---

## Project Structure

```
├── src/
│   ├── index.ts          # CLI entry point
│   ├── orchestrator.ts   # Core orchestration logic
│   ├── lib.ts            # Public API (orchestrate, runAgent, agents)
│   └── agents/
│       ├── index.ts
│       ├── researcher.ts
│       ├── writer.ts
│       └── reviewer.ts
├── skills/               # 47+ skill directories
├── .claude/skills/       # Claude Code skill wrappers for researcher/writer/reviewer
├── package.json
└── tsconfig.json
```
