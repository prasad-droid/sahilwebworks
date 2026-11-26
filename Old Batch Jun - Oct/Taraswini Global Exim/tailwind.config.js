/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Site2.tsx",
  ],
  theme: {
    extend: {
      colors: {
        jute: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D7C2',
          300: '#D7BC9E',
          400: '#C59F7A',
          500: '#B08457',
          600: '#946A42',
          700: '#755132',
          800: '#5A3E26',
          900: '#3D2A1A',
        },
        forest: {
          50: '#F0F7F4',
          100: '#DCEFE6',
          200: '#BCE0CE',
          300: '#8FCAB0',
          400: '#5EAE8F',
          500: '#2D6A4F',
          600: '#1B4332',
          700: '#143627',
          800: '#0E281D',
          900: '#081C15',
        },
        sand: {
          50: '#FDFBF7',
          100: '#FAF5EE',
          200: '#F3EADF',
          300: '#E8DBCB',
          400: '#D8C5AE',
          500: '#C2AA8F',
          600: '#A38B70',
          700: '#7F6B54',
          800: '#5D4D3C',
          900: '#3D3227',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#575757',
          700: '#3F3F3F',
          800: '#262626',
          900: '#151715',
          950: '#0C0D0C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'premium': '0 10px 30px -5px rgba(27, 67, 50, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 25px -5px rgba(45, 106, 79, 0.25)',
      },
      backgroundImage: {
        'jute-texture': "radial-gradient(circle at 50% 50%, rgba(212, 163, 115, 0.08) 0%, transparent 100%)",
      }
    },
  },
  plugins: [],
}
