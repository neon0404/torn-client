import { TornAPI } from "../../src";

describe("TornEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in TornEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("TornEndpoint", () => {
    it(
      "torn.attacklog should succeed",
      async () => {
        const response = await client.torn.attacklog({
          log: "4c24b79143ab701a6c7910acaef7927d",
        });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.bounties should succeed",
      async () => {
        const response = await client.torn.bounties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.calendar should succeed",
      async () => {
        const response = await client.torn.calendar();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.crimes should succeed",
      async () => {
        const response = await client.torn.crimes();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.education should succeed",
      async () => {
        const response = await client.torn.education();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.factionhof should succeed",
      async () => {
        const response = await client.torn.factionhof({ cat: "respect" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.factiontree should succeed",
      async () => {
        const response = await client.torn.factiontree();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.honors should succeed",
      async () => {
        const response = await client.torn.honors();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.hof should succeed",
      async () => {
        const response = await client.torn.hof({ cat: "level" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.itemammo should succeed",
      async () => {
        const response = await client.torn.itemammo();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.itemdetails should succeed",
      async () => {
        const response = await client.torn.itemdetails();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.itemmods should succeed",
      async () => {
        const response = await client.torn.itemmods();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.items should succeed",
      async () => {
        const response = await client.torn.items();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.logcategories should succeed",
      async () => {
        const response = await client.torn.logcategories();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.logtypes should succeed",
      async () => {
        const response = await client.torn.logtypes();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.medals should succeed",
      async () => {
        const response = await client.torn.medals();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.merits should succeed",
      async () => {
        const response = await client.torn.merits();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.organizedcrimes should succeed",
      async () => {
        const response = await client.torn.organizedcrimes();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.properties should succeed",
      async () => {
        const response = await client.torn.properties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.territory should succeed",
      async () => {
        const response = await client.torn.territory();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.lookup should succeed",
      async () => {
        const response = await client.torn.lookup();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.timestamp should succeed",
      async () => {
        const response = await client.torn.timestamp();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.get should succeed",
      async () => {
        const response = await client.torn.get({ selections: ["stats"] });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).honors should succeed",
      async () => {
        const response = await client.torn.withIds("317").honors();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).items should succeed",
      async () => {
        const response = await client.torn.withIds("1").items();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).medals should succeed",
      async () => {
        const response = await client.torn.withIds("241").medals();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withLogCategoryId(...).logtypes should succeed",
      async () => {
        const response = await client.torn.withLogCategoryId("1").logtypes();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withCrimeId(...).subcrimes should succeed",
      async () => {
        const response = await client.torn.withCrimeId("1").subcrimes();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );
  });
});
