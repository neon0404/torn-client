import path from "path";

export const ROOT_DIR = path.resolve(__dirname, "..", "..");
export const SRC_DIR = path.join(ROOT_DIR, "src");
export const TESTS_DIR = path.join(ROOT_DIR, "tests");
export const GENERATED_DIR = path.join(SRC_DIR, "generated");
export const GENERATED_TESTS_DIR = path.join(TESTS_DIR, "generated");
export const MODELS_DIR = path.join(GENERATED_DIR, "models");
export const ENDPOINTS_DIR = path.join(GENERATED_DIR, "endpoints");
export const SWAGGER_URL = "https://www.torn.com/swagger/openapi.json";
export const LOCAL_SPEC_PATH = path.join(ROOT_DIR, "openapi.json");
export const CUSTOM_SPEC_PATH = path.join(ROOT_DIR, "override.openapi.json");
export const TEST_DATA_CONFIG_PATH = path.join(TESTS_DIR, "e2e.config.json");
