import { TornAPI } from "../../src";
import { expectApiSuccess } from "../e2e-helpers";

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
        "market.withId(...).auctionhouselisting should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.market.withId("1").auctionhouselisting(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withId(...).auctionhouse should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.market.withId("1").auctionhouse(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withId(...).bazaar should succeed",
        async () => {
          await expectApiSuccess(() => client.market.withId("1").bazaar());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withId(...).itemmarket should succeed",
        async () => {
          await expectApiSuccess(() => client.market.withId("1").itemmarket());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.auctionhouse should succeed",
        async () => {
          await expectApiSuccess(() => client.market.auctionhouse());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.bazaar should succeed",
        async () => {
          await expectApiSuccess(() => client.market.bazaar());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.pointsmarket should succeed",
        async () => {
          await expectApiSuccess(() => client.market.pointsmarket());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.lookup should succeed",
        async () => {
          await expectApiSuccess(() => client.market.lookup());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.timestamp should succeed",
        async () => {
          await expectApiSuccess(() => client.market.timestamp());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.get should succeed",
        async () => {
          await expectApiSuccess(() => client.market.get());
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withPropertyTypeId(...).properties should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.market.withPropertyTypeId("1").properties(),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "market.withPropertyTypeId(...).rentals should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.market.withPropertyTypeId("1").rentals(),
          );
        },
        TEST_TIMEOUT,
      );
    },
  );
});
