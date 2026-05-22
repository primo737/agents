---
name: launchmap-retargeting
description: >
  Step 9 of the Fletcher Method LaunchMap. Builds the Retargeting Roadmap — a
  structured follow-up system for warm audiences who've already engaged. Covers:
  full funnel stages, Metrics Multiplier (reverse-engineering from revenue goal),
  TOF metrics ($0.03–$0.05/view), MOF bow-tie funnel (5% opt-in → 5% booking →
  20% close), and BOF 15–30 day rotation sequence (FAQs/Testimonials/Product
  Tour/Engagement/Incentives). Reads session context. Saves to
  /tmp/launchmap-session/09-retargeting.md.
---

# LaunchMap — Step 9: Retargeting Roadmap

## Setup

Check for session context:
```bash
cat /tmp/launchmap-session/01-avatar.md 2>/dev/null
cat /tmp/launchmap-session/02-mdm.md 2>/dev/null
cat /tmp/launchmap-session/03-offer.md 2>/dev/null
cat /tmp/launchmap-session/08-traffic.md 2>/dev/null
```

---

## What Is a Retargeting Roadmap?

Cold traffic gets people to opt in. Retargeting converts opt-ins into buyers.

Most businesses skip retargeting and then wonder why their ad costs are too high. The reality: the first touch rarely closes. Most buyers need 5–12 touchpoints before they're ready to act. Retargeting delivers those touchpoints cheaply because you're only reaching people who already showed interest.

The retargeting roadmap is a deliberate sequence — different messages for different stages of the funnel, timed to match where the prospect is in their decision.

---

## The Three Funnel Stages

**TOF — Top of Funnel (Awareness)**
Cold audience → first opt-in
Goal: Get them into the list. Nothing more.
Success metric: Cost Per View (CPV) or Cost Per Lead (CPL)

**MOF — Middle of Funnel (Consideration)**
Opt-ins → booked calls / application
Goal: Move warm leads to a sales conversation.
Success metric: Cost Per Booking

**BOF — Bottom of Funnel (Decision)**
Call-booked or post-call → enrollment
Goal: Convert interested prospects into paying clients.
Success metric: Cost Per Acquisition (CPA) / Close Rate

---

## Exercise 1: Metrics Multiplier

Reverse-engineer from the revenue goal.

Ask: "What's your monthly revenue goal once the system is running?"

Then work backwards:

**Example (plug in their numbers):**
- Revenue goal: $30,000/month
- Core offer price: $3,000
- → Need 10 clients/month

- Close rate from call: 20%
- → Need 50 calls/month

- Booking rate from opt-in: 5%
- → Need 1,000 opt-ins/month

- Opt-in rate from views: 5%
- → Need 20,000 views/month

- Cost per view: $0.03–$0.05
- → Ad budget: $600–$1,000/month

Fill in their numbers. Show the math clearly. This becomes their monthly north star.

---

## Exercise 2: TOF (Top of Funnel) Strategy

Goal: Traffic that opts in.

**Primary driver:** Authority Amplifier (AA) or Lead Magnet ad  
**Target audience:** Cold — lookalikes, interests, broad  
**KPIs:**
- CPV (cost per video view): $0.03–$0.05 target
- CPL (cost per lead/opt-in): <$5 most markets, <$15 for high-ticket B2B

**TOF Content Types:**
- Short video (15–60 sec) → drives views and warms for retargeting
- Lead magnet ad → drives direct opt-ins
- Value content → builds page audience for cheap retargeting

Ask: "Do you currently have any video content? Even phone-shot videos? These are your cheapest retargeting seeds."

---

## Exercise 3: MOF (Middle of Funnel) — The Bow-Tie

The bow-tie funnel: lots of leads at the top, narrows to calls, then fans out to follow-ups.

```
[1,000 opt-ins]
       ↓ 5% booking rate
  [50 booked calls]
       ↓ 20% close rate
  [10 new clients]
```

**MOF Retargeting Sequence:**
Target: people who opted in but haven't booked a call.

Recommended rotation (7–14 days):
- Day 1–3: Case study / success story (someone like them got result)
- Day 4–6: FAQ video or post (answer the top objection they're sitting on)
- Day 7–10: Testimonial (social proof, different format)
- Day 11–14: Direct CTA ("Still thinking about it? Here's how to take the next step")

Budget: $3–5/day (very targeted audience — small and cheap)

---

## Exercise 4: BOF (Bottom of Funnel) — 15–30 Day Rotation

Target: people who booked a call but didn't enroll, or who went through a webinar without buying.

This is your most valuable retargeting audience. Treat them accordingly.

**15–30 Day Content Rotation:**

**Week 1 — FAQs:**
Answer the questions they didn't ask on the call. "I get asked a lot: [question]. Here's the real answer..."
(Address price, time commitment, results, credibility)

**Week 2 — Testimonials:**
Specific client wins. Video preferred. Written with specifics (numbers, timeframes) as backup.
Format: "Here's what [Name] said after [timeframe] in the program..."

**Week 3 — Product Tour:**
Walk through the program. What do they get? What does each stage look like? Remove the mystery.
Format: screen share, walkthrough, or slides with voiceover.

**Week 4 — Engagement:**
Personal, direct. "If you're still thinking about this, I want to know why. Comment below / DM me / click here."
Goal: start a conversation.

**Week 5+ — Incentive (if not yet closed):**
A reason to act now. Bonus, deadline, payment plan option. 
Important: only use urgency if it's real.

Ask: "Do you have any client testimonials on video? Or written with specific results?" (This is the biggest gap in most people's BOF — build this first.)

---

## Output

Save to `/tmp/launchmap-session/09-retargeting.md`:

```markdown
# Retargeting Roadmap

## Metrics Multiplier

Revenue Goal: $[X]/month
Core Offer Price: $[X]
→ Clients Needed: [X]/month
→ Calls Needed (at [X]% close): [X]/month
→ Opt-ins Needed (at 5% booking): [X]/month
→ Views Needed (at 5% opt-in): [X]/month
→ Ad Budget (at $0.04 CPV): ~$[X]/month

## TOF Strategy
- Primary ad type: [AA / Lead Magnet / Short Video]
- Target audience: [description]
- KPI targets: CPV $[X], CPL $[X]

## MOF Bow-Tie Sequence
Target: opted-in, not booked
Budget: $[X]/day
Rotation:
- Day 1–3: [content type + specific topic]
- Day 4–6: [content type + specific topic]
- Day 7–10: [content type + specific topic]
- Day 11–14: [content type + CTA]

## BOF 30-Day Rotation
Target: post-call, not enrolled
Budget: $[X]/day

Week 1 — FAQs:
- [FAQ topic 1]
- [FAQ topic 2]

Week 2 — Testimonials:
- [Testimonial type/format needed]

Week 3 — Product Tour:
- [What will be shown]

Week 4 — Engagement:
- [Direct outreach approach]

Week 5+ — Incentive:
- [Bonus or urgency element if genuine]

## Content Gaps to Fill
[List of missing assets — videos, testimonials, etc.]
```
