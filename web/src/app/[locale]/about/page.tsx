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
            About DOGE Europe
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            European Department of Government Efficiency
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-background-secondary rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-4 text-accent">
              Our Mission
            </h2>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-4">
              The European Department of Government Efficiency (DOGE Europe) is an independent
              investigative initiative dedicated to exposing systemic failures, inefficiencies,
              and accountability gaps in European governance.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              We conduct rigorous, evidence-based investigations into prolonged political crises,
              budget mismanagement, and institutional paralysis that harm citizens and undermine
              democratic legitimacy.
            </p>
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
              DOGE Europe leverages artificial intelligence to analyze vast amounts of public data,
              identify patterns of inefficiency, and accelerate our investigative process. AI helps us
              process government documents, track spending patterns, and uncover connections that would
              take human researchers months to discover.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              While AI assists our research, all findings are verified by human experts and all
              conclusions are drawn through rigorous journalistic standards. We believe in using
              technology responsibly to serve the public interest.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Truth Over Partisanship</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                We prioritize factual accuracy and systemic analysis over political agendas.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Radical Transparency</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                All findings, sources, and methodologies are publicly documented.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Accountability First</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                We demand accountability from institutions and public officials.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Evidence-Based</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Every claim is backed by rigorous research and multiple sources.
              </p>
            </div>

            <div className="p-6 bg-background-elevated border border-border rounded-xl hover:border-accent/30 transition-colors md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">AI-Augmented Research</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                We harness artificial intelligence to analyze documents, detect patterns, and accelerate investigations—while maintaining human oversight and journalistic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DOGE Europe */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
            Why DOGE Europe?
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed mb-4">
            Europe faces unprecedented governance challenges: prolonged government formations,
            budget crises, institutional gridlock, and eroding public trust. Traditional oversight
            mechanisms often fail to address these systemic issues.
          </p>
          <p className="text-foreground-secondary text-lg leading-relaxed">
            DOGE Europe fills this accountability gap by conducting independent investigations,
            exposing institutional failures, and proposing concrete structural reforms.
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
            DOGE Europe is built on transparency and community engagement. You can:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Follow our investigations and share findings
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Submit tips and evidence (via secure channels)
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Contribute to our open-source research tools
            </li>
            <li className="flex items-start gap-3 text-foreground-secondary">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Demand accountability from your representatives
            </li>
          </ul>
          <a
            href="https://github.com/jonasboury/doge-europe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
