import { TornAPI } from "../../src";

describe("KeyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in KeyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("KeyEndpoint", () => {
    it(
      "key.log should succeed",
      async () => {
        const response = await client.key.log();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "key.info should succeed",
      async () => {
        const response = await client.key.info();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "key.get should succeed",
      async () => {
        const response = await client.key.get({ selections: ["log"] });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );
  });
});
