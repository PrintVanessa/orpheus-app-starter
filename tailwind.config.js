/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lyreGold: "#f5d76e",
        underworldGray: "#1a1a1a",
        echoPink: "#eaa7c6"
      }
    }
  },
  plugins: [],
};
