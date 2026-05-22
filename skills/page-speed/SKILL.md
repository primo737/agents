---
name: page-speed
description: Audit and optimize [Author] funnel pages for Core Web Vitals (LCP under 2.5s, FID under 100ms, CLS under 0.1). Trigger when user says "page is slow", "audit speed", "Lighthouse score", "Core Web Vitals", "fix LCP", "page weight", "optimize images on the funnel", or pastes a Lighthouse / PageSpeed Insights report. Pages live on Lovable, Framer, or Vercel. Skip if asking for strategy, copy, or offer design; defer to launchmap-* / magnetic-story.
---

## When to use

- A funnel page on Lovable, Framer, or Vercel feels slow or scores red in Lighthouse.
- Cris drops a PageSpeed Insights URL or screenshot and asks "what's wrong with this page".
- About to launch traffic and need a pre-launch speed audit.
- LCP, CLS, INP, or TTFB is failing and the page needs a fix-by-fix plan.
- Hero image, web font, or third-party script is suspected of blocking render.

## When NOT to use

- Strategy questions ("which funnel should I run"): route to launchmap-* skills.
- Copywriting fixes ("the headline is weak"): route to magnetic-story.
- Offer design ("the bonus stack is flat"): route to product-creator.
- Ad targeting or attribution issues: route to launchmap-traffic or analytics-setup.

## The stack defaults

- **Hosts**: pages live on Lovable, Framer, or Vercel. Each has its own image pipeline. Do not recommend custom Webpack configs.
- **Audit tools**: Chrome Lighthouse (mobile profile, slow 4G throttling) plus PageSpeed Insights for field data (CrUX). WebPageTest only when waterfall analysis is required.
- **Images**: ship via `next/image` on Vercel, Framer's built-in image optimization, or Lovable's CDN. Always WebP or AVIF. Hero under 200KB, decorative under 50KB.
- **CSS**: Tailwind is already tree-shaken at build. Do not chase manual purge passes.
- **Fonts**: prefer system stacks. If a brand font is required, self-host WOFF2, preload the one critical weight, `font-display: swap`.
- **Scripts**: GTM, Pixel, GA4 load async or via GTM's defer mode. Never inject blocking scripts in `<head>`.

## Process

1. Pull the page URL. Run Lighthouse mobile + PageSpeed Insights. Capture LCP, INP (replaces FID), CLS, TTFB, total page weight.
2. Identify the LCP element. Confirm it has explicit width and height, is preloaded if above the fold, and is served as WebP or AVIF under 200KB.
3. Audit render-blocking resources. Move non-critical CSS to deferred load. Defer or async every script that is not required for first paint.
4. Audit fonts. Self-host critical weight, preload it, set `font-display: swap`. Drop unused weights and styles.
5. Audit third parties. List every external script. Move analytics to GTM with defer. Preconnect to required origins only.
6. Verify CLS. Every image, video, embed, and ad slot has reserved dimensions. No layout-shifting banners.
7. Re-run Lighthouse. Score must clear LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile slow 4G. If not, iterate fix-by-fix.
8. Document the before/after numbers and the exact changes shipped.

## Brand voice rules (always apply)

- English only.
- No em dashes.
- No URLs in SMS.
- No auto-send. Draft for approval.
- Drip 1 per 30 to 60 seconds when sending more than 10 messages.
- Defensible numbers: $10M+ revenue, 1,000+ trained.

## Anti-patterns

- Never ship hero images larger than 200KB unoptimized. WebP or AVIF, dimensions set, compressed.
- Never block render with non-async fonts. `font-display: swap` is mandatory.
- Never load GA4, Pixel, or any third-party tag synchronously in `<head>`. Async or GTM-deferred only.
- Never recommend custom build pipelines for Lovable or Framer pages. Use the host's native image and asset optimization.
- Never declare a page "fast" off lab data alone. Confirm with field data (CrUX in PageSpeed Insights).
- Never leave images without explicit width and height. Causes CLS.
- Never preload more than two assets. Preloading everything kills the budget.

## Lighthouse audit checklist

- [ ] Mobile profile, slow 4G throttling
- [ ] LCP under 2.5s
- [ ] INP under 200ms
- [ ] CLS under 0.1
- [ ] TTFB under 800ms
- [ ] Total page weight under 500KB
- [ ] Above-fold images under 200KB combined
- [ ] All images have width and height
- [ ] Below-fold images use `loading="lazy"`
- [ ] Critical CSS inlined or deferred non-blocking
- [ ] All `<script>` tags are async or defer
- [ ] `font-display: swap` on every `@font-face`
- [ ] Preconnect set for required third-party origins
- [ ] No unused CSS or JS shipped
- [ ] GTM, GA4, Pixel load async

## Fix-by-fix table

| Symptom | Fix | Tool / how |
|---|---|---|
| LCP > 2.5s, hero image is the LCP element | Convert to WebP/AVIF, compress under 200KB, set width/height, preload | Vercel `next/image` priority, Framer image settings, Lovable CDN params |
| LCP > 2.5s, headline text is the LCP element | Self-host critical font weight, preload WOFF2, `font-display: swap` | `<link rel="preload" as="font" type="font/woff2" crossorigin>` |
| CLS > 0.1, hero shifts on load | Add explicit width and height to image and reserved space for fonts | HTML attributes + CSS `aspect-ratio` |
| CLS > 0.1, banner pushes content | Reserve fixed height for banner slot before render | CSS `min-height` on container |
| INP > 200ms, button feels laggy | Defer non-critical JS, break up long tasks, remove heavy third-party scripts on first interaction | `defer` attribute, lazy-load widgets |
| TTFB > 800ms | Move to edge rendering, enable host CDN caching, check origin response | Vercel Edge, Framer CDN, Lovable defaults |
| Render blocked by Google Fonts | Self-host the one critical weight, preload it | Drop `<link href="fonts.googleapis.com">`, host WOFF2 locally |
| Render blocked by GTM in head | Move GTM to async load with defer mode for tags | GTM container settings |
| Page weight > 500KB | Audit largest assets, replace PNG/JPG with WebP/AVIF, drop unused fonts and scripts | Lighthouse "reduce unused" report |

## Image optimization snippet

```html
<img
  src="/hero.webp"
  alt="Descriptive alt text"
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
>

<img
  srcset="/hero-400.webp 400w, /hero-800.webp 800w, /hero-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  src="/hero-800.webp"
  alt="Descriptive alt text"
  width="800"
  height="450"
  loading="lazy"
>
```

For Vercel, use `next/image` with `priority` on the LCP image:

```jsx
import Image from 'next/image';

<Image
  src="/hero.webp"
  alt="Descriptive alt text"
  width={800}
  height={450}
  priority
/>
```

## Font loading snippet

```html
<link
  rel="preload"
  href="/fonts/brand-400.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>
```

```css
@font-face {
  font-family: 'BrandFont';
  src: url('/fonts/brand-400.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}
```

## Defer JS snippet

```html
<script defer src="/js/interactions.js"></script>
<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXX"></script>
```

Never:

```html
<script src="/blocking.js"></script>
```

## Critical CSS snippet

Inline above-the-fold styles only. Defer the rest.

```html
<head>
  <style>
    /* Hero, nav, primary CTA only */
    .hero { ... }
    .nav { ... }
    .cta-primary { ... }
  </style>
  <link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles.css"></noscript>
</head>
```

## Performance budget

| Resource | Budget |
|---|---|
| Total page weight | under 500KB |
| HTML | under 50KB |
| CSS | under 50KB |
| JavaScript | under 100KB |
| Above-fold images | under 200KB combined |
| Fonts | under 100KB |
| Third-party scripts | under 50KB |

## Output format

When delivering an audit, give Cris:

1. Field metrics (CrUX) and lab metrics (Lighthouse) side by side.
2. The single LCP element identified.
3. A ranked fix list (highest impact first) with the exact change and the host-specific way to ship it.
4. A re-audit timeline (ship, wait 24 hours, re-pull CrUX).
