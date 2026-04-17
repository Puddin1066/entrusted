import { privacyPage } from "@/content/privacy";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/privacy"];

export default function PrivacyPage() {
  return (
    <>
      <PageHero headline={privacyPage.title} subheadline="How we handle information from this website." />
      <div className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-[720px] space-y-10 px-4 sm:px-6">
          {privacyPage.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif text-xl font-semibold text-entrusted-navy">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-stone-600">{s.body}</p>
            </section>
          ))}
          <p className="text-sm text-stone-500">
            Privacy inquiries:{" "}
            <a className="text-entrusted-navy underline" href={`mailto:${site.contactPlaceholder.email}`}>
              {site.contactPlaceholder.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
