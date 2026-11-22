import fs from "fs-extra";
import path from "path";
import { Project } from "ts-morph";
import { GENERATED_TESTS_DIR, TEST_DATA_CONFIG_PATH } from "../config.ts";
import { toPascalCase, getContextMethodName } from "../utils.ts";
import type { OpenAPI3, TestDataConfig } from "../types.ts";
import { groupEndpointsByTagAndContext } from "./3-generate-endpoints.ts";

/** A test config value of the form { "from": "racing.races", "pick": "races.0.id" } */
const isLookup = (value: unknown): boolean =>
  typeof value === "object" &&
  value !== null &&
  "from" in value &&
  "pick" in value;

/**
 * @description Generates End-to-End (E2E) test files for each endpoint tag
 * @param {OpenAPI3} spec The OpenAPI3 specification object
 * @param {Project} project The ts-morph project instance
 */
export async function generateE2ETests(
  spec: OpenAPI3,
  project: Project,
): Promise<void> {
  await fs.ensureDir(GENERATED_TESTS_DIR);

  let testDataConfig: TestDataConfig = {};
  if (await fs.pathExists(TEST_DATA_CONFIG_PATH)) {
    testDataConfig = await fs.readJSON(TEST_DATA_CONFIG_PATH);
  } else {
    console.warn(
      `[WARN] ${TEST_DATA_CONFIG_PATH} not found; some tests will be skipped`,
    );
  }

  const endpointsByTagAndContext = groupEndpointsByTagAndContext(spec);

  for (const tag in endpointsByTagAndContext) {
    const mainClassName = `${toPascalCase(tag)}Endpoint`;
    const lowerCaseTag = tag.toLowerCase();
    const testFilePath = path.join(
      GENERATED_TESTS_DIR,
      `${lowerCaseTag}.test.ts`,
    );
    const testFile = project.createSourceFile(testFilePath, "", {
      overwrite: true,
    });

    testFile.addImportDeclaration({
      namedImports: ["TornAPI"],
      moduleSpecifier: "../../src",
    });

    let testBody = "";
    let usesTestData = false;

    for (const contextName in endpointsByTagAndContext[tag]) {
      const methods = endpointsByTagAndContext[tag][contextName];
      for (const method of methods) {
        const tagConfig = testDataConfig[lowerCaseTag] || {};
        const methodConfig =
          contextName !== "global"
            ? tagConfig[`${method.name}WithContext`] || tagConfig[method.name]
            : tagConfig[method.name] || {};

        const queryParams: Record<string, unknown> =
          methodConfig?.queryParams || {};
        const queryParamsString =
          Object.keys(queryParams).length > 0
            ? JSON.stringify(queryParams)
            : "";

        let methodCall: string;
        let testTitle: string;
        let shouldSkip = false;
        let skipReason = "missing or placeholder data";
        let contextIdParam: unknown;
        let withMethodName = "";

        if (contextName === "global") {
          methodCall = `client.${lowerCaseTag}.${method.name}(${queryParamsString})`;
          testTitle = `${lowerCaseTag}.${method.name} should succeed`;
        } else {
          contextIdParam =
            methodConfig?.[contextName] || tagConfig[contextName];
          withMethodName = getContextMethodName(contextName);
          testTitle = `${lowerCaseTag}.${withMethodName}(...).${method.name} should succeed`;
          shouldSkip = !contextIdParam;
          if (!contextIdParam) {
            skipReason = `missing context ID "${contextName}" in test config for "${lowerCaseTag}"`;
          }
          methodCall = `client.${lowerCaseTag}.${withMethodName}('${contextIdParam}').${method.name}(${queryParamsString})`;
        }

        // Values given as live lookups ({ from, pick }) are resolved at test time
        const needsLookup =
          isLookup(contextIdParam) || Object.values(queryParams).some(isLookup);

        if (shouldSkip) {
          testBody += `it.skip('${testTitle}', () => {});\n`;
          console.log(`[WARN] Skipped test: ${testTitle} due to ${skipReason}`);
        } else if (needsLookup) {
          usesTestData = true;
          const data = {
            ...(contextName !== "global" && { id: contextIdParam }),
            ...(queryParamsString && { params: queryParams }),
          };
          const target =
            contextName === "global"
              ? `client.${lowerCaseTag}`
              : `client.${lowerCaseTag}.${withMethodName}(id)`;
          testBody += `
            it('${testTitle}', async () => {
              await withTestData(client, ${JSON.stringify(data)}, ({ ${contextName === "global" ? "" : "id, "}params }) =>
                expectApiSuccess(() => ${target}.${method.name}(params as never)),
              );
            }, TEST_TIMEOUT);
          `;
        } else {
          testBody += `
            it('${testTitle}', async () => {
              await expectApiSuccess(() => ${methodCall});
            }, TEST_TIMEOUT);
          `;
        }
      }
    }

    testFile.addImportDeclaration({
      namedImports: usesTestData
        ? ["expectApiSuccess", "withTestData"]
        : ["expectApiSuccess"],
      moduleSpecifier: "../e2e-helpers",
    });

    testFile.addStatements(`
      describe("${mainClassName} Integration Tests", () => {
        let client: TornAPI;
        const TEST_TIMEOUT = 20000;

        beforeAll(() => {
          const apiKey = process.env.TORN_API_KEY;
          if (!apiKey) {
            console.warn("\\n[WARN] TORN_API_KEY is not set; skipping all integration tests in ${mainClassName}");
            return;
          }
          client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
        });

        (process.env.TORN_API_KEY ? describe : describe.skip)('${mainClassName}', () => {
          ${testBody}
        });
      });
    `);
  }
  console.log("[INFO] E2E test files generated");
}
