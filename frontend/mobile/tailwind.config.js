/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E60000",       // Vodafone signature scarlet red
        "primary-dark": "#BD0000",
        ink: "#25282B",           // Dark typography & charcoal
        body: "#7E7E7E",          // Neutral secondary body text
        mute: "#BEBEBE",          // Subtle border and inactive indicators
        canvas: "#FFFFFF",        // Pure white background
        "canvas-soft": "#F2F2F2", // Light grey container/badge background
        "canvas-dark": "#0D0D0D", // Deep dark background
      },
      borderRadius: {
        card: "8px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

