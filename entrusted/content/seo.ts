import type { Metadata } from "next";
import { site } from "./site";

const baseTitle =
  "Entrusted School Psychology Services, LLC | Bilingual Evaluations for MA & RI Districts";

const defaultOg = "/opengraph-image";

/** Natural-language phrases used in titles/descriptions (not a keyword-stuffing list). */
const industryTerms = {
  geo: "Massachusetts and Rhode Island (MA & RI) school districts",
  geoDetail:
    "Greater Boston, MetroWest, South Shore, Worcester County, the Blackstone Valley, Providence County, and nearby RI communities",
  evalTypes:
    "bilingual psychoeducational evaluations, multilingual learner (MLL/EL) assessment, and culturally responsive reporting",
  compliance: "IEP teams, triennials, reevaluations, and evaluation backlog support",
  behavior: "FBA, BIP, and school-based behavioral assessment",
};

function page(path: string): Metadata["alternates"] {
  return { canonical: path };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://entrustedsps.com",
  ),
  title: {
    default: baseTitle,
    template: `%s | ${site.fullName}`,
  },
  description: `Bilingual school psychologist for ${industryTerms.geo}. Regional coverage includes ${industryTerms.geoDetail}. ${industryTerms.evalTypes}. ${industryTerms.compliance}. ${industryTerms.behavior}. Cliff Pereira.`,
  applicationName: site.fullName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: baseTitle,
    description: `Bilingual school psychology for MA & RI districts, including Greater Boston, Worcester County, and Providence-area schools: psychoeducational evaluation, MLL consultation, culturally responsive assessment, and IEP support.`,
    locale: "en_US",
    type: "website",
    siteName: site.fullName,
    images: [{ url: defaultOg, width: 1200, height: 630, alt: site.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: `Bilingual school psychology evaluations and district consultation across MA & RI, from Blackstone to Providence and nearby communities. Multilingual learner assessment, FBA/BIP, and reevaluations.`,
  },
};

export const pageSeo: Record<string, Metadata> = {
  "/": {
    title: {
      absolute: baseTitle,
    },
    description: `Hire a bilingual school psychologist for ${industryTerms.geo}. Regional support across ${industryTerms.geoDetail}. ${industryTerms.evalTypes}. Short-term coverage for ${industryTerms.compliance}. ${industryTerms.behavior}.`,
    keywords: [
      "bilingual school psychologist Massachusetts",
      "bilingual school psychologist Rhode Island",
      "school psychology services MA RI",
      "bilingual psychoeducational evaluation",
      "multilingual learner assessment",
      "culturally responsive school psychology",
      "special education evaluation support",
      "IEP evaluation psychologist",
      "school district psychology consultant",
      "evaluation backlog school psychology",
      "school psychologist Greater Boston",
      "school psychologist Worcester County",
      "school psychologist Providence RI",
      "school psychologist Blackstone Valley",
    ],
    alternates: page("/"),
    openGraph: {
      title: baseTitle,
      description: `District-focused bilingual school psychology in MA & RI, with practical regional coverage from Greater Boston to Providence — evaluations, ML/EL consultation, reporting, and team support.`,
      url: "/",
    },
  },
  "/about": {
    title: "About Cliff Pereira | Bilingual School Psychologist (MA & RI)",
    description: `Meet Cliff Pereira — founder of Entrusted School Psychology Services, LLC, bilingual school psychologist (EN–ES–PT), Rhode Island College graduate, based in Blackstone, MA. MLL-informed assessment and behavior consultation for MA & RI districts, including Greater Boston, Worcester County, and Providence-area schools.`,
    keywords: [
      "Cliff Pereira school psychologist",
      "bilingual school psychologist MA",
      "bilingual school psychologist RI",
      "culturally responsive assessment",
      "multilingual learner school psychology",
      "Blackstone MA school psychologist",
      "Providence area school psychologist",
    ],
    alternates: page("/about"),
    openGraph: {
      title: "About Cliff Pereira | Bilingual School Psychologist",
      description: `Credentials-focused bio: bilingual evaluation, district collaboration, MA & RI service area.`,
      url: "/about",
    },
  },
  "/services": {
    title: "School Psychology Services | Evaluations, MLL Consultation, FBA/BIP",
    description: `District services: bilingual psychoeducational evaluations, multilingual learner (EL/MLL) consultation, FBA and BIP support, triennials and reevaluations, records review, and IEP meeting participation in Massachusetts and Rhode Island, with regional support across Greater Boston, Worcester County, the Blackstone Valley, and Providence County.`,
    keywords: [
      "psychoeducational evaluation services",
      "multilingual learner psychological evaluation",
      "FBA BIP school psychologist",
      "school psychology triennial reevaluation",
      "behavioral assessment school district",
      "special education psychology services MA RI",
      "school psychology contractor Massachusetts",
      "school psychology contractor Rhode Island",
    ],
    alternates: page("/services"),
    openGraph: {
      title: "School Psychology Services | MA & RI Districts",
      description: `Bilingual evaluations, ML consultation, behavioral assessment, and reevaluation support for schools.`,
      url: "/services",
    },
  },
  "/blog": {
    title: "Insights | FBA, Multilingual Learners & School Psychology",
    description: `Practice reflections from Cliff Pereira: multilingual learner assessment, FBA and psychoeducational evaluation, and district-facing school psychology in Massachusetts and Rhode Island, including regional considerations for Greater Boston, Worcester County, and Providence-area teams.`,
    keywords: [
      "school psychology blog",
      "multilingual learner evaluation",
      "FBA school psychologist",
      "psychoeducational evaluation insights",
      "MA RI special education",
    ],
    alternates: page("/blog"),
    openGraph: {
      title: "Insights | Entrusted School Psychology",
      description: `Short articles on evaluation practice and multilingual learners.`,
      url: "/blog",
    },
  },
  "/resources": {
    title: "Director Resources | Special Education & Evaluation Teams",
    description: `Resources for directors of special education and district evaluation teams: bilingual assessment, culturally responsive evaluation, backlog coverage, and vendor onboarding for Massachusetts and Rhode Island schools, with practical guidance for Greater Boston, Worcester County, and Providence-area districts.`,
    keywords: [
      "special education director resources",
      "district evaluation team support",
      "bilingual evaluation vendor",
      "school psychology vendor packet MA RI",
      "multilingual learner evaluation guidance",
      "district evaluation vendor Massachusetts",
      "district evaluation vendor Rhode Island",
    ],
    alternates: page("/resources"),
    openGraph: {
      title: "Director Resources | Bilingual School Psychology",
      description: `When districts need bilingual evaluators, overflow capacity, or ML/EL expertise — practical guidance for leaders.`,
      url: "/resources",
    },
  },
  "/service-areas": {
    title: "Service Areas | MA & RI Regional School Psychology Support",
    description:
      "Explore Entrusted service areas for bilingual school psychology support in Massachusetts and Rhode Island, including Greater Boston, Worcester County, and Providence-area communities.",
    keywords: [
      "school psychologist service areas MA RI",
      "bilingual school psychologist Greater Boston",
      "school psychologist Worcester County",
      "school psychologist Providence area",
      "regional district evaluation support",
    ],
    alternates: page("/service-areas"),
    openGraph: {
      title: "Service Areas | Entrusted School Psychology",
      description:
        "Regional district support pages for bilingual evaluation and consultation across MA & RI.",
      url: "/service-areas",
    },
  },
  "/service-areas/greater-boston": {
    title: "Greater Boston School Psychology Services | Bilingual Evaluations",
    description:
      "Bilingual school psychology services for Greater Boston districts: psychoeducational evaluations, multilingual learner consultation, FBA/BIP support, and reevaluation coverage.",
    keywords: [
      "Greater Boston school psychologist",
      "bilingual school psychologist Boston area",
      "district evaluation support Greater Boston",
      "multilingual learner assessment Boston",
    ],
    alternates: page("/service-areas/greater-boston"),
    openGraph: {
      title: "Greater Boston School Psychology Services",
      description:
        "District-focused bilingual evaluations and consultation for Greater Boston school teams.",
      url: "/service-areas/greater-boston",
    },
  },
  "/service-areas/worcester-county": {
    title: "Worcester County School Psychology Services | District Support",
    description:
      "School psychology services for Worcester County districts, including bilingual psychoeducational evaluations, multilingual learner consultation, and short-term reevaluation support.",
    keywords: [
      "Worcester County school psychologist",
      "bilingual evaluation Worcester County",
      "district psychology consultant Worcester",
      "reevaluation support Worcester schools",
    ],
    alternates: page("/service-areas/worcester-county"),
    openGraph: {
      title: "Worcester County School Psychology Services",
      description:
        "Regional district support for evaluations, multilingual learner consultation, and behavior services.",
      url: "/service-areas/worcester-county",
    },
  },
  "/service-areas/providence-area": {
    title: "Providence Area School Psychology Services | Bilingual Support",
    description:
      "Bilingual school psychology support for Providence-area districts: psychoeducational evaluation, multilingual learner consultation, FBA/BIP support, and case-specific district coverage.",
    keywords: [
      "Providence area school psychologist",
      "bilingual school psychologist Providence",
      "district evaluation support Rhode Island",
      "MLL assessment Providence schools",
    ],
    alternates: page("/service-areas/providence-area"),
    openGraph: {
      title: "Providence Area School Psychology Services",
      description:
        "Bilingual evaluations and district consultation for Providence-area school teams.",
      url: "/service-areas/providence-area",
    },
  },
  "/contact": {
    title: "Contact | Bilingual School Psychology Services (MA & RI)",
    description: `Contact Entrusted for bilingual psychological evaluations, district consultation, and school psychology services in Massachusetts and Rhode Island, including Greater Boston, Worcester County, the Blackstone Valley, and Providence County — response within a few business days.`,
    keywords: [
      "contact school psychologist Massachusetts",
      "contact school psychologist Rhode Island",
      "bilingual evaluator for schools",
      "district psychology consultation request",
      "school psychology services near Providence",
      "school psychology services near Worcester",
    ],
    alternates: page("/contact"),
    openGraph: {
      title: "Contact Entrusted School Psychology",
      description: `Schedule a consultation or send a district inquiry for MA & RI.`,
      url: "/contact",
    },
  },
  "/thank-you": {
    title: "Thank You",
    robots: { index: false, follow: false },
    alternates: page("/thank-you"),
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "How Entrusted School Psychology Services, LLC collects and uses contact form information for district inquiries.",
    alternates: page("/privacy"),
  },
};
