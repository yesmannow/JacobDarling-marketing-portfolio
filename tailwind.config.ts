import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Water-inspired color palette
        navy: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cce6',
          300: '#8cadd9',
          400: '#6690cc',
          500: '#4070bf',
          600: '#1a5aa6',
          700: '#14447d',
          800: '#0d2f54',
          900: '#08203a',
          950: '#051629',
        },
        aqua: {
          50: '#f0fafa',
          100: '#d4f2f2',
          200: '#a9e6e6',
          300: '#7fd9d9',
          400: '#54cccc',
          500: '#2abfbf',
          600: '#229999',
          700: '#1a7373',
          800: '#114d4d',
          900: '#0a3333',
        },
        teal: {
          50: '#f0f9f9',
          100: '#d9f0f0',
          200: '#b3e0e0',
          300: '#8cd1d1',
          400: '#66c1c1',
          500: '#40b2b2',
          600: '#338e8e',
          700: '#266b6b',
          800: '#1a4747',
          900: '#0d2424',
        },
        coral: {
          50: '#fff5f2',
          100: '#ffe5dd',
          200: '#ffcabb',
          300: '#ffb099',
          400: '#ff9577',
          500: '#ff7b55',
          600: '#cc6244',
          700: '#994a33',
          800: '#663122',
          900: '#331911',
        },
        amber: {
          50: '#fffbf0',
          100: '#fff5d9',
          200: '#ffebb3',
          300: '#ffe08c',
          400: '#ffd666',
          500: '#ffcc40',
          600: '#cca333',
          700: '#997a26',
          800: '#66521a',
          900: '#33290d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
