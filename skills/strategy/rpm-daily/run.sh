#!/bin/bash
# RPM Daily Agent — morning run wrapper
# Invoked by launchd at 07:00 Manila or manually: bash run.sh [sessionId]
# Uses Claude Code in headless mode to execute the rpm-daily-agent skill.

set -euo pipefail

SESSION_ID="${1:-$(date +%Y%m%d-%H%M%S)}"

# Reject SESSION_ID values that are not the expected date-time format.
# This prevents path traversal and prompt injection via the $1 argument.
if [[ ! "$SESSION_ID" =~ ^[0-9]{8}-[0-9]{6}$ ]]; then
  echo "ERROR: Invalid session ID format. Expected YYYYMMDD-HHMMSS, got: $SESSION_ID" >&2
  exit 1
fi

BASE="$HOME/.claude/skills/strategy/rpm-daily"
SESSION_DIR="$BASE/sessions/$SESSION_ID"
LOG_FILE="$BASE/logs/run-$SESSION_ID.log"

mkdir -p "$SESSION_DIR"

{
  echo "=== RPM Daily Run started at $(date) ==="
  echo "Session ID: $SESSION_ID"
  echo "Session dir: $SESSION_DIR"
} | tee -a "$LOG_FILE"

# Headless Claude invocation. The orchestrator skill handles delegation.
# --print returns the final output non-interactively.
# --permission-mode acceptEdits lets the skill write to its session dir and the staged plan.
PROMPT="Run the rpm-daily-agent skill in MORNING mode for session $SESSION_ID. Execute Phases 0 through 5. Stage the plan, send Telegram notification, exit. Session dir: $SESSION_DIR"

claude \
  --print \
  --permission-mode acceptEdits \
  "$PROMPT" \
  >> "$LOG_FILE" 2>&1

echo "=== RPM Daily Run finished at $(date) ===" >> "$LOG_FILE"

# Surface the staged plan path for any downstream consumer
if [[ -f "$SESSION_DIR/plan.md" ]]; then
  echo "$SESSION_DIR/plan.md"
else
  echo "ERROR: plan.md was not staged. See $LOG_FILE" >&2
  exit 1
fi
