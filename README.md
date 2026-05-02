# Entrusted — Pereira

This repository contains the product requirements document and the production website for **Entrusted School Psychology Services**.

| Item | Location |
|------|----------|
| PRD | [`entrusted_prd_ixartz_vercel.md`](./entrusted_prd_ixartz_vercel.md) |
| Next.js app (deploy this folder on Vercel) | [`entrusted/`](./entrusted/) |

**Run locally** (from this folder):

```bash
npm install --prefix entrusted
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Or `cd entrusted && npm run dev`.

Full setup: [`entrusted/README.md`](./entrusted/README.md).

## GitHub

Remote: **[github.com/Puddin1066/entrusted](https://github.com/Puddin1066/entrusted)**

```bash
git remote add origin https://github.com/Puddin1066/entrusted.git
git push -u origin main
```

## Vercel (required)

The Next.js app is in **`entrusted/`**, not the repo root. Vercel must use that folder as the project root so `next build` writes `.next` in the right place.

1. Open **[Vercel](https://vercel.com)** → your **entrusted** project → **Settings** → **General**.
2. Under **Root Directory**, click **Edit**, set it to **`entrusted`**, then **Save**.
3. **Deployments** → **Redeploy** the latest commit (or push a new commit).

Do **not** add a repo-root `vercel.json` with custom install/build unless you know you need it—**Root Directory** is the supported fix for this layout.

After this, GitHub’s Vercel check should pass on new deployments.
