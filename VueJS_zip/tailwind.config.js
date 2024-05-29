/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      borderRadius: {
        custom: "0 6px 6px 0",
      },
    },
  },
  plugins: [],
};
