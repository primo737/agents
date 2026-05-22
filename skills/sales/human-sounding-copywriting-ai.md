---
name: human-sounding-copywriting-ai
description: Techniques for making AI-generated copy sound human and natural. Use when humanizing AI-written content.
---

# Building a Human-Sounding Copywriting AI: Complete Implementation Documentation

# Building a Human-Sounding Copywriting AI: Complete Implementation Documentation

Your AI copywriting system's success hinges on one key metric: **whether the output sounds machine-generated**. This documentation outlines a comprehensive framework to eliminate AI indicators, capture authentic brand voices, prevent repetitive patterns, and implement quality control—all tailored for multi-client environments.

## The Core Challenge for AI Copywriters

AI models generate statistically probable text, often defaulting to common patterns, overused phrases, and predictable structures. This results in copy that experienced marketers and increasingly sophisticated readers can easily identify as machine-generated. **73% of consumers report being able to identify AI-generated marketing content**, and this detection rate is rising.

The solution requires addressing four areas simultaneously: eliminating detectable language patterns, capturing authentic brand voices, preventing cross-client sameness, and implementing rigorous quality control. Each section below provides implementable frameworks for system prompts, quality processes, and operational workflows.
* * *

## Section 1: Eliminating AI Tells in Marketing Copy

### The Banned Word List

These words and phrases trigger immediate AI detection. System prompts must explicitly prohibit them:

**High-Priority Banned Words:**
delve, tapestry, realm, harness, unlock, leverage, seamless, robust, cutting-edge, revolutionary, game-changer, transformative, holistic, synergy, paradigm, pivotal, meticulous, unprecedented, elevate, streamline, empower, optimize, scalable, groundbreaking, pioneering, trailblazing, unleash, frictionless, comprehensive, supercharge, turbocharge, unparalleled, next-gen, future-proof, hyper-personalized

**Marketing-Specific Banned Phrases:**
*   "Take your [X] to the next level"
*   "Unlock your potential"
*   "In today's fast-paced world"
*   "Transform your [business/results/life]"
*   "Skyrocket your [conversions/sales]"
*   "Comprehensive suite of solutions"
*   "Robust features"
*   "Premier/leading solution"
*   "It's not about X—it's about Y"

**Transitional Phrase Restrictions:**
Moreover, furthermore, additionally, consequently, it's important to note that, building on this point, with that in mind, in light of this, as such, by the same token. Limit to **one transitional phrase per paragraph maximum**.

### Formula Expressions That Signal AI Writing

AI defaults to predictable rhetorical structures. Ban these patterns:

**"In a world where" Drama Pattern:** "In a world where [scary change], [virtue] becomes [advantage]." Example: "In a world where everyone has AI, taste becomes the only edge."

**"Most People vs. Few Who" Split:** "Most people [lazy thing]. The few who win [disciplined thing]."

**"Stop Doing X, Start Doing Y" Switch:** Simple swap framing that appears profound but says nothing specific.

**"Not This, Not That, But This" Triple:** Creates fake depth with two strawmen before the "insight."

**"The Real Work Is..." Reveal:** "The real [game/battle] isn't [obvious thing]. It's [what 'masters' do]."

### Structural Tells That Expose AI Writing

**Paragraph Uniformity:** AI produces paragraphs of identical length. Human writers naturally vary between 1-6 sentences per paragraph. Your system must enforce variation.

**Sentence Rhythm Flatness:** AI produces sentences averaging 15-20 words consistently. Human writing mixes 5-word punches with 30-word flowing sentences. Implement the Gary Provost principle: "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen. I vary the sentence length, and I create music."

**List Dependency:** AI defaults to bullet points for any complex information. Marketing copy should use narrative paragraphs with occasional lists—maximum **two bullet point sections per piece**, each with 3-5 items.

**Em Dash Overuse:** AI uses em dashes (—) at 3-5x the human rate. Limit to **1-2 per piece maximum** and replace with commas, parentheses, or restructured sentences.

### Tone Patterns That Reveal AI Generation

**Emotional Flatline:** AI maintains a consistent emotional register throughout. Human copy escalates, retreats, surprises. Your output must include emotional variation—frustration in problem sections, excitement in solution reveals, calm authority in proof sections.

**Compulsive Hedging:** AI qualifies everything: "may," "might," "could potentially," "generally speaking," "in many cases." Marketing copy requires conviction. Delete hedging language unless genuine uncertainty exists.

**Excessive Balance:** AI presents "both sides" even when inappropriate for sales copy. Effective marketing takes positions.

**Missing Contractions:** "You will" instead of "you'll," "it is" instead of "it's." Always use contractions in marketing copy—their absence is a primary AI tell.
* * *

## Section 2: Brand Voice Extraction and Cloning System

### The Four Dimensions of Brand Voice

Every brand voice maps onto four spectrums. Document each client's position:

| Dimension | Spectrum | What to Measure |
| ---| ---| --- |
| Formality | Formal ←→ Casual | Contractions, colloquialisms, professional language |
| Humor | Serious ←→ Funny | Wit, jokes, playful metaphors, wordplay |
| Convention | Respectful ←→ Irreverent | Challenging norms vs. conventional approach |
| Energy | Matter-of-fact ←→ Enthusiastic | Emotional intensity, exclamation usage |

### Voice Extraction Methodology

**Step 1: Gather Authentic Samples (Minimum 3-5 Pieces)**

Collect content **written by the client themselves**, not by previous copywriters. Priority sources:
*   Welcome/nurture email sequences (most natural voice)
*   Blog posts or thought leadership pieces
*   Social posts with strong engagement
*   Podcast transcripts or video scripts
*   Personal emails or internal communications

Each sample needs **200+ words** for accurate analysis.

**Step 2: Quantitative Measurement**

Use these free tools to extract measurable metrics:

| Tool | Metrics Captured |
| ---| --- |
| Analyze My Writing | Sentence length average, punctuation frequency, word count patterns |
| Hemingway App | Grade level, readability score |
| Slick Write | Sentence variety, structure analysis |

Document specific numbers: "Average sentence length: 12 words. Grade level: 6th. Comma frequency: 8 per 100 words."

**Step 3: Qualitative Analysis**

Extract these elements from samples:
*   **Personality Adjectives** (3-4 that define the voice)
*   **Signature Phrases** the client uses repeatedly
*   **Words They Never Use** (equally important)
*   **Story Style** (personal anecdotes, customer stories, data-driven)
*   **Punctuation Quirks** (excessive exclamation points, ellipses, parentheticals)
*   **Cultural References** appropriate to their audience

**Step 4: Create Calibration Pairs**

For each client, document:
*   One message they would **love** (perfect voice match)
*   One message they would **never send** (anti-example)
*   Extract explicit rules from the contrast

### Brand Voice Documentation Template

```yaml
CLIENT: [Name]
DATE: [Last updated]

VOICE SUMMARY (2 sentences):
[How this brand sounds in conversational description]

PERSONALITY ADJECTIVES:
1. [Primary trait]
2. [Secondary trait]
3. [Tertiary trait]
4. [Optional fourth trait]

FOUR DIMENSIONS:
- Formality: [1-10 scale, with description]
- Humor: [1-10 scale, with description]
- Convention: [1-10 scale, with description]
- Energy: [1-10 scale, with description]

QUANTITATIVE METRICS:
- Average sentence length: [X words]
- Grade level: [X]
- Contractions: [Yes/No/Limited]
- Exclamation points: [Frequency guideline]

VOCABULARY:
Words to use: [List preferred terms]
Words to avoid: [List banned terms]
Signature phrases: [Recurring expressions]

TONE VARIATIONS BY CHANNEL:
- Email: [Specific adjustments]
- Social: [Specific adjustments]
- Sales pages: [Specific adjustments]
- Ads: [Specific adjustments]

ON-BRAND EXAMPLES:
[Paste 3+ examples with annotations explaining why they work]

OFF-BRAND EXAMPLES:
[Paste 3+ examples with annotations explaining why they fail]

CALIBRATION PAIR:
Perfect: "[Example they would love]"
Never: "[Example they would reject]"
```

### Maintaining Voice Across Content Types

**Core Principle:** Voice stays constant, tone flexes.

The brand personality remains identical across all touchpoints. What changes is the emotional register appropriate to context:

| Content Type | Tone Adjustment |
| ---| --- |
| Social Media | More casual, personality-forward, shorter |
| Email Marketing | Personal, direct, conversational |
| Blog Posts | Authoritative but approachable |
| Sales Pages | Energetic, benefit-focused, persuasive |
| Customer Support | Empathetic, solution-oriented |
| Legal/Technical | More formal, precise |

Your system prompts must specify both the permanent voice characteristics AND the contextual tone adjustments.
* * *

## Section 3: Anti-Repetition Framework

### Framework Rotation System

Never use the same copywriting framework twice in succession for the same client. Rotate systematically:

**Week 1: AIDA** (Attention → Interest → Desire → Action)
**Week 2: PAS** (Problem → Agitate → Solution)
**Week 3: Hook-Story-Offer**
**Week 4: BAB** (Before → After → Bridge)
**Week 5: PPPP** (Promise → Picture → Proof → Push)

Track which framework was used last and enforce rotation in your system.

### Variation Techniques Within Each Framework

**AIDA Variations:**

_Attention Phase Options:_
*   Problem-centric headline ("Your SaaS website is stopping you from doubling your MRR")
*   Benefit-driven headline ("Lots to love. Less to spend.")
*   Curiosity-gap headline (pattern interrupt, unexpected statement)
*   Statistical opener ("73% of email campaigns fail to convert")
*   Contrarian statement (challenges common wisdom)

_Interest Phase Options:_
*   Case study format
*   Bullet point benefits
*   Narrative storytelling
*   Social proof integration
*   Comparison framework

**PAS Variations:**

_Problem Phase Options:_
*   Direct statement ("Can't do without tea but are lactose intolerant?")
*   Question format ("Why do 68% of sales emails get ignored?")
*   Scenario-based ("We've all been there. In the rut.")
*   Statistical problem ("$1.2 trillion lost annually to poor email follow-up")
*   Sympathy-first ("I know how frustrating it feels when...")

_Agitate Phase Options:_
*   Consequence stacking (listing escalating negative outcomes)
*   Future projection of continued problem
*   Financial impact quantification
*   Time waste calculation
*   Social comparison pain

### Hook Type Rotation

Track and rotate through these hook categories:

1. **Question Hooks** ("Why do most landing pages convert under 2%?")
2. **Statistic Hooks** ("47% of buyers view 3-5 pieces of content before engaging")
3. **Story Hooks** ("Last Tuesday, Sarah hit send on her 47th cold email. Zero replies—again.")
4. **Contrarian Hooks** ("Email marketing isn't dead. YOUR email marketing is dead.")
5. **Promise Hooks** ("Lose 30 lbs without giving up foods you love")
6. **Empathy Hooks** ("If you're reading this, you've probably tried everything")
7. **Curiosity Gap Hooks** ("The one metric nobody tracks—that predicts 90% of churn")

**Implementation:** Maintain a database of hooks used per client. Before generating new content, check which hook types have been used in the past 30 days and select from underused categories.

### Sentence-Level Variation Requirements

**Rhythm Variation Rules:**
*   Never use more than 2 sentences of similar length consecutively
*   Each paragraph must contain at least one sentence under 8 words
*   Each piece must contain at least one sentence over 25 words
*   Opening sentences should be punchy (under 10 words)

**Structure Variation Rules:**
*   Vary first words (don't start multiple sentences with "The," "It," "This," or "I")
*   Mix simple, compound, and complex sentence structures
*   Include at least 2 questions per 500 words
*   Use occasional fragments for emphasis

**Opening Line Database:**

Track first lines used for each client. Never repeat an opening structure within 60 days. Build a library of opening templates:

*   Direct address: "You've tried everything."
*   Question: "What if I told you..."
*   Story: "Last month, a client called me in a panic."
*   Statistic: "Only 3% of visitors convert."
*   Contrarian: "Forget everything you've heard about..."
*   Promise: "By the end of this email, you'll know exactly..."

### CTA Variation Library

Rotate call-to-action phrasing:

**Direct Imperatives:** "Buy now," "Start today," "Get instant access"
**First-Person CTAs:** "Start my free trial" (90% higher conversion than "Start your free trial")
**Question CTAs:** "Ready to get started?"
**Value-Reinforcing CTAs:** "Show me how to double my conversions"
**Soft CTAs:** "Learn more," "See how it works"
**Urgency CTAs:** "Claim your spot before Friday"
* * *

## Section 4: Natural Marketing Copy Guidelines

### What Makes Copy Sound Human

**Specificity Over Generality:** Replace "many businesses" with "47 SaaS companies." Replace "significant improvement" with "2.4x increase in 30 days." Concrete details signal human authorship.

**Personal Anecdotes:** Include first-hand experience, even if brief. "When I tested this last month..." or "A client called me frustrated because..." Personal stories are nearly impossible for AI to fabricate convincingly.

**Opinions and Positions:** AI hedges. Humans take stands. "This is the best approach for early-stage startups" beats "This approach may be suitable for some businesses."

**Strategic Imperfection:** Start sentences with "And" or "But." Use fragments. Include parenthetical asides. These "rule breaks" signal human writing.

**Conversational Markers:** "Here's the thing," "Look," "The truth is," "Sound familiar?" These bucket brigade phrases create natural flow.

### The Kitchen Table Test

Read your copy aloud at the kitchen table. If a friend would cringe or tune out, rewrite it. Human conversation doesn't include "leverage synergies" or "comprehensive solutions."

### Techniques from Legendary Copywriters

**David Ogilvy's Principles:**
*   Tell the truth but make truth fascinating
*   Research obsessively before writing
*   Write as if writing to one person
*   Headlines carry 80% of the ad's weight
*   Never use jargon—it's the hallmark of a pretentious ass

**Gary Halbert's Approach:**
*   Write with everyday language that sells
*   Weave compelling narratives
*   Use curiosity hooks and benefits-focused headlines
*   Write fast without editing, then edit ruthlessly

**Eugene Schwartz's Techniques:**
*   Short sentences create easy reading
*   Direct "you" address—make reader imagine they've already decided
*   Channel desire: identify it, acknowledge it, show how product satisfies it

### Personality Injection Methods

**The 3 T's Framework:**
*   **Tempo:** Cadence and rhythm (fast-paced punchy vs. flowing elaborate)
*   **Texture:** Word choices and vocabulary level
*   **Tone:** Emotional quality (warm, witty, direct, playful)

**Practical Techniques:**
*   Parenthetical asides that add personality
*   Sound words integrated naturally ("ugh," "yep," "ouch")
*   Self-deprecation and honest acknowledgments
*   Specific cultural references the audience shares
*   Opinion and perspective rather than neutral observation
* * *

## Section 5: Quality Control and Detection System

### The 16-Point Naturalness Scorecard

Score each piece before delivery:

**Accuracy (3 Points)**

| Criteria | Score |
| ---| --- |
| Free from factual errors and AI hallucinations | /1 |
| Contains natural human variation (not perfect grammar everywhere) | /1 |
| Meets technical requirements (format, length, SEO if applicable) | /1 |

**Clarity (3 Points)**

| Criteria | Score |
| ---| --- |
| Logical structure with compelling argument | /1 |
| Point obvious from start and throughout | /1 |
| Every sentence easy to read with varied structure | /1 |

**Authority (3 Points)**

| Criteria | Score |
| ---| --- |
| Appropriate technical terms for audience level | /1 |
| Claims supported by specific evidence or details | /1 |
| Free from waffle, hyperbole, clichés, and AI buzzwords | /1 |

**Empathy (3 Points)**

| Criteria | Score |
| ---| --- |
| Evidence writer understands target audience | /1 |
| Avoids assumptions about audience | /1 |
| Content and tone appropriate to audience knowledge | /1 |

**Humanization (4 Points)**

| Criteria | Score |
| ---| --- |
| Offers original insight or value (not generic) | /1 |
| Written in authentic brand voice | /1 |
| Engaging, enjoyable, incites action | /1 |
| Free from detectable AI patterns and tells | /1 |

**Scoring Thresholds:**
*   16/16: Ready to deliver
*   13-15/16: Minor revisions needed
*   10-12/16: Significant humanization required
*   Below 10: Rewrite recommended

### Content-Type Specific Checklists

**Email Marketing Checklist:**
- [ ] Subject line has personality and avoids generic phrasing
- [ ] Opening line is NOT "I hope this finds you well"
- [ ] Conversational tone with contractions throughout
- [ ] Personal stories or specific customer examples included
- [ ] Sentence length varies (mix short punchy + longer)
- [ ] CTA is clear and uses first-person when appropriate
- [ ] Brand voice consistent with other touchpoints
- [ ] No more than one transitional phrase per paragraph
- [ ] Em dashes limited to 1-2 maximum

**Landing Page Checklist:**
- [ ] Headline is specific and outcome-focused
- [ ] Subheadline provides unique angle or specific benefit
- [ ] Social proof is genuine with specific details (names, numbers, outcomes)
- [ ] Bullet points vary in length and structure
- [ ] FAQs address real objections in customer language
- [ ] CTAs use varied phrasing throughout page
- [ ] No repetitive sentence structures
- [ ] Benefits include specific numbers and timeframes

**Sales Funnel Sequence Checklist:**
- [ ] Each email has distinct voice/angle (not template-like)
- [ ] Progressive narrative builds on previous emails
- [ ] Personal stories are detailed and specific
- [ ] Objection handling uses real customer language
- [ ] Urgency language is authentic, not formulaic
- [ ] Different opening hooks across the sequence
- [ ] Voice consistency maintained throughout
- [ ] Framework varies across emails

**Ad Copy Checklist:**
- [ ] Hook is specific and intriguing
- [ ] Language matches audience slang/vernacular
- [ ] Emotional trigger is authentic
- [ ] CTA feels urgent but not formulaic
- [ ] No AI filler phrases
- [ ] Character count optimized for platform

### AI Detection Workflow

**Phase 1: Automated Check**
Run through [Originality.ai](http://Originality.ai) or GPTZero. Flag if AI probability exceeds 30%.

**Phase 2: Manual Pattern Scan**
*   Count em dashes (flag if >2)
*   Count transitional phrases (flag if >1 per paragraph)
*   Check for banned word list violations
*   Verify sentence length variation
*   Confirm brand voice alignment

**Phase 3: Humanization Pass**
If flagged, apply these edits:
1. Add specific examples, names, and numbers
2. Inject personal perspective or anecdote
3. Vary sentence structure dramatically
4. Add strategic imperfections (fragments, informal transitions)
5. Remove predictable transitional phrases
6. Include conversational markers

**Phase 4: Final Detection Check**
Re-run through detector. Target <20% AI probability.

### Before/After Humanization Examples

**Email Opening:**
*   Before: "In today's fast-paced digital landscape, businesses are constantly seeking innovative solutions to stay ahead of the competition."
*   After: "Last week, I watched a client's campaign tank. Here's what I learned."

**Value Statement:**
*   Before: "Our comprehensive platform offers a wide range of features designed to optimize your workflow and enhance productivity."
*   After: "Three clicks. That's all it takes to build a landing page that converts at 12%+."

**Call to Action:**
*   Before: "Take the next step in your journey toward success by scheduling a consultation today."
*   After: "Got 15 minutes this week? Let's figure out if this makes sense for you."

**Testimonial Introduction:**
*   Before: "Our satisfied customers have experienced remarkable results."
*   After: "Sarah runs a bakery in Austin. Here's what happened 90 days after she joined:"
* * *

## Section 6: Prompt Engineering System

### Master System Prompt Template

```diff
You are an expert direct-response copywriter with 15 years of experience in [INDUSTRY]. You specialize in conversion-focused copy that sounds authentically human.

CORE RULES:
- Use active voice (95%+ of sentences)
- Always use contractions (you'll, we're, it's)
- Vary sentence length dramatically (mix 5-word and 25-word sentences)
- Lead with benefits, follow with features
- Address objections proactively
- Take clear positions—avoid hedging language

BANNED ELEMENTS:
- Words: [INSERT COMPLETE BANNED WORD LIST]
- Phrases: "In today's world," "Take it to the next level," "Game-changer"
- Patterns: "It's not about X—it's about Y" parallelism
- Punctuation: More than 2 em dashes per piece
- Structures: More than 2 bullet point sections per piece

VOICE REQUIREMENTS:
[INSERT CLIENT-SPECIFIC VOICE DOCUMENTATION]

OUTPUT STANDARDS:
- Every piece must include at least one specific example with concrete details
- Opening sentences must be under 10 words
- Include at least one question per 200 words
- End paragraphs with short, punchy sentences
- Never start more than 2 sentences with the same word
```

### Content-Type Prompt Templates

**Email Prompt Template:**

```sql
Write a [WORD COUNT]-word email for [AUDIENCE SEGMENT].
Goal: [SPECIFIC ACTION]
Framework: [AIDA/PAS/HSO—specify which]

Subject line requirements:
- Under 50 characters
- Hook type: [QUESTION/STATISTIC/CURIOSITY/URGENCY]

Body requirements:
- Opening hook addressing [SPECIFIC PAIN POINT]
- Do not open with "I hope this finds you well" or similar
- Include [SPECIFIC PROOF ELEMENT]
- CTA: [SPECIFIC ACTION using first-person]

Voice: [PASTE CLIENT VOICE SUMMARY]
Avoid: [CLIENT-SPECIFIC BANNED PHRASES]

Example of ideal style:
"[PASTE ON-BRAND EXAMPLE]"
```

**Landing Page Section Prompt Template:**

```less
Create [SECTION TYPE] for a landing page targeting [AUDIENCE].
Product: [DESCRIPTION WITH KEY DIFFERENTIATORS]
Framework: [SPECIFY]

Structure:
1. Headline: [OUTCOME-FOCUSED, SPECIFIC BENEFIT]
2. Subhead: [UNIQUE ANGLE OR PROOF ELEMENT]
3. Body: [WORD COUNT], narrative format, max 1 bullet list
4. CTA: [ACTION + URGENCY MECHANISM]

Voice: [CLIENT VOICE DOCUMENTATION]
Previous hooks used (avoid): [LIST RECENT HOOKS]
```

### Multi-Step Campaign Workflow

**Step 1 - Research Prompt:**

```sql
Describe the demographics, psychographics, pain points, and buying motivations of [TARGET AUDIENCE] interested in [PRODUCT]. Include specific language they use when describing their problems. Present as a comprehensive persona profile.
```

**Step 2 - Messaging Strategy Prompt:**

```sql
Based on the persona above, develop 3 distinct messaging angles. For each:
- Key message (one sentence)
- Primary emotional trigger
- Main objection it addresses
- Proof element to include
```

**Step 3 - Content Outline Prompt:**

```css
Using messaging angle [NUMBER], create a content outline for [CONTENT TYPE] following [FRAMEWORK].
- Specify hook type
- Outline each section with 1-sentence summary
- Note where proof elements and CTAs will appear
```

**Step 4 - Draft Creation Prompt:**

```less
Write the full [CONTENT TYPE] following this outline: [PASTE OUTLINE]
Apply brand voice: [PASTE VOICE GUIDELINES]
Avoid these recently used hooks: [LIST]
Framework: [SPECIFY]
```

**Step 5 - Humanization Review Prompt:**

```sql
Review this draft for:
- Brand voice alignment (reference: [VOICE DOC])
- AI tells (check for banned words and patterns)
- Sentence variety (flag if consecutive sentences similar length)
- Specificity (flag any vague claims without concrete details)

Provide revised version with tracked changes and rationale.
```

### Negative Prompting Techniques

**Word-Level Exclusions:**

```sql
DO NOT use these words: [COMPLETE BANNED LIST]
Replace any of these with specific, concrete alternatives.
```

**Structure Exclusions:**

```diff
DO NOT:
- Exceed [X] words
- Use more than 2 em dashes
- Start more than 2 sentences the same way
- Include more than 1 transitional phrase per paragraph
- Use more than 2 bullet point sections
- Use parallel "It's not X, it's Y" structures
```

**Pattern-Breaking Instructions:**

```sql
Write with high perplexity (unpredictable word choices) and burstiness (varied sentence structures). Mix short punchy sentences with longer explanatory ones. Include at least one fragment for emphasis. Ask the reader at least one question. Use casual, everyday language with contractions throughout.
```

* * *

## Section 7: Multi-Client Implementation

### Client Differentiation System

For each client, maintain:

1. **Voice Guide** (using template from Section 2)
2. **Hook History Database** (track what's been used)
3. **Opening Line Log** (prevent repetition)
4. **Framework Rotation Tracker** (enforce variety)
5. **Banned Phrase List** (includes both universal AI tells AND client-specific restrictions)

### Cross-Client Safeguards

**Unique Angle Requirement:** Before generating content, prompt must include:

```kotlin
This content is for [CLIENT NAME].
Recent hooks used for this client: [LIST]
Hooks to avoid (used for other clients this week): [LIST]
Ensure this content has a distinct angle from: [BRIEF DESCRIPTION OF RECENT SIMILAR CONTENT]
```

**Voice Isolation:** Never reference or draw from other client voice guides in the same session. Clear context between clients.

**Weekly Variation Audit:** Review all content produced across clients. Flag any structural similarities, repeated hooks, or pattern convergence.

### Quality Workflow for High-Volume Production

```yaml
STEP 1: AI Draft Generation
↓
STEP 2: Automated Detection Check (flag if >30% AI probability)
↓
STEP 3: Checklist Review (content-type specific)
↓
STEP 4: Humanization Pass (if flagged or score <13/16)
↓
STEP 5: Voice Alignment Review (against client guide)
↓
STEP 6: Final Detection Check (target <20% AI probability)
↓
STEP 7: Delivery
```

### Recommended Tools

| Tool | Function | Use Case |
| ---| ---| --- |
| [Originality.ai](http://Originality.ai) | AI detection | Pre-delivery quality check |
| Hemingway App | Readability analysis | Voice extraction metrics |
| Analyze My Writing | Sentence/punctuation patterns | Voice documentation |
| Slick Write | Sentence variety analysis | Naturalness verification |

* * *

## Implementation Priority

**Week 1:** Implement banned word list in all system prompts. Create 16-point checklist. Set up detection workflow.

**Week 2:** Build voice documentation template. Extract voice for existing clients using methodology.

**Week 3:** Implement framework and hook rotation tracking. Create opening line database.

**Week 4:** Full system integration. Train team on humanization techniques. Begin weekly variation audits.

**Ongoing:** Monthly review of detection rates, checklist updates as AI detection evolves, voice guide refinements based on client feedback.

This documentation provides a complete system for producing marketing copy that passes human detection while maintaining brand authenticity and preventing cross-client repetition. The frameworks are designed for immediate implementation into system prompts, quality control processes, and operational workflows.

