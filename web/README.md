# DOGE Europe Web App

Public-facing web application for the European Department of Government Efficiency investigations.

## 🚀 Features

- **Next.js 15** with App Router and React Server Components
- **Multilingual Support** (French, Dutch, English) with next-intl
- **DOGE Branding** - Bold, disruptive design with custom Tailwind theme
- **Investigation Data Sync** - Automated markdown file synchronization
- **Responsive Design** - Mobile-first approach
- **Static Site Generation** - Optimized for Vercel deployment

## 🎨 Design System

### Color Palette
- **Primary (#FF6B00)** - Bold Orange (DOGE energy)
- **Secondary (#1A1A1A)** - Near Black (authority)
- **Accent (#00D9FF)** - Electric Blue (disruption)
- **Warning (#FFD700)** - Gold (accountability spotlight)
- **Danger (#FF0054)** - Hot Pink (urgent alerts)

### Typography
- **Display**: Space Grotesk (bold headlines)
- **Body**: Inter (readable content)
- **Mono**: JetBrains Mono (data, code)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd web
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Default language is French. Access other languages:
- French: [http://localhost:3000/fr](http://localhost:3000/fr)
- Dutch: [http://localhost:3000/nl](http://localhost:3000/nl)
- English: [http://localhost:3000/en](http://localhost:3000/en)

### Sync Investigation Data

Before building or to update investigation content:

```bash
npm run sync
```

This copies markdown files from `../investigations/` to `src/data/investigations/`.

**Note:** Only `overview.md`, `timeline.md`, `sources.md`, and `notes.md` are synced. Sensitive documents in subdirectories are excluded.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Internationalized routes
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── investigations/ # Investigation pages
│   │   │   └── about/          # About page
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   └── layout/             # Header, Footer, LanguageSwitcher
│   ├── i18n/
│   │   ├── request.ts          # i18n request config
│   │   └── routing.ts          # Locale routing
│   ├── messages/               # Translations (en, fr, nl)
│   ├── data/
│   │   └── investigations/     # Synced investigation data
│   └── middleware.ts           # i18n middleware
├── scripts/
│   └── sync-investigations.js  # Data sync script
├── public/                     # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🌍 Internationalization

The app supports three languages with automatic routing:

- **French (fr)** - Default
- **Dutch (nl)**
- **English (en)**

To add/edit translations, modify files in `src/messages/`:
- `en.json`
- `fr.json`
- `nl.json`

## 🔄 Investigation Data Flow

1. Research and findings stored in `../investigations/case-XXX/`
2. Run `npm run sync` to copy markdown files to `src/data/investigations/`
3. Next.js reads data at build time for static generation
4. Pages automatically update when rebuilt

## 🚢 Deployment (Vercel)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
4. Set environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_DEFAULT_LOCALE`

### Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=fr
```

## 📊 Performance

- **Static Site Generation (SSG)** for all pages
- **Incremental Static Regeneration (ISR)** planned for investigation updates
- **Middleware** for locale routing (runs on Edge)
- **Code Splitting** automatic with Next.js

## 🧪 Testing

```bash
npm run lint       # ESLint checks
npm run build      # Test production build
```

## 🎯 Roadmap

- [ ] Investigation detail pages with tabs (Overview, Timeline, Network, Sources)
- [ ] Network graph visualization (React Flow)
- [ ] Interactive timeline component
- [ ] Search functionality
- [ ] RSS feed for updates
- [ ] SEO optimization
- [ ] Social media sharing
- [ ] Dark mode toggle (currently dark-only)

## 📝 Adding New Investigations

1. Create investigation folder in `../investigations/case-XXX/`
2. Add required markdown files:
   - `overview.md`
   - `timeline.md`
   - `sources.md`
   - `notes.md`
3. Run `npm run sync`
4. Rebuild app

## 🔒 Security

- Sensitive documents (in `/documents`, `/financial` subdirectories) are **never synced** to the web app
- `.gitignore` excludes `src/data/investigations/` from version control
- Only public markdown files are included in builds

## 🤝 Contributing

See main repository [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📄 License

See main repository LICENSE file.

## 🆘 Troubleshooting

### Build fails with "Cannot find module 'autoprefixer'"
```bash
npm install -D autoprefixer
```

### Investigation data not showing
```bash
npm run sync
npm run build
```

### i18n routing not working
Check that middleware is configured in `src/middleware.ts` and locale files exist in `src/messages/`.

### Tailwind styles not applying
Ensure `postcss.config.mjs` exists and `globals.css` is imported in root layout.

## 📞 Support

For issues related to the web app, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For DOGE Europe project issues, see main [README.md](../README.md).
