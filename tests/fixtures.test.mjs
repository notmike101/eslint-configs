import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';

import { ESLint } from 'eslint';

import { fixtureCases } from '../scripts/lib/fixtures.mjs';

function collectMessages(results) {
  return results.flatMap((result) => result.messages);
}

async function lintFixture(caseConfig, filePatterns, configFile = caseConfig.configFile) {
  const eslint = new ESLint({
    cwd: caseConfig.fixtureDir,
    errorOnUnmatchedPattern: false,
    overrideConfigFile: path.join(caseConfig.fixtureDir, configFile),
  });

  return eslint.lintFiles(filePatterns);
}

for (const fixtureCase of fixtureCases) {
  test(`${fixtureCase.id} fixture accepts valid files`, async () => {
    const results = await lintFixture(fixtureCase, fixtureCase.validFiles);
    const messages = collectMessages(results);

    assert.equal(messages.length, 0, JSON.stringify(messages, null, 2));
  });

  for (const invalidFile of fixtureCase.invalidFiles) {
    test(`${fixtureCase.id} fixture rejects ${invalidFile.file}`, async () => {
      const results = await lintFixture(fixtureCase, [invalidFile.file]);
      const ruleIds = new Set(collectMessages(results).map((message) => message.ruleId).filter(Boolean));

      for (const expectedRuleId of invalidFile.expectedRuleIds) {
        assert.ok(ruleIds.has(expectedRuleId), `Expected ${expectedRuleId} in ${invalidFile.file}, but saw ${Array.from(ruleIds).join(', ')}`);
      }
    });
  }
}

test('jsdoc syntax preset keeps coverage rules disabled', async () => {
  const jsdocCase = fixtureCases.find((fixtureCase) => fixtureCase.id === 'jsdoc');
  const results = await lintFixture(jsdocCase, ['src/missing-jsdoc.js'], 'eslint.syntax.config.js');
  const ruleIds = new Set(collectMessages(results).map((message) => message.ruleId).filter(Boolean));

  assert.ok(!ruleIds.has('jsdoc/require-jsdoc'));
});

test('jsdoc required preset keeps coverage rules enabled', async () => {
  const jsdocCase = fixtureCases.find((fixtureCase) => fixtureCase.id === 'jsdoc');
  const results = await lintFixture(jsdocCase, ['src/missing-jsdoc.js'], 'eslint.required.config.js');
  const ruleIds = new Set(collectMessages(results).map((message) => message.ruleId).filter(Boolean));

  assert.ok(ruleIds.has('jsdoc/require-jsdoc'));
});
