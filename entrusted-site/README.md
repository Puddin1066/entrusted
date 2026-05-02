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
3. Set **Root Directory** to `entrusted-site` (recommended when the Git repo includes the monorepo root). That way install/build run in this app and Vercel picks up the Next.js output (`.next`) correctly.
4. Under **Build & Development Settings**, keep **Framework Preset** as **Next.js** and leave **Output Directory** empty (default). Do not set it to `public`—that preset is for static HTML exports and triggers “No Output Directory named public” after a successful `next build`.
5. Add environment variables from `.env.example` (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`).
6. Deploy. Production builds use `npm run build`.

The repo root `vercel.json` sets `"framework": "nextjs"` so deployments that build from the monorepo root still use the Next.js builder instead of a static `public/` output.

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
