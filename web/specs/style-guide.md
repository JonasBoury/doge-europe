# DOGE Europe — Style Guide

> Development reference for UI consistency. Based on [design-research-2026.md](./design-research-2026.md).

---

## Typography

### Font Stack

```css
/* Primary — UI, navigation, body text */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* Display — Hero headlines, impact statements */
--font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;

/* Mono — Code, data tables, technical content */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Loading

```tsx
// app/layout.tsx
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700']
})

// In your root layout:
// <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
```

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--text-xs` | 0.75rem (12px) | 1rem | Labels, captions |
| `--text-sm` | 0.875rem (14px) | 1.25rem | Secondary text, metadata |
| `--text-base` | 1rem (16px) | 1.5rem | Body text |
| `--text-lg` | 1.125rem (18px) | 1.75rem | Lead paragraphs |
| `--text-xl` | 1.25rem (20px) | 1.75rem | Card titles |
| `--text-2xl` | 1.5rem (24px) | 2rem | Section headers |
| `--text-3xl` | 1.875rem (30px) | 2.25rem | Page titles |
| `--text-4xl` | 2.25rem (36px) | 2.5rem | Hero subheadlines |
| `--text-5xl` | 3rem (48px) | 1.1 | Hero headlines |
| `--text-6xl` | 3.75rem (60px) | 1 | Impact statements |

### Font Weights

```css
--font-normal: 400;   /* Body text */
--font-medium: 500;   /* UI elements, emphasis */
--font-semibold: 600; /* Headings, buttons */
--font-bold: 700;     /* Display headlines */
```

### Usage Rules

1. **Space Grotesk** — ONLY for:
   - Hero headlines (homepage, investigation headers)
   - Impact statistics ("€95.8 Million Wasted")
   - Never for body text or UI elements

2. **Inter** — For everything else:
   - Navigation
   - Body text
   - Cards and components
   - Buttons and form elements

3. **Tracking (letter-spacing)**
   ```css
   /* Tighten large headlines */
   .headline-xl { letter-spacing: -0.02em; }

   /* Slightly open small caps/labels */
   .label { letter-spacing: 0.05em; }
   ```

---

## Color Palette

### Light Mode (Default)

```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --bg-elevated: #ffffff;

  /* Text */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-tertiary: #94a3b8;
  --text-inverse: #ffffff;

  /* Accent — Professional Blue */
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-muted: #3b82f6;
  --accent-subtle: #eff6ff;

  /* Borders */
  --border-default: #e2e8f0;
  --border-muted: #f1f5f9;
  --border-strong: #cbd5e1;

  /* Status */
  --status-success: #22c55e;
  --status-warning: #f59e0b;
  --status-error: #ef4444;
  --status-info: #3b82f6;
}
```

### Dark Mode (User Preference)

```css
[data-theme="dark"] {
  /* Backgrounds */
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-tertiary: #1f1f1f;
  --bg-elevated: #1a1a1a;

  /* Text */
  --text-primary: #fafafa;
  --text-secondary: #a1a1a1;
  --text-tertiary: #737373;
  --text-inverse: #0a0a0a;

  /* Accent */
  --accent: #3b82f6;
  --accent-hover: #60a5fa;
  --accent-muted: #2563eb;
  --accent-subtle: #1e3a5f;

  /* Borders */
  --border-default: #2a2a2a;
  --border-muted: #1f1f1f;
  --border-strong: #404040;
}
```

### Semantic Colors

```css
/* Investigation status */
--status-active: #f59e0b;      /* Ongoing investigation */
--status-published: #22c55e;   /* Published findings */
--status-archived: #94a3b8;    /* Archived case */

/* Data visualization */
--chart-negative: #ef4444;     /* Money wasted, failures */
--chart-positive: #22c55e;     /* Delivered, success */
--chart-neutral: #3b82f6;      /* Neutral data */
--chart-highlight: #f59e0b;    /* Call attention */
```

---

## Spacing

### Scale

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Usage Guidelines

| Context | Spacing |
|---------|---------|
| Component padding | `--space-4` to `--space-6` |
| Card gap | `--space-4` |
| Section gap | `--space-16` to `--space-24` |
| Page margins (mobile) | `--space-4` |
| Page margins (desktop) | `--space-8` |
| Max content width | 1280px |
| Max article width | 720px |

---

## Breakpoints

```css
--breakpoint-sm: 640px;    /* Large phones */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Laptops */
--breakpoint-xl: 1280px;   /* Desktops */
--breakpoint-2xl: 1536px;  /* Large screens */
```

### Tailwind Usage

```tsx
// Mobile-first approach
<div className="px-4 md:px-8 lg:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Content */}
  </div>
</div>
```

---

## Components

### Buttons

```tsx
// Primary button
<button className="
  px-4 py-2
  bg-accent text-text-inverse
  font-medium rounded-lg
  hover:bg-accent-hover
  active:translate-y-px
  transition-all duration-150
">
  View Investigation
</button>

// Secondary button
<button className="
  px-4 py-2
  bg-transparent text-text-primary
  font-medium rounded-lg
  border border-border-default
  hover:bg-bg-secondary
  active:translate-y-px
  transition-all duration-150
">
  Learn More
</button>

// Ghost button
<button className="
  px-4 py-2
  bg-transparent text-text-secondary
  font-medium rounded-lg
  hover:text-text-primary hover:bg-bg-secondary
  transition-all duration-150
">
  Cancel
</button>
```

### Cards

```tsx
// Investigation card
<article className="
  p-6
  bg-bg-elevated
  border border-border-default
  rounded-xl
  hover:border-border-strong
  transition-colors duration-200
">
  <span className="text-xs font-medium text-status-active uppercase tracking-wide">
    Active Investigation
  </span>
  <h3 className="mt-2 text-xl font-semibold text-text-primary">
    Case Title
  </h3>
  <p className="mt-2 text-text-secondary">
    Brief description...
  </p>
</article>
```

### Stat Cards (Bento Grid)

```tsx
// Large stat card
<div className="
  p-8
  bg-bg-secondary
  rounded-2xl
  col-span-2 row-span-2
">
  <span className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
    Total Wasted
  </span>
  <p className="mt-2 font-display text-6xl font-bold text-chart-negative">
    €95.8M
  </p>
  <p className="mt-4 text-text-secondary">
    Across 3 failed government IT projects
  </p>
</div>

// Small stat card
<div className="p-6 bg-bg-secondary rounded-xl">
  <span className="text-sm text-text-tertiary">Projects Failed</span>
  <p className="mt-1 text-3xl font-semibold text-text-primary">3</p>
</div>
```

---

## Animation

### Timing Tokens

```css
--duration-instant: 50ms;
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;
--duration-slower: 600ms;

--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Micro-Interactions

```css
/* Button hover lift */
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.btn:active {
  transform: translateY(0);
}

/* Card hover */
.card {
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}
.card:hover {
  border-color: var(--border-strong);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Link underline */
.link {
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: text-decoration-color var(--duration-fast);
}
.link:hover {
  text-decoration-color: var(--accent);
}
```

### Scroll Animations (Framer Motion)

```tsx
import { motion } from 'framer-motion'

// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
>
  {content}
</motion.div>

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>
```

### Reduced Motion

```tsx
// Always respect user preferences
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const variants = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20
  },
  visible: { opacity: 1, y: 0 }
}
```

---

## Layout Patterns

### Page Container

```tsx
<main className="min-h-screen bg-bg-primary">
  <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20">
    {/* Page content */}
  </div>
</main>
```

### Bento Grid

```tsx
<div className="
  grid
  grid-cols-2 md:grid-cols-4
  gap-4 md:gap-6
">
  {/* Large card spanning 2x2 */}
  <div className="col-span-2 row-span-2">...</div>

  {/* Regular cards */}
  <div>...</div>
  <div>...</div>
  <div className="col-span-2">...</div>
</div>
```

### Article Layout

```tsx
<article className="mx-auto max-w-[720px]">
  <header className="mb-12">
    <span className="text-sm font-medium text-accent">Investigation</span>
    <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">
      Title Here
    </h1>
    <p className="mt-4 text-xl text-text-secondary">
      Subtitle/summary
    </p>
  </header>

  <div className="prose prose-slate max-w-none">
    {/* Article content */}
  </div>
</article>
```

---

## Dark Mode Implementation

### Toggle Logic

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check localStorage or system preference
    const stored = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (stored === 'dark' || (!stored && systemDark)) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return { theme, toggleTheme }
}
```

### Toggle Component

```tsx
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-bg-secondary transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
```

---

## Accessibility Checklist

- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Color contrast ratio ≥ 3:1 for large text (≥18px bold)
- [ ] Focus states visible on all interactive elements
- [ ] Minimum tap target 44x44px on mobile
- [ ] `prefers-reduced-motion` respected
- [ ] Semantic HTML (headings, landmarks, lists)
- [ ] Alt text for all meaningful images
- [ ] Skip link to main content
- [ ] Form labels associated with inputs

---

## File Structure

```
web/src/
├── styles/
│   ├── globals.css      # CSS variables, base styles
│   └── tokens.css       # Design tokens only
├── components/
│   ├── ui/              # Base components (Button, Card, Input)
│   ├── layout/          # Layout components (Container, Grid)
│   └── features/        # Feature-specific components
└── hooks/
    └── useTheme.ts      # Theme toggle logic
```

> **Note:** Space Grotesk and Inter are loaded via `next/font/google` — no local font files needed.

---

## Quick Reference

| Need | Use |
|------|-----|
| Hero headline | `font-display text-5xl md:text-6xl font-bold` |
| Page title | `text-3xl md:text-4xl font-semibold` |
| Section heading | `text-2xl font-semibold` |
| Body text | `text-base text-text-secondary` |
| Primary button | `bg-accent text-text-inverse hover:bg-accent-hover` |
| Card | `p-6 bg-bg-elevated border border-border-default rounded-xl` |
| Page padding | `px-4 md:px-8 py-12 md:py-20` |
| Max content | `max-w-7xl mx-auto` |
| Max article | `max-w-[720px] mx-auto` |
