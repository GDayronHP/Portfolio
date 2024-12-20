/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#000000",
        primaryHover: "#141414",
        secondary: "#0f0f0f",
        secondaryHover: "#141414",
        tertiary: "#212b38",
        tertiaryHover: "#2d3e50",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, visibility: 'hidden', scale: 0 },
          '100%': { opacity: 1, visibility: 'visible', scale: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1, visibility: 'visible', scale: 1 },
          '100%': { opacity: 0, visibility: 'hidden', scale: 0 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.15s ease-in-out forwards',
        fadeOut: 'fadeOut 0.15s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
