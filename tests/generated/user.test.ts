import { TornAPI } from "../../src";

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
      "user.attacks should succeed",
      async () => {
        const response = await client.user.attacks();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.attacksfull should succeed",
      async () => {
        const response = await client.user.attacksfull();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.bounties should succeed",
      async () => {
        const response = await client.user.bounties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.calendar should succeed",
      async () => {
        const response = await client.user.calendar();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.education should succeed",
      async () => {
        const response = await client.user.education();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.enlistedcars should succeed",
      async () => {
        const response = await client.user.enlistedcars();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.factionbalance should succeed",
      async () => {
        const response = await client.user.factionbalance();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumfeed should succeed",
      async () => {
        const response = await client.user.forumfeed();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumfriends should succeed",
      async () => {
        const response = await client.user.forumfriends();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumposts should succeed",
      async () => {
        const response = await client.user.forumposts();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumsubscribedthreads should succeed",
      async () => {
        const response = await client.user.forumsubscribedthreads();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.forumthreads should succeed",
      async () => {
        const response = await client.user.forumthreads();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.hof should succeed",
      async () => {
        const response = await client.user.hof();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.itemmarket should succeed",
      async () => {
        const response = await client.user.itemmarket();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.jobranks should succeed",
      async () => {
        const response = await client.user.jobranks();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.list should succeed",
      async () => {
        const response = await client.user.list({ cat: "Friends" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.organizedcrime should succeed",
      async () => {
        const response = await client.user.organizedcrime();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.personalstats should succeed",
      async () => {
        const response = await client.user.personalstats({ cat: "popular" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.properties should succeed",
      async () => {
        const response = await client.user.properties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.property should succeed",
      async () => {
        const response = await client.user.property();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.races should succeed",
      async () => {
        const response = await client.user.races();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.racingrecords should succeed",
      async () => {
        const response = await client.user.racingrecords();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.reports should succeed",
      async () => {
        const response = await client.user.reports();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.revives should succeed",
      async () => {
        const response = await client.user.revives();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.revivesfull should succeed",
      async () => {
        const response = await client.user.revivesfull();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.lookup should succeed",
      async () => {
        const response = await client.user.lookup();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.timestamp should succeed",
      async () => {
        const response = await client.user.timestamp();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.get should succeed",
      async () => {
        const response = await client.user.get();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).bounties should succeed",
      async () => {
        const response = await client.user.withId("3772610").bounties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).forumposts should succeed",
      async () => {
        const response = await client.user.withId("3772610").forumposts();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).forumthreads should succeed",
      async () => {
        const response = await client.user.withId("3772610").forumthreads();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).hof should succeed",
      async () => {
        const response = await client.user.withId("3772610").hof();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).personalstats should succeed",
      async () => {
        const response = await client.user
          .withId("3772610")
          .personalstats({ cat: "popular" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).properties should succeed",
      async () => {
        const response = await client.user.withId("3772610").properties();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).property should succeed",
      async () => {
        const response = await client.user.withId("3772610").property();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withId(...).get should succeed",
      async () => {
        const response = await client.user.withId("3772610").get();
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );

    it(
      "user.withCrimeId(...).crimes should succeed",
      async () => {
        const response = await client.user
          .withCrimeId("1")
          .crimes({ timestamp: "1672531200" });
        expect(response).toBeDefined();
        expect(response).not.toHaveProperty("error");
      },
      TEST_TIMEOUT,
    );
  });
});
