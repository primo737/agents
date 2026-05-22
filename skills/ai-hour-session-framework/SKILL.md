---
name: ai-hour-session-framework
description: Build a runnable session framework + Halibut-generated agent prompt for the next AI Hour cohort, using transcripts and case studies from the Obsidian vault. Use this skill whenever Cris asks to "turn AI Hour into a framework", "build the next AI Hour playbook", "make a facilitator co-pilot", "extract the teaching architecture from the transcripts", "design the next AI Business Hour session", or any variant where the input is past-cohort transcripts/case studies and the output is a session framework, facilitator playbook, or AI agent that helps run the next session. Trigger even if Cris doesn't say "framework" or "skill" by name — if the request involves AI Hour transcripts and forward planning for a next session, this is the right tool.
---

# AI Hour Session Framework Builder

This skill turns the raw record of a past AI Business Hour cohort (4-part transcripts + the May-style takeaways doc) into two artifacts in a single Obsidian markdown file:

1. **Part A — A facilitator playbook** for the next cohort, structured around what actually worked in the room.
2. **Part B — A Halibut-generated agent prompt** that turns Part A into a Claude agent with prep / live / debrief modes.

The skill exists because The case-study and takeaways docs already mine the room for *messaging*, but no document captures the *teaching architecture* he runs live. Without that, every next session re-improvises from scratch. This skill closes that gap and outputs an artifact a co-pilot agent can run from.

## When to use

Trigger this skill when:
- A past cohort has 4-part transcripts in `5. Content Programs/AI Business Hour Davao/Transcripts/`
- Cris is preparing the *next* cohort and wants a runnable facilitator structure, not just messaging
- The user asks for "framework", "playbook", "facilitator agent", "next session structure", or refers to AI Hour and a future date
- The request involves both extracting patterns from transcripts AND producing a Claude agent prompt

Do NOT use this skill for:
- Pure messaging/copy work on a cohort that's already happened (use the existing takeaways doc directly)
- One-off questions about a single transcript ("what did Jen say about Claude?") — just read the file
- Building marketing assets — the May 16 Cohort takeaways doc is already optimized for that

## Inputs

The skill needs to know:
1. **Cohort identifier** — date or city of the past cohort whose transcripts feed the framework (e.g., "Davao", "May 16", "Cebu Q3"). Default to whichever cohort has transcripts in the AI Business Hour folder.
2. **Next-session target** — what cohort the framework is *for* (date and/or city). This shapes Section 10 (iteration list) — different rooms need different bets.
3. **Tier focus (optional)** — which Skill Tree tier the next session targets (Awareness / Application / Automation / Mastery). If unspecified, infer from the curriculum gap analysis.

If Cris hasn't named these, ask in one shot — don't ping-pong. Per his standing memory, skip the funnel-onboarding questionnaire pattern: ask only what's actually missing.

## Workflow — Agent Teams in Sequence

The skill runs four teams. Inside teams B is parallel; everything else is sequential.

### Team A — Phase 1 Exploration (4 Explore agents in parallel)

Launch all four in a single message with multiple Agent tool calls. Each gets a tight, self-contained prompt. Reports return as raw material for Team B.

- **A1: Teaching framework — Transcripts Parts 1–2.** Extract opening sequence, reframe moments, hot-seat pattern, audience activation moves, recurring beats, transitions. Quote verbatim. Under 600 words.
- **A2: Teaching framework — Transcripts Parts 3–4.** Extract mid-session arcs, live builds, tool-stack reveal pattern, closing ritual, failure-as-teaching, Q&A patterns. Quote verbatim. Under 600 words.
- **A3: Existing-curriculum map.** Read `AI Business Hour — Session Programs.md`, `AI Business Hour Skill Tree.md`, `AI Business Hour Davao — Course Description.md`. Report: planned sessions, tier progression, public promise, gaps, what's missing for a session-level framework. Under 500 words.
- **A4: Design thinking analysis.** All four transcripts. Run Empathize / Define / Ideate / Prototype / Test with verbatim attendee quotes. Output 5–7 hypothesis-tagged design changes for the next session, each with a measurable signal. Under 700 words.

The full agent prompts to use are in `references/team-a-prompts.md`. Read that file before launching Team A.

### Team B — Phase 2 Synthesis (2 agents in parallel)

Launch both in a single message. Each gets the relevant Team A reports as input.

- **B1: Framework Synthesizer** — input is A1 + A2 + A3. Produces Part A sections 1–9 and 11. Reconciles the two transcript-half frameworks into a single chronological playbook, mapped onto the HECSC rhythm (Hook → Experience → Content → State Change → Send Back → Celebrate) from Session Programs. Output is markdown ready to drop into the file.
- **B2: Iteration Designer** — input is A4 + B1's draft of sections 1–9. Produces Part A section 10: 5–7 hypothesis-tagged iteration ideas for the *next* cohort specifically. Each item names the room signal that triggered it AND the metric that confirms or refutes the hypothesis.

The full agent prompts are in `references/team-b-prompts.md`.

### Team C — Phase 3 Halibut Wrap (sequential)

After Team B's outputs are merged into Part A, invoke `anthropic-skills:hallibut-instructional` with Part A as the source. The Halibut skill is designed to produce polished instructional prompts; we use it to author Part B (the agent prompt).

Per The `feedback_no_funnel_onboarding` memory, do NOT walk through Halibut's guided intake. Hand it the assembled Part A directly with a brief that names:
- The agent's role (facilitator co-pilot for the next AI Hour cohort)
- Three modes: prep, live, debrief
- Hard rules (voice guardrails, English only, verified credentials, no auto-send)
- Knowledge anchors (Part A + transcript paths + takeaways doc path)
- Output style (The voice — compressed substance, no fluff, no em dashes)

The handoff brief template is in `references/halibut-handoff.md`.

### Team D — Phase 4 QA Gate (sequential)

Run a single QA agent against the assembled file. Required gates, with the memory that backs each one:

| Gate | Source memory | Failure mode |
|---|---|---|
| No em dashes (`—`) in body copy | `feedback_no_em_dashes` | Reads as AI-generated |
| English only outside cited quotes | `feedback_english_only` | Tagalog/Taglish breaks The outbound voice |
| Credentials = $10M+ revenue / 1,000+ trained | `project_cris_credential_numbers` | Older $100M+/1,500+ numbers are not defensible |
| No "free signup" framing for Nas.com; current Cris cost ₱5,500/mo | `project_nas_io_plan` | Nas has no free plan as of 2026-04-20 |
| Agent prompt does NOT instruct auto-send to GHL contacts | `feedback_no_auto_send` | Every outbound must be drafted for approval |
| No certificate / "alumni" / "graduate of" language | May 16 takeaways §6 | Positioning is operators, not collectors |
| Halibut prompt is runnable as an agent (role + modes + rules + anchors + style) | structural | Otherwise Part B is just notes |

If a gate fails, the QA agent edits the file in place and re-runs that gate only. The full QA checklist is in `references/qa-checklist.md`.

## Output

A single Obsidian markdown file:

```
5. Content Programs/AI Business Hour Davao/<Next Cohort> — Framework & Agent.md
```

Replace `<Next Cohort>` with the cohort identifier from inputs (e.g., "May 16", "Cebu Q3"). Update `_Index.md` in the same folder to link the new file.

The file's structure is fixed:

```
# <Cohort> — Framework & Agent

## Part A — The Framework

1. Session Promise
2. Pre-Room Setup
3. Opening Sequence (Minutes 0–15)
4. Audience Activation Beats
5. The Five Recurring Reframes
6. Hot-Seat / Live-Build Loop
7. Tool-Stack Reveal Pattern
8. Failure-as-Teaching Protocol
9. Closing Ritual
10. Iteration List for This Cohort
11. Voice & Cut-List Guardrails

## Part B — The Halibut-Built Agent Prompt

(generated by anthropic-skills:hallibut-instructional)
```

## Why this shape

A few choices that aren't obvious:

**Four exploration agents, not one.** The transcripts are long and the four lenses (early-session teaching, late-session teaching, existing curriculum, design thinking) are independent. Parallelizing them is faster AND keeps each lens clean — a single agent trying to do all four would compress the design thinking into a teaching-frame and lose the empathy data.

**Halibut at the END, not throughout.** Halibut's strength is generating polished instructional prompts. We don't want it shaping the *content* of the framework — that's what The actual moves are for. We want it wrapping the framework into a runnable agent prompt as the last step. Using Halibut as the final author keeps Part B's voice tight and avoids the synthesis agents producing prompt-shaped output that nobody can run.

**HECSC as the spine.** Session Programs already use Hook → Experience → Content → State Change → Send Back → Celebrate. Mapping The actual May 16 moves onto HECSC (rather than inventing a parallel structure) means the framework slots into existing planning docs instead of competing with them.

**Voice gates as a separate phase.** The voice rules are non-negotiable and most of them are violations of habit (em dashes especially). A dedicated QA pass catches what synthesis agents miss when they're focused on substance.

## Reference files

- `references/team-a-prompts.md` — full prompts for the four exploration agents
- `references/team-b-prompts.md` — full prompts for the two synthesis agents
- `references/halibut-handoff.md` — brief template for invoking Halibut
- `references/qa-checklist.md` — full QA gate list with verification commands

Read these as needed, in order, when running each phase.
