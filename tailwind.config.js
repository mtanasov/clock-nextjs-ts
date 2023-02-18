/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main-orange': '#ff9f0a',
      'main-gray': "gray",
      'bermuda': '#fff',
      'black': "#111",
      "modal-bg": "#1c1c1e",
      "search-bg": "#3a393e",
    },
    extend: {
      height: {
        '128': "32rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: "attr",
    }),
  ],
}
