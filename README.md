# artifactdigest

Deterministic build artifact digest tracking for CI/CD pipelines.

## Status

This repository is early-stage. Use it for local developer automation and review workflows, and verify results before relying on them in production.

## Install

```sh
npm ci
npm run build
```

## Use

Inspect the CLI surface first:

```sh
npx artifactdigest --help
```

Run the project verification command before making changes:

```sh
npm test
```

## Verify

```sh
npm test
npm run package:smoke
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution expectations. Keep changes small, reviewable, and backed by the verification commands above.

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting guidance. Do not include secrets, private logs, or customer data in issues or fixtures.

## License

MIT

## Verification

```sh
npm test
npm run check --if-present
npm run smoke --if-present
```

## Limitations

This is an early local-first tool. It does not authenticate remote state, approve external actions, or replace human review for high-risk workflow decisions. Pin versions before using it in automation.

## Usage

Start from the checked-out package scripts so examples stay aligned with the current version:

```sh
npm install
npm run smoke
```
