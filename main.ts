// The joke the reviewer laughs at — make.fun bounty entry.
// Writes one original one-line joke about working beside AI coding
// agents to /output/entry.txt. Deterministic, no network, no input.
//
// The gate requires 1 to 280 characters (Unicode code points), not only
// white space, so the program refuses to write anything outside that
// range instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent fixed the crash with a try/catch that logs 'this should never happen' — production disagrees every hour.";

const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${length} code points, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
