import Image from "next/image";
import { aboutPage } from "@/content/about";
import { site } from "@/content/site";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/about"];

export default function AboutPage() {
  const a = aboutPage;
  return (
    <>
      <PageHero headline={a.hero.headline} subheadline={a.hero.subheadline} />
      <section className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,320px)_1fr] md:items-start">
          <div className="space-y-3">
            <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border border-stone-200 shadow-md">
              <Image
                src="/images/cliff-headshot.jpg"
                alt="Cliff Pereira, bilingual school psychologist"
                fill
                className="object-cover object-top"
                sizes="320px"
                priority
              />
            </div>
            <p className="text-center text-sm text-stone-500">
              {site.principalPronouns} · {site.principalTitle}
            </p>
            <p className="text-center">
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-entrusted-navy underline hover:text-entrusted-navy/80"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="max-w-[720px] space-y-5 text-lg leading-relaxed text-stone-600">
            {a.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div>
              <h2 className="font-serif text-xl font-semibold text-entrusted-navy">{a.principles.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {a.principles.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {a.body.map((p, i) => (
              <p key={`b-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <SectionShell title={a.credentials.title}>
        <p className="mx-auto max-w-[720px] text-center text-sm text-stone-500">{a.credentials.note}</p>
        <dl className="mx-auto mt-8 grid max-w-[720px] gap-4">
          {a.credentials.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 rounded-lg border border-stone-200 bg-entrusted-sand/40 px-4 py-3 sm:flex-row sm:justify-between"
            >
              <dt className="text-sm font-semibold text-entrusted-navy">{item.label}</dt>
              <dd className="text-sm text-stone-700">
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-entrusted-navy underline hover:text-entrusted-navy/80"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </SectionShell>
      <SectionShell title={a.philosophy.title} variant="muted">
        <p className="mx-auto max-w-[720px] text-lg leading-relaxed text-stone-600">{a.philosophy.copy}</p>
      </SectionShell>
    </>
  );
}
