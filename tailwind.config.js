/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": [
          "0.5rem",
          {
            lineHeight: "0.75rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
      fontFamily: {
        sans: ["Vazirmatn"],
      },
    },
  },
  plugins: [],
};
