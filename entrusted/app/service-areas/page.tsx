import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { CTABand } from "@/components/marketing/cta-band";
import { pageSeo } from "@/content/seo";
import { regionPages } from "@/content/regions";

export const metadata: Metadata = pageSeo["/service-areas"];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        headline="Service Areas"
        subheadline="Regional bilingual school psychology support across Massachusetts and Rhode Island district communities."
      />
      <section className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6">
          <p className="mx-auto max-w-[760px] text-center text-lg leading-relaxed text-stone-600">
            Explore regional pages for district-focused school psychology support, including bilingual
            psychoeducational evaluations, multilingual learner consultation, and short-term evaluation
            coverage.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regionPages.map((region) => (
              <Link
                key={region.slug}
                href={`/service-areas/${region.slug}`}
                className="rounded-xl border border-stone-200 bg-entrusted-sand/30 p-5 shadow-sm transition hover:border-entrusted-gold/50 hover:bg-entrusted-sand/50"
              >
                <h2 className="font-serif text-2xl font-semibold text-entrusted-navy">{region.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{region.heroSubheadline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        headline="Need support in your district?"
        copy="Share your timeline, case type, and service needs. Entrusted can confirm fit and next steps."
        primary="Contact Entrusted"
        secondary="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
