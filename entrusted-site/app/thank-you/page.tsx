import Link from "next/link";
import { pageSeo } from "@/content/seo";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/thank-you"];

export default function ThankYouPage() {
  return (
    <div className="border-b border-stone-200 bg-entrusted-cream py-24">
      <div className="mx-auto max-w-[560px] px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-semibold text-entrusted-navy">Thank You</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          Your inquiry has been submitted. Entrusted will follow up as soon as possible.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button type="button" variant="secondary" className="min-w-[160px]">
              Return Home
            </Button>
          </Link>
          <Link href="/services">
            <Button type="button" className="min-w-[160px]">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
