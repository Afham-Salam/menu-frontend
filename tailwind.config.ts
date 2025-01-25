import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Import plugin correctly for TypeScript

const config: Config = {
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
      },
      lineHeight: {
        custom: "25.71px",
      },
      letterSpacing: {
        custom: "0.03em", // Custom letter spacing (equivalent to 3%)
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-burgundy": {
          textShadow: "4px 3px #800020", 
        },
      });
    }),
  ],
};

export default config;
