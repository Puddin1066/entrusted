import { cn } from "@/lib/cn";

type Props = {
  headline: string;
  bullets: string[];
  className?: string;
};

export function TrustStrip({ headline, bullets, className }: Props) {
  return (
    <section className={cn("border-b border-stone-200 bg-white py-12", className)}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="mx-auto max-w-[820px] text-center font-serif text-xl font-medium text-entrusted-navy md:text-2xl">
          {headline}
        </p>
        <ul className="mx-auto mt-8 grid max-w-[900px] gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-lg border border-stone-100 bg-entrusted-sand/40 px-4 py-3 text-sm text-stone-700"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-entrusted-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
