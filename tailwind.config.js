/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        business: {
          canvas: '#F8FAFC',
          surface: '#FFFFFF',
          obsidian: '#0B0F17',
          cobalt: '#1D4ED8',
          amber: '#D97706',
          friction: '#DC2626',
          aligned: '#059669',
        },
        sage: {
          parchment: '#FBF8F3',
          clay: '#F2EAE1',
          sanctuary: '#1C2826',
          botanical: '#3F6212',
          ochre: '#D97706',
          coral: '#E11D48',
        }
      },
      borderRadius: {
        'business': '6px',
        'sage': '20px',
      }
    },
  },
  plugins: [],
};
