"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { EntrustedLogo } from "@/components/brand/entrusted-logo";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-entrusted-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex max-w-[min(100%,220px)] shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <EntrustedLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-entrusted-sand/80 hover:text-entrusted-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2">
            <Button type="button" className="shadow-sm">
              {site.ctaPrimary}
            </Button>
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-stone-300 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1">
            <span
              className={cn(
                "h-0.5 bg-entrusted-navy transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span className={cn("h-0.5 bg-entrusted-navy", open && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 bg-entrusted-navy transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-stone-200 bg-entrusted-cream lg:hidden",
          !open && "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-entrusted-sand"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2" onClick={() => setOpen(false)}>
            <Button type="button" className="w-full">
              {site.ctaPrimary}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
