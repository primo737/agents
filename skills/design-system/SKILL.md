---
name: design-system
description: Design tokens and component specs for premium-feeling funnel pages — color palettes, typography, spacing, buttons, cards, forms, animation. Use when the user says "make this look premium", "the page looks cheap", "give me design tokens", "set up the theme", "spec the buttons and cards", "build the design system before the page", or starts a new Lovable or Framer build. Returns CSS variable token tables ready to paste into Tailwind config, Lovable theme, or Framer styles. Skip if the user is asking for offer construction, avatar work, message strategy, copy voice, or layout/CTA placement — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, magnetic-story / cris-vinson-storybank, or `conversion-ux` for layout decisions.
---

# Design System

Premium visual language for The funnels. Token tables + component specs that drop into Lovable, Framer, or any Tailwind project. Every page Cris ships should look like it costs $10K to design.

## When to use
- Starting a new funnel build in Lovable or Framer.
- Existing page looks generic / template-ish and needs a premium pass.
- Standardizing tokens across multiple pages in one funnel.
- Migrating a page between tools and need the styling to survive.
- Auditor (`conversion-audit`) flagged "visual design" under 7/10.

## When NOT to use
- Picking the funnel type → `funnel-select`.
- Layout, CTA placement, social proof patterns → `conversion-ux`.
- Mobile breakpoints, touch targets, type scale → `mobile-responsive`.
- Writing the offer or stack → `product-creator` or `grand-slam-offer-architect`.
- Writing the message → `launchmap-mdm` or `launchmap-content`.
- Writing the story or voice → `magnetic-story` / `cris-vinson-storybank`.
- Webinar SCRIPT → `expert-secrets-perfect-webinar`.

## The stack defaults
- CRM, email, SMS, forms, calendars, workflows: GHL (main location `[GHL_LOCATION_ID]`). Fast Track is a separate sub-account — never touch unless Cris names it.
- Page builds: Lovable for net-new, Framer for design-heavy.
- Hosting: Vercel.
- Automation: n8n on the VPS via SSH node + bash wrapper.
- Decks: Gamma (textMode=preserve, freeform, "unwiz" theme).

## Process
1. Confirm the palette: Modern Dark (default), Clean Light, or Warm Conversion. Ask if unclear.
2. Drop the chosen color tokens, spacing scale, and component specs into the build.
3. Set the body type (Inter or system stack) and base reset.
4. Spec primary CTA, card, glass card, form input. Reuse across the funnel.
5. Define animation tokens: fade-in, pulse, slide. Use sparingly.
6. Validate contrast ratios meet WCAG AA on every text-on-bg pair.
7. Hand to `conversion-ux` for layout, `mobile-responsive` for breakpoints.

## Brand voice rules (always apply)
- English only on every visible label.
- No em dashes anywhere in Cris-facing copy. Use commas, periods, or colons.
- No URLs in any SMS the page triggers.
- Never auto-send to contacts. Draft and approve.
- Sends greater than 10 contacts must be dripped at 1 per 30 to 60 seconds, or run via a GHL workflow.
- Outreach DMs and SMS open with: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." before any personalization.
- Defensible credentials: $10M+ revenue, 1,000+ trained. Never use $100M+ or 1,500+.

## Anti-patterns
- Never mix two palettes on one funnel.
- Never use neon-on-white or pure-black-on-pure-white. Use the token slates.
- Never use more than 2 type families per page.
- Never use a button under 48 px tall.
- Never use a body text under 16 px.
- Never animate the CTA on every scroll. One pulse on idle, max.
- Never use rainbow gradients on the CTA. One accent, one hover, one glow.
- Never use stock-photo placeholders in shipped pages. Real photos or vector illustration.

## Color palettes (pick one per funnel)

### Default — Modern Dark
```css
:root {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-card: #334155;
  --bg-elevated: #475569;

  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;

  --accent: #3B82F6;
  --accent-hover: #2563EB;
  --accent-glow: rgba(59, 130, 246, 0.3);

  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;

  --border: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
}
```

### Alternative — Clean Light
```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-card: #FFFFFF;
  --bg-elevated: #F1F5F9;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --accent: #6366F1;
  --accent-hover: #4F46E5;
  --accent-glow: rgba(99, 102, 241, 0.2);
  --border: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.15);
}
```

### Alternative — Warm Conversion
```css
:root {
  --bg-primary: #1A1A2E;
  --bg-secondary: #16213E;
  --bg-card: #0F3460;
  --text-primary: #EAEAEA;
  --text-secondary: #B8B8D1;
  --accent: #E94560;
  --accent-hover: #D63851;
  --accent-glow: rgba(233, 69, 96, 0.3);
}
```

## Token tables

### Spacing scale
| Token | Value | Use |
|---|---|---|
| --space-1 | 4 px | Inline gap |
| --space-2 | 8 px | Tight stack |
| --space-3 | 12 px | Form field gap |
| --space-4 | 16 px | Default padding |
| --space-5 | 20 px | Card gutter |
| --space-6 | 24 px | Section sub-gap |
| --space-8 | 32 px | Card padding |
| --space-10 | 40 px | Block gap |
| --space-12 | 48 px | Section internal |
| --space-16 | 64 px | Section padding mobile |
| --space-20 | 80 px | Section padding tablet |
| --space-24 | 96 px | Section padding desktop |

### Type scale (mobile base, scales up at breakpoints — see `mobile-responsive`)
| Token | rem | px | Use |
|---|---|---|---|
| --text-xs | 0.75 | 12 | Labels, fine print |
| --text-sm | 0.875 | 14 | Captions |
| --text-base | 1 | 16 | Body — minimum to prevent iOS zoom |
| --text-lg | 1.125 | 18 | Lead paragraph, mobile body |
| --text-xl | 1.25 | 20 | Sub-headline |
| --text-2xl | 1.5 | 24 | H3 |
| --text-3xl | 1.875 | 30 | H2, mobile H1 |
| --text-4xl | 2.25 | 36 | Tablet H1 |
| --text-5xl | 3 | 48 | Desktop H1 |

### Radius
| Token | Value | Use |
|---|---|---|
| --radius-sm | 4 px | Tags, pills |
| --radius-md | 8 px | Buttons, inputs |
| --radius-lg | 12 px | Cards |
| --radius-xl | 16 px | Glass cards, hero panels |

### Shadow
| Token | Value | Use |
|---|---|---|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.06) | Form inputs |
| --shadow-md | 0 4px 14px var(--accent-glow) | Primary CTA rest |
| --shadow-lg | 0 12px 40px rgba(0,0,0,0.15) | Card hover |
| --shadow-xl | 0 24px 60px rgba(0,0,0,0.25) | Modal |

## Components

### Primary CTA button
```css
.cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: var(--accent);
  color: #FFFFFF;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  min-height: 48px;
  box-shadow: var(--shadow-md);
}
.cta-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow);
}
```

### Card
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: all 0.2s ease;
}
.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Glass card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}
```

### Form input
```css
.form-input {
  width: 100%;
  padding: 14px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.2s ease;
  min-height: 48px;
}
.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
.form-input::placeholder { color: var(--text-muted); }
```

## Animation tokens (use sparingly)

```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible { opacity: 1; transform: translateY(0); }

@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 14px var(--accent-glow); }
  50%      { box-shadow: 0 4px 24px var(--accent-glow); }
}
.cta-pulse { animation: pulse 2s ease-in-out infinite; }

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
}
```

## Base reset
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img { max-width: 100%; height: auto; display: block; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
```

## Output template

```
DESIGN SYSTEM: [Funnel name]
Palette: [Modern Dark | Clean Light | Warm Conversion]

TOKENS DROPPED IN
- Color block: [palette name]
- Spacing: 12-step scale
- Type: 9-step scale (mobile base)
- Radius: 4 steps
- Shadow: 4 steps

COMPONENTS DEFINED
- .cta-primary
- .card
- .glass-card
- .form-input

ANIMATIONS ENABLED
- fade-in (scroll reveal)
- cta-pulse (idle CTA only)
- slide-in-left (testimonial reveal)

ACCESSIBILITY CHECK
- Contrast: [pass/fail per pair]
- Min tap target: 48 px (CTA), 44 px (links)

HANDOFF
- brand-color-application: deploy the defined palette using 5 placement techniques (product bg, gradient headings, color per category, color grid, tint unification)
- conversion-ux: layout patterns using these tokens
- mobile-responsive: breakpoint scaling on type and spacing
```
