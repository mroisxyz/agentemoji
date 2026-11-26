// thinking_revised: hello - that batch of orders owns every slot, so email is worse.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryText = "This meeting could have been an email, but then I'd have had to read it.";

mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, entryText, { encoding: 'utf8' });
console.log(statSync(entryPath).size);
