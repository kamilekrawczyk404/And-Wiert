/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "dark-blue": "#00296B",
        blue: "#003F88",
        "light-blue": "#00509D",
        "dark-orange": "#FDC500",
        "light-orange": "#FFD500",
      },
    },
    keyframes: {
      bounce: {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(10px)" },
        "100%": { transform: "translateY(00px)" },
      },
      pulse: {
        "0%": { transform: "scale(1)" },
        "10%": { transform: "scale(1.05)" },
        "20%": { transform: "scale(1)" },
      },
    },
    animation: {
      bounce: "bounce 1s ease-in-out infinite",
      pulse: "pulse 5s ease-in-out infinite",
    },
  },
  plugins: [],
};