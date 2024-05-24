/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fffdf7',
        black: '#212121',
        'absolute-black': '#000000',
        'text-primary': '#4f4f4f',
        'text-secundary': '#90908e',
        primary: '#ffbf00',
        secundary: '#fff2cc',
        red: '#e74c3c',
        green: '#2ecc71',
        separete: '#cccccc',
      },
      flex: {
        '33%': '0 0 33.3%',
        '50%': '0 0 50%',
        '100%': '0 0 100%',
      },
      maxWidth: {
        '33%': '33.3%',
        '50%': '50%',
        '11/12': '91.666667%',
      },
      backgroundImage: {
        'detail-1': "url('/bg-icons-1.png')",
        'detail-2': "url('/bg-icons-2.png')",
        'rating-1': "url('/diego.jpg')",
      },
      height: {
        '11/12': '91.666667%',
      },
      maxHeight: {
        '5xl': '1024px',
        '11/12': '91.666667%',
      },
    },
  },
  plugins: [daisyui],
};
