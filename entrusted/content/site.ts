export const site = {
  name: "Entrusted",
  tagline: "School Psychology Services",
  /** Legal name (matches public LinkedIn / business entity). */
  fullName: "Entrusted School Psychology Services, LLC",
  principal: "Cliff Pereira",
  /** Public LinkedIn headline alignment. */
  principalTitle: "Bilingual School Psychologist (EN–ES–PT)",
  principalPronouns: "He/Him",
  states: "Massachusetts and Rhode Island",
  /** Public LinkedIn profile (professional visibility). */
  linkedinUrl: "https://www.linkedin.com/in/cliff-pereira-4a69723aa/",
  location: {
    city: "Blackstone",
    state: "Massachusetts",
    country: "United States",
  },
  footerBlurb:
    "Supporting Massachusetts and Rhode Island districts with bilingual, culturally responsive school psychology services.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Cliff" },
    { href: "/resources", label: "Director Resources" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ] as const,
  ctaPrimary: "Schedule Consultation",
  contactPlaceholder: {
    email: "hello@entrustedschoolpsychology.com",
    phone: "(000) 000-0000",
    responseTime: "We typically respond within 1–2 business days.",
    serviceArea: "Massachusetts & Rhode Island · Based in Blackstone, MA",
  },
};
