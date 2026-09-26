import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core palette — SBSP-inspired ──────────────────────────────────
        paper: "#FFFDF7",          // warm white background
        ink: "#1A1A1A",            // near-black text
        graphite: "#4A4A4A",       // secondary text
        hairline: "#E8E0D0",       // subtle borders

        // Saffron / Kesari — primary brand color
        saffron: {
          DEFAULT: "#E8640A",      // deep saffron
          light:   "#F4892A",      // lighter saffron
          pale:    "#FEF3E8",      // very light saffron bg
          dark:    "#B84E08",      // dark saffron for hover
        },

        // Deep green — secondary brand color
        green: {
          DEFAULT: "#1A6B2F",      // deep political green
          light:   "#2E8B48",
          pale:    "#EAF5ED",
          dark:    "#145224",
        },

        // Gold accent
        gold: {
          DEFAULT: "#D4960A",
          light:   "#E8B52A",
        },

        // Status colors
        verified: "#1A6B2F",       // green = verified
        pending:  "#9A6200",       // amber = pending

        // Legacy aliases (used in existing components)
        maroon: {
          DEFAULT: "#E8640A",      // remapped to saffron
          dark:    "#B84E08",
          light:   "#F4892A",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose:   "68ch",
        content: "1180px",
      },
      backgroundImage: {
        "saffron-gradient": "linear-gradient(135deg, #E8640A 0%, #F4892A 50%, #D4960A 100%)",
        "green-gradient":   "linear-gradient(135deg, #145224 0%, #1A6B2F 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
