import fs from "fs-extra";
import { Project } from "ts-morph";
import { GENERATED_DIR } from "./config";
import { fetchSpec } from "./steps/1-load-spec.ts";
import { generateModels } from "./steps/2-generate-models.ts";
import { generateEndpoints } from "./steps/3-generate-endpoints.ts";
import { generateE2ETests } from "./steps/4-generate-shared.ts";
import { finalize } from "./steps/5-finalize.ts";

async function main() {
  console.log("[INFO] Starting generation...");
  await fs.remove(GENERATED_DIR);

  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
    skipAddingFilesFromTsConfig: true,
  });

  const spec = await fetchSpec();

  await generateModels(spec, project);
  await generateEndpoints(spec, project);
  await generateE2ETests(spec, project);

  await finalize(project, spec.info.version);

  console.log("\n[INFO] Saving all generated files to disk");
  await project.save();
  console.log("\n[INFO] Generation finished successfully");
}

main().catch((error) => {
  console.error(
    "\n[FATAL] An unexpected error occurred during generation:",
    error,
  );
  process.exit(1);
});
