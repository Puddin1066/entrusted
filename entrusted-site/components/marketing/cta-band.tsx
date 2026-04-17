import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  headline: string;
  copy: string;
  primary: string;
  secondary: string;
  primaryHref?: string;
  secondaryHref?: string;
  variant?: "light" | "dark";
};

export function CTABand({
  headline,
  copy,
  primary,
  secondary,
  primaryHref = "/contact",
  secondaryHref = "/contact",
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-entrusted-navy py-16 text-white"
          : "border-y border-stone-200 bg-entrusted-sand/50 py-16"
      }
    >
      <div className="mx-auto max-w-[820px] px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">{headline}</h2>
        <p
          className={
            isDark ? "mt-4 text-lg text-stone-200" : "mt-4 text-lg text-stone-600"
          }
        >
          {copy}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primaryHref}>
            <Button type="button" className={isDark ? "bg-white text-entrusted-navy hover:bg-stone-100" : ""}>
              {primary}
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              type="button"
              variant="secondary"
              className={
                isDark
                  ? "border-white/40 bg-transparent text-white hover:bg-white/10"
                  : ""
              }
            >
              {secondary}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
