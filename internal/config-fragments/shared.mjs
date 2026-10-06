export const stylisticCustomizeOptions = {
  indent: 4,
  semi: true,
  jsx: false,
  braceStyle: '1tbs',
  quoteProps: 'as-needed',
  arrowParens: 'always',
  commaDangle: 'always-multiline',
  blockSpacing: true,
  quotes: 'single',
};

export const sharedGeneralRuleEntries = [
  {
    name: 'no-multi-assign',
    url: 'https://eslint.org/docs/latest/rules/no-multi-assign',
    value: 'warn',
  },
  {
    name: 'prefer-const',
    url: 'https://eslint.org/docs/latest/rules/prefer-const',
    value: 'error',
  },
  {
    name: 'one-var',
    url: 'https://eslint.org/docs/latest/rules/one-var',
    value: ['warn', 'never'],
  },
  {
    name: 'no-var',
    url: 'https://eslint.org/docs/latest/rules/no-var',
    value: 'error',
  },
  {
    name: 'eqeqeq',
    url: 'https://eslint.org/docs/latest/rules/eqeqeq',
    value: ['warn', 'always'],
  },
  {
    name: 'dot-notation',
    url: 'https://eslint.org/docs/latest/rules/dot-notation',
    value: 'warn',
  },
  {
    name: 'default-case-last',
    url: 'https://eslint.org/docs/latest/rules/default-case-last',
    value: 'warn',
  },
  {
    name: 'default-param-last',
    url: 'https://eslint.org/docs/latest/rules/default-param-last',
    value: 'error',
  },
  {
    name: 'no-await-in-loop',
    url: 'https://eslint.org/docs/latest/rules/no-await-in-loop',
    value: 'error',
  },
  {
    name: 'no-promise-executor-return',
    url: 'https://eslint.org/docs/latest/rules/no-promise-executor-return',
    value: 'error',
  },
  {
    name: 'arrow-body-style',
    url: 'https://eslint.org/docs/latest/rules/arrow-body-style',
    value: ['warn', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
  },
  {
    name: 'max-depth',
    url: 'https://eslint.org/docs/latest/rules/max-depth',
    value: 'warn',
  },
  {
    name: 'no-console',
    url: 'https://eslint.org/docs/latest/rules/no-console',
    value: ['warn', {
      allow: ['debug', 'info', 'warn', 'error'],
    }],
  },
  {
    name: 'no-extend-native',
    url: 'https://eslint.org/docs/latest/rules/no-extend-native',
    value: 'error',
  },
  {
    name: 'no-extra-bind',
    url: 'https://eslint.org/docs/latest/rules/no-extra-bind',
    value: 'error',
  },
  {
    name: 'no-lonely-if',
    url: 'https://eslint.org/docs/latest/rules/no-lonely-if',
    value: 'warn',
  },
  {
    name: 'no-nested-ternary',
    url: 'https://eslint.org/docs/latest/rules/no-nested-ternary',
    value: 'warn',
  },
  {
    name: 'no-unneeded-ternary',
    url: 'https://eslint.org/docs/latest/rules/no-unneeded-ternary',
    value: 'error',
  },
  {
    name: 'prefer-arrow-callback',
    url: 'https://eslint.org/docs/latest/rules/prefer-arrow-callback',
    value: 'warn',
  },
  {
    name: 'prefer-exponentiation-operator',
    url: 'https://eslint.org/docs/latest/rules/prefer-exponentiation-operator',
    value: 'warn',
  },
  {
    name: 'prefer-object-has-own',
    url: 'https://eslint.org/docs/latest/rules/prefer-object-has-own',
    value: 'error',
  },
  {
    name: 'prefer-rest-params',
    url: 'https://eslint.org/docs/latest/rules/prefer-rest-params',
    value: 'error',
  },
  {
    name: 'prefer-template',
    url: 'https://eslint.org/docs/latest/rules/prefer-template',
    value: 'error',
  },
  {
    name: 'require-await',
    url: 'https://eslint.org/docs/latest/rules/require-await',
    value: 'error',
  },
  {
    name: 'yoda',
    url: 'https://eslint.org/docs/latest/rules/yoda',
    value: 'error',
  },
  {
    name: 'curly',
    url: 'https://eslint.org/docs/latest/rules/curly',
    value: ['warn', 'all'],
  },
];

export const sharedStylisticRuleEntries = [
  {
    name: '@stylistic/line-comment-position',
    url: 'https://eslint.style/rules/default/line-comment-position',
    value: ['warn', {
      position: 'above',
      ignorePattern: 'previous|todo',
      applyDefaultIgnorePatterns: true,
    }],
  },
  {
    name: '@stylistic/multiline-comment-style',
    url: 'https://eslint.style/rules/default/multiline-comment-style',
    value: ['error', 'bare-block'],
  },
  {
    name: '@stylistic/no-extra-semi',
    url: 'https://eslint.style/rules/default/no-extra-semi',
    value: 'error',
  },
  {
    name: '@stylistic/curly-newline',
    url: 'https://eslint.style/rules/default/curly-newline',
    value: ['warn', 'always'],
  },
  {
    name: '@stylistic/object-curly-newline',
    url: 'https://eslint.style/rules/default/object-curly-newline',
    value: ['warn', {
      multiline: true,
      consistent: true,
    }],
  },
  {
    name: '@stylistic/padding-line-between-statements',
    url: 'https://eslint.style/rules/default/padding-line-between-statements',
    value: ['warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'any', prev: 'case', next: 'case' },
      { blankLine: 'always', prev: 'for', next: '*' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'if' },
    ],
  },
  {
    name: '@stylistic/semi-style',
    url: 'https://eslint.style/rules/default/semi-style',
    value: ['error', 'last'],
  },
  {
    name: '@stylistic/switch-colon-spacing',
    url: 'https://eslint.style/rules/default/switch-colon-spacing',
    value: ['warn', { after: true, before: false }],
  },
];

export const sharedSortClassMembersRuleEntries = [
  {
    name: 'sort-class-members/sort-class-members',
    url: 'https://github.com/bryanrsmith/eslint-plugin-sort-class-members?tab=readme-ov-file#configuration',
    value: ['warn', {
      order: [
        '[conventional-private-properties]',
        '[static-properties]',
        '[properties]',
        '[accessor-pairs]',
        '[constructor]',
        '[static-methods]',
        '[conventional-private-methods]',
        '[methods]',
      ],
    }],
  },
];

export const sharedUnicornRuleEntries = [
  {
    name: 'unicorn/numeric-separators-style',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md',
    value: ['warn', {
      number: {
        minimumDigits: 4,
        groupLength: 3,
      },
    }],
  },
  {
    name: 'unicorn/better-regex',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md',
    value: 'warn',
  },
  {
    name: 'unicorn/consistent-destructuring',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md',
    value: 'warn',
  },
  {
    name: 'unicorn/consistent-existence-index-check',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md',
    value: 'warn',
  },
  {
    name: 'unicorn/consistent-function-scoping',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md',
    value: 'warn',
  },
  {
    name: 'unicorn/empty-brace-spaces',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md',
    value: 'warn',
  },
  {
    name: 'unicorn/escape-case',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md',
    value: 'warn',
  },
  {
    name: 'unicorn/new-for-builtins',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md',
    value: 'warn',
  },
  {
    name: 'unicorn/no-abusive-eslint-disable',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-array-for-each',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-array-push-push',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-array-reduce',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-empty-file',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md',
    value: 'warn',
  },
  {
    name: 'unicorn/no-for-loop',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-instanceof-builtins',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-invalid-fetch-options',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-invalid-remove-event-listener',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-negation-in-equality-check',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md',
    value: 'warn',
  },
  {
    name: 'unicorn/no-new-array',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md',
    value: 'error',
  },
  {
    name: 'unicorn/no-unnecessary-await',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md',
    value: 'warn',
  },
  {
    name: 'unicorn/no-useless-promise-resolve-reject',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md',
    value: 'error',
  },
  {
    name: 'unicorn/number-literal-case',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-add-event-listener',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-default-parameters',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-dom-node-dataset',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-dom-node-remove',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-dom-node-append',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-dom-node-text-content',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-global-this',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-keyboard-event-key',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-math-min-max',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-math-trunc',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-modern-dom-apis',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-modern-math-apis',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-negative-index',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-node-protocol',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-number-properties',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-regexp-test',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-string-replace-all',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-string-trim-start-end',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-switch',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md',
    value: 'warn',
  },
  {
    name: 'unicorn/prefer-type-error',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md',
    value: 'warn',
  },
  {
    name: 'unicorn/require-number-to-fixed-digits-argument',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md',
    value: 'warn',
  },
  {
    name: 'unicorn/throw-new-error',
    url: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md',
    value: 'warn',
  },
];

export const sharedImportRuleEntries = [
  {
    name: 'import/order',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md',
    value: ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
  },
  {
    name: 'import/no-mutable-exports',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md',
    value: 'error',
  },
  {
    name: 'import/exports-last',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md',
    value: 'error',
  },
  {
    name: 'import/first',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/first.md',
    value: 'error',
  },
  {
    name: 'import/newline-after-import',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md',
    value: 'warn',
  },
  {
    name: 'import/no-namespace',
    url: 'https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md',
    value: 'warn',
  },
];
