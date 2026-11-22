import { TornAPI } from "../../src";
import { expectApiSuccess } from "../e2e-helpers";

describe("KeyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in KeyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("KeyEndpoint", () => {
    it(
      "key.log should succeed",
      async () => {
        await expectApiSuccess(() => client.key.log());
      },
      TEST_TIMEOUT,
    );

    it(
      "key.info should succeed",
      async () => {
        await expectApiSuccess(() => client.key.info());
      },
      TEST_TIMEOUT,
    );

    it(
      "key.get should succeed",
      async () => {
        await expectApiSuccess(() => client.key.get({ selections: ["log"] }));
      },
      TEST_TIMEOUT,
    );
  });
});
