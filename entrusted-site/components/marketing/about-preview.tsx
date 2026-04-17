import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  paragraphs: string[];
  cta: string;
};

export function AboutPreview({ title, paragraphs, cta }: Props) {
  return (
    <SectionShell title={title}>
      <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full border border-stone-200 shadow-md">
          <Image
            src="/images/cliff-headshot.jpg"
            alt="Cliff Pereira, bilingual school psychologist"
            fill
            className="object-cover object-top"
            sizes="280px"
          />
        </div>
        <div>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-lg leading-relaxed text-stone-600 first:mt-0">
              {p}
            </p>
          ))}
          <Link href="/about" className="mt-8 inline-block">
            <Button type="button" variant="secondary">
              {cta}
            </Button>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
