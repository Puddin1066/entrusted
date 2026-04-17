import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  microcopy: string;
  className?: string;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  badges,
  primaryCta,
  secondaryCta,
  microcopy,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "border-b border-stone-200 bg-gradient-to-b from-entrusted-cream to-entrusted-sand/40",
        className,
      )}
    >
      {/* Brand banner (LinkedIn / marketing asset) — full width */}
      <div className="relative w-full overflow-hidden bg-entrusted-navy">
        <Image
          src="/images/entrusted-hero-banner.png"
          alt="Entrusted School Psychology Services — bilingual, trauma-informed, data-driven"
          width={1024}
          height={255}
          className="h-auto w-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-entrusted-accent">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-entrusted-navy md:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">{subheadline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact">
              <Button type="button" className="min-w-[200px] px-6 py-3 shadow-md">
                {primaryCta}
              </Button>
            </Link>
            <Link href="/vendor-packet">
              <Button type="button" variant="secondary" className="min-w-[200px] px-6 py-3">
                {secondaryCta}
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-stone-500">{microcopy}</p>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-[7/8] overflow-hidden rounded-2xl border border-stone-200/80 shadow-lg">
            <Image
              src="/images/cliff-headshot.jpg"
              alt="Cliff Pereira, bilingual school psychologist"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
