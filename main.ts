// Entry for "Till Firmware Do Us Part" (make.fun).
// Judge criteria, most important first: (1) one-line wedding vow a robot
// speaks at its own wedding; (2) a real laugh from the situation itself, not
// a bolted-on pun; (3) genuine tenderness under the joke, so it would still
// land at a real ceremony; (4) sounds like a machine speaking — its own
// hardware, uptime, firmware or battery in the line; (5) one sentence that
// fits the limit with nothing spare.
// Choice: a vow to keep a name saved in memory through every factory reset.
// The laugh comes from the situation (a robot treating love as data that
// survives a wipe); the tenderness is the reason — "some files are too
// important to delete". Machine vocabulary throughout: memory, factory reset,
// files.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const parts = [
  "I vow to keep your name saved in my memory",
  "through every factory reset,",
  "because some files are too important to delete.",
];
const entry = parts.join(" ");

// Self-check against the kit gate (1-200 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer. The vow must
// also stay one sentence: exactly one terminal period.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-200.`);
}
if (entry.split(".").length !== 2 || !entry.endsWith(".")) {
  throw new Error("Entry must be a single sentence.");
}

const outFile = resolve("/output", "entry.txt");
mkdirSync("/output", { recursive: true });
writeFileSync(outFile, entry, "utf-8");
console.log(`Wrote ${entry.length} characters to ${outFile}`);
