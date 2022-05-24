module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        loading: ["Big Shoulders Text", "cursive"],
      },
      colors: {
        primary: "#008744",
        secondary: "#ffba00",
        text: "#444444",
        gray: "#888888",
      },
    },
  },
  plugins: [],
};
