# ESLint Configurations

Private, general-purpose ESLint flat configurations for JavaScript, TypeScript, and JSDoc projects. The root workspace and every config package use the `@notmike101` namespace and are private. They must never be published to a registry; consume individual packages through GitHub Actions archive downloads, locally packed tarballs, or within a workspace.

## Packages

| Package | Purpose |
| --- | --- |
| `@notmike101/eslint-config-js` | JavaScript rules |
| `@notmike101/eslint-config-ts` | TypeScript rules with project-service parsing |
| `@notmike101/eslint-config-jsdoc` | JSDoc rules; also exports `/required` and `/syntax` |

The workspace currently validates with ESLint 10.12.0. Workspace maintenance requires Node.js `>= 22` and pnpm `>= 10`; also satisfy the installed dependencies' Node.js engine requirements. No pnpm version is pinned in `package.json`. Check each package's `engines` and `peerDependencies` for consumer requirements.

Known compatibility caveat: `eslint-plugin-import@2.32.0` declares support only through ESLint 9. The workspace and packed-consumer checks pass with ESLint 10.12.0, but pnpm reports that upstream peer mismatch; passing fixtures do not establish support for every import-rule path.

## Install Individual Packages with npm

The `CI and package archives` workflow in `.github/workflows/ci.yml` validates pushes, pull requests, and manual runs using Node.js 24 and pnpm 10.28.2. After validation succeeds on the default branch, it uploads three separate artifacts: `eslint-config-js`, `eslint-config-ts`, and `eslint-config-jsdoc`. Pull requests and other branches validate without producing distribution artifacts. Nothing is published to npm or GitHub Packages, and all manifests retain `private: true`.

### Download from GitHub

1. Open this repository's **Actions** tab while signed in with repository access.
2. Select a successful **CI and package archives** run on the default branch.
3. Download only the desired artifact from the run's **Artifacts** section.
4. Extract the downloaded ZIP and put its `.tgz` file in your consumer project's `vendor/eslint-configs/` directory. Install the `.tgz`, not the ZIP.

Alternatively, with an authenticated GitHub CLI, run this from your consumer directory, replacing `RUN_ID` with the selected default-branch workflow run's numeric ID:

```sh
gh run download RUN_ID --repo notmike101/eslint-configs --name eslint-config-js --dir vendor/eslint-configs
```

Use `--name eslint-config-ts` or `--name eslint-config-jsdoc` for the other configurations. The CLI extracts the artifact ZIP automatically. No registry token or `.npmrc` registry configuration is needed.

Artifacts expire after 90 days, or sooner if their run is deleted. Keep the chosen `.tgz` files in the consumer repository alongside `package.json` and `package-lock.json`: npm records local archive paths, so fresh checkouts and `npm ci` need those files. A new successful default-branch run creates fresh artifacts; install the new archive explicitly when updating a configuration. Archive versions come from package manifests, so different commits can produce different contents with the same filename.

### Install the downloaded archive

Run only the command for the configuration you need, using the actual downloaded filename if its version differs:

```sh
# JavaScript
npm install --save-dev ./vendor/eslint-configs/notmike101-eslint-config-js-4.1.0.tgz eslint@9.39.5 @eslint/js@9.39.4 @stylistic/eslint-plugin@5.10.0 eslint-plugin-import@2.32.0 eslint-plugin-sort-class-members@1.22.1 eslint-plugin-unicorn@64.0.0 globals@17.5.0

# TypeScript
npm install --save-dev ./vendor/eslint-configs/notmike101-eslint-config-ts-4.0.9.tgz eslint@9.39.5 @eslint/js@9.39.4 @stylistic/eslint-plugin@5.10.0 eslint-plugin-import@2.32.0 eslint-plugin-sort-class-members@1.22.1 eslint-plugin-unicorn@64.0.0 globals@17.5.0 typescript-eslint@8.58.2 typescript@5.8.2

# JSDoc
npm install --save-dev ./vendor/eslint-configs/notmike101-eslint-config-jsdoc-1.0.1.tgz eslint@9.39.5 eslint-plugin-jsdoc@62.9.0
```

These peer-version combinations were checked with npm and Node.js 24 against the consumer fixtures. npm fetches only third-party peers from its registry; the configuration package comes from the downloaded archive. TypeScript also needs a project `tsconfig.json`. Imports keep their normal names, such as `@notmike101/eslint-config-js`; JSDoc also retains `/required` and `/syntax`.

The npm examples use ESLint 9 to satisfy `eslint-plugin-import`'s declared peer range and pin Unicorn to avoid newer versions requiring ESLint 10. npm warns that ESLint 9.39.5 is unsupported upstream. The existing workspace still uses ESLint 10.12.0 with the peer mismatch noted above. These examples verify installation and fixture behavior, not upstream support; updating that compatibility contract is a separate rule/dependency change. Do not use `--force` or `--legacy-peer-deps` to hide conflicts.

`npm install github:notmike101/eslint-configs` installs the monorepo root, not one of its configuration packages. GitHub Actions download URLs require authentication and return artifact ZIPs, so they are not direct npm tarball URLs.

## Local Consumption

### Packed tarballs

Install workspace dependencies, then pack the desired config from the repository root. Packing creates a local archive; it does not publish anything.

```sh
pnpm install
pnpm --dir packages/eslint-config-js pack --pack-destination ../../tarballs
```

For example, if your consumer project is a sibling of `eslint-configs`, install the generated JavaScript archive and its peers from the consumer directory:

```sh
pnpm add -D ../eslint-configs/tarballs/notmike101-eslint-config-js-4.1.0.tgz "eslint@^10.12.0" "@eslint/js@^9.39.4" "globals@^17.5.0" "@stylistic/eslint-plugin@^5.10.0" "eslint-plugin-import@^2.32.0" "eslint-plugin-sort-class-members@^1.22.1" "eslint-plugin-unicorn@^64.0.0"
```

Use the actual archive path printed by `pnpm pack` if the location or package version differs. Repeat the pack step for any other config you need, and install its declared peers. TypeScript consumers also need `typescript` and a project `tsconfig.json` for project-service parsing. Registry installs in this example are only for ESLint and third-party peers, never for the private config packages. Repack and reinstall the archive after changing a config.

### Workspace consumers

If the consumer and these config packages belong to the same pnpm workspace, declare a workspace dependency in the consumer's `package.json`:

```json
{
  "devDependencies": {
    "@notmike101/eslint-config-js": "workspace:*"
  }
}
```

Include both the consumer and config package directories in that workspace's `pnpm-workspace.yaml`, install the same peers shown above in the consumer, and run `pnpm install` from the workspace root. The `workspace:*` dependency requires a local package and will not fall back to a registry config.

### ESLint entrypoint

Create `eslint.config.mjs` in the consumer:

```js
import config from '@notmike101/eslint-config-js';

export default config;
```

Use the TypeScript or JSDoc package name for the corresponding config. JSDoc's alternative entrypoints are `@notmike101/eslint-config-jsdoc/required` and `@notmike101/eslint-config-jsdoc/syntax`. Run linting in the consumer with:

```sh
pnpm exec eslint .
```

The examples under `fixtures/` show consumer configurations and representative source files for all three packages.

## Authoring

- Config packages live under `packages/`.
- JavaScript and TypeScript rules are authored under `internal/config-fragments/`; regenerate their committed `packages/*/index.js` entrypoints with `pnpm run generate`.
- JSDoc entrypoints are hand-authored.
- Preserve existing rule behavior unless a rule change is explicitly requested.

## Validation

From the repository root after `pnpm install`, run the full local compatibility workflow:

```sh
pnpm run ci
```

Individual commands:

```sh
pnpm run generate          # Rewrite generated JS and TS entrypoints
pnpm run generate:check    # Check generated entrypoints are current
pnpm run validate:imports  # Smoke-test package imports
pnpm run test:fixtures     # Check valid and invalid consumer fixtures
pnpm run pack:check        # Install tarballs in temporary consumers and lint fixtures
```

`ci` runs the four check commands, not the generator. Fixture tests exercise workspace consumers; `pack:check` exercises actual packed archives and their peers. Packed checks require valid fixtures to pass and invalid fixtures to exit with lint violations from the expected rules; parser/configuration crashes are failures, not successful rejections. Packed checks require access to the third-party dependency registry or a suitable local cache. There is no publishing, release, changeset, or Git-history validation step.

## Rule Changes

Describe the rule to change, the affected configurations, and the reason for the change. Update the relevant authoring source, generated entrypoints when applicable, and consumer fixtures together.
