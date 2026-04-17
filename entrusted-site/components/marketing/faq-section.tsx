import { homepageFaq } from "@/content/faq";
import { SectionShell } from "@/components/layout/section-shell";

export function FaqSection() {
  const { sectionTitle, sectionSubtitle, items } = homepageFaq;
  return (
    <SectionShell title={sectionTitle} subtitle={sectionSubtitle} variant="muted" id="faq">
      <div className="mx-auto max-w-[820px] space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none font-medium text-entrusted-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                <span>{item.question}</span>
                <span
                  className="mt-0.5 shrink-0 text-stone-400 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </span>
            </summary>
            <p className="mt-4 border-t border-stone-100 pt-4 text-sm leading-relaxed text-stone-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
