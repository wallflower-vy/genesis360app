/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#90DD3E",
        green: "#183D36",
        aqua: "#B0FFFC",
        lightblue: "#DFE5FF",
        brown: "#906D6D",
        white: "#fff",
        lime: "#DEEDED",
        blue: "#003DB5",
        background: "#F3F8FF",
      },
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
      fontFamily: {
        plus: ["Plus Jakarta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
