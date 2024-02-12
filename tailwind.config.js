/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./resources/js/restaurante/**/*.jsx"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '36rem',
      }
    },
  },
  plugins: [],
}

