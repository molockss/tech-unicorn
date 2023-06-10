/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['DM Sans']
    },
    extend: {
      colors: {
        primary: '#F86338'
      }
    },
  },
  plugins: [],
}

