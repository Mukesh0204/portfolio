/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slow-reverse': 'float 8s ease-in-out infinite reverse',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.2s forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-in-right-1': 'slideInRight 0.8s ease-out 0.4s forwards',
        'slide-in-right-2': 'slideInRight 0.8s ease-out 0.6s forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.8s ease-out 0.8s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease-out 1s forwards',
        'bounce-slow': 'bounce 2s infinite',
        'word-fade-1': 'fadeIn 0.5s ease-out 0s forwards',
        'word-fade-2': 'fadeIn 0.5s ease-out 0.3s forwards',
        'word-fade-3': 'fadeIn 0.5s ease-out 0.6s forwards',
        'word-fade-4': 'fadeIn 0.5s ease-out 0.9s forwards',
        'word-fade-5': 'fadeIn 0.5s ease-out 1.2s forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: [],
} 