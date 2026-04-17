import { servicesPage } from "@/content/services";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { CTABand } from "@/components/marketing/cta-band";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/services"];

export default function ServicesPage() {
  const s = servicesPage;
  return (
    <>
      <PageHero headline={s.hero.headline} subheadline={s.hero.subheadline} />
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[820px] space-y-16 px-4 py-16 sm:px-6">
          {s.sections.map((sec) => (
            <section key={sec.title}>
              <h2 className="font-serif text-2xl font-semibold text-entrusted-navy md:text-3xl">
                {sec.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">{sec.copy}</p>
              {"includes" in sec && sec.includes ? (
                <ul className="mt-6 list-disc space-y-2 pl-5 text-stone-700">
                  {sec.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
      <CTABand
        headline={s.closing.headline}
        copy="Reach out to discuss timelines, case types, and district needs—or download the vendor packet for onboarding."
        primary={s.closing.cta}
        secondary="Download vendor packet"
        primaryHref="/contact"
        secondaryHref="/vendor-packet"
        variant="light"
      />
    </>
  );
}
