/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#6C63FF',
        'accent-glow': '#8B5CF6',
        cyan: '#22D3EE',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'logo-pulse': 'logoPulse 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        logoPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 18px rgba(108,99,255,0.55))' },
          '50%': { filter: 'drop-shadow(0 0 38px rgba(108,99,255,0.9)) drop-shadow(0 0 55px rgba(34,211,238,0.25))' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
