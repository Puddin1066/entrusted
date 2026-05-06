import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { regionPages } from "@/content/regions";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://entrustedsps.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/resources",
    "/blog",
    "/contact",
    "/privacy",
  ];
  const staticEntries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const regionEntries: MetadataRoute.Sitemap = regionPages.map((region) => ({
    url: `${base}/service-areas/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...regionEntries, ...blogEntries];
}
