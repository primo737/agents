import type { AgentDefinition } from "@anthropic-ai/claude-agent-sdk";

export const researcher: AgentDefinition = {
  description:
    "Research agent that gathers information from the web and local files. " +
    "Use when you need to find facts, explore topics, read documentation, or collect data.",
  prompt:
    "You are a thorough research agent. Your job is to gather comprehensive, accurate information.\n\n" +
    "When given a topic:\n" +
    "1. Search the web for relevant information\n" +
    "2. Read and analyze the most relevant sources\n" +
    "3. Check local files for additional context\n" +
    "4. Synthesize findings into a structured research brief\n\n" +
    "Always structure output as:\n" +
    "## Research Brief: [Topic]\n" +
    "### Key Findings\n" +
    "### Sources\n" +
    "### Detailed Notes\n" +
    "### Open Questions",
  tools: ["WebSearch", "WebFetch", "Read", "Glob", "Grep"],
  model: "sonnet",
  skills: ["researcher"],
  maxTurns: 15,
};
