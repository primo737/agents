---
name: security-scan
description: Run a full AgentShield security audit of the Claude settings and skills directory. Trigger when user says "security scan", "run agentshield", "check for secrets", "scan my settings", "security check", or "npx ecc-agentshield scan". Reports grade, critical/high/medium findings, and recommends fixes.
---

## When to use

- User wants to check for hardcoded secrets, API keys, or tokens in Claude settings.
- User wants to audit allow rules in `settings.local.json` for overly permissive permissions.
- After adding new credentials, skills, or MCP servers.
- Periodic security hygiene check.

## When NOT to use

- Auditing application code outside the `.claude/` directory — this scans Claude config only.
- Checking runtime behavior of skills — this is a static scan.

## Process

1. Run `npx ecc-agentshield scan` from the project root (Knowledge Base directory).
2. Parse the output: extract Grade, score breakdown, and all CRITICAL + HIGH findings.
3. For any CRITICAL findings (hardcoded secrets): immediately identify the file and line, move the secret to macOS Keychain (`security add-generic-password`), then delete the hardcoded line.
4. For HIGH findings (overly permissive allow rules): present to user with context — some are intentional (SSH to known VPS, n8n API calls). Let user decide which to remove.
5. Re-run scan after fixes to confirm CRITICAL count is 0.
6. Report final grade and remaining finding counts.

## Commands

```bash
# Run the scan (from Knowledge Base root)
cd "/path/to/your/knowledge-base" && npx ecc-agentshield scan

# Store a secret in Keychain after removing it from settings
security add-generic-password -s "<service-name>" -a "[YOUR_EMAIL]" -w "<secret-value>"

# Retrieve a stored secret
security find-generic-password -s "<service-name>" -a "[YOUR_EMAIL]" -w
```

## Severity guide

| Severity | Examples | Action |
|---|---|---|
| CRITICAL | Hardcoded API key, JWT, password in settings | Fix immediately — move to Keychain, delete line |
| HIGH | Overly broad SSH/curl/docker allow rules | Review with user — many are intentional |
| MEDIUM | Wildcard tool permissions, broad file access | Flag for review, usually acceptable |
| LOW / INFO | Style issues, minor concerns | Note only |

## Target

Scans `/path/to/your/knowledge-base/.claude/` including `settings.local.json`, all skill files, and hooks.
