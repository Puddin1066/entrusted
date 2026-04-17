import Link from "next/link";
import { EntrustedLogo } from "@/components/brand/entrusted-logo";
import { EntrustedMark } from "@/components/brand/entrusted-mark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-entrusted-navy text-stone-200">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <EntrustedLogo variant="footer" className="opacity-95" />
            <p className="mt-4 font-serif text-lg font-semibold text-white">{site.fullName}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-300">
              {site.footerBlurb}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-stone-400">Coverage: {site.states}</span>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy policy
            </Link>
          </div>
        </div>
        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-stone-500 md:justify-start md:text-left">
          <EntrustedMark className="h-5 w-5 shrink-0 text-entrusted-gold" />
          <span>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
