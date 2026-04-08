/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060B18",
          900: "#0B1221",
          800: "#111827",
          700: "#1A2535",
          600: "#243047",
        },
        gold: {
          300: "#E8C878",
          400: "#D4A843",
          500: "#C8983A",
          600: "#B8882E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #060B18 0%, #0B1221 40%, #111827 70%, #1A2535 100%)",
      },
      boxShadow: {
        "gold-sm": "0 4px 12px -2px rgba(200, 152, 58, 0.08)",
        "gold-md": "0 8px 20px -4px rgba(200, 152, 58, 0.12)",
        "gold-lg": "0 20px 40px -8px rgba(200, 152, 58, 0.16)",
        "gold-xl": "0 24px 48px -8px rgba(200, 152, 58, 0.20)",
        "navy-sm": "0 4px 12px -2px rgba(11, 18, 33, 0.08)",
        "navy-md": "0 8px 20px -4px rgba(11, 18, 33, 0.12)",
        "navy-lg": "0 20px 40px -8px rgba(11, 18, 33, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
