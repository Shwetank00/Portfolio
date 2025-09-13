/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#b6e3ff",
          300: "#86ceff",
          400: "#52b1ff",
          500: "#2a94ff",
          600: "#1575ef",
          700: "#0f5dd1",
          800: "#114ca5",
          900: "#123f84",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgb(42 148 255 / 0.5)",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translateY(-10%) rotate(0deg)" },
          "50%": { transform: "translateY(10%) rotate(180deg)" },
          "100%": { transform: "translateY(-10%) rotate(360deg)" },
        },
        shine: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        borderPulse: {
          "0%,100%": { "border-color": "rgba(42,148,255,.35)" },
          "50%": { "border-color": "rgba(255,255,255,.6)" },
        },
      },
      animation: {
        aurora: "aurora 22s ease-in-out infinite",
        shine: "shine 1s ease-in-out",
        float: "float 6s ease-in-out infinite",
        "border-pulse": "borderPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
