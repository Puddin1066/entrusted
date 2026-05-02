import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Parent repo has its own lockfile, so Turbopack can infer the wrong workspace and
 * fail to resolve `next` (see Next.js turbopack `root` docs). Pin the app root;
 * dev/build use `--webpack` until lockfiles are unified or Turbopack handles this layout.
 */
const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
