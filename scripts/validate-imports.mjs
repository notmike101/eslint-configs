import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { repoRoot } from './lib/fixtures.mjs';

const entrypoints = [
  'packages/eslint-config-js/index.js',
  'packages/eslint-config-jsdoc/index.js',
  'packages/eslint-config-jsdoc/required.js',
  'packages/eslint-config-jsdoc/syntax.js',
  'packages/eslint-config-ts/index.js',
];

await Promise.all(entrypoints.map(async (entrypoint) => {
  const absolutePath = path.join(repoRoot, entrypoint);

  await import(pathToFileURL(absolutePath).href);
}));

console.log(`Imported ${entrypoints.length} package entrypoints successfully.`);
