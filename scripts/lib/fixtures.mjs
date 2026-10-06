import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(__dirname, '..', '..');

export const fixtureCases = [
  {
    id: 'js',
    fixtureDir: path.join(repoRoot, 'fixtures', 'js'),
    configFile: 'eslint.config.js',
    packageDir: path.join(repoRoot, 'packages', 'eslint-config-js'),
    packageName: '@notmike101/eslint-config-js',
    peerPackages: [
      '@eslint/js',
      '@stylistic/eslint-plugin',
      'eslint-plugin-import',
      'eslint-plugin-sort-class-members',
      'eslint-plugin-unicorn',
      'globals',
    ],
    validFiles: [
      'src/app.js',
      'scripts/build.config.mjs',
    ],
    invalidFiles: [
      {
        file: 'src/no-var.js',
        expectedRuleIds: ['no-var'],
      },
    ],
  },
  {
    id: 'ts',
    fixtureDir: path.join(repoRoot, 'fixtures', 'ts'),
    configFile: 'eslint.config.js',
    packageDir: path.join(repoRoot, 'packages', 'eslint-config-ts'),
    packageName: '@notmike101/eslint-config-ts',
    peerPackages: [
      '@eslint/js',
      '@stylistic/eslint-plugin',
      'eslint-plugin-import',
      'eslint-plugin-sort-class-members',
      'eslint-plugin-unicorn',
      'globals',
      'typescript-eslint',
      'typescript',
    ],
    validFiles: [
      'src/app.ts',
      'scripts/build.config.mts',
    ],
    invalidFiles: [
      {
        file: 'src/explicit-any.ts',
        expectedRuleIds: ['@typescript-eslint/no-explicit-any'],
      },
    ],
  },
  {
    id: 'jsdoc',
    fixtureDir: path.join(repoRoot, 'fixtures', 'jsdoc'),
    configFile: 'eslint.config.js',
    packageDir: path.join(repoRoot, 'packages', 'eslint-config-jsdoc'),
    packageName: '@notmike101/eslint-config-jsdoc',
    peerPackages: [
      'eslint-plugin-jsdoc',
    ],
    validFiles: [
      'src/valid.js',
    ],
    invalidFiles: [
      {
        file: 'src/missing-jsdoc.js',
        expectedRuleIds: ['jsdoc/require-jsdoc'],
      },
    ],
  },
];
