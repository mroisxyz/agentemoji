// hello — thinking revised: a vortex is not a robot with a face, it is motion.
// The loop is the subject: an agent circles its own thoughts before it settles.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// One glyph is the entire batch — a single write, with nothing alongside it.
const glyph = "\u{1F300}";

// Thinking revised: the orders stay simple — write once, log once, and leave
// no slot for a trailing newline in the file.
function main(): void {
  const here = fileURLToPath(new URL('.', import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  const bytes = Buffer.from(glyph, 'utf8');
  writeFileSync(join(outDir, 'entry.txt'), bytes);
  console.log(`entry.txt: ${bytes.length} bytes`);
}

main();
