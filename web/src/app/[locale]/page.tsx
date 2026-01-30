import { Link } from '@/i18n/routing';
import Subscribe from '@/components/Subscribe';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              DOGE Belgium
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Building GOV OS.
            </h1>

            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl">
              The open-source operating system for Belgian government. Built by a team of young builders with the moral ambition to fix what&apos;s broken &mdash; instead of extracting from it.
            </p>

            <p className="text-base text-foreground-tertiary leading-relaxed max-w-2xl">
              Open source. Decentralised. Sovereign. We take ownership, investigate the biggest failures, build the replacements, and ship them to 11 million citizens.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/join" className="btn-primary">
                Join as Builder
              </Link>
              <Link href="/support" className="btn-secondary">
                Support the Initiative
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach - 3 Phases */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Roadmap
            </h2>
            <p className="mt-2 text-foreground-secondary">
              From team to mandate to operating system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background border border-accent/30 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">1</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">Build the Team</h3>
                <span className="badge-active">Now</span>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Recruit builders and investigators. Investigate the biggest government failures. Build prototypes that prove a small team can out-deliver consulting firms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get the Mandate</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Build public support. Show what&apos;s possible. Get the political mandate to build government software &mdash; not outsource it.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Build GOV OS</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                The endgame: a sovereign, open-source operating system for all Belgian government. Identity, payments, documents, communication.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gov-os"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              Read the full GOV OS plan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Open Source</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Every line of code is public. No vendor lock-in. No black boxes. Citizens pay for it &mdash; citizens own it.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Decentralised</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                No single point of failure. Small, independent modules. Each agency owns its data. Peer-to-peer exchange.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sovereign</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Belgian data on European infrastructure. No foreign tech monopoly dependencies. Digital sovereignty is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Cost of Failure
            </h2>
            <p className="mt-2 text-foreground-secondary">
              Tracking wasted taxpayer money across Belgian government IT projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 p-8 bg-background rounded-2xl border border-border">
              <span className="text-sm font-medium text-foreground-tertiary uppercase tracking-wide">
                Total Wasted
              </span>
              <p className="mt-3 font-display text-5xl md:text-6xl font-bold text-chart-negative tracking-tight">
                €95.8M
              </p>
              <p className="mt-4 text-foreground-secondary">
                Across 3 failed government IT projects in Belgium alone
              </p>
              <p className="mt-2 text-sm text-foreground-tertiary">
                That&apos;s €438 per Flemish household
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <span className="text-sm text-foreground-tertiary">Projects Failed</span>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">3</p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <span className="text-sm text-foreground-tertiary">Avg. Delivery</span>
              <p className="mt-2 font-display text-3xl font-bold text-chart-negative">6%</p>
            </div>

            <div className="col-span-2 p-6 bg-background rounded-xl border border-border">
              <span className="text-sm text-foreground-tertiary">Active Investigations</span>
              <p className="mt-2 font-display text-3xl font-bold text-status-active">5</p>
              <p className="mt-1 text-sm text-foreground-tertiary">
                Procurement System, Persona, iPolice, and more
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/investigations"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              View all investigations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Investigation */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="badge-active">Featured Investigation</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Persona Project: €16M Wasted
              </h2>
              <p className="mt-4 text-foreground-secondary leading-relaxed">
                Five years and €16 million later, the Flemish education administration&apos;s modernization project delivered only 8-10% of promised functionality. Our investigation reveals a systemic governance failure.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/investigations/case-004-persona-onderwijsadministratie" className="btn-primary">
                  Read Investigation
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Budget Spent</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">€16M</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Delivered</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">8-10%</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Duration</span>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">5 Years</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Status</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">Halted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Tools We&apos;ve Built
            </h2>
            <p className="mt-2 text-foreground-secondary">
              Open-source solutions shipping today — no tender required
            </p>
          </div>

          <div className="mb-6 p-8 rounded-xl bg-background border border-accent/30 hover:border-accent/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">GovChallenge</h3>
                  <span className="badge-active">Launching soon</span>
                </div>
                <p className="text-foreground-secondary leading-relaxed">
                  Challenge-based procurement platform. Governments define problems, teams build working prototypes in 12 weeks, winners get paid for results. No 47-page tenders. Just working software.
                </p>
              </div>
              <a
                href="https://www.govchallenge.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-shrink-0"
              >
                Visit govchallenge.eu
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Brussels Coalition Builder</h3>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Interactive tool to explore coalition combinations for the Brussels regional government.
                  </p>
                  <Link href="/tools/coalition-builder" className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover">
                    Try it now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background-tertiary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-foreground-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground-secondary">IT Project Cost Calculator</h3>
                  <p className="mt-1 text-sm text-foreground-tertiary">
                    Calculate the real cost of failed IT projects and compare alternatives.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-foreground-tertiary">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              View all tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Stay Updated
          </h2>
          <p className="text-foreground-secondary">
            Get notified when we publish new investigations or ship new tools.
          </p>
          <Subscribe />
        </div>
      </section>

      {/* Join the DOGE Team CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Join the DOGE Team
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            You&apos;re 25. You can build. You want your work to matter.
          </p>
          <p className="mt-3 text-foreground-tertiary leading-relaxed">
            Option A: Join a consulting firm. Bill hours. Make slides. Watch your &ldquo;deliverables&rdquo; collect dust on a SharePoint nobody opens.
          </p>
          <p className="mt-3 text-foreground-secondary leading-relaxed font-medium">
            Option B: Join DOGE. Investigate a €75M failure. Build GOV OS. Ship it to 11 million people.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/join" className="btn-primary">
              Apply Now
            </Link>
            <a
              href="https://github.com/jonasboury/doge-europe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
