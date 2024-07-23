/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Main: ["Signika Negative", "sans-serif"],
        Quote: ["Rock Salt", " cursive"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(2,130,181,1) 0%, rgba(3,3,4,1) 100%)",
      },
    },
  },
  plugins: [],
};
