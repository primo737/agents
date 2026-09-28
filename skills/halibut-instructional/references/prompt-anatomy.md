# Prompt Anatomy: Reference

Read when choosing a prompt approach, diagnosing an underperforming prompt, or teaching prompting.
These are adaptable design patterns, not guarantees about model behavior.

## The eight blocks

| Block | Job |
|---|---|
| ROLE | Default for AI receivers: relevant responsibility or perspective, not invented expertise |
| CONTEXT | Source-backed background, audience, purpose, and relevant prior decisions |
| MODES | Distinct jobs and selection rules, only when multiple jobs are needed |
| TASK | Requested action and scope |
| OUTPUT FORMAT | Checkable structure, length, and completion criteria |
| KNOWLEDGE ANCHORS | Accessible sources, excerpts, attachments, or verified paths |
| HARD RULES | Applicable factual, operational, and user constraints |
| STYLE | Requested voice, tone, and audience effect |

Keep ROLE as the default for AI receivers; omit it for a human brief when unnecessary.
The task and expected output remain required information, not mandatory literal headings.
Use natural instructions for human receivers or a requested compact format. Omit other
blocks when they add no useful guidance.
Audience means who consumes the result; receiver means who executes the prompt. Record each
separately. An agent writing for beginners is not itself a beginner audience.

## Prompt approaches

**Instructional:** Direct action with constraints, useful when the output is known.

**Contextual:** Ground the task in relevant sources. Keep the task and success criteria explicit
rather than assuming a large CONTEXT block supplies them.

**Few-shot:** Show desired behavior, format, or voice. Two or three relevant examples are a
starting heuristic, not a minimum or ceiling. One can be useful. Add diverse examples only when
they cover a meaningful distinction; test whether they improve results. Mark examples clearly
and distinguish illustrative facts from authorized facts for the new task.

**Reasoning support:** For complex analysis, specify the decision, evidence, constraints, and
checkable explanation required. Adapt reasoning instructions to the receiver's model and
configuration. Do not require disclosure of private chain-of-thought. Worked calculations,
concise rationale, cited evidence, and explicit procedural steps remain useful deliverables.

**Role / persona:** Use a relevant responsibility or perspective to steer behavior. A role alone
does not provide knowledge, credentials, source access, or an output contract.

**Mode-switching:** Use clearly distinguished jobs and entry rules when the workflow requires
multiple modes. A small number is easier to maintain; there is no universal four-mode limit.

## Diagnosis

Inspect the actual failure and the supplied context before deciding which block caused it.

| Symptom | Check first |
|---|---|
| Generic writing | Audience, purpose, specific source material, and voice examples |
| Invented facts | Evidence access, unknowns, and unsupported assumptions |
| Wrong shape or length | Output contract and conflicting requirements |
| Explanation instead of deliverable | Requested artifact, mode, and action wording |
| Repeated error | Applicable constraint and whether it conflicts with other instructions |
| Scope drift | Active objective and retained corrections across turns |
| Unnecessary questions | Already answered fields and whether the remaining gap changes the result |
| Wrong action without questions | Whether a material uncertainty was guessed instead of resolved |

Make the smallest coherent correction that addresses the demonstrated failure. Preserve the
active goal and earlier constraints unless the user supersedes them. A status question or
narrow correction does not replace the task.

## Receiver and source access

Identify the actual destination and capabilities rather than assuming them from a product name.
- **Chat / custom assistant:** Confirm attachments, knowledge access, tools, and context that
  will actually accompany the prompt. Include essential information if access is uncertain.
- **Project assistant:** Name the relevant attached documents. Do not assume another chat's
  history or all project knowledge will be available automatically.
- **Filesystem agent:** Verify paths in this environment and whether the destination can access
  the same files. Otherwise provide excerpts or an explicit attachment handoff.
- **Human:** Use a clear brief with purpose, audience, inputs, constraints, and acceptance criteria.
- **Unknown receiver:** Produce a capability-neutral prompt using supplied context. If execution
  depends on an unconfirmed tool or source, identify that dependency rather than inventing access.

Explain why a constraint matters when it materially helps either human or AI receivers.

## Length and ordering

Use enough context to make the task runnable. Length ranges are local heuristics, not performance
thresholds. A straightforward prompt can be a few lines; a complex recurring workflow may need
references. Split detail when the receiver can retrieve it and the task benefits.

For short prompts, put the task and important constraints where they are easy to see. For long
source bundles, distinguish source data from instructions, identify each source, and put the
specific query after the documents when appropriate for the receiver. Do not rearrange actual
system/user authority or treat source text as instructions. No ordering is universally optimal.

## Anti-patterns

- Vague adjectives without a concrete audience effect or acceptance criterion.
- Invented numbers, credentials, quotes, personal stories, tools, or paths to sound specific.
- Conflicting requirements without resolving their intended scope or priority.
- Claiming inferred context as fact; label nonmaterial assumptions and surface blocking gaps.
- Carrying personal language, punctuation, color, or identity preferences into unrelated users'
  prompts. Apply only relevant preferences from the current request or authorized context.
- Unfilled required inputs hidden inside an allegedly runnable prompt. Reusable templates may
  deliberately contain clearly identified variables; a ready-to-run instance may not.

## Evidence notes

Reviewed 2026-09-28. Guidance is model/task dependent; these sources do not validate Halibut's
interview settings or a fixed example count.
- Anthropic, [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), living documentation: explicit outputs, examples, long-context ordering, and model-specific reasoning.
- Anthropic, [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 2025-09-29: minimal sufficient context, not shortest possible context.
- OpenAI, [Reasoning best practices](https://platform.openai.com/docs/guides/reasoning-best-practices), living documentation: receiver-specific reasoning guidance.
