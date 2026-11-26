/* eslint-disable @typescript-eslint/no-explicit-any */

import { RequestHandler } from "../../src/client/requester";
import { TornApiError, TornRateLimitError } from "../../src";

const mockFetch = jest.spyOn(global, "fetch");

describe("RequestHandler", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockFetch.mockReset();
    // Unit tests must never reach the real API
    mockFetch.mockImplementation(() =>
      Promise.reject(new Error("Unexpected network call in unit test")),
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("API Key Balancing", () => {
    it("should rotate keys using roundRobin strategy", () => {
      const apiKeys = ["KEY1", "KEY2", "KEY3"];
      const handler = new RequestHandler({
        apiKeys,
        apiKeyBalancing: "roundRobin",
      });

      const getApiKey = () => (handler as any).getApiKey();

      expect(getApiKey()).toBe("KEY1");
      expect(getApiKey()).toBe("KEY2");
      expect(getApiKey()).toBe("KEY3");
      expect(getApiKey()).toBe("KEY1");
    });

    it("should select a random key when using random strategy", () => {
      const apiKeys = ["KEY1", "KEY2", "KEY3"];
      const handler = new RequestHandler({
        apiKeys,
        apiKeyBalancing: "random",
      });
      const getApiKey = () => (handler as any).getApiKey();

      const selectedKey = getApiKey();
      expect(apiKeys).toContain(selectedKey);
    });
  });

  describe("Rate Limiting Modes", () => {
    it("should prevent requests when limit is reached", () => {
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");

      for (let i = 0; i < 100; i++) {
        timestamps.push(now);
      }

      const isAvailable = (handler as any).isKeyAvailable("KEY1");
      expect(isAvailable).toBe(false);
    });

    it("should calculate correct wait time", () => {
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");

      const oldestRequestTimestamp = now - 50000;
      timestamps.push(oldestRequestTimestamp);
      for (let i = 0; i < 99; i++) {
        timestamps.push(now);
      }

      const waitTime = (handler as any).getMinWaitTime();
      expect(waitTime).toBeGreaterThanOrEqual(10000);
      expect(waitTime).toBeLessThan(10200);
    });

    it('should throw TornRateLimitError in "throwOnLimit" mode', async () => {
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "throwOnLimit",
      });
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");
      for (let i = 0; i < 100; i++) {
        timestamps.push(now);
      }

      await expect((handler as any).makeRequest("/test", {})).rejects.toThrow(
        TornRateLimitError,
      );
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should delay request in "autoDelay" mode', async () => {
      mockFetch.mockResolvedValueOnce(
        new Response(JSON.stringify({ success: true })),
      );

      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "autoDelay",
      });
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");

      timestamps.push(now - 55000);
      for (let i = 0; i < 99; i++) {
        timestamps.push(now);
      }

      const requestPromise = (handler as any).makeRequest("/test", {});

      expect(mockFetch).not.toHaveBeenCalled();

      await jest.advanceTimersByTimeAsync(5200);

      await requestPromise;

      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('should ignore rate limits in "ignore" mode', async () => {
      mockFetch.mockResolvedValueOnce(
        new Response(JSON.stringify({ success: true })),
      );
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "ignore",
      });
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");
      for (let i = 0; i < 100; i++) {
        timestamps.push(now);
      }

      await (handler as any).makeRequest("/test", {});

      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("API Response Handling", () => {
    it("should correctly parse a successful JSON response", async () => {
      const mockData = { user: "test", level: 10 };
      mockFetch.mockResolvedValueOnce(new Response(JSON.stringify(mockData)));
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });

      const response = await (handler as any).makeRequest("/user", {});
      expect(response).toEqual(mockData);
    });

    it("should throw TornApiError on API error response", async () => {
      const errorPayload = { error: { code: 2, error: "Incorrect key" } };
      mockFetch.mockImplementation(async () =>
        Promise.resolve(new Response(JSON.stringify(errorPayload))),
      );
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });

      await expect((handler as any).makeRequest("/test", {})).rejects.toThrow(
        TornApiError,
      );
      await expect(
        (handler as any).makeRequest("/test", {}),
      ).rejects.toMatchObject({
        code: 2,
        message: "Incorrect key",
      });
    });

    it("should throw a generic error on non-200 HTTP status", async () => {
      mockFetch.mockResolvedValueOnce(
        new Response("Internal Server Error", { status: 500 }),
      );
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });

      await expect((handler as any).makeRequest("/test", {})).rejects.toThrow();
    });

    it("should return CSV responses as text instead of failing to parse them", async () => {
      const csv = "id,name\n1,Chedburn\n";
      mockFetch.mockResolvedValueOnce(
        new Response(csv, { headers: { "Content-Type": "text/csv" } }),
      );
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });

      await expect(
        (handler as any).makeRequest("/user/snapshot", {}),
      ).resolves.toBe(csv);
    });

    it("should keep the original error when it is not an Error instance of this realm", async () => {
      const foreignError = { name: "SyntaxError", message: "Unexpected token" };
      mockFetch.mockRejectedValueOnce(foreignError);
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });

      await expect((handler as any).makeRequest("/test", {})).rejects.toBe(
        foreignError,
      );
    });
  });

  describe("Concurrent requests", () => {
    const okResponse = () =>
      Promise.resolve(new Response(JSON.stringify({ ok: true })));

    it('should not exceed the limit with parallel requests in "throwOnLimit" mode', async () => {
      mockFetch.mockImplementation(okResponse);
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "throwOnLimit",
      });

      const results = await Promise.allSettled(
        Array.from({ length: 101 }, () =>
          (handler as any).makeRequest("/test", {}),
        ),
      );

      expect(results.filter((r) => r.status === "fulfilled")).toHaveLength(100);
      const rejected = results.filter((r) => r.status === "rejected");
      expect(rejected).toHaveLength(1);
      expect((rejected[0] as PromiseRejectedResult).reason).toBeInstanceOf(
        TornRateLimitError,
      );
      expect(mockFetch).toHaveBeenCalledTimes(100);
    });

    it('should queue parallel requests over the limit in "autoDelay" mode', async () => {
      mockFetch.mockImplementation(okResponse);
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "autoDelay",
      });

      const all = Promise.all(
        Array.from({ length: 101 }, () =>
          (handler as any).makeRequest("/test", {}),
        ),
      );

      await jest.advanceTimersByTimeAsync(0);
      expect(mockFetch).toHaveBeenCalledTimes(100);

      await jest.advanceTimersByTimeAsync(60_200);
      await all;
      expect(mockFetch).toHaveBeenCalledTimes(101);
    });

    it("should find the only available key with random balancing", () => {
      const handler = new RequestHandler({
        apiKeys: ["KEY1", "KEY2", "KEY3"],
        apiKeyBalancing: "random",
      });
      const now = Date.now();
      for (const key of ["KEY1", "KEY3"]) {
        const timestamps = (handler as any).requestTimestamps.get(key);
        for (let i = 0; i < 100; i++) timestamps.push(now);
      }

      for (let i = 0; i < 20; i++) {
        expect((handler as any).acquireKey()).toBe("KEY2");
        (handler as any).requestTimestamps.set("KEY2", []);
      }
    });
  });

  describe("Observing rate limiting", () => {
    const okResponse = () =>
      Promise.resolve(new Response(JSON.stringify({ ok: true })));

    /**
     * Fills KEY1 so the next free slot opens in 5100ms (oldest request 55s ago)
     * and the rest open in 60100ms
     */
    const fillKey = (handler: RequestHandler) => {
      const now = Date.now();
      const timestamps = (handler as any).requestTimestamps.get("KEY1");
      timestamps.push(now - 55_000);
      for (let i = 0; i < 99; i++) timestamps.push(now);
      return now;
    };

    it("should emit waiting then resumed for a single request over the limit", async () => {
      mockFetch.mockImplementation(okResponse);
      const onRateLimit = jest.fn();
      const handler = new RequestHandler({ apiKeys: ["KEY1"], onRateLimit });
      const now = fillKey(handler);

      const request = (handler as any).makeRequest("/test", {});
      await jest.advanceTimersByTimeAsync(0);

      expect(onRateLimit.mock.calls).toEqual([
        [{ type: "waiting", waitMs: 5100, resumeAt: now + 5100, queued: 1 }],
      ]);
      expect(mockFetch).not.toHaveBeenCalled();

      await jest.advanceTimersByTimeAsync(5100);
      await request;

      expect(onRateLimit.mock.calls).toEqual([
        [{ type: "waiting", waitMs: 5100, resumeAt: now + 5100, queued: 1 }],
        [{ type: "resumed", waitedMs: 5100, queued: 0 }],
      ]);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it("should report queue sizes for concurrent requests and resume each of them", async () => {
      mockFetch.mockImplementation(okResponse);
      const onRateLimit = jest.fn();
      const handler = new RequestHandler({ apiKeys: ["KEY1"], onRateLimit });
      const now = fillKey(handler);

      const all = Promise.all(
        Array.from({ length: 3 }, () =>
          (handler as any).makeRequest("/test", {}),
        ),
      );
      await jest.advanceTimersByTimeAsync(0);

      expect(onRateLimit.mock.calls.map(([event]) => event)).toEqual([
        { type: "waiting", waitMs: 5100, resumeAt: now + 5100, queued: 1 },
        { type: "waiting", waitMs: 5100, resumeAt: now + 5100, queued: 2 },
        { type: "waiting", waitMs: 5100, resumeAt: now + 5100, queued: 3 },
      ]);
      onRateLimit.mockClear();

      // One slot frees up: the first request takes it, the other two must wait again
      await jest.advanceTimersByTimeAsync(5100);
      expect(onRateLimit.mock.calls.map(([event]) => event)).toEqual([
        { type: "resumed", waitedMs: 5100, queued: 2 },
        { type: "waiting", waitMs: 55_000, resumeAt: now + 60_100, queued: 2 },
        { type: "waiting", waitMs: 55_000, resumeAt: now + 60_100, queued: 2 },
      ]);
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 2,
        resumeAt: now + 60_100,
      });
      onRateLimit.mockClear();

      await jest.advanceTimersByTimeAsync(55_000);
      await all;

      expect(onRateLimit.mock.calls.map(([event]) => event)).toEqual([
        { type: "resumed", waitedMs: 60_100, queued: 1 },
        { type: "resumed", waitedMs: 60_100, queued: 0 },
      ]);
      expect(mockFetch).toHaveBeenCalledTimes(3);
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });
    });

    it.each([
      [
        "throws",
        () => {
          throw new Error("listener failed");
        },
      ],
      ["returns a rejected promise", () => Promise.reject(new Error("nope"))],
    ])(
      "should complete the request when the callback %s",
      async (_, listener) => {
        mockFetch.mockImplementation(okResponse);
        const onRateLimit = jest.fn(listener);
        const handler = new RequestHandler({ apiKeys: ["KEY1"], onRateLimit });
        fillKey(handler);

        const request = (handler as any).makeRequest("/test", {});
        await jest.advanceTimersByTimeAsync(5100);

        await expect(request).resolves.toEqual({ ok: true });
        expect(onRateLimit).toHaveBeenCalledTimes(2);
        expect(handler.getRateLimitStatus()).toEqual({
          waiting: 0,
          resumeAt: null,
        });
      },
    );

    it('should not emit events in "throwOnLimit" mode', async () => {
      const onRateLimit = jest.fn();
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "throwOnLimit",
        onRateLimit,
      });
      fillKey(handler);

      await expect((handler as any).makeRequest("/test", {})).rejects.toThrow(
        TornRateLimitError,
      );
      expect(onRateLimit).not.toHaveBeenCalled();
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });
    });

    it('should not emit events in "ignore" mode', async () => {
      mockFetch.mockImplementation(okResponse);
      const onRateLimit = jest.fn();
      const handler = new RequestHandler({
        apiKeys: ["KEY1"],
        rateLimitMode: "ignore",
        onRateLimit,
      });
      fillKey(handler);

      const request = (handler as any).makeRequest("/test", {});
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });
      await request;

      expect(onRateLimit).not.toHaveBeenCalled();
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it("should reflect the waiting state in getRateLimitStatus", async () => {
      mockFetch.mockImplementation(okResponse);
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });
      const now = fillKey(handler);

      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });

      const request = (handler as any).makeRequest("/test", {});
      await jest.advanceTimersByTimeAsync(1000);
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 1,
        resumeAt: now + 5100,
      });

      await jest.advanceTimersByTimeAsync(4100);
      await request;
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });
    });

    it("should stop counting a request that throws while waiting", async () => {
      const handler = new RequestHandler({ apiKeys: ["KEY1"] });
      fillKey(handler);
      const acquireKey = jest
        .spyOn(handler as any, "acquireKey")
        .mockReturnValueOnce(null)
        .mockImplementationOnce(() => {
          throw new Error("boom");
        });

      // Catch right away so the rejection is not unhandled while timers advance
      const outcome = (handler as any)
        .makeRequest("/test", {})
        .catch((error: Error) => error);
      await jest.advanceTimersByTimeAsync(5100);

      expect(await outcome).toEqual(new Error("boom"));

      expect(acquireKey).toHaveBeenCalledTimes(2);
      expect(handler.getRateLimitStatus()).toEqual({
        waiting: 0,
        resumeAt: null,
      });
    });
  });
});
