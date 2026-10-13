import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withVar("--bg"),
        surface: withVar("--surface"),
        ink: withVar("--text"),
        muted: withVar("--muted"),
        profile: withVar("--c-profile"),
        skills: withVar("--c-skills"),
        interests: withVar("--c-interests"),
        articles: withVar("--c-articles"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        grow: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        grow: "grow 1s ease-out forwards",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [typography],
};

export default config;