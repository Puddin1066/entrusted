import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-entrusted-navy disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-entrusted-navy text-white hover:bg-entrusted-navy/90",
        variant === "secondary" &&
          "border border-entrusted-navy/25 bg-white text-entrusted-navy hover:bg-entrusted-sand/80",
        variant === "ghost" && "text-entrusted-navy hover:bg-entrusted-navy/5",
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
