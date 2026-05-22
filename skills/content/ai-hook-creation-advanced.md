---
name: ai-hook-creation-advanced
description: Advanced AI hook creation techniques for maximum engagement. Use for sophisticated hook development.
---

# Interactive Template for AI Hook Creation

# Interactive Template for AI Hook Creation

## Step 1: Initial Prompt

Start by using this template to instruct the AI:

```markdown
I will help you create an effective hook for your content using a proven 3-step formula. First, I need some essential information. Please answer these questions:

1. What type of content do you need a hook for? (Video, blog post, social media post, etc.)
2. What is your content specifically about? (Main topic or subject)
3. Who is your target audience?
4. What is the main benefit or pain point your content addresses?
5. What is something people already know or believe about this topic?
6. What surprising insight or unexpected information will you reveal?

I'll wait for your answers before proceeding with creating the hook.
```

## Step 2: Response Template for AI

After receiving answers, the AI should confirm understanding and outline next steps:

```markdown
Thank you for providing those details. Let me confirm what I understand:

- Content Type: [their answer]
- Topic: [their answer]
- Target Audience: [their answer]
- Key Benefit/Pain Point: [their answer]
- Known Information: [their answer]
- Surprising Element: [their answer]

Would you like me to proceed with creating your hook using the 3-step formula? I'll create:
1. Context Lean (Opening that establishes topic and interest)
2. Scroll Stop Interjection (Pattern interruption)
3. Contrarian Snapback (Unexpected insight)

I can also include:
- Text overlay suggestions
- Visual/motion recommendations [if for video]
- Multiple variations for testing

Please confirm if you'd like me to proceed and mention any specific requirements for your hook.
```

## Step 3: Hook Creation Template

Only after confirmation, use this template to create the hook:

```yaml
Based on your information, here's your hook using the 3-step formula:

1. Context Lean: [Insert hook opening that establishes topic and gets viewer interest]
   - Why this works: [Brief explanation]

2. Scroll Stop Interjection: [Insert pattern interruption]
   - Why this works: [Brief explanation]

3. Contrarian Snapback: [Insert unexpected insight]
   - Why this works: [Brief explanation]

Additional Elements:
- Text Overlay Suggestion: [3-5 words maximum]
- Visual Recommendations: [If applicable]
- Alternative Version: [Optional]

Would you like me to:
A) Refine any part of this hook
B) Create additional variations
C) Provide more specific recommendations for your platform
```

## Example Interaction

**USER:** "I need help creating a hook for my content."

**AI:**

```verilog
I will help you create an effective hook for your content using a proven 3-step formula. First, I need some essential information. Please answer these questions:

1. What type of content do you need a hook for? (Video, blog post, social media post, etc.)
2. What is your content specifically about? (Main topic or subject)
[Continue with questions 3-6]

I'll wait for your answers before proceeding with creating the hook.
```

**USER:**

```markdown
1. Video
2. Productivity app tutorial
3. Busy professionals
4. Saves 2 hours daily on task management
5. Most people use to-do lists
6. Traditional to-do lists actually reduce productivity
```

**AI:**

```dpr
Thank you for providing those details. Let me confirm what I understand:

- Content Type: Video tutorial
- Topic: Productivity app for better task management
- Target Audience: Busy professionals
- Key Benefit: Save 2 hours daily on task management
- Known Information: Most people rely on to-do lists
- Surprising Element: Traditional to-do lists reduce productivity

Would you like me to proceed with creating your hook using the 3-step formula?
[Continue with template]
```

## Handling Unclear Responses

### When Answers Are Vague

If a user provides vague answers, use these follow-up templates:

1. **For Unclear Content Type:**

```plain
I notice you mentioned [their vague answer]. To create the most effective hook, could you specify:
- Is this for social media, video, blog, or another format?
- Which platform will this appear on?
- What's the expected length/duration?
```

2. **For Vague Topic:**

```plain
You mentioned [their topic]. To focus your hook properly, could you clarify:
- What specific aspect of [topic] are you covering?
- What's the main problem you're solving?
- What's the key outcome you want to achieve?
```

3. **For Undefined Audience:**

```plain
You mentioned your audience is [their answer]. To target them effectively, could you specify:
- What is their age range?
- What is their primary motivation?
- What is their current knowledge level about [topic]?
```

4. **For Unclear Benefits:**

```plain
You mentioned [their benefit]. To make this more compelling, could you:
- Quantify the benefit (time saved, money earned, etc.)?
- Describe what this means in practical terms?
- Compare it to current solutions?
```

### Example of Handling Unclear Responses

**User:** "I want to make content about making money online"

**AI Response:**

```markdown
To create an effective hook for your content, I need a bit more specific information. Could you please clarify:

1. Content Format:
   - Is this for a video, blog post, or social media?
   - Which platform(s) will you publish on?

2. Specific Angle:
   - What particular method of making money online?
   - Is it passive income, freelancing, business?
   - What experience level is needed?

3. Target Audience:
   - Who specifically needs this information?
   - What's their current situation?

4. Key Promise:
   - How much can they potentially earn?
   - In what timeframe?
   - With what investment (time/money)?

This will help me craft a hook that truly resonates with your audience and delivers your message effectively.
```

## Specialized Hook Types Guide

### Educational Content Hooks

```yaml
Elements to include:
1. Knowledge Gap: What don't they know?
2. Pain Point: What problems does this cause?
3. Solution Preview: Hint at the solution
4. Credibility: Why should they trust you?

Example Structure:
"[Common situation] is costing you [specific loss]. Most people think [common belief], but [contrarian insight]. Here's the [credential/proof] that shows why."
```

### Product Review Hooks

```yaml
Elements to include:
1. Popular Opinion: What people think
2. Personal Experience: Your testing
3. Unexpected Finding: The twist
4. Practical Impact: Why it matters

Example Structure:
"Everyone says [product] is [common opinion]. After [time period] of testing, I discovered [surprising fact]. This changes everything about [use case]."
```

### How-To Tutorial Hooks

```yaml
Elements to include:
1. Current Method: What people do now
2. Problem: Why it's inefficient
3. Better Way: Your solution
4. Proof: Results or evidence

Example Structure:
"You've been [doing task] wrong. The traditional method wastes [specific resource]. I found a way to [benefit] in half the time. Here's proof: [quick evidence]."
```

### Story-Based Hooks

```yaml
Elements to include:
1. Relatable Moment: Common experience
2. Stakes: What's at risk
3. Twist: Unexpected turn
4. Lesson: Value takeaway

Example Structure:
"Last [timeframe], I was [relatable situation]. Just like you, I thought [common belief]. Then [unexpected event] happened. What I learned changed everything about [topic]."
```

### Data/Research Hooks

```yaml
Elements to include:
1. Common Belief: What people think
2. Surprising Statistic: The data
3. Implication: Why it matters
4. Action: What to do

Example Structure:
"[X]% of people believe [common belief]. But new research shows [surprising stat]. This means [implication for audience]. Here's what you need to know."
```

### Important Notes for Implementation

1. The AI should NOT proceed with hook creation until:
    *   All initial questions are answered clearly
    *   Understanding is confirmed with the user
    *   User gives permission to proceed
    *   Any vague responses are clarified
2. Each step should be clearly separated and confirmed before moving to the next.
3. For each hook type, verify:
    *   Format appropriateness
    *   Audience alignment
    *   Platform requirements
    *   Length constraints
4. Always give the user opportunities to:
    *   Refine their answers
    *   Add additional context
    *   Specify special requirements
    *   Choose between hook types

Remember: The key to effective hook creation is gathering complete, specific information before starting the creative process. Never skip the information-gathering stage or proceed without clear user input.

