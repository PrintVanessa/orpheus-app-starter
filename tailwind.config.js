/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lyreGold: "#F1C16E",
        underworldGray: "#2E2E2E",
        echoPink: "#EB9BAA",
      },
    },
  },
  plugins: [require('daisyui')],
}

