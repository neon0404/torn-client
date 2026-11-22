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
});
