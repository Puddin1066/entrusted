import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-stone-200/80 bg-white/90 p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
