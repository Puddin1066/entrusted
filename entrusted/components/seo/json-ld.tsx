import { site } from "@/content/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://entrustedschoolpsychology.com";

export function JsonLd() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.fullName,
    description:
      "Bilingual school psychology services for Massachusetts and Rhode Island districts: psychoeducational evaluations, multilingual learner (MLL/EL) assessment consultation, culturally responsive reporting, triennial and reevaluation support, FBA/BIP and behavioral consultation, and IEP team participation.",
    slogan: "Bilingual, culturally responsive school psychology for MA & RI districts",
    url: siteUrl,
    areaServed: [
      { "@type": "State", name: "Massachusetts" },
      { "@type": "State", name: "Rhode Island" },
    ],
    serviceType: [
      "Educational consulting",
      "Bilingual psychoeducational evaluation",
      "Multilingual learner assessment consultation",
      "School-based behavioral assessment",
      "Functional behavioral assessment (FBA)",
      "Behavior intervention plan (BIP) consultation",
      "Special education reevaluation and triennial support",
      "IEP team meeting participation",
      "School psychology district consultation",
    ],
    provider: {
      "@type": "Person",
      name: site.principal,
      jobTitle: "Bilingual School Psychologist",
      url: `${siteUrl}/about`,
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.principal,
    jobTitle: "Founder and Bilingual School Psychologist",
    description:
      "School psychologist providing bilingual psychoeducational evaluations, MLL-informed assessment, and behavior consultation for Massachusetts and Rhode Island school districts. Founder of Entrusted School Psychology Services, LLC.",
    url: `${siteUrl}/about`,
    sameAs: [site.linkedinUrl],
    knowsLanguage: ["English", "Spanish", "Portuguese"],
    areaServed: [
      { "@type": "State", name: "Massachusetts" },
      { "@type": "State", name: "Rhode Island" },
    ],
    knowsAbout: [
      "Psychoeducational assessment",
      "Multilingual learner evaluation",
      "Culturally responsive school psychology",
      "Functional behavioral assessment",
      "Individualized Education Program (IEP)",
      "Special education compliance",
    ],
    worksFor: {
      "@type": "Organization",
      name: site.fullName,
      url: siteUrl,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "School Psychologist",
      occupationalCategory: "Educational psychology; school psychology",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: siteUrl,
    description:
      "Bilingual school psychology evaluations and district consultation for Massachusetts and Rhode Island: MLL/EL assessment, culturally responsive reporting, and evaluation backlog support.",
    publisher: {
      "@type": "Organization",
      name: site.fullName,
      url: siteUrl,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
