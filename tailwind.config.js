/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#11002a',
          secondary: '#6420a8',
          accent: '#9729fc',
          light: '#e26cd7',
          lighter: '#f6bafb',
          lightest: "#f6e1ff",
        }
      },
    },
    fontFamily: {
      'default': ["Coda", "sans-serif"]
    }
  },
  plugins: [],
}