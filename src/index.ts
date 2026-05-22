#!/usr/bin/env node

import { orchestrate, runAgent } from "./orchestrator.js";

const USAGE = `
Usage:
  npx tsx src/index.ts <prompt>              Run the orchestrator (auto-delegates to agents)
  npx tsx src/index.ts research <prompt>     Run the researcher agent directly
  npx tsx src/index.ts write <prompt>        Run the writer agent directly
  npx tsx src/index.ts review <prompt>       Run the reviewer agent directly

Environment:
  ANTHROPIC_API_KEY   Required. Your Anthropic API key.

Examples:
  npx tsx src/index.ts "Research React Server Components and write a technical overview"
  npx tsx src/index.ts research "What are the latest changes in TypeScript 5.7?"
  npx tsx src/index.ts write "Write a README for a CLI tool called 'deploy'"
  npx tsx src/index.ts review "Review the file src/orchestrator.ts for quality"
`.trim();

const AGENT_COMMANDS = new Set(["research", "write", "review"]);
const AGENT_MAP: Record<string, string> = {
  research: "researcher",
  write: "writer",
  review: "reviewer",
};

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    console.log(USAGE);
    process.exit(0);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is required.");
    console.error("Set it with: export ANTHROPIC_API_KEY=your-key-here");
    process.exit(1);
  }

  const command = args[0]!;
  const isAgentCommand = AGENT_COMMANDS.has(command);
  const rawPrompt = isAgentCommand ? args.slice(1).join(" ") : args.join(" ");

  if (!rawPrompt) {
    console.error("Error: Please provide a prompt.");
    console.log(USAGE);
    process.exit(1);
  }

  if (rawPrompt.length > 4000) {
    console.error("Error: Prompt exceeds maximum allowed length (4000 chars).");
    process.exit(1);
  }

  const prompt = rawPrompt;

  const verbose = true;

  try {
    let result: string;

    if (isAgentCommand) {
      const agentName = AGENT_MAP[command]!;
      console.log(`Running ${agentName} agent...\n`);
      result = await runAgent(agentName, prompt, { verbose });
    } else {
      console.log("Running orchestrator...\n");
      result = await orchestrate(prompt, { verbose });
    }

    if (result && !verbose) {
      console.log(result);
    }
  } catch (err) {
    console.error("Fatal error:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();
