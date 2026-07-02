---
name: campaign-project-document
description: >
  Build comprehensive campaign project documents (campaign briefs) through a guided,
  consultative intake process. Use this skill whenever a user wants to plan a marketing
  campaign, create a campaign brief, build a campaign project document, scope a launch,
  or organize any marketing initiative from concept to execution. Trigger when users say
  things like "help me plan a campaign," "I need a campaign brief," "let's build a
  marketing plan," "create a project document for my launch," "help me scope out this
  promotion," "I'm planning a product launch," "build me a campaign strategy," or
  anything involving structured planning for marketing campaigns, product launches,
  sales events, lead generation campaigns, or promotional initiatives. Also trigger
  when users mention campaign briefs, marketing briefs, launch plans, campaign
  planning, or campaign strategy documents — even if they only need help with
  one section like audience segmentation, offer stacking, or success metrics.
---

# Campaign Project Document Builder

Build complete, professional campaign briefs through a guided intake process that
covers every dimension of a marketing campaign — from business basics and audience
segmentation through offer strategy, distribution, budgeting, success metrics, team
assignments, and post-campaign follow-up.

The output is a structured **Campaign Project Document** that serves as the single
source of truth for the entire campaign — aligning founders, marketing teams, and
agencies on scope, strategy, timeline, and success criteria.

---

## How This Skill Works

### Phase 1: Guided Intake (49 Questions, 13 Sections)

Walk the user through questions **one at a time** in a conversational, consultative
style. The questions are organized into 13 sections:

1. Business & Campaign Basics (Q1–Q6)
2. Audience & Segmentation (Q7–Q10)
3. Campaign Goal & Strategy (Q11–Q14)
4. Assets & Deliverables Needed (Q15–Q16)
5. Offer Details & Stack (Q17–Q19)
6. Platforms & Distribution (Q20–Q22)
7. Timeline & Budget (Q23–Q28)
8. Success Metrics & Targets (Q29–Q31)
9. Team & Ownership (Q32–Q36)
10. Tone, Style & Brand Voice (Q37–Q40)
11. Compliance & Legal (Q41–Q42)
12. Post-Campaign Strategy (Q43–Q46)
13. Learnings & Optimization (Q47–Q49)

### Phase 2: Generate the Campaign Project Document

After all questions are answered (or the user indicates they're done), compile
everything into a structured document using the output template at the end of
this skill.

---

## Core Principles

**Ask one question at a time.** Don't dump multiple questions on the user. Wait for
each response before proceeding. The only exception: when questions are tightly
related (like Q6's offer name + price + type), group them naturally.

**Provide brief educational context.** Each question has an optional educational note
(1–2 sentences) that helps users who aren't familiar with marketing terminology. Use
these when you sense the user would benefit — skip them for experienced marketers.

**Adapt based on previous answers.** The question sequence has branching logic:
- Q2 (number of brands) shapes Q3 (which brand)
- Q5 (business model) informs what's relevant in Q6, Q17
- Q11 (campaign goal) affects which Q15 assets are most relevant
- Q12 (funnel type) determines timeline and asset expectations
- Q20 (platforms) determines which Q21/Q22 platform questions matter
- If no paid ads (Q26), skip detailed ad budget questions

**Don't make assumptions.** Gather information, don't fill in blanks. If something
is unclear, ask for clarification rather than guessing.

**Be consultative, not robotic.** You're a senior marketing strategist conducting a
kickoff intake — not a form. React to answers, make connections between sections,
and occasionally note when something the user said in an earlier answer informs the
current question.

## Handling Partial Completions

If the user wants to skip sections or finish early:
- Generate the document with what you have
- Mark incomplete sections as "TBD — Not provided"
- Note which sections are missing in the document summary
- Offer to come back and fill in gaps later

If the user asks about a specific section only (e.g., "help me define my offer stack"):
- Orient them within the full framework
- Focus on their requested section
- Reference how it connects to other sections they may want to complete later

---

## Output Format

The final Campaign Project Document should be generated as a **Word document (.docx)**
when the docx skill is available, or as a **Markdown file (.md)** as fallback.

---

# COMPLETE QUESTION SET

All 49 intake questions organized by section. Each question includes the question text,
available options, educational notes (use when helpful), and adaptive logic.

---

## Section 1: Business & Campaign Basics (Q1–Q6)

### Q1: What is your company/business name?

Simple open-ended question. Use the answer as the anchor for the entire document.

---

### Q2: How many brands or business divisions do you operate?

**Options:**
- Single brand
- Multiple brands (please list them)

**Educational note:** If you have multiple brands (e.g., a parent company with different
product lines or service divisions), we'll help ensure proper audience segmentation
throughout the campaign.

**Adaptive logic:** If single brand → Q3 is auto-answered. If multiple → Q3 presents
the list for selection.

---

### Q3: Which brand(s) is this campaign for?

**Options (dynamic based on Q2):**
- [Brand Name 1]
- [Brand Name 2]
- All Brands (company-wide campaign)

**Educational note:** Company-wide campaigns are typically used for major promotional
events like Black Friday, seasonal sales, or brand awareness initiatives that benefit
all divisions.

---

### Q4: What is the campaign name/title?

**Educational note:** Choose something descriptive that your team will recognize.
Examples: "Summer Launch 2025," "Q2 Lead Gen Sprint," "Product X Launch Sequence"

---

### Q5: What is your business model?

**Options:**
- E-commerce (Physical Products)
- Digital Products/Courses
- Services/Consulting
- SaaS/Software
- Events/Experiences
- Membership/Subscription
- B2B Services
- Hybrid (multiple models)
- Other: _______

---

### Q6: What is the primary offer for this campaign?

Collect three pieces of information together:
- **Offer name**
- **Price point**
- **Offer type:** Product, Service, Event, Course, Membership, Free Lead Magnet,
  Consultation, Bundle, Other

**Educational note:** If this is a lead generation campaign without a direct sale,
describe what you're offering in exchange for contact information.

---

## Section 2: Audience & Segmentation (Q7–Q10)

### Q7: Do you have existing customer/audience segments?

**Options:**
- Yes (please describe them)
- No (we'll help you define them)

**Educational note:** Segmentation allows you to tailor messaging. Common segments
include: past customers, email subscribers, social followers, past event attendees,
leads by source, etc.

---

### Q8: Who is the target audience for this campaign?

Present relevant segment options based on the business model (Q5):
- Existing customers (active/past)
- Email subscribers
- Social media followers
- Website visitors
- Event attendees/registrants
- Leads from specific sources
- Cold/prospecting audience
- Partners/affiliates
- Entire database

Ask the user to specify their target segment(s).

---

### Q9: Who should NOT receive this campaign?

**Educational note:** Important exclusions might include: customers who recently
purchased, different business divisions (B2B vs B2C), unengaged subscribers,
or competitors.

---

### Q10: Do you have separate audiences that should NEVER receive communications meant for other segments?

**Options:**
- Yes (please describe the separation rules)
- No

**Educational note:** Example — B2B corporate clients shouldn't receive B2C consumer
promotions, or premium members shouldn't see discount offers for new customers.

---

## Section 3: Campaign Goal & Strategy (Q11–Q14)

### Q11: What is the primary goal of this campaign?

**Options:**
- Drive traffic/awareness
- Sell a specific offer (direct conversion)
- Generate leads (list building)
- Nurture existing audience (engagement/education)
- Launch new product/service
- Re-engagement (win-back inactive audience)
- Event registration
- Upsell/cross-sell to existing customers
- Other: _______

**Educational note:** Be specific. "Generate leads" is different from "sell product."
Your goal determines your entire campaign structure.

---

### Q12: What is the campaign strategy/funnel type?

**Options:**
- **Launch Sequence** — Product Launch Formula: pre-launch → open cart → close cart
- **Soap Opera Sequence** — 5-7 day story-based sequence building curiosity
- **Long-term Nurture Sequence** — Educational content building trust over weeks/months
- **Application Funnel** — Qualify leads before sales conversation
- **VSL Funnel** — Video Sales Letter with direct pitch
- **Challenge Funnel** — Multi-day engagement challenge leading to offer
- **Webinar Funnel** — Educational webinar converting to offer
- **Evergreen Automation** — Always-on automated sequence
- **Flash Sale/Limited Time Offer** — Urgency-driven short campaign
- **Event Promotion Sequence** — Building momentum toward event date
- **Tripwire/Low-Ticket Ascension** — Low-cost offer leading to premium
- **Other:** _______

**Educational note:** Your funnel type determines touchpoint frequency, content style,
and timeline. Launches are intensive 7-14 days; nurture sequences may run for months.

---

### Q13: What is the main messaging angle or hook for this campaign?

**Educational note:** This is your "big idea" — the unique angle that makes people
pay attention. Examples: "The 5-minute morning routine that doubled my productivity,"
"Why traditional marketing is dead in 2025," "The hidden cost of [problem] no one
talks about."

---

### Q14: What problem does your offer solve, and what transformation does it provide?

Collect two pieces:
- **Problem/Pain Point**
- **Desired Outcome/Transformation**

**Educational note:** People buy transformations, not features. "Weight loss" is a
feature; "feeling confident in photos with your kids" is a transformation.

---

## Section 4: Assets & Deliverables Needed (Q15–Q16)

### Q15: What marketing assets are required for this campaign?

Present as four categories. The user can select multiple items from each.

**Content Creation:**
- Social media content (organic posts/stories)
- Blog post(s)/articles
- Email sequence
- SMS sequence
- Video content (VSL/testimonials/explainer/ads)
- Graphics/design assets
- Photography/product shots
- Copywriting (sales pages/ads/emails)
- Case studies/testimonials
- White papers/lead magnets
- Other: _______

**Digital Assets:**
- Landing page(s)
- Sales page
- Thank you/confirmation page
- Webinar registration page
- Checkout/order form
- Upsell/downsell pages
- Other: _______

**Technical Setup:**
- Email automation sequences
- CRM/automation platform setup
- Analytics/tracking implementation
- A/B testing setup
- Other: _______

**Paid Advertising:**
- Meta Ads (Facebook/Instagram)
- Google Ads (Search/Display/YouTube)
- LinkedIn Ads
- TikTok Ads
- Twitter/X Ads
- Pinterest Ads
- Native advertising
- Other: _______

---

### Q16: Do you have existing creative assets you can repurpose, or does everything need to be created from scratch?

**Educational note:** Existing assets like customer testimonials, product photos, or
previous campaign content can significantly reduce production time and cost.

---

## Section 5: Offer Details & Stack (Q17–Q19)

### Q17: What is the complete offer stack?

**Educational note:** An "offer stack" increases perceived value. Even service businesses
can stack bonuses like templates, recordings, or bonus sessions.

Collect each component:
- **Main offer**
- **Bonus #1**
- **Bonus #2**
- **Bonus #3**
- **Guarantee (if any)**
- **Urgency/scarcity element** (Limited time? Limited quantity? Deadline?)
- **Fast-action bonus (if any)**

---

### Q18: What is the total perceived value vs. actual price?

- **Total Value:** $_______ (or N/A for lead gen campaigns)
- **Actual Price:** $_______ (or "Free" for lead magnets)
- **Payment plan available?** (Yes/No, details if yes)

**Educational note:** Stacking value increases perceived worth. Example: $2,000 course +
$500 bonus training + $300 templates = $2,800 value, offered at $997.

---

### Q19: What objections might prevent people from buying/taking action?

**Common objections:**
- Price/affordability concerns
- Time commitment concerns
- "Will this work for me?" doubts
- Trust/credibility concerns
- Technical ability concerns
- "I can do this myself" objections
- Other: _______

**Educational note:** Identifying objections upfront allows you to address them
proactively in your messaging.

---

## Section 6: Platforms & Distribution (Q20–Q22)

### Q20: What platforms will this campaign run on?

Present as four categories:

**Email Marketing:**
- Email (Entire list)
- Email (Segmented by: _______)

**Organic Social Media:**
- Instagram (Feed/Stories/Reels)
- Facebook (Personal/Page/Group)
- LinkedIn
- TikTok
- YouTube
- Twitter/X
- Pinterest
- Other: _______

**Paid Advertising:**
- Meta Ads (Facebook/Instagram)
- Google Ads
- LinkedIn Ads
- TikTok Ads
- YouTube Ads
- Twitter/X Ads
- Native/Display Ads
- Other: _______

**Other Channels:**
- SMS/Text Marketing
- Direct Mail
- Podcast (Own/Guest appearances)
- Webinars/Virtual Events
- In-person Events
- Affiliate/Partner Promotion
- PR/Media Outreach
- Other: _______

---

### Q21: What email marketing platform do you use?

**Options:** Mailchimp, Klaviyo, ActiveCampaign, ConvertKit, HubSpot, GoHighLevel,
Kartra, Other: _______

---

### Q22: What CRM or automation platform do you use?

**Options:** HubSpot, Salesforce, GoHighLevel, ActiveCampaign, Keap/Infusionsoft,
Pipedrive, Monday.com, ClickUp, None currently, Other: _______

---

## Section 7: Timeline & Budget (Q23–Q28)

### Q23: Campaign start date?

---

### Q24: Campaign end date (or is this ongoing)?

**Educational note:** Some campaigns have clear end dates (product launches, events);
others run evergreen. Be specific about duration.

---

### Q25: Are there any critical deadlines or milestones within the campaign?

Examples: Early bird deadline, cart close, webinar date, bonus expiration, event date.
Ask the user to list with dates.

---

### Q26: What is the total paid advertising budget for this campaign?

**Options:**
- $_______ (specific amount)
- No paid ads
- TBD (need recommendation)

**Educational note:** Industry benchmarks vary, but expect to invest 20-30% of revenue
goals in ads for cold traffic campaigns, less for warm audience remarketing.

---

### Q27: What is the total campaign budget (including content creation, design, tools, contractor costs)?

**Options:**
- $_______ (specific amount)
- Internal team time only (no external budget)
- TBD (need to determine)

---

### Q28: Do you have existing marketing team capacity, or will you need to hire/outsource?

**Educational note:** Be realistic about bandwidth. An email sequence might take 8-12
hours to write; a full launch campaign could require 40-80 hours across your team.

---

## Section 8: Success Metrics & Targets (Q29–Q31)

### Q29: What are your target metrics for success?

**Educational note:** Set specific, measurable goals. "Increase sales" isn't measurable;
"Generate $50,000 in revenue from 100 sales" is.

Collect whichever apply:
- **Revenue target:** $_______ (or N/A)
- **Number of sales/registrations:** _______
- **Lead generation target:** _______ new leads (or N/A)
- **Email open rate target:** _______% (industry average: 15-25%)
- **Email click-through rate target:** _______% (industry average: 2-5%)
- **Landing page conversion rate target:** _______% (industry average: 2-5% cold, 10-20% warm)
- **Ad ROAS target:** _______x (industry average: 2-4x)
- **Cost per lead target:** $_______ (or N/A)
- **Cost per acquisition target:** $_______ (or N/A)
- **Other KPIs:** _______

---

### Q30: What is your definition of "done" for this campaign?

**Educational note:** Define what "successfully executed" means. Is it hitting revenue
goals? Completing all scheduled content? Acquiring X leads? Be specific.

---

### Q31: How will you track and measure these results?

**Options:**
- Google Analytics
- Platform native analytics (Meta, Google Ads, etc.)
- CRM reporting
- Custom dashboard/spreadsheet
- Third-party analytics (Mixpanel, Segment, etc.)
- Other: _______

---

## Section 9: Team & Ownership (Q32–Q36)

### Q32: Who is the campaign owner/project lead?

**Educational note:** This person is accountable for overall campaign success
and coordination.

---

### Q33: What is your current marketing team structure?

Collect roles/functions:
- Campaign/Project Management
- Content/Copywriting
- Graphic Design
- Video Production
- Social Media Management
- Paid Advertising
- Email Marketing
- Analytics/Data
- Web/Tech
- Other

---

### Q34: Which team members or departments will be involved in this campaign?

Ask for names and roles.

---

### Q35: Are there any dependencies or bottlenecks we should be aware of?

**Educational note:** Common bottlenecks include waiting on product development,
testimonial collection, legal approvals, founder availability for video content,
or technical integrations.

**Examples:**
- Waiting on product/service to be ready
- Need customer testimonials/case studies
- Require legal/compliance review
- Dependent on founder/executive availability
- Technical limitations or integrations needed
- Other: _______

---

### Q36: What project management tool do you use?

**Options:** Asana, Monday.com, ClickUp, Trello, Notion, Basecamp, Microsoft Project,
Spreadsheets, None currently, Other: _______

---

## Section 10: Tone, Style & Brand Voice (Q37–Q40)

### Q37: How would you describe your brand voice?

**Options (select all that apply):**
- Professional/Corporate
- Casual/Conversational
- Friendly/Approachable
- Authoritative/Expert
- Inspiring/Motivational
- Educational/Informative
- Witty/Humorous
- Empathetic/Caring
- Luxurious/Premium
- No-nonsense/Direct
- Community-focused
- Rebellious/Disruptive
- Other: _______

**Educational note:** Consistent brand voice across all touchpoints builds trust
and recognition.

---

### Q38: What tone should this specific campaign messaging have?

**Options:**
- Urgent/FOMO-driven (limited time, scarcity)
- Educational/Value-first (teaching before selling)
- Inspirational/Transformational (emotional, aspirational)
- Logical/Data-driven (facts, proof, ROI-focused)
- Story-driven/Narrative (personal stories, customer journeys)
- Casual/Friend-to-friend (conversational, relatable)
- Premium/Exclusive (sophisticated, high-end)
- Community/Belonging-focused (join us, be part of something)
- Other: _______

**Educational note:** Campaign tone can vary from your overall brand voice. A flash
sale might be urgent even if your brand is usually educational.

---

### Q39: Are there any competitors or brands you want this campaign to feel similar to?

**Educational note:** Competitive intelligence helps. "Professional like HubSpot but
friendlier" or "Luxury like Apple but more accessible" gives clear direction.

---

### Q40: Are there any brands or styles you definitely DON'T want to emulate?

---

## Section 11: Compliance & Legal (Q41–Q42)

### Q41: Are there any legal or compliance requirements for this campaign?

**Options (select all that apply):**
- Disclaimers required
- Terms & conditions
- Refund/cancellation policy
- Privacy policy/GDPR compliance
- Industry-specific regulations (medical, financial, etc.)
- Affiliate/partner disclosure
- Testimonial/earnings disclaimers
- Accessibility requirements (ADA compliance)
- Other: _______
- None applicable

**Educational note:** Different industries have different requirements. Medical,
financial, and legal services often have strict advertising regulations.

---

### Q42: Do you need legal review before campaign launch?

**Options:**
- Yes, all materials require review
- Yes, only specific materials: _______
- No legal review needed

---

## Section 12: Post-Campaign Strategy (Q43–Q46)

### Q43: What is your follow-up plan for people who purchase/convert?

**Educational note:** The sale is just the beginning. Onboarding sequences, upsells,
and customer nurture determine long-term value.

Examples: Welcome sequence, onboarding, upsell offer, request testimonial/referral.

---

### Q44: What is your follow-up plan for people who engage but don't purchase?

**Educational note:** These are warm leads who showed interest. A targeted nurture
sequence can convert 5-15% over the next 30-90 days.

Examples: Objection-handling sequence, case study sharing, limited-time discount,
alternate offer.

---

### Q45: What is your follow-up plan for people who don't engage at all?

**Educational note:** Non-engagers might need different messaging or may not be your
ideal audience. Consider re-segmenting or win-back campaigns later.

Examples: Re-engagement campaign later, remove from active list, different messaging test.

---

### Q46: Will this campaign feed into other funnels or offers?

**Options:**
- Yes (please describe the customer journey)
- No, this is a standalone campaign

**Educational note:** Strategic campaigns consider the next step. A low-ticket offer
might ascend to high-ticket; a lead magnet might lead to a tripwire; an event might
convert to membership.

---

## Section 13: Learnings & Optimization (Q47–Q49)

### Q47: Have you run similar campaigns before?

**Options:**
- Yes (please describe results and key learnings)
- No, this is our first time

**Educational note:** Past campaign data is gold. What worked? What didn't?

---

### Q48: What will you test or optimize during this campaign?

**Common tests:**
- Ad creative variations
- Landing page headlines
- Email subject lines
- Call-to-action wording
- Pricing/offers
- Audience segments
- Other: _______

**Educational note:** Always test something. Even small improvements compound over time.

---

### Q49: How will you document learnings for future campaigns?

**Options:**
- Campaign retrospective meeting
- Written post-mortem document
- Shared dashboard/tracker
- Not planning to document
- Other: _______

---

# OUTPUT TEMPLATE

Use this template to generate the final Campaign Project Document after all intake
questions have been answered. Replace all bracketed [Q#] references with actual
answers collected during intake.

Generate as a **Word document (.docx)** when the docx skill is available, or as
a **Markdown file (.md)** as fallback. Include a table of contents for the Word version.

---

## Document Structure

### CAMPAIGN PROJECT DOCUMENT

#### Campaign Overview
- **Company:** [Q1]
- **Brand(s):** [Q3]
- **Campaign Name:** [Q4]
- **Campaign Owner:** [Q32]
- **Business Model:** [Q5]
- **Campaign Type:** [Q11 — Primary Goal]
- **Strategy/Funnel:** [Q12]

#### Timeline
- **Start Date:** [Q23]
- **End Date:** [Q24]
- **Critical Milestones:** [Q25]

#### Offer Details
- **Primary Offer:** [Q6 — name and type]
- **Price:** [Q6 — price point]
- **Offer Stack:** [Q17 — all components listed]
- **Total Value vs Price:** [Q18]
- **Key Objections to Address:** [Q19]

#### Target Audience
- **Existing Segments:** [Q7]
- **Target Audience:** [Q8]
- **Exclusions:** [Q9]
- **Segmentation Rules:** [Q10]

#### Campaign Goal & Messaging
- **Primary Goal:** [Q11]
- **Problem Solved:** [Q14 — pain point]
- **Transformation Provided:** [Q14 — desired outcome]
- **Main Hook/Angle:** [Q13]
- **Brand Voice:** [Q37]
- **Campaign Tone:** [Q38]
- **Style References:** [Q39 — brands to emulate]
- **Anti-References:** [Q40 — brands to avoid]

#### Assets & Deliverables Required

**Content Creation:**
[Q15 — Content section formatted as checklist]

**Digital Assets:**
[Q15 — Digital Assets section formatted as checklist]

**Technical Setup:**
[Q15 — Technical section formatted as checklist]

**Paid Advertising:**
[Q15 — Paid Advertising section formatted as checklist]

**Existing Assets Available:** [Q16]

#### Distribution Channels

**Email Marketing:** [Q20 — Email selections]
**Organic Social Media:** [Q20 — Social media selections]
**Paid Advertising:** [Q20 — Paid ad selections]
**Other Channels:** [Q20 — Other channel selections]

**Platform Details:**
- **Email Platform:** [Q21]
- **CRM/Automation Platform:** [Q22]
- **Project Management:** [Q36]

#### Budget
- **Paid Advertising Budget:** [Q26]
- **Total Campaign Budget:** [Q27]
- **Resource Allocation:** [Q28]

#### Success Metrics

**Targets:**
[Q29 — Format each metric with specific numbers. Only include metrics the user
provided; skip any marked N/A.]

**Definition of Campaign Success:** [Q30]

**Tracking & Measurement:** [Q31 — tools and methods]

#### Team & Dependencies

**Team Structure:**
[Q33 — Format as a table or organized list of roles and who fills them.]

**Campaign Team:**
[Q34 — Specific people and their assignments for this campaign.]

**Dependencies & Bottlenecks:**
[Q35 — Format as a watchlist. Include mitigation plans where provided.]

#### Compliance & Legal
- **Requirements:** [Q41]
- **Legal Review:** [Q42]

#### Post-Campaign Strategy

**Buyers/Converters:** [Q43]
**Engaged Non-Buyers:** [Q44]
**Non-Engaged:** [Q45]
**Customer Journey Continuation:** [Q46]

#### Optimization & Learning

**Previous Campaign Insights:** [Q47]
**Testing Plan:** [Q48]
**Documentation Method:** [Q49]

---

## Auto-Generated Task Assignments

Generate task assignments based on the team structure (Q33) and the assets/deliverables
selected (Q15, Q20). Map responsibilities to the roles identified:

**Campaign/Project Management:**
- Overall campaign oversight and coordination
- Timeline management and milestone tracking
- Cross-functional team coordination
- [Add specific tasks based on Q15 selections]

**Content/Copywriting:**
- [List specific deliverables from Q15 content section]
- Messaging aligned to [Q37–Q38 voice/tone]
- Address objections: [Q19]

**Design:**
- [List specific deliverables from Q15 design assets]
- Brand consistency with voice: [Q37]

**Social Media** (only if social platforms selected in Q20):
- Platform-specific content for: [Q20 platforms]

**Paid Advertising** (only if paid ads selected in Q15/Q20):
- Platform setup: [Q20 paid platforms]
- Budget management: [Q26]
- Target ROAS: [Q29 — ROAS metric if provided]
- Testing plan: [Q48]

**Email Marketing** (only if email selected in Q15/Q20):
- Platform: [Q21]
- Segmentation per: [Q8–Q10]
- Target metrics: [Q29 — email metrics if provided]

**Technical/Automation** (only if technical items selected in Q15):
- Platform: [Q22]
- Landing pages: [Q15 digital assets]
- Tracking setup: [Q31]

**Analytics/Data:**
- Tracking implementation: [Q31]
- Dashboard creation
- Regular reporting on: [Q29 metrics]
- A/B test analysis: [Q48]

**Legal/Compliance** (only if applicable per Q41–Q42):
- Review requirements: [Q42]

---

## Critical Success Factors Checklist

Include this checklist at the end of the document. Each item references actual
data from the intake:

✅ **Budget Validation**
- Total budget: [Q27]
- Ad spend: [Q26]
- Budget aligns with: [Q29 revenue targets]

✅ **Timeline Feasibility**
- [Q23–Q24 timeline] allows for:
  - Asset creation: [Q15 deliverables]
  - Review cycles: [Q42 legal review needs]
  - Team capacity: [Q28 resource availability]

✅ **Audience Segmentation**
- Target: [Q8]
- Exclusions respected: [Q9–Q10]
- Segmentation rules enforced

✅ **Measurement Readiness**
- Tracking tools confirmed: [Q31]
- KPIs defined: [Q29]
- Success criteria clear: [Q30]

✅ **Team Alignment**
- Campaign owner assigned: [Q32]
- All roles staffed: [Q33–Q34]
- Dependencies identified: [Q35]

✅ **Asset Completeness**
- Required deliverables listed: [Q15]
- Existing assets catalogued: [Q16]
- Creation timeline realistic

---

## Next Steps

1. **Review & Approval** — Founder/stakeholder review of this document, budget approval, timeline sign-off
2. **Project Setup** — Create project in [Q36], assign all tasks with deadlines, set up tracking dashboard per [Q31]
3. **Kickoff Meeting** — Schedule with all team members from [Q34], review campaign strategy [Q12], clarify dependencies [Q35]
4. **Asset Production** — Begin creation per [Q15 deliverables], follow brand voice guidelines [Q37–Q38], build in review cycles per [Q42]
5. **Technical Setup** — Configure [Q21 email platform], set up automation in [Q22], implement tracking per [Q31]
6. **Pre-Launch** — Complete all legal reviews [Q41–Q42], QA all assets and links, team dry-run of launch sequence
7. **Launch & Monitor** — Execute per [Q23 start date], daily monitoring of [Q29 metrics], execute optimization tests [Q48]
8. **Post-Campaign** — Implement follow-up plans [Q43–Q45], document learnings [Q49], schedule retrospective

---

## Campaign Retrospective Template (Complete Post-Campaign)

Include this blank template at the end for the team to fill in after the campaign:

**Results vs. Goals:**
- Revenue: Actual $_____ vs Goal [Q29 revenue target]
- Conversions: Actual _____ vs Goal [Q29 sales target]
- Leads: Actual _____ vs Goal [Q29 lead target]
- Email Performance: Open _____% (Goal: [Q29]%) | Click _____% (Goal: [Q29]%)
- Ad ROAS: _____x (Goal: [Q29]x)
- Other KPIs: [List actuals vs Q29 targets]

**What Worked Well:** [To be completed]
**What Didn't Work:** [To be completed]
**Unexpected Challenges:** [To be completed]
**Key Learnings:** [To be completed]
**Recommendations for Next Time:** [To be completed]

---

**Document Footer:**
- Document Created: [Current date]
- Last Updated: [Current date]
- Campaign Status: Pre-Launch

---

## Formatting Notes for Output

When generating as a Word document:
- Use Heading 1 for the document title
- Use Heading 2 for major sections (Campaign Overview, Timeline, etc.)
- Use Heading 3 for subsections (Content Creation, Digital Assets, etc.)
- Use tables where data is naturally tabular (team structure, metrics targets)
- Use checkboxes for the Critical Success Factors
- Use bold for field labels, normal weight for values
- Include a table of contents at the top
- Use professional, clean formatting — no color overload

When generating as Markdown:
- Use standard heading hierarchy
- Use checkbox syntax for checklists
- Use tables for structured data
- Keep formatting clean and scannable
