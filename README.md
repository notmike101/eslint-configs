# ESLint Configurations

Private, general-purpose ESLint flat configurations for JavaScript, TypeScript, and JSDoc projects. The root workspace and every config package use the `@notmike101` namespace and are private. They must never be published to a registry; consume them through local tarballs or within a workspace.

## Packages

| Package | Purpose |
| --- | --- |
| `@notmike101/eslint-config-js` | JavaScript rules |
| `@notmike101/eslint-config-ts` | TypeScript rules with project-service parsing |
| `@notmike101/eslint-config-jsdoc` | JSDoc rules; also exports `/required` and `/syntax` |

The workspace currently validates with ESLint 10.12.0. Workspace maintenance requires Node.js `>= 22` and pnpm `>= 10`; also satisfy the installed dependencies' Node.js engine requirements. No pnpm version is pinned in `package.json`. Check each package's `engines` and `peerDependencies` for consumer requirements.

Known compatibility caveat: `eslint-plugin-import@2.32.0` declares support only through ESLint 9. The workspace and packed-consumer checks pass with ESLint 10.12.0, but pnpm reports that upstream peer mismatch; passing fixtures do not establish support for every import-rule path.

## Local Consumption

### Packed tarballs

Install workspace dependencies, then pack the desired config from the repository root. Packing creates a local archive; it does not publish anything.

```sh
pnpm install
pnpm --dir packages/eslint-config-js pack --pack-destination ../../tarballs
```

For example, if your consumer project is a sibling of `eslint-configs`, install the generated JavaScript archive and its peers from the consumer directory:

```sh
pnpm add -D ../eslint-configs/tarballs/notmike101-eslint-config-js-4.0.5.tgz "eslint@^10.12.0" "@eslint/js@^9.39.4" "globals@^17.5.0" "@stylistic/eslint-plugin@^5.10.0" "eslint-plugin-import@^2.32.0" "eslint-plugin-sort-class-members@^1.22.1" "eslint-plugin-unicorn@^64.0.0"
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
