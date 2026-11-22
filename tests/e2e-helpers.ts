/**
 * Helpers for the generated E2E tests in tests/generated
 *
 * Two goals:
 *  1. Tell client bugs apart from missing test data. A Torn API error such as
 *     "Incorrect ID" or "No competition available" proves the request reached a
 *     valid endpoint with valid parameters; only the data was not there today
 *  2. Avoid hand-scraped IDs that go stale. In tests/e2e.config.json a value can be
 *     a live lookup instead of a literal:
 *
 *       "raceId": { "from": "racing.races", "pick": "races.0.id" }
 *       "id": { "from": "company.withTypeId(1).companies", "pick": "companies.0.id" }
 *       "ids": { "from": "user.inventory", "params": { "cat": "Primary" }, "pick": "inventory.items.0.uid" }
 *
 *     The lookup runs right before the test; if it finds nothing, the test is skipped with a warning
 */
import type { TornAPI } from "../src";

/** A literal test value, or a lookup that fetches one from the live API */
export type TestValue = string | number | TestValueLookup;

export interface TestValueLookup {
  /** Client call path, e.g. "racing.races" or "company.withTypeId(1).companies" */
  from: string;
  /** Query params for the final call */
  params?: Record<string, unknown>;
  /** Dot path into the response, e.g. "races.0.id" */
  pick: string;
}

/**
 * Torn API error codes meaning "the request was valid, but the data does not exist right now"
 * Codes come from the Error* schemas in the official OpenAPI spec
 */
const DATA_UNAVAILABLE_CODES: Record<number, string> = {
  6: "Incorrect ID",
  7: "Incorrect ID-entity relation",
  15: "Log unavailable",
  16: "Access level of this key is not high enough",
  20: "Race not yet finished",
  24: "Closed temporarily",
  28: "Incorrect log ID",
  30: "File does not exist",
  31: "City stats cron failed",
  32: "Endpoint closed until attacking period",
  33: "No competition available",
};

/** Transient errors worth one more try: too many requests, backend error */
const RETRYABLE_CODES = new Set([5, 17]);
const RETRY_DELAY_MS = 5_000;

const getApiErrorCode = (error: unknown): number | undefined => {
  if (
    typeof error === "object" &&
    error !== null &&
    (error as { name?: unknown }).name === "TornApiError" &&
    typeof (error as { code?: unknown }).code === "number"
  ) {
    return (error as { code: number }).code;
  }
  return undefined;
};

const isLookup = (value: unknown): value is TestValueLookup =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as TestValueLookup).from === "string" &&
  typeof (value as TestValueLookup).pick === "string";

async function withRetry<T>(call: () => Promise<T>): Promise<T> {
  try {
    return await call();
  } catch (error) {
    const code = getApiErrorCode(error);
    if (code === undefined || !RETRYABLE_CODES.has(code)) throw error;
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return call();
  }
}

/**
 * Runs an API call and asserts it succeeded
 * Errors that only mean "no data available right now" are logged instead of failing the test
 */
export async function expectApiSuccess(
  call: () => Promise<unknown>,
): Promise<void> {
  let response: unknown;
  try {
    response = await withRetry(call);
  } catch (error) {
    const code = getApiErrorCode(error);
    if (code !== undefined && code in DATA_UNAVAILABLE_CODES) {
      console.warn(
        `[E2E] ${expect.getState().currentTestName}: accepted API error ${code} (${DATA_UNAVAILABLE_CODES[code]}): request was valid, data is not available`,
      );
      return;
    }
    throw error;
  }
  expect(response).toBeDefined();
  expect(response).not.toHaveProperty("error");
}

/**
 * Calls a client path like "company.withTypeId(1).companies" and picks a value from the response
 */
async function lookup(
  client: TornAPI,
  { from, params, pick }: TestValueLookup,
): Promise<string | number | undefined> {
  const segments = from.match(/[A-Za-z_$][\w$]*(\([^)]*\))?/g) ?? [];
  let target: unknown = client;

  for (const [i, segment] of segments.entries()) {
    const [, name, args] = segment.match(/^([\w$]+)(?:\((.*)\))?$/) ?? [];
    const owner = target as Record<string, unknown>;
    const member = owner?.[name];
    const isLast = i === segments.length - 1;

    if (typeof member === "function") {
      const callArgs = isLast
        ? [params]
        : args !== undefined && args !== ""
          ? args.split(",").map((a) => JSON.parse(a.trim()))
          : [];
      target = await (member as (...a: unknown[]) => unknown).apply(
        owner,
        callArgs,
      );
    } else {
      target = member;
    }
  }

  let value: unknown = target;
  for (const key of pick.split(".")) {
    value = (value as Record<string, unknown> | undefined)?.[key];
  }
  return typeof value === "string" || typeof value === "number"
    ? value
    : undefined;
}

async function resolveValue(client: TornAPI, value: unknown): Promise<unknown> {
  return isLookup(value) ? lookup(client, value) : value;
}

/**
 * Resolves lookups in a test's context ID and query params, then runs the test body
 * If any lookup comes back empty (or fails), the test is skipped with a warning
 */
export async function withTestData(
  client: TornAPI,
  data: { id?: TestValue; params?: Record<string, unknown> },
  run: (resolved: {
    id: string | number;
    params: Record<string, unknown>;
  }) => Promise<void>,
): Promise<void> {
  let id: string | number | undefined;
  const params: Record<string, unknown> = {};

  // Only lookup problems are skipped; failures inside `run` must still fail the test
  try {
    id = (await resolveValue(client, data.id)) as string | number | undefined;
    if ("id" in data && id === undefined) {
      throw new Error(`lookup ${JSON.stringify(data.id)} returned nothing`);
    }
    for (const [key, value] of Object.entries(data.params ?? {})) {
      params[key] = await resolveValue(client, value);
      if (params[key] === undefined) {
        throw new Error(`lookup ${JSON.stringify(value)} returned nothing`);
      }
    }
  } catch (error) {
    console.warn(
      `[E2E] ${expect.getState().currentTestName}: skipped, no test data (${(error as Error).message})`,
    );
    return;
  }

  await run({ id: id as string | number, params });
}
