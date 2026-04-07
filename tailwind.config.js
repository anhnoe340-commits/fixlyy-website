/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: "#3B5BF5",
        'brand-dark': "#2D4AE0",
        'brand-light': "#6B8AFF",
        // Theme-aware backgrounds via CSS variables
        dark:   'rgb(var(--color-dark)   / <alpha-value>)',
        'dark-2': 'rgb(var(--color-dark-2) / <alpha-value>)',
        'dark-3': 'rgb(var(--color-dark-3) / <alpha-value>)',
        'dark-4': 'rgb(var(--color-dark-4) / <alpha-value>)',
        muted:   'rgb(var(--color-muted)   / <alpha-value>)',
        'muted-2': 'rgb(var(--color-muted-2) / <alpha-value>)',
        light: "#F0F4FF",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 0 50px rgba(59, 91, 245, 0.35)',
        'brand-sm': '0 0 24px rgba(59, 91, 245, 0.25)',
        'card': '0 4px 32px rgba(0,0,0,0.45)',
        'card-light': '0 4px 32px rgba(59,91,245,0.1)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        blink: 'blink 1.2s step-end infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
