import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

type CardItem = { title: string; body: string };

type Props = {
  title: string;
  cards: CardItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function ServicesGrid({ title, cards, ctaLabel, ctaHref }: Props) {
  return (
    <SectionShell title={title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((c) => (
          <Card key={c.title}>
            <h3 className="font-serif text-xl font-semibold text-entrusted-navy">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{c.body}</p>
          </Card>
        ))}
      </div>
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
