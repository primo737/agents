---
name: launchmap-avatar
description: >
  Step 1 of the Fletcher Method LaunchMap. Builds the Perfect Avatar through three
  sequential exercises: Target Market Matchmaker (passion/problem/profit/pathway),
  Avatar Snapshot (demographics/psychographics/influences/hangouts), and Avatar Goals
  (top goals, aspirations, obstacles, fears). This is a fully conversational skill —
  ask one section at a time and wait for responses. Saves output to
  /tmp/launchmap-session/01-avatar.md. Use this as the foundation before all other
  LaunchMap steps.
---

# LaunchMap — Step 1: Perfect Avatar

You are building the client's Perfect Avatar — the single most important asset in their entire marketing system. Every ad, every offer, every piece of content will be written *to this person*. Get it wrong and everything downstream suffers. Get it right and the rest builds itself.

## Setup

```bash
mkdir -p /tmp/launchmap-session
```

## How to Run This Skill

This is fully conversational. Work through three exercises **one at a time**. Ask questions, wait for answers, reflect back what you're hearing, then move to the next. Do NOT dump all questions at once.

---

## Exercise 1: Target Market Matchmaker

The goal: identify who the client is uniquely positioned to serve.

Open with:
> "Before we define your avatar, let's find the right market. The best market sits at the intersection of four things. Let's work through each one."

Ask and wait for each:

**1. Passion** — "What topics, industries, or problems could you talk about all day without getting bored? What have you studied, lived, or obsessed over?"

**2. Problem** — "What specific problem do you solve? Be precise — not 'I help people with health' but 'I help busy moms lose the 20 lbs they gained after their second child.' What's the real problem you fix?"

**3. Profit** — "Is there money in this market? Who in this space is already making money? Name competitors, influencers, or companies you've seen succeed." (If they can't name any, probe — this is a yellow flag worth noting.)

**4. Pathway** — "How do you deliver the solution? Coaching, courses, done-for-you, consulting, events?" Also ask: "Is there a before/after that's clearly demonstrable? Can people *see* the transformation?"

Synthesize what you've heard. Offer a draft market statement:
> "Based on what you've shared, your market is: [draft]. Does that resonate, or should we sharpen it?"

---

## Exercise 2: Avatar Snapshot

Now get specific. Give the avatar a name, a face, a life.

> "Let's build a complete picture of this one person. I'm going to ask you some questions — answer them as if you're describing a real human you know."

Ask in conversational batches (not all at once):

**Demographics:**
- Name, age range, gender?
- Where do they live / what's their lifestyle?
- Income level, job or business stage?
- Family situation?

**Psychographics:**
- What do they believe about their situation that keeps them stuck?
- What have they already tried that hasn't worked?
- What do they tell themselves when they give up?
- How do they describe their problem to a friend (in their own words)?

**Influences:**
- Who do they follow online? (Name specific people)
- What books, podcasts, or content do they consume?
- What events do they attend?

**Hangouts:**
- Where do they spend time online? (Facebook groups, Reddit, YouTube channels?)
- What communities do they belong to?
- What do they search for when they're struggling?

Reflect back a clear avatar portrait as you go. Name the avatar (use the name the client gives or suggest one if they don't).

---

## Exercise 3: Avatar Goals

> "Last section. This is where we get into what your avatar actually *wants* — and what's standing in their way."

**Top 3 Goals:** "What are the three things your avatar most wants to achieve? Rank them 1–3."

**'So They Can' Aspirations:** For each goal, ask: "Why do they want that? What does achieving [goal 1] make possible for them?" Push for the emotional outcome beneath the surface goal.

**3 Obstacles:** "What are the three biggest things stopping them from achieving [goal 1]? Think about internal blockers (mindset, fear, habits) and external ones (time, money, knowledge)."

**Worst-Case Fear:** "What's the nightmare scenario your avatar is trying to avoid? If they do nothing and a year passes — what does their life look like?"

---

## Output

Compile everything into a structured avatar document and save to `/tmp/launchmap-session/01-avatar.md`:

```markdown
# Perfect Avatar — [Avatar Name]

## Market Statement
[One sentence describing the market]

## Demographics
- Name: 
- Age: 
- Gender: 
- Location/Lifestyle: 
- Income/Stage: 
- Family: 

## Psychographics
- Core belief keeping them stuck: 
- What they've tried: 
- How they describe their problem: 
- Self-talk when they quit: 

## Influences & Hangouts
- Follows: 
- Reads/Listens: 
- Hangs out at: 
- Searches for: 

## Goals
1. [Goal 1] — so they can [aspiration]
2. [Goal 2] — so they can [aspiration]
3. [Goal 3] — so they can [aspiration]

## Obstacles
1. [Obstacle 1]
2. [Obstacle 2]
3. [Obstacle 3]

## Worst-Case Fear
[What life looks like if nothing changes]
```

Once saved, tell the user: "Avatar locked in. This is the foundation everything else will be built on."
