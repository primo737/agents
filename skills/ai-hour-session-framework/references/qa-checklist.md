# Team D — QA Gate Checklist

Run a single agent (subagent type `general-purpose`) against the assembled file. The agent has Read and Edit tools. Each gate below is a pass/fail check with a verification command. If any gate fails, the agent edits the file in place and re-runs only the failing gate.

Deliverable file path: `5. Content Programs/AI Business Hour Davao/<Cohort> — Framework & Agent.md`

---

## Gate 1 — No em dashes in body copy

**Memory:** `feedback_no_em_dashes`. Em dashes read as AI-generated.

**Verify:** Search the file for the character `—` (U+2014).

```bash
grep -n "—" "<file>"
```

Acceptable matches: only inside fenced code blocks where they appear in agent-prompt examples and only if quoted from prior source material. Any em dash in body copy fails the gate.

**Fix:** Replace with comma, period, colon, or rewrite the sentence.

---

## Gate 2 — English only outside cited quotes

**Memory:** `feedback_english_only`. Tagalog/Taglish breaks The outbound voice.

**Verify:** Skim for Tagalog markers: `kasi`, `ano`, `talaga`, `lang`, `ako`, `kayo`, `mga`. Any occurrence outside a quoted attendee statement (block-quoted with `>` or in inline quotes) fails.

**Fix:** Translate to English or move the sentence inside a quote block if it's actually a verbatim quote that wasn't marked.

---

## Gate 3 — Verified credentials only

**Memory:** `project_cris_credential_numbers`. Defensible: $10M+ revenue, 1,000+ trained, international speaker (Japan, Vietnam, Thailand).

**Verify:** Search the file for older numbers.

```bash
grep -nE "\\\$100M|100 million|1,500|1500\\+ trained" "<file>"
```

Any match fails.

**Fix:** Replace with the verified numbers.

---

## Gate 4 — Nas.com pricing

**Memory:** `project_nas_io_plan`. As of 2026-04-20, Nas.com has no free plan. The user pays ₱5,500/mo.

**Verify:** Search for problematic framing.

```bash
grep -nE "free signup|free plan|sign up free|nas\\.io" "<file>"
```

Any "free signup" framing for Nas, or any reference to "Nas.io" (it's Nas.com), fails.

**Fix:** Reframe accurately or remove.

---

## Gate 5 — No auto-send instructions in Part B

**Memory:** `feedback_no_auto_send`. All outbound to real contacts must be drafted for approval before sending.

**Verify:** Inside the Part B agent prompt, search for instructions that would have the agent send messages without approval.

```bash
grep -nE "auto[- ]send|send (the|a|an) (sms|email|message) (to|directly)|send without (review|approval)" "<file>"
```

Any match fails.

**Fix:** Add an explicit rule in the agent prompt: "All outbound to real contacts is drafted for The approval before send. Never instruct auto-send."

---

## Gate 6 — No certificate / alumni / graduate language

**Memory:** May 16 takeaways §6. Positioning is operators, not collectors.

**Verify:** 

```bash
grep -nE "certificate|certified|alumni|graduate of|completion badge" "<file>"
```

Any match in body copy fails. (Inside agent prompt examples only if explicitly forbidding the language.)

**Fix:** Remove or reframe.

---

## Gate 7 — Halibut prompt is structurally runnable

**Verify by reading Part B:** The agent prompt must contain all five components. Mark each one Yes/No:

- [ ] **Role declaration** — "You are a facilitator co-pilot for the {cohort} AI Business Hour" (or equivalent)
- [ ] **Three modes named** — PREP, LIVE, DEBRIEF, each with what it does
- [ ] **Hard rules block** — the six voice/operational rules from `halibut-handoff.md`
- [ ] **Knowledge anchors** — explicit pointers to Part A, the four transcripts, the May 16 takeaways doc, Session Programs
- [ ] **Output style** — The voice, no em dashes, compressed substance, decision-first

Any missing component fails.

**Fix:** Re-invoke Halibut with the missing component called out explicitly in the brief.

---

## After all gates pass

1. Update `5. Content Programs/AI Business Hour Davao/_Index.md` to link the new file.
2. Print a summary: file path, gate scorecard (7/7), any edits made during QA.
3. Run the verification smoke test from the plan:
   - Copy Part B into a fresh Claude conversation.
   - Ask: "Run prep mode. What do I need to do 7 days before the next AI Hour?"
   - Confirm response is in The voice, zero em dashes, references specific framework sections.
