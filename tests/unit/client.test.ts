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
