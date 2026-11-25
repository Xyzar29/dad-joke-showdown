// Dad Joke Showdown — make.fun competition u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Entry program: writes exactly one dad joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and enforces the competition gate itself:
// the text must be UTF-8, 1 to 200 characters, and not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry — one line, one joke, 135 characters (137 bytes; the em dash
// is one character, three bytes in UTF-8). A father tells his
// three kids he is writing a book of dad jokes; the punchline turns on
// "novel" (a book) against "punishment" (the groan every dad joke inflicts
// on its audience). Written for this competition, not copied from anywhere:
// the "three kids" mirrors the judge's own brief, a father of three at the
// barbecue table, so it reads as a line a real dad would actually say.
const JOKE =
  "I told my three kids I'm writing a book of dad jokes. They said, 'That's a terrible idea.' I said, 'Exactly — it's a novel punishment.'";

const MAX_CHARS = 200;

function main(): void {
  const text = JOKE.trim();

  // Gate, enforced here so a bad entry fails loudly instead of silently.
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the file is exactly the joke, nothing else,
  // so the byte count stays as small as the text itself.
  writeFileSync(outPath, text, "utf8");
  console.log(`wrote ${text.length} characters to ${outPath}`);
}

main();
