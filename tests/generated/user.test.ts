import { TornAPI } from "../../src";
import { expectApiSuccess, withTestData } from "../e2e-helpers";

describe("UserEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in UserEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("UserEndpoint", () => {
    it(
      "user.ammo should succeed",
      async () => {
        await expectApiSuccess(() => client.user.ammo());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.attacks should succeed",
      async () => {
        await expectApiSuccess(() => client.user.attacks());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.attacksfull should succeed",
      async () => {
        await expectApiSuccess(() => client.user.attacksfull());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.auctionhouse should succeed",
      async () => {
        await expectApiSuccess(() => client.user.auctionhouse());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.bars should succeed",
      async () => {
        await expectApiSuccess(() => client.user.bars());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.bazaar should succeed",
      async () => {
        await expectApiSuccess(() => client.user.bazaar());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.basic should succeed",
      async () => {
        await expectApiSuccess(() => client.user.basic());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.battlestats should succeed",
      async () => {
        await expectApiSuccess(() => client.user.battlestats());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.bounties should succeed",
      async () => {
        await expectApiSuccess(() => client.user.bounties());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.calendar should succeed",
      async () => {
        await expectApiSuccess(() => client.user.calendar());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.casino should succeed",
      async () => {
        await expectApiSuccess(() => client.user.casino());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.competition should succeed",
      async () => {
        await expectApiSuccess(() => client.user.competition());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.cooldowns should succeed",
      async () => {
        await expectApiSuccess(() => client.user.cooldowns());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.criminalrecord should succeed",
      async () => {
        await expectApiSuccess(() => client.user.criminalrecord());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.discord should succeed",
      async () => {
        await expectApiSuccess(() => client.user.discord());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.display should succeed",
      async () => {
        await expectApiSuccess(() => client.user.display());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.education should succeed",
      async () => {
        await expectApiSuccess(() => client.user.education());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.enlistedcars should succeed",
      async () => {
        await expectApiSuccess(() => client.user.enlistedcars());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.equipment should succeed",
      async () => {
        await expectApiSuccess(() => client.user.equipment());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.events should succeed",
      async () => {
        await expectApiSuccess(() => client.user.events());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.faction should succeed",
      async () => {
        await expectApiSuccess(() => client.user.faction());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumfeed should succeed",
      async () => {
        await expectApiSuccess(() => client.user.forumfeed());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumfriends should succeed",
      async () => {
        await expectApiSuccess(() => client.user.forumfriends());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumposts should succeed",
      async () => {
        await expectApiSuccess(() => client.user.forumposts());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumsubscribedthreads should succeed",
      async () => {
        await expectApiSuccess(() => client.user.forumsubscribedthreads());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumthreads should succeed",
      async () => {
        await expectApiSuccess(() => client.user.forumthreads());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.gym should succeed",
      async () => {
        await expectApiSuccess(() => client.user.gym());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.halloween should succeed",
      async () => {
        await expectApiSuccess(() => client.user.halloween());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.hof should succeed",
      async () => {
        await expectApiSuccess(() => client.user.hof());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.honors should succeed",
      async () => {
        await expectApiSuccess(() => client.user.honors());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.icons should succeed",
      async () => {
        await expectApiSuccess(() => client.user.icons());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.inventory should succeed",
      async () => {
        await expectApiSuccess(() => client.user.inventory({ cat: "Primary" }));
      },
      TEST_TIMEOUT,
    );

    it(
      "user.itemmarket should succeed",
      async () => {
        await expectApiSuccess(() => client.user.itemmarket());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.itemmods should succeed",
      async () => {
        await expectApiSuccess(() => client.user.itemmods());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.job should succeed",
      async () => {
        await expectApiSuccess(() => client.user.job());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.jobpoints should succeed",
      async () => {
        await expectApiSuccess(() => client.user.jobpoints());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.jobranks should succeed",
      async () => {
        await expectApiSuccess(() => client.user.jobranks());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.list should succeed",
      async () => {
        await expectApiSuccess(() => client.user.list({ cat: "Friends" }));
      },
      TEST_TIMEOUT,
    );

    it(
      "user.log should succeed",
      async () => {
        await expectApiSuccess(() => client.user.log());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.medals should succeed",
      async () => {
        await expectApiSuccess(() => client.user.medals());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.merits should succeed",
      async () => {
        await expectApiSuccess(() => client.user.merits());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.messages should succeed",
      async () => {
        await expectApiSuccess(() => client.user.messages());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.missions should succeed",
      async () => {
        await expectApiSuccess(() => client.user.missions());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.money should succeed",
      async () => {
        await expectApiSuccess(() => client.user.money());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.newevents should succeed",
      async () => {
        await expectApiSuccess(() => client.user.newevents());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.networth should succeed",
      async () => {
        await expectApiSuccess(() => client.user.networth());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.newmessages should succeed",
      async () => {
        await expectApiSuccess(() => client.user.newmessages());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.notifications should succeed",
      async () => {
        await expectApiSuccess(() => client.user.notifications());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.organizedcrime should succeed",
      async () => {
        await expectApiSuccess(() => client.user.organizedcrime());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.organizedcrimes should succeed",
      async () => {
        await expectApiSuccess(() => client.user.organizedcrimes());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.perks should succeed",
      async () => {
        await expectApiSuccess(() => client.user.perks());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.personalstats should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.personalstats({ cat: "popular" }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.profile should succeed",
      async () => {
        await expectApiSuccess(() => client.user.profile());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.properties should succeed",
      async () => {
        await expectApiSuccess(() => client.user.properties());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.property should succeed",
      async () => {
        await expectApiSuccess(() => client.user.property());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.races should succeed",
      async () => {
        await expectApiSuccess(() => client.user.races());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.racingrecords should succeed",
      async () => {
        await expectApiSuccess(() => client.user.racingrecords());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.refills should succeed",
      async () => {
        await expectApiSuccess(() => client.user.refills());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.reports should succeed",
      async () => {
        await expectApiSuccess(() => client.user.reports());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.revives should succeed",
      async () => {
        await expectApiSuccess(() => client.user.revives());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.revivesfull should succeed",
      async () => {
        await expectApiSuccess(() => client.user.revivesfull());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.skills should succeed",
      async () => {
        await expectApiSuccess(() => client.user.skills());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.search should succeed",
      async () => {
        await expectApiSuccess(() => client.user.search());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.snapshot should succeed",
      async () => {
        await expectApiSuccess(() => client.user.snapshot());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.stocks should succeed",
      async () => {
        await expectApiSuccess(() => client.user.stocks());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.trades should succeed",
      async () => {
        await expectApiSuccess(() => client.user.trades());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.travel should succeed",
      async () => {
        await expectApiSuccess(() => client.user.travel());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.travelinventory should succeed",
      async () => {
        await expectApiSuccess(() => client.user.travelinventory());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.virus should succeed",
      async () => {
        await expectApiSuccess(() => client.user.virus());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.weaponexp should succeed",
      async () => {
        await expectApiSuccess(() => client.user.weaponexp());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.workstats should succeed",
      async () => {
        await expectApiSuccess(() => client.user.workstats());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.lookup should succeed",
      async () => {
        await expectApiSuccess(() => client.user.lookup());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.timestamp should succeed",
      async () => {
        await expectApiSuccess(() => client.user.timestamp());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.get should succeed",
      async () => {
        await expectApiSuccess(() => client.user.get());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).basic should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").basic());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).bounties should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").bounties());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).competition should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").competition(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).criminalrecord should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").criminalrecord(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).discord should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").discord());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).display should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").display());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).faction should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").faction());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).forumposts should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").forumposts(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).forumthreads should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").forumthreads(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).hof should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").hof());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).icons should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").icons());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).job should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").job());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).medals should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").medals());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).personalstats should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").personalstats({ cat: "popular" }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).profile should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").profile());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).properties should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withId("3772610").properties(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).property should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").property());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).get should succeed",
      async () => {
        await expectApiSuccess(() => client.user.withId("3772610").get());
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withCrimeId(...).crimes should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.user.withCrimeId("1").crimes({ timestamp: "1672531200" }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withTradeId(...).trade should succeed",
      async () => {
        await withTestData(
          client,
          { id: { from: "user.trades", pick: "trades.0.id" } },
          ({ id, params }) =>
            expectApiSuccess(() =>
              client.user.withTradeId(id).trade(params as never),
            ),
        );
      },
      TEST_TIMEOUT,
    );
  });
});
