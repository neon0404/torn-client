import { TornAPI } from "../../src";
import { expectApiSuccess, withTestData } from "../e2e-helpers";

describe("CompanyEndpoint Integration Tests", () => {
  let client: TornAPI;
  const TEST_TIMEOUT = 20000;

  beforeAll(() => {
    const apiKey = process.env.TORN_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[WARN] TORN_API_KEY is not set; skipping all integration tests in CompanyEndpoint",
      );
      return;
    }
    client = new TornAPI({ apiKeys: [apiKey], comment: "tc-e2e" });
  });

  (process.env.TORN_API_KEY ? describe : describe.skip)(
    "CompanyEndpoint",
    () => {
      it(
        "company.applications should succeed",
        async () => {
          await expectApiSuccess(() => client.company.applications());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.employees should succeed",
        async () => {
          await expectApiSuccess(() => client.company.employees());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.news should succeed",
        async () => {
          await expectApiSuccess(() => client.company.news());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.profile should succeed",
        async () => {
          await expectApiSuccess(() => client.company.profile());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.search should succeed",
        async () => {
          await expectApiSuccess(() => client.company.search());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.snapshot should succeed",
        async () => {
          await expectApiSuccess(() => client.company.snapshot());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.stock should succeed",
        async () => {
          await expectApiSuccess(() => client.company.stock());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.lookup should succeed",
        async () => {
          await expectApiSuccess(() => client.company.lookup());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.timestamp should succeed",
        async () => {
          await expectApiSuccess(() => client.company.timestamp());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.get should succeed",
        async () => {
          await expectApiSuccess(() => client.company.get());
        },
        TEST_TIMEOUT,
      );

      it(
        "company.withId(...).employees should succeed",
        async () => {
          await withTestData(
            client,
            {
              id: {
                from: "company.withTypeId(1).companies",
                pick: "companies.0.id",
              },
            },
            ({ id, params }) =>
              expectApiSuccess(() =>
                client.company.withId(id).employees(params as never),
              ),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "company.withId(...).profile should succeed",
        async () => {
          await withTestData(
            client,
            {
              id: {
                from: "company.withTypeId(1).companies",
                pick: "companies.0.id",
              },
            },
            ({ id, params }) =>
              expectApiSuccess(() =>
                client.company.withId(id).profile(params as never),
              ),
          );
        },
        TEST_TIMEOUT,
      );

      it(
        "company.withTypeId(...).companies should succeed",
        async () => {
          await expectApiSuccess(() =>
            client.company.withTypeId("1").companies(),
          );
        },
        TEST_TIMEOUT,
      );
    },
  );
});
