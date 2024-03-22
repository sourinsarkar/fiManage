/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shdw-1': ['0px 2px 3px 0px rgba(0, 0, 0, 0.25)'],
      },
    },
  },
  plugins: [],
}

