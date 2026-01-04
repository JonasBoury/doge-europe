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
        // Minimalist, Professional Color Scheme (inspired by Vibe Kanban)
        background: {
          DEFAULT: '#1f2937',     // Deep charcoal
          darker: '#111827',      // Darker variation
          light: '#374151',       // Lighter variation
        },
        foreground: {
          DEFAULT: '#f9fafb',     // Light text
          muted: '#9ca3af',       // Muted text
        },
        border: {
          DEFAULT: '#4b5563',     // Default border
          muted: '#374151',       // Muted border
        },
        muted: {
          DEFAULT: '#374151',     // Muted background
          foreground: '#9ca3af',  // Muted text
        },
        accent: {
          DEFAULT: '#60a5fa',     // Subtle blue accent
          foreground: '#f9fafb',  // Accent text
        },
        card: {
          DEFAULT: '#1f2937',     // Card background
          foreground: '#f9fafb',  // Card text
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#f9fafb',
            a: {
              color: '#60a5fa',
              textDecoration: 'none',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: { color: '#f9fafb' },
            h2: { color: '#f9fafb' },
            h3: { color: '#f9fafb' },
            h4: { color: '#f9fafb' },
            strong: { color: '#f9fafb' },
            code: { color: '#f9fafb' },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#4b5563',
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
