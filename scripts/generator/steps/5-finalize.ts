import { Project, SourceFile, ts, Directory } from "ts-morph";
import path from "path";
import { GENERATED_DIR, MODELS_DIR, ENDPOINTS_DIR } from "../config.ts";
import { writeFileSync } from "node:fs";

/**
 * @description Checks if a source file only contains type-related declarations
 *
 * This is used to determine if `export type` can be safely used
 * @param {SourceFile} sourceFile - The ts-morph source file to check
 * @returns {boolean} True if the file is suitable for `export type`
 */
function isTypeOnlyFile(sourceFile: SourceFile): boolean {
  return sourceFile
    .getStatements()
    .every(
      (statement) =>
        ts.isTypeAliasDeclaration(statement.compilerNode) ||
        ts.isInterfaceDeclaration(statement.compilerNode),
    );
}

/**
 * @description Creates a barrel file (index.ts) for a given directory
 *
 * It gathers all files and adds export declarations
 * @param {Directory} directory - The ts-morph Directory object to create the barrel for
 * @param {boolean} includeSubdirs - Whether to also export subdirectories
 */
function createBarrelFor(directory: Directory, includeSubdirs: boolean): void {
  const barrelPath = path.join(directory.getPath(), "index.ts");
  const barrelFile = directory.getProject().createSourceFile(barrelPath, "", {
    overwrite: true,
  });

  const sourceFiles = directory.getSourceFiles([
    "*.ts",
    "!*.test.ts",
    "!index.ts",
  ]);

  const exportDeclarations = sourceFiles.map((file) => ({
    moduleSpecifier: `./${file.getBaseNameWithoutExtension()}`,
    isTypeOnly: isTypeOnlyFile(file),
  }));

  if (includeSubdirs) {
    directory.getDirectories().forEach((subdir) => {
      exportDeclarations.push({
        moduleSpecifier: `./${subdir.getBaseName()}`,
        isTypeOnly: false,
      });
    });
  }

  exportDeclarations.sort((a, b) =>
    a.moduleSpecifier.localeCompare(b.moduleSpecifier),
  );

  if (exportDeclarations.length > 0) {
    barrelFile.addExportDeclarations(exportDeclarations);
  }
}

/**
 * @description Finalizes the generation process by creating barrel files for all generated modules
 * @param {Project} project The ts-morph project instance
 * @param {string} version The ts-morph project instance
 */
export async function finalize(
  project: Project,
  version: string,
): Promise<void> {
  console.log("\n[5/5] Finalizing generation");
  console.log("[INFO] Creating barrel files");

  const modelsDir = project.getDirectory(MODELS_DIR);
  if (modelsDir) {
    createBarrelFor(modelsDir, false);
    console.log("[INFO] Barrel file for models created");
  }

  const endpointsDir = project.getDirectory(ENDPOINTS_DIR);
  if (endpointsDir) {
    createBarrelFor(endpointsDir, false);
    console.log("[INFO] Barrel file for endpoints created");
  }

  const generatedDir = project.getDirectory(GENERATED_DIR);
  if (generatedDir) {
    createBarrelFor(generatedDir, true);
    console.log("[INFO] Main barrel file for generated folder created");
  }

  writeFileSync(".torn-api-version", version);
  console.log(`[INFO] .torn-api-version was updated to ${version}`);
}
