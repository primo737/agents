---
name: mobile-responsive
description: Mobile-first responsive patterns for funnel pages — breakpoints, touch targets, type scale, sticky CTA bar, single-column layout, viewport meta. Use when the user says "make this mobile-friendly", "fix the mobile layout", "page breaks on iPhone", "add a sticky CTA", "set up breakpoints", "audit mobile experience", or right after `conversion-ux` returns a layout. Pairs with `design-system` for tokens. Skip if the user is asking for offer construction, avatar work, message strategy, or copy voice — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, magnetic-story / cris-vinson-storybank, or `conversion-ux` for layout decisions and `design-system` for tokens.
---

# Mobile-Responsive

Mobile-first patterns for every funnel page. Over 60% of traffic is mobile. Build mobile first, then scale up. Every Lovable, Framer, or GHL page must clear this checklist before traffic.

## When to use
- Building a new page in Lovable, Framer, or GHL.
- Existing page bounces on mobile and you need the patch.
- Auditor (`conversion-audit`) flagged "mobile experience" under 7/10.
- Migrating between tools and need the breakpoints to survive.
- Form on mobile is unusable (zoom on focus, fields too small, side-by-side).

## When NOT to use
- Picking the funnel type → `funnel-select`.
- Layout, CTA placement, social proof patterns → `conversion-ux`.
- Color palettes, components, animation tokens → `design-system`.
- Writing offer or stack → `product-creator` or `grand-slam-offer-architect`.
- Writing the message → `launchmap-mdm`, `launchmap-content`.
- Writing the story or voice → `magnetic-story` / `cris-vinson-storybank`.
- Webinar SCRIPT → `expert-secrets-perfect-webinar`.

## The stack defaults
- CRM, email, SMS, forms, calendars, workflows: GHL (main location `[GHL_LOCATION_ID]`). Fast Track is a separate sub-account — never touch unless specified.
- Page builds: Lovable for net-new, Framer for design-heavy.
- Hosting: Vercel.
- Automation: n8n on the VPS via SSH node + bash wrapper.
- Decks: Gamma (textMode=preserve, freeform, "unwiz" theme).

## Process
1. Confirm the viewport meta tag is present.
2. Set base styles to mobile (375 px wide). Add tablet, desktop, large desktop breakpoints on top.
3. Stack everything single-column on mobile. Grid only kicks in at 768.
4. Force every interactive element to at least 44 by 44 px.
5. Set body type to 16 px minimum to block iOS focus zoom.
6. Add the sticky bottom CTA bar on every page longer than one viewport.
7. Run the mobile testing checklist at 375, 414, 768, 1024, 1280.
8. Test in Chrome dev tools and on a real iPhone in portrait and landscape.

## Brand voice rules (always apply)
- English only on every label.
- No em dashes anywhere in client-facing copy. Use commas, periods, or colons.
- No URLs in any SMS the page triggers.
- Never auto-send to contacts. Draft and approve.
- Sends greater than 10 contacts must be dripped at 1 per 30 to 60 seconds, or run via a GHL workflow.
- Outreach DMs and SMS open with: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." before any personalization.
- Defensible credentials: $10M+ revenue, 1,000+ trained. Never use $100M+ or 1,500+.

## Anti-patterns
- Never start desktop-first and bolt mobile on. Mobile-first only.
- Never put body type below 16 px. iOS will zoom on focus.
- Never use side-by-side form fields on mobile. Single column.
- Never use a touch target under 44 by 44 px.
- Never let the page horizontally scroll at 375 px wide.
- Never hide the primary CTA on mobile. Make it sticky if it scrolls out of view.
- Never use hover-only interactions for the CTA. Touch-first.
- Never use modals that exceed viewport height on mobile.
- Never load fonts that block render. Use font-display: swap.

## Breakpoint table

| Name | Min width | Use |
|---|---|---|
| Mobile (base) | 0 px | Default styles. Single column, stacked, full-width CTA. |
| Tablet | 768 px | 2-column grids, horizontal nav allowed. |
| Desktop | 1024 px | 3-column grids, expanded hero. |
| Large desktop | 1280 px | Max content width caps at 1200 px, more whitespace. |

```css
/* Mobile-first: base = mobile. Add up. */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

## Required viewport meta

Every HTML page:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Touch target rules

| Element | Min size | Min spacing |
|---|---|---|
| Primary CTA button | 48 by 48 px (full-width on mobile) | 16 px from neighbors |
| Secondary button | 44 by 44 px | 12 px |
| Inline link | 44 by 44 px (use padding) | 8 px |
| Form input | 48 px tall, full width | 16 px between fields |
| Checkbox / radio | 44 by 44 px hit area | 12 px |
| Nav link | 44 by 44 px | 16 px |

```css
button, a, input, select, textarea {
  min-height: 44px;
  min-width: 44px;
}
.cta-primary { min-height: 48px; width: 100%; }
.form-group + .form-group { margin-top: 16px; }
```

## Type scale (mobile base, scales up)

| Token | Mobile | Tablet (768) | Desktop (1024) |
|---|---|---|---|
| Body | 16 px | 16 px | 16 px |
| Lead | 18 px | 18 px | 20 px |
| H3 | 20 px | 22 px | 24 px |
| H2 | 24 px | 28 px | 32 px |
| H1 | 30 px | 36 px | 48 px |

```css
body { font-size: 16px; line-height: 1.6; }
h1   { font-size: 1.875rem; line-height: 1.2; } /* 30px */
@media (min-width: 768px)  { h1 { font-size: 2.25rem; } }   /* 36px */
@media (min-width: 1024px) { h1 { font-size: 3rem; } }      /* 48px */
```

## Layout patterns

### Container
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
@media (min-width: 768px)  { .container { padding: 0 32px; } }
@media (min-width: 1024px) { .container { padding: 0 64px; } }
```

### Single-column to grid
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px)  { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
```

### Sticky mobile CTA bar
```css
.mobile-cta-bar { display: none; }

@media (max-width: 767px) {
  .mobile-cta-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  .mobile-cta-bar .cta-primary {
    width: 100%;
    min-height: 48px;
    font-size: 16px;
  }
  body { padding-bottom: 80px; } /* prevent overlap */
}
```

### Responsive image
```css
img { max-width: 100%; height: auto; display: block; }
```

Use `srcset` for hero and any image over 600 px wide:
```html
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 767px) 100vw, 800px"
  alt="...">
```

## Form rules on mobile
- Single column. Never side-by-side.
- 16 px input text minimum (blocks iOS zoom on focus).
- 48 px input height minimum.
- Inline validation, not on submit.
- Use `inputmode="email"`, `inputmode="numeric"`, `autocomplete="..."` to summon the right keyboard.
- Submit button full-width.

## Mobile testing checklist

Test at 375, 414, 768, 1024, 1280 in Chrome dev tools. Then on a real iPhone (portrait + landscape).

- [ ] Viewport meta tag present.
- [ ] No horizontal scroll at 375 px.
- [ ] All text at least 16 px.
- [ ] All touch targets at least 44 by 44 px.
- [ ] CTA visible above the fold OR sticky bottom bar present.
- [ ] Forms single column, thumb-friendly, no zoom on focus.
- [ ] Images scale, no layout shift (CLS under 0.1).
- [ ] No fixed-width elements wider than 375 px.
- [ ] Modals fit within mobile viewport (90vh max).
- [ ] Page loads in under 3 s on simulated 4G.
- [ ] Tap targets do not overlap.
- [ ] Sticky CTA does not cover form on focus.

## Output template

```
PAGE: [name and slug]
Tool: [Lovable | Framer | GHL]

VIEWPORT META: present

BREAKPOINTS USED
- Mobile (base): single col, full-width CTA, stacked
- 768: 2-col grid
- 1024: 3-col grid, expanded hero
- 1280: max-width cap at 1200 px

TOUCH TARGETS
- CTA: 48 px, full width
- Inputs: 48 px, full width, 16 px gap
- Links: 44 px hit area

TYPE
- Body: 16 px (no iOS zoom)
- H1: 30 -> 36 -> 48 px
- H2: 24 -> 28 -> 32 px

STICKY MOBILE CTA: enabled (page is > 1 viewport)

FORM SPEC
- Single column
- inputmode + autocomplete set per field
- Inline validation

IMAGE STRATEGY
- WebP, srcset, lazy below fold
- LCP image preloaded

TESTING DONE AT
- 375, 414, 768, 1024, 1280 in dev tools
- Real iPhone portrait + landscape

GAPS / FIXES
- [list]
```
