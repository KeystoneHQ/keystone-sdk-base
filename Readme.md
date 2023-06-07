# Keystone Air-Gaped Wallet base

## Installation

```
    pnpm install
```

## Test

```
    pnpm test
```

## Build

```
    pnpm bootstrap
    pnpm build
```

## Publishing

### Test Publishing

To perform a dry run of the publishing process without actually publishing the packages, use the following command:

```bash
pnpm publish -r --dry-run
```

### Beta Release
To publish a beta release of the packages with a "beta" tag, use the following command:

```bash
pnpm publish -r --tag beta
```

### Production Release
To publish a production release of the packages with a "latest" tag, use the following command:

```bash
pnpm publish -r
```

## Troubleshooting

If you accidentally published a beta package with the "latest" tag, don't panic! You can fix this by following the instructions in the npm documentation.

For example, to change the "latest" tag back to a stable version and move the beta version to the "beta" tag, you can run the following commands:

```bash
npm dist-tag add <package-name>@<stable-version> latest
npm dist-tag add <package-name>@<beta-version> beta
```

Replace `package-name`, `stable-version`, and `beta-version` with the appropriate values for your packages.