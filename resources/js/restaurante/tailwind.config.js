/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
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

