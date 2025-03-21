import type { Config } from "tailwindcss"

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        gray: "rgba(128, 128, 128, 1)",

        "copy-primary": "rgba(var(--copy-primary))",

        "project-card-bg": "rgba(var(--project-card-bg))",
        "project-card-bg-hover": "rgba(var(--project-card-bg-hover))",

        "release-images-card": "rgba(var(--release-images-card))",

        "carousel-active-page": "rgba(var(--carousel-active-page))",
      },
      boxShadow: {
        projectcard: "0px 0px 6px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "480px",
        sm: "680px",
        lg: "992px",
      },
      rotate: {
        270: "270deg",
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows", // Custom property name: actual CSS property
      },
      animation: {
        ping: "ping 2s infinite",
        slowspin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config
