---
name: launchmap-content
description: >
  Step 7 of the Fletcher Method LaunchMap. Builds the Content Roadmap — for the
  core product and each of the 9 program steps: Title (MDM format), MDM statement,
  3–5 FAQs, 3–5 Search Terms, and 5P Messaging (Promise/Problem/Proof/Pain/Promotion,
  max 20% promotion). Creates a complete content strategy that drives organic traffic
  and warms leads before they ever book a call. Reads session context if available.
  Saves to /tmp/launchmap-session/07-content.md.
---

# LaunchMap — Step 7: Content Roadmap

## Setup

Check for session context:
```bash
cat /tmp/launchmap-session/01-avatar.md 2>/dev/null
cat /tmp/launchmap-session/02-mdm.md 2>/dev/null
cat /tmp/launchmap-session/03-offer.md 2>/dev/null
```

Load the product roadmap (9 steps) from the offer file. You'll build content for the core program + each step.

---

## What Is the Content Roadmap?

Content is not marketing. Done right, it's a trust-building system that warms cold prospects into ready buyers before they ever speak to you.

Each piece of content in the roadmap serves one of two purposes:
1. **Attract** — bring the right people into the world
2. **Warm** — move people from awareness to readiness

The content roadmap answers: what do we publish, where, and why?

---

## The Content Framework

For the CORE PROGRAM and each of the 9 STEPS, build:

### 1. Title (MDM Format)
Must follow the MDM formula: `"How [Avatar] can [Metric + Currency] in [Timeline] without [Pain]"`

Or a search-optimized version: `"[Number] Ways to [Result] for [Avatar]"`

### 2. MDM Statement
One-sentence summary of what this content promises to deliver.

### 3. FAQs (3–5)
The actual questions the avatar types into Google or asks in Facebook groups. Use their exact language — not polished marketing speak.

Ask: "What are the top 3–5 questions your avatar asks about [this topic]? Write them the way they'd actually phrase it."

### 4. Search Terms (3–5)
Keywords and phrases the avatar searches for when they're problem-aware. Include:
- Short-tail (1–2 words): broad awareness
- Long-tail (4–6 words): intent-rich, easier to rank for

Use the avatar's language, not industry jargon.

### 5. The 5P Messaging Framework

**Promise** — What specifically will they gain from consuming this content?

**Problem** — What frustration, struggle, or challenge does this address?

**Proof** — What evidence supports the promise? (Data, case study, personal result)

**Pain** — What's the cost of NOT solving this? What happens if they ignore it?

**Promotion** — The CTA. Maximum 20% of content. One action only.

> The 80/20 Rule: 80% value, 20% promotion. If your content is more than 20% self-promotion, it will not build trust — it will erode it.

---

## Building the Content Map

Work through each content unit:

**Unit 0: Core Program**
- Title:
- MDM Statement:
- FAQs: (3–5)
- Search Terms: (3–5)
- 5P: Promise / Problem / Proof / Pain / Promotion

**Unit 1: [Step 1 Name from Roadmap]**
... repeat for all 9 steps

Ask questions per unit to fill in the blanks. If session files exist, use the roadmap steps from `03-offer.md` to pre-fill step names and ask targeted questions.

---

## Platform Strategy

Ask: "Where does your avatar spend time consuming content? Rank these: YouTube, Instagram, Facebook, LinkedIn, TikTok, Podcast, Blog/SEO."

Based on their answer, recommend:
- **Top 1–2 platforms** to focus on
- **Content format** per platform (long-form video, short clips, written posts, stories)
- **Posting cadence** (realistic for their bandwidth)

> Principle: Master one platform first. Distribution comes after the content machine is running.

---

## Content Calendar Seed

Based on the 10 content units (core + 9 steps), create a 10-week seed calendar:
- Week 1: Core Program overview content
- Weeks 2–10: One step per week

Each week's content piece becomes: 1 long-form anchor piece + 3–5 short-form repurposed clips/posts.

---

## Output

Save to `/tmp/launchmap-session/07-content.md`:

```markdown
# Content Roadmap

## Platform Strategy
Primary: [Platform]
Secondary: [Platform]
Format: [Video / Written / Audio]
Cadence: [X posts/week]

## Content Units

### Unit 0: Core Program — [Program Name]
- **Title:** 
- **MDM Statement:** 
- **FAQs:**
  1. 
  2. 
  3. 
- **Search Terms:**
  1. 
  2. 
  3. 
- **5P Messaging:**
  - Promise: 
  - Problem: 
  - Proof: 
  - Pain: 
  - Promotion (≤20%): 

### Unit 1: [Step 1 Name]
[repeat structure for all 9 steps]

...

## 10-Week Content Calendar Seed
- Week 1: Core Program — [topic]
- Week 2: Step 1 — [topic]
...
- Week 10: Step 9 — [topic]
```
