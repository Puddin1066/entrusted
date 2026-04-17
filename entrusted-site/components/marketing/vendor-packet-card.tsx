import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  cta: string;
};

export function VendorPacketCard({ title, description, cta }: Props) {
  return (
    <Card className="border-entrusted-navy/10 bg-gradient-to-br from-white to-entrusted-sand/30">
      <h3 className="font-serif text-xl font-semibold text-entrusted-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
      <Link href="/vendor-packet" className="mt-6 inline-block">
        <Button type="button" variant="secondary">
          {cta}
        </Button>
      </Link>
    </Card>
  );
}
