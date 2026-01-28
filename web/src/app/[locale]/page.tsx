import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              European Department of Government Efficiency
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('hero')}
            </h1>

            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl">
              Investigating systemic government failures and demanding accountability across Europe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/investigations" className="btn-primary">
                {t('cta')}
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
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

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Large stat card */}
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

            {/* Small stat cards */}
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
              <p className="mt-2 font-display text-3xl font-bold text-status-active">4</p>
              <p className="mt-1 text-sm text-foreground-tertiary">
                Belgian Justice, iPolice, Persona, and more
              </p>
            </div>
          </div>

          {/* View investigations link */}
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

      {/* Mission Statement */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-background-secondary border border-border hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Investigate
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                Deep-dive investigations into systemic government failures and inefficiencies across Europe.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Expose
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                Transparent, data-driven reporting on accountability failures with full source documentation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Reform
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                Concrete recommendations for structural reforms to prevent future crises and waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investigation */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
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
              <div className="p-6 bg-background rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Budget Spent</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">€16M</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Delivered</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">8-10%</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Duration</span>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">5 Years</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <span className="text-sm text-foreground-tertiary">Status</span>
                <p className="mt-2 font-display text-2xl font-bold text-chart-negative">Halted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
