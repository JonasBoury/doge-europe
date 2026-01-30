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
              Government needs a tech department that actually builds.
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
              Not a procurement office. Not a committee. Not an outsourcing machine. A motivated team with a mandate to investigate, fix, and build. No bullshit.
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
                This isn&apos;t an accident. It&apos;s the system working as designed. Accountability disappears in the subcontracting chain. Incentives reward billing hours, not shipping software. And the people who could actually build these systems &mdash; they&apos;d never touch a government tender with a ten-foot pole.
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

      {/* What We Demand */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What We Demand
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              A government tech department with a real mandate. Not advisory. Not consultative. Operational.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <h3 className="text-lg font-semibold text-foreground">No tenders for building software</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  You don&apos;t tender for your engineering team. You hire them, give them ownership, and let them build. Government should do the same. Hire builders, not procurement officers.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <h3 className="text-lg font-semibold text-foreground">No subcontracting chains</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  When a project fails after 4 layers of subcontracting, who&apos;s responsible? Nobody. That&apos;s the point. The people who write the code should own the outcome. One team, full accountability.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <h3 className="text-lg font-semibold text-foreground">Builders who own what they ship</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  Not contractors who disappear after the contract ends. Permanent builders who maintain, iterate, and improve. Your name is on the code. Your reputation is on the line.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background-secondary border border-accent/30">
                <h3 className="text-lg font-semibold text-foreground">100% transparency</h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  Every euro spent, public. Every line of code, open source. Every decision, documented. Citizens pay for this &mdash; citizens should see exactly where their money goes and what it produces.
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
                { left: 'Results', right: 'Reports', desc: 'Measure what ships, not what\'s presented. Working software over PowerPoint decks.' },
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

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              How It Works
            </h2>
            <p className="text-foreground-secondary leading-relaxed">
              We&apos;re not waiting for permission. We&apos;re proving it works.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">1</span>
                <h3 className="mt-3 font-semibold text-foreground">Recruit builders</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Find the young engineers, designers, and investigators who want their work to matter.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">2</span>
                <h3 className="mt-3 font-semibold text-foreground">Investigate failures</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Follow the money. Understand why projects fail. Document everything publicly.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">3</span>
                <h3 className="mt-3 font-semibold text-foreground">Build replacements</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Prototype working solutions in weeks. Prove that modern teams can deliver what legacy vendors couldn&apos;t.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background-secondary border border-border">
                <span className="text-2xl font-display font-bold text-accent">4</span>
                <h3 className="mt-3 font-semibold text-foreground">Ship to citizens</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Deploy to millions. Measure real impact. Iterate. Repeat.
                </p>
              </div>
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
            No more tenders. No more subcontracting. No more wasted billions. Just motivated builders with a mandate to fix what&apos;s broken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support" className="btn-primary">
              Sign the Petition
            </Link>
            <Link href="/join" className="btn-secondary">
              Join as Builder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
