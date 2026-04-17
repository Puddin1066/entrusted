import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "muted" | "navy";
  id?: string;
  className?: string;
};

export function SectionShell({
  title,
  subtitle,
  children,
  variant = "default",
  id,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        variant === "muted" && "bg-entrusted-sand/50",
        variant === "navy" && "bg-entrusted-navy text-white",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mx-auto max-w-[820px] text-center md:text-left">
          <h2
            className={cn(
              "font-serif text-3xl font-semibold tracking-tight md:text-4xl",
              variant === "navy" ? "text-white" : "text-entrusted-navy",
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                "mt-3 text-lg leading-relaxed",
                variant === "navy" ? "text-stone-200" : "text-stone-600",
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
