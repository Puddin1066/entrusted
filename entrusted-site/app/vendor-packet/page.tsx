import Link from "next/link";
import { pageSeo } from "@/content/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo["/vendor-packet"];

export default function VendorPacketPage() {
  return (
    <>
      <PageHero
        headline="Download Vendor Packet"
        subheadline="Onboarding and service overview for district teams."
      />
      <div className="border-b border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-[720px] px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-stone-600">
            For district teams seeking onboarding and service overview materials, the vendor packet includes key
            practice and contact information.
          </p>
          <a
            href="/docs/entrusted-vendor-packet.pdf"
            download
            className="mt-10 inline-block"
          >
            <Button type="button" className="px-10 py-3 text-base">
              Download PDF
            </Button>
          </a>
          <Link href="/contact" className="mt-10 block text-sm font-medium text-entrusted-navy underline">
            Questions? Contact Entrusted
          </Link>
        </div>
      </div>
    </>
  );
}
