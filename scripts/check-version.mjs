import { readFileSync, writeFileSync } from "fs";

const API_VERSION_FILE = ".torn-api-version";

const REMOTE_SPEC_URL = "https://www.torn.com/swagger/openapi.json";
const USER_AGENT = `torn-client-gh-action/1.0`;

function setOutput(name, value) {
  const GITHUB_OUTPUT = process.env.GITHUB_OUTPUT;
  if (GITHUB_OUTPUT) {
    writeFileSync(GITHUB_OUTPUT, `${name}=${value}\n`, { flag: "a" });
  }
}

async function main() {
  console.log("Checking for Torn API updates...");

  try {
    const localVersion = readFileSync(API_VERSION_FILE, "utf-8").trim();
    console.log(`Current version in repo: ${localVersion}`);

    const response = await fetch(REMOTE_SPEC_URL, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch spec. Server responded with HTTP ${response.status} ${response.statusText}`,
      );
    }

    const remoteSpec = await response.json();
    const remoteVersion = remoteSpec.info?.version;

    if (!remoteVersion) {
      throw new Error("Could not find '.info.version' in the API spec");
    }

    console.log(`Latest version from Torn API: ${remoteVersion}`);

    if (localVersion === remoteVersion) {
      console.log("API is up to date. No changes needed");
      setOutput("needs_update", "false");
      return;
    }

    console.log(`API update detected! New version: ${remoteVersion}`);

    setOutput("needs_update", "true");
    setOutput("new_version", remoteVersion);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
