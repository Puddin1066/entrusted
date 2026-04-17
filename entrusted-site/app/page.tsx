import { homeContent } from "@/content/home";
import { pageSeo } from "@/content/seo";
import { AboutPreview } from "@/components/marketing/about-preview";
import { AudienceSection } from "@/components/marketing/audience-section";
import { CTABand } from "@/components/marketing/cta-band";
import { Hero } from "@/components/marketing/hero";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { ResourcesPreview } from "@/components/marketing/resources-preview";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { WhyEntrusted } from "@/components/marketing/why-entrusted";
import { BlogPreview } from "@/components/marketing/blog-preview";
import { FaqSection } from "@/components/marketing/faq-section";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/"];

export default function HomePage() {
  const h = homeContent;
  return (
    <>
      <FaqJsonLd />
      <Hero
        eyebrow={h.hero.eyebrow}
        headline={h.hero.headline}
        subheadline={h.hero.subheadline}
        badges={h.hero.badges}
        primaryCta={h.hero.primaryCta}
        secondaryCta={h.hero.secondaryCta}
        microcopy={h.hero.microcopy}
      />
      <TrustStrip headline={h.trustStrip.headline} bullets={h.trustStrip.bullets} />
      <AudienceSection
        title={h.whoISupport.title}
        lead={h.whoISupport.lead}
        audiences={h.whoISupport.audiences}
        closing={h.whoISupport.closing}
      />
      <ServicesGrid
        title={h.servicesOverview.title}
        cards={h.servicesOverview.cards}
        ctaLabel={h.servicesOverview.cta}
        ctaHref="/services"
      />
      <WhyEntrusted
        title={h.whyEntrusted.title}
        lead={h.whyEntrusted.lead}
        bullets={h.whyEntrusted.bullets}
        closing={h.whyEntrusted.closing}
      />
      <AboutPreview
        title={h.aboutPreview.title}
        paragraphs={h.aboutPreview.paragraphs}
        cta={h.aboutPreview.cta}
      />
      <ProcessSteps
        title={h.process.title}
        intro={h.process.intro}
        steps={h.process.steps}
      />
      <ResourcesPreview
        title={h.resourcesPreview.title}
        copy={h.resourcesPreview.copy}
        cta={h.resourcesPreview.cta}
      />
      <BlogPreview />
      <FaqSection />
      <CTABand
        headline={h.ctaBand.headline}
        copy={h.ctaBand.copy}
        primary={h.ctaBand.primary}
        secondary={h.ctaBand.secondary}
      />
    </>
  );
}
