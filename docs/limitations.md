# Limitations

artifactdigest is currently a **v0.1.0 stub**. The following constraints apply:

## Implementation status

- The package exports only a `VERSION` constant; no artifact digesting logic is implemented yet.
- The CLI (`src/cli.js`) only prints the version string with the tool name.

## What is missing before v1.0

- Core digest generation for build artifacts (checksums, hashes)
- Support for multiple artifact types (tarballs, zip, directory trees)
- A `--manifest` flag to generate a full checksum manifest file
- Input validation for malformed paths or permission-denied files

## Security considerations

- Do not trust artifact digests from this tool in production workflows until v1.0.
- Hash algorithm selection and collision resistance have not been implemented.

## When to use this repo today

- As a placeholder in a tool garden or template.
- To exercise the release pipeline and packaging metadata.
- As a starting point for implementing digest generation.
