# DOGE Europe

**Investigate. Build. Ship.**

A team of young builders and investigators with the moral ambition to fix what's broken in government — instead of extracting from it.

🌐 [dogeeurope.eu](https://www.dogeeurope.eu) · [dogebelgium.be](https://www.dogebelgium.be)

## What is DOGE?

DOGE (Department of Government Efficiency) is a government tech department that runs like a startup. We don't outsource to Deloitte, subcontract through 4 layers, and hope for the best. We find the biggest problems, build the solutions, and ship them to millions of citizens.

**Our approach:**

1. **Recruit** — Find young builders and fixers with moral ambition
2. **Investigate** — Deep-dive into the biggest government failures, follow the money
3. **Build** — Take ownership, create solutions that work
4. **Ship** — Deploy to millions of citizens who are already waiting

## The Manifesto

Government needs a tech department that actually builds. Not a procurement office. Not a committee. Not an outsourcing machine.

- **No tenders for building software** — Hire builders, not procurement officers
- **No subcontracting chains** — One team, full accountability
- **Builders who own what they ship** — Your name is on the code
- **100% transparency** — Every euro spent, every line of code, public

Read the full manifesto at [dogeeurope.eu/manifesto](https://www.dogeeurope.eu/en/manifesto).

## Active Investigations

| Investigation | Budget Wasted | Delivered | Status |
|---|---|---|---|
| iPolice — National police IT system | €75.8M | Barely functional | Active |
| Persona — Education administration | €16M | 8-10% | Halted |
| Justice digitalization | TBD | Citizens can't track cases online | In progress |

## Tools

| Tool | Status | Link |
|---|---|---|
| **GovChallenge** — Challenge-based procurement platform | Launching soon | [govchallenge.eu](https://www.govchallenge.eu) |
| **Brussels Coalition Builder** — Interactive coalition explorer | Active | [dogeeurope.eu/tools/coalition-builder](https://www.dogeeurope.eu/en/tools/coalition-builder) |
| IT Project Cost Calculator | Coming soon | — |
| Government Vendor Tracker | Coming soon | — |

## Project Structure

```
doge-europe/
├── web/                        # Next.js website (dogeeurope.eu)
│   ├── src/
│   │   ├── app/[locale]/       # Pages (i18n: en/fr/nl)
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── manifesto/      # The manifesto
│   │   │   ├── support/        # Sign the petition
│   │   │   ├── join/           # Join the team
│   │   │   ├── investigations/ # Investigation cases
│   │   │   └── tools/          # Interactive tools
│   │   ├── components/         # React components
│   │   └── messages/           # i18n translations
│   └── convex/                 # Convex backend (subscribers, supporters)
├── investigations/             # Investigation case files
└── README.md
```

## Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS, next-intl (en/fr/nl)
- **Backend**: Convex (real-time database for subscriptions & petition)
- **Database**: Supabase (PostgreSQL + pgvector)
- **Hosting**: Vercel
- **Everything**: Open source

## Getting Started

```bash
git clone https://github.com/jonasboury/doge-europe.git
cd doge-europe/web
npm install
```

Create `web/.env.local`:
```
NEXT_PUBLIC_CONVEX_URL=your-convex-deployment-url
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

```bash
npm run dev          # Start dev server
npx convex dev       # Start Convex backend
```

## Join Us

You're 25. You can build. You want your work to matter.

- **Builders** — Full-stack developers, designers, data engineers who ship fast
- **Investigators** — Journalists, researchers, data analysts who dig deep
- **Fixers** — Product people, ops people who see broken systems and fix them

No CV. No cover letter. Tell us what's broken and how you'd fix it.

📧 [join@dogeeurope.eu](mailto:join@dogeeurope.eu)

## Contributing

Contributions welcome. Fork, branch, PR.

```bash
git checkout -b feature/your-feature
git commit -m 'feat: add your feature'
git push origin feature/your-feature
```

## License

MIT — see [LICENSE](./LICENSE) for details.
