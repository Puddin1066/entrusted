import Link from "next/link";
import { resourcesPage } from "@/content/resources";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/resources"];

export default function ResourcesPage() {
  const r = resourcesPage;
  return (
    <>
      <PageHero headline={r.hero.headline} subheadline={r.hero.subheadline} />
      <SectionShell title={r.whenReachOut.title}>
        <p className="mx-auto max-w-[720px] text-lg text-stone-600">{r.whenReachOut.copy}</p>
        <ul className="mx-auto mt-8 max-w-[720px] list-disc space-y-2 pl-5 text-stone-700">
          {r.whenReachOut.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell title={r.commonSupport.title} variant="muted">
        <ul className="mx-auto grid max-w-[720px] gap-3 sm:grid-cols-2">
          {r.commonSupport.bullets.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm"
            >
              {b}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell title={r.whatBrings.title}>
        <p className="mx-auto max-w-[720px] text-lg leading-relaxed text-stone-600">
          {r.whatBrings.copy}
        </p>
        <ul className="mx-auto mt-8 max-w-[720px] space-y-2 text-stone-700">
          {r.whatBrings.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-entrusted-accent" aria-hidden>
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell title={r.insights.title} variant="muted">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-lg leading-relaxed text-stone-600">{r.insights.copy}</p>
          <Link
            href={r.insights.href}
            className="mt-6 inline-block font-medium text-entrusted-navy underline hover:text-entrusted-navy/80"
          >
            {r.insights.cta} →
          </Link>
        </div>
      </SectionShell>
      <section className="border-y border-stone-200 bg-entrusted-sand/40 py-16">
        <div className="mx-auto max-w-[520px] px-4 sm:px-6">
          <div className="flex flex-col justify-center rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-entrusted-navy">
              {r.discuss.title}
            </h2>
            <Link href="/contact" className="mt-6">
              <Button type="button" className="w-full sm:w-auto">
                {r.discuss.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
