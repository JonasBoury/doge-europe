# DOGE Europe — Design Research & Inspiration

## Research Date: January 2026

This document captures design patterns from leading investigative journalism, open source, and SaaS projects to inform the DOGE Europe redesign.

---

## Part 1: Eight Concrete Examples

### 1. Linear (linear.app)
**Category:** SaaS / Project Management

| Aspect | Details |
|--------|---------|
| **URL** | https://linear.app |
| **Typography** | Inter (single family, multiple weights) |
| **Color Palette** | Monochrome black/white with sparse accent colors (purple gradient logo) |
| **Key Pattern** | "Barely-there UI" — extreme minimalism with premium feel |
| **Animations** | Smooth scroll-based reveals, subtle hover states, product visualizations |
| **Why It Works** | Reduces cognitive load; feels professional to technical users |

**Steal This:** Single font family doing all the work. High contrast. Let the content breathe.

---

### 2. ICIJ Offshore Leaks (offshoreleaks.icij.org)
**Category:** Investigative Journalism / Data Platform

| Aspect | Details |
|--------|---------|
| **URL** | https://offshoreleaks.icij.org |
| **Typography** | Clean sans-serif, clear hierarchy |
| **Color Palette** | Dark backgrounds with high-contrast data visualizations |
| **Key Pattern** | Graph-based exploration, searchable database |
| **Animations** | Interactive network visualizations (Neo4j + Linkurious) |
| **Why It Works** | Makes complex offshore data explorable and understandable |

**Steal This:** Dark mode for data-heavy interfaces. Network graphs for relationship visualization.

---

### 3. Bellingcat (bellingcat.com)
**Category:** Open Source Investigation

| Aspect | Details |
|--------|---------|
| **URL** | https://www.bellingcat.com |
| **Typography** | Strong editorial feel, clear article hierarchy |
| **Color Palette** | Clean white backgrounds, accent colors for categories |
| **Key Pattern** | Blog-forward design, tool documentation as GitBook |
| **Animations** | Minimal — focus on content readability |
| **Why It Works** | Credibility through simplicity; resources are easily findable |

**Steal This:** Separate documentation/toolkit from main content. Category-based navigation.

---

### 4. The Markup (themarkup.org)
**Category:** Data Journalism / Nonprofit

| Aspect | Details |
|--------|---------|
| **URL** | https://themarkup.org |
| **Typography** | Editorial serif + sans-serif pairing |
| **Color Palette** | Light, airy backgrounds with bold accent colors |
| **Key Pattern** | "Show Your Work" methodology documentation |
| **Animations** | Data visualizations, interactive charts |
| **Why It Works** | Transparency about methods builds trust |

**Steal This:** Methodology pages explaining how investigations work. Privacy-first approach.

---

### 5. Stripe (stripe.com)
**Category:** Fintech / Developer Platform

| Aspect | Details |
|--------|---------|
| **URL** | https://stripe.com |
| **Typography** | Camphor (custom) — clean, modern sans-serif |
| **Color Palette** | Signature purple/blue gradients, clean whites |
| **Key Pattern** | Telling animations that explain product without reading |
| **Animations** | WebGL gradient backgrounds, purposeful micro-interactions |
| **Why It Works** | Complex product made instantly understandable |

**Steal This:** Animations that demonstrate, not decorate. Gradient backgrounds with depth.

---

### 6. Liveblocks (liveblocks.io)
**Category:** Developer Tools / Collaboration

| Aspect | Details |
|--------|---------|
| **URL** | https://liveblocks.io |
| **Typography** | Modern sans-serif, clear code examples |
| **Color Palette** | Soft purples, teals, gradients |
| **Key Pattern** | Scroll-based storytelling, 3D-style renders |
| **Animations** | Smooth scroll reveals, product demonstrations |
| **Why It Works** | Technical product with approachable, beautiful presentation |

**Steal This:** Scroll-triggered animations that reveal features step-by-step.

---

### 7. Ramp (ramp.com)
**Category:** Fintech / Enterprise

| Aspect | Details |
|--------|---------|
| **URL** | https://ramp.com |
| **Typography** | Bold headlines, clean body text |
| **Color Palette** | Confident greens, clean whites, strong brand colors |
| **Key Pattern** | Intelligent whitespace, high-end data visualizations |
| **Animations** | Subtle, professional motion |
| **Why It Works** | Enterprise trust through polish and restraint |

**Steal This:** Data visualization style for financial/budget analysis content.

---

### 8. Firecrawl (firecrawl.dev)
**Category:** Developer Tools / Open Source

| Aspect | Details |
|--------|---------|
| **URL** | https://www.firecrawl.dev |
| **Typography** | Bold, developer-friendly |
| **Color Palette** | Strong brand orange/red, dark backgrounds |
| **Key Pattern** | Fast, bold animations; playful yet professional |
| **Animations** | Aggressive hero animations, confident motion |
| **Why It Works** | Energy and personality for technical audience |

**Steal This:** Confident color usage. Animation speed that matches brand energy.

---

## Part 2: Six Key Patterns to Implement

### Pattern 1: "Barely-There UI" with Purpose

**What It Is:**
- Single font family (Inter or similar)
- 2-3 color palette maximum
- Abundant white/dark space as structural element
- Content-first layout

**Implementation:**
```css
/* Typography scale */
--font-family: 'Inter', system-ui, sans-serif;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 600;

/* Minimal palette */
--color-bg: #0a0a0a;
--color-surface: #141414;
--color-text: #fafafa;
--color-text-muted: #a1a1a1;
--color-accent: #3b82f6; /* Single accent */
```

**Why for DOGE Europe:**
Investigative content needs to feel credible, not flashy. Minimal UI puts focus on the research.

---

### Pattern 2: Scroll-Triggered Storytelling

**What It Is:**
- Content reveals as user scrolls
- Progress indicators showing position
- Animations that support narrative, not distract

**Implementation:**
```tsx
// Using Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {content}
</motion.div>
```

**Why for DOGE Europe:**
Investigation timelines and case studies benefit from guided reading experiences.

---

### Pattern 3: Bento Grid for Dashboards

**What It Is:**
- Modular blocks of different sizes
- Visual hierarchy through size variation
- Responsive reorganization on mobile

**Example Layout:**
```
┌─────────────────┬──────────┐
│                 │          │
│   Main Stat     │  Stat 2  │
│                 │          │
├────────┬────────┼──────────┤
│        │        │          │
│ Stat 3 │ Stat 4 │  Stat 5  │
│        │        │          │
└────────┴────────┴──────────┘
```

**Why for DOGE Europe:**
Perfect for showing investigation stats: money wasted, projects failed, timeline.

---

### Pattern 4: Micro-Interactions for Feedback

**What It Is:**
- Button state changes on hover/click
- Form field reactions to input
- Subtle loading states
- Tactile toggle switches

**Implementation:**
```css
.button {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.button:active {
  transform: translateY(0);
}
```

**Why for DOGE Europe:**
Makes the interface feel responsive and professional without being distracting.

---

### Pattern 5: Light Mode with Dark Accents (Flip the Script)

**Current State:** Dark theme
**Recommendation:** Light primary with optional dark mode

**Rationale:**
- Investigative journalism benefits from "newspaper" credibility
- Light backgrounds improve long-form readability
- Dark mode as user preference, not default

**Suggested Palette:**
```css
/* Light Mode (Default) */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
--bg-tertiary: #f1f5f9;
--text-primary: #0f172a;
--text-secondary: #475569;
--accent: #2563eb;
--accent-muted: #3b82f6;

/* Dark Mode (Optional) */
--bg-primary: #0a0a0a;
--bg-secondary: #141414;
--bg-tertiary: #1f1f1f;
--text-primary: #fafafa;
--text-secondary: #a1a1a1;
--accent: #3b82f6;
```

**Why for DOGE Europe:**
Credibility + readability for investigation reports. Dark mode for those who prefer it.

---

### Pattern 6: Data Visualization with Narrative

**What It Is:**
- Charts that tell a story, not just display numbers
- Annotations explaining significance
- Animated reveals of key data points

**Example for DOGE Europe:**
```
"€95.8 Million Wasted"

[Animated bar chart revealing]
├─ Persona: €16M (8-10% delivered)
├─ iPolice: €75.8M (0% delivered)
└─ JustSign: €4M (0% delivered)

"That's €438 per Flemish household"
```

**Implementation Approach:**
- Use Recharts or D3 for custom visualizations
- Scroll-triggered animations for impact
- Contextual comparisons (e.g., "equivalent to X teacher salaries")

---

## Part 3: Typography Recommendations

### Primary Font: Inter

**Why Inter:**
- Free and open source
- Excellent variable font support
- Designed for screens
- Used by Linear, Vercel, GitHub

**Font Scale:**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Secondary Option: Serif for Editorial Content

For long-form investigation reports, consider pairing with:
- **Newsreader** (Google Fonts, free)
- **Source Serif Pro** (Adobe, free)
- **Lora** (Google Fonts, free)

**Usage:**
- Sans-serif (Inter) for UI, navigation, stats
- Serif for article body text, quotes, reports

---

## Part 4: Color Palette Recommendation

### Option A: Professional Blue (Recommended)

```css
/* Primary */
--blue-50: #eff6ff;
--blue-100: #dbeafe;
--blue-500: #3b82f6;
--blue-600: #2563eb;
--blue-700: #1d4ed8;

/* Neutral */
--slate-50: #f8fafc;
--slate-100: #f1f5f9;
--slate-200: #e2e8f0;
--slate-700: #334155;
--slate-800: #1e293b;
--slate-900: #0f172a;

/* Accent (for warnings, highlights) */
--amber-500: #f59e0b;
--red-500: #ef4444;
--green-500: #22c55e;
```

### Option B: European Institutional (Alternative)

```css
/* EU-inspired blue/gold */
--eu-blue: #003399;
--eu-gold: #ffcc00;
--neutral-light: #f5f5f5;
--neutral-dark: #1a1a1a;
```

---

## Part 5: Animation Guidelines

### Principles

1. **Purpose over decoration** — Every animation should communicate something
2. **Fast and subtle** — 150-300ms for micro-interactions
3. **Ease-out for enters** — Content arriving should decelerate
4. **Ease-in for exits** — Content leaving should accelerate away
5. **Respect reduced motion** — Always check `prefers-reduced-motion`

### Recommended Library

**Framer Motion** (already in React ecosystem)

```tsx
// Reduced motion support
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const variants = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Animation Timing Tokens

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Part 6: Mobile → Desktop Transitions

### Mobile-First Breakpoints

```css
/* Mobile first */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Layout Strategy

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Bottom bar + hamburger | Sidebar collapsed | Full sidebar |
| Bento grid | Stack vertically | 2 columns | 3-4 columns |
| Article | Full width | Max 720px centered | Max 720px + sidebar |
| Data viz | Simplified/scrollable | Full interactive | Full interactive |

### Touch Considerations

- Minimum tap target: 44x44px
- Generous spacing between interactive elements
- Swipe gestures for navigation (optional)
- No hover-dependent content on mobile

---

## Part 7: Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Set up design tokens (colors, typography, spacing)
- [ ] Create base component library (Button, Card, Input)
- [ ] Implement light/dark mode toggle
- [ ] Mobile-first responsive grid

### Phase 2: Core Pages (Week 3-4)
- [ ] Redesign landing page with bento grid stats
- [ ] Investigation list with card layout
- [ ] Investigation detail with scroll-triggered sections
- [ ] About/methodology page

### Phase 3: Polish (Week 5-6)
- [ ] Add micro-interactions
- [ ] Implement data visualizations
- [ ] Scroll animations for storytelling sections
- [ ] Performance optimization

---

## Sources

### Design Trend Reports
- [Muzli — Web Design Trends 2026](https://muz.li/blog/web-design-trends-2026/)
- [Graphic Design Junction — 15 Web Design Trends 2026](https://graphicdesignjunction.com/2025/12/web-design-trends-of-2026/)
- [Webflow — 8 Web Design Trends 2026](https://webflow.com/blog/web-design-trends-2026)
- [Bookmarkify — Best SaaS Websites 2025](https://www.bookmarkify.io/blog/best-saas-websites-of-2025-end-of-year-showcase)

### Investigative Journalism Examples
- [ICIJ Offshore Leaks Database](https://offshoreleaks.icij.org)
- [Bellingcat](https://www.bellingcat.com)
- [The Markup](https://themarkup.org)
- [ProPublica Data Institute](https://projects.propublica.org/graphics/ida-propublica-data-institute)

### SaaS/Tech Inspiration
- [Linear](https://linear.app)
- [Stripe](https://stripe.com)
- [Liveblocks](https://liveblocks.io)
- [Ramp](https://ramp.com)
- [Firecrawl](https://www.firecrawl.dev)

### Design System Resources
- [LogRocket — Linear Design Trend](https://blog.logrocket.com/ux-design/linear-design/)
- [Lee Robinson — How Stripe Designs Beautiful Websites](https://leerob.io/blog/how-stripe-designs-beautiful-websites)
