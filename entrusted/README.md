# Entrusted School Psychology Services — Website

Next.js (App Router) marketing site for **Entrusted School Psychology Services** and **Cliff Pereira**. Static-first pages with a contact form backed by [Resend](https://resend.com).

## Development

```bash
npm install
cp .env.example .env.local
# Add RESEND_API_KEY and emails, or set CONTACT_FORM_DRY_RUN=true for local testing without sending mail
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (or connect the folder).
2. In [Vercel](https://vercel.com), **Import** the repository.
3. **Required:** Under **Settings → General**, set **Root Directory** to `entrusted` (the folder that contains this `package.json` and `next.config.ts`). Vercel must run install/build there so it detects Next.js and outputs `.next` in the right place.
4. Under **Build & Development Settings**, keep **Framework Preset** as **Next.js** and leave **Output Directory** empty (default). Do not set it to `public`.
5. Add environment variables from `.env.example` (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`).
6. Deploy. With **Root Directory = `entrusted`**, Vercel reads this folder’s `vercel.json` (`framework`, `installCommand`, `buildCommand`) and `package.json`.

**Do not deploy from the repo root (`.`).** There is no root `vercel.json`; the Next app must be the Vercel **Root Directory** so `path0` is `entrusted` and `next build` writes `./.next` where Vercel expects it.

**If you see “`.next` was not found at `/vercel/path0/.next`”:**

1. **Settings → General → Root Directory** = **`entrusted`** (not empty, not `.`).
2. **Settings → Build & Development → Output Directory** — turn **off** any override; leave blank / default for Next.js (do not set `public`, `out`, or a custom path).
3. **Redeploy** (ideally “Clear cache and redeploy” once).

If **Output Directory** was ever set in the dashboard, it can override the Next.js builder and break `.next` detection—clearing it fixes most cases.

## Content and assets

- **Copy:** `content/*.ts`
- **Brand:** `public/images/entrusted-logo.png` — full lockup (header, footer, favicons generated via `app/icon.png` + `app/apple-icon.png`).
- **Home hero banner:** `public/images/entrusted-hero-banner.png` — wide marketing banner above the fold on `/`.
- **Insights (blog):** Posts live in `content/blog.ts`. Routes: `/blog`, `/blog/[slug]`. Linked from the main nav as **Insights**.
- **Portraits:** `public/images/cliff-headshot.jpg` — focused square headshot; homepage hero and About (replace the file to update all placements).
- **Vector mark:** `components/brand/entrusted-mark.tsx` — simplified derivative of the logo mark for small UI (e.g. copyright row).
- **Vendor PDF:** `public/docs/entrusted-vendor-packet.pdf` — replace with the final district packet.
- **Contact block:** `content/site.ts` (`contactPlaceholder`) — set real email and phone before launch.

## SEO

- **Meta:** Page titles, descriptions, `keywords`, canonical URLs, and Open Graph/Twitter fields live in `content/seo.ts` (tune for your market).
- **Structured data:** `components/seo/json-ld.tsx` (Organization/Person/WebSite) and `components/seo/faq-json-ld.tsx` (FAQPage on the homepage only).
- **FAQ:** Questions and answers in `content/faq.ts` — visible on `/` and mirrored in FAQ JSON-LD for rich results.
- **Sitemap / robots:** `app/sitemap.ts`, `app/robots.ts`. Set `NEXT_PUBLIC_SITE_URL` in production so canonicals and sitemap URLs match your domain.

## Contact form behavior

- **Production:** `POST /api/contact` validates input and sends email via Resend.
- **Local mock:** Set `CONTACT_FORM_DRY_RUN=true` in `.env.local` to skip Resend and log the payload to the server console (clearly labeled mock behavior).

## Product spec

See `../entrusted_prd_ixartz_vercel.md` in the parent folder for the full PRD.
