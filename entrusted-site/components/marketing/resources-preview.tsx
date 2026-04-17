import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  copy: string;
  cta: string;
};

export function ResourcesPreview({ title, copy, cta }: Props) {
  return (
    <SectionShell title={title}>
      <div className="mx-auto max-w-[720px] text-center">
        <p className="text-lg leading-relaxed text-stone-600">{copy}</p>
        <Link href="/resources" className="mt-8 inline-block">
          <Button type="button" variant="secondary" className="px-8">
            {cta}
          </Button>
        </Link>
      </div>
    </SectionShell>
  );
}
