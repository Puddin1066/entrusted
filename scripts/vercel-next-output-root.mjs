/**
 * On Vercel, the project "Root Directory" must be the Next app folder so `.next`
 * is created where the platform expects it. This script fails fast with a clear
 * message when output only exists under entrusted/ but the deployment cwd is
 * the monorepo root (wrong Root Directory in Vercel).
 */
import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const rootNext = path.join(cwd, ".next");
const nestedNext = path.join(cwd, "entrusted", ".next");

/** Vercel sets VERCEL=1 in many environments; do not rely on that alone. */
function isVercelBuild() {
  const v = process.env.VERCEL;
  if (v === "1" || v === "true") return true;
  const env = process.env.VERCEL_ENV;
  if (env === "preview" || env === "production") return true;
  return false;
}

if (!isVercelBuild()) {
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
