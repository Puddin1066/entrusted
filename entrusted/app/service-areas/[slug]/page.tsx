import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { CTABand } from "@/components/marketing/cta-band";
import { getRegionBySlug, regionPages } from "@/content/regions";
import { pageSeo } from "@/content/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return regionPages.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    return {};
  }

  const key = `/service-areas/${slug}`;
  return pageSeo[key] ?? {};
}

export default async function RegionDetailPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    notFound();
  }

  return (
    <>
      <PageHero
        headline={`School Psychology Services in ${region.name}`}
        subheadline={region.heroSubheadline}
      />
      <section className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-4 sm:px-6 md:grid-cols-2">
          <article className="space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-entrusted-navy">Regional support overview</h2>
            <p className="text-lg leading-relaxed text-stone-600">{region.overview}</p>
          </article>
          <article>
            <h2 className="font-serif text-2xl font-semibold text-entrusted-navy">Common district needs</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              {region.districtNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="border-b border-stone-200 bg-entrusted-sand/30 py-14">
        <div className="mx-auto max-w-[920px] px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-entrusted-navy">How Entrusted can help</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {region.supportAreas.map((item) => (
              <li key={item} className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand
        headline={`Discuss ${region.name} district needs`}
        copy="Entrusted can align support to your timeline, referral profile, and team capacity."
        primary="Schedule Consultation"
        secondary="Contact Entrusted"
      />
    </>
  );
}
