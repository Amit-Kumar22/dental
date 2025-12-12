import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        // DentalKart brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dental: {
          blue: '#4A90B8',
          'blue-dark': '#2E5A7A',
          orange: '#FF6B35',
          'orange-light': '#FFB5A3',
          purple: '#8B5CF6',
          'purple-light': '#C4B5FD',
          pink: '#EC4899',
          'pink-light': '#F9A8D4',
          teal: '#14B8A6',
          'teal-light': '#99F6E4',
          gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '22': '5.5rem', /* 88px */
        '88': '22rem', /* 352px */
        '104': '26rem', /* 416px */
        '112': '28rem', /* 448px */
        '128': '32rem', /* 512px */
      },
      fontSize: {
        '2.5xl': ['1.75rem', { lineHeight: '2rem' }], /* 28px */
        '4.5xl': ['2.5rem', { lineHeight: '2.75rem' }], /* 40px */
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'strong': '0 16px 40px rgba(0, 0, 0, 0.12)',
        'guide-card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'hero-search': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'product-card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'product-card-hover': '0 8px 25px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4A90B8 0%, #2E5A7A 100%)',
        'card-gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'card-gradient-pink': 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
        'card-gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
        'card-gradient-orange': 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
        'card-gradient-blue': 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;