import { chmod, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..", "..");
const hooksDir = path.join(repoRoot, ".git", "hooks");
const hookPath = path.join(hooksDir, "pre-push");
const begin = "# BEGIN blog translation check";
const end = "# END blog translation check";
const block = `${begin}
if command -v pnpm >/dev/null 2>&1; then
  pnpm --dir blog translations:check
else
  echo "pnpm is required to run blog translation checks." >&2
  exit 1
fi
${end}
`;

async function main() {
  try {
    await mkdir(hooksDir, { recursive: true });
  } catch {
    console.log("Skipping git hook install because .git/hooks is unavailable.");
    return;
  }

  let current = "";
  try {
    current = await readFile(hookPath, "utf8");
  } catch {
    current = "#!/bin/sh\n";
  }

  const pattern = new RegExp(`${begin}[\\s\\S]*?${end}\\n?`, "m");
  const next = pattern.test(current)
    ? current.replace(pattern, block)
    : `${current.trimEnd()}\n\n${block}`;

  await writeFile(hookPath, next, "utf8");
  await chmod(hookPath, 0o755);
  console.log("Installed blog translation pre-push hook.");
}

await main();

