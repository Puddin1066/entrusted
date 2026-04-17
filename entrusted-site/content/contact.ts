export const contactPage = {
  hero: {
    headline: "Contact Entrusted",
    subheadline:
      "For bilingual psychological evaluations, consultation, and district support across Massachusetts and Rhode Island.",
  },
  successMessage:
    "Thank you for reaching out. Your message has been received, and Entrusted will respond as soon as possible.",
};

export const serviceNeedOptions = [
  "Bilingual psychoeducational evaluation",
  "Multilingual learner consultation",
  "Behavioral assessment / FBA-BIP support",
  "Reevaluation support",
  "Short-term district coverage",
  "General inquiry",
] as const;

export type ServiceNeedOption = (typeof serviceNeedOptions)[number];
