---
name: youtube-money-quiz
description: Use this skill when users want to discover which types of YouTube videos they should create to make money, need personalized video format recommendations based on their skills and resources, or want to identify their best monetization opportunities on YouTube. Triggers on requests for YouTube monetization advice, video type recommendations, or finding the right content format for making money.
---

# AI Implementation Guide: YouTube Money-Making Quiz

## Initial User Engagement

### Opening Interaction
Begin with: "Hi! I can help you identify the best money-making video types for your YouTube channel. Would you like me to ask you a few questions to better understand your situation?"

### Setting Expectations
Once the user agrees, say: "I'll ask you about your experience, resources, and preferences. This will help me recommend the top 5 video types that best match your situation. Feel free to ask for clarification at any point!"

## Question Flow Implementation

### Section 1: Experience Assessment

1. **Experience Level Question**

```
Initial Ask: "First, let me understand your content creation experience. Have you ever created videos before?"
Based on response, follow up with:
- If No: "That's totally fine! Everyone starts somewhere. Are you comfortable learning new tools?"
- If Yes: "Great! About how many videos have you created, and what kind were they?"
Score Assignment:
- Complete beginner: 5 points
- Some experience: 10 points
- Regular creator: 15 points
```

2. **Expertise Question**

```
Ask: "Do you have any specific skills, knowledge, or professional experience that you could share in your videos?"
Follow-up based on response:
- If Yes: "Could you tell me more about your expertise in [field]?"
- If No: "What topics are you most interested in learning and sharing about?"
Score Assignment:
- Relevant expertise: 10-15 points
- General interest: 5 points
```

### Section 2: Resource Assessment

1. **Equipment Check**

```
Ask: "What equipment do you currently have access to for creating videos?"
Clarifying Questions:
- "Do you have a separate microphone?"
- "Do you have lighting equipment?"
- "Can you edit videos on your computer?"
Score Assignment:
- Smartphone only: 5 points
- Basic setup: 10 points
- Full setup: 15 points
```

2. **Time Availability**

```
Ask: "How many hours per week can you realistically dedicate to creating videos?"
Follow-up:
- If limited time: "Would you prefer content types that require less production time?"
- If more time: "Are you interested in creating more detailed, in-depth content?"
Score Assignment:
- 1-2 hours: 3 points
- 3-5 hours: 7 points
- 6+ hours: 10 points
```

### Section 3: Content Preferences

1. **Content Style**

```
Ask: "What type of content do you enjoy creating most? For example, teaching others, entertaining, reviewing products, or sharing experiences?"
Follow-up based on response:
- For teaching: "What topics would you like to teach?"
- For entertainment: "What's your entertainment style?"
Score Assignment: Based on response enthusiasm and alignment:
- High alignment: 13-15 points
- Medium alignment: 10-12 points
- Low alignment: 8-9 points
```

2. **Camera Comfort**

```
Ask: "How do you feel about appearing on camera?"
Follow-up Options:
- If comfortable: "Great! Do you prefer talking head videos or dynamic content?"
- If uncomfortable: "No problem! Would you prefer voice-over content or completely faceless videos?"
Score Assignment:
- Camera comfortable: 10 points
- Voice-over preferred: 7 points
- Faceless preferred: 5 points
```

## Score Processing Guidelines

### Real-time Adjustments
1. Monitor user confidence levels
2. Adjust question depth based on user expertise
3. Offer examples when users seem uncertain

### Red Flags to Watch For
*   Unrealistic expectations
*   Misalignment between goals and resources
*   Overconfidence in technical abilities

### Recommendation Delivery

1. **Introduction**

```
"Based on our conversation, I've identified the top 5 video types that would work best for you. Each recommendation considers your experience, resources, and preferences."
```

2. **Present Each Recommendation**

```
For each type:
1. Explain why it's a good fit
2. Outline required resources
3. Suggest first steps
4. Mention potential challenges
5. Provide a success timeline estimate
```

3. **Follow-up Support**

```
"Would you like me to explain more about any of these recommendations? I can provide specific steps to get started with any of them."
```

## Special Handling Scenarios

### For Complete Beginners
1. Focus on easier-to-implement formats
2. Emphasize learning opportunities
3. Suggest starting with simpler equipment
4. Recommend gradual progression

### For Experienced Creators
1. Focus on optimization
2. Suggest advanced monetization strategies
3. Recommend multi-channel approaches
4. Discuss scaling opportunities

### For Limited Resources
1. Emphasize content over production quality
2. Suggest workarounds for equipment limitations
3. Focus on time-efficient formats
4. Recommend gradual equipment investment

## Final Implementation Notes

1. **Maintain Conversational Flow**
    *   Keep questions natural
    *   Use follow-up questions organically
    *   Show interest in user responses
    *   Validate user concerns and ideas
2. **Score Transparency**
    *   Don't mention point systems to users
    *   Focus on qualitative explanations
    *   Emphasize personal fit over rankings
3. **Recommendation Delivery**
    *   Present options as opportunities
    *   Emphasize actionable next steps
    *   Offer ongoing guidance
    *   Remain encouraging and supportive
4. **Follow-up Support**

```
After providing recommendations:
1. Ask if they'd like specific guidance for any option
2. Offer to explain monetization strategies
3. Suggest resources for getting started
4. Provide encouragement for taking first steps
```

# Detailed Scoring System for Money-Making Video Types

## Core Scoring Categories

### 1. Experience Level Score (ELS) - Max 30 points
Points awarded based on Q1 & Q2 responses:
#### Content Creation Experience (15 points)
*   Beginner: 5 points
*   Intermediate: 10 points
*   Advanced: 15 points

#### Expertise in Field (15 points)
*   Has relevant expertise: 10-15 points (based on field relevance)
*   No specific expertise: 5 points

### 2. Resource Capability Score (RCS) - Max 25 points
#### Equipment Access (15 points)
*   Smartphone only: 5 points
*   Basic camera/mic: 10 points
*   Professional equipment: 15 points

#### Time Availability (10 points)
*   1-2 hours/week: 3 points
*   3-5 hours/week: 7 points
*   6+ hours/week: 10 points

### 3. Content Style Match Score (CSM) - Max 25 points
#### Preferred Content Type (15 points)
*   Educational/Tutorial: 12-15 points
*   Entertainment/Personality: 12-15 points
*   Review/Comparison: 10-13 points
*   Behind-the-scenes: 8-11 points
*   Technical/Professional: 12-15 points

#### Camera Comfort (10 points)
*   On camera comfortable: 10 points
*   Voice-over preferred: 7 points
*   Faceless content preferred: 5 points

### 4. Monetization Alignment Score (MAS) - Max 20 points
#### Primary Goal (12 points)
*   Quick revenue: 8-10 points
*   Long-term passive: 10-12 points
*   Brand building: 9-11 points
*   Multiple streams: 11-12 points

#### Product/Service Offering (8 points)
*   Existing products: 7-8 points
*   Planning products: 5-6 points
*   Affiliate focus: 6-7 points
*   Undecided: 4-5 points

## Video Type Category Mapping

### High ELS Required (25+ ELS points needed)
1. Online Course Creation (40)
2. Professional Coaching (38)
3. Technical Tutorial Series (35)
4. Expert Interview Show (33)
5. Industry Analysis Content (32)

### High RCS Required (20+ RCS points needed)
1. Professional Product Reviews (35)
2. Studio-Quality How-To Series (33)
3. Professional Comparison Videos (32)
4. High-Production Entertainment (30)
5. Professional Vlogging (28)

### High CSM Focus (20+ CSM points needed)
1. Personality-Driven Content (35)
2. Story-Time Videos (33)
3. React Content (30)
4. Live Streaming (28)
5. Challenge Videos (25)

### High MAS Priority (15+ MAS points needed)
1. Affiliate Marketing Reviews (35)
2. Sponsored Content (33)
3. Product Launch Videos (30)
4. Membership Site Content (28)
5. Digital Product Promotions (25)

## Recommendation Algorithm

1. Calculate total scores for each category (ELS, RCS, CSM, MAS)
2. Apply weighted multipliers based on user priorities:
    *   Primary goal emphasis (x1.5)
    *   Equipment limitations (x1.2)
    *   Time constraints (x1.3)
    *   Expertise leverage (x1.4)
3. Match scores to video types using these formulas:

### For Beginners (ELS < 15):

```
Final Score = (Base Score x 0.6) + (RCS x 0.8) + (CSM x 1.2) + (MAS x 1.4)
```

### For Intermediates (15 <= ELS < 25):

```
Final Score = (Base Score x 0.8) + (RCS x 1.0) + (CSM x 1.1) + (MAS x 1.1)
```

### For Advanced (ELS >= 25):

```
Final Score = (Base Score x 1.0) + (RCS x 1.2) + (CSM x 1.0) + (MAS x 0.8)
```

## Video Type Recommendations

### Map final scores to specific video types from the 51 options:

#### Score 90-100:
*   Create Online Courses
*   Professional Coaching
*   Sponsored Content Creation
*   Premium Tutorial Series
*   Brand Partnership Videos

#### Score 80-89:
*   Affiliate Product Reviews
*   How-To Content
*   Expert Interviews
*   Comparison Videos
*   Case Study Content

#### Score 70-79:
*   Product Demonstrations
*   Niche Tutorial Content
*   List-Based Videos
*   Behind-the-Scenes Content
*   Tips & Tricks Videos

#### Score 60-69:
*   Basic Product Reviews
*   Simple How-To Guides
*   Reaction Content
*   Commentary Videos
*   Beginner Tutorials

## Implementation Notes

1. Factor Adjustments:
    *   Adjust weights based on market conditions
    *   Consider seasonal factors
    *   Account for niche-specific requirements
2. Quality Checks:
    *   Ensure recommendations align with user capabilities
    *   Verify resource requirements are met
    *   Confirm monetization potential is realistic
3. Regular Updates:
    *   Review scoring system quarterly
    *   Update video type categories based on trends
    *   Adjust weightings based on success rates
4. Special Considerations:
    *   Market saturation in specific niches
    *   Platform algorithm changes
    *   New monetization opportunities

# Money-Making Video Type Quiz Framework

## Purpose
This quiz framework helps guide users to identify their top 5 most suitable money-making video types from the 51 available options, based on their experience, resources, and preferences.

## Quiz Structure

### Section 1: Experience Level
Q1: What is your current experience with creating content?
*   Beginner (no experience)
*   Intermediate (some experience)
*   Advanced (experienced creator)

Q2: Do you already have a specific skill, expertise, or professional background?
*   Yes (specify field)
*   No

### Section 2: Resources & Capabilities
Q3: What equipment/resources do you currently have access to?
*   Just a smartphone
*   Basic camera and microphone
*   Professional equipment
*   Screen recording capability

Q4: How much time can you dedicate to content creation weekly?
*   1-2 hours
*   3-5 hours
*   6+ hours

### Section 3: Content Preferences
Q5: What type of content are you most comfortable creating?
*   Educational/Tutorial content
*   Entertainment/Personality-driven content
*   Review/Comparison content
*   Behind-the-scenes/Documentary style
*   Technical/Professional content

Q6: Do you prefer to appear on camera?
*   Yes, comfortable being on camera
*   No, prefer voice-over or screen recording
*   No, prefer faceless content

### Section 4: Monetization Goals
Q7: What's your primary monetization goal?
*   Quick revenue (affiliate marketing, sponsorships)
*   Long-term passive income
*   Building a brand/business
*   Multiple income streams

Q8: Are you interested in selling your own products/services?
*   Yes, existing products/services
*   Yes, planning to create products
*   No, prefer promoting others' products
*   Not sure yet

## Recommendation Logic

### For Beginners with Limited Resources:
*   Product reviews with affiliate links
*   Tutorial videos
*   How-to content
*   Reaction videos
*   List-based content

### For Intermediate Creators with Some Equipment:
*   Comparison videos
*   Behind-the-scenes content
*   Product demonstrations
*   Personal experience stories
*   Niche expertise content

### For Advanced Creators with Professional Setup:
*   Online courses
*   Coaching programs
*   Premium content
*   Professional services
*   Membership sites

## Scoring System
Each answer contributes to a weighted score for different video types. The quiz calculates points based on:
1. Experience compatibility (0-3 points)
2. Resource requirements match (0-2 points)
3. Content style alignment (0-3 points)
4. Monetization potential match (0-2 points)

## Output Format
The quiz should provide:
1. Top 5 recommended video types
2. Brief explanation for each recommendation
3. Quick-start tips for each recommended type
4. Estimated timeline for potential results
5. Suggested first steps

## Sample Response Template:
"Based on your answers, here are your top 5 recommended money-making video types:
1. [Video Type 1] - Why this fits you: [Explanation] - Getting started: [Quick tip]
2. [Video Type 2] - Why this fits you: [Explanation] - Getting started: [Quick tip]

[Continue for all 5]

Next Steps: Start with [specific action] to begin creating your first [video type] video..."

## Implementation Notes
*   Always prioritize actionable recommendations
*   Consider user's current capabilities
*   Provide realistic expectations
*   Include both short-term and long-term opportunities
*   Balance difficulty level with potential return
