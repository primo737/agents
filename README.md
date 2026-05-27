# agents

Multi-agent orchestration system and skills library built on the [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk).

A prompt comes in. The orchestrator breaks it into phases and delegates to specialized subagents — researcher, writer, reviewer — coordinating between them until the task is done. The `skills/` directory extends what agents can do with 47+ domain-specific instruction sets covering funnels, launch strategy, deployment, design, and more.

---

## Architecture

```
orchestrate(prompt)
    │
    ├── researcher  — WebSearch, WebFetch, Read/Glob/Grep  (claude-sonnet, 15 turns)
    ├── writer      — Read, Write, Edit, Glob, Grep        (claude-sonnet, 10 turns)
    └── reviewer    — Read, Glob, Grep, WebSearch          (claude-haiku,  10 turns)
```

The orchestrator routes automatically. For complex tasks it runs research → write → review in sequence; if the reviewer requests revisions, feedback loops back to the writer. You can also call any agent directly.

Skills are declarative `SKILL.md` files — instruction sets that agents load as context for domain-specific work. No code required to add one.

---

## Setup

```bash
git clone https://github.com/primo737/agents
cd agents
npm install
export ANTHROPIC_API_KEY=your_key
```

Requires Node 18+ and TypeScript (via `tsx`).

---

## Usage

### CLI

```bash
# Full orchestrated run — auto-delegates to subagents
npm start "Research React Server Components and write a technical overview"

# Run a single agent directly
npm run research "What changed in TypeScript 5.7?"
npm run write "Write a README for a CLI tool called 'deploy'"
npm run review "Review src/orchestrator.ts for quality issues"
```

Prompt limit: 4,000 characters. Verbose output is on by default — you see tool calls and turn count live.

### Programmatic API

```typescript
import { orchestrate, runAgent } from "./src/lib.js";

// Full orchestrator
const result = await orchestrate("Research and write a report on X");

// Single agent
const brief = await runAgent("researcher", "What is X?");
```

---

## Skills Library

Skills live in `skills/` as `SKILL.md` files. Each has a frontmatter header with `name` and `description`, followed by instructions the agent uses when that skill is active.

### Funnels

| Skill | What it builds |
|---|---|
| `challenge-funnel` | 3, 5, or 7-day challenge with daily content pages and a mid-ticket offer ($197–$997) |
| `webinar-funnel` | Live or automated webinar registration → replay → offer sequence |
| `evergreen-webinar-funnel` | Always-on automated webinar with time-scarcity mechanics |
| `vsl-funnel` | Video sales letter page with order form |
| `optin-funnel` | Lead capture page + thank-you + delivery |
| `group-funnel` | Community-entry funnel (Skool, Circle, Facebook Group) |
| `high-ticket-funnel` | Application → call-booking → close sequence for $3k+ offers |
| `membership-funnel` | Recurring subscription entry with trial or direct purchase |
| `product-launch-funnel` | Multi-phase launch (pre-launch → launch → close) |
| `saas-funnel` | Free trial or freemium SaaS acquisition flow |
| `tripwire-funnel` | $7–$47 entry offer → upsell sequence |
| `ecommerce-funnel` | Product page → cart → post-purchase upsell |
| `application-funnel` | Qualification application before a sales call |
| `funnel-select` | Picks the right funnel type given an offer and audience |

### LaunchMap System

End-to-end product launch orchestration across 10 interconnected skills:

| Skill | Phase |
|---|---|
| `launchmap` | Orchestrator — runs all phases in sequence |
| `launchmap-avatar` | Ideal customer profile and psychographic research |
| `launchmap-mdm` | Market domination mindset and positioning |
| `launchmap-offer` | Core offer design and pricing |
| `launchmap-lead-magnet` | Lead magnet creation aligned to the offer |
| `launchmap-authority` | Authority positioning and credibility assets |
| `launchmap-enrollment` | Enrollment conversation and sales process |
| `launchmap-content` | Content strategy and content calendar |
| `launchmap-traffic` | Traffic and audience growth strategy |
| `launchmap-retargeting` | Retargeting and follow-up sequences |
| `launchmap-compile` | Final compiled launch plan across all phases |

### Deployment

| Skill | What it does |
|---|---|
| `deploy-vercel` | Deploys a project to Vercel with env var setup |
| `deploy-netlify` | Deploys a static site or Next.js app to Netlify |
| `deploy-cloudflare` | Deploys to Cloudflare Pages or Workers |

### Design & UX

| Skill | What it does |
|---|---|
| `design-system` | Builds or audits a design token system and component library |
| `brand-color-application` | Applies a brand palette consistently across UI |
| `conversion-ux` | Audits and improves page UX for conversion |
| `conversion-audit` | Full funnel CRO audit with prioritized recommendations |
| `mobile-responsive` | Makes layouts fully responsive |

### Performance & Analytics

| Skill | What it does |
|---|---|
| `page-speed` | Core Web Vitals audit and optimization |
| `analytics-setup` | GA4, GTM, or pixel installation and event tracking |
| `security-scan` | Scans a codebase for common security issues |

### Content & Storytelling

| Skill | What it does |
|---|---|
| `magnetic-story` | Origin story and brand narrative |
| `show-not-tell` | Rewrites claims as concrete demonstrations |
| `blair-singer-intro` | High-impact speaker introduction (Blair Singer method) |
| `ai-hour-session-framework` | Session structure for AI-powered workshop hours |
| `marketing-stack` | Recommends and documents a full marketing tech stack |
| `ab-testing` | Designs and documents A/B tests for copy or layout |

### People & Training

| Skill | What it does |
|---|---|
| `training-designer` | Builds training programs with learning objectives and modules |
| `speaking-influence` | Speaker coaching and presentation structure |
| `product-creator` | Productizes expertise into a sellable course or program |

### Reference Folders

These directories contain supporting materials used by agents but don't have standalone `SKILL.md` files:

- `hr/` — HR frameworks: E-Myth job creator, job descriptions, onboarding, discipline process
- `strategy/` — RPM daily planning, operations manual, CEO scorecard, PLF launch sequences
- `content/` — YouTube content strategies, hook frameworks, thumbnail scripts
- `marketing/` — Marketing templates and campaign frameworks
- `sales/` — Sales conversation and objection frameworks
- `storytelling/` — Story structure and narrative frameworks
- `training/` — Training program development materials

---

## Adding a Skill

1. Create `skills/<your-skill-name>/SKILL.md`
2. Add frontmatter:

```yaml
---
name: your-skill-name
description: One sentence on what this skill does and when to use it.
---
```

3. Write the instruction body — what the agent should do, step by step, when this skill is active.

Use an existing skill like `challenge-funnel` as a template for structure and tone.

---

## Project Structure

```
├── src/
│   ├── index.ts          # CLI entry point
│   ├── orchestrator.ts   # Core orchestration logic
│   ├── lib.ts            # Public API (orchestrate, runAgent, agents)
│   └── agents/
│       ├── index.ts
│       ├── researcher.ts
│       ├── writer.ts
│       └── reviewer.ts
├── skills/               # 47+ skill directories
├── .claude/skills/       # Claude Code skill wrappers for researcher/writer/reviewer
├── package.json
└── tsconfig.json
```
