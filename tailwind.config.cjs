/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#800000', // Deep Burgundy/Red
        secondary: '#D4AF37', // Gold/Yellow
        background: '#FFFFFF', // Clean White
        lightGrey: '#F5F5F5', // Light Grey for backgrounds
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}