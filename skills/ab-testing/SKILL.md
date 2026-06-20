---
name: ab-testing
description: Design, run, and call A/B tests on [Author] funnel pages and email sequences. Trigger when user says "split test", "A/B test", "test the headline", "is this winning yet", "what's the sample size", "should I call the winner", "variant B is up X percent", or asks how to set up a test in GHL workflows or Vercel. Skip if asking for strategy, copy, or offer design; defer to launchmap-* / magnetic-story.
---

## When to use

- You want to test a headline, CTA, hero, or pricing variant on a funnel page.
- A test is running and you ask whether to call the winner.
- Setting up split routing for new traffic in Vercel Edge Config.
- Splitting an audience in a GHL workflow by tag and measuring outcome.
- Building a test brief before launch.
- Reviewing test results to extract a learning.

## When NOT to use

- Picking the right funnel type: route to launchmap or funnel-select.
- Writing the variant copy itself: route to magnetic-story.
- Designing the offer or stack inside the page: route to product-creator.
- Tracking setup or attribution issues: route to analytics-setup.

## The stack defaults

- **Page split routing**: Vercel Edge Config or middleware for route-level splits. Framer and Lovable use built-in A/B (Framer A/B, Lovable preview variants).
- **Audience split (email/SMS/CRM)**: GHL workflows split by tag or random number. Main location `[GHL_LOCATION_ID]`. Fast Track `[GHL_LOCATION_ID]` is separate; confirm before touching.
- **Measurement**: PostHog (preferred for funnels and feature flags) or GA4 with custom dimension for variant. Never measure split tests in Pixel alone.
- **Significance**: 95% confidence minimum. Use a Bayesian or frequentist calculator (PostHog has both built in).
- **Sample size**: minimum 100 conversions per variant before checking. Plan duration for at least one full week to capture day-of-week effects.
- **One variable per test**. Multivariate only if traffic exceeds 50,000 sessions per week.

## Process

1. Write the hypothesis. Element, change, expected metric impact, reasoning.
2. Define the primary metric (one), the guardrail metric (one), and the decision rule (call winner at X confidence with Y minimum sample).
3. Calculate required sample size from baseline conversion rate and minimum detectable effect (MDE). Use the table below.
4. Pick the split mechanism. Page-level: Vercel Edge or Framer A/B. Audience-level: GHL workflow split. Measurement: PostHog or GA4.
5. Ship 50/50 split. Confirm tracking fires for both variants on day one.
6. Run for the calculated sample. Do not peek before minimum sample is reached. Do not call winners on day three.
7. Check guardrail metric did not regress.
8. Call the winner only when confidence is at or above 95% AND sample size is met AND test ran at least 7 days.
9. Log the test. Hypothesis, dates, traffic, results, lift, confidence, learning, next test.

## Brand voice rules (always apply)

- English only.
- No em dashes.
- No URLs in SMS.
- No auto-send. Draft for approval.
- Drip 1 per 30 to 60 seconds when sending more than 10 messages.
- Defensible numbers: $10M+ revenue, 1,000+ trained.

## Anti-patterns

- Never call a winner before reaching minimum sample (100 conversions per variant) AND 95% confidence AND 7 days runtime. All three.
- Never test 2 or more variables at once unless running multivariate with proper traffic volume.
- Never run a test without a guardrail metric. Lifting CTR while tanking purchases is a loss.
- Never split unevenly without a reason. 50/50 unless ramping a risky variant (then 90/10 ramp).
- Never measure a page split in Pixel alone; Pixel attribution windows distort variant comparisons.
- Never run two overlapping tests on the same page without a holdout group.
- Never reuse a winning variant as the new control without a fresh confirmation test if the lift was below 10%.
- Never test on Fast Track (`[GHL_LOCATION_ID]`) without explicit Fast Track instruction.

## What to test (priority)

| Priority | Element | Typical lift |
|---|---|---|
| P0 | Headline | 10 to 50% |
| P0 | CTA copy and color | 5 to 30% |
| P1 | Hero image or VSL | 5 to 20% |
| P1 | Form field count | 10 to 40% |
| P1 | Social proof placement | 5 to 15% |
| P2 | Long-form vs short-form layout | 5 to 20% |
| P2 | Pricing display (annual default vs monthly) | 5 to 25% |
| P2 | Urgency messaging | 3 to 15% |
| P3 | Color scheme | 2 to 10% |
| P3 | Font choice | 1 to 5% |

## Sample size table

Per variant. Two-sided, 95% confidence, 80% power. Round up.

| Baseline CR | MDE (relative) | Sample per variant |
|---|---|---|
| 2% | +20% | ~16,000 |
| 2% | +50% | ~2,800 |
| 5% | +10% | ~26,000 |
| 5% | +20% | ~6,800 |
| 5% | +50% | ~1,200 |
| 10% | +10% | ~14,000 |
| 10% | +20% | ~3,800 |
| 10% | +50% | ~700 |
| 20% | +10% | ~6,300 |
| 20% | +20% | ~1,700 |

If real traffic is below these numbers, test bigger swings (higher MDE) or wait. Do not run underpowered tests.

## Test brief template

```
TEST NAME: [short slug, e.g. opt-in-headline-Q2]
DATE: [start] to [end target]
PAGE / AUDIENCE: [URL or GHL segment]

HYPOTHESIS:
If we change [element] from [current] to [proposed],
then [primary metric] will [increase/decrease] by [estimated %]
because [reasoning grounded in conversion principle or prior test].

CONTROL (A): [description]
VARIANT (B): [description]

PRIMARY METRIC: [conversion rate / opt-in rate / purchase rate]
GUARDRAIL METRIC: [revenue per visitor / refund rate / unsubscribe rate]

BASELINE CR: [X%]
MDE: [Y% relative lift]
REQUIRED SAMPLE: [N per variant]
DAILY TRAFFIC: [V]
ESTIMATED DURATION: [N / V days, minimum 7]

DECISION RULE: Call winner at 95% confidence AND minimum 100 conversions per variant AND minimum 7 days runtime AND guardrail not regressed.

SPLIT MECHANISM: [Vercel Edge / Framer A/B / GHL workflow]
MEASUREMENT: [PostHog / GA4]
```

## Results log template

```
TEST: [name]
DATES: [start] to [end]
TRAFFIC: [total] ([per variant])

CONTROL: [X]% CR ([N] conversions)
VARIANT: [Y]% CR ([N] conversions)

PRIMARY: [+/- Z]% lift, [confidence]%
GUARDRAIL: [+/- W]% [no regression / regression]

WINNER: [Control / Variant / Inconclusive]

LEARNING: [one sentence on why it won or didn't]
NEXT TEST: [what this opens up]
```

## Common tests by page type

**Opt-in page**

- Headline: problem-focused vs solution-focused
- CTA: "Get Free Access" vs "Send Me the Guide" vs "Show Me How"
- Form: email only vs name and email
- Social proof: count vs testimonial

**Sales page**

- Long-form vs short-form
- VSL vs text
- Testimonials at top vs after offer
- Default payment: one-time vs payment plan

**Pricing page**

- 2 plans vs 3 plans
- Annual default vs monthly default
- Comparison table vs simple list
- "Most Popular" badge placement

## GHL workflow split pattern

Use a Math node or random number condition to split incoming contacts into Variant A and Variant B by tag. Send each variant a different email or SMS. Measure conversion downstream by goal action (booking, purchase, tag applied). Confirm split distribution after first 100 contacts to make sure routing is balanced.

## Vercel Edge split pattern

Use middleware or Edge Config to assign variant cookie on first visit. Cookie persists so the same visitor sees the same variant on every return. Pass variant to PostHog or GA4 as a custom property.
