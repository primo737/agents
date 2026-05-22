---
name: launchmap-mdm
description: >
  Step 2 of the Fletcher Method LaunchMap. Builds the Million Dollar Message (MDM) —
  the single sentence that defines who the client helps, what result they deliver,
  in what timeframe, and what pain it eliminates. Covers: Currency Calculator (what
  the avatar is willing to pay for), New Client Filter (urgency/authority/money
  qualification), and MDM Formula assembly. Reads avatar context from
  /tmp/launchmap-session/01-avatar.md if available. Saves to
  /tmp/launchmap-session/02-mdm.md.
---

# LaunchMap — Step 2: Million Dollar Message (MDM)

## Setup

Check for avatar context:
```bash
cat /tmp/launchmap-session/01-avatar.md 2>/dev/null
```

If the avatar file exists, use it as context and ask ≤2 targeted questions. If it doesn't exist, run the full conversational flow below.

---

## The MDM Formula

```
MDM = Single Avatar × (Currency + Metric + Timeline) − Pain
```

**Single Avatar** — exactly one person (not "entrepreneurs" — "first-generation immigrant entrepreneurs who...")

**Currency** — what they'll exchange money *for*. NOT what you sell. What they *want to buy*.

**Metric** — a specific, measurable result. Not "more clients" — "3 new clients per month."

**Timeline** — by when. "in 90 days," "in 6 weeks," "by Friday."

**Pain** — the thing they want to avoid or escape. Stated in their language, not yours.

**MDM Template:**
> "I help [Single Avatar] [achieve Metric + Currency] in [Timeline] — without [Pain]."

---

## Exercise 1: Currency Calculator

> "What does your avatar desperately want to *buy*? Not what you sell — what are they reaching for?"

Common currencies:
- **Time** — more of it, or their time back
- **Money** — more revenue, savings, profit
- **Relationships** — love, connection, belonging
- **Health** — energy, weight, performance
- **Status** — recognition, authority, prestige
- **Freedom** — location, schedule, decision-making
- **Security** — certainty, safety, stability
- **Impact** — meaning, contribution, legacy

Ask: "If your avatar had a magic wand and could have one thing tomorrow morning, what would it be? Don't think about what you offer — think about what they're lying awake wanting."

Identify their **primary currency** and 1–2 secondary currencies.

---

## Exercise 2: New Client Filter

The MDM must attract qualified prospects — people who have the urgency, authority, and budget to take action.

Ask:

**Urgency:** "What's making this a *now* problem for your avatar? Why can't they wait another year?" (If they can wait, urgency is low — flag this.)

**Authority:** "Can your avatar make a buying decision on their own, or do they need approval from someone else?" (B2B often has this issue — probe who the real decision-maker is.)

**Money:** "Does your avatar have the means to pay for a solution? Have they already spent money trying to solve this?" (Past spending = strong indicator of future spending.)

Refine the avatar description in the MDM to reflect whoever scores highest on all three filters.

---

## Exercise 3: Assemble the MDM

Work through the formula together:

1. "Who exactly is your avatar? Give me the most specific version — not a category, a person."
2. "What specific result do they get? Give me a number, a metric."
3. "What timeframe is realistic but compelling?"
4. "What's the pain they'll escape by working with you? Use their words."

Draft the MDM. Show 2–3 versions. Ask: "Which of these feels most true to you? Which one would make your avatar say 'that's me'?"

Lock in the final version.

**Test the MDM:**
> Read it out loud. Would your avatar stop scrolling if they saw this? If not, what word needs to change?

---

## Output

Save to `/tmp/launchmap-session/02-mdm.md`:

```markdown
# Million Dollar Message

## MDM (Final)
> "[Full MDM sentence]"

## Breakdown
- **Avatar:** [specific person]
- **Currency:** [primary] + [secondary]
- **Metric:** [specific measurable result]
- **Timeline:** [timeframe]
- **Pain eliminated:** [what they avoid]

## New Client Filter
- Urgency: [what makes this urgent now]
- Authority: [who makes the buying decision]
- Money: [evidence they invest in solutions]

## Alternative Versions Considered
1. [Alt version 1]
2. [Alt version 2]
```
