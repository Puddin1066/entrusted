import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
  const [latest] = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  if (!latest) return null;

  return (
    <SectionShell title="Insights" subtitle="Brief notes on evaluation practice and multilingual learners.">
      <div className="mx-auto max-w-[720px]">
        <Card>
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
            {new Date(latest.publishedAt + "T12:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold text-entrusted-navy">
            <Link href={`/blog/${latest.slug}`} className="hover:underline">
              {latest.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">{latest.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/blog/${latest.slug}`}>
              <Button type="button" variant="secondary" className="px-4 py-2 text-sm">
                Read article
              </Button>
            </Link>
            <Link href="/blog">
              <Button type="button" variant="ghost" className="px-4 py-2 text-sm">
                View all insights
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}
