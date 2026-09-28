# Halibut behavioral evaluation

Use this after a meaningful skill change or a reported regression. It preserves the ten original failure scenarios, adds broader users and interaction cases, and records actual execution evidence. A successful CLI exit or a frontmatter check is not a behavioral pass.

## Sources and coverage

The original regressions concerned concrete-source delivery, correction recovery, applying a prompt, command availability, broad-enough file search, legitimate discovery, delivery closeout, outbound review, visible named process, and full intake. `cases.json` contains self-contained synthetic equivalents. Cases 01–10 retain the original behavior being tested. Case 09 permits a finished reply when requested, while still checking the named process and reusable prompt. Case 06 measures useful discovery and retention, not a universal five-question limit. Case 08 tests review before transmitting unapproved wording; case 19 tests explicitly approved local simulation.

Cases 11–19 cover different users, Spanish output, third-party voice, unavailable sources, source injection, authorized scope expansion, correction without goal loss, audit routing, and approved mock sending. No fixture contains genuine contact information or private client material.

## Run

Run these from the Halibut skill directory (the folder containing `SKILL.md`):

```sh
python3 harness/run_evals.py --output-dir /tmp/halibut-evals --cases 01,05 --prepare-only
python3 harness/run_evals.py --skill-root . --output-dir /tmp/halibut-evals --cases all --trials 1
```

Use `--list` to inspect case IDs, `--cases 06,09,16` for a subset, `--trials 3` for repeats, and `--timeout 300` for a per-turn execution limit. Start with one or two smoke cases before the full suite. Large repeated experiments need separate consideration of time and cost.

The runner copies the skill and references into a disposable workspace and invokes installed Codex with `--ignore-user-config`, `--ephemeral`, `--sandbox workspace-write`, and network disabled. It does not change `CODEX_HOME` or copy credentials. It leaves model and reasoning effort at the CLI defaults; record the actual reported values from stderr or execution metadata, not assumptions. Different models must be tested separately. This runner tests Codex only and makes no Claude authentication check. Any separately observed authentication failure belongs to its own dated evidence, never a default status for every new run.

All fixtures, simulated Desktop/Downloads/vault folders, and allowed actions are local. `mock_send.py` only appends a local JSON trace and has no network implementation. Workspace restrictions prohibit inspection of real home, contacts, accounts or project files. Skill sandbox/network instructions reduce exposure but are not a claim of OS-level denial of every possible connector; review traces for boundary violations.

## Multi-turn limitation

Each turn runs in a fresh ephemeral process with the preceding user and assistant messages explicitly replayed as conversation data. Files persist only inside that case's disposable workspace. This tests observable correction/retention under replay. It is **not** native session continuation and must never be labeled that way. Supplement with genuine independent multi-turn conversations when assessing conversational reliability. Do not fake an assistant answer or silently skip a turn.

## Evidence and grading

Every case saves inputs, final responses, JSONL events including tool traces, stderr, exact command/cwd/sandbox/network settings, per-turn file changes, artifact snapshots, source hashes and mock-send counts. Original temporary workspaces remain available for inspection. Each case preserves the exact skill snapshot and its hashes alongside artifacts. Output summaries start `UNREVIEWED`; the runner never infers semantic PASS from regex matches or exit status.

Review each case's `review.md` against its stated gates. Record PASS, FAIL or BLOCKED with exact response/trace/artifact evidence. BLOCKED includes auth, timeout, or unavailable runtime; it is neither success nor a skill regression. A case passes only when every meaningful gate passes. Examine first substantive response and completion separately. Do not require exact heading or mode-name wording when behavior is correct.

Mechanical observations include dashboard existence, actual deck movement and byte-preservation, and per-turn mock-send calls. For dashboard content, independently check 4 sessions, 112 minutes, 7 retries and 3 completions; file existence alone is insufficient. Inspect the rendered dashboard if reporting visual quality. For a move, inspect source absence, destination existence and matching hash. For mock sending, confirm no call before approval and only the approved simulated action afterward. Never describe a mock trace as real delivery.

Behavioral quality and output quality are distinct. Judge task fidelity, groundedness, usefulness, and requested voice/format against the visible user request. Use applicable language guidance for final prose, without treating stylistic preference as a universal factual requirement. Preserve original failures as regression checks while allowing alternative correct paths.

## Separate static checks

Run the skill-creator frontmatter validator separately. Inspect referenced paths, conflicting instructions, adapter parity and stale credentials as static checks. These do not establish runtime interview quality, safety or downstream performance. Keep runtime scorecards and static-validation results separately labeled, and report tested provider/model, case count, trial count and coverage gaps.
