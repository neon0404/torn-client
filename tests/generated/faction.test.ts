import { TornAPI } from "../../src";

describe("FactionEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in FactionEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "FactionEndpoint",
    () => {
      it(
        "faction.applications should succeed",
        async () => {
          const response = await client.faction.applications();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.attacks should succeed",
        async () => {
          const response = await client.faction.attacks();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.attacksfull should succeed",
        async () => {
          const response = await client.faction.attacksfull();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.balance should succeed",
        async () => {
          const response = await client.faction.balance();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.basic should succeed",
        async () => {
          const response = await client.faction.basic();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chain should succeed",
        async () => {
          const response = await client.faction.chain();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chains should succeed",
        async () => {
          const response = await client.faction.chains();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chainreport should succeed",
        async () => {
          const response = await client.faction.chainreport();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.contributors should succeed",
        async () => {
          const response = await client.faction.contributors({
            stat: "attackswon",
          });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.crimes should succeed",
        async () => {
          const response = await client.faction.crimes();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.hof should succeed",
        async () => {
          const response = await client.faction.hof();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.members should succeed",
        async () => {
          const response = await client.faction.members();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.news should succeed",
        async () => {
          const response = await client.faction.news({ cat: "main" });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.positions should succeed",
        async () => {
          const response = await client.faction.positions();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.rackets should succeed",
        async () => {
          const response = await client.faction.rackets();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.raids should succeed",
        async () => {
          const response = await client.faction.raids();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.rankedwars should succeed",
        async () => {
          const response = await client.faction.rankedwars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.reports should succeed",
        async () => {
          const response = await client.faction.reports();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.revives should succeed",
        async () => {
          const response = await client.faction.revives();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.revivesfull should succeed",
        async () => {
          const response = await client.faction.revivesfull();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.search should succeed",
        async () => {
          const response = await client.faction.search();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.stats should succeed",
        async () => {
          const response = await client.faction.stats();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territory should succeed",
        async () => {
          const response = await client.faction.territory();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territoryownership should succeed",
        async () => {
          const response = await client.faction.territoryownership();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territorywars should succeed",
        async () => {
          const response = await client.faction.territorywars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.upgrades should succeed",
        async () => {
          const response = await client.faction.upgrades();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfare should succeed",
        async () => {
          const response = await client.faction.warfare({ cat: "raid" });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.wars should succeed",
        async () => {
          const response = await client.faction.wars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.lookup should succeed",
        async () => {
          const response = await client.faction.lookup();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.timestamp should succeed",
        async () => {
          const response = await client.faction.timestamp();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.get should succeed",
        async () => {
          const response = await client.faction.get();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).basic should succeed",
        async () => {
          const response = await client.faction.withId("46166").basic();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).chain should succeed",
        async () => {
          const response = await client.faction.withId("46166").chain();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).chains should succeed",
        async () => {
          const response = await client.faction.withId("46166").chains();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).hof should succeed",
        async () => {
          const response = await client.faction.withId("46166").hof();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).members should succeed",
        async () => {
          const response = await client.faction.withId("46166").members();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).raids should succeed",
        async () => {
          const response = await client.faction.withId("46166").raids();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).rankedwars should succeed",
        async () => {
          const response = await client.faction.withId("46166").rankedwars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).territory should succeed",
        async () => {
          const response = await client.faction.withId("46166").territory();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).territorywars should succeed",
        async () => {
          const response = await client.faction.withId("9176").territorywars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).wars should succeed",
        async () => {
          const response = await client.faction.withId("46166").wars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).get should succeed",
        async () => {
          const response = await client.faction.withId("46166").get();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withChainId(...).chainreport should succeed",
        async () => {
          const response = await client.faction
            .withChainId("49918782")
            .chainreport();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withCrimeId(...).crime should succeed",
        async () => {
          const response = await client.faction.withCrimeId("670659").crime();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withRaidWarId(...).raidreport should succeed",
        async () => {
          const response = await client.faction
            .withRaidWarId("6590")
            .raidreport();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withRankedWarId(...).rankedwarreport should succeed",
        async () => {
          const response = await client.faction
            .withRankedWarId("27616")
            .rankedwarreport();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withTerritoryWarId(...).territorywarreport should succeed",
        async () => {
          const response = await client.faction
            .withTerritoryWarId("43017")
            .territorywarreport();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );
    },
  );
});
