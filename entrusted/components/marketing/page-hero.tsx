import { cn } from "@/lib/cn";

type Props = {
  headline: string;
  subheadline?: string;
  className?: string;
};

export function PageHero({ headline, subheadline, className }: Props) {
  return (
    <div
      className={cn(
        "border-b border-stone-200 bg-gradient-to-b from-entrusted-cream to-entrusted-sand/30",
        className,
      )}
    >
      <div className="mx-auto max-w-[820px] px-4 py-14 text-center sm:px-6 md:py-16">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-entrusted-navy md:text-5xl">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{subheadline}</p>
        ) : null}
      </div>
    </div>
  );
}
