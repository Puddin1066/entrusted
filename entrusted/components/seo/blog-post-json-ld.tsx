import { site } from "@/content/site";
import type { BlogPost } from "@/content/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://entrustedschoolpsychology.com";

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: site.fullName,
      url: siteUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
