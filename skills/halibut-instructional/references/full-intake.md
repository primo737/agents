# Full Intake: The 13 Questions

The standard interview targets roughly five useful questions as a friction heuristic, not a
license to invent missing answers. This file is the explicit full-intake option. Use it when the user explicitly asks for the full set: "ask me the full questions",
"run the whole intake", "all 13", "don't shortcut it". On that request, display all thirteen
immediately rather than drip-feeding them, then work through the answers.

Adapted from the original Halibut project support doc, September 2024. All thirteen original
dimensions remain below. Reuse answers already supplied. Separately establish who will execute
the prompt and what sources/tools they can access; question 2 concerns the output audience.
Examples below illustrate questions, not facts to insert into a user's task.

---

### 1. What exactly do you want the AI to do?
- **Be as specific as possible**. What's the main action you want?
  (Example: "Summarize," "Explain," "Compare," "Write a blog post," etc.)

### 2. Who is the audience for this response?
- **Tailor the response to fit the right audience**. Are they beginners, experts, business professionals, students?
  (Example: "HR managers," "Tech-savvy consumers," "Children learning about climate change.")

### 3. How would you like the tone of the response to sound?
- **Define the tone and style**. Should it be formal, casual, persuasive, or neutral?
  (Example: "Persuasive and upbeat," "Casual and friendly," "Professional and concise.")

### 4. What key points or focus areas should the AI emphasize?
- **Narrow down the focus**. Are there specific details or features you want the AI to highlight?
  (Example: "Focus on the environmental benefits of electric cars," "Emphasize the time-saving features of the app.")

### 5. What should the AI avoid discussing?
- **Consider what's unnecessary**. Are there any details, examples, or opinions the AI should avoid?
  (Example: "Avoid discussing technical jargon," "Skip over pricing details.")

### 6. Do you need the AI to follow a specific structure?
- **Specify the format**. Should the response be in paragraphs, bullet points, a numbered list, or sections?
  (Example: "Use bullet points for each feature," "Divide the content into three sections: introduction, benefits, conclusion.")

### 7. How long should the response be?
- **Set parameters for length**. Do you need a specific word count or number of sentences?
  (Example: "Write a 300-word blog post," "Give a 2-sentence summary.")

### 8. Should the AI include examples, statistics, or real-world applications?
- **Think about supporting details**. Would examples or data make the response stronger?
  (Example: "Include statistics on remote work productivity," "Provide a real-world example of how businesses use this technology.")

### 9. How do you want the response to feel?
- **Consider emotional impact**. Should it feel motivational, inspiring, informative, or neutral?
  (Example: "Make it feel inspiring to encourage action," "Keep it neutral and factual.")

### 10. Should the response be creative or strictly factual?
- **Define the boundaries**. Do you want the AI to be creative and imaginative, or stick strictly to facts?
  (Example: "Be imaginative and create a fictional story," "Stick to objective facts and avoid opinions.")

### 11. Do you need the AI to consider the context of previous conversations or inputs?
- **Think about continuity**. Should the AI rely on prior context, or is this a standalone task?
  (Example: "Continue from the previous discussion," "Treat this as a new task without any context.")

### 12. Do you want to include any specific language or phrases?
- **Be mindful of wording**. Are there key terms, phrases, or slogans you want the AI to use?
  (Example: "Use the phrase 'cost-effective solution' when describing the product," "Incorporate the company slogan: 'Innovating for a better future.'")

### 13. Are there any deadlines or time constraints in the task?
- **Timing considerations**. Should the AI reflect urgency or provide content for a specific time period?
  (Example: "Write a call-to-action post for a limited-time offer," "Frame the response for a year-end review.")

---

---

## Assembling the answer

Put the answers together into one prompt rather than a list. An adapted worked example:

> Write a 300-word blog post for HR managers explaining the benefits of remote work, focusing on
> cost savings, productivity, and employee satisfaction. Use a professional but friendly tone.
> Include a sourced real-world example of a company that implemented remote work; do not invent results. Avoid
> discussing the environmental impacts or any legal concerns.

Three closing rules from the original:

- **Review the output.** Even a good prompt needs refinement once you see what comes back.
- **Iterate.** Update the prompt after the first response rather than starting over.
- **Think ahead.** Plan the second round from the start; assume follow-up is coming.

---

## Mapping to the compact intake

These are information dimensions, not a required number or order of questions.

| Dimension | Covers full-intake questions |
|---|---|
| Output and success criteria | 1, 4, 6, 7, 8, 10 |
| Audience | 2 |
| Receiver and capabilities | Separate operational check; not a substitute for question 2 |
| Style and intended effect | 3, 9 |
| Constraints | 5, 10, 12, 13 |
| Anchors and continuity | 4, 8, 11 |

Ask only for missing information that changes the result. A single question may cover related
dimensions; a high-impact gap may require an additional question. Reflect the understood task
back once in an interview before assembly, allowing correction without discarding prior scope.

Consider questions 5 (exclusions), 9 (emotional effect), and 12 (terminology) when they matter
and remain unanswered. Do not demand tone or emotional-impact decisions for purely factual
tasks that do not need them. Preserve earlier answers and corrections across turns unless
the user explicitly changes them. Label nonmaterial assumptions; ask about a material gap
rather than fabricating evidence or a deadline.
