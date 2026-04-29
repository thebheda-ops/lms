/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tia: {
          primary: '#800000', // Deep Burgundy/Red
          secondary: '#D4AF37', // Gold/Yellow
          bg: '#FFFFFF', // Clean White
          grey: '#F5F5F5', // Light Grey for backgrounds
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}