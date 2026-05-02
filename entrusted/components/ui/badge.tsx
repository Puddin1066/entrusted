import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-entrusted-navy/15 bg-entrusted-sand px-3 py-1 text-xs font-medium text-entrusted-navy",
        className,
      )}
      {...props}
    />
  );
}
