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
        // DOGE Branding - Bold, Disruptive Colors
        brand: {
          primary: '#FF6B00',    // Bold orange (DOGE energy)
          secondary: '#1A1A1A',  // Near black (authority)
          accent: '#00D9FF',     // Electric blue (disruption)
          warning: '#FFD700',    // Gold (accountability spotlight)
          danger: '#FF0054',     // Hot pink (urgent alerts)
        },
        background: {
          dark: '#0A0A0A',
          darker: '#000000',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            color: '#333',
            a: {
              color: '#FF6B00',
              '&:hover': {
                color: '#00D9FF',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
