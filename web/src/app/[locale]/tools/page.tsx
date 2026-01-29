import { Link } from '@/i18n/routing';

const tools = [
  {
    id: 'govchallenge',
    name: 'GovChallenge',
    description: 'Challenge-based procurement platform. Governments define problems, teams build working prototypes in 12 weeks, winners get paid for results.',
    href: 'https://www.govchallenge.eu/',
    status: 'active',
    external: true,
    relatedInvestigation: null,
    features: [
      'Define challenges (2 weeks)',
      'Build prototypes (8–12 weeks)',
      'Evaluate solutions (2 weeks)',
      'Reward results, not proposals'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'coalition-builder',
    name: 'Brussels Coalition Builder',
    description: 'Interactive tool to explore potential coalition combinations for the Brussels regional government based on the 2024 election results.',
    href: '/tools/coalition-builder',
    status: 'active',
    relatedInvestigation: 'case-001-brussels-gov-formation',
    features: [
      'Real-time coalition math',
      'Veto analysis',
      'Policy distance calculator',
      'Network visualization'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'cost-calculator',
    name: 'IT Project Cost Calculator',
    description: 'Calculate the real cost of failed government IT projects and compare against what could have been built with modern approaches.',
    href: '#',
    status: 'coming-soon',
    relatedInvestigation: 'case-004-persona-onderwijsadministratie',
    features: [
      'Budget vs. delivery analysis',
      'Cost per citizen calculator',
      'Alternative comparison',
      'Timeline visualization'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'vendor-tracker',
    name: 'Government Vendor Tracker',
    description: 'Database tracking IT vendors across Belgian government contracts, their delivery records, and contract values.',
    href: '#',
    status: 'coming-soon',
    relatedInvestigation: null,
    features: [
      'Vendor performance history',
      'Contract value tracking',
      'Cross-project analysis',
      'Conflict of interest detection'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              Interactive Tools
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Tools & Calculators
            </h1>
            <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
              Interactive tools to explore data, understand complex political situations, and calculate the real cost of government inefficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`relative p-6 bg-background border border-border rounded-xl ${
                  tool.status === 'active'
                    ? 'hover:border-border-strong hover:shadow-card transition-all'
                    : 'opacity-75'
                }`}
              >
                {/* Status Badge */}
                {tool.status === 'coming-soon' && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-background-tertiary text-foreground-secondary rounded">
                    Coming Soon
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-accent mb-4">
                  {tool.icon}
                </div>

                {/* Content */}
                <h2 className="text-xl font-semibold text-foreground">
                  {tool.name}
                </h2>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground-secondary">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Related Investigation */}
                {tool.relatedInvestigation && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-foreground-tertiary uppercase tracking-wide mb-1">
                      Related Investigation
                    </p>
                    <Link
                      href={`/investigations/${tool.relatedInvestigation}`}
                      className="text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      View Case →
                    </Link>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6">
                  {tool.status === 'active' && tool.external ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      Visit Site ↗
                    </a>
                  ) : tool.status === 'active' ? (
                    <Link
                      href={tool.href}
                      className="btn-primary w-full justify-center"
                    >
                      Launch Tool
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full px-4 py-2 rounded-lg font-medium bg-background-tertiary text-foreground-tertiary cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Tool */}
      <section className="py-16 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Have an idea for a tool?
          </h2>
          <p className="mt-2 text-foreground-secondary">
            We&apos;re always looking to build tools that help citizens understand government operations better.
          </p>
          <a
            href="https://github.com/jonasboury/doge-europe/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-secondary inline-flex"
          >
            Suggest a Tool on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
