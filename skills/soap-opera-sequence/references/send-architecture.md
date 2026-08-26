# Send Architecture

Only needed when the window is variable: evergreen sequences, and anything tied to an event people register for at unpredictable distances from the date. A fixed-date launch to a static list does not need any of this. Send five emails on five days.

## The problem

People enter at unpredictable distances from the deadline. Someone joining fourteen days out has room for five daily emails. Someone joining thirty six hours out does not. Four things must never happen:

1. Two story emails in one calendar day
2. A story email landing after the event
3. A story email on the same day as a logistics email that has to be read
4. A reader left holding a loop that never closes

## The model

**Forward entry, backward exit.**

The first email is always a beat 1 asset, scheduled at the first legal slot after they enter. Nobody ever starts mid-arc, receiving a loop-close for a loop they were never given. That failure produces incoherent email, which is worse than fewer emails.

The last email is always a closing asset at a fixed slot before the deadline. The arc always resolves, and everyone converges on the same close at the same moment regardless of when they joined.

The count between the two flexes to the slots that fit.

## The grid

Slots sit at `E − (24 × k)` hours, where `E` is the deadline, for `k` from 6 down to 2.

Pin the send hour to the event hour. Two reasons. Gaps become exactly 24 hours by construction rather than by enforcement, and by the time the event arrives that hour has meant the sender for several days running.

Apply a small negative jitter per contact, zero to forty five minutes earlier, never later. It satisfies the drip rule without any send crossing a boundary.

## The fence

**No story email is ever scheduled later than `E − 48h`.**

Enforce this when the schedule is computed, not when a send is due. It is a comparison of two known timestamps, so it cannot fail under load or on a delayed workflow.

That single rule handles three of the four failures: nothing lands after the event, nothing shares a day with the final logistics emails, and nothing shares a day with anything else because slots are exact 24-hour multiples.

The fourth failure is handled by the ladder always terminating in a closing asset.

## The ladder

| Slots that fit | Variant | Assets |
|---|---|---|
| 5 | Full | B1, B2, B3, B4, B5 |
| 4 | Short | M12, B3, B4, B5 |
| 3 | Shorter | M12, M34, B5 |
| 1 to 2 | Solo | SOLO |
| 0 | None | Nothing. Logistics only |

Compress by **count, not by interval**. Shortening the spacing below a day is the only other lever and it breaks the one-per-day rule immediately.

**What survives, and why.** Beats 1 and 5 are structural: beat 1 is the only legal entry, beat 5 is the only clean exit and carries the actual ask. Beats 2 and 4 are amplifiers. Beat 2 gives beat 1's stakes a body, beat 4 pays off beat 3's realization. Neither introduces a premise, so both absorb into the beat they amplify without leaving a hole. Beat 3 is the reframe and goes last, because beat 5's ask only makes sense to someone who has accepted it.

**Merge setup before payoff.** At four slots the merge is 1+2, never 3+4. The front can carry density because attention peaks in the hours after someone opts in. The back cannot, because the back is where the decision gets made.

**Two slots take SOLO, not a two-email arc.** The gain from squeezing an arc into two emails is small and the risk of a false ending is not.

## Writing the merged assets

Whole emails, not concatenations. Two cut lines in one email reads as a false ending and the reader stops trusting the next one.

M34 is not B5 with a paragraph glued to the front. It has to pay off the method that beat 3 withheld, which B5 never does.

SOLO opens no loop at all. One email cannot open and close one. It does beat 5's job and may gesture at the story with a single real image, so the full arc stays available if that person enters a later cohort.

Total assets: eight. B1 to B5, M12, M34, SOLO.

## Gating the sends

Two halves, on different sides of the clock.

**At schedule time:** the fence. Computed once, from known timestamps.

**At send time:** tag presence only. Exit if the arc has been halted, the deadline has passed, the person cancelled, they bounced, or any of the logistics emails has already fired.

Have the logistics sequence write a tag at each of its late steps, and read those tags here. That handshake survives a rescheduled event, a manual re-trigger, or a republished workflow, none of which a precomputed schedule survives on its own.

**Do not express the collision rule as a runtime date comparison.** Date conditions against current time behave inconsistently across platform versions. Tag presence is unambiguous everywhere.

## Suppression, evaluated once on entry

- Window too short for even one slot
- Already running this arc for another cohort
- Completed this arc recently. Set the window to the real cohort cadence plus margin
- Has received another sequence built on the same story
- Internal or test contact

The repeat rule is the one people forget. Someone who registers for three cohorts and attends none would otherwise receive the identical story three times.

## Exits

Hard exit on: deadline reached, logistics sequence has started its final run, unsubscribe, bounce, spam complaint, opt-out reply, cancellation.

Pause and recompute on: event rescheduled. Resume at the next unsent beat with whatever slots now fit, dropping to the smallest variant that still ends on a closing asset.

**Converting is not always an exit.** On a sequence driving attendance, someone who buys early should still be in the room. On a sequence driving a sale, the sale exits them immediately. Decide which this is and write it down, because the two look identical in a workflow builder and someone will eventually "fix" it in the wrong direction.

## Measurement

Not opens on email one. That opens because of who sent it.

Watch the open rate on email two. That opens because the first cut worked, which is the only thing this structure is actually betting on.

Then compare the conversion rate of the Full variant against the people who got nothing. The variant tags make that comparison available inside a single cohort, with no separate test to run.
