/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '1000000': '1000000',
      },
      colors: {
        custom: {
            DEFAULT: '#a5b3b8',
            light: '#a5b3b8'
        }
    }
    },
  },
  plugins: [
   
  ],
}
