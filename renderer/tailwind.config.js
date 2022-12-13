const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {
      height: {
        128: "32rem",
        256: "64rem",
      },
      fontFamily: {
        // add new font family
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
