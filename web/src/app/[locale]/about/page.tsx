import { Link } from '@/i18n/routing';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            About Us
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Building GOV OS
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            The open-source operating system for Belgian government. Built by a new generation of builders who refuse to accept the status quo.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-background-secondary rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-4 text-accent">
              Our Vision
            </h2>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-4">
              GOV OS &mdash; the operating system for Belgian governments. A unified, open-source software layer that replaces the patchwork of failed IT projects, vendor lock-in, and €75M consulting contracts with software that actually works.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              Owned by the people. Built by builders. Maintained forever.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Open Source</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Every line of code is public. Citizens pay for government software &mdash; they should own it. Open source means transparency, auditability, and no vendor lock-in. Ever.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Decentralised Technology</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                No single point of failure. No single vendor controlling everything. We adopt decentralised architectures that make government infrastructure resilient, interoperable, and future-proof.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Digital Sovereignty</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Belgian citizens&apos; data should be governed by Belgian law, hosted on European infrastructure, and never depend on foreign tech monopolies. Sovereignty is not optional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
            The Roadmap
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-background-elevated border border-accent/30 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-bold text-accent">1</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Build the Team</h3>
                    <span className="badge-active">Now</span>
                  </div>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Recruit the best young builders, investigators, and fixers in Belgium. Prove that a small, motivated team can out-deliver entire consulting firms. Investigate the biggest failures, build prototypes, and show what&apos;s possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-bold text-accent">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Get the Mandate</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Build public support for a government tech department with a real mandate to build software. Not advisory. Not consultative. Operational. A team with the authority to investigate failures, replace broken systems, and ship solutions directly to citizens.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-bold text-accent">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Build GOV OS</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    The endgame: an open-source operating system for Belgian government. A shared software layer across all levels of government &mdash; federal, regional, municipal. Identity, payments, permits, communication, data &mdash; all built on open standards, decentralised architecture, and sovereign infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowered by AI */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-accent-subtle border border-accent/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-accent">
                Empowered by AI
              </h2>
            </div>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-4">
              We leverage artificial intelligence to analyze vast amounts of public data,
              identify patterns of inefficiency, and accelerate both our investigations and our builds.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              AI helps us process government documents, track spending patterns, and ship solutions faster
              than traditional government IT projects — while maintaining human oversight and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
            Why This Matters
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed mb-4">
            Belgian governments spend billions on IT projects that never deliver. The procurement
            process is broken — it rewards incumbents, punishes innovation, and takes years before
            a single line of code is written.
          </p>
          <p className="text-foreground-secondary text-lg leading-relaxed">
            GOV OS changes this. Instead of every ministry buying its own failing software,
            we build a shared, open-source foundation that every level of government can use.
            Sovereign. Decentralised. Built to last.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
            Get Involved
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed mb-6">
            Whether you want to investigate, build, or support — there&apos;s a place for you:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Investigators:</strong> Help dig into government failures and document findings</span>
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Developers:</strong> Build the modules that will power GOV OS</span>
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Designers:</strong> Make government software that citizens actually want to use</span>
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Citizens:</strong> Sign the petition and demand better government tech</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link href="/join" className="btn-primary">
              Join as Builder
            </Link>
            <Link href="/support" className="btn-secondary">
              Support the Initiative
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
