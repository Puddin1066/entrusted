import { SectionShell } from "@/components/layout/section-shell";

type Step = { title: string; description: string };

type Props = {
  title: string;
  intro: string;
  steps: Step[];
};

export function ProcessSteps({ title, intro, steps }: Props) {
  return (
    <SectionShell title={title} subtitle={intro} variant="muted">
      <ol className="mx-auto grid max-w-[900px] gap-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-4 rounded-xl border border-stone-200/80 bg-white p-5 shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-entrusted-navy text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-entrusted-navy">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
