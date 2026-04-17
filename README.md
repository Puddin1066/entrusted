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

Owner: **puddin1066**. After you create the repo (e.g. `entrusted_pereira`), add the remote and push:

```bash
git remote add origin https://github.com/puddin1066/entrusted_pereira.git
git push -u origin main
```

Or with GitHub CLI (logged in as `puddin1066`):

```bash
gh repo create entrusted_pereira --private --source=. --remote=origin --push
```

In Vercel, connect this repo and set **Root Directory** to `entrusted-site`.
