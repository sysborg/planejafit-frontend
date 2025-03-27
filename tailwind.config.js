/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subtitle: "#16C098",
        title: "#000000",
        tbody: "#292D32",
        menu: "#9197B3",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        highlight: "#5932EA",
      }
    },
  },
  plugins: [],
};
