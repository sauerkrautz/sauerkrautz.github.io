/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        main: "#2E3642",
        back: "#282E38",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
