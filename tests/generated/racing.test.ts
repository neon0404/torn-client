import { TornAPI } from "../../src";

describe("RacingEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in RacingEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "RacingEndpoint",
    () => {
      it(
        "racing.cars should succeed",
        async () => {
          const response = await client.racing.cars();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.carupgrades should succeed",
        async () => {
          const response = await client.racing.carupgrades();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.races should succeed",
        async () => {
          const response = await client.racing.races();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.tracks should succeed",
        async () => {
          const response = await client.racing.tracks();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.lookup should succeed",
        async () => {
          const response = await client.racing.lookup();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.timestamp should succeed",
        async () => {
          const response = await client.racing.timestamp();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.get should succeed",
        async () => {
          const response = await client.racing.get({ selections: ["cars"] });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.withRaceId(...).race should succeed",
        async () => {
          const response = await client.racing.withRaceId("15528012").race();
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.withTrackId(...).records should succeed",
        async () => {
          const response = await client.racing
            .withTrackId("6")
            .records({ cat: "A" });
          expect(response).toBeDefined();
          expect(response).not.toHaveProperty("error");
        },
        TEST_TIMEOUT,
      );
    },
  );
});
