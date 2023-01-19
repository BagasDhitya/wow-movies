/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wow-deep-blue": "#001233",
        "wow-coral-red": "#FF595A",
        "wow-beige": "#CAC0B3",
        "wow-white": "#FFFF",
      },
    },
    fontFamily: {
      inter: ["Inter", "inter"],
    },
  },
  plugins: [require("daisyui")],
};
