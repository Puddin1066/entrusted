import Link from "next/link";
import { blogIntro, blogPosts } from "@/content/blog";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/blog"];

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <PageHero headline={blogIntro.title} subheadline={blogIntro.subtitle} />
      <div className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-[820px] space-y-8 px-4 sm:px-6">
          {sorted.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <Card className="transition-shadow group-hover:shadow-md">
                  <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                    {formatDate(post.publishedAt)}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-entrusted-navy group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                  <p className="mt-4 text-sm font-medium text-entrusted-navy">Read more →</p>
                </Card>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
