import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        entrusted: {
          /** Brand navy (~from logo background) */
          navy: "#051224",
          sand: "#ebe4d6",
          /** Page background (~warm off-white from brand) */
          cream: "#f7f4ec",
          /** Gold + warm cream from logo typography */
          gold: "#d4b96a",
          warm: "#f0ead6",
          accent: "#d4b96a",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
