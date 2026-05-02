import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

type CardItem = { title: string; body: string; bullets?: string[] };

type Props = {
  title: string;
  subtitle?: string;
  cards: CardItem[];
  footerNote?: string;
  ctaLabel: string;
  ctaHref: string;
};

export function ServicesGrid({ title, subtitle, cards, footerNote, ctaLabel, ctaHref }: Props) {
  return (
    <SectionShell title={title} subtitle={subtitle}>
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((c) => (
          <Card key={c.title}>
            <h3 className="font-serif text-xl font-semibold text-entrusted-navy">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{c.body}</p>
            {c.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-stone-600">
                {c.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Card>
        ))}
      </div>
      {footerNote ? (
        <p className="mx-auto mt-10 max-w-[720px] text-center text-sm leading-relaxed text-stone-600">
          {footerNote}
        </p>
      ) : null}
      <div className="mt-10 flex justify-center">
        <Link href={ctaHref}>
          <Button type="button" variant="secondary" className="px-8">
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </SectionShell>
  );
}
