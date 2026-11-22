/**
 * Public API surface checker
 *
 * Used by CI to decide whether an automated API-update PR can be merged
 * without a human: anything a consumer could be importing or calling must
 * still exist after the change
 *
 *   tsx scripts/api-surface.ts extract <projectRoot>              > surface.json
 *   tsx scripts/api-surface.ts compare <base.json> <head.json> [--summary out.md]
 *
 * `compare` writes `breaking=true|false` to $GITHUB_OUTPUT when available
 * It always exits 0 on a successful comparison; the caller decides what to do
 */
import fs from "node:fs";
import path from "node:path";
import { Node, Project, Scope } from "ts-morph";

type Surface = Record<string, string>;

/**
 * Builds a flat map of "Name" / "Name.member" -> kind for everything exported from src/index.ts
 * Kinds ending in "!" are breaking when removed (consumer code stops compiling),
 * others are reported for information only (e.g. response fields the API stopped sending)
 */
function extract(root: string): Surface {
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
    compilerOptions: { allowImportingTsExtensions: true },
  });
  project.addSourceFilesAtPaths(path.join(root, "src", "**", "*.ts"));
  const index = project.getSourceFileOrThrow(
    path.join(root, "src", "index.ts"),
  );

  const surface: Surface = {};

  for (const [name, declarations] of index.getExportedDeclarations()) {
    for (const decl of declarations) {
      if (Node.isClassDeclaration(decl)) {
        surface[name] = "class!";
        for (const member of decl.getMembers()) {
          if (
            Node.isConstructorDeclaration(member) ||
            !("getName" in member) ||
            ("getScope" in member && member.getScope() !== Scope.Public)
          ) {
            continue;
          }
          const memberName = (member as { getName(): string }).getName();
          if (memberName.startsWith("#")) continue;
          surface[`${name}.${memberName}`] = "member!";
        }
      } else if (Node.isInterfaceDeclaration(decl)) {
        surface[name] = "type!";
        for (const prop of decl.getProperties()) {
          surface[`${name}.${prop.getName()}`] = "property";
        }
      } else if (Node.isTypeAliasDeclaration(decl)) {
        surface[name] = "type!";
        const typeNode = decl.getTypeNode();
        if (typeNode && Node.isTypeLiteral(typeNode)) {
          for (const prop of typeNode.getProperties()) {
            surface[`${name}.${prop.getName()}`] = "property";
          }
        }
      } else if (Node.isEnumDeclaration(decl)) {
        surface[name] = "enum!";
        for (const m of decl.getMembers()) {
          surface[`${name}.${m.getName()}`] = "member!";
        }
      } else {
        surface[name] = `${decl.getKindName()}!`;
      }
    }
  }

  return Object.fromEntries(
    Object.entries(surface).sort(([a], [b]) => a.localeCompare(b)),
  );
}

function compare(base: Surface, head: Surface) {
  const removed = Object.keys(base).filter((k) => !(k in head));
  const added = Object.keys(head).filter((k) => !(k in base));

  // A removed member of a removed symbol is already covered by the symbol itself
  const isCovered = (k: string) =>
    k.includes(".") && removed.includes(k.slice(0, k.indexOf(".")));

  const breaking = removed.filter(
    (k) => base[k].endsWith("!") && !isCovered(k),
  );
  const informational = removed.filter(
    (k) => !base[k].endsWith("!") && !isCovered(k),
  );

  return { breaking, informational, added };
}

function renderMarkdown(result: ReturnType<typeof compare>): string {
  const list = (items: string[], max = 50) =>
    items
      .slice(0, max)
      .map((i) => `- \`${i}\``)
      .concat(items.length > max ? [`- …and ${items.length - max} more`] : [])
      .join("\n");

  const lines = ["## Public API surface"];
  if (result.breaking.length > 0) {
    lines.push(
      "",
      `**${result.breaking.length} breaking removal(s)** (consumer code using these will no longer compile):`,
      "",
      list(result.breaking),
    );
  } else {
    lines.push("", "No exports or endpoint methods were removed ✅");
  }
  if (result.informational.length > 0) {
    lines.push(
      "",
      `<details><summary>${result.informational.length} response field(s) removed (non-blocking)</summary>`,
      "",
      list(result.informational, 200),
      "",
      "</details>",
    );
  }
  if (result.added.length > 0) {
    lines.push(
      "",
      `<details><summary>${result.added.length} addition(s)</summary>`,
      "",
      list(result.added, 200),
      "",
      "</details>",
    );
  }
  return lines.join("\n") + "\n";
}

function main() {
  const [command, ...args] = process.argv.slice(2);

  if (command === "extract") {
    const root = path.resolve(args[0] ?? ".");
    process.stdout.write(JSON.stringify(extract(root), null, 2) + "\n");
    return;
  }

  if (command === "compare") {
    const [basePath, headPath] = args;
    const summaryIdx = args.indexOf("--summary");
    const summaryPath = summaryIdx >= 0 ? args[summaryIdx + 1] : undefined;
    if (!basePath || !headPath) {
      throw new Error(
        "Usage: compare <base.json> <head.json> [--summary out.md]",
      );
    }

    const base: Surface = JSON.parse(fs.readFileSync(basePath, "utf-8"));
    const head: Surface = JSON.parse(fs.readFileSync(headPath, "utf-8"));
    const result = compare(base, head);
    const markdown = renderMarkdown(result);

    process.stdout.write(markdown);
    if (summaryPath) fs.writeFileSync(summaryPath, markdown);
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(
        process.env.GITHUB_OUTPUT,
        `breaking=${result.breaking.length > 0}\n`,
      );
    }
    return;
  }

  throw new Error(`Unknown command "${command}". Use "extract" or "compare"`);
}

main();
