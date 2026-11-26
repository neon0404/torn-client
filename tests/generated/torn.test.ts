import { TornAPI } from "../../src";
import { expectApiSuccess, withTestData } from "../e2e-helpers";

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
        await withTestData(
          client,
          { params: { log: { from: "user.attacks", pick: "attacks.0.code" } } },
          ({ params }) =>
            expectApiSuccess(() => client.torn.attacklog(params as never)),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.bank should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.bank());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.bounties should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.bounties());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.calendar should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.calendar());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.cards should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.cards());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.cityshops should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.cityshops());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.companies should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.companies());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.crimes should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.crimes());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.education should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.education());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.elimination should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.elimination());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.factionhof should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.torn.factionhof({ cat: "respect" }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.factiontree should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.factiontree());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.gyms should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.gyms());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.halloween should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.halloween());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.headlines should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.headlines());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.honors should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.honors());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.hof should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.hof({ cat: "level" }));
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.itemammo should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.itemammo());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.itemmods should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.itemmods());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.items should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.items());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.logcategories should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.logcategories());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.logtypes should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.logtypes());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.medals should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.medals());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.merits should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.merits());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.museum should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.museum());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.organizedcrimes should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.organizedcrimes());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.pokertables should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.pokertables());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.properties should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.properties());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.rankedwartemplates should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.rankedwartemplates());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.rockpaperscissors should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.rockpaperscissors());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.searchforcash should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.searchforcash());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.shoplifting should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.shoplifting());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.stats should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.stats());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.stocks should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.stocks());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.territory should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.territory());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.lookup should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.lookup());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.timestamp should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.timestamp());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.get should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.torn.get({ selections: ["stats"] }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withShopId(...).cityshops should succeed",
      async () => {
        await withTestData(
          client,
          { id: { from: "torn.cityshops", pick: "cityshops.0.id" } },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.torn.withShopId(id).cityshops(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withTypeId(...).companies should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.withTypeId("1").companies());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withId(...).eliminationteam should succeed",
      async () => {
        await withTestData(
          client,
          { id: { from: "torn.elimination", pick: "elimination.0.id" } },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.torn.withId(id).eliminationteam(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).honors should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.withIds("317").honors());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).itemdetails should succeed",
      async () => {
        await withTestData(
          client,
          {
            id: {
              from: "user.inventory",
              params: { cat: "Primary" },
              pick: "inventory.items.0.uid",
            },
          },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.torn.withIds(id).itemdetails(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).itemstats should succeed",
      async () => {
        await withTestData(
          client,
          {
            id: {
              from: "user.inventory",
              params: { cat: "Primary" },
              pick: "inventory.items.0.uid",
            },
          },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.torn.withIds(id).itemstats(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).items should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.withIds("1").items());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withIds(...).medals should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.withIds("241").medals());
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withLogCategoryId(...).logtypes should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.torn.withLogCategoryId("1").logtypes(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withStockId(...).stocks should succeed",
      async () => {
        await withTestData(
          client,
          { id: { from: "torn.stocks", pick: "stocks.0.id" } },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.torn.withStockId(id).stocks(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "torn.withCrimeId(...).subcrimes should succeed",
      async () => {
        await expectApiSuccess(() => client.torn.withCrimeId("1").subcrimes());
      },
      TEST_TIMEOUT,
    );
  });
});
