import { TornAPI } from "../../src";
import { expectApiSuccess } from "../e2e-helpers";

describe("PropertyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in PropertyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "PropertyEndpoint",
    () => {
      it(
        "property.withId(...).get should succeed",
        async () => {
          await expectApiSuccess(() => client.property.withId("100").get());
        },
        TEST_TIMEOUT,
      );

      it(
        "property.lookup should succeed",
        async () => {
          await expectApiSuccess(() => client.property.lookup());
        },
        TEST_TIMEOUT,
      );

      it(
        "property.timestamp should succeed",
        async () => {
          await expectApiSuccess(() => client.property.timestamp());
        },
        TEST_TIMEOUT,
      );

      it(
        "property.get should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.property.get({ selections: ["property"], id: 100 }),
          );
        },
        TEST_TIMEOUT,
      );
    },
  );
});
