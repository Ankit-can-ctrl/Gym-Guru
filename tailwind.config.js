/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Main: ["Signika Negative", "sans-serif"],
        Quote: ["Rock Salt", " cursive"],
        Saira: ["Saira Condensed", " sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(2,130,181,1) 0%, rgba(3,3,4,1) 100%)",
      },
      boxShadow: {
        "text-sm": "1px 1px 2px rgba(0, 0, 0, 0.5)",
        "text-md": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        "text-lg": "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
