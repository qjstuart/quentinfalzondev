import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",

        "copy-primary": "rgba(var(--copy-primary))",

        "project-card-bg": "rgba(var(--project-card-bg))",
        "project-card-bg-hover": "rgba(var(--project-card-bg-hover))",
      },
      boxShadow: {
        projectcard: "0px 0px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config
