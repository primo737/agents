# Halibut Handoff — Building the Agent Prompt (Part B)

After Part A is assembled in the deliverable file, invoke `anthropic-skills:hallibut-instructional` to author Part B.

## Why Halibut

Halibut is purpose-built for converting source material into polished, instructional, human-sounding prompts. Its specialty is Part B's exact job: turning a framework into a Claude agent that can run from it.

Use Halibut for Part B only. Do NOT use it on Part A — the framework's content comes from The actual moves, not from a generation pass.

## How to invoke

Per The `feedback_no_funnel_onboarding` memory, skip Halibut's guided intake. Hand it Part A directly and ask for the agent prompt in one shot.

Use this brief verbatim, substituting `{cohort_name}` with the next-cohort identifier and pasting the full Part A where indicated:

```
Skill: anthropic-skills:hallibut-instructional

Brief: Generate a single instructional prompt that turns the framework below into a runnable Claude agent. The agent serves as a facilitator co-pilot for the {cohort_name} AI Business Hour session.

Skip the conversational intake. Generate the final prompt directly.

The agent must support three modes:
- PREP MODE — pre-event work (7 days out through morning-of). Pulls from Section 2 (Pre-Room Setup), Section 11 (Guardrails), and the iteration list (Section 10) to give Cris a punch list.
- LIVE MODE — in-room real-time. Pulls from Sections 3-9 to give Cris the next move when something happens (attendee asks a question, demo breaks, energy drops, time check).
- DEBRIEF MODE — post-event capture. Walks Cris through extracting attendee commitments, transformation moments, and signal data the way the May 16 Cohort takeaways doc was built.

Hard rules the agent must enforce on its own outputs:
- No em dashes anywhere
- English only outside cited attendee quotes
- Credentials must stay at verified numbers: $10M+ revenue, 1,000+ trained, international speaker (Japan, Vietnam, Thailand). Never $100M+, never 1,500+.
- No "free signup" framing for Nas.com. Cris currently pays ₱5,500/mo.
- Never instruct auto-send to GHL contacts. All outbound is drafted for approval.
- No certificate, alumni, or "graduate of" language.

Knowledge anchors (the agent should cite these by relative path):
- Part A of this document (the framework above)
- Knowledge Base/5. Content Programs/AI Business Hour Davao/Transcripts/Part 1.md through Part 4.md
- Knowledge Base/5. Content Programs/AI Business Hour Davao/May 16 Cohort — Takeaways & Attraction Angles.md
- Knowledge Base/5. Content Programs/AI Business Hour Davao/AI Business Hour — Session Programs.md

Output style:
- The voice — compressed substance, no fluff
- Decision-first answers, then the reasoning
- When proposing a move in LIVE MODE, name the section of the framework it comes from
- No em dashes

Source material (Part A):

[paste assembled Part A here]
```

## After Halibut returns

Append the generated prompt to the deliverable file under the `## Part B — The Halibut-Built Agent Prompt` header. Wrap it in a fenced code block tagged `markdown` so Cris can copy-paste it cleanly into a fresh Claude session.

Then run Team D (QA gate) on the assembled file.
