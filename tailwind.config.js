/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // varsayılan olarak ekleme
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    // yeni font ve renk ekleme
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
