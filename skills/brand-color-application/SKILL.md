---
name: brand-color-application
description: Deploys a defined color palette across a page using 5 proven placement patterns — product background, gradient headings, color per category, color grid, and tint unification. Use after design-system has defined the palette and before conversion-ux finalizes layout. Trigger when the user says "the page looks unbranded", "how do I use my colors", "make it feel more on-brand", "apply the palette", "the colors aren't showing up anywhere", or "the design feels generic even though we have a palette". Skip if no palette is defined yet — run design-system first.
---

# Brand Color Application

Turns a defined palette into lived visual presence on the page. Bridges `design-system` (which defines tokens) and `frontend-design` / `conversion-ux` (which build pages). Without this layer, most brand owners have a palette they never actually deploy.

## When to use
- Palette is defined in `design-system` but the page still reads as template-ish.
- `frontend-design` or `conversion-ux` layout is in place but color is only on the CTA.
- Auditor flagged "visual branding" weak despite tokens being set.
- User says the page looks generic, flat, or indistinct.
- Starting a new section (hero, features, testimonials) and need to decide how color enters it.

## When NOT to use
- No palette exists yet — run `design-system` first to define tokens.
- User is asking for layout, CTA placement, or section order — defer to `conversion-ux`.
- User is asking for copy or offer framing — defer to `launchmap-mdm` or `magnetic-story`.
- User is asking for breakpoints or mobile behavior — defer to `mobile-responsive`.

## Prerequisites
- `--accent`, `--bg-primary`, `--bg-card`, `--bg-secondary`, and at minimum one secondary palette color must be defined before applying these techniques. If only one color exists, generate tints (lighten 20%, 40%) and shades (darken 20%) from it before proceeding.

## The stack defaults
- Page builds: Lovable for net-new, Framer for design-heavy.
- Token source: `design-system` CSS variables.
- Hosting: Vercel.

## The 5 Techniques

### Technique 1 — Color as Product Background
Place the brand color (solid or gradient) behind the product image. Everything else on the card — type, CTA, price — stays untouched. The color does all the work.

**When to apply:** Hero product shot, featured item card, any section where a product image is center-stage.

**Implementation:**
```css
.product-bg {
  background: var(--accent);
  /* or gradient: */
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}
```

**Constraint:** The product must be photographed on a neutral or transparent background, or masked out. Never apply to lifestyle photos with busy backgrounds — it competes.

---

### Technique 2 — Gradient on Headings
Apply the brand color gradient to the typography itself, not the background. Body copy, CTAs, and layout stay neutral. The heading carries the brand signal.

**When to apply:** Hero headline, section headers, pull quotes. Most effective on dark backgrounds where the gradient pops.

**Implementation:**
```css
.gradient-heading {
  background: linear-gradient(90deg, var(--accent) 0%, var(--warning) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}
```

**Constraint:** Never apply gradient text to body copy — it destroys readability at small sizes. Headlines only (--text-3xl and above). Verify the gradient stops share enough contrast against the background for WCAG AA.

---

### Technique 3 — Color per Category
When there are multiple features, pillars, or options, assign each one a distinct palette color with a matching light-tinted background. Monochrome icons become the accent color of their column.

**When to apply:** Feature grids, pricing tier differentiators, service pillars, "what we stand for" sections with 3–6 items.

**Implementation pattern (4-category example):**
```css
/* Each category gets a semantic variable pulled from the palette */
.category-1 { --cat-color: var(--accent);    --cat-bg: rgba(59,130,246,0.08); }
.category-2 { --cat-color: var(--success);   --cat-bg: rgba(34,197,94,0.08); }
.category-3 { --cat-color: var(--warning);   --cat-bg: rgba(245,158,11,0.08); }
.category-4 { --cat-color: var(--error);     --cat-bg: rgba(239,68,68,0.08); }

.category-card {
  background: var(--cat-bg);
  border-top: 3px solid var(--cat-color);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}
.category-icon { color: var(--cat-color); }
```

**Constraint:** Maximum 6 categories per palette. If more exist, group them or repeat colors — never invent colors outside the defined palette.

---

### Technique 4 — Color on a Grid
Each card in a feature or testimonial grid gets a different tint or shade from the palette. No two adjacent cards share the same color. The grid reads as intentional rather than repeated.

**When to apply:** 2×2 or 3×3 feature grids, stat blocks, team cards, testimonial walls.

**Implementation (2×2 grid example):**
```css
.grid-card:nth-child(1) { background: var(--bg-primary); color: var(--text-primary); }
.grid-card:nth-child(2) { background: var(--accent);     color: #FFFFFF; }
.grid-card:nth-child(3) { background: var(--success);    color: #FFFFFF; }
.grid-card:nth-child(4) { background: var(--bg-card);    color: var(--text-primary); }
```

**Constraint:** Check WCAG AA contrast on every card before shipping. Dark text on light tints, white on saturated colors. Never put muted text on a muted background — the tints create the contrast problem. Run a contrast check after applying.

---

### Technique 5 — One Tint Across Layout
An entire section — headline, body, photography — lives in one color tone. The tint unifies the image and the text so the design reads as composed rather than assembled. Photography must share the palette, not fight it.

**When to apply:** Editorial hero sections, brand story sections, single-product showcase. Requires photography shot (or graded) to match the palette — if The photos aren't pre-graded, apply a CSS blend mode to approximate.

**Implementation:**
```css
.tinted-section {
  background: var(--bg-primary);
  color: var(--accent);           /* entire section text in accent */
  position: relative;
}
.tinted-section img {
  mix-blend-mode: luminosity;     /* strips the photo's own color */
  opacity: 0.9;
  filter: hue-rotate(0deg) saturate(1.2);  /* tune to match palette */
}
.tinted-section h1,
.tinted-section h2 { color: var(--accent); }
.tinted-section p  { color: var(--text-secondary); }
```

**Constraint:** This is the most advanced technique. Lifestyle photos with warm skin tones fight a green or blue accent palette visibly. Either match the photography to the palette at shoot time, use `mix-blend-mode: luminosity` to desaturate first, or treat the section as dark-on-dark (near-black bg, near-black image, accent text). Never force this technique on ungraded stock photography.

---

## Process

1. Confirm palette tokens are defined in `design-system`. If not, stop and run `design-system` first.
2. Audit the current page: identify which sections have zero color and which have color only on the CTA.
3. For each colorless section, select the most appropriate technique from the 5 above (see "When to apply" under each).
4. Apply in order: background → headings → category → grid → tint. Do not apply all 5 to one page — select 2–3 that fit the content.
5. Run contrast checks on every text-on-color pair. Fail = revert or darken the bg.
6. Validate that the palette is still recognizable — if 3 techniques use the accent and none use the secondaries, redistribute.
7. Hand off to `conversion-ux` for CTA and layout checks, `mobile-responsive` for touch and breakpoint behavior.

## Anti-patterns

- Never apply more than 3 of the 5 techniques to one page. Color fatigue kills the brand signal.
- Never apply gradient text below --text-3xl (30 px). It becomes illegible.
- Never pull colors from outside the defined palette to fill a technique. Generate tints and shades instead.
- Never use Technique 5 (tint unification) on ungraded lifestyle photography without a blend mode fix.
- Never use Technique 3 (color per category) with more than 6 categories — the palette runs out and the pattern breaks.
- Never let two adjacent grid cards (Technique 4) share the same fill — the differentiation purpose collapses.
- Never apply Technique 2 (gradient heading) to body copy — contrast fails at small sizes.
- Never use rainbow gradients not drawn from the palette. One accent, one secondary, max.
- Never skip the contrast check. Tinted backgrounds create invisible text problems.

## Complement map

| Existing skill | Relationship |
|---|---|
| `design-system` | **Prerequisite.** Defines the tokens this skill deploys. Run first. |
| `conversion-ux` | **Downstream.** Technique 3 (color per category) maps to feature sections; Technique 4 (color grid) maps to social proof and stats rows. After applying color, confirm CTA contrast and placement haven't shifted. |
| `frontend-design` | **Parallel.** Color & Theme direction set there should govern which 2–3 techniques get selected here. |
| `mobile-responsive` | **Downstream.** Technique 1 (product background) gradient must be verified on small viewports — gradient direction may need to flip to vertical on mobile. |

## Output template

```
BRAND COLOR APPLICATION: [Funnel / page name]
Source palette: [Modern Dark | Clean Light | Warm Conversion | custom]

TECHNIQUES APPLIED
[1] Product background : [applied to: ___] | [skipped — reason]
[2] Gradient heading   : [applied to: ___] | [skipped — reason]
[3] Color per category : [applied to: ___] | [skipped — reason]
[4] Color on grid      : [applied to: ___] | [skipped — reason]
[5] One tint layout    : [applied to: ___] | [skipped — reason]

CONTRAST CHECK
- [text token] on [bg token] : [ratio] — [pass AA | fail — fix applied]
- (repeat per pair)

TECHNIQUE COUNT: [n of 5 applied] — target 2–3 per page

HANDOFF
- conversion-ux: CTA contrast and placement after color shift
- mobile-responsive: gradient direction and tint on small viewports
```
