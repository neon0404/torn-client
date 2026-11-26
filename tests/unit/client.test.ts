import * as lib from "../../src";
import { TornAPI } from "../../src";

describe("TornAPI", () => {
  // Guards auto-merged API updates: a new tag in the spec creates a new
  // *Endpoint class, which is unreachable until it is wired into TornAPI
  it("should expose every generated endpoint class", () => {
    const client = new TornAPI({ apiKeys: ["KEY1"] });
    const exposed = new Set(
      Object.values(client).map((value) => value?.constructor),
    );

    const endpointClasses = Object.entries(lib).filter(
      ([name, value]) =>
        name.endsWith("Endpoint") && typeof value === "function",
    );

    expect(endpointClasses.length).toBeGreaterThan(0);
    for (const [name, endpointClass] of endpointClasses) {
      expect({ name, exposed: exposed.has(endpointClass) }).toEqual({
        name,
        exposed: true,
      });
    }
  });

  it("should expose the company endpoint", () => {
    const client = new TornAPI({ apiKeys: ["KEY1"] });
    expect(client.company).toBeInstanceOf(lib.CompanyEndpoint);
  });
});

describe("TornAPI rate limit observation", () => {
  const mockFetch = jest.spyOn(global, "fetch");

  beforeEach(() => {
    jest.useFakeTimers();
    mockFetch.mockReset();
    mockFetch.mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify({ ok: true }))),
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should pass onRateLimit through and expose getRateLimitStatus", async () => {
    const onRateLimit = jest.fn();
    const client = new TornAPI({ apiKeys: ["KEY1"], onRateLimit });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (client as any).requestHandler;
    const now = Date.now();
    const timestamps = handler.requestTimestamps.get("KEY1");
    for (let i = 0; i < 100; i++) timestamps.push(now);

    expect(client.getRateLimitStatus()).toEqual({ waiting: 0, resumeAt: null });

    const request = handler.requester("/test", {});
    await jest.advanceTimersByTimeAsync(0);

    expect(client.getRateLimitStatus()).toEqual({
      waiting: 1,
      resumeAt: now + 60_100,
    });
    expect(onRateLimit).toHaveBeenCalledWith({
      type: "waiting",
      waitMs: 60_100,
      resumeAt: now + 60_100,
      queued: 1,
    });

    await jest.advanceTimersByTimeAsync(60_100);
    await request;

    expect(onRateLimit).toHaveBeenLastCalledWith({
      type: "resumed",
      waitedMs: 60_100,
      queued: 0,
    });
    expect(client.getRateLimitStatus()).toEqual({ waiting: 0, resumeAt: null });
    // Existing per-key info is unchanged and still only shows the key prefix
    expect(Object.keys(client.getRateLimitInfo())).toEqual(["KEY1"]);
  });
});
