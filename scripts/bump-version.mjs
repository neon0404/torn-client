/**
 * Bumps the package version for an automated API update
 *
 *   node scripts/bump-version.mjs <breaking: true|false>
 *
 * - Non-breaking update: patch (0.4.8 -> 0.4.9)
 * - Breaking update (public API removed): minor while on 0.x (0.4.8 -> 0.5.0), major from 1.0.0 on
 *
 * Writes package.json and prints `version=<new>` and `type=<patch|minor|major>`
 * (also to $GITHUB_OUTPUT when available)
 */
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";

const PACKAGE_JSON = "package.json";

const breaking = process.argv[2] === "true";
const raw = readFileSync(PACKAGE_JSON, "utf-8");
const pkg = JSON.parse(raw);

const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(pkg.version);
if (!match) {
  console.error(`Unsupported version "${pkg.version}" (expected x.y.z)`);
  process.exit(1);
}
let [major, minor, patch] = match.slice(1).map(Number);

let type;
if (!breaking) {
  type = "patch";
  patch += 1;
} else if (major === 0) {
  type = "minor";
  minor += 1;
  patch = 0;
} else {
  type = "major";
  major += 1;
  minor = 0;
  patch = 0;
}

pkg.version = `${major}.${minor}.${patch}`;
writeFileSync(
  PACKAGE_JSON,
  JSON.stringify(pkg, null, 2) + (raw.endsWith("\n") ? "\n" : ""),
);

const output = `version=${pkg.version}\ntype=${type}\n`;
process.stdout.write(output);
if (process.env.GITHUB_OUTPUT)
  appendFileSync(process.env.GITHUB_OUTPUT, output);
