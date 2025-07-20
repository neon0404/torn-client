import { TornAPI } from "../../src";

describe("MarketEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in MarketEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "MarketEndpoint",
    () => {
      it(
        "market.bazaar should succeed",
        async () => {
          const response = await client.market.bazaar();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.lookup should succeed",
        async () => {
          const response = await client.market.lookup();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.timestamp should succeed",
        async () => {
          const response = await client.market.timestamp();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.get should succeed",
        async () => {
          const response = await client.market.get();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withId(...).bazaar should succeed",
        async () => {
          const response = await client.market.withId("1").bazaar();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withId(...).itemmarket should succeed",
        async () => {
          const response = await client.market.withId("1").itemmarket();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withPropertyTypeId(...).properties should succeed",
        async () => {
          const response = await client.market
            .withPropertyTypeId("1")
            .properties();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withPropertyTypeId(...).rentals should succeed",
        async () => {
          const response = await client.market
            .withPropertyTypeId("1")
            .rentals();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );
    },
  );
});
