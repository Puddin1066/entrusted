# PRD: Entrusted School Psychology Services Website
## Cursor Build Specification Using `ixartz/Next-js-Boilerplate` + Vercel

Version: 1.0  
Date: April 16, 2026

---

## 1. Project Summary

Build a premium, static-first service website for **Entrusted School Psychology Services**, with **Cliff Pereira** positioned as the face, authority, and principal provider.

The site should be built on top of the GitHub starter **`ixartz/Next-js-Boilerplate`**, then adapted into a clean Vercel-hosted website focused on:

- district trust
- bilingual school psychology services
- clear service packaging
- contact conversion
- vendor packet download

This is **not** a SaaS product, client portal, or dashboard. It is a **trust-centered expert-practice website**.

The site’s purpose is to answer three questions quickly:

1. Who is Cliff Pereira?
2. What services does he provide to districts?
3. How can a district contact and onboard him quickly?

The recommended foundation is the GitHub repo **`ixartz/Next-js-Boilerplate`**, which currently includes Next.js, TypeScript, Tailwind CSS, and extensive DX tooling. It also includes additional tools such as Drizzle ORM, testing, Storybook, and Sentry support, which are not needed for this MVP and should be treated as optional or excluded from the deployed build.

Vercel is the deployment target because it is the native hosting platform for Next.js and supports straightforward deployments for App Router applications.

---

## 2. Starter Repository Decision

### Selected Starter

GitHub repo: **`ixartz/Next-js-Boilerplate`**  
Source: `https://github.com/ixartz/Next-js-Boilerplate`

### Why this starter

Use this repo because it provides a popular, maintained Next.js foundation with:

- Next.js App Router support
- TypeScript
- Tailwind CSS
- ESLint and Prettier
- modern project structure
- strong developer experience for Cursor-assisted editing

The repository currently advertises Next.js 16+, Tailwind CSS 4, TypeScript, and a wide set of optional tooling, including Drizzle ORM, Storybook, Vitest, Playwright, and Sentry integrations. The MVP build should **not** adopt the database, monitoring, or demo-heavy features unless explicitly needed later.

### Keep from starter

Keep:

- App Router structure
- TypeScript setup
- Tailwind config
- linting and formatting
- utility functions
- metadata foundation if useful
- general file organization

### Ignore or remove for MVP

Do not build around:

- Drizzle ORM or any database layer
- Storybook
- Playwright end-to-end tests for MVP
- Vitest test scaffolding unless already trivial to preserve
- Sentry integration
- advanced CI that slows early iteration
- any demo pages or placeholder product features

### Build philosophy

The starter is a **foundation**, not the product.  
Cursor should use only the portions that help produce a polished, maintainable service site.

---

## 3. Deployment and Platform Requirements

### Hosting Platform

Deploy on **Vercel**.

Vercel supports direct deployment of Next.js projects from Git and is the native platform for Next.js applications.

### Deployment flow

- GitHub repo hosts source code
- Vercel project connected to GitHub repo
- `main` branch deploys to production
- preview deployments for feature branches are optional

### Contact form backend

Use a **Next.js Route Handler** in the `app` directory.

Route Handlers are the App Router mechanism for custom request handling.

### Email delivery

Use **Resend** for form email notifications.

Resend documents sending email via a Next.js Route Handler under `app/api/.../route.ts`, which matches the intended implementation here.

---

## 4. Product Positioning

### Brand

**Entrusted School Psychology Services**

### Face of the brand

**Cliff Pereira** must be the visible and immediate focal point.

The company name supports trust and professionalism, but the conversion engine is **Cliff himself**.

### Primary audience

The website is built for:

- Directors of Special Education
- district evaluation teams
- school administrators
- charter or out-of-district programs
- teams needing bilingual or overflow psychological evaluation support

### Market scope

The site should strongly signal service area relevance to:

- Massachusetts
- Rhode Island

### Core positioning statement

Entrusted provides **bilingual, culturally responsive school psychology evaluations and consultation** for district teams that need practical, reliable support.

---

## 5. Product Goals

### Primary goals

1. Present Cliff as a credible bilingual school psychologist.
2. Clarify the district use cases for his services.
3. Generate consultation inquiries.
4. Support vendor packet download.
5. Make the site easy to maintain on Vercel.

### Secondary goals

1. Establish search visibility for high-intent niche terms.
2. Provide a strong foundation for future resources or blog content.
3. Create a site structure that a Cursor agent can extend without confusion.

---

## 6. Non-Goals

This MVP should **not** include:

- login or authentication
- district portal
- CRM backend
- billing workflows
- custom admin dashboard
- CMS dependency unless later required
- heavy animations
- patient/family workflow tools

This is a **service website**, not a software application.

---

## 7. Technical Stack

### Core stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** hosting
- **Resend** for contact form email
- static assets in `/public`

### Optional utility layer

The Cursor agent may use a few lightweight UI primitives or internal components, but should avoid importing an oversized UI abstraction unless needed.

### Database

No database in MVP.

### CMS

No CMS in MVP.

### Rendering strategy

Use static rendering for all standard pages.

Dynamic behavior should be limited to:

- contact form submit
- thank-you redirect or confirmation state

---

## 8. Repository Structure

Use this target structure after adapting the ixartz starter:

```txt
entrusted-site/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ resources/page.tsx
│  ├─ contact/page.tsx
│  ├─ vendor-packet/page.tsx
│  ├─ thank-you/page.tsx
│  ├─ privacy/page.tsx
│  └─ api/
│     └─ contact/
│        └─ route.ts
├─ components/
│  ├─ layout/
│  │  ├─ site-header.tsx
│  │  ├─ site-footer.tsx
│  │  └─ section-shell.tsx
│  ├─ marketing/
│  │  ├─ hero.tsx
│  │  ├─ trust-strip.tsx
│  │  ├─ audience-section.tsx
│  │  ├─ services-grid.tsx
│  │  ├─ why-entrusted.tsx
│  │  ├─ about-preview.tsx
│  │  ├─ process-steps.tsx
│  │  ├─ faq.tsx
│  │  ├─ cta-band.tsx
│  │  └─ vendor-packet-card.tsx
│  ├─ forms/
│  │  └─ contact-form.tsx
│  └─ ui/
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ input.tsx
│     ├─ textarea.tsx
│     ├─ select.tsx
│     └─ badge.tsx
├─ content/
│  ├─ site.ts
│  ├─ home.ts
│  ├─ services.ts
│  ├─ resources.ts
│  ├─ faq.ts
│  └─ seo.ts
├─ lib/
│  ├─ cn.ts
│  ├─ metadata.ts
│  └─ email.ts
├─ public/
│  ├─ images/
│  │  ├─ cliff-hero.jpg
│  │  ├─ cliff-headshot.jpg
│  │  └─ og/
│  │     └─ entrusted-og.jpg
│  ├─ docs/
│  │  └─ entrusted-vendor-packet.pdf
│  └─ favicon.ico
├─ styles/
│  └─ globals.css
├─ next.config.ts
├─ package.json
└─ README.md
```

---

## 9. Information Architecture

Build these routes:

- `/` → Home
- `/about` → About Cliff
- `/services` → Services
- `/resources` → Director Resources
- `/contact` → Contact
- `/vendor-packet` → Vendor Packet page
- `/thank-you` → Thank-you page
- `/privacy` → Privacy policy

Optional later:

- `/faq`
- `/areas-served`
- `/blog`

---

## 10. Brand and UX Direction

### Design goals

The visual tone should be:

- calm
- polished
- credible
- locally grounded
- district-appropriate
- premium without being flashy

### Visual behavior

Avoid:

- loud gradients
- app-dashboard chrome
- startup-style hype sections
- unnecessary motion
- illustration-heavy SaaS motifs

### Color palette

Recommended palette:

- deep navy or slate for headings and CTAs
- warm off-white / sand backgrounds
- dark gray body text
- muted blue-gray cards
- subtle gold or warm accent used sparingly

### Typography

Use clear, modern, readable type.

- Headings: professional, authoritative sans-serif or restrained serif/sans pairing
- Body: highly readable sans-serif
- Avoid playful or overly trendy fonts

### Layout rules

- maximum main width approx. 1100–1200px
- readable content columns approx. 720–820px
- generous vertical spacing
- Cliff image above the fold on homepage
- desktop trust-first layout, mobile clean and functional

---

## 11. Global Components

Build these reusable components.

### 11.1 `SiteHeader`

Purpose: main navigation header

Content:

- wordmark: `Entrusted`
- optional descriptor: `School Psychology Services`
- nav links:
  - Home
  - Services
  - About Cliff
  - Director Resources
  - Contact
- CTA button: `Schedule Consultation`

Behavior:

- sticky or semi-sticky on scroll
- mobile menu on small screens
- CTA visible on desktop

---

### 11.2 `Hero`

Purpose: primary credibility and conversion block

Props:

- eyebrow
- headline
- subheadline
- badges
- primary CTA
- secondary CTA
- image

Requirements:

- Cliff photo visible
- district-oriented headline
- not generic therapy branding

---

### 11.3 `SectionShell`

Purpose: standardize spacing and section framing

Props:

- title
- subtitle
- children
- background variant

---

### 11.4 `TrustStrip`

Purpose: fast credibility layer beneath hero

Example bullets:

- multilingual evaluation support
- culturally responsive assessment
- Massachusetts and Rhode Island
- district consultation

Do not invent metrics.

---

### 11.5 `ServiceCard`

Purpose: display major offerings in card format

Fields:

- title
- description
- optional bullets

---

### 11.6 `ProcessSteps`

Purpose: make district workflow feel easy and predictable

Steps:

1. Inquiry
2. Consultation
3. Records Review
4. Assessment
5. Reporting & Meeting Support

---

### 11.7 `ContactForm`

Fields:

- Name
- Title / Role
- District / Organization
- Email
- Phone (optional)
- Service Need
- Message

Service need options:

- Bilingual psychoeducational evaluation
- Multilingual learner consultation
- Behavioral assessment / FBA-BIP support
- Reevaluation support
- Short-term district coverage
- General inquiry

Behavior:

- validate required inputs
- submit to `/api/contact`
- show inline success or redirect to `/thank-you`

---

### 11.8 `CTABand`

Purpose: repeated low-friction conversion section

Default copy:

**Need bilingual psychological evaluation support?**

If your team needs culturally responsive assessment, multilingual learner expertise, or short-term evaluation coverage, Entrusted can help.

Buttons:

- Schedule a Consultation
- Download Vendor Packet

---

### 11.9 `Footer`

Include:

- business name
- short descriptor
- state coverage
- contact link
- privacy policy

Footer copy:

Entrusted School Psychology Services  
Supporting Massachusetts and Rhode Island districts with bilingual, culturally responsive school psychology services.

---

## 12. Homepage Specification (`/`)

### Purpose

Convert district visitors into:

- consultation inquiries
- vendor packet downloads
- services page visits

### Section order

1. SiteHeader
2. Hero
3. TrustStrip
4. Who I Support
5. Services Overview
6. Why Entrusted
7. About Cliff Preview
8. Process
9. Director Resources Preview
10. CTA Band
11. Footer

---

### Homepage Copy

#### Hero

**Eyebrow**  
Bilingual School Psychology Services

**Headline**  
**Bilingual School Psychology Evaluations for Massachusetts and Rhode Island Districts**

**Subheadline**  
Supporting school districts with culturally responsive evaluations, multilingual learner assessment, behavioral consultation, and short-term evaluation support.

**Badges**

- Bilingual
- Trauma-Informed
- Data-Driven
- EN / ES / PT

**Primary CTA**  
Schedule a Consultation

**Secondary CTA**  
Download Vendor Packet

**Micro-copy**  
Available for district consultation, bilingual psychoeducational evaluations, and overflow support.

---

#### TrustStrip

**Headline**  
Trusted support for district teams navigating multilingual and complex evaluations.

**Bullets**

- Bilingual psychoeducational evaluations
- Culturally responsive assessment practices
- Clear, actionable reporting
- Massachusetts and Rhode Island service area

---

#### Who I Support

**Section title**  
Who I Support

**Copy**  
Entrusted works with educational teams that need experienced, culturally responsive psychological support on reliable timelines.

**Audience bullets**

- Public school districts
- Charter schools
- Out-of-district programs
- Special education teams with evaluation backlogs
- Districts seeking bilingual assessment support
- Teams navigating complex multilingual learner cases

**Closing line**  
When timelines tighten or case complexity increases, districts need a provider who can step in quickly and communicate clearly.

---

#### Services Overview

**Section title**  
Services

**Card 1**  
**Title:** Bilingual Psychoeducational Evaluations  
**Body:** Comprehensive evaluations conducted with attention to linguistic, cultural, and educational context.

**Card 2**  
**Title:** Multilingual Learner Consultation  
**Body:** Support for teams distinguishing language acquisition, cultural difference, and disability-related concerns.

**Card 3**  
**Title:** Behavioral Assessment & FBA/BIP Support  
**Body:** Consultation, assessment, and behavioral support for students with complex school-based needs.

**Card 4**  
**Title:** Reevaluations & Meeting Participation  
**Body:** Reevaluation support, records review, reporting, and participation in IEP or related team meetings as requested.

**Section CTA**  
View All Services

---

#### Why Entrusted

**Section title**  
Why Entrusted

**Copy**  
District leaders do not just need reports. They need evaluations that are accurate, culturally responsive, and useful in real decision-making.

**Bullets**

- Bilingual expertise across English, Spanish, and Portuguese
- Culturally responsive evaluation practices
- Strong report writing and synthesis
- Ability to help teams distinguish **language difference from disability**
- Experience with complex cases and multidisciplinary coordination
- Reliable support for short-term district needs

**Closing line**  
Entrusted is designed to help teams move forward with confidence, clarity, and practical next steps.

---

#### About Cliff Preview

**Section title**  
About Cliff Pereira

**Copy**  
Cliff Pereira is a bilingual school psychologist serving districts across Massachusetts and Rhode Island. His work focuses on culturally responsive psychological evaluation, multilingual learner assessment, behavioral consultation, and clear communication with district teams.

He brings a practical, collaborative approach to evaluation work—helping schools make sound decisions while supporting students and families with respect and accuracy.

**CTA**  
Learn More About Cliff

---

#### Process

**Section title**  
Process

**Intro copy**  
Working together is straightforward and designed to fit district workflows.

**Steps**

1. **Inquiry** — Initial outreach regarding evaluation or consultation needs
2. **Consultation** — Clarify case type, timeline, and service needs
3. **Records Review** — Review relevant educational and psychological records
4. **Assessment** — Testing, interviews, and observation as appropriate
5. **Reporting & Meeting Support** — Written report and team participation if requested

---

#### Director Resources Preview

**Section title**  
Resources for District Teams

**Copy**  
See practical information for directors of special education and evaluation teams seeking bilingual and culturally responsive support.

**CTA**  
View Director Resources

---

#### CTA Band

**Headline**  
Need bilingual psychological evaluation support?

**Copy**  
If your team needs culturally responsive assessment, multilingual learner expertise, or short-term evaluation coverage, Entrusted can help.

**Buttons**

- Schedule a Consultation
- Contact Entrusted

---

## 13. About Page Specification (`/about`)

### Hero

**Headline**  
About Cliff Pereira

**Subheadline**  
Bilingual school psychologist supporting Massachusetts and Rhode Island districts with culturally responsive evaluation and consultation.

### Main copy

Cliff Pereira is a bilingual school psychologist whose work centers on psychological evaluation, multilingual learner assessment, behavioral consultation, and collaboration with school-based teams.

He supports districts that need evaluation expertise grounded in both technical rigor and cultural responsiveness. His approach emphasizes clear communication, careful records review, practical recommendations, and respect for the linguistic and educational context of each student.

Cliff’s work is especially valuable in cases where teams need thoughtful differentiation between language acquisition, cultural factors, and disability-related concerns.

### Credentials section

Use placeholders until confirmed:

- Licensure
- Degrees
- Certifications
- Languages spoken
- Settings served

### Practice philosophy

**Heading**  
Approach

**Copy**  
Entrusted is built around the idea that high-quality evaluation should be both clinically sound and genuinely useful to school teams. That means clear reports, strong collaboration, and assessment practices that reflect the realities of multilingual and diverse student populations.

---

## 14. Services Page Specification (`/services`)

### Hero

**Headline**  
Services

**Subheadline**  
Evaluation and consultation services designed for district teams, multilingual learners, and complex school-based cases.

### Service section 1

**Title**  
Bilingual Psychoeducational Evaluations

**Copy**  
Comprehensive psychoeducational evaluations conducted with close attention to language, culture, educational history, and referral context.

**Includes**

- Records review
- Cognitive and academic assessment
- Social-emotional and behavioral considerations
- Interpretation in multilingual contexts
- Clear written reporting

### Service section 2

**Title**  
Multilingual Learner Assessment Consultation

**Copy**  
Consultation to help district teams approach multilingual learner cases with greater precision and confidence.

**Includes**

- Language and cultural considerations
- Support distinguishing language acquisition from disability
- Consultation on test selection and interpretation
- Collaboration with multidisciplinary teams

### Service section 3

**Title**  
Behavioral Assessment / FBA-BIP Support

**Copy**  
Assessment and consultation support for students whose learning or school functioning is affected by behavioral or emotional complexity.

### Service section 4

**Title**  
Reevaluations and Team Meeting Support

**Copy**  
Short-term and case-specific support for reevaluations, written reports, and meeting participation.

### Closing CTA

**Headline**  
Looking for district evaluation support?

**Button**  
Contact Entrusted

---

## 15. Director Resources Page Specification (`/resources`)

This is the highest-value conversion page for administrative buyers.

### Hero

**Headline**  
Resources for Special Education Directors and District Evaluation Teams

**Subheadline**  
Practical support for multilingual learner assessment, evaluation backlog needs, and culturally responsive school psychology services.

### Section 1

**Heading**  
When Districts Reach Out

**Copy**  
District teams typically contact Entrusted when:

- evaluation timelines are approaching compliance deadlines
- multilingual cases require more culturally responsive assessment
- internal staffing is stretched
- a reevaluation backlog needs short-term support
- teams need help distinguishing **language difference vs. disability**
- a complex case would benefit from additional consultation

### Section 2

**Heading**  
Common Areas of Support

**Bullets**

- Bilingual psychoeducational evaluations
- Reevaluations and triennials
- Behavioral assessment support
- Multilingual learner consultation
- Records review and report writing
- Meeting participation when requested

### Section 3

**Heading**  
What Entrusted Brings

**Copy**  
Entrusted provides district teams with support that is responsive, culturally informed, and practical to implement in real school settings.

**Bullets**

- bilingual expertise
- clear communication
- actionable written reports
- strong collaboration with district staff
- local service focus in Massachusetts and Rhode Island

### Section 4

**Heading**  
Vendor Packet

**Copy**  
Download a packet with service overview, professional background, and key onboarding information.

**Button**  
Download Vendor Packet

### Section 5

**Heading**  
Need to discuss a district need?

**Button**  
Schedule Consultation

---

## 16. Contact Page Specification (`/contact`)

### Hero

**Headline**  
Contact Entrusted

**Subheadline**  
For bilingual psychological evaluations, consultation, and district support across Massachusetts and Rhode Island.

### Contact info block

Include placeholders for:

- email
- phone
- response time note
- service area

### Form fields

- Name
- Title / Role
- District / Organization
- Email
- Phone
- Service Need
- Message

### Submit button

Send Inquiry

### Success state

Thank you for reaching out. Your message has been received, and Entrusted will respond as soon as possible.

---

## 17. Vendor Packet Page (`/vendor-packet`)

### Heading

Download Vendor Packet

### Body copy

For district teams seeking onboarding and service overview materials, the vendor packet includes key practice and contact information.

### Button

Download PDF

### MVP behavior

Use an ungated static PDF from `/public/docs/entrusted-vendor-packet.pdf`.

Future option: add an email capture form before download.

---

## 18. Thank-You Page (`/thank-you`)

### Heading

Thank You

### Copy

Your inquiry has been submitted. Entrusted will follow up as soon as possible.

### Buttons

- Return Home
- View Services

---

## 19. Privacy Page (`/privacy`)

Keep this simple and professional.

Sections:

- what information is collected through contact forms
- how it is used
- whether it is shared
- contact email for privacy questions

---

## 20. Content Model

Store page copy in structured content files under `/content` wherever practical.

Suggested files:

- `content/site.ts` → nav labels, footer info, brand metadata
- `content/home.ts` → homepage section copy
- `content/services.ts` → service descriptions
- `content/resources.ts` → admin-facing content
- `content/faq.ts` → FAQ items
- `content/seo.ts` → metadata objects per route

This makes future editing easier for Cursor and cleaner than burying all strings directly in page components.

---

## 21. Metadata and SEO Requirements

### Site title format

`Entrusted School Psychology Services | Bilingual Evaluations for MA & RI Districts`

### Key page metadata targets

- Home: bilingual school psychology evaluations Massachusetts Rhode Island
- About: Cliff Pereira bilingual school psychologist
- Services: multilingual learner psychological evaluation services
- Resources: special education director bilingual evaluation support
- Contact: contact bilingual school psychologist Massachusetts Rhode Island

### Structured data

Add JSON-LD for:

- `ProfessionalService`
- `Person`

Use local-business style data only if appropriate for the actual practice setup.

### Open Graph

Create one branded image using:

- Cliff photo
- Entrusted brand name
- short descriptor

---

## 22. Contact Form Implementation Notes

### Route

`app/api/contact/route.ts`

### Requirements

- POST only
- input validation
- sanitize and normalize values
- email notification via Resend
- return JSON success or error

### Suggested environment variables

```env
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

### Suggested payload shape

```ts
type ContactPayload = {
  name: string;
  role?: string;
  organization?: string;
  email: string;
  phone?: string;
  serviceNeed: string;
  message: string;
};
```

---

## 23. Styling Rules for Cursor

### Buttons

- Primary: dark navy filled button
- Secondary: outline or ghost style
- Rounded but not cartoonish

### Cards

- subtle border
- gentle shadow
- rounded corners
- ample internal padding

### Section rhythm

- alternate light backgrounds sparingly
- preserve whitespace
- do not stack too many small elements tightly

### Animation

- minimal fade or slide only
- no parallax
- no large entrance motion

### Images

- use a warm, professional portrait of Cliff
- crop and optimize for hero and bio contexts
- maintain calm, polished presentation

---

## 24. Assets Required

- Cliff headshot for hero and about page
- optional secondary portrait or contextual image
- vendor packet PDF
- favicon
- Open Graph image

---

## 25. Acceptance Criteria

The build is successful when:

1. The site deploys cleanly on Vercel.
2. All required routes render correctly.
3. The contact form sends email via a Route Handler + Resend.
4. Cliff appears visually above the fold on the homepage.
5. The site clearly positions Cliff as the expert provider.
6. The design feels more premium and more local than a generic consultant template.
7. Vendor packet download works.
8. Mobile and desktop views are polished.
9. There is no unnecessary auth/database/dashboard complexity in the deployed MVP.

---

## 26. Build Order for Cursor

1. Clone `ixartz/Next-js-Boilerplate`
2. Remove or ignore non-MVP tooling and demo scaffolding
3. Define final routes and content model
4. Build shared layout and navigation
5. Implement homepage sections
6. Implement About, Services, Resources, Contact, Vendor Packet, and Thank-You pages
7. Add metadata and OG configuration
8. Implement contact form Route Handler with Resend
9. Add vendor packet static asset
10. QA responsiveness, content spacing, and polish
11. Connect to Vercel and deploy

---

## 27. Final Instruction to Cursor Agent

Build this site as a **premium expert-practice website**, not as a startup product landing page.

The repo starter is only there to accelerate setup and keep code quality high. The final output should feel calm, trustworthy, local, and district-ready.

Cliff Pereira must be the central human presence throughout the site.

The website should communicate:

- bilingual expertise
- culturally responsive assessment
- district practicality
- reliable communication
- easy onboarding

That is the work. Everything else is decorative garnish.
