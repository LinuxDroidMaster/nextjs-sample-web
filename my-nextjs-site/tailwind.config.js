/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Activa el modo oscuro mediante la clase "dark"
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  