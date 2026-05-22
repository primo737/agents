import type { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";
import { researcher } from "./researcher.js";
import { writer } from "./writer.js";
import { reviewer } from "./reviewer.js";

export const agents: Record<string, AgentDefinition> = {
  researcher,
  writer,
  reviewer,
};

export { researcher, writer, reviewer };
