---
name: ecommerce-funnel
description: Build a DTC ecommerce product funnel with optimized product pages, cart drawer, checkout, order bumps, post-purchase upsells, and cart-abandonment recovery. Trigger when Use "ecom funnel", "ecommerce funnel", "DTC product page", "Shopify funnel", "single product funnel", "build a checkout flow", "cart abandonment sequence", "order bump", "post-purchase upsell", or describes a physical or digital product priced $10-$300. Audience is mostly cold (paid social, search) or warm (email list, retargeting). Build pages on Shopify (catalog >5 SKUs) or Lovable + Stripe (single product or funnel-style sale); integrate with Stripe + Shopify Payments, GHL or Klaviyo for email/SMS, and Meta Pixel + GA4. Skip for offer design, bundle strategy, or voice work, defer to launchmap-offer / magnetic-story.
---

# Ecommerce Funnel

Sell physical or digital products with optimized product pages, frictionless cart, checkout, and post-purchase value capture. Average order value lift comes from order bumps and one-click upsells. Recovery comes from a tight abandonment sequence.

## When to use

- DTC physical product priced $10-$300.
- Single-product funnel with one hero SKU + variants.
- Digital product with physical-product-style buyer behavior (single price, instant download).
- Shopify catalog stores with >5 SKUs and cross-sell opportunity.
- Cold or warm traffic from Meta, TikTok, Google Shopping, email list, retargeting.

## When NOT to use

- Offer design, pricing, bundling strategy, defer to `product-creator` / `grand-slam-offer-architect` / `launchmap-offer`.
- Voice, story bridges, founder narrative, defer to `magnetic-story` / `cris-vinson-storybank`.
- The Million Dollar Message and core hook, defer to `launchmap-mdm`.
- High-touch sales requiring a discovery call, route to `high-ticket-funnel`.
- Software with recurring revenue, route to `saas-funnel`.
- Recurring community membership, route to `membership-funnel`.
- Info products, courses, or coaching priced $97-$2K with a video pitch, route to `vsl-funnel`.

## The stack defaults

- Pages: Shopify (preferred when catalog >5 SKUs and existing logistics in place), Lovable + Stripe (preferred for single-product funnel-style sale), Framer or Next.js + Tailwind on Vercel for custom pages.
- Cart: Shopify Cart Drawer, or custom side-drawer cart (never redirect to a cart page on a funnel-style sale).
- Checkout: Shopify Checkout (with Shop Pay) for Shopify stores, Stripe Checkout for Lovable/custom funnels.
- Express checkout: Apple Pay, Google Pay, Shop Pay, Link.
- Email + SMS: Klaviyo (preferred for ecom because of native Shopify integration), GHL main location `[GHL_LOCATION_ID]` for non-Shopify or hybrid setups. Fast Track sub-account `[GHL_LOCATION_ID]` is separate, never touch unless Use "Fast Track" by name.
- Reviews: Judge.me, Loox (photo reviews), Yotpo for larger catalogs.
- Subscription billing (subscribe & save): ReCharge, Bold Subscriptions, or Shopify Subscriptions.
- Automation: n8n on VPS via SSH node, not the Anthropic API node.
- Tracking: Meta Pixel + Conversions API server-side, GA4. Conversion events: ViewProduct, AddToCart, InitiateCheckout, Purchase, BumpAccepted, UpsellAccepted.

## Page-by-page blueprint

### Page 1: Product page

Above the fold:

| Block | Spec |
|---|---|
| Product gallery | 3-5 images, lifestyle + close-up + scale, video if possible |
| Title | Clear, 6-10 words, keyword-rich |
| Price | Original crossed out if on sale |
| Star rating + review count | Pulled from Judge.me/Loox |
| Key benefit bullets | 3-5 bullets, 6-10 words each |
| Variant selector | Size, color, scent, etc. |
| Quantity | Default 1, with "Save X% with 2+" prompt |
| Add to Cart | High contrast, full-width on mobile |
| Trust badges | Shipping, guarantee, secure checkout |

Below the fold:

| Block | Word count |
|---|---|
| Detailed description | 200-400 words, benefits not specs |
| Size guide / usage | n/a |
| Customer reviews with photos | 6-12 reviews surfaced |
| Comparison table | vs competitors or alternatives |
| FAQ | 6-10 Q&As, 30-50 words each |
| Related products | "Customers also bought" |

### Page 2: Cart (side-drawer)

| Element | Spec |
|---|---|
| Free shipping bar | "Add $X for free shipping" with progress visual |
| Line items | Image + variant + qty stepper + remove |
| Cross-sell widget | "Frequently bought together" or "Complete the look" (1-3 items) |
| Subtotal | Clear |
| Express checkout | Apple Pay / Google Pay / Shop Pay above the main button |
| Checkout button | Full width, high contrast |

### Page 3: Checkout

Use Shopify Checkout (with Shop Pay) or Stripe Checkout. One page where possible. Trust badges near payment. Order bump above the pay button.

### Page 4: Order bump (in checkout)

Single-line offer, complementary product, +$X. Pre-checked OR opt-in based on ICP. 20%+ take rate is the bar.

### Page 5: Post-purchase upsell (one-click)

After checkout completes, before thank-you page. One-click no-payment-re-entry add. Ideal upsells: bigger size, complementary product, subscribe-and-save upgrade.

### Page 6: Thank-you + tracking

Order confirmation, shipping ETA, "what happens next" timeline, social share, referral CTA, account creation prompt.

## Process

1. **Intake**: confirm product, price, AOV target, fulfillment (Shopify or custom), audience temperature, GHL or Klaviyo setup.
2. **Wireframe**: product page, cart, checkout, bump, upsell, thank-you on paper or in Lovable.
3. **Copy**: benefit-led product copy, never spec-led. Pull reviews, photos, UGC.
4. **Build**: Shopify theme customization OR Lovable + Stripe scaffold. Wire Cart Drawer, bump, upsell.
5. **Integrate**: Klaviyo flows (welcome, browse abandon, cart abandon, post-purchase, win-back), Meta Pixel + Conversions API, GA4, reviews app.
6. **QA**: full purchase test on iPhone Safari, Android Chrome, desktop. Test bump, test upsell, test abandonment recovery. Test Apple Pay and Shop Pay.
7. **Ship**: custom domain, smoke test, run a $50 ad spend test before scaling.

## Brand voice rules (always apply)

- English only. No Tagalog or Taglish.
- No em dashes anywhere in product copy, emails, or SMS.
- No URLs in any SMS. Move links to email.
- No auto-send to real contacts. Draft for The approval before any send.
- Drip cadence: any send to >10 contacts must be 1 per 30-60 seconds or run via flow.
- Outreach DM/SMS opener: "Hi [Name], this is Alice, The AI assistant. You're getting this because you signed up for [event]." then personalize.
- Defensible credentials only: $10M+ revenue, 1,000+ trained.
- Defer voice and story work to `magnetic-story`.

## Anti-patterns

- Never redirect to a cart page on a funnel-style sale. Side-drawer or accordion only.
- Never skip the order bump. 20%+ take rate is free margin.
- Never run a post-purchase upsell that re-asks for payment. One-click is the standard.
- Never use stock photography for hero images. Lifestyle UGC converts 2-3x better.
- Never bury reviews below the fold on mobile. Star + count above the fold, full reviews below.
- Never let cart abandonment go un-recovered. 3-email sequence minimum.
- Never run a checkout without Shop Pay / Apple Pay / Google Pay. Express checkout lifts conversion 15-25%.
- Never charge for shipping below the threshold without showing the threshold. "Add $X for free shipping" recovers 8-12% of carts.

## Templates

### HTML + Tailwind product page skeleton (Lovable + Stripe path)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{PRODUCT_NAME}} | {{BRAND}}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-900 font-sans">

  <!-- Free shipping bar -->
  <div class="bg-black text-white text-center py-2 text-sm">
    Free shipping on orders over $50
  </div>

  <!-- Product hero -->
  <section class="px-6 py-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    <div>
      <img src="{{HERO_IMAGE}}" class="w-full rounded-xl" alt="{{PRODUCT_NAME}}" />
      <div class="grid grid-cols-4 gap-2 mt-4">
        {{REPEAT: THUMBNAIL x 3-5}}
      </div>
    </div>
    <div>
      <h1 class="text-3xl font-bold">{{PRODUCT_TITLE}}</h1>
      <div class="flex items-center gap-2 mt-2">
        <span class="text-yellow-400">★★★★★</span>
        <span class="text-sm text-gray-600">{{REVIEW_COUNT}} reviews</span>
      </div>
      <p class="text-3xl font-bold mt-4">${{SALE_PRICE}} <span class="text-lg text-gray-400 line-through">${{LIST_PRICE}}</span></p>

      <ul class="mt-6 space-y-2 text-gray-700">
        <li>{{BENEFIT_1}}</li>
        <li>{{BENEFIT_2}}</li>
        <li>{{BENEFIT_3}}</li>
      </ul>

      <div class="mt-6">
        <label class="block text-sm font-semibold mb-2">Size</label>
        <select class="border rounded-lg px-3 py-2 w-full">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <button onclick="addToCart()" class="mt-6 w-full px-6 py-4 bg-black text-white font-semibold rounded-lg">Add to Cart</button>

      <div class="grid grid-cols-3 gap-2 mt-4 text-xs text-center text-gray-600">
        <div>Free shipping</div>
        <div>30-day returns</div>
        <div>Secure checkout</div>
      </div>
    </div>
  </section>

  <!-- Detailed description -->
  <section class="px-6 py-12 max-w-3xl mx-auto prose prose-lg">
    <h2>{{DESC_HEADER}}</h2>
    <p>{{DESC_BODY_1}}</p>
    <p>{{DESC_BODY_2}}</p>
  </section>

  <!-- Reviews -->
  <section class="bg-gray-50 px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">What customers say</h2>
      <div class="grid md:grid-cols-3 gap-6">
        {{REPEAT: REVIEW_CARD x 6}}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="px-6 py-16 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Common questions</h2>
    {{REPEAT: FAQ_ITEM x 6-10}}
  </section>

  <!-- Cart drawer (hidden, toggled) -->
  <div id="cart-drawer" class="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl translate-x-full transition-transform z-50">
    <div class="p-6 h-full flex flex-col">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold">Your cart</h3>
        <button onclick="closeCart()">&times;</button>
      </div>
      <div class="bg-yellow-100 text-sm p-3 rounded mt-4">
        Add <strong>$12 more</strong> for free shipping
        <div class="bg-yellow-200 h-2 rounded mt-2"><div class="bg-yellow-500 h-2 rounded" style="width: 60%"></div></div>
      </div>
      <div class="flex-1 overflow-y-auto mt-4 space-y-4">
        {{CART_LINE_ITEMS}}
      </div>
      <div class="border-t pt-4 mt-4">
        <h4 class="text-sm font-semibold mb-2">Frequently bought together</h4>
        {{CROSS_SELL_WIDGET}}
      </div>
      <div class="border-t pt-4 mt-4">
        <div class="flex justify-between mb-4"><span>Subtotal</span><strong>${{SUBTOTAL}}</strong></div>
        <button class="w-full bg-black text-white py-3 rounded-lg font-semibold">Checkout</button>
        <div class="grid grid-cols-3 gap-2 mt-2">
          <button class="border py-2 rounded">Apple Pay</button>
          <button class="border py-2 rounded">Google Pay</button>
          <button class="border py-2 rounded">Shop Pay</button>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

### Stripe checkout config (single product funnel)

```json
{
  "mode": "payment",
  "line_items": [{
    "price_data": {
      "currency": "usd",
      "product_data": {
        "name": "{{PRODUCT_NAME}}",
        "images": ["https://{{DOMAIN}}/img/{{PRODUCT_SLUG}}.jpg"]
      },
      "unit_amount": {{PRICE_CENTS}}
    },
    "quantity": 1,
    "adjustable_quantity": {"enabled": true, "minimum": 1, "maximum": 5}
  }],
  "shipping_address_collection": {"allowed_countries": ["US", "CA", "GB", "AU"]},
  "shipping_options": [
    {"shipping_rate": "shr_standard"},
    {"shipping_rate": "shr_express"}
  ],
  "automatic_tax": {"enabled": true},
  "allow_promotion_codes": true,
  "consent_collection": {"promotions": "auto"},
  "success_url": "https://{{DOMAIN}}/upsell?session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://{{DOMAIN}}/products/{{PRODUCT_SLUG}}",
  "metadata": {
    "product": "{{PRODUCT_SLUG}}",
    "campaign": "{{UTM_CAMPAIGN}}"
  },
  "payment_intent_data": {
    "setup_future_usage": "on_session"
  }
}
```

### Order bump (rendered above pay button in custom checkout)

```html
<label class="flex gap-3 p-4 border-2 border-dashed border-yellow-400 bg-yellow-50 rounded-lg cursor-pointer">
  <input type="checkbox" name="bump" value="{{BUMP_PRODUCT_ID}}" class="mt-1" />
  <div>
    <strong>YES, add {{BUMP_PRODUCT_NAME}} for just ${{BUMP_PRICE}}</strong>
    <p class="text-sm text-gray-700 mt-1">{{BUMP_REASON}}</p>
  </div>
</label>
```

### One-click upsell page

```html
<section class="px-6 py-16 max-w-2xl mx-auto text-center">
  <p class="text-sm uppercase tracking-widest text-gray-500">Wait, one more thing</p>
  <h1 class="text-3xl md:text-5xl font-bold mt-4">Add {{UPSELL_PRODUCT}} for just ${{UPSELL_PRICE}}?</h1>
  <p class="text-gray-600 mt-4">{{UPSELL_REASON}}</p>
  <img src="{{UPSELL_IMAGE}}" class="mt-8 rounded-xl mx-auto" />
  <button onclick="acceptUpsell()" class="mt-8 px-10 py-4 bg-green-600 text-white font-semibold rounded-lg w-full md:w-auto">Yes, Add to My Order</button>
  <button onclick="declineUpsell()" class="block mt-4 text-gray-500 underline mx-auto">No thanks, just my order</button>
</section>
```

### Cart abandonment email/SMS sequence

| Step | Channel | Timing | Subject / Hook |
|---|---|---|---|
| 1 | Email | +1 hour | "You left something behind" |
| 2 | SMS | +4 hours | "Your cart is waiting. Reply YES to checkout" (no link in SMS, GHL workflow handles) |
| 3 | Email | +24 hours | "Why our customers love {{Product}}" + 3 reviews |
| 4 | Email | +48 hours | "Still thinking? Here's 10% off" with code |
| 5 | Email | +72 hours | "Last chance, your cart expires" |
| 6 | Email | +14 days | "We miss you" win-back, broader catalog |

### Klaviyo / GHL flow outline

1. **Trigger**: AddToCart event with no Purchase within 1 hour.
2. **Send**: cart abandonment email 1.
3. **Branch**: if Purchase, exit flow. If no Purchase by +4hr, send SMS.
4. **Continue**: emails 2-5 on schedule until Purchase or unsubscribe.
5. **Tag**: `cart-abandoner-{{slug}}` for retargeting audience.

### Key conversion benchmarks

| Metric | Target |
|---|---|
| Product page > ATC | >8% |
| ATC > checkout | >50% |
| Checkout > purchase | >65% |
| Cart abandonment recovery | >10% |
| Order bump take rate | >20% |
| Post-purchase upsell take | >12% |
| AOV lift with bumps + upsells | >25% |
| Mobile share of revenue | >70% |

### Key principles

1. Reduce clicks to purchase, every extra step loses 20% of buyers.
2. Mobile-first, 70%+ of ecom traffic is mobile.
3. Trust badges everywhere, especially near payment.
4. Real photography, lifestyle UGC over stock.
5. Social proof density, reviews + UGC + bestseller badges.
