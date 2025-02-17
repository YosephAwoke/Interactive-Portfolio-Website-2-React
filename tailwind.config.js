import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   ...colors,
    // },
    extend: {
      animation: {
        gradient: 'gradient 6s ease infinite', // Defines the custom animation
        updown: 'updown 3s linear infinite', // Custom animation
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Adjust bounce height here
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
    fontFamily: {
      body: ['Inter', 'Josefin Sans'],
      special: ['Roboto']
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Enable hover for background color
      textColor: ['hover'],       // Enable hover for text color
    },
  },
  plugins: [],
};