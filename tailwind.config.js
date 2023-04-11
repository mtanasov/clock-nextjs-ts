/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main-orange": "#ff9f0a",
      "main-gray": "#d1d5db",
      bermuda: "#fff",
      black: "#111",
      "modal-bg": "#1c1c1e",
      "search-bg": "#3a393e",
    },
    extend: {
      backgroundImage: {
        worldTime: "url('/img/world.svg')",
        alarm: "url('/img/footer-texture.png')",
        stopWatch: "url('/img/footer-texture.png')",
        timer: "url('/img/footer-texture.png')",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        open_modal: "open_modal 0.6s ease-out forwards",
        close_modal: "close_modal 0.6s ease-out forwards 0.6s",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        open_modal: {
          "0%": { top: "100%" },
          "100%": { top: "18px" },
        },
        close_modal: {
          "0%": { top: "18px" },
          "100%": { top: "100%" },
        },
      },
      // height: {
      //   '128': "32rem",
      // }
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "attr",
    }),
  ],
};
