---
name: jan-mraz-design-trends
description: 17 web design trends across two sources — Jan Mráz 2025 (8 trends: huge typography, interactive 3D, brutalism, bento grid, AI-generated patterns, parallax scrolling, minimalism, glassmorphism) + 2026 trends (9 trends: barely-there UI, maximalism with asterisk, human touch, grade-school palette, spaceship instruction manual, democratized animations, internet nostalgia, sonic UX, tech bro gradient). Use after design-system and brand-color-application. Trigger on: "make this feel current", "what design styles are trending", "the page looks dated", "add some visual interest", "make it feel like a modern SaaS", "apply a design trend", "what's trending in 2026", "web-design-trends-2026", "2026 design trends". Skip if no palette or layout exists yet — run design-system and conversion-ux first.
---

# Jan Mráz Design Trends

17 web design techniques across two source videos. Each trend is a visual layer applied on top of an existing layout and palette — not a replacement for structure or tokens.

---

## Sources

| # | Video | Trends | Reference note |
|---|---|---|---|
| 1 | YouTube `jrY0mcEPTYI` — Jan Mráz, Wix Studio design course | 8 trends (2025) | `Research & References/Design References/Web Design Trends — 8 Techniques.md` |
| 2 | YouTube `waHuVF3XuMA` — Top 9 Web Design Trends of 2026 | 9 trends (2026) | `Research & References/Design References/Web Design Trends — 9 Trends 2026.md` |

**Visual frames (source 1):** `/var/folders/_f/50xndm6j1qj5wbtfdyw3qn8h0000gn/T/peepshow-lWGFKM/report.html`  
**Visual frames (source 2):** `/var/folders/_f/50xndm6j1qj5wbtfdyw3qn8h0000gn/T/peepshow-H7p1sl/report.html`  
**Visual file (source 2):** `/Users/[you]/Desktop/SMM/2026 Web Design Trends.fig` (Figma companion)

---

## When to use
- Palette is defined (`design-system`) and colors are placed (`brand-color-application`) but the page still looks generic or template-ish.
- User says the page looks dated, flat, or indistinct.
- Auditor flagged "visual design" or "memorability" weak.
- Starting a new section and need to decide which visual technique gives it identity.
- Picking a single signature technique to make a page unmistakably modern.

## When NOT to use
- No palette defined yet — run `design-system` first.
- No layout exists yet — run `conversion-ux` first.
- User needs copy or offer framing — defer to `launchmap-mdm` or `magnetic-story`.
- Brutalism — never for The funnels. Skip it.

## Prerequisites
- `design-system` tokens defined.
- `brand-color-application` palette deployed (at least 1–2 techniques applied).
- Real content (headlines, body, images) in place — design trends dress the content, they don't replace it.

---

## 2025 Trends (Jan Mráz — Source 1)

### 1. Huge Typography
**What it is:** Oversized fonts as the primary visual element. Text stops being decoration and becomes the design. The headline is the hero — no image needed.

**Reference frames:** 0024 (WHAT LIES AHEAD — full-viewport gradient fill), 0035 (ART letterform behind yellow content block), 0046 (artist name at display scale alongside photography), 0057 (MASON outline type as background texture)

**Apply when:** Hero sections, section openers, brand statement pages. Best on dark backgrounds where a gradient fill or high-contrast weight carries the moment.

**Implementation:**
```css
/* Full-viewport gradient headline */
.hero-huge {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--accent) 0%, var(--warning) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Outline/stroke text as background texture */
.hero-stroke {
  font-size: clamp(6rem, 18vw, 16rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.15);
  line-height: 1;
  user-select: none;
  pointer-events: none;
}
```

**Jan's 4 tips:**
1. Keep it concise — short phrases or single headlines only. Three words beats a sentence.
2. Create contrast — oversized text needs a bold opposing background color.
3. Maintain balance — generous white space or the scale overwhelms.
4. Prioritize readability — legible at a glance, even at extreme sizes.

**Constraint:** Never apply gradient text below 30px. Never use for body copy. Headlines only.

---

### 2. Interactive 3D
**What it is:** Real-time 3D scenes embedded directly into the page. The object responds to cursor position, drag, or scroll. Spline is the go-to tool — no 3D expertise required.

**Reference frames:** 0102 (Spline isometric game board — "Press and drag to orbit"), 0114 (Spline AI generate — scattered 3D characters at different depths)

**Apply when:** Product hero sections, brand differentiation moments, SaaS feature showcases where a product UI screenshot would feel flat.

**Implementation (Spline embed):**
```html
<!-- After exporting from spline.design, paste the iframe: -->
<div class="spline-container">
  <iframe
    src='https://my.spline.design/[YOUR-SCENE-ID]/'
    frameborder='0'
    width='100%'
    height='100%'
    loading="lazy"
    title="3D product visualization"
  ></iframe>
</div>
```
```css
.spline-container {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--radius-xl);
  overflow: hidden;
}
```

**Constraint:** Spline scenes are heavy (300KB–2MB+ JS). Only use on hero sections where the load is justified. Add a static fallback image for slow connections. Never use more than one Spline scene per page.

---

### 3. Brutalism
**What it is:** Raw, unpolished, deliberately anti-design aesthetic. Bold layouts, stark contrasts, heavy oversized elements, intentional discomfort.

**Reference frame:** 0136 (wednesdaystudio.co — electric green top half, black bottom half, glitchy type)

**Apply when:** Never for The funnels. Brutalism signals anti-establishment identity — the opposite of trust and credibility. It has a place in certain creative agency or Web3 brand contexts, but not here.

**Note from Jan:** "It's not my personal favorite... the stark visuals can create a sense of intentional discomfort that doesn't always align with a polished experience."

---

### 4. Bento Grid
**What it is:** Modular grid layout where each cell is a self-contained feature unit. Cells vary in size by importance — the primary feature gets the largest tile. Inspired by Apple's product pages.

**Reference frames:** 0192 (bentogrids.com — gallery of bento examples), 0204 (Apple iPhone 16 Pro — canonical bento with 16+ tiles, center PRO tile 4× larger), 0215 (Linear-style SaaS bento — 2 large + 6 small use-case tiles)

**Apply when:** Feature sections with 4–12 items, product spec showcases, "what we offer" sections. Works especially well on SaaS and coaching pages where multiple independent benefits need equal but differentiated representation.

**Implementation (4-cell bento):**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: var(--space-4);
}

/* Hero tile — spans 2 columns and 2 rows */
.bento-hero {
  grid-column: span 2;
  grid-row: span 2;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

/* Standard tile */
.bento-tile {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

/* Accent tile — uses palette color */
.bento-tile--accent {
  background: var(--accent);
  color: #FFFFFF;
}
```

**Sizing hierarchy (Apple pattern):**
- 1 hero tile: 2×2 or 2×3 cells — primary product or value proposition
- 2–3 medium tiles: 1×2 cells — key features
- 4–8 small tiles: 1×1 cells — specs, stats, secondary features

**Constraint:** Maximum 12 tiles before the grid loses hierarchy. Mobile: collapse to single column, hero tile loses span. Never make all tiles the same size — sameness kills the hierarchy that makes bento readable.

---

### 5. AI-Generated Patterns and Gradients
**What it is:** Machine-generated backgrounds, textures, and gradients that replace manual photography or illustration as section atmospherics.

**Reference frames:** 0226 (Grainient.supply — noisy/grainy vs smooth gradient categories), 0249 (Midjourney explore — masonry of AI-generated imagery), 0271 (Figma Community pattern marketplace)

**Sourcing pipeline Jan showed:**
| Source | Best for | Cost |
|---|---|---|
| grainient.supply | Ready-made smooth and noisy gradients for hero backgrounds | Free + paid plans |
| midjourney.com | Custom AI-generated patterns, textures, editorial imagery | Subscription |
| Figma Community (search: patterns) | Designer-curated pattern files, more editorial control | Free |
| ui8.net | High-res paid assets — liquid gradients, spectral textures | $12–40/asset |

**Apply when:** Hero section backgrounds, card fills, section dividers, anywhere a solid color feels flat and photography isn't available or appropriate.

**Implementation (noisy gradient background):**
```css
.section-gradient-bg {
  background-image: url('/assets/hero-gradient.jpg'); /* from Grainient */
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Overlay to ensure text contrast */
.section-gradient-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6); /* --bg-primary at 60% */
}
```

**Constraint:** Always add a semi-transparent overlay to ensure WCAG AA text contrast. Never use an AI pattern as the only visual — it needs a headline or a purpose. Check licensing before using Midjourney outputs commercially.

---

### 6. Parallax Scrolling
**What it is:** Background elements move at a different (slower) rate than foreground elements as the user scrolls, creating perceived depth and motion.

**Reference frames:** 0316 (astronaut in clouds — scroll position 1), 0327 (deep space scene — scroll position 2, same page with "+RECREATE THIS EFFECT" CTA)

**Apply when:** Hero sections, landing page scene transitions, product showcases where storytelling benefits from a sense of movement.

**Implementation:**
```css
.parallax-section {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax-bg {
  position: absolute;
  inset: -20%;  /* oversize so movement doesn't reveal edges */
  background-image: url('/assets/hero.jpg');
  background-size: cover;
  background-position: center;
  will-change: transform;
}
```
```js
// Vanilla JS parallax — runs on scroll
const bg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.4; // 40% of scroll speed
  bg.style.transform = `translateY(${y}px)`;
}, { passive: true });
```

**Accessibility constraint — required:**
```css
@media (prefers-reduced-motion: reduce) {
  .parallax-bg { transform: none !important; }
}
```

**Constraint:** Disable parallax on mobile — it causes performance issues and the effect is imperceptible on touch scroll. Never use JavaScript-driven parallax on more than 2 elements per page — layout thrash on low-end devices. CSS-only parallax (`background-attachment: fixed`) is simpler but has iOS Safari bugs.

---

### 7. Minimalism
**What it is:** Remove everything that doesn't earn its place. White space is a design element, not emptiness. One accent color. Simple typography. The page earns trust through restraint.

**Reference frames:** 0372 (Apple.com — gradient logo, "Gift magic.", single CTA on white), 0384 (Volaso — cinematic dark hero, left-aligned headline, robot on wet street), 0395 (Volaso white section — "Fully Autonomous, Uncompromisingly Sustainable" at 80px, no images), 0406 (Volaso black section — italic/roman weight contrast, no imagery)

**Apply when:** Always — minimalism is the baseline. Every other trend is applied on top of a minimal foundation, not instead of one.

**Volaso dark/light alternation pattern (frames 0395 + 0406):**
```css
/* White section — oversized headline as scaffold */
.section-light {
  background: #FFFFFF;
  padding: var(--space-24) var(--space-8);
}
.section-light .label {
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-4);
}
.section-light .headline {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;  /* light weight on white */
  line-height: 1.1;
  color: var(--text-primary);
}

/* Dark section — italic contrast */
.section-dark {
  background: #000000;
  padding: var(--space-24) var(--space-8);
}
.section-dark .headline {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.1;
  color: #FFFFFF;
}
.section-dark .headline em {
  font-style: italic;
  font-weight: 300;  /* italic lighter than roman */
}
```

**Design test:** If removing an element doesn't break the message, remove it.

---

### 8. Glassmorphism
**What it is:** Frosted glass UI elements — semi-transparent containers with backdrop blur, subtle borders, and soft shadows layered over colored or photographic backgrounds.

**Reference frame:** 0429 (Wix Studio "Glass" project intro — glassmorphism implementation demo start)

**Apply when:** Cards overlaid on photo or gradient backgrounds, modals, notification toasts, feature highlight panels on dark or image-heavy sections.

**Implementation:**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-xl);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* On light/white backgrounds — invert opacity */
.glass--light {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}
```

**Jan's implementation notes:**
- Adjust `opacity` of the container for the transparency level
- Apply `blur` filter to the background layer
- Add subtle shadow around glass layers to emphasize depth
- Complement with bright accent or gradient overlays
- Use sparingly — cards and key UI elements only, not full-page

**Constraint:** `backdrop-filter` is not supported in all browsers — add a fallback solid `background` for Firefox without hardware acceleration. Never apply to more than 3–4 elements per page. Glassmorphism on a white background reads as muddy; it needs a colorful or dark background to create the contrast that makes the glass visible.

---

## 2026 Trends (Source 2)

9 trends tracked across hundreds of sites. Each follows the same apply-as-a-layer rule as the 2025 set — not a replacement for layout or tokens.

**Reference frames:** `/var/folders/_f/50xndm6j1qj5wbtfdyw3qn8h0000gn/T/peepshow-H7p1sl/report.html` (frames 0001–0158, 40 scene-change extracts)

---

### 9. Barely There UI
**What it is:** Hyper-minimal aesthetic driven by AI company aesthetics (OpenAI, Perplexity). One font family, max 2 colors, generous white space, data/graphs as the visual centerpiece. Skinny-weight sans-serifs, stripped layouts. VC money flowing into AI makes everyone copy the aesthetic.

**Reference frames:** 0005 (presenter explains trend origin), 0009 (AI company example — stripped single-font layout), 0013 (graph/data as hero element), 0017 (color palette walkthrough)

**Apply when:** SaaS or AI-adjacent products; when the brand allows a cold, confident, data-forward tone.

**Implementation:**
```css
/* Barely There UI container */
.btu-section {
  max-width: 680px;
  margin: 0 auto;
  padding-block: clamp(4rem, 10vw, 8rem);
  font-family: var(--font-sans); /* single family only */
}

/* Data/graph as the hero element */
.btu-chart-hero {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* Minimal color palette — max 2 colors active at once */
.btu-accent { color: var(--accent); }
.btu-body   { color: var(--text-muted); font-weight: 300; }
```

**Constraint:** Only works when data tells a story. Never apply to emotional/human-centered brands — it reads cold. Never more than 2 active colors on a page.

---

### 10. Maximalism with an Asterisk
**What it is:** Big bold headers, one very loud accent color, controlled visual noise. NOT full chaos — maximalism pumped the brakes because AI hyper-minimalism toned the industry down. Start one step past comfortable.

**Reference frames:** 0025 (presenter explains why full maximalism didn't happen), 0033 (site with saturated pop-color accent, oversized type)

**Apply when:** Creative brands, youth-facing products, anywhere the brand needs to signal energy and edge.

**Implementation:**
```css
/* Maximalism* hero headline — bigger than comfortable */
.max-hero {
  font-size: clamp(5rem, 16vw, 14rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.04em;
}

/* Single loud accent that breaks from palette */
.max-accent-block {
  background: var(--accent); /* high-saturation, breaks the palette */
  color: #fff;
  display: inline-block;
  padding: 0.1em 0.3em;
  transform: rotate(-1.5deg); /* slight tilt = controlled chaos */
}
```

**Constraint:** One chaotic element per section maximum. Never apply to coaching/sales funnels — trust is conversion and maximalism disrupts trust signals.

---

### 11. Human Touch (Wabi-sabi)
**What it is:** Anti-AI-generated signals — hand-drawn arrows, rough underlines, unpolished photography, paper/ink textures, subtle asymmetry. Anything that says "a real person made this." Rooted in the Japanese aesthetic philosophy that imperfection adds beauty.

**Reference frames:** 0045 (hand-drawn arrows + rough underlines), 0049 (paper/ink textures + Anti-UX sub-pattern)

**Apply when:** Mission-driven brands, craft/food/wellness businesses, any site competing with AI-generated content. Highest value when the brand's humanity IS the differentiator.

**Implementation:**
```css
/* "Shot on phone" photo treatment */
.human-photo {
  filter: saturate(0.85) contrast(1.08);
  border-radius: 12px 4px 16px 6px; /* deliberately imperfect */
}

/* SVG scribble underline on key CTA */
.human-underline {
  text-decoration: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='8'%3E%3Cpath d='M0,5 C30,2 60,8 90,4 C120,1 150,7 200,4' stroke='%23f97316' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: bottom;
  padding-bottom: 6px;
}

/* Slight asymmetry — intentional not broken */
.human-card {
  border-radius: 16px 4px 16px 8px;
  transform: rotate(0.5deg);
}
```

**Sub-pattern — Anti-UX:** A single deliberately non-intuitive element (rotated label, unexpected hover, hidden nav) that signals creative confidence. Use at most once per page — signals edge, not broken design.

**Constraint:** One or two imperfect elements only — never a full design system of chaos. Should feel human, not buggy.

---

### 12. Grade School Color Palette
**What it is:** Moving from neon toward Crayola-adjacent hues with personality — basic colors with interesting hue/tint/shade variation. A specific warm orange (sometimes red-shifted) is the dominant 2026 signal color. Neon peaked in 2024 and declined in 2025; basics are back.

**Reference frames:** 0057 (cream/off-white coaching site — Crayola tone in practice), 0065 (orange dominant color examples), 0069 (red-shifted orange variants everywhere)

**Apply when:** Consumer brands, food, lifestyle, wellness — any site that wants warmth without earth-tone territory.

**Implementation:**
```css
:root {
  /* Grade school palette tokens */
  --gs-orange:     hsl(25, 90%, 55%);   /* dominant 2026 orange */
  --gs-orange-red: hsl(15, 88%, 52%);   /* red-shifted variant */
  --gs-yellow:     hsl(48, 95%, 60%);
  --gs-blue:       hsl(210, 75%, 58%);
  --gs-green:      hsl(145, 65%, 45%);
  --gs-neutral:    hsl(40, 25%, 95%);   /* warm off-white base */
}

.gs-hero {
  background: var(--gs-neutral);
  color: var(--gs-orange);
}
```

**Constraint:** Don't strip the personality trying to make it "professional" — the whole point is these colors read slightly naive and bold. Never neutralize them into corporate grey-beige.

---

### 13. Spaceship Instruction Manual
**What it is:** Blueprint/technical diagram aesthetic — pointing lines, monospace labels, lo-fi product diagrams, component callouts that look like a CAD drawing or flight manual. Cross-field trend appearing in product design, print, and web simultaneously.

**Reference frames:** 0077 (presenter intro — blueprint layout explanation), 0082 (Le Camp startup site — illustrated floating badge icons, line-art patches on dark hero)

**Apply when:** Technical products, SaaS, developer tools, anything where "how it works" benefits from an engineering-diagram visual metaphor. Even slightly technical is enough.

**Implementation:**
```css
/* Monospace callout label */
.spaceship-label {
  font-family: 'Courier New', 'Roboto Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Pointing line (SVG inline) */
/* Use: <svg class="spaceship-line"> with <line> + arrowhead <marker> */
.spaceship-diagram {
  border: 1px dashed var(--border);
  padding: var(--space-4);
  position: relative;
}

/* Background grid atmosphere */
.spaceship-bg {
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
}
```

**Constraint:** 3–5 callout lines maximum per section. Never replace real product screenshots with diagrams unless the diagram IS the product. A little goes a long way.

---

### 14. Democratized Fancy Animations
**What it is:** WebGL and interactive 3D (Spline, Unicorn Studio, Rive) accessible to non-specialist designers. Full immersive scroll experiences that used to require a developer who lived and breathed JavaScript.

**Note:** Overlaps with Trend 2 (Interactive 3D). Expands the tool palette — adds Unicorn Studio and Rive as first-class options alongside Spline. Key principle from source: "Our clients don't need award-winning websites. They just need sites that help their businesses."

**Reference frames:** 0086 (presenter intro — gate-kept trend becoming accessible), 0106 (four WebGL game-style web experiences showing immersive scroll)

**Apply when:** Hero sections where storytelling needs motion; product demos where 3D adds clarity. Animations must ADD to the goal — not distract.

**Unicorn Studio embed:**
```html
<div data-us-project="[PROJECT-ID]" style="width:100%;height:100%"></div>
<script src="https://cdn.unicorn.studio/v1.4.0/unicornStudio.umd.js"></script>
<script>UnicornStudio.init();</script>
```

**Rive embed:**
```html
<canvas id="rive-canvas"></canvas>
<script src="https://unpkg.com/@rive-app/canvas"></script>
<script>
  new rive.Rive({
    src: '/animations/hero.riv',
    canvas: document.getElementById('rive-canvas'),
    autoplay: true,
    stateMachines: 'State Machine 1',
  });
</script>
```

**Constraint:** One animation type per page. Always add a static fallback image. Never use if animation doesn't serve the site's communication goal.

---

### 15. Internet Nostalgia
**What it is:** Early-2000s web references — custom cursors, pixelated icons, hard blocky Windows-style UI, ASCII art, retro tooltips. Emerging trend as millennials (who grew up when the internet was born) become decision-makers. Best used as seasoning.

**Reference frames:** 0110 (presenter intro — trend origin explained), 0114 (custom cursor examples — tasteful not rainbow), 0118 (Windows-style blocky table-era UI elements), 0122 (ASCII art / text-character images)

**Apply when:** Brands targeting 30–45-year-olds, gaming/tech culture adjacent, anywhere a single memorable Easter-egg moment creates differentiation.

**Implementation:**
```css
/* Custom cursor */
body { cursor: url('/assets/cursor.cur'), auto; }

/* Retro hard-shadow tile (Windows 9x style) */
.retro-tile {
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  border-radius: 0;
  background: #c0c0c0;
}

/* Pixel font label */
.pixel-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  line-height: 1.8;
  image-rendering: pixelated;
}
```

**Constraint:** One or two nostalgia elements per page — seasoning, not a theme. Never rebuild the full layout as retro. Works as an Easter egg, collapses as a brand direction.

---

### 16. Sonic UX
**What it is:** Micro sounds on interactions — click tones, hover beeps, subtle audio feedback. Not full soundtracks. Phones trained users to expect sonic feedback from interactions; that expectation is spilling into web.

**Reference frames:** 0126 (presenter intro — "tab that's playing music" joke), 0130 (micro-sound interaction examples), 0134 (implementation guidance — opt-in, one tone per type)

**Apply when:** Highly interactive pages, gaming/entertainment, anywhere interaction delight is core to brand. Not for funnels — cognitive load is the enemy of conversion.

**Implementation:**
```js
function playClick() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 800;
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  osc.start();
  osc.stop(ctx.currentTime + 0.1);
}

// Only bind after user opts in
document.getElementById('enable-sounds')?.addEventListener('click', () => {
  document.querySelectorAll('.interactive')
    .forEach(el => el.addEventListener('click', playClick));
});
```

**Constraint (required):** Always opt-in — a toggle or "enable sounds" button. Never autoplay audio. One sound type per interaction. Never on coaching/sales funnels.

---

### 17. Tech Bro Gradient
**What it is:** Soft purple-blue-teal radial gradient blobs as background atmosphere. The unofficial uniform of every SaaS company, AI startup, and developer tool. Easy, looks good, extremely prevalent.

**Reference frames:** 0138 (presenter intro — purple visible in background behind presenter), 0142 (SaaS gradient blob examples), 0146 (how to stand out by varying shape and combo)

**Apply when:** SaaS, AI, developer tools, fintech. If brand is trying to signal "innovative software company," this is the baseline.

**Implementation:**
```css
.gradient-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(270, 80%, 65%) 0%,
    hsl(210, 90%, 60%) 50%,
    transparent 70%
  );
  opacity: 0.4;
  filter: blur(80px);
  pointer-events: none;
}

/* To stand out: vary the shape */
.gradient-orb--elongated {
  width: 800px;
  height: 400px;
  border-radius: 60% 40% 70% 30%;
  background: radial-gradient(
    ellipse,
    hsl(var(--accent-hsl)) 0%,
    hsl(210, 90%, 60%) 60%,
    transparent 100%
  );
}
```

**Constraint:** Avoid the default sphere shape — it's everywhere. Vary shape, mix in brand accent color, or dial opacity down. If it doesn't serve the brand identity, skip it regardless of prevalence.

---

## Technique selection guide

| Page section | 2025 trend(s) | 2026 trend(s) |
|---|---|---|
| Hero | Huge Typography, Parallax, Minimalism (dark/cinematic), Interactive 3D | Barely There UI, Tech Bro Gradient, Democratized Animations, Human Touch |
| Feature grid | Bento Grid, Color per Category | Spaceship Instruction Manual, Grade School Palette |
| Stats / proof row | Bento Grid (small tiles), Minimalism | Barely There UI (graph hero), Spaceship labels |
| Section background | AI-Generated Patterns, Glassmorphism (overlay on pattern) | Tech Bro Gradient (orb), Grade School Palette fill |
| CTA section | Minimalism, Huge Typography (headline scale), Glassmorphism (card) | Human Touch underline on CTA, Maximalism* (one loud button) |
| Product showcase | Bento Grid, Interactive 3D, Parallax | Democratized Animations, Spaceship Instruction Manual |
| Brand moments | Glassmorphism, AI Patterns | Internet Nostalgia (1 element), Human Touch, Maximalism* |
| Interaction layer | — | Sonic UX (opt-in only) |

**Max 2–3 trends per page.** Mixing 2025 and 2026 trends is fine — pick by section, not by year.

---

## Process

1. Confirm `design-system` tokens and `brand-color-application` placement are complete.
2. Identify which 2–3 sections on the page have zero visual distinctiveness.
3. For each section, select the most appropriate trend from the guide above.
4. Never apply Brutalism. Never apply all 8 trends at once.
5. Implement, then run a contrast check on every text-on-background pair.
6. Check `prefers-reduced-motion` is respected for Parallax and any animation.
7. Test on mobile — Bento collapses to single column, Parallax disables, Huge Typography needs `clamp()` not fixed `px`.
8. Hand off to `mobile-responsive` for breakpoint verification.

---

## Anti-patterns

**2025 trends:**
- Never apply more than 3 trends to one page — they cancel each other.
- Never use Brutalism for The funnels — it breaks trust.
- Never use Huge Typography below `--text-3xl` (30px).
- Never use gradient text on body copy — contrast fails at small sizes.
- Never use Interactive 3D more than once per page — Spline is heavy.
- Never skip `prefers-reduced-motion` on Parallax.
- Never apply Glassmorphism on a white background without a colorful layer behind it.
- Never use Bento Grid with all equal-sized tiles — hierarchy is the point.
- Never skip the mobile test on Bento — spans must collapse cleanly.
- Never use a commercial AI-generated image (Midjourney) without checking the license.

**2026 trends:**
- Never apply Barely There UI to emotional/human-centered brands — it reads cold and clinical.
- Never exceed 2 active colors when using Barely There UI.
- Never apply Maximalism* to coaching or sales funnels — it disrupts trust signals.
- Never make Human Touch feel random or buggy — asymmetry should feel intentional.
- Never apply Human Touch as a full design system — one or two imperfect elements only.
- Never neutralize Grade School Palette into corporate beige — the naive boldness is the point.
- Never apply Spaceship Instruction Manual with more than 5 callout lines per section.
- Never replace real product screenshots with Spaceship diagrams unless the diagram IS the product.
- Never use Democratized Animations more than once per page — performance cost is real.
- Never use Democratized Animations if they don't add to the communication goal.
- Never apply Internet Nostalgia as a full site theme — one Easter-egg moment only.
- Never deploy Sonic UX without an opt-in toggle — forced audio is a UX violation.
- Never use Sonic UX on funnels — cognitive load kills conversion.
- Never use the default Tech Bro Gradient sphere shape without variation — it's everywhere.
- Never apply Tech Bro Gradient if it doesn't match the brand identity — popularity ≠ fit.

---

## Complement map

| Skill | Relationship |
|---|---|
| `design-system` | **Prerequisite.** Defines tokens this skill uses. Run first. |
| `brand-color-application` | **Prerequisite.** Places the palette before visual trends are layered on. |
| `conversion-ux` | **Parallel.** CTA placement and social proof patterns must survive whatever trend is applied. Confirm after applying. |
| `mobile-responsive` | **Downstream.** Bento spans, huge type clamp values, parallax disable — all need breakpoint verification. |
| `frontend-design` | **Parallel.** Aesthetic direction set there should govern which trend gets selected here. |

---

## Output template

```
DESIGN TRENDS: [Funnel / page name]

— 2025 TRENDS (Jan Mráz) —
[1]  Huge Typography         : [section] — [gradient fill / stroke / weight contrast] | skipped: [reason]
[2]  Interactive 3D          : [section] — [Spline scene] | skipped: [reason]
[3]  Brutalism               : skipped — not for The funnels
[4]  Bento Grid              : [section] — [n tiles, hero spans ___] | skipped: [reason]
[5]  AI Patterns             : [section] — [Grainient / Midjourney / Figma Community] | skipped: [reason]
[6]  Parallax                : [section] — [scroll ratio] | prefers-reduced-motion: applied | skipped: [reason]
[7]  Minimalism              : [section] — [dark/light alternation / oversized headline / single CTA]
[8]  Glassmorphism           : [section] — [blur, opacity, background type] | skipped: [reason]

— 2026 TRENDS —
[9]  Barely There UI         : [section] — [1 font, n colors, graph hero] | skipped: [reason]
[10] Maximalism*             : [section] — [header scale, accent color choice] | skipped: [reason]
[11] Human Touch             : [section] — [scribble / texture / asymmetry / Anti-UX element] | skipped: [reason]
[12] Grade School Palette    : [section] — [orange variant: hsl(___), key accent] | skipped: [reason]
[13] Spaceship Manual        : [section] — [n callout lines, monospace labels] | skipped: [reason]
[14] Democratized Animations : [section] — [Spline / Unicorn Studio / Rive] | skipped: [reason]
[15] Internet Nostalgia      : [element] — [cursor / pixel icon / retro tooltip] | skipped: [reason]
[16] Sonic UX                : [opt-in toggle wired: yes/no] | skipped: [reason]
[17] Tech Bro Gradient       : [section] — [orb shape, colors, opacity] | skipped: [reason]

TREND COUNT: [n of 17 applied] — max 3 per page

CONTRAST CHECK
- [text] on [background] : [ratio] — [pass AA | fail — fix applied]

MOBILE
- Bento collapse: [confirmed | pending]
- Huge type clamp: [min / preferred / max values]
- Parallax disabled on mobile: [yes | no — add]
- Democratized Animations fallback: [static image path | n/a]

HANDOFF
- mobile-responsive: [bento spans, type clamp, parallax off]
- conversion-ux: [CTA contrast after trend applied]
```
