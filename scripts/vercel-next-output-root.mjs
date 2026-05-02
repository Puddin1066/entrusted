/**
 * On Vercel, the project "Root Directory" must be the Next app folder so `.next`
 * is created where the platform expects it. This script fails fast with a clear
 * message when VERCEL=1 and output only exists under entrusted/.
 */
import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const rootNext = path.join(cwd, ".next");
const nestedNext = path.join(cwd, "entrusted", ".next");

if (process.env.VERCEL !== "1") {
  process.exit(0);
}

if (fs.existsSync(rootNext)) {
  process.exit(0);
}

if (fs.existsSync(nestedNext)) {
  console.error(`
[Vercel] Next.js output is at entrusted/.next but the deployment root is the monorepo root,
so .next is missing at ${rootNext}.

Fix in Vercel: Project → Settings → Build and Deployment → set Root Directory to:
  entrusted

Leave "Output Directory" empty for Next.js. Then redeploy.
`);
  process.exit(1);
}

console.error("[Vercel] No .next output found. Inspect the build step above.");
process.exit(1);
