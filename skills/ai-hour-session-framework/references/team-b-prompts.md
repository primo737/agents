# Team B — Phase 2 Synthesis Prompts

Launch both agents in a single message. Each receives the relevant Team A reports inline (paste the full report text in the prompt — do not pass file paths).

---

## B1 — Framework Synthesizer

Subagent type: `general-purpose`. Tools: Read, Write, Edit.

Inputs (paste verbatim into the prompt):
- Team A1 report (Parts 1–2 teaching framework)
- Team A2 report (Parts 3–4 teaching framework)
- Team A3 report (existing curriculum map)

Task: Produce Part A sections 1–9 and 11 of the deliverable.

Constraints:
- Reconcile the two transcript-half frameworks into a single chronological playbook (no duplication, no contradiction).
- Map The actual moves onto the HECSC rhythm (Hook → Experience → Content → State Change → Send Back → Celebrate) from Session Programs. The HECSC labels go in headers; The actual moves are the content under each header.
- Section 11 (Voice & Cut-List Guardrails) is non-negotiable — copy verbatim from the QA checklist.
- No em dashes anywhere. Use commas, periods, colons, or rewrite.
- English only outside cited attendee quotes.
- Verified credentials only ($10M+ revenue, 1,000+ trained). Never use older $100M+/1,500+ numbers.

Output: Markdown ready to drop into the file under `## Part A — The Framework`. Sections 1–9 and 11 only — Section 10 is B2's job.

Save to a temp file at `/tmp/ai-hour-framework-part-a-1-9-11.md` and return the path.

---

## B2 — Iteration Designer

Subagent type: `general-purpose`. Tools: Read, Write.

Inputs (paste verbatim into the prompt):
- Team A4 report (design thinking analysis)
- B1's draft of sections 1–9 (framework synthesizer output, once available — Team B runs in parallel but B2 should reference A4 primarily)

Task: Produce Section 10 — Iteration List for This Cohort.

Format:

```markdown
## 10. Iteration List for This Cohort

For each iteration: name, the room signal that triggered it, the design hypothesis, the change, and the metric that confirms or refutes.

### 10.1 [Name]
**Room signal:** [verbatim quote or specific moment from past cohort]
**Hypothesis:** If [change] → then [predicted effect on attendee experience]
**Change:** [specific operational adjustment for next session]
**Metric:** [how we'll know — a number, percentage, or observable attendee behavior]

(repeat 5–7 times)
```

Constraints:
- 5 to 7 iterations. Quality over quantity.
- Every iteration must trace back to a specific signal in A4. No generic best-practices.
- Metrics must be observable in the room or in the 7-day post-event window — no vanity metrics.
- No em dashes. English only.

Save to `/tmp/ai-hour-framework-part-a-10.md` and return the path.

---

## After Team B finishes

Read both temp files. Concatenate in order: 1–9, then 10, then 11. Drop the merged Part A into the deliverable file. Then proceed to Team C (Halibut wrap).
