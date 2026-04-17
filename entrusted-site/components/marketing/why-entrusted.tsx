import { SectionShell } from "@/components/layout/section-shell";

type Props = {
  title: string;
  lead: string;
  bullets: string[];
  closing: string;
};

export function WhyEntrusted({ title, lead, bullets, closing }: Props) {
  return (
    <SectionShell title={title} variant="muted">
      <div className="mx-auto max-w-[820px]">
        <p className="text-lg leading-relaxed text-stone-600">{lead}</p>
        <ul className="mt-8 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-stone-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-entrusted-navy" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg leading-relaxed text-stone-700">{closing}</p>
      </div>
    </SectionShell>
  );
}
