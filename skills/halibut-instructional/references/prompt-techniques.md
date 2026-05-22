# Prompt Engineering Techniques Reference

## Table of Contents
1. Instructional Prompts
2. Contextual Prompts
3. Few-shot Learning Prompts
4. Chain of Thought Prompts
5. Zero-shot Learning Prompts
6. Multi-step / Complex Prompts
7. Role-based Prompts
8. Constrained Prompts
9. Comparative Prompts
10. Clarifying Prompts
11. Template-based Prompts
12. Bias-Reduction Prompts
13. Creative Prompts
14. Problem-Solving Prompts
15. Conversational Prompts

---

## 1. Instructional Prompts

Direct, explicit instructions telling the AI what to do. The backbone of prompt engineering.

**When to use:** Content generation, summaries, task lists, creative writing — any task where
you can give clear direction.

**Key elements:**
- Action verbs: "write," "explain," "list," "summarize," "describe"
- Content specifics: topic, focus areas, what to include
- Format: word limits, bullet points, paragraph structure
- Tone: formal, casual, persuasive, informative

**Example types:**
- **Single-step:** "Write a 200-word blog post on meditation benefits."
- **Multi-step:** "Summarize this article in 3 sentences, then list 5 actionable steps."
- **With constraints:** "Write a 100-word product description focusing on camera and battery life, persuasive tone."
- **With format:** "Create a bullet-point list of pros and cons of EVs, at least three each."
- **With role:** "As a career counselor, write an email advising a student unsure about engineering."

**Best practices:**
- Be specific — "200-word blog post on meditation for beginners" beats "write about meditation"
- Define tone and style explicitly
- Set parameters: word limits, structure, paragraph counts
- Ask for specific focus areas
- Iterate if the first result misses the mark

---

## 2. Contextual Prompts

Provide background information, scenarios, or role assignments to shape the AI's response.

**When to use:** Professional writing that needs industry awareness, creative scenarios,
customer service simulations, educational content for specific audiences.

**Key elements:**
- Background information and backstory
- Role assignments (who the AI is in this scenario)
- Scenario setting (the situation the AI is responding within)
- Audience context (who the output is for)

**Example:** "You are a project manager at a startup preparing for a product launch. Write an
email to the CEO outlining key risks and mitigation strategies."

**Best practices:**
- Provide relevant background — not everything, just what shapes the output
- Define roles clearly with responsibilities
- Use audience cues: knowledge level, interests, needs
- Combine context with specific instructions for best results

---

## 3. Few-shot Learning Prompts

Provide 1-5 examples of desired output to teach the AI the pattern, style, or format you want.

**When to use:** When you need consistent style across outputs, customer support responses,
product descriptions, social media posts, job descriptions — any task where showing beats telling.

**Key elements:**
- 2-5 clear, consistent examples
- Explicit pattern for the AI to follow
- New task stated clearly after the examples

**Example:**
```
Here's how we write product descriptions:
- "This sleek water bottle keeps beverages cold for 24 hours..."
- "Our premium cotton t-shirt is soft, breathable..."
Write a product description for noise-canceling headphones.
```

**Best practices:**
- Choose high-quality, error-free examples
- Keep examples consistent in structure and tone
- Cover edge cases if you want the AI to handle variety
- Set a clear pattern, then clearly state the new task
- Limit examples to relevant details — don't overload

---

## 4. Chain of Thought Prompts

Ask the AI to break down its reasoning step by step before arriving at an answer.

**When to use:** Math problems, logical reasoning, decision-making, complex analysis,
teaching/tutoring, any task where showing the work matters.

**Key elements:**
- Explicit request for step-by-step explanation
- Logical sequence of reasoning
- Transparency in how the answer was reached

**Example:** "You need to decide between investing in Company A (high growth, high risk) or
Company B (stable, slower growth). Explain your decision-making process step by step."

**Best practices:**
- Explicitly ask for step-by-step reasoning
- Request explanations in logical order
- Use for complex tasks that benefit from visible reasoning
- Especially valuable for teaching, analysis, and problem-solving

---

## 5. Zero-shot Learning Prompts

Ask the AI to handle a task with no examples or guidance — relying entirely on its training.

**When to use:** Simple factual questions, basic translations, definitions, straightforward
summarization — tasks where the AI already knows what to do.

**Key elements:**
- No examples provided
- Clear, direct question or task
- Relies on the AI's existing knowledge

**Example:** "Translate 'I love ice cream' into Spanish." / "What is a black hole?"

**Best practices:**
- Use for simple, well-defined tasks
- Ask direct questions — ambiguity leads to poor results
- Works best when the task falls squarely within the AI's training data
- If results are weak, upgrade to few-shot or instructional prompting

---

## 6. Multi-step / Complex Prompts

Combine multiple actions or phases into a single prompt, executed sequentially.

**When to use:** Tasks with multiple phases — summarize then analyze, describe then recommend,
outline then draft. Content creation with multiple sections. Workflow simulation.

**Key elements:**
- Multiple sequential actions
- Logical flow from one step to the next
- Clear markers: "First," "Then," "Finally"

**Example:** "First, summarize this article in 3 sentences. Then, provide 3 key takeaways.
Finally, suggest 2 action items based on the takeaways."

**Best practices:**
- Use sequential markers explicitly (first, then, finally)
- Ensure logical flow between steps
- Don't overcomplicate — if the task has too many steps, break into separate prompts

---

## 7. Role-based Prompts

Assign the AI a specific role, persona, or professional identity to shape its response.

**When to use:** Customer service simulation, educational content, marketing copy,
consulting advice, medical/legal scenarios, any task where expertise and tone matter.

**Key elements:**
- Clear role assignment
- Tone and perspective shaped by the role
- Knowledge base appropriate to the role

**Example:** "You are a marketing manager for an eco-friendly product line. Write an email
to potential customers explaining the benefits of switching to your products."

**Best practices:**
- Clearly define the role and its responsibilities
- Align the role with the task
- Specify the audience the role is addressing
- Combine with instructional elements for precision

---

## 8. Constrained Prompts

Place specific limitations on the response: word count, format, tone, character limits.

**When to use:** Summaries, social media posts, taglines, formal emails, any task where
brevity, format, or style restrictions are critical.

**Key elements:**
- Word or character limits
- Format restrictions (bullet points, numbered lists, sections)
- Tone and style constraints

**Example:** "Summarize the benefits of exercise in 50 words or fewer."

**Best practices:**
- Be explicit about constraints — "100 words or fewer" not "keep it short"
- Test that constraints don't compromise readability
- Great for repetitive tasks that need uniform output

---

## 9. Comparative Prompts

Ask the AI to compare or contrast two or more items, ideas, or approaches.

**When to use:** Product comparisons, strategy evaluation, historical analysis, literary analysis,
decision-making between options.

**Key elements:**
- Two or more items to compare
- Specific comparison criteria
- Both similarities and differences

**Example:** "Compare the iPhone 13 and Samsung Galaxy S21, focusing on camera quality,
battery life, and price."

**Best practices:**
- Specify comparison criteria explicitly
- Ask for both similarities and differences
- Use for complex evaluations that benefit from structured analysis

---

## 10. Clarifying Prompts

Ask the AI to expand on, clarify, or elaborate on a previous response.

**When to use:** When initial output is too vague, needs more depth, or you want specific
aspects explored further.

**Key elements:**
- References previous response
- Requests specific details or elaboration
- Drives toward precision

**Example:** "You mentioned exercise improves mental health. Can you explain how it does
this in more detail?"

**Best practices:**
- Be specific about what needs clarification
- Ask for examples to make abstract concepts concrete
- Follow up in phases until you have the depth you need

---

## 11. Template-based Prompts

Provide a structured template for the AI to fill in.

**When to use:** Product descriptions, emails, reports, blog outlines — any task that
needs consistent formatting across multiple instances.

**Key elements:**
- Pre-defined structure with placeholders
- AI generates content that fits the template
- Ensures consistency and uniformity

**Example:**
```
Template: Product Name: [name] | Key Features: [features] | Benefits: [benefits] | Price: [price]
Fill this in for a wireless Bluetooth speaker.
```

**Best practices:**
- Make templates clear with obvious placeholders
- Ideal for repetitive tasks
- Allow customization within the template structure

---

## 12. Bias-Reduction Prompts

Frame tasks neutrally to minimize bias and encourage balanced, objective output.

**When to use:** Sensitive topics, academic writing, debates, news summaries, any content
that needs to present multiple perspectives fairly.

**Key elements:**
- Neutral framing — no leading language
- Multiple perspectives encouraged
- Focus on facts and evidence over opinion

**Example:** "Discuss the pros and cons of remote work from both the employer's and
employee's perspective."

**Best practices:**
- Avoid leading questions that suggest a viewpoint
- Ask for both sides of an issue
- Focus on facts and evidence-based content

---

## 13. Creative Prompts

Encourage original, imaginative, or artistic responses.

**When to use:** Creative writing, brainstorming, world-building, character development,
artistic concepts, invention ideation.

**Key elements:**
- Open-ended and abstract
- Encourages imagination and novelty
- Storytelling, poetry, or artistic expression

**Example:** "Write a short story about a world where humans communicate through colors
instead of words."

**Best practices:**
- Leave room for creative exploration — don't over-constrain
- Use imaginative or fantastical elements to inspire
- Experiment with different forms: stories, poems, dialogues, concepts

---

## 14. Problem-Solving Prompts

Present a problem and ask the AI to generate solutions, strategies, or action plans.

**When to use:** Business challenges, technical troubleshooting, personal development,
design problems, strategic planning.

**Key elements:**
- Clearly defined problem
- Solution-oriented framing
- Logical reasoning to arrive at recommendations

**Example:** "Your company is facing declining sales. What strategies would you recommend
to increase revenue?"

**Best practices:**
- Define the problem clearly — vague problems get vague solutions
- Ask for multiple solutions to evaluate options
- Best for real-world, actionable challenges

---

## 15. Conversational Prompts

Simulate natural dialogue and back-and-forth exchange.

**When to use:** Customer service interactions, interview practice, sales conversations,
chatbot design, casual discussion simulation.

**Key elements:**
- Back-and-forth exchange format
- Natural, conversational language
- Follow-up questions and engagement

**Example:** "You're a customer service rep for an online store. A customer asks, 'Can you
help me track my order?' Engage in a conversation to assist them."

**Best practices:**
- Frame in natural language — "talk about" not "provide information on"
- Encourage follow-up questions to keep flow going
- Best for simulating real-world interactions

---

## Technique Selection Quick Guide

| If the user needs... | Start with... | Add if needed... |
|---|---|---|
| Simple content | Instructional | Constrained |
| Consistent style | Few-shot | Template-based |
| Expert perspective | Role-based | Contextual |
| Complex analysis | Chain of Thought | Multi-step |
| Quick factual answer | Zero-shot | Clarifying |
| Multiple options evaluated | Comparative | Problem-solving |
| Balanced/sensitive topic | Bias-reduction | Contextual |
| Original/artistic content | Creative | Role-based |
| Real-world challenge | Problem-solving | Chain of Thought |
| Interactive simulation | Conversational | Role-based |
| Building on prior response | Clarifying | Multi-step |
