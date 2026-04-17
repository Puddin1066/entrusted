import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { pageSeo } from "@/content/seo";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/contact"];

export default function ContactPage() {
  const c = site.contactPlaceholder;
  return (
    <>
      <PageHero headline={contactPage.hero.headline} subheadline={contactPage.hero.subheadline} />
      <div className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,340px)_1fr]">
          <aside className="h-fit rounded-xl border border-stone-200 bg-entrusted-sand/40 p-6 text-sm text-stone-700">
            <h2 className="font-serif text-lg font-semibold text-entrusted-navy">Contact</h2>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="font-medium text-stone-600">Email</dt>
                <dd>
                  <a className="text-entrusted-navy underline" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-stone-600">Phone</dt>
                <dd>
                  <a className="text-entrusted-navy underline" href={`tel:${c.phone.replace(/\D/g, "")}`}>
                    {c.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-stone-600">Response time</dt>
                <dd>{c.responseTime}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-600">Service area</dt>
                <dd>{c.serviceArea}</dd>
              </div>
            </dl>
          </aside>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
