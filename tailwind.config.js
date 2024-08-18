/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecorationColor: {
        blue: '#0000FF', // You can use any blue color code here
      },
    },
  },
  plugins: [],
}

