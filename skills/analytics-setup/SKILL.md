---
name: analytics-setup
description: Install and configure GA4, Meta Pixel, Google Tag Manager, conversion tracking, and UTM parameter handling on [Author] funnels. Trigger when user says "install GA4", "add the Pixel", "set up GTM", "track conversions", "UTM strategy", "why isn't my Pixel firing", "events aren't showing", or asks how to wire ad attribution to a GHL form or thank-you page. Skip if asking for strategy, copy, or offer design; defer to launchmap-* / magnetic-story.
---

## When to use

- Standing up GA4, Meta Pixel, or GTM on a new funnel page (Lovable, Framer, Vercel).
- Conversion events are missing in Ads Manager or GA4.
- You are launching paid traffic and need UTM conventions and tracking proof.
- A GHL form needs to fire a Pixel Lead event AND a GA4 conversion.
- Cross-domain tracking is broken between funnel page and GHL-hosted thank-you page.
- Ad URLs are being shared with no UTMs and attribution is collapsing.

## When NOT to use

- Strategy ("which channel should I run"): route to launchmap-traffic.
- Copy or creative for the ads: route to magnetic-story.
- Offer or stack design: route to product-creator.
- Page speed audits: route to page-speed.
- A/B test design: route to ab-testing.

## The stack defaults

GHL is the system of record. GA4, Meta Pixel, and GTM are net-new layers ON TOP of GHL native tracking. Do not duplicate.

- **GHL native**: form submissions, contact creation, opportunity stage changes, appointment bookings, SMS and email opens. These already exist in GHL reporting. Do not re-fire them as custom GA4 events from inside GHL.
- **GA4 + Pixel + GTM**: handle ad-platform attribution. They sit on the funnel pages (Lovable, Framer, Vercel) and on the GHL-hosted thank-you page.
- **GHL form submit handoff**: the form submission fires a Pixel and GA4 event via embedded script on the page that hosts the form. If the form lives on a GHL funnel page, use GHL's tracking integration fields. If the form lives on a Lovable or Framer page that posts to GHL, fire the events client-side on submit.
- **Cross-domain tracking**: when GHL hosts the thank-you page on a subdomain or `*.gohighlevel.com` URL, configure GA4 cross-domain in Admin > Data Streams > Configure tag settings. Add both domains.
- **UTM mapping into GHL**: capture UTMs from the URL on landing, store in localStorage, append to form as hidden fields, map to GHL custom fields named `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
- **Locations**: main `[GHL_LOCATION_ID]`. Fast Track `[GHL_LOCATION_ID]` is separate; confirm before touching.

## Process

1. Confirm which page hosts the form (GHL funnel page, Lovable, Framer, or Vercel) and where the thank-you page lives.
2. Decide whether GTM is needed. If there are 3+ tags or you want non-developer changes, use GTM. Otherwise hardcode GA4 and Pixel.
3. Install GA4 base tag, Meta Pixel base tag (if running Meta ads), and GTM container if used.
4. Define the event taxonomy (see table below). Map each event to one source: GHL native OR custom GA4/Pixel script. Never both.
5. Wire UTM capture script on every landing page. Confirm UTMs reach GHL custom fields by submitting a test form with UTMs in the URL.
6. Set up GA4 conversions for the events that matter (lead, registration, purchase). Set up Pixel custom conversions in Events Manager.
7. Configure cross-domain tracking if the thank-you page is on a different domain.
8. QA with the GTM Preview, GA4 DebugView, and Meta Pixel Helper Chrome extension. Verify each event fires once per action.
9. Document the install: what fires where, which IDs, which custom fields in GHL.

## Brand voice rules (always apply)

- English only.
- No em dashes.
- No URLs in SMS.
- No auto-send. Draft for approval.
- Drip 1 per 30 to 60 seconds when sending more than 10 messages.
- Defensible numbers: $10M+ revenue, 1,000+ trained.

## Anti-patterns

- Never fire duplicate events from both GHL native AND custom GA4 script. Pick one source per event.
- Never leave UTM-less ad URLs in production. Every paid link gets utm_source, utm_medium, utm_campaign at minimum.
- Never inject Pixel or GA4 synchronously in `<head>`. Always async.
- Never ship a Pixel without a server-side Conversions API path planned. iOS 17 and ATT have eaten browser-side fidelity.
- Never trust Pixel Helper alone; verify in Events Manager that events arrive and dedupe correctly.
- Never use `gtag('event', 'purchase')` without a transaction_id. Causes inflated counts.
- Never store full UTM history in localStorage forever. Use first-touch and last-touch keys with a TTL.
- Never deploy to Fast Track without explicit "Fast Track" instruction.

## GTM container blueprint

```
GTM-XXXXXXX (primary funnel container)
  Tags
    GA4 Configuration (G-XXXXXXXXXX) on All Pages
    GA4 Event: cta_click; trigger: CTA click
    GA4 Event: form_submit; trigger: form submit
    GA4 Event: scroll_depth; trigger: scroll 25/50/75/100
    GA4 Event: purchase; trigger: thank-you page view (with transaction_id)
    Meta Pixel Base on All Pages
    Meta Pixel Event: Lead; trigger: form submit
    Meta Pixel Event: CompleteRegistration; trigger: webinar signup thank-you
    Meta Pixel Event: Purchase; trigger: purchase thank-you (value, currency)
  Triggers
    All Pages, CTA click (CSS .cta-primary), form submit, scroll depth, thank-you pageview
  Variables
    DLV - transaction_id, DLV - value, DLV - currency, DLV - utm_*
```

## GA4 init snippet

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure'
  });
</script>
```

## Meta Pixel init snippet

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

## Event taxonomy mapped to GHL

| Action | GA4 event | Pixel event | GHL native | Source of truth |
|---|---|---|---|---|
| Page view | `page_view` (auto) | `PageView` | n/a | GA4 + Pixel |
| Lead opt-in (form submit) | `generate_lead` | `Lead` | Contact created | GA4 + Pixel fire client-side. GHL records contact. Do not re-fire from GHL workflow. |
| Webinar registration | `sign_up` | `CompleteRegistration` | Tag applied | Same. Client-side fire on form submit. |
| Booking confirmed | `schedule` (custom) | `Schedule` | Appointment booked | Fire from GHL booking confirmation page if hosted there. |
| Purchase | `purchase` (with transaction_id, value, currency) | `Purchase` (value, currency) | Order created | Fire on thank-you page. Pull transaction_id from URL or session. |
| CTA click (engagement) | `cta_click` (custom) | n/a | n/a | GA4 only. Pixel does not need it. |
| Scroll depth | `scroll_depth` | n/a | n/a | GA4 only. |

## UTM convention table

| Param | Required | Format | Example |
|---|---|---|---|
| utm_source | yes | platform name, lowercase | `facebook`, `instagram`, `google`, `youtube`, `email`, `sms` |
| utm_medium | yes | channel type | `cpc`, `social`, `email`, `affiliate`, `organic` |
| utm_campaign | yes | campaign slug, lowercase, hyphens | `blc-may-2026`, `fast-track-launch` |
| utm_content | optional | creative or variant ID | `headline-a`, `video-2`, `cv-portrait` |
| utm_term | optional | keyword or audience | `coaches`, `lookalike-1pct` |

## UTM capture and forward snippet

```javascript
// Capture UTMs from the URL on landing
(function() {
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utms = {};
  keys.forEach(k => {
    const v = params.get(k);
    if (v) utms[k] = v;
  });
  if (Object.keys(utms).length > 0) {
    // First-touch: only set if not already stored
    if (!localStorage.getItem('utm_first_touch')) {
      localStorage.setItem('utm_first_touch', JSON.stringify(utms));
    }
    // Last-touch: always overwrite
    localStorage.setItem('utm_last_touch', JSON.stringify(utms));
  }
})();

// Append UTMs to every form as hidden fields
document.querySelectorAll('form').forEach(form => {
  const utms = JSON.parse(localStorage.getItem('utm_last_touch') || '{}');
  Object.entries(utms).forEach(([key, val]) => {
    if (form.querySelector(`input[name="${key}"]`)) return;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = val;
    form.appendChild(input);
  });
});
```

## Cross-domain tracking checklist

- [ ] GA4: Admin > Data Streams > Configure tag settings > Configure your domains. Add both funnel domain and GHL thank-you domain.
- [ ] GHL: in funnel settings, enable third-party tracking and paste GA4 + Pixel IDs.
- [ ] Verify `_gl` link decoration appears on outbound links to the GHL domain.
- [ ] Verify session does not split when crossing domains. Test in GA4 DebugView.

## QA checklist

- [ ] GA4 base tag fires on every page (DebugView)
- [ ] Pixel base tag fires on every page (Pixel Helper)
- [ ] Lead event fires once on form submit, not twice
- [ ] Purchase event has transaction_id, value, currency
- [ ] UTMs land in GHL contact custom fields
- [ ] Thank-you page tracked as conversion in GA4
- [ ] Pixel custom conversions configured in Events Manager
- [ ] No duplicate events between GHL native and custom script
- [ ] Cross-domain decoration working
- [ ] Conversions API planned or live for purchase events
