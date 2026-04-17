import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-entrusted-navy/40 focus:outline-none focus:ring-2 focus:ring-entrusted-navy/15",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
