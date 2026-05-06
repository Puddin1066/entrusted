export type RegionPage = {
  slug: string;
  name: string;
  heroSubheadline: string;
  overview: string;
  districtNeeds: string[];
  supportAreas: string[];
};

export const regionPages: RegionPage[] = [
  {
    slug: "greater-boston",
    name: "Greater Boston",
    heroSubheadline:
      "Bilingual school psychology support for district teams across Greater Boston communities.",
    overview:
      "Entrusted partners with Greater Boston district teams that need culturally responsive evaluations, multilingual learner assessment support, and practical collaboration during high-demand periods.",
    districtNeeds: [
      "Bilingual psychoeducational evaluations for multilingual learners",
      "Clear differentiation of language difference versus disability",
      "Support during reevaluation and triennial timeline pressure",
      "Reliable consultation with school-based multidisciplinary teams",
    ],
    supportAreas: [
      "Records review and testing aligned to referral questions",
      "MLL/EL-informed interpretation and reporting",
      "Behavioral assessment and FBA/BIP consultation",
      "Meeting participation when requested by district teams",
    ],
  },
  {
    slug: "worcester-county",
    name: "Worcester County",
    heroSubheadline:
      "Regional school psychology services for Worcester County districts and educational programs.",
    overview:
      "Entrusted supports Worcester County teams with bilingual evaluations and consultation that balance compliance timelines with high-quality, culturally informed assessment practices.",
    districtNeeds: [
      "Short-term overflow support for district evaluation backlogs",
      "Bilingual assessment capacity for multilingual student populations",
      "Defensible reports with practical school-based recommendations",
      "Collaboration on complex referrals and intervention planning",
    ],
    supportAreas: [
      "Psychoeducational evaluations and reevaluations",
      "Multilingual learner assessment consultation",
      "Behavioral assessment support for students with complex needs",
      "Consultation before and during team meetings",
    ],
  },
  {
    slug: "providence-area",
    name: "Providence Area",
    heroSubheadline:
      "Bilingual evaluation and consultation support for Providence-area districts and school teams.",
    overview:
      "Entrusted works with Providence-area teams seeking clear, culturally responsive school psychology services that help move cases forward with confidence and consistency.",
    districtNeeds: [
      "Assessment support when staffing is stretched",
      "Culturally and linguistically responsive multilingual learner evaluation",
      "Timely written reports for IEP and eligibility decision-making",
      "Additional capacity for reevaluations and case-specific consultation",
    ],
    supportAreas: [
      "Bilingual psychoeducational evaluation",
      "MLL-informed consultation for special education teams",
      "FBA/BIP and behavior consultation",
      "Case-specific support for district workflow needs",
    ],
  },
];

export function getRegionBySlug(slug: string): RegionPage | undefined {
  return regionPages.find((region) => region.slug === slug);
}
