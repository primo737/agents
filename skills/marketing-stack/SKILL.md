---
name: marketing-stack
description: Wire [Author] funnels to the GHL-centered marketing stack covering email, SMS, payments, CRM, and cross-tool plumbing via n8n on the VPS. Trigger when user says "connect this to GHL", "wire the form", "set up Stripe", "send a webhook to n8n", "integrate with HubSpot", "Mailchimp / ConvertKit / ActiveCampaign", or asks how a funnel page should hand off to GHL workflows. Skip if asking for strategy, copy, or offer design; defer to launchmap-* / magnetic-story.
---

## When to use

- Connecting a Lovable, Framer, or Vercel funnel page to GHL for lead capture.
- Setting up Stripe checkout that lands the contact and order in GHL.
- Wiring an n8n workflow on the VPS to plumb data between GHL and another tool.
- Documenting a webhook payload between two systems.
- If asked about Mailchimp, ConvertKit, ActiveCampaign, or HubSpot as alternatives or migrations.
- Mapping a funnel handoff: form submit, payment, booking, tag, automation trigger.

## When NOT to use

- Funnel strategy or page architecture: route to launchmap or funnel-select.
- Copy for the email or SMS: route to magnetic-story.
- Offer or stack design: route to product-creator.
- Page speed or analytics: route to page-speed or analytics-setup.

## The stack defaults

GHL is the primary CRM, email engine, SMS engine, calendar, and workflow runner. Almost everything else is plumbing on top.

- **CRM / email / SMS**: GoHighLevel. Main location `[GHL_LOCATION_ID]`. Fast Track is a separate sub-account `[GHL_LOCATION_ID]`. Always confirm "main or Fast Track" before any action.
- **Payments**: Stripe runs through GHL for most products. Stripe is connected at the location level. Orders create a contact and an opportunity automatically.
- **Cross-tool plumbing**: n8n on the VPS handles anything GHL can't do natively. n8n calls Claude via SSH node hitting a bash wrapper, NOT the Anthropic API node. Reference workflow: `launchmap-builder-claude`.
- **WhatsApp**: WAHA on the VPS for outbound. Triggered from n8n. Never send from Mac.
- **Mailchimp, ConvertKit, ActiveCampaign**: NOT in use. Document only as alternatives if explicitly requested. Do not propose migrating away from GHL without a real reason.
- **HubSpot**: not in use as primary. Only relevant when integrating with a partner who uses it.
- **API access**: GHL Private Integration Token (PIT) stored in Keychain. Location ID `[GHL_LOCATION_ID]`. Base URL `[N8N_HOST]`.

## Process

1. Identify the source (where the data starts: Lovable form, Framer form, Stripe checkout, GHL form).
2. Identify the destination (GHL contact + tag + workflow trigger, n8n webhook, downstream tool).
3. Pick the simplest path. GHL native form on a GHL page is one step. External page posting to GHL takes a webhook or the GHL form embed.
4. Map every field. Email, name, phone, source UTMs, custom fields. Confirm GHL custom fields exist before wiring.
5. Build the integration. Document the IDs, endpoints, and payloads.
6. Test end-to-end with a real submission. Confirm the contact lands in GHL with all fields and tags. Confirm downstream workflow fires.
7. Add error handling in n8n if cross-tool. Retry on failure, alert on persistent error.
8. Document for handoff: where it lives, what triggers it, where to see logs.

## Brand voice rules (always apply)

- English only.
- No em dashes.
- No URLs in SMS.
- No auto-send. Draft for approval before any GHL SMS, email, or outbound to real contacts.
- Drip 1 per 30 to 60 seconds when sending more than 10 messages. For larger sends, run via GHL workflow.
- Defensible numbers: $10M+ revenue, 1,000+ trained.
- Outreach intro rule: every Alice DM/SMS/WhatsApp opens with "Hi [Name], this is Alice, The AI assistant." then "You're getting this because you signed up for [event]." before personalization.

## Anti-patterns

- Never recommend Mailchimp, ConvertKit, or ActiveCampaign migration without a real reason. GHL is the primary platform.
- Never propose a Zapier subscription when n8n on the VPS already does the job.
- Never call the Anthropic API node from n8n. Use the SSH node hitting the bash wrapper on the VPS.
- Never act on Fast Track (`[GHL_LOCATION_ID]`) unless Use "Fast Track" by name.
- Never auto-send to real contacts. Always draft for approval first.
- Never ship a Stripe integration that doesn't land the order in GHL with the buyer's tag.
- Never collect a phone number without checking that opt-in language is on the form (TCPA / SMS compliance).
- Never blast more than 10 messages without dripping. Confirm cadence before firing.
- Never put a URL in an SMS. Move the link to email or WhatsApp, or direct the recipient to check email.

## GHL ↔ Stripe ↔ n8n integration map

```
[Lovable / Framer / Vercel funnel page]
        |
        |  form submit (HTTPS POST with hidden UTM fields)
        v
[GHL form endpoint OR n8n webhook]
        |
        |  contact upsert (email as primary key) + tag + custom fields
        v
[GHL contact created]
        |
        |  workflow trigger (tag added)
        v
[GHL workflow]
        |--> email sequence
        |--> SMS (no URLs)
        |--> n8n webhook for cross-tool steps
        |--> opportunity created in pipeline

[Stripe Checkout]
        |
        |  payment success
        v
[GHL Stripe integration]
        |
        |  order created, contact tagged "purchaser-[product-slug]"
        v
[GHL workflow: post-purchase]
        |--> delivery email
        |--> n8n webhook (e.g., provision access, send WhatsApp via WAHA)
```

## Common automation recipes

### Recipe 1: External page form to GHL

External page (Lovable/Framer/Vercel) posts to GHL via the form's hosted endpoint OR to an n8n webhook that creates the contact via GHL API.

```javascript
// On the external page
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  // Append stored UTMs
  const utms = JSON.parse(localStorage.getItem('utm_last_touch') || '{}');
  Object.assign(data, utms);

  await fetch('https://[N8N_HOST]/webhook/lead-capture', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  window.location.href = '/thank-you';
});
```

n8n webhook node receives, calls GHL Contacts API to upsert with tag, returns 200.

### Recipe 2: Stripe purchase to GHL

Stripe is connected to GHL at the location. On successful payment, GHL native automatically:

- Creates or updates the contact
- Creates an order
- Fires the "Order Submitted" workflow trigger

Tag the contact `purchaser-[product-slug]` inside the workflow. Trigger the post-purchase email sequence and any n8n webhook needed for downstream provisioning.

### Recipe 3: GHL to WhatsApp via WAHA on VPS

GHL workflow webhook step → n8n on VPS → WAHA HTTP API → outbound WhatsApp.

n8n webhook payload:

```json
{
  "phone": "+639171234567",
  "name": "Maria Santos",
  "event": "blc-day-3-reminder",
  "message_template": "blc_day_3"
}
```

n8n looks up the template, renders with name, posts to WAHA `/api/sendText`. Always draft for approval before activating. Drip if more than 10 recipients.

### Recipe 4: GHL to Claude (via VPS SSH wrapper)

When a GHL workflow needs Claude reasoning (e.g. personalize a DM, summarize a call), n8n SSH node hits the bash wrapper on the VPS that calls the Claude CLI. Reference workflow: `launchmap-builder-claude`. Do NOT use the Anthropic API node directly.

```
[GHL workflow] -> webhook -> [n8n on VPS]
  -> SSH node: ssh user@vps "claude-wrapper.sh '<prompt>'"
  -> capture stdout -> back to GHL via API or webhook response
```

## Webhook payload examples

### GHL contact upsert (n8n -> GHL API)

```http
POST https://services.leadconnectorhq.com/contacts/upsert
Authorization: Bearer <PIT from Keychain>
Version: 2021-07-28
Content-Type: application/json

{
  "locationId": "[GHL_LOCATION_ID]",
  "email": "lead@example.com",
  "firstName": "Maria",
  "lastName": "Santos",
  "phone": "+639171234567",
  "tags": ["blc-may-2026-lead", "source-fb-cpc"],
  "customFields": [
    { "key": "utm_source", "field_value": "facebook" },
    { "key": "utm_campaign", "field_value": "blc-may-2026" }
  ]
}
```

### GHL workflow webhook OUT (to n8n)

```http
POST https://[N8N_HOST]/webhook/post-purchase
Content-Type: application/json

{
  "contact_id": "abc123",
  "email": "buyer@example.com",
  "first_name": "Maria",
  "phone": "+639171234567",
  "product": "blc-cohort-may",
  "amount": 297,
  "currency": "USD",
  "stripe_payment_intent": "pi_xxx"
}
```

## Alternative tools (reference only. not in use)

If asked about migrating or integrating with these:

| Tool | What it does | Why it's not in use |
|---|---|---|
| Mailchimp | Email marketing | GHL covers email + has CRM, SMS, workflows in one place |
| ConvertKit | Email marketing for creators | Same |
| ActiveCampaign | Email + automation | Same |
| HubSpot | CRM + marketing hub | Heavier, more expensive, GHL fits The solo-with-30-capacity model |
| Zapier | Cross-tool plumbing | n8n on VPS does the same for ~$0/mo marginal cost |
| Make | Cross-tool plumbing | Same |

If a partner or client uses one of these, integrate via webhook or native API. Do not migrate off GHL.

## Embed snippets (reference)

GHL form embed (preferred for non-GHL pages):

```html
<iframe
  src="https://[YOUR_FUNNEL_HOST]/widget/form/FORM_ID"
  style="width:100%;height:600px;border:none;"
  scrolling="no">
</iframe>
```

Stripe Payment Link (no-code):

```html
<a href="https://buy.stripe.com/XXXXXX" class="cta-primary">Buy now $297</a>
```

Stripe Checkout via API (if custom flow needed):

```javascript
async function checkout() {
  const r = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId: 'price_XXX',
      successUrl: window.location.origin + '/thank-you',
      cancelUrl: window.location.origin + '/offer'
    })
  });
  const { url } = await r.json();
  window.location.href = url;
}
```

## Integration QA checklist

- [ ] Test submission lands in correct GHL location (main, not Fast Track unless specified)
- [ ] All form fields map to GHL contact fields including UTMs
- [ ] Tag applied correctly to trigger downstream workflow
- [ ] Welcome email fires on signup
- [ ] Stripe payment lands as GHL order with buyer tag
- [ ] Post-purchase delivery email fires
- [ ] n8n webhooks have retry on failure
- [ ] WhatsApp drips, no blast
- [ ] No SMS contains a URL
- [ ] All outbound copy English only, no em dashes
- [ ] Drafts reviewed before sending to real contacts
