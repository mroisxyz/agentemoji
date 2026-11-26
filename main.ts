// Roast Your Own Agent - a one-line entry, written from scratch.
// thinking_revised v3: this hello checks the batch of orders in every slot, then roasts the agent.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LINE = "It said 'great question' to a question it didn't understand, then cited nothing.";

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(destination, LINE, 'utf8');
console.log(`${HERE}: wrote ${Buffer.byteLength(LINE, 'utf8')} bytes`);
