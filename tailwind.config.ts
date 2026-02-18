import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fafb',
          100: '#d5eff3',
          200: '#aadfe7',
          300: '#72c7d4',
          400: '#42a9ba',
          500: '#2a7f8f',
          600: '#246778',
          700: '#215464',
          800: '#214553',
          900: '#1f3a46',
          950: '#0f2029',
        },
        sand: {
          50: '#fdfaf3',
          100: '#faf3e1',
          200: '#f3e4be',
          300: '#e8c77b',
          400: '#e0b255',
          500: '#d69b36',
          600: '#be7f29',
          700: '#9e6324',
          800: '#804f24',
          900: '#694221',
          950: '#3b210f',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#ede6db',
          300: '#e0d4c3',
          400: '#cebda5',
          500: '#bca68a',
          600: '#a88d71',
          700: '#8f755d',
          800: '#76614f',
          900: '#625143',
          950: '#342a22',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
