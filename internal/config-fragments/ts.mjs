export const tsNodeModuleFiles = [
  '**/*.config.{ts,mts}',
  '**/.*rc.{ts,mts}',
  '**/{scripts,bin}/**/*.{ts,mts}',
];

export const tsSpecificRuleEntries = [
  {
    name: '@typescript-eslint/array-type',
    url: 'https://typescript-eslint.io/rules/array-type/',
    value: ['warn', { default: 'generic' }],
  },
  {
    name: '@typescript-eslint/no-explicit-any',
    url: 'https://typescript-eslint.io/rules/no-explicit-any/',
    value: ['error', {
      fixToUnknown: true,
      ignoreRestArgs: true,
    }],
  },
  {
    name: '@typescript-eslint/naming-convention',
    url: 'https://typescript-eslint.io/rules/naming-convention',
    value: [
      'error',
      {
        selector: 'default',
        format: [
          'camelCase',
          'snake_case',
          'UPPER_CASE',
          'PascalCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variableLike',
        format: [
          'camelCase',
          'snake_case',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'class',
        format: [
          'PascalCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: [
          'PascalCase',
        ],
        prefix: ['I', 'Interface'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
  },
  {
    name: '@typescript-eslint/no-unnecessary-condition',
    url: 'https://typescript-eslint.io/rules/no-unnecessary-condition',
    value: ['warn', { allowConstantLoopConditions: true }],
  },
];
