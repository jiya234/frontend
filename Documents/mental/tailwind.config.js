/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096267",   // ✅ Teal-Green Theme
        secondary: "#F5F5DC", // ✅ Beige Theme
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],  // ✅ Poppins Font Add Karo
      },
    },
  },
  plugins: [],
};
