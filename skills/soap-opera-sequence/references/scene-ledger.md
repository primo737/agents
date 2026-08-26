# Scene Ledger

Built during Phase 2, before any copy exists. It decides what gets interviewed and it becomes the fact table in the final document.

## Format

| Beat | Scene | Verbatim source | File and location | Status |
|---|---|---|---|---|

**Status** is one of:

- `MINED`: a usable scene exists in the client's own recordings
- `THIN`: a claim exists but no scene behind it. Interview target
- `GAP`: nothing. Interview target, or merge the beat
- `BLOCKED`: material exists but cannot be used. Say why in the row

## Worked example

Illustrative, not from a live client. Operator runs a small services firm and the sequence drives attendance at a training they have already booked.

| Beat | Scene | Verbatim source | File and location | Status |
|---|---|---|---|---|
| 1 | People who know the operator socially cannot describe what the business does, despite obvious signs it works | "nobody I know could tell you what I actually do" | Discovery call, 00:12 | MINED |
| 1 | Turns down speaking invitations so the business stays unmentioned | "I just don't go. Easier than explaining it" | Discovery call, 00:14 | MINED |
| 2 | Long weeks, and a specific thing they stopped being able to do | "I was working 72 hours a week" / "I get to run again now. Couldn't before" | Strategy call, 00:31 and 00:47 | MINED |
| 2 | The wall: knew the shape was wrong, had nothing to replace it with | Not stated in any recording | Interview target | THIN, claim without the scene. Asked in Phase 3, supplied |
| 3 | Puts what the team produced against what actually shipped, line by line | "you hire people and then you end up doubling the work" | Discovery call, 00:22 | THIN, claim without the scene. Asked, and they supplied the two columns |
| 4 | A mentor asks what their goal is, they answer, mentor asks why, they have no answer | "He asked me, so what's your goal now?... He was like, why? You don't need to. I was like, I don't know." | Strategy call, 00:38 to 00:39 | MINED. Two figures garbled in the transcription, dialogue runs without them |
| 4 | Someone arrives at a first call already familiar with how they think | "the thing I hear constantly now is, I feel like I know you already" | Onboarding call, 01:04 | MINED |
| AC | Flaw: admits the invisibility was their own doing | "honestly, it's because I've been doing everything" | Strategy call, 00:39 | MINED. Sign-off risk yes, goes to open calls |
| AC | Archetype: reluctant hero. Wanted to stay private, went public because nothing else moved | Consistent across three recordings | All three | MINED |
| any | A named client's revenue lift | Three conflicting figures across three recordings | All three | BLOCKED, sources disagree and none is evidenced |
| any | Another client's deal volume and industry standing | Claimed on a call, no evidence file | Strategy call | BLOCKED, not in the proof inventory |

Note what the ledger did here. Beat 2's wall was missing entirely, which set exactly one interview question. Beat 4 had two usable scenes already, so it needed none. Two claims were blocked before a draft existed, rather than after a beat had been built on them.

## What the ledger is for

**It sets the interview.** Four rows MINED against beat 4 means beat 4 needs no questions. One THIN row against beat 3 means one question, not seven. Clients notice the difference immediately and it changes how hard they work on the answers that are left.

**It catches the blocked material early.** Blocked rows found in Phase 2 cost nothing. The same rows found after the draft is written cost a rewrite of whichever beat leaned on them.

**It becomes the fact table.** Every MINED row ships in the final document with its quote and location. That is what lets the client sign off on their own story quickly, and it is what stops anyone downstream quietly promoting a claim the evidence never supported.

## Two rules

**A conflict is a block, not an average.** When three recordings give three figures, none of them ships. Note the conflict and move on. Splitting the difference invents a fourth number nobody said.

**Reported speech outranks everything.** A row containing something a person said out loud, in quotes, is worth more than three rows of description. Sort for it while mining and build the beat around it when you find one.
