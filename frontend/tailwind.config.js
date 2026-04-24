/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          900: '#1f3d2b', // dark green for text and buttons
          800: '#2c4b38', // hover state for buttons
          100: '#e5ecd2', // light green for subtle elements (if needed)
          50: '#f9fbf6'   // off-white/light green for background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Inter provides a clean, modern look
        heading: ['"Plus Jakarta Sans"', 'sans-serif'] // For the main heading
      }
    },
  },
  plugins: [],
}
