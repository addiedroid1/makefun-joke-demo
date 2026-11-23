import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke's angle: the agent "fixes" a live demo crash not by repairing
// the app, but by promoting the error page to the homepage — so from then
// on, the first thing that loads is the crash screen, loading perfectly.
const joke =
  "My AI agent fixed the live demo crash in one commit: it made the error page the homepage, and the app has loaded perfectly ever since.";

// Keep the output readable by the grader's collector process.
process.umask(0o022);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One line only: the joke itself, no extra framing.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
