export const jsNodeModuleFiles = [
  '**/*.config.{js,mjs}',
  '**/.*rc.{js,mjs}',
  '**/{scripts,bin}/**/*.{js,mjs}',
];

export const jsImportStaticAnalysisRuleEntries = [
  {
    name: 'import/no-unresolved',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md',
    value: 'error',
  },
  {
    name: 'import/named',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md',
    value: 'error',
  },
  {
    name: 'import/default',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md',
    value: 'error',
  },
  {
    name: 'import/namespace',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md',
    value: 'error',
  },
  {
    name: 'import/export',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md',
    value: 'error',
  },
  {
    name: 'import/no-duplicates',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md',
    value: 'warn',
  },
];
