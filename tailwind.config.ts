import type { Config } from "tailwindcss";
import { colors } from "./lib/theme";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mj-navy": "rgb(var(--foreground) / <alpha-value>)",
        "mj-navy-dark": "rgb(var(--foreground) / <alpha-value>)",
        "mj-sky": "rgb(var(--foreground) / <alpha-value>)",
        "mj-sky-light": "rgb(var(--foreground) / 0.08)",
        bg: "rgb(var(--foreground) / 0.04)",
        line: "rgb(var(--foreground) / 0.16)",
        "text-sub": "rgb(var(--foreground) / 0.64)",
        coral: "rgb(var(--foreground) / <alpha-value>)",
        "coral-light": "rgb(var(--foreground) / 0.08)",
        amber: "rgb(var(--foreground) / <alpha-value>)",
        "amber-light": "rgb(var(--foreground) / 0.08)",
      },
      fontFamily: {
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
