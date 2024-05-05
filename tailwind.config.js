/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1800px",
    },
    extend: {
      colors: {
        armyGreen: "#596D48",
        lightGray: "#E5E7EB",
      },
      backgroundImage: {
        "side-image": "url('/halie-west-25xggax4bSA-unsplash.jpg')",
      },
    },
    plugins: [],
  },
};
