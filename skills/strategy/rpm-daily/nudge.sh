#!/bin/bash
# RPM Daily Nudge — fired by launchd at 07:00 Manila.
# Does NOT extract inbox or run the orchestrator.
# Just reminds Cris that it's RPM time. He triggers the real run when ready.

set -euo pipefail

BASE="$HOME/.claude/skills/strategy/rpm-daily"
LOG_FILE="$BASE/logs/nudge.log"
TODAY=$(date "+%Y-%m-%d")
# Set RPM_VAULT_PATH in your environment to point to your Obsidian RPM folder.
RPM_VAULT_PATH="${RPM_VAULT_PATH:-$HOME/Documents/Knowledge Base/RPM}"
NOTE_PATH="$RPM_VAULT_PATH/Daily Nudge ${TODAY}.md"

mkdir -p "$BASE/logs"

# 1. macOS notification (non-intrusive native ping)
osascript -e "display notification \"Time to run your RPM. Open Claude Code and say 'run RPM' when ready.\" with title \"🌅 RPM Daily\" sound name \"Glass\"" 2>/dev/null || true

# 2. Drop a nudge note in Obsidian so the prompt persists if Cris missed the notification
cat > "$NOTE_PATH" <<EOF
---
type: rpm-nudge
date: ${TODAY}
status: pending
---

# RPM Daily Nudge — ${TODAY}

It is RPM time.

When you are ready to plan the day, do one of:

- In Claude Code: type **\`run RPM\`** or **\`do my morning plan\`**
- In terminal: \`bash ~/.claude/skills/strategy/rpm-daily/run.sh\`

The full harvest will fire at that point: WhatsApp / Telegram / Email / GHL / Kanban → RPM blocks → daily plan staged to \`Knowledge Base/RPM/\`.

Nothing has been extracted yet. This nudge is read-only.
EOF

echo "[$(date)] nudge fired · note: ${NOTE_PATH}" >> "$LOG_FILE"
echo "Nudge sent. Run when ready: bash ~/.claude/skills/strategy/rpm-daily/run.sh"
