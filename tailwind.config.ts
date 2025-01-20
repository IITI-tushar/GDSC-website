module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00FF00",
        blue: "#00BFFF",
        red: "#FF6347",
        yellow: "#FFFF00",
      },
      keyframes: {
        moveRocket: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-10%)" },
        },
      },
      animation: {
        moveRocket: "moveRocket 5s infinite",
      },
    },
  },
  plugins: [],
}
