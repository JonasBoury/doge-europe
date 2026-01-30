import { Link } from '@/i18n/routing';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              The Manifesto
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Belgium deserves a government that builds.
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
              Not a procurement office. Not a committee. Not an outsourcing machine. A motivated team with a mandate to investigate, fix, and build GOV OS &mdash; the open-source operating system for Belgian government. No bullshit.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Problem
            </h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                Belgian governments spend billions on technology every year. Most of it fails. Not because the problems are hard, but because the system is designed to fail.
              </p>
              <p>
                A ministry needs software. They write a 47-page tender. A consulting firm wins the contract. They subcontract to another firm. Who subcontracts to another. Four layers deep, nobody owns the outcome. Three years later: over budget, under-delivered, and the citizens it was meant to serve are still using paper forms.
              </p>
              <p>
                Critical government infrastructure runs on US big tech and consulting firms that have repeatedly failed to deliver. Belgian citizen data is governed by the US CLOUD Act. This isn&apos;t an accident. It&apos;s the system working as designed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-3xl font-bold text-chart-negative">€95.8M</p>
                <p className="mt-1 text-sm text-foreground-tertiary">Wasted on 3 failed Belgian IT projects alone</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-3xl font-bold text-chart-negative">6%</p>
                <p className="mt-1 text-sm text-foreground-tertiary">Average delivery rate of promised functionality</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-3xl font-bold text-foreground">4+</p>
                <p className="mt-1 text-sm text-foreground-tertiary">Layers of subcontracting on average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision: GOV OS */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Vision: GOV OS
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              An open-source, sovereign operating system for Belgian government. Not another failed IT project &mdash; a permanent, shared software layer that every level of government can use.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl bg-background-secondary border border-accent/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">Open Source</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Every line of code is public. Citizens pay for it &mdash; citizens own it. No vendor lock-in. No black boxes. Transparency by design.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-accent/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">Decentralised</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  No single point of failure. Each agency owns its data. Exchange happens peer-to-peer. Small, independent modules &mdash; not monoliths.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-accent/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">Sovereign</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Belgian data on European infrastructure. Governed by Belgian law. No dependency on foreign tech monopolies. Digital sovereignty is non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Demand */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What We Demand
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              A government tech department with a real mandate. Not advisory. Not consultative. Operational.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground">No tenders for building software</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  You don&apos;t tender for your engineering team. You hire them, give them ownership, and let them build. Government should do the same.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground">No subcontracting chains</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  The people who write the code should own the outcome. One team, full accountability. Not 4 layers of contractors where nobody is responsible.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground">Builders who own what they ship</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  Not contractors who disappear after the contract ends. Permanent builders who maintain, iterate, and improve. Your name is on the code.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-accent/30">
                <h3 className="text-lg font-semibold text-foreground">100% transparency</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  Every euro spent, public. Every line of code, open source. Every decision, documented. Citizens should see exactly where their money goes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Approach
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background-secondary border border-accent/30">
                <span className="text-2xl font-display font-bold text-accent">1</span>
                <h3 className="mt-3 font-semibold text-foreground">Build the Team</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Recruit the best young builders, investigators, and fixers. Prove that a small, motivated team can out-deliver entire consulting firms. Investigate the biggest failures, build prototypes, ship.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">2</span>
                <h3 className="mt-3 font-semibold text-foreground">Get the Mandate</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Build public support. Show what&apos;s possible. Get the political mandate to build government software &mdash; not advise on it, not outsource it, build it.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">3</span>
                <h3 className="mt-3 font-semibold text-foreground">Build GOV OS</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  The endgame: an open-source, sovereign operating system for all Belgian government. Identity, payments, documents, communication &mdash; all on open standards, decentralised architecture, and European infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Principles */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
              The Principles
            </h2>

            <div className="space-y-8">
              {[
                { left: 'Ownership', right: 'Outsourcing', desc: 'The people who build it should own it. No more "it\'s the vendor\'s problem."' },
                { left: 'Speed', right: 'Process', desc: 'Ship in weeks, not years. Iterate based on real usage, not committee feedback.' },
                { left: 'Transparency', right: 'Secrecy', desc: 'Open source by default. Public budgets. Citizens can see what they\'re paying for.' },
                { left: 'Sovereignty', right: 'Dependency', desc: 'European infrastructure. Belgian law. No foreign government can compel access to citizen data.' },
                { left: 'Builders', right: 'Consultants', desc: 'Hire people who make things. Not people who advise people who manage people who might eventually make things.' },
              ].map((item) => (
                <div key={item.left} className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-bold text-foreground text-lg">{item.left}</span>
                      <span className="text-foreground-tertiary">over</span>
                      <span className="text-foreground-tertiary line-through">{item.right}</span>
                    </div>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Core Bet */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The Core Bet
            </h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                <strong className="text-foreground">Open source beats proprietary</strong> at government scale &mdash; because transparency, auditability, and community contribution matter more than vendor support contracts.
              </p>
              <p>
                <strong className="text-foreground">Small teams beat big consultancies</strong> &mdash; because 5 engineers who own a service will always outperform 50 consultants who don&apos;t.
              </p>
              <p>
                <strong className="text-foreground">Belgium can build</strong> &mdash; Estonia did it with 1.3 million people. India did it with 1.4 billion. Belgium, with 11 million people and one of the highest GDP-per-capita in the world, has no excuse not to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-subtle">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            This is the future of government technology.
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            No more tenders. No more subcontracting. No more wasted billions. Sovereign, open-source, built by Belgians for Belgians.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support" className="btn-primary">
              Sign the Petition
            </Link>
            <Link href="/join" className="btn-secondary">
              Join as Builder
            </Link>
            <Link href="/gov-os" className="btn-secondary">
              Read the GOV OS Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
