/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FFD700', // Gold Yellow
          secondary: '#FFF8DC', // Light Creamy White
          dark: '#222', // Dark Grey for contrast
        },
      },
    },
    plugins: [],
  };
  