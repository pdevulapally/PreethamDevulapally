import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary-color)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: "var(--background)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "card-bg": "var(--card-bg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      minWidth: {
        "24": "6rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "bg-primary",
    "bg-opacity-10",
    "bg-opacity-20",
    "bg-opacity-50",
    "bg-opacity-80",
    "bg-opacity-90",
    "bg-opacity-95",
    "text-primary",
    "border-primary",
    "border-opacity-30",
    "border-opacity-50",
    "hover:border-primary",
    "hover:border-opacity-50",
    "bg-green-500",
    "bg-opacity-10",
    "border-green-500",
    "border-opacity-30",
    "bg-red-500",
    "bg-opacity-10",
    "border-red-500",
    "border-opacity-30",
  ],
}
export default config
