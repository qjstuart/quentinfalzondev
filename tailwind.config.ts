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

        "qf-blue": "rgba(var(--qf-blue))",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config
