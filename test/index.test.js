import { describe, it } from 'node:test';
import assert from 'node:assert';
import { VERSION } from '../src/index.js';
import { execSync } from 'node:child_process';

describe('artifactdigest core', () => {
  it('exports VERSION matching package.json version', () => {
    const pkgVersion = execSync('npm pkg get version').toString().trim().replace(/^"|"$/g, '');
    assert.strictEqual(VERSION, pkgVersion, 'VERSION constant should match package.json');
  });

  it('CLI prints version string on stdout', () => {
    const output = execSync('node src/cli.js').toString();
    assert.ok(output.includes('artifactdigest'), 'CLI should mention tool name');
    assert.ok(output.includes(VERSION), 'CLI should print VERSION');
  });

  it('VERSION is a valid semver string', () => {
    assert.match(VERSION, /^\d+\.\d+\.\d+$/, 'VERSION should match semver format');
  });
});
