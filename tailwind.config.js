/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fffdf7',
        black: '#212121',
        'text-primary': '#4f4f4f',
        'text-secundary': '#90908e',
        primary: '#ffbf00',
        secundary: '#fff2cc',
        red: '#e74c3c',
        green: '#2ecc71',
        separete: '#cccccc',
      },
    },
  },
  plugins: [],
};
