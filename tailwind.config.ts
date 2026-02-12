import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0e14",
          surface: "#111820",
          panel: "#151d28",
          accent: "#58a6ff",
          green: "#3fb950",
          muted: "#8b949e",
          light: "#c9d1d9",
          purple: "#bc6ff1",
          cyan: "#00e5ff",
          orange: "#ff6d00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
