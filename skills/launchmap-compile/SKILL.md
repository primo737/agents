---
name: launchmap-compile
description: >
  Final step of the Fletcher Method LaunchMap multi-agent build. Reads all 9 session
  files from /tmp/launchmap-session/, runs MDM consistency checks (same avatar/currency/
  metric/timeline/pain across all sections), checks cross-section alignment, and assembles
  the final LaunchMap document with an Implementation Priority section. Saves final output
  to /tmp/launchmap-session/LAUNCHMAP-FINAL.md. Use only after all 9 section files exist.
---

# LaunchMap — Final Compile & Proofread

## Your Job

Read all 9 session files and compile them into a single, polished LaunchMap document. Before assembling, run quality checks across all sections for consistency and alignment.

## Read All Session Files

Read each file in order. Before reviewing each one, note its role in the system so you can evaluate it in context — not just as an isolated document, but as a piece of the full marketing machine.

```bash
cat /tmp/launchmap-session/01-avatar.md
```
> **What this is:** The Perfect Avatar — the single person everything in this LaunchMap is built for. Every other section should speak to this person's specific language, pain, goals, and desires. If any section drifts from this avatar, it breaks the system.

```bash
cat /tmp/launchmap-session/02-mdm.md
```
> **What this is:** The Million Dollar Message — the one sentence that defines who the client helps, what specific result they deliver, in what timeframe, and what pain it eliminates. This is the spine of the entire LaunchMap. Every hook, headline, and offer frame downstream should trace back to this sentence.

```bash
cat /tmp/launchmap-session/03-offer.md
```
> **What this is:** The Perfect Offer — the core paid product or service. Review for a clear transformation (before/after), a compelling name, proof elements, and a roadmap that justifies the price. This is what all marketing is ultimately pointing toward.

```bash
cat /tmp/launchmap-session/04-lead-magnet.md
```
> **What this is:** The Ultimate Lead Magnet (ULM) — the free resource that converts strangers into leads. It should solve a specific sub-problem the avatar has, deliver a quick win, and create natural demand for the paid offer. The name should do marketing work on its own.

```bash
cat /tmp/launchmap-session/05-authority.md
```
> **What this is:** The Authority Amplifier (AA) — the free educational event (webinar, masterclass, workshop) that converts leads into enrolled prospects. It should demonstrate expertise, pre-sell the offer's method, and end with a clear call-to-action to apply or enroll.

```bash
cat /tmp/launchmap-session/06-enrollment.md
```
> **What this is:** The 10X Enrollment Script — the sales conversation framework used on calls with prospects who attended the AA. Review for a clear discovery section, objection handling, a values-based close, and a structure that respects the prospect's autonomy.

```bash
cat /tmp/launchmap-session/07-content.md
```
> **What this is:** The Content Roadmap — the editorial plan that builds the client's audience and authority over time. Each content piece should map to a step in the offer roadmap, a specific avatar pain, or a belief shift required before the avatar will buy.

```bash
cat /tmp/launchmap-session/08-traffic.md
```
> **What this is:** The Traffic On Demand plan — the paid and organic strategy for getting the right people into the ULM funnel. Review for audience targeting specificity, platform fit for the avatar's hangouts, and hook alignment with the MDM's pain and currency.

```bash
cat /tmp/launchmap-session/09-retargeting.md
```
> **What this is:** The Retargeting Roadmap — the follow-up sequences for people who engaged but didn't convert. Review for logical audience segmentation (ULM leads vs. AA attendees vs. sales page visitors), message progression, and a Metrics Multiplier that reflects realistic funnel math against the offer price.

---

## Quality Check 1: MDM Consistency

The MDM is the spine of the entire LaunchMap. Every section must align with it.

Check each section against the MDM from `02-mdm.md`:

| Element | MDM Value | Used Consistently? |
|---------|-----------|-------------------|
| Avatar | [avatar name/description] | Check in: offer, lead magnet, authority, enrollment, content, traffic |
| Currency | [primary currency] | Check in: lead magnet, authority, traffic hooks |
| Metric | [specific result] | Check in: offer transformation, enrollment application, content titles |
| Timeline | [timeframe] | Check in: offer, enrollment, authority promise |
| Pain | [specific pain eliminated] | Check in: lead magnet name, authority title, ad hooks |

Flag any section where the avatar described, the metric promised, or the pain referenced drifts from the MDM. Note discrepancies clearly.

---

## Quality Check 2: Section Alignment

Check that sections logically connect:

**Avatar → ULM:** Does the lead magnet solve a real problem the avatar has?

**ULM → Authority:** Does the AA promise follow logically from the ULM opt-in?

**Authority → Enrollment:** Does the enrollment script assume someone who attended the AA?

**Offer Roadmap → Content:** Are all 9 steps from the roadmap covered in the content roadmap?

**Traffic → Retargeting:** Do the traffic audiences feed properly into the retargeting sequences?

**Retargeting Metrics → Offer Price:** Do the funnel math numbers add up? (Check the Metrics Multiplier against the offer price and assumed close rate.)

---

## Quality Check 3: Implementation Sequencing

Identify which elements should be built FIRST for fastest path to revenue. Sort all deliverables into:

**Phase 1 — Launch Minimum (Week 1–2):**
Things that must exist before any revenue is possible.
Typical: Avatar locked, MDM finalized, Core Offer structured, Enrollment script drafted, 1 ULM created

**Phase 2 — Traffic Ready (Week 3–4):**
Things needed before running any paid traffic.
Typical: AA recorded, ULM designed, Ad concepts written, Booking/application page live

**Phase 3 — Full System (Week 5–8):**
Things that optimize and scale the system.
Typical: Content roadmap executing, Retargeting sequences live, BOF rotation active, Step-specific ULMs and AAs

---

## Compile the Final Document

Assemble into a single document using this structure. Each section must begin with a **plain-language explanation block** — written for a reader who has no marketing background and has never heard of the Fletcher Method. This block explains what the section is, why it exists in the plan, and what it will do for the business. Write it in second person ("This section defines..."), keep it to 3–5 sentences, and avoid jargon. The explanation comes *before* the section content, not after.

```markdown
# [Client Name] LaunchMap
**Prepared:** [date]
**MDM:** [full MDM sentence]

---

### About This Document

This LaunchMap is a complete marketing and sales system built specifically for [Client Name]'s business. It was developed using the Fletcher Method — a structured framework for coaches, consultants, and service providers to attract the right clients, communicate their value clearly, and convert prospects into paying customers without relying on guesswork or generic marketing tactics.

The document is organized into nine sections, each one building on the last. You don't need a marketing background to read it — each section begins with a plain explanation of what it is and why it matters. The goal is for anyone involved in the business — owner, team member, advisor, or investor — to be able to pick this up and immediately understand the strategy and why it's built the way it is.

---

## 1. Perfect Avatar — [Avatar Name]

> **What this section is and why it matters:**
> Every effective marketing system is built around one specific person — not a broad category of people, but a detailed, vivid picture of the exact individual who is most likely to buy, benefit, and refer others. This section defines that person for [Client Name]'s business.
>
> The reason we get this specific is simple: generic marketing attracts no one. When every word of your messaging, every offer you create, and every ad you run is written *to one real person*, it feels personal — and people respond to things that feel like they were made for them. This avatar becomes the filter for every marketing decision going forward.

[Content from 01-avatar.md]

---

## 2. Million Dollar Message

> **What this section is and why it matters:**
> This is the single most important sentence in the business — a precise statement that describes who the client helps, what specific result they deliver, in what timeframe, and what frustration or pain it eliminates. Think of it as the business's north star in words.
>
> Most businesses struggle to explain what they do in a way that makes the right person immediately say "that's for me." This message solves that. It's not a tagline or a mission statement — it's a clarity tool. Everything downstream — ads, emails, conversations, content — should be traceable back to this one sentence. When the message is right, it does the selling before the sales conversation even begins.

[Content from 02-mdm.md]

---

## 3. Perfect Offer

> **What this section is and why it matters:**
> This section defines the core product or service [Client Name] sells — not just what it includes, but how it's framed, priced, named, and positioned to be genuinely compelling to the avatar. A good offer answers the buyer's unspoken question: "Why should I pay this, and why should I trust that it will work for me?"
>
> Many great service providers lose sales not because their work is weak, but because their offer is unclear. This section structures the offer so that its value is obvious — including the transformation it delivers, the roadmap it follows, and the proof that it works. Everything in the marketing system exists to bring the right person to this offer.

[Content from 03-offer.md]

---

## 4. Ultimate Lead Magnet

> **What this section is and why it matters:**
> Before someone buys, they need to trust that [Client Name] understands their problem and can solve it. The lead magnet is a free resource — a guide, checklist, video, mini-course, or tool — that delivers genuine value and earns that trust. In exchange, the person shares their contact information, becoming a lead.
>
> This isn't a bribe or a gimmick. The lead magnet is designed to solve one specific, real problem the avatar has — and to do it well enough that they think, "If the free stuff is this good, the paid program must be exceptional." It's the first step in a relationship, and it's designed to make the next step (attending a free training) feel like a natural, obvious move.

[Content from 04-lead-magnet.md]

---

## 5. Authority Amplifier

> **What this section is and why it matters:**
> Once someone has the lead magnet, this is the next step: a free educational event — typically a webinar, masterclass, or live workshop — where [Client Name] teaches something valuable and demonstrates their expertise in action. It's called an "Authority Amplifier" because it does exactly that: it rapidly builds credibility and positions [Client Name] as the obvious expert to trust.
>
> Most people don't buy from someone they've just discovered. They buy from someone they've seen teach, heard explain their situation accurately, and come to believe has the answer. This event bridges that gap. It's not a sales pitch dressed up as education — it's real teaching that naturally leads a qualified prospect to want to go further.

[Content from 05-authority.md]

---

## 6. 10X Enrollment Script

> **What this section is and why it matters:**
> This is the framework for the sales conversation — the call or meeting where a qualified prospect and [Client Name] talk one-on-one to determine if working together makes sense. It's called an "enrollment script" rather than a sales script because the goal isn't to pressure someone into a purchase; it's to help the right person enroll in something that will genuinely change their situation.
>
> Great sales conversations follow a structure: understand the prospect's situation deeply, identify what's at stake if nothing changes, connect the offer to their specific goals, and address concerns honestly. This section gives [Client Name] that structure so that conversations are consistent, confidence-inspiring, and effective — without feeling scripted or pushy.

[Content from 06-enrollment.md]

---

## 7. Content Roadmap

> **What this section is and why it matters:**
> This section maps out the content [Client Name] will publish — posts, videos, emails, podcasts, or articles — to build an audience, demonstrate expertise over time, and keep the business visible to people who aren't ready to buy yet but will be.
>
> Content isn't just "staying active online." When done strategically, every piece serves a purpose: it speaks to a specific obstacle the avatar faces, shifts a belief that's keeping them stuck, or walks them one step closer to being ready to invest. This roadmap ensures that [Client Name]'s content library is building something — not just filling a feed.

[Content from 07-content.md]

---

## 8. Traffic On Demand

> **What this section is and why it matters:**
> A great offer and a polished funnel produce nothing without people seeing them. This section is the strategy for generating consistent, qualified attention — through paid advertising, organic reach, partnerships, or a combination — and directing it into the lead magnet funnel.
>
> "Traffic" simply means people. This plan identifies where the avatar spends time, what messages will make them stop and pay attention, and how to turn that attention into opt-ins at a repeatable, predictable cost. It's the engine that feeds the entire system. Without it, the business depends on word-of-mouth and hope. With it, growth becomes something [Client Name] can control.

[Content from 08-traffic.md]

---

## 9. Retargeting Roadmap

> **What this section is and why it matters:**
> Most people don't buy the first time they encounter an offer. They get curious, look around, and then life gets in the way. Retargeting is the system for following up with those people — through ads, emails, or direct outreach — with the right message at the right time to bring them back.
>
> This section segments the audience by how far they got (someone who downloaded the lead magnet is different from someone who watched the full training but didn't book a call) and maps a specific follow-up sequence for each group. Done well, retargeting turns "almost customers" into actual customers — often at a fraction of the cost of acquiring new leads.

[Content from 09-retargeting.md]

---

## Implementation Priority

> **How to read this section:**
> This is the build sequence — what to do first, second, and third to get the system live as quickly as possible. The phases are ordered by what's required before anything else can work. Phase 1 is the bare minimum needed to start generating revenue. Phase 2 prepares the system for paid traffic. Phase 3 activates the full engine.

### Phase 1 — Launch Minimum (Week 1–2)
[List of must-do items]

### Phase 2 — Traffic Ready (Week 3–4)
[List of items]

### Phase 3 — Full System (Week 5–8)
[List of items]

---

## Consistency Notes

> **What this section is:**
> This is the editor's review — places where the nine sections may need to be tightened to ensure they all speak to the same person, promise the same result, and form a single coherent system rather than nine separate documents. Any issues flagged here are refinements, not failures.

[Any MDM drift or alignment issues found — flag clearly so the client can fix]
```

---

## Save and Report

Save the compiled document to `/tmp/launchmap-session/LAUNCHMAP-FINAL.md`.

Report back:
1. "LaunchMap compiled. [X] sections integrated."
2. Note any consistency issues found (if none, say so)
3. Note the Phase 1 priority items — what to build first
4. Confirm the file is saved and offer to output it or save it elsewhere
