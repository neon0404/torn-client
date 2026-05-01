import { TornAPI } from "../../src";

describe("CompanyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in CompanyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "CompanyEndpoint",
    () => {
      it(
        "company.applications should succeed",
        async () => {
          const response = await client.company.applications();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.employees should succeed",
        async () => {
          const response = await client.company.employees();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.profile should succeed",
        async () => {
          const response = await client.company.profile();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.stock should succeed",
        async () => {
          const response = await client.company.stock();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.lookup should succeed",
        async () => {
          const response = await client.company.lookup();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.timestamp should succeed",
        async () => {
          const response = await client.company.timestamp();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "company.get should succeed",
        async () => {
          const response = await client.company.get();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );
      it.skip("company.withId(...).employees should succeed", () => {});
      it.skip("company.withId(...).profile should succeed", () => {});
    },
  );
});
