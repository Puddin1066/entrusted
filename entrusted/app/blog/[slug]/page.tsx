import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/content/blog";
import { site } from "@/content/site";
import { BlogPostJsonLd } from "@/components/seo/blog-post-json-ld";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostJsonLd post={post} />
      <article className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm text-stone-500">
            <Link href="/blog" className="font-medium text-entrusted-navy hover:underline">
              Insights
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-entrusted-navy md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-stone-600">By {post.author}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-stone-200 bg-entrusted-sand/50 px-3 py-1 text-xs text-stone-700"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-stone-700">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog">
              <Button type="button" variant="secondary">
                ← All insights
              </Button>
            </Link>
            <Link href="/contact">
              <Button type="button">Contact {site.name}</Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
