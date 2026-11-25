import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I put my phone on airplane mode and now it keeps asking where we're flying.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
