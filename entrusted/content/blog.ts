import { site } from "./site";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  tags: string[];
  /** Paragraphs (plain text) */
  body: string[];
};

export const blogIntro = {
  title: "Insights",
  subtitle:
    "Short reflections on evaluation practice, multilingual learners, and supporting district teams—by Cliff Pereira.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fba-multilingual-learner-one-lens",
    title: "When FBA and evaluation meet: why multilingual learners need more than one lens",
    excerpt:
      "Behavior, learning, language, and mental health can intertwine. Here’s how combining an FBA with a psychoeducational evaluation—and interpreting data through a multilingual lens—changes what teams see.",
    publishedAt: "2026-04-01",
    author: site.principal,
    tags: [
      "Functional behavioral assessment (FBA)",
      "Psychoeducational evaluation",
      "Multilingual learners",
      "School psychology",
    ],
    body: [
      "I recently worked with a student where both an FBA and a psychoeducational evaluation were needed to fully understand what was going on.",
      "At first, the concerns were primarily behavioral. The student was struggling in the classroom, and the behaviors were becoming more frequent.",
      "As we gathered more information, it became clear this was a more complex situation involving behavior, learning, language, and mental health. The student was also a multilingual learner still developing English proficiency, which added another important layer to how the data needed to be interpreted.",
      "The FBA helped identify patterns and function, while the evaluation provided insight into how the student was processing information across languages.",
      "When you look at behavior, learning, and language together, the interpretation can shift in important ways.",
      "This is why it’s so important not to evaluate multilingual learners through a single lens.",
      "Getting that right matters.",
    ],
  },
  {
    slug: "referral-stage-right-questions-multilingual-learners",
    title: "The referral stage: why slowing down to ask the right questions changes everything",
    excerpt:
      "Referral is one of the most important—and often hardest—parts of the evaluation process. For multilingual learners, getting clear on learning, language, instruction, and behavior early can change the whole trajectory.",
    publishedAt: "2026-04-18",
    author: site.principal,
    tags: [
      "Referral",
      "Evaluation process",
      "Multilingual learners",
      "School psychology",
      "Intervention planning",
    ],
    body: [
      "One of the most important parts of the evaluation process is the referral stage.",
      "It’s also where teams often face the most challenges.",
      "At that point, teams are trying to make sense of what they’re seeing. Is it a learning issue, a language difference, a response to instruction, or a behavioral need?",
      "For multilingual learners in particular, those distinctions matter.",
      "Taking the time to slow down and ask the right questions early can change the entire trajectory of the process.",
      "In my work, I often support teams in thinking through these questions before moving forward with evaluation.",
      "It leads to stronger interventions, clearer data, and more accurate decisions.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
