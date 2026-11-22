import { TornAPI } from "../../src";
import { expectApiSuccess, withTestData } from "../e2e-helpers";

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
          await expectApiSuccess(() => client.racing.cars());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.carupgrades should succeed",
        async () => {
          await expectApiSuccess(() => client.racing.carupgrades());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.races should succeed",
        async () => {
          await expectApiSuccess(() => client.racing.races());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.tracks should succeed",
        async () => {
          await expectApiSuccess(() => client.racing.tracks());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.lookup should succeed",
        async () => {
          await expectApiSuccess(() => client.racing.lookup());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.timestamp should succeed",
        async () => {
          await expectApiSuccess(() => client.racing.timestamp());
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.get should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.racing.get({ selections: ["cars"] }),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.withRaceId(...).race should succeed",
        async () => {
          await withTestData(
            client,
            { id: { from: "racing.races", pick: "races.0.id" } },
            ({ id, params }) =>
              expectApiSuccess(() =>
                client.racing.withRaceId(id).race(params as never),
              ),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "racing.withTrackId(...).records should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.racing.withTrackId("6").records({ cat: "A" }),
          );
        },
        TEST_TIMEOUT,
      );
    },
  );
});
