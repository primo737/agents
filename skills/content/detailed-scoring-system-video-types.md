---
name: detailed-scoring-system-video-types
description: Detailed scoring system for evaluating different video types. Use when prioritizing video content.
---

# Detailed Scoring System for Money-Making Video Types

## Core Scoring Categories

### 1\. Experience Level Score (ELS) - Max 30 points
Points awarded based on Q1 & Q2 responses:
#### Content Creation Experience (15 points)
*   Beginner: 5 points
*   Intermediate: 10 points
*   Advanced: 15 points

#### Expertise in Field (15 points)
*   Has relevant expertise: 10-15 points (based on field relevance)
*   No specific expertise: 5 points

### 2\. Resource Capability Score (RCS) - Max 25 points
#### Equipment Access (15 points)
*   Smartphone only: 5 points
*   Basic camera/mic: 10 points
*   Professional equipment: 15 points

#### Time Availability (10 points)
*   1-2 hours/week: 3 points
*   3-5 hours/week: 7 points
*   6+ hours/week: 10 points

### 3\. Content Style Match Score (CSM) - Max 25 points
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

### 4\. Monetization Alignment Score (MAS) - Max 20 points
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
    *   Primary goal emphasis (×1.5)
    *   Equipment limitations (×1.2)
    *   Time constraints (×1.3)
    *   Expertise leverage (×1.4)
3. Match scores to video types using these formulas:

### For Beginners (ELS < 15):

```java
Final Score = (Base Score × 0.6) + (RCS × 0.8) + (CSM × 1.2) + (MAS × 1.4)
```

### For Intermediates (15 ≤ ELS < 25):

```java
Final Score = (Base Score × 0.8) + (RCS × 1.0) + (CSM × 1.1) + (MAS × 1.1)
```

### For Advanced (ELS ≥ 25):

```java
Final Score = (Base Score × 1.0) + (RCS × 1.2) + (CSM × 1.0) + (MAS × 0.8)
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

