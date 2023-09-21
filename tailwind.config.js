/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DelaGothicOne: ["Dela Gothic One"],
        SpaceGrotesk: ["Space Grotesk"],
      },
      colors: {
        heading: "rgba(234, 211, 193, 1)",
        content: "rgba(234, 211, 193, 0.6)",
        info: "rgba(167, 135, 130, 1)",
      },
    },
  },
  plugins: [],
};
