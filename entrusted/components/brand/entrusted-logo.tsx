import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  /** Header: compact height. Footer: slightly larger on navy. */
  variant?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

export function EntrustedLogo({ variant = "header", className, priority }: Props) {
  return (
    <Image
      src="/images/entrusted-logo.png"
      alt="Entrusted School Psychology Services — bilingual, trauma-informed, data-driven"
      width={1024}
      height={1024}
      priority={priority}
      className={cn(
        "h-10 w-auto sm:h-11",
        variant === "footer" && "h-14 w-auto sm:h-16",
        className,
      )}
      sizes={variant === "header" ? "(max-width: 1024px) 160px, 200px" : "220px"}
    />
  );
}
