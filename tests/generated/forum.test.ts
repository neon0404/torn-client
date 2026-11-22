import { TornAPI } from "../../src";
import { expectApiSuccess } from "../e2e-helpers";

describe("ForumEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in ForumEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)("ForumEndpoint", () => {
    it(
      "forum.categories should succeed",
      async () => {
        await expectApiSuccess(() => client.forum.categories());
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.threads should succeed",
      async () => {
        await expectApiSuccess(() => client.forum.threads());
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.lookup should succeed",
      async () => {
        await expectApiSuccess(() => client.forum.lookup());
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.timestamp should succeed",
      async () => {
        await expectApiSuccess(() => client.forum.timestamp());
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.get should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.forum.get({ selections: ["categories"] }),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withThreadId(...).posts should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.forum.withThreadId("16485512").posts(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withThreadId(...).thread should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.forum.withThreadId("16485512").thread(),
        );
      },
      TEST_TIMEOUT,
    );

    it(
      "forum.withCategoryIds(...).threads should succeed",
      async () => {
        await expectApiSuccess(() =>
          client.forum.withCategoryIds("63").threads(),
        );
      },
      TEST_TIMEOUT,
    );
  });
});
