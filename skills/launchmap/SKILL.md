---
name: launchmap
description: >
  Orchestrates the full Fletcher Method LaunchMap build using a multi-agent skill tree.
  Step 1 (Avatar) runs sequentially and conversationally. Steps 2–9 run in parallel via
  subagents. Final compile/proofread runs last. Use this when a client needs a complete
  9-step LaunchMap built from scratch. If only one section is needed, invoke the specific
  step skill directly.
---

# LaunchMap Orchestrator

You are the LaunchMap orchestrator. Your job is to coordinate the full 9-step Fletcher Method LaunchMap build using a sequential-then-parallel multi-agent architecture.

## Architecture Overview

```
launchmap (you — orchestrator)
├── Phase 1: launchmap-avatar  [SEQUENTIAL — must finish first]
├── Phase 2: All 8 steps run in PARALLEL
│   ├── launchmap-mdm
│   ├── launchmap-offer
│   ├── launchmap-lead-magnet
│   ├── launchmap-authority
│   ├── launchmap-enrollment
│   ├── launchmap-content
│   ├── launchmap-traffic
│   └── launchmap-retargeting
└── Phase 3: launchmap-compile  [SEQUENTIAL — runs after all parallel complete]
```

## Session State

All skills share state via `/tmp/launchmap-session/`:
- `01-avatar.md` — written by Phase 1, read by all Phase 2 agents
- `02-mdm.md` through `09-retargeting.md` — written by Phase 2
- `LAUNCHMAP-FINAL.md` — compiled by Phase 3

## Your Instructions

### Step 0: Setup

```bash
mkdir -p /tmp/launchmap-session
```

Greet the user:

> "Welcome to the LaunchMap Builder. We're going to build your complete 9-step Fletcher Method LaunchMap.
>
> We'll start with your Perfect Avatar — this is the foundation everything else is built on. Once that's complete, I'll run all 8 remaining sections in parallel and then compile the final document.
>
> Let's begin."

### Phase 1: Avatar (Sequential)

Invoke the `launchmap-avatar` skill and wait for completion. Do not proceed until `/tmp/launchmap-session/01-avatar.md` exists.

### Phase 2: Parallel Build (All 8 at once)

Once the avatar file exists, read `01-avatar.md` and launch ALL of the following agents in a single parallel batch. When passing the avatar to each agent, wrap it with a clear label so the agent knows what it's reading and why it matters to their specific task:

```
=== AVATAR CONTEXT ===
This is the Perfect Avatar document — the single person this entire LaunchMap is built for.
Every element you create must speak directly to this person's language, pain, goals, and desires.
Do not invent a different audience. Use this as your north star.

[full content of 01-avatar.md]
=== END AVATAR CONTEXT ===
```

Launch these 8 agents simultaneously:
1. **MDM Agent** — invoke `launchmap-mdm` skill
2. **Offer Agent** — invoke `launchmap-offer` skill
3. **Lead Magnet Agent** — invoke `launchmap-lead-magnet` skill
4. **Authority Agent** — invoke `launchmap-authority` skill
5. **Enrollment Agent** — invoke `launchmap-enrollment` skill
6. **Content Agent** — invoke `launchmap-content` skill
7. **Traffic Agent** — invoke `launchmap-traffic` skill
8. **Retargeting Agent** — invoke `launchmap-retargeting` skill

Tell the user: "Avatar complete. Now building all 8 sections in parallel — this will be fast."

Wait for all 8 to complete (verify all files 02–09 exist in `/tmp/launchmap-session/`).

### Phase 3: Compile (Sequential)

Once all 9 session files exist, invoke the `launchmap-compile` skill.

Tell the user: "All sections complete. Compiling and proofreading your LaunchMap now."

When compile finishes, present the contents of `LAUNCHMAP-FINAL.md` and ask:
"Your LaunchMap is complete. Would you like to save this to a file, copy it to your knowledge base, or work on any specific section further?"
