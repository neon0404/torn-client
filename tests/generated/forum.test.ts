import { TornAPI } from "../../src";

describe("ForumEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in ForumEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("ForumEndpoint", () => {
    it(
      "forum.categories should succeed",
      async () => {
        const response = await client.forum.categories();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.threads should succeed",
      async () => {
        const response = await client.forum.threads();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.lookup should succeed",
      async () => {
        const response = await client.forum.lookup();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.timestamp should succeed",
      async () => {
        const response = await client.forum.timestamp();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.get should succeed",
      async () => {
        const response = await client.forum.get({ selections: ["categories"] });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withThreadId(...).posts should succeed",
      async () => {
        const response = await client.forum.withThreadId("16485512").posts();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withThreadId(...).thread should succeed",
      async () => {
        const response = await client.forum.withThreadId("16485512").thread();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withCategoryIds(...).threads should succeed",
      async () => {
        const response = await client.forum.withCategoryIds("63").threads();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );
  });
});
