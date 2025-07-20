import fs from "fs-extra";
import { CUSTOM_SPEC_PATH, LOCAL_SPEC_PATH, SWAGGER_URL } from "../config.ts";
import type { OpenAPI3 } from "../types.ts";
import { deepMerge } from "../utils.ts";

export async function fetchSpec(): Promise<OpenAPI3> {
  console.log("[1/5] Fetching OpenAPI specification...");

  let remoteSpec: OpenAPI3;

  try {
    const response = await fetch(SWAGGER_URL);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    remoteSpec = (await response.json()) as OpenAPI3;
    console.log("[INFO] Remote specification fetched successfully.");
  } catch (error) {
    console.warn(
      `[WARN] Could not download specification: ${error instanceof Error ? error.message : "Unknown error"}. Falling back to local file.`,
    );
    try {
      remoteSpec = await fs.readJSON(LOCAL_SPEC_PATH);
      console.log("[INFO] Loaded local fallback specification");
    } catch {
      throw new Error("[FATAL] Local specification file not found or invalid");
    }
  }

  let additionalSpec: Partial<OpenAPI3> = {};

  try {
    if (await fs.pathExists(CUSTOM_SPEC_PATH)) {
      additionalSpec = await fs.readJSON(CUSTOM_SPEC_PATH);
      console.log("[INFO] Loaded additional local specification for merging");
    } else {
      console.log(
        "[INFO] No additional local specification found, skipping merge",
      );
    }
  } catch {
    console.warn(
      "[WARN] Failed to read additional local specification. Skipping",
    );
  }

  return deepMerge(remoteSpec, additionalSpec);
}
