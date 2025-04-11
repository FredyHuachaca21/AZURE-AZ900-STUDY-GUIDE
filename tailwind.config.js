/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#e5f1fc',
          100: '#cce3f9',
          200: '#99c7f4',
          300: '#66abee',
          400: '#338fe9',
          500: '#0073e4', // Azure blue
          600: '#005cb6',
          700: '#004488',
          800: '#002d5b',
          900: '#00162d',
        },
        microsoft: {
          blue: '#60B0D0',
          dark: '#304080',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 