import { SectionShell } from "@/components/layout/section-shell";

type Props = {
  title: string;
  lead: string;
  audiences: string[];
  closing: string;
};

export function AudienceSection({ title, lead, audiences, closing }: Props) {
  return (
    <SectionShell title={title} variant="muted">
      <div className="mx-auto max-w-[820px]">
        <p className="text-lg leading-relaxed text-stone-600">{lead}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-lg border border-stone-200/80 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm"
            >
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg leading-relaxed text-stone-700">{closing}</p>
      </div>
    </SectionShell>
  );
}
