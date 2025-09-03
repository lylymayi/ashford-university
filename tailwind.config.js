/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        red: {
          800: '#9A3F3F', // Override bg-red-800 to your custom color
          900: '#541212',
        },
        hero: '#EBD9D1', // Custom color for your hero section
        button1: '#8C1007',
        button2: '#B87C4C',
        button3: '#EBCB90',
        suggest: '#F7F4EA',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
        century: ['Century Gothic'],
        zapf: ['Zapf Chancery'],
        rockwell: ['Rockwell'],
      },
    },
  },
  plugins: [],
}