module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f5f5f5", 200: "#ececec", 400: "#c7cbcb" },
        blue_gray: { 800: "#384753", 900: "#1b2c50" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
      opacity: { 0.6: 0.6, 0.55: 0.55, 0.88: 0.88 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
