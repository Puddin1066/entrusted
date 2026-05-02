/**
 * Simplified vector mark derived from the Entrusted brand (circle, child silhouette, supportive arc).
 * Full lockup: `EntrustedLogo` (PNG). Use this mark for favicon-sized or inline accents.
 */
export function EntrustedMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-entrusted-gold"
      />
      <circle cx="32" cy="24" r="7" fill="currentColor" className="text-entrusted-warm" />
      <path
        d="M17 41c5.5-8.5 14-12 15-12s9.5 3.5 15 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-entrusted-warm"
      />
    </svg>
  );
}
