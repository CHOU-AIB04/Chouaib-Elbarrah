/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        phone : "600px",
        tablet : "1000px",
        md : "900px",
        navbar : "700px"
      }
    },
  },
  plugins: [],
}

