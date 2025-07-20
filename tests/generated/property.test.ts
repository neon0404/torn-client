import { TornAPI } from "../../src";

describe("PropertyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in PropertyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "PropertyEndpoint",
    () => {
      it(
        "property.withId(...).get should succeed",
        async () => {
          const response = await client.property.withId("100").get();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "property.lookup should succeed",
        async () => {
          const response = await client.property.lookup();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "property.timestamp should succeed",
        async () => {
          const response = await client.property.timestamp();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "property.get should succeed",
        async () => {
          const response = await client.property.get({
            selections: ["property"],
            id: 100,
          });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );
    },
  );
});
