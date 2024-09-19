/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #06A0EC 0%, #07557B 100%)',
        'background': 'url("/src/assets/Background pattern.png")'
      },
      colors: {
        white: "#fff",
        black: "#000",
        small: "#475467",
        primary: "#086593",
        bluePrimary: "#086593",
        greyDark: "#101828",
        greyPrimary: "#475467",
      },
      fontSize: {
        sm: "18px",
        md: "28px"
      },
      screens: {
        xsm: { min: "320px", max: "375px" },
        sm: { min: "376px", max: "500px" },
        md: { min: "501px", max: "768px" },
        lg: { min: "769px", max: "1023px" },
        xl: { min: "1024px", max: "1535px" },
        "2xl": { min: "1536px" },
        xxl: { min: "1536px", max: "2560px" },
      }
    },
  },
  plugins: [],
};
