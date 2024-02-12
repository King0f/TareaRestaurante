/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/restaurante/*.jsx",
    "./resources/js/restaurante/**/*.jsx",
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

