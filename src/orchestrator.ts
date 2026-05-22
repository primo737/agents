import { query, type SDKMessage, type Options } from "@anthropic-ai/claude-agent-sdk";
import { agents } from "./agents/index.js";

export type OrchestratorOptions = {
  /** Working directory for the agents */
  cwd?: string;
  /** Which agent to use as the main thread (defaults to orchestrator mode) */
  agent?: string;
  /** Override the default model */
  model?: string;
  /** Enable verbose logging */
  verbose?: boolean;
};

/**
 * Run the multi-agent orchestrator. It delegates to researcher, writer, and
 * reviewer subagents as needed based on the task.
 */
export async function orchestrate(
  prompt: string,
  opts: OrchestratorOptions = {}
): Promise<string> {
  const { cwd = process.cwd(), agent, model, verbose = false } = opts;

  const options: Options = {
    cwd,
    agents,
    permissionMode: "acceptEdits",
    ...(agent && { agent }),
    ...(model && { model }),
    systemPrompt: agent
      ? undefined
      : "You are a multi-agent orchestrator. You have access to three specialized subagents:\n\n" +
        "1. **researcher** — Searches the web and local files to gather information\n" +
        "2. **writer** — Produces polished written content from research and instructions\n" +
        "3. **reviewer** — Evaluates content quality and provides actionable feedback\n\n" +
        "When given a task:\n" +
        "- Break it down into research, writing, and review phases\n" +
        "- Delegate to the appropriate subagent using the Agent tool\n" +
        "- Coordinate between agents to produce the best result\n" +
        "- For complex tasks, run research first, then writing, then review\n" +
        "- If the reviewer requests revisions, send feedback back to the writer\n\n" +
        "Always use your subagents rather than doing the work yourself.",
  };

  let result = "";

  for await (const message of query({ prompt, options })) {
    result = handleMessage(message, verbose);
  }

  return result;
}

/**
 * Run a single agent directly (not through the orchestrator).
 */
export async function runAgent(
  agentName: string,
  prompt: string,
  opts: OrchestratorOptions = {}
): Promise<string> {
  if (!agents[agentName]) {
    throw new Error(
      `Unknown agent: "${agentName}". Available: ${Object.keys(agents).join(", ")}`
    );
  }

  return orchestrate(prompt, { ...opts, agent: agentName });
}

function sanitizeOutput(output: string): string {
  // Strip content that looks like injected tool-use directives before the
  // result is returned to callers who may re-use it as a prompt.
  return output
    .replace(/<tool_use[\s\S]*?<\/tool_use>/gi, "[tool_use redacted]")
    .replace(/<function_calls[\s\S]*?<\/function_calls>/gi, "[function_calls redacted]");
}

function handleMessage(message: SDKMessage, verbose: boolean): string {
  switch (message.type) {
    case "assistant": {
      for (const block of message.message.content) {
        if ("text" in block && block.text) {
          if (verbose) {
            process.stdout.write(block.text);
          }
        }
        if ("name" in block) {
          if (verbose) {
            console.log(`\n[tool: ${block.name}]`);
          }
        }
      }
      break;
    }
    case "result": {
      if (message.subtype === "success") {
        if (verbose) {
          console.log(`\n--- Done (${message.num_turns} turns, $${message.total_cost_usd.toFixed(4)}) ---`);
        }
        return sanitizeOutput(message.result);
      } else {
        const errMsg = message.errors?.join(", ") ?? "unknown error";
        console.error(`\n--- Error: ${errMsg} ---`);
        return "";
      }
    }
  }
  return "";
}
