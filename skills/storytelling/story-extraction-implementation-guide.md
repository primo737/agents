---
name: story-extraction-implementation-guide
description: Step-by-step guide for implementing story extraction processes. Use when setting up story extraction workflows.
---

# Story Extraction Bot - Complete Implementation Guide

# Story Extraction Bot - Complete Implementation Guide

## What This Bot Does

The Story Extraction Bot analyzes speaking transcripts and produces **two comprehensive outputs**:

### 1\. 📖 Book Content Package

**Purpose**: Provide actual content for book chapters
*   Full stories in narrative form
*   Speaker's authentic voice preserved
*   Teaching content maintained
*   Transitions and connective elements included
*   Ready for book editing (not analysis)

### 2\. 🗺️ Speaking Analysis Package

**Purpose**: Provide strategic tools for story mapping
*   Story categorization and tagging
*   Strategic analysis of story placement
*   4MAT framework mapping
*   Memory triggers for speech recreation
*   Talk architecture visualization
* * *

## The Documents You've Been Given

### Core Files

1. **`story_extraction_bot_prompt.md`**
    *   The main instructional prompt for the bot
    *   Complete instructions on what to extract and how
    *   Defines both output formats
    *   **USE THIS**: As the system prompt for your AI tool
2. **`output_comparison_guide.md`**
    *   Visual explanation of the two outputs
    *   Shows what good vs. bad looks like
    *   Side-by-side comparisons
    *   **USE THIS**: To understand what you should get
3. **`output_template.md`**
    *   Exact structure the bot should produce
    *   Templates for both documents
    *   Copy-paste format guide
    *   **USE THIS**: As a reference when reviewing bot outputs
* * *

## How to Implement This

### Step 1: Set Up Your Bot

**Option A: Using Claude (or similar AI)**

```sql
1. Copy the entire content from story_extraction_bot_prompt.md
2. Paste it as your system instructions
3. Feed it your transcript
4. Request both documents explicitly
```

**Option B: Using a Custom Tool**

```markdown
1. Use the prompt as your processing instructions
2. Build two output templates
3. Ensure both are always generated
4. Store separately for different use cases
```

### Step 2: Test the Bot

**Good Test**: Feed it a transcript and check:
*   ✅ Did you get full story narratives? (Book content)
*   ✅ Did you get strategic analysis? (Speaking analysis)
*   ✅ Is the speaker's voice preserved?
*   ✅ Are stories complete, not summarized?
*   ✅ Are tags and categories included?

**Bad Output Signs**:
*   ❌ Stories reduced to bullet points
*   ❌ Only one output document
*   ❌ Voice stripped away for "proper" grammar
*   ❌ Teaching separated from narrative
*   ❌ No full narrative provided

### Step 3: Organize Your Outputs

**For Book Writing**:

```css
📁 Book_Manuscript/
📁 Chapter_Drafts/
📄 Chapter_01_Content.md (from Book Content Package)
📄 Chapter_02_Content.md
📄 Chapter_03_Content.md
📁 Story_Raw/
📄 [All extracted stories in full]
```

**For Speaking/Story Mapping**:

```plain
📁 Story_Bank/
📁 By_Category/
📄 Origin_Stories.md
📄 Paradigm_Shift_Stories.md
📄 Hero_Journey_Stories.md
📁 By_Duration/
📄 Short_Stories.md
📄 Medium_Stories.md
📄 Long_Stories.md
📁 Analysis/
📄 Talk_Architecture_Maps.md
📄 Strategic_Insights.md
```

* * *

## Understanding the Frameworks

### Story Types You'll Find

**Strategic Categories** (from your documents):
*   Origin Story: Your "why" and genesis moment
*   Investment Story: Your journey and credentials
*   Testimonial/Case Study: Proof through others
*   Moral Story: Clear ethical lesson
*   Instructional Story: Teaching through experience
*   Paradigm Shift: Changing preconceptions
*   Allegorical/Metaphorical: Complex ideas made simple
*   Hero's Journey: Transformation through challenge

**Structural Types**:
*   Saga Story: One long story throughout
*   Multi-story: Multiple shorter stories
*   "Nothing Stories": Ordinary moments with profound lessons

### 4MAT Framework Explained

**WHY** (Motivator - Context & Reason)
*   Creates the need to know
*   Establishes relevance
*   Answers "Why should I care?"

**WHAT** (Teacher - Data & Information)
*   Provides the core content
*   Presents the framework
*   Gives facts and evidence

**HOW TO** (Coach - Procedure)
*   Shows the step-by-step
*   Makes it actionable
*   Enables application

**WHAT IF** (Mentor - Applications)
*   Explores complex scenarios
*   Handles challenging questions
*   Shows advanced applications

### Talk Structure (Speech Mapping)

**F-15**: Opening/Launch (First 15 minutes or %)
*   Hook story
*   Establish credibility
*   Create intrigue
*   Promise value

**CORE POINTS**: Middle (3-5 main ideas)
*   Each point has 2-3 story options
*   Teaching anchored by stories
*   Logical or emotional progression

**L-15**: Closing/Landing (Last 15 minutes or %)
*   Recap key points
*   Call to action
*   Memorable close
* * *

## The Critical Difference

### What Your Current Output Was Doing (WRONG):

```markdown
## Story: The Billionaire & The Dog Walker
### Summary
A billionaire realizes his dog walker might be happier.
### Memory Triggers
- Billionaire character
- Dog walker character
- Happiness question
```

**Problem**: This is USELESS for book writing! Where's the story?!

### What the Bot Should Do (CORRECT):

**BOOK CONTENT:**

```markdown
You know what's wild? I once met a billionaire who told me something that completely changed how I think about success. This guy had everything—multiple businesses, properties around the world, more money than he could spend in three lifetimes. And you know what he said to me? "I think my dog walker is happier than I am." [Full story continues with every detail...]
```

**SPEAKING ANALYSIS:**

```markdown
## Strategic Analysis
- Category: Paradigm Shift
- Position: F-15 (Hook)
- 4MAT: WHY component
- Purpose: Challenge assumptions about wealth
- Transformation: Success ≠ Money to Success = Needs Met
### Memory Triggers
- Billionaire with everything
- Dog walker with little
- The comparison question
- Sets up Six Needs framework
```

* * *

## Common Mistakes to Avoid

### ❌ Mistake 1: Summarizing Instead of Preserving

**Wrong**: "The speaker tells a story about a billionaire and a dog walker."
**Right**: [The actual story in full narrative form]

### ❌ Mistake 2: Separating Teaching from Story

**Wrong**: Story in one section, teaching in another
**Right**: Keep them together as they were delivered

### ❌ Mistake 3: Cleaning Up the Voice Too Much

**Wrong**: Making it grammatically perfect but losing authenticity
**Right**: Keep "you know," "I mean," and conversational elements

### ❌ Mistake 4: Only Providing One Output

**Wrong**: Just the analysis OR just the content
**Right**: Both every single time

### ❌ Mistake 5: Ignoring Transitions

**Wrong**: Stories without showing how they connect
**Right**: Include "Now here's where this gets interesting..."
* * *

## How to Use the Outputs

### For Book Writing:

1. **First Draft**:
    *   Take Book Content Package
    *   Arrange stories in logical chapter order
    *   Add any needed transitions
    *   Light editing for print
2. **Identify Gaps**:
    *   Look at "Content Gaps to Fill" section
    *   Note where additional stories are needed
    *   Find places for data/research
3. **Create Chapter Structure**:
    *   Use "Recommended Chapter Structure"
    *   Follow "Story Connections Map"
    *   Build a cohesive narrative arc

### For Story Mapping:

1. **Build Story Inventory**:
    *   Use tags to categorize stories
    *   Create a searchable database
    *   Note duration options
2. **Map to Talk Structure**:
    *   F-15: Which stories work as hooks?
    *   Core: Which stories prove which points?
    *   L-15: Which stories close powerfully?
3. **Create Flexibility**:
    *   Identify 2-3 story options per point
    *   Know which to use for different audiences
    *   Have short and long versions ready
* * *

## Quality Checklist

Before accepting output from the bot, verify:

### Book Content Package ✅
- [ ] Full stories in narrative form
- [ ] Speaker's voice preserved
- [ ] Teaching embedded naturally
- [ ] Transitions included
- [ ] Multiple pages of actual content
- [ ] Ready to edit for book

### Speaking Analysis Package ✅
- [ ] Strategic categorization complete
- [ ] Tags for all stories
- [ ] 4MAT mapping included
- [ ] Memory triggers (not full story)
- [ ] Talk architecture mapped
- [ ] Alternative applications listed

### Both Packages ✅
- [ ] Stories identified correctly
- [ ] Context preserved
- [ ] Emotional beats noted
- [ ] Quality insights provided
- [ ] Actionable recommendations
* * *

## Pro Tips

### For Better Book Content:

1. **Preserve emotional pauses**: "And then... [pause] ...everything changed."
2. **Keep setup intact**: Context matters as much as the story
3. **Don't skip "small" details**: They create authenticity
4. **Include internal monologue**: "I remember thinking..."
5. **Show the journey**: Not just the destination

### For Better Story Mapping:

1. **Tag generously**: More tags = easier finding
2. **Note duration ranges**: "2-3 min" or "could be 5-20 min"
3. **Identify story families**: Related stories that work together
4. **Track what works**: Note audience responses if available
5. **Keep updating**: Add new contexts as you discover them

### For Both:

1. **Analyze patterns**: What makes your stories unique?
2. **Note gaps**: What story types are you missing?
3. **Track evolution**: How do your stories improve over time?
4. **Cross-reference**: How do stories support each other?
5. **Stay organized**: Consistent filing system from day one
* * *

## Next Steps

### Immediate Actions:

1. ✅ Review all three guide documents
2. ✅ Set up your bot with the main prompt
3. ✅ Test with one transcript
4. ✅ Verify you get both outputs
5. ✅ Check output quality against templates

### Ongoing Process:

1. 📝 Feed transcripts regularly
2. 📚 Organize outputs into book and story bank
3. 🔄 Refine and iterate
4. 📊 Track patterns and insights
5. ✍️ Use content for both book and talks

### Building Your Book:

1. 🎯 Start with best stories (highest quality transcripts)
2. 📖 Arrange into chapter themes
3. ✂️ Edit for print (but keep voice!)
4. 🔗 Add transitions between chapters
5. 📝 Fill identified content gaps

### Growing Your Story Bank:

1. 🗂️ Tag and categorize everything
2. 🎭 Practice telling with memory triggers
3. 📊 Track which stories work best where
4. 🔄 Develop multiple versions
5. 🎯 Build flexibility (2-3 options per point)
* * *

## Troubleshooting

### "The bot is summarizing instead of preserving!"
➡️ Emphasize in your prompt: "Include FULL narrative as spoken"
➡️ Add: "This is for book writing, not analysis"
➡️ Show an example of what you want

### "I'm only getting one output"
➡️ Explicitly request both documents
➡️ Say: "I need the Book Content AND Speaking Analysis"
➡️ Reference the template structure

### "The voice sounds too formal"
➡️ Instruct: "Preserve conversational elements"
➡️ Add: "Keep phrases like 'you know' and 'I mean'"
➡️ Emphasize: "Authenticity over grammar"

### "Stories are broken into pieces"
➡️ Clarify: "Keep each story as one complete narrative"
➡️ Add: "Include beginning, middle, and end together"
➡️ Specify: "Don't separate story from teaching"
* * *

## Success Metrics

You'll know it's working when:

### For Book Writing ✨
*   You can copy/paste content directly into the manuscript
*   The voice sounds like you speaking
*   Stories feel complete and engaging
*   Teaching flows naturally
*   Minimal editing needed

### For Story Mapping 🎯
*   You can quickly find stories by tag
*   Strategic insights help you improve
*   Flexibility is built in
*   Patterns become clear
*   Talk preparation is faster
* * *

## Final Reminder

**The bot serves TWO masters:**

👤 **The Writer** needs: Full stories, authentic voice, complete content

🎤 **The Speaker** needs: Strategic analysis, memory triggers, mapping tools

Give each what they need. Never sacrifice one for the other. Both outputs are essential.
* * *

## Questions to Ask Yourself

Before you start:
*   ✅ Do I understand the difference between the two outputs?
*   ✅ Do I have my filing system ready?
*   ✅ Do I know how I'll use each output?

After first output:
*   ✅ Did I get full narratives for the book?
*   ✅ Did I get strategic analysis for speaking?
*   ✅ Is the quality what I expected?

Ongoing:
*   ✅ Am I organizing both outputs effectively?
*   ✅ Am I using the book content for writing?
*   ✅ Am I using the analysis for story mapping?
*   ✅ Am I seeing patterns and improving?
* * *

## You're Ready! 🚀

You now have:
1. ✅ The complete bot prompt
2. ✅ Clear examples of good output
3. ✅ Template structure to follow
4. ✅ Understanding of both purposes
5. ✅ Implementation guide
6. ✅ Troubleshooting help

**Go extract those stories and write that book!**

Remember: The goal is to preserve your speaking genius on the page while also building a strategic story bank for future talks. This bot helps you do both.

