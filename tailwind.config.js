/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red1: '#bc000b',
        red2: '#e5101d',
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

