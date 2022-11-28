/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '1000000': '1000000',
      }
    },
  },
  plugins: [],
}
