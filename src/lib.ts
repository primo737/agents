/**
 * Public API for programmatic use.
 *
 * @example
 * ```typescript
 * import { orchestrate, runAgent, agents } from "./lib.js";
 *
 * // Run the full orchestrator (auto-delegates to subagents)
 * const result = await orchestrate("Research and write about X");
 *
 * // Run a specific agent
 * const research = await runAgent("researcher", "What is X?");
 *
 * // Access agent definitions directly
 * console.log(Object.keys(agents));
 * ```
 */

export { orchestrate, runAgent } from "./orchestrator.js";
export { agents, researcher, writer, reviewer } from "./agents/index.js";
export type { OrchestratorOptions } from "./orchestrator.js";
