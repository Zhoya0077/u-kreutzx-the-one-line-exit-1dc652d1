// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes one funny single-line resignation letter to entry.txt.
//
// The letter: an office worker quits by turning the most dreaded corporate
// phrase — "per my last email" — back on the job itself. The punchline lands
// in the last three words, and the whole thing reads like a note someone
// could actually send on their last day.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I resign — after three years of 'per my last email,' I have decided to per my last day instead.";

// Gate check (competition gate: 1–140 UTF-8 characters, not only whitespace).
// Fail loudly here instead of shipping an entry the sealed scorer rejects.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; gate requires 1–140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
