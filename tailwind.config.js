/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['VT323', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        base: "1.25rem"
      },
      colors: {
        goshawk: '#444444'
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ball: {
          '0%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
        typewriter: {
          to: {
            left: "100%"
          }
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out',
        bounce: 'ball 3s infinite',
        typewriterA: 'typewriter 2s steps(9) forwards',
        typewriterC: 'typewriter 2s steps(8) forwards',
      },
    },
    plugins: [],
  }
}