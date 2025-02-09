/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#008374", // Warna Islami (Hijau)
        secondary: "#FFD700", // Warna Emas (Kemewahan)
      },
      fontFamily: {
        arabic: ["Amiri", "serif"], // Font khas Arab
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
