import { TornAPI } from "../../src";
import { expectApiSuccess, withTestData } from "../e2e-helpers";

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
          await expectApiSuccess(() => client.faction.applications());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.attacks should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.attacks());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.attacksfull should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.attacksfull());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.balance should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.balance());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.basic should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.basic());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chain should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.chain());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chains should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.chains());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.chainreport should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.chainreport());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.contributors should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.contributors({ stat: "attackswon" }),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.crimeexp should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.crimeexp());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.crimes should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.crimes());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.dirtybombs should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.dirtybombs());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.headlines should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.headlines());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.hof should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.hof());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.inventory should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.inventory({ cat: "weapons" }),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.members should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.members());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.news should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.news({ cat: "main" }));
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.positions should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.positions());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.rackets should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.rackets());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.raids should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.raids());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.rankedwars should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.rankedwars());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.reports should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.reports());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.revives should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.revives());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.revivesfull should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.revivesfull());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.search should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.search());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.snapshot should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.snapshot());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.stats should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.stats());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territory should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.territory());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territoryownership should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.territoryownership());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.territorywars should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.territorywars());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.upgrades should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.upgrades());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfarechains should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.warfarechains());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfareraids should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.warfareraids());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfareranked should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.warfareranked());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfareterritory should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.warfareterritory());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.warfare should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.warfare({ cat: "raid" }));
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.wars should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.wars());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.lookup should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.lookup());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.timestamp should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.timestamp());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.get should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.get());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).basic should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").basic());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).chain should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").chain());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).chains should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").chains());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).hof should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").hof());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).members should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withId("46166").members(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).raids should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").raids());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).rankedwars should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withId("46166").rankedwars(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).territory should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withId("46166").territory(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).territorywars should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withId("9176").territorywars(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).wars should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").wars());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withId(...).get should succeed",
        async () => {
          await expectApiSuccess(() => client.faction.withId("46166").get());
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withChainId(...).chainreport should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withChainId("49918782").chainreport(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withCrimeId(...).crime should succeed",
        async () => {
          await withTestData(
            client,
            { id: { from: "faction.crimes", pick: "crimes.0.id" } },
            ({ id, params }) =>
              expectApiSuccess(() =>
                client.faction.withCrimeId(id).crime(params as never),
              ),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withRaidWarId(...).raidreport should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withRaidWarId("6590").raidreport(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withRankedWarId(...).rankedwarreport should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withRankedWarId("27616").rankedwarreport(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "faction.withTerritoryWarId(...).territorywarreport should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.faction.withTerritoryWarId("43017").territorywarreport(),
          );
        },
        TEST_TIMEOUT,
      );
    },
  );
});
