import assert from 'node:assert/strict';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { fixtureCases, repoRoot } from './lib/fixtures.mjs';

const execFileAsync = promisify(execFile);
const pnpmCommand = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';

async function run(command, args, cwd, expectSuccess = true) {
  let result;

  try {
    result = await execFileAsync(command, args, {
      cwd,
      encoding: 'utf8',
      shell: process.platform === 'win32',
    });
  }
  catch (error) {
    if (expectSuccess || error.code !== 1) {
      throw new Error([
        `${command} ${args.join(' ')} failed in ${cwd}`,
        error.stdout,
        error.stderr,
      ].filter(Boolean).join('\n'));
    }

    return error;
  }

  assert.ok(expectSuccess, `${command} ${args.join(' ')} unexpectedly passed in ${cwd}`);
  return result;
}

async function readInstalledVersion(packageDir, dependencyName) {
  const dependencyPackageJson = path.join(packageDir, 'node_modules', dependencyName, 'package.json');
  const dependencyManifest = JSON.parse(await readFile(dependencyPackageJson, 'utf8'));

  return dependencyManifest.version;
}

async function packPackage(packageDir, tempDir) {
  const { stdout } = await run(pnpmCommand, ['pack', '--json', '--pack-destination', tempDir], packageDir);
  const parsedOutput = JSON.parse(stdout);
  const packResult = Array.isArray(parsedOutput) ? parsedOutput[0] : parsedOutput;

  return path.isAbsolute(packResult.filename)
    ? packResult.filename
    : path.resolve(tempDir, packResult.filename);
}

async function createConsumerPackage(caseConfig, tarballPath, consumerDir) {
  const dependencies = {
    [caseConfig.packageName]: `file:${tarballPath.replace(/\\/g, '/')}`,
    eslint: await readInstalledVersion(caseConfig.packageDir, 'eslint'),
  };

  for (const peerPackage of caseConfig.peerPackages) {
    dependencies[peerPackage] = await readInstalledVersion(caseConfig.packageDir, peerPackage);
  }

  const consumerPackageJson = {
    name: `pack-check-${caseConfig.id}`,
    private: true,
    type: 'module',
    dependencies,
  };

  await writeFile(
    path.join(consumerDir, 'package.json'),
    `${JSON.stringify(consumerPackageJson, null, 2)}\n`,
    'utf8',
  );
}

async function copyFixtureContents(sourceDir, destinationDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'package.json') {
      continue;
    }

    await cp(
      path.join(sourceDir, entry.name),
      path.join(destinationDir, entry.name),
      { recursive: true },
    );
  }
}

async function verifyPackedFixture(caseConfig) {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), `pack-${caseConfig.id}-`));

  try {
    const tarballDir = path.join(tempRoot, 'tarballs');
    const consumerDir = path.join(tempRoot, 'consumer');

    await mkdir(tarballDir, { recursive: true });
    await mkdir(consumerDir, { recursive: true });
    const tarballPath = await packPackage(caseConfig.packageDir, tarballDir);

    await createConsumerPackage(caseConfig, tarballPath, consumerDir);
    await copyFixtureContents(caseConfig.fixtureDir, consumerDir);
    await run(pnpmCommand, ['install'], consumerDir);

    await run(
      pnpmCommand,
      ['exec', 'eslint', '--max-warnings=0', ...caseConfig.validFiles],
      consumerDir,
    );

    for (const invalidFile of caseConfig.invalidFiles) {
      const { stdout } = await run(
        pnpmCommand,
        ['exec', 'eslint', '--format', 'json', '--max-warnings=0', invalidFile.file],
        consumerDir,
        false,
      );
      const ruleIds = new Set(JSON.parse(stdout).flatMap((result) => result.messages.map((message) => message.ruleId)));

      for (const expectedRuleId of invalidFile.expectedRuleIds) {
        assert.ok(ruleIds.has(expectedRuleId), `Expected ${expectedRuleId} in packed ${invalidFile.file}, but saw ${Array.from(ruleIds).join(', ')}`);
      }
    }
  }
  finally {
    await rm(tempRoot, { force: true, recursive: true });
  }
}

for (const fixtureCase of fixtureCases) {
  await verifyPackedFixture(fixtureCase);
  console.log(`Packed fixture check passed for ${fixtureCase.packageName}.`);
}
