import { SectionShell } from "@/components/layout/section-shell";

export type TestimonialItem = {
  quote: string;
  attribution: string;
};

function quoteParagraphs(quote: string) {
  return quote
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

type Props = {
  title: string;
  sectionId: string;
  emptyMessage: string;
  items: TestimonialItem[];
};

export function TestimonialsSection({ title, sectionId, emptyMessage, items }: Props) {
  return (
    <SectionShell
      title={title}
      variant="muted"
      id={sectionId}
      className="scroll-mt-28"
    >
      {items.length === 0 ? (
        <p className="mx-auto max-w-[720px] text-center text-lg leading-relaxed text-stone-600">
          {emptyMessage}
        </p>
      ) : (
        <ul className="mx-auto grid max-w-[900px] gap-10">
          {items.map((t, i) => {
            const paras = quoteParagraphs(t.quote);
            const last = paras.length - 1;
            return (
              <li key={i}>
                <blockquote className="border-l-4 border-entrusted-accent pl-6">
                  {paras.map((para, j) => (
                    <p
                      key={j}
                      className="font-serif text-xl leading-relaxed text-entrusted-navy md:text-2xl [&:not(:first-child)]:mt-4"
                    >
                      {j === 0 ? <>&ldquo;</> : null}
                      {para}
                      {j === last ? <>&rdquo;</> : null}
                    </p>
                  ))}
                  <footer className="mt-4 text-sm font-medium text-stone-600">— {t.attribution}</footer>
                </blockquote>
              </li>
            );
          })}
        </ul>
      )}
    </SectionShell>
  );
}
