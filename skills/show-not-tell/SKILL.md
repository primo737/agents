---
name: show-not-tell
description: "Rewrites copy by replacing labels, summaries, and conclusions with scenes, moments, and sensory details. Use this skill whenever the user says 'show not tell', 'show don't tell', 'make this more vivid', 'stop telling', 'scenes not statements', 'too abstract', 'make it real', 'bring it to life', 'I want them to feel it', or asks to rewrite copy so readers experience rather than are informed. Also trigger when reviewing any piece of copy and noticing it labels an offer, names a category, or concludes on behalf of the reader instead of letting the moment land. This skill applies to emails, social captions, sales pages, hooks, intros, bios, and any narrative copy."
---

# Show Don't Tell — Copy Rewrite Skill

## What This Skill Does

It takes copy that tells readers what to think or feel, and rewrites it so readers arrive at those thoughts and feelings through concrete scenes, specific moments, and sensory details.

**The core distinction:**

- **Telling** = labeling the conclusion ("I worked hard", "It was a turning point", "She is passionate")
- **Showing** = placing the reader inside the moment so the conclusion becomes inevitable ("I slept in the office three nights that week", "She still had paint under her fingernails at the pitch meeting")

---

## The Four Rules (from standing memory)

### Rule 1: Principle Retention

Once the show-don't-tell constraint is active, it governs every section of new output — not just the flagged line. Before generating any new paragraph, ask: does this label a conclusion instead of earning it? If yes, rewrite before delivering.

### Rule 2: Skim Hooks = Compressed Substance, Not Category Labels

A skim hook is the emotional weight of the piece front-loaded into 2–3 lines. It must carry the same pull as the full piece for a reader who reads nothing else.

What it is NOT:
- A summary of what the piece is about
- The name of the offer, program, or product
- A description of the format or category

What it IS:
- The sharpest moment from the piece
- The line that makes a skimmer stop because they feel something, not because they understand something

**Wrong:** "If you're skimming: I'm running an online AI cohort. Reply 'I'm in' to get on the early list."
**Right:** "If you're skimming: someone said one sentence in Saturday's session that I've been trying to say for two years. That's the room I'm building again — this time online."

### Rule 3: Correction Recovery — Produce, Don't Explain

When a user says "that's still telling" or "you did it again" or "lazy" — do not describe what you should have done differently. Generate a materially different version that applies the principle. Then ask: "How does this land?"

Never apologize for the previous version. Just produce the fixed one.

### Rule 4: Personalization Is Contextual, Not a Merge Tag

"Personalize this" means segment-aware rewriting:
- Attendee vs. non-attendee → different opening reference
- Warm contact vs. cold list → different assumed familiarity
- Known relationship vs. stranger → different tone and detail level

A name field (`{{first_name}}`) is the floor, not the deliverable. If segment is unspecified, ask before personalizing.

---

## How to Apply This Skill

### Step 1: Diagnose the copy

Read the piece and mark every instance of:
- A label ("I was driven", "It was a hard year", "This program is transformative")
- A conclusion delivered on behalf of the reader ("That changed everything", "It made me who I am")
- A category name substituting for substance ("This is a business book", "She's an entrepreneur")
- An emotion named rather than earned ("I was devastated", "He felt hopeful")

### Step 2: Find the moment behind each label

For every flagged instance, ask: what specific moment would make a reader arrive at this conclusion themselves?

- "I was driven" → what did you do at 2am on a Tuesday?
- "It was a hard year" → what was the specific thing that broke first?
- "She's passionate about marketing" → what did she do when the campaign failed?

If the moment isn't in the copy, ask the user: "What actually happened here? Give me the detail and I'll turn it into a scene."

### Step 3: Rewrite with scenes

Replace each label with:
- A specific action or image
- A sensory detail (sound, weight, temperature, smell — whatever is true)
- A concrete number or object when possible
- The reader placed inside the moment, not told about it from outside

### Step 4: Apply to the whole piece, not just the flagged line

Once you rewrite one section, run the same check on every other section before delivering. Do not fix the top of the piece and leave telling language in the middle.

---

## Common Patterns and Fixes

| Telling | Showing |
|---|---|
| "I worked really hard" | "I answered emails from a hospital waiting room" |
| "It was a turning point" | "I threw the business plan away that night and started over on a napkin" |
| "She is passionate about her clients" | "She called a client at 10pm to warn them before the invoice landed" |
| "The program is transformative" | "Three months in, she fired a client she had been scared to lose for two years" |
| "I struggled financially" | "The power was disconnected during my father's surgery. We could not pay the bill." |
| "This will change how you make decisions" | "You will recognize the next bad hire before the contract is signed" |

---

## Before You Deliver: The Invention Check

Before outputting the rewrite, scan it for any specific detail that was not in the original input — dollar amounts, dates, time periods, names, places, actions, dialogue. If you added any of them to make the copy feel more vivid, remove them. Replace with a scene structure that holds the shape but uses only what the user gave you, or add a bracketed flag: `[SCENE NEEDED: what actually happened here?]`

The copy must earn its concreteness from truth, not illustration. A fabricated detail that lands well is worse than a placeholder that asks for the real one — because the user will post it.

## Output Format

Deliver the rewritten copy clean — no annotations, no explanation of what changed.

If the user wants to understand the changes, you can follow with a brief breakdown. But lead with the work.

End with: "How does this land?" — one line, no options list.

---

## Edge Cases

**"I don't have a specific story/moment for this section"**
Ask: "What's the real situation behind this line? Give me one concrete detail — I'll build from there." Do not invent details. Write toward the truth the user gives you.

**"This is for a client, not for me"**
Do not fill personal-narrative gaps with The biography or invented client details. Ask: "What's the real moment here?" or flag: "This section needs a scene — what actually happened?"

**"Just clean it up, don't change the substance"**
Show-don't-tell is substance, not style. A label rewritten as a scene is a stronger version of the same claim. Frame the rewrite as making the original point land harder, not changing it.
