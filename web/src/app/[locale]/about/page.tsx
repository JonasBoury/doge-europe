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
            Investigate. Build. Ship.
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            A community of investigators and builders working for government efficiency — without waiting for government permission.
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
              We dig into failed projects, expose waste, and identify what citizens actually need. Then we build it.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              No procurement processes. No 3-year tender cycles. No €75M consulting contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Investigate</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Deep-dive into government failures, follow the money, expose the waste.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Identify</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Understand what citizens and governments actually need.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Build</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Create open-source solutions that work.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-accent">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ship</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Deploy tools people can use today, bypassing broken procurement.
              </p>
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

      {/* Principles */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
            Our Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ship Fast</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Working software beats perfect documentation. We ship early, iterate often, and learn from real users.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Open Source</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                All our tools are open source. Anyone can inspect, improve, or fork our work. Transparency by default.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Evidence-Based</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Every investigation is backed by rigorous research. Every claim has sources. We show our work.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Community-Driven</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Investigators, developers, designers, citizens — everyone has a place. We build together.
              </p>
            </div>
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
            European governments spend billions on IT projects that never deliver. The procurement
            process is broken — it rewards incumbents, punishes innovation, and takes years before
            a single line of code is written.
          </p>
          <p className="text-foreground-secondary text-lg leading-relaxed">
            We believe citizens deserve better. Instead of waiting for reform, we&apos;re building
            the tools that should exist — and giving them away for free.
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
              <span><strong>Developers:</strong> Build open-source tools that solve real problems</span>
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Designers:</strong> Make government data accessible and understandable</span>
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Citizens:</strong> Share our findings and demand accountability</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/jonasboury/doge-europe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Contribute on GitHub
            </a>
            <Link href="/donate" className="btn-secondary">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
