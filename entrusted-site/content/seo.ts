import type { Metadata } from "next";
import { site } from "./site";

const baseTitle =
  "Entrusted School Psychology Services, LLC | Bilingual Evaluations for MA & RI Districts";

const defaultOg = "/opengraph-image";

/** Natural-language phrases used in titles/descriptions (not a keyword-stuffing list). */
const industryTerms = {
  geo: "Massachusetts and Rhode Island (MA & RI) school districts",
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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://entrustedschoolpsychology.com",
  ),
  title: {
    default: baseTitle,
    template: `%s | ${site.fullName}`,
  },
  description: `Bilingual school psychologist for ${industryTerms.geo}. ${industryTerms.evalTypes}. ${industryTerms.compliance}. ${industryTerms.behavior}. Cliff Pereira.`,
  applicationName: site.fullName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: baseTitle,
    description: `Bilingual school psychology for MA & RI districts: psychoeducational evaluation, MLL consultation, culturally responsive assessment, IEP support.`,
    locale: "en_US",
    type: "website",
    siteName: site.fullName,
    images: [{ url: defaultOg, width: 1200, height: 630, alt: site.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: `Bilingual school psychology evaluations & district consultation — MA & RI. Multilingual learner assessment, FBA/BIP, reevaluations.`,
  },
};

export const pageSeo: Record<string, Metadata> = {
  "/": {
    title: {
      absolute: baseTitle,
    },
    description: `Hire a bilingual school psychologist for ${industryTerms.geo}. ${industryTerms.evalTypes}. Short-term coverage for ${industryTerms.compliance}. ${industryTerms.behavior}.`,
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
    ],
    alternates: page("/"),
    openGraph: {
      title: baseTitle,
      description: `District-focused bilingual school psychology in MA & RI — evaluations, ML/EL consultation, reporting, and team support.`,
      url: "/",
    },
  },
  "/about": {
    title: "About Cliff Pereira | Bilingual School Psychologist (MA & RI)",
    description: `Meet Cliff Pereira — founder of Entrusted School Psychology Services, LLC, bilingual school psychologist (EN–ES–PT), Rhode Island College graduate, based in Blackstone, MA. MLL-informed assessment and behavior consultation for MA & RI districts.`,
    keywords: [
      "Cliff Pereira school psychologist",
      "bilingual school psychologist MA",
      "bilingual school psychologist RI",
      "culturally responsive assessment",
      "multilingual learner school psychology",
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
    description: `District services: bilingual psychoeducational evaluations, multilingual learner (EL/MLL) consultation, FBA and BIP support, triennials and reevaluations, records review, and IEP meeting participation in Massachusetts and Rhode Island.`,
    keywords: [
      "psychoeducational evaluation services",
      "multilingual learner psychological evaluation",
      "FBA BIP school psychologist",
      "school psychology triennial reevaluation",
      "behavioral assessment school district",
      "special education psychology services MA RI",
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
    description: `Practice reflections from Cliff Pereira: multilingual learner assessment, FBA and psychoeducational evaluation, and district-facing school psychology in Massachusetts and Rhode Island.`,
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
    description: `Resources for directors of special education and district evaluation teams: bilingual assessment, culturally responsive evaluation, backlog coverage, and vendor onboarding for Massachusetts and Rhode Island schools.`,
    keywords: [
      "special education director resources",
      "district evaluation team support",
      "bilingual evaluation vendor",
      "school psychology vendor packet MA RI",
      "multilingual learner evaluation guidance",
    ],
    alternates: page("/resources"),
    openGraph: {
      title: "Director Resources | Bilingual School Psychology",
      description: `When districts need bilingual evaluators, overflow capacity, or ML/EL expertise — practical guidance for leaders.`,
      url: "/resources",
    },
  },
  "/contact": {
    title: "Contact | Bilingual School Psychology Services (MA & RI)",
    description: `Contact Entrusted for bilingual psychological evaluations, district consultation, and school psychology services in Massachusetts and Rhode Island — response within a few business days.`,
    keywords: [
      "contact school psychologist Massachusetts",
      "contact school psychologist Rhode Island",
      "bilingual evaluator for schools",
      "district psychology consultation request",
    ],
    alternates: page("/contact"),
    openGraph: {
      title: "Contact Entrusted School Psychology",
      description: `Schedule a consultation or send a district inquiry for MA & RI.`,
      url: "/contact",
    },
  },
  "/vendor-packet": {
    title: "Vendor Packet | District Onboarding (PDF)",
    description: `Download the Entrusted vendor packet: service overview, bilingual school psychology scope, and district onboarding information for Massachusetts and Rhode Island programs.`,
    keywords: [
      "school psychology vendor packet",
      "district vendor onboarding",
      "special education contractor information",
    ],
    alternates: page("/vendor-packet"),
    openGraph: {
      title: "Vendor Packet | Entrusted",
      description: `PDF overview for district procurement and special education leadership.`,
      url: "/vendor-packet",
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
