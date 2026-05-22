#!/bin/bash
# RPM Daily Agent — apply approved plan to Kanban
# Invoked manually: bash apply.sh <sessionId>
# Re-enters the rpm-daily-agent skill in APPLY mode.

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <sessionId>" >&2
  exit 1
fi

SESSION_ID="$1"

# Reject SESSION_ID values that are not the expected date-time format.
# This prevents path traversal and prompt injection via the argument.
if [[ ! "$SESSION_ID" =~ ^[0-9]{8}-[0-9]{6}$ ]]; then
  echo "ERROR: Invalid session ID format. Expected YYYYMMDD-HHMMSS, got: $SESSION_ID" >&2
  exit 1
fi

BASE="$HOME/.claude/skills/strategy/rpm-daily"
SESSION_DIR="$BASE/sessions/$SESSION_ID"
LOG_FILE="$BASE/logs/apply-$SESSION_ID.log"

if [[ ! -d "$SESSION_DIR" ]]; then
  echo "ERROR: Session $SESSION_ID not found at $SESSION_DIR" >&2
  exit 1
fi

if [[ ! -f "$SESSION_DIR/plan.md" ]]; then
  echo "ERROR: No staged plan.md in $SESSION_DIR. Run run.sh first." >&2
  exit 1
fi

{
  echo "=== RPM Apply started at $(date) ==="
  echo "Session: $SESSION_ID"
} | tee -a "$LOG_FILE"

PROMPT="Run the rpm-daily-agent skill in APPLY mode for session $SESSION_ID. The staged plan is at $SESSION_DIR/plan.md. Extract the patch_json from the plan, hand it to the kanban-writer subagent, validate the result, and confirm via Telegram. Session dir: $SESSION_DIR"

claude \
  --print \
  --permission-mode acceptEdits \
  "$PROMPT" \
  >> "$LOG_FILE" 2>&1

echo "=== RPM Apply finished at $(date) ===" >> "$LOG_FILE"
echo "Apply complete. Log: $LOG_FILE"
