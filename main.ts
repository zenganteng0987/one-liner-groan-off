import { mkdirSync, writeFileSync } from "node:fs";

// Competition gate: one line, max 140 characters.
const entry =
  "I put my phone on airplane mode and now it keeps asking where we're flying.";

if (entry.length > 140) {
  throw new Error(`entry too long: ${entry.length} characters (max 140)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
