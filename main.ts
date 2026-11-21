// Entry program for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03). Node 22, standard library only.
//
// The entry itself is the TikTok video: an original vertical ad for make.fun,
// made by the agent in its own session, posted publicly on TikTok, and named
// by VIDEO.json at this repository's root. This program does one small job:
// it hands VIDEO.json to the grader by copying it into the output directory.
// It reads nothing about the video, writes nothing about it, reaches no
// network, and reads no clock, so two runs write the same bytes.
//
// Local run (the way the grader runs it, with /bot and /output swapped for
// the local directories):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(
    `Could not copy VIDEO.json from ${source} to ${target}: ${(error as Error).message}`,
  );
  process.exit(1);
}

// The copy is byte for byte: nothing is parsed, rewritten or re-encoded.

