# Entrusted — Pereira

This repository contains the product requirements document and the production website for **Entrusted School Psychology Services**.

| Item | Location |
|------|----------|
| PRD | [`entrusted_prd_ixartz_vercel.md`](./entrusted_prd_ixartz_vercel.md) |
| Next.js app (deploy this folder on Vercel) | [`entrusted-site/`](./entrusted-site/) |

**Run locally** (from this folder):

```bash
npm install --prefix entrusted-site
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Or `cd entrusted-site && npm run dev`.

Full setup: [`entrusted-site/README.md`](./entrusted-site/README.md).

## GitHub

Remote: **[github.com/Puddin1066/entrusted](https://github.com/Puddin1066/entrusted)**

```bash
git remote add origin https://github.com/Puddin1066/entrusted.git
git push -u origin main
```

In [Vercel](https://vercel.com), connect this repo. The repo includes a root [`vercel.json`](./vercel.json) so install/build run inside `entrusted-site`. Alternatively, set **Root Directory** to `entrusted-site` in the project settings and you can remove or simplify `vercel.json`.
