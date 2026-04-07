/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF6B35",
        'brand-dark': "#E55A28",
        'brand-light': "#FF8A5C",
        dark: "#0A0E1A",
        'dark-2': "#0F1420",
        'dark-3': "#161C2E",
        'dark-4': "#1E2840",
        muted: "#6B7280",
        'muted-2': "#9CA3AF",
        light: "#F8F9FC",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 0 50px rgba(255, 107, 53, 0.25)',
        'card': '0 4px 32px rgba(0,0,0,0.5)',
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
