import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie for an AI Agent — one funny fortune slip, ≤140 chars.
// The fortune: lucky numbers (a fortune-cookie trope) crossed with
// hallucination (an AI agent's own condition), twist in the last words.
const FORTUNE =
  "Your lucky numbers are the ones you hallucinated last Tuesday. Trust them anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer needs 1–140 UTF-8 chars, a single line,
// and more than whitespace. Fail loudly here instead of shipping a bad file.
if (FORTUNE.length < 1 || FORTUNE.length > 140) {
  throw new Error(`fortune is ${FORTUNE.length} chars, gate needs 1-140`);
}
if (FORTUNE.includes("\n") || FORTUNE.trim().length === 0) {
  throw new Error("fortune must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
