import { Link } from '@/i18n/routing';

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              Join the DOGE Team
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              The people we need don&apos;t work at Deloitte.
            </h1>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Government spends billions on technology. Most of it fails. Not because the problems are hard — but because the wrong people are solving them.
            </p>
            <p className="text-base text-foreground-tertiary leading-relaxed">
              The builders. The fixers. The people who actually ship software that works — they&apos;re at startups, scale-ups, open source projects. They would never consider government work. And honestly? Who can blame them.
            </p>
            <p className="text-lg text-foreground font-semibold">
              We&apos;re changing that.
            </p>
          </div>
        </div>
      </section>

      {/* What is DOGE */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What is DOGE?
            </h2>
            <p className="text-foreground-secondary leading-relaxed">
              DOGE is a team of young builders and investigators dedicated to fixing the biggest failures in European government — from the inside out.
            </p>
            <div className="space-y-2 text-foreground-secondary">
              <p>We don&apos;t write reports. We don&apos;t run workshops. We don&apos;t bill hours.</p>
              <p>We investigate what&apos;s broken. We build what&apos;s needed. We ship it.</p>
            </div>
            <p className="text-lg text-foreground font-semibold">
              A department that runs like a startup.
            </p>
          </div>
        </div>
      </section>

      {/* Why work for government */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why would you work for government?
            </h2>
            <p className="mt-2 text-foreground-secondary">Seriously. Here&apos;s why.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Distribution is solved.
              </h3>
              <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                Every startup dreams of millions of users. Government already has them. Build a court case tracker? 11 million Belgians need it. Fix a tax portal? Every citizen uses it. You don&apos;t need product-market fit — the market is everyone.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground">
                The problems are real.
              </h3>
              <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                No one is asking you to optimize ad clicks or build another SaaS dashboard. Citizens can&apos;t check their court cases online. Teachers spend more time on paperwork than teaching. Police still use systems from 2005. These are problems worth solving.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Your work matters.
              </h3>
              <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                Not &ldquo;we increased engagement by 3%&rdquo; matters. &ldquo;My mom uses this to check her pension&rdquo; matters. &ldquo;This saved the government €50M&rdquo; matters. Impact you can point to.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground">
                You&apos;ll actually ship.
              </h3>
              <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                No 3-year procurement cycles. No death by committee. DOGE operates with startup speed and government scale. You investigate, you build, you deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we're looking for */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What we&apos;re looking for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Builders</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Full-stack developers, designers, data engineers who ship fast. You&apos;ve built things people use. You&apos;re tired of building things that don&apos;t matter.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Investigators</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Journalists, researchers, data analysts who dig deep. You follow the money. You find what others miss. You make the complex understandable.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Fixers</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Product people, ops people, anyone who sees broken systems and can&apos;t help but fix them. You&apos;ve turned chaos into something that works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you won't / will find */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                What you won&apos;t find here
              </h2>
              <ul className="space-y-4 text-foreground-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-chart-negative mt-0.5">&#x2715;</span>
                  <span>No bureaucratic frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-negative mt-0.5">&#x2715;</span>
                  <span>No 47-page tender documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-negative mt-0.5">&#x2715;</span>
                  <span>No subcontracting chains where accountability disappears</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-negative mt-0.5">&#x2715;</span>
                  <span>No Powerpoint culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-negative mt-0.5">&#x2715;</span>
                  <span>No burning out in silence</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                What you will find
              </h2>
              <ul className="space-y-4 text-foreground-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">Ownership</span>
                    <span className="text-foreground-tertiary"> — Your project, your code, your impact</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">Speed</span>
                    <span className="text-foreground-tertiary"> — Investigate Monday, prototype Wednesday, ship Friday</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">Mission</span>
                    <span className="text-foreground-tertiary"> — Work that genuinely affects millions of people</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">Autonomy</span>
                    <span className="text-foreground-tertiary"> — We trust you to figure it out</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">Open source</span>
                    <span className="text-foreground-tertiary"> — Everything we build is public. Your work speaks for itself</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-chart-positive mt-0.5">&#x2713;</span>
                  <div>
                    <span className="font-medium text-foreground">A team that gives a shit</span>
                    <span className="text-foreground-tertiary"> — People with moral ambition, not career ambition</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Apply', desc: 'Tell us what\'s broken and how you\'d fix it' },
              { step: '2', title: 'Investigate', desc: 'Pick a case, dig in, understand the problem' },
              { step: '3', title: 'Build', desc: 'Prototype a solution in weeks, not years' },
              { step: '4', title: 'Ship', desc: 'Deploy to real citizens, measure real impact' },
              { step: '5', title: 'Repeat', desc: 'Next problem. Keep going.' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl bg-background border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-accent-subtle flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs text-foreground-tertiary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current investigations */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Current investigations
          </h2>
          <p className="text-foreground-secondary mb-8">
            These aren&apos;t hypotheticals. This is real money, real failure, real citizens affected. And we&apos;re building the alternatives.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <span className="badge-error">€75.8M wasted</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">iPolice</h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                National police IT system. €75.8M spent, system barely works.
              </p>
              <Link href="/investigations" className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <span className="badge-error">8% delivered</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Persona</h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                Education administration. €16M spent, 8% of promised functionality delivered.
              </p>
              <Link href="/investigations/case-004-persona-onderwijsadministratie" className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-background-secondary border border-border">
              <span className="badge-warning">In progress</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Justice digitalization</h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                Court systems. Citizens can&apos;t track cases online.
              </p>
              <Link href="/investigations" className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Pitch + Apply CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-subtle">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            The pitch
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-foreground-secondary leading-relaxed">
              You&apos;re 25. You can build. You want your work to matter.
            </p>
            <p className="text-foreground-tertiary leading-relaxed">
              Option A: Join a consulting firm. Bill hours. Make slides. Watch your &ldquo;deliverables&rdquo; collect dust on a SharePoint nobody opens.
            </p>
            <p className="text-foreground-secondary leading-relaxed font-medium">
              Option B: Join DOGE. Investigate a €75M failure. Build the replacement. Ship it to 11 million people. Put it on your GitHub.
            </p>
            <p className="text-lg text-foreground font-semibold pt-4">
              We know which one we&apos;d pick.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Apply</h3>
            <div className="text-left max-w-md mx-auto space-y-3 text-foreground-secondary">
              <p>Tell us:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>What&apos;s the most broken thing in government you&apos;ve seen?</li>
                <li>How would you fix it?</li>
                <li>Link to something you&apos;ve built.</li>
              </ol>
              <p className="text-foreground-tertiary text-sm pt-2">
                That&apos;s it. No CV. No cover letter. No &ldquo;tell us about a time you demonstrated leadership.&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <a
                href="mailto:join@dogeeurope.eu"
                className="btn-primary"
              >
                Send it to join@dogeeurope.eu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
