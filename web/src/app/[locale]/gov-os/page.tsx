import { Link } from '@/i18n/routing';

export default function GovOSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              The Plan
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              GOV OS
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
              A sovereign, open-source operating system for 11 million Belgian citizens. Built on first principles. No consultants. No vendor lock-in. No bullshit.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why This Exists
            </h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                Belgian government IT is broken. The pattern is clear: large contracts to consulting firms, multi-year timelines, zero accountability, zero results.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-2xl font-bold text-chart-negative">i-Police: €75.8M</p>
                <p className="mt-1 text-sm text-foreground-secondary">A €299M police digitisation contract with Sopra Steria &mdash; terminated after €75.8M spent with zero deliverables. &ldquo;Not a single project delivered in its entirety.&rdquo;</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-2xl font-bold text-chart-negative">Last in EU</p>
                <p className="mt-1 text-sm text-foreground-secondary">Belgium ranks last in the EU for connectivity infrastructure, with only 69% household coverage of high-capacity networks.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="font-display text-2xl font-bold text-chart-negative">Zero Sovereignty</p>
                <p className="mt-1 text-sm text-foreground-secondary">Critical government infrastructure runs on US big tech (Microsoft, AWS, Oracle) subject to the US CLOUD Act. Belgian citizen data is not under Belgian control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Principles */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              First Principles: What Does Government Actually Need?
            </h2>
            <p className="text-foreground-secondary leading-relaxed">
              Strip away the jargon. Every government IT system in the world is some combination of seven primitives. The mistake is buying monolithic systems that try to do everything and end up doing nothing.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Identity', desc: 'Verify that a citizen is who they claim to be' },
                { name: 'Payments', desc: 'Collect taxes, distribute benefits, pay suppliers' },
                { name: 'Documents', desc: 'Birth certificates, permits, contracts, legislation' },
                { name: 'Messaging', desc: 'Notify citizens, enable inter-agency communication' },
                { name: 'Data Exchange', desc: 'Secure data sharing between agencies' },
                { name: 'Workflow', desc: 'Applications, approvals, appeals, audits' },
                { name: 'Portals', desc: 'A citizen-facing front door to all of the above' },
              ].map((item) => (
                <div key={item.name} className="p-4 bg-background-secondary rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-foreground-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <p className="text-foreground font-semibold">The GOV OS principle</p>
              <p className="mt-2 text-foreground-secondary">
                Build each primitive as a small, independent, open-source module. Connect them through a secure data exchange layer. Let each agency compose the modules they need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Architecture
            </h2>

            <div className="space-y-3">
              {[
                { layer: 'Citizen Layer', desc: 'GOV OS App (mobile + web) — single front door for all services', color: 'bg-accent/10 border-accent/30' },
                { layer: 'Service Layer', desc: 'Composable government services built on primitives', color: 'bg-accent/5 border-accent/20' },
                { layer: 'Primitive Layer', desc: 'Identity, Payments, Documents, Messaging, Workflow, Forms, Notifications', color: 'bg-background border-border' },
                { layer: 'Data Exchange Layer', desc: 'Secure peer-to-peer data exchange (X-Road model) — every query signed, encrypted, logged', color: 'bg-background border-border' },
                { layer: 'Infrastructure Layer', desc: 'Sovereign Cloud Stack (OpenStack + Kubernetes + Ceph) — hosted on European soil', color: 'bg-background border-border' },
              ].map((item) => (
                <div key={item.layer} className={`p-5 rounded-xl border ${item.color}`}>
                  <h3 className="font-semibold text-foreground">{item.layer}</h3>
                  <p className="mt-1 text-sm text-foreground-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8">Design Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Decentralised data, centralised standards', desc: 'No single database. Each agency owns its data. Exchange happens peer-to-peer.' },
                { title: 'Small modules, not monoliths', desc: 'Each primitive is an independent service. Teams of 3-5 build and own each one.' },
                { title: 'Open source everything', desc: 'Security through transparency, not obscurity. Citizens can audit, contribute, build on top.' },
                { title: 'Privacy by design', desc: 'Citizens own their data. Consent-driven sharing. GDPR-native, not GDPR-retrofitted.' },
                { title: 'Offline-first', desc: 'Services must work with intermittent connectivity. Belgium\'s connectivity ranking demands this.' },
                { title: 'Multilingual from day one', desc: 'Dutch, French, German. Not an afterthought — built into every component.' },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-background rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="mt-1 text-xs text-foreground-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Core Components
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foreground-tertiary uppercase tracking-wide">Layer 0</span>
                  <h3 className="text-lg font-semibold text-foreground">Sovereign Cloud</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  European-controlled cloud infrastructure on Belgian/EU soil. Under the US CLOUD Act, the US government can compel American companies to hand over data stored anywhere. Belgian citizen data must be under EU jurisdiction.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Sovereign Cloud Stack', 'OpenStack', 'Kubernetes', 'Ceph', 'Keycloak', 'OpenTofu'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background-secondary rounded-xl border border-accent/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">Priority #1</span>
                  <h3 className="text-lg font-semibold text-foreground">Data Exchange Layer — &ldquo;Belgian X-Road&rdquo;</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  A secure, decentralised data exchange layer connecting all government agencies. Without this, every service requires custom integrations &mdash; which is why Belgian government IT is a mess. Estonia&apos;s X-Road processes nearly 1 billion queries per year across 450+ organisations. Zero major security breaches in 20+ years.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['X-Road', 'PKI', 'Peer-to-peer', 'MIT License'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foreground-tertiary uppercase tracking-wide">Layer 2</span>
                  <h3 className="text-lg font-semibold text-foreground">Digital Identity — &ldquo;BelgianID&rdquo;</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Build on existing eID/itsme, add EU Digital Identity Wallet (eIDAS 2.0), support verifiable credentials for selective disclosure, and enable consent-driven data sharing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Keycloak', 'eIDAS 2.0', 'Verifiable Credentials', 'OpenID Connect'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foreground-tertiary uppercase tracking-wide">Layer 3-4</span>
                  <h3 className="text-lg font-semibold text-foreground">Documents & Payments</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Once-only principle: a citizen should never provide the same document twice. Direct benefit transfer: when a citizen qualifies, the money arrives automatically &mdash; no application forms, no waiting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MinIO', 'Mojaloop', 'OpenFisca', 'SEPA Instant', 'CryptPad'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foreground-tertiary uppercase tracking-wide">Layer 5-6</span>
                  <h3 className="text-lg font-semibold text-foreground">Messaging & Workflow</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Matrix protocol for secure, decentralised government communication (already adopted by French government and German military). A workflow engine so civil servants can create digital services without custom code.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Matrix', 'Element', 'Camunda', 'Temporal'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foreground-tertiary uppercase tracking-wide">Layer 7</span>
                  <h3 className="text-lg font-semibold text-foreground">Citizen Portal — &ldquo;GOV OS App&rdquo;</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  A single front door for citizens to access all government services. Mobile app + web portal. Belgian Government Design System. WCAG 2.2 AA accessible. Dutch, French, German from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Next.js', 'Design System', 'WCAG 2.2 AA'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background rounded-md border border-border text-foreground-secondary">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Roadmap */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Phased Roadmap
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border border-accent/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold text-accent">0</span>
                  <h3 className="font-semibold text-foreground">Foundation</h3>
                  <span className="text-xs text-foreground-tertiary">Months 1-3</span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Deploy Sovereign Cloud Stack. Set up X-Road pilot between 2-3 agencies. Build the GOV OS design system. Assemble the core team: 15-20 engineers, 3-5 designers.
                </p>
                <p className="text-xs text-accent font-medium">
                  Milestone: Two agencies exchanging data over X-Road on sovereign infrastructure.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold text-accent">1</span>
                  <h3 className="font-semibold text-foreground">Identity & First Service</h3>
                  <span className="text-xs text-foreground-tertiary">Months 4-9</span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Deploy Keycloak integrated with eID/itsme. Build citizen portal with first useful service. Launch Matrix-based internal messaging. Connect 5-10 agencies to X-Road.
                </p>
                <p className="text-xs text-accent font-medium">
                  Milestone: A citizen can complete one full government service digitally, end to end.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold text-accent">2</span>
                  <h3 className="font-semibold text-foreground">Core Services</h3>
                  <span className="text-xs text-foreground-tertiary">Months 10-18</span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Launch mobile app. Build document storage (DigiLocker equivalent). Implement once-only principle. Deploy notification service, forms engine, payment layer pilot. Connect 25+ agencies.
                </p>
                <p className="text-xs text-accent font-medium">
                  Milestone: 100,000 citizens actively using GOV OS for at least 3 different services.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold text-accent">3</span>
                  <h3 className="font-semibold text-foreground">Scale & Federate</h3>
                  <span className="text-xs text-foreground-tertiary">Months 19-30</span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  Roll out to all federal agencies. Federate with regional governments (Flanders, Wallonia, Brussels). Launch direct benefit transfer. Open API platform for third-party developers.
                </p>
                <p className="text-xs text-accent font-medium">
                  Milestone: 1M+ active users. GOV OS is the primary digital interface between citizens and government.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-bold text-accent">4</span>
                  <h3 className="font-semibold text-foreground">Full Scale & European Integration</h3>
                  <span className="text-xs text-foreground-tertiary">Months 31-48</span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
                  All 589 municipalities connected. Full payment integration. Cross-border interoperability via eIDAS 2.0. Open source the full stack for other countries to adopt. AI-assisted services.
                </p>
                <p className="text-xs text-accent font-medium">
                  Milestone: 5M+ active users (50% of adult population). Belgium becomes a reference model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Budget
            </h2>
            <p className="text-foreground-secondary leading-relaxed">
              For context: the i-Police project spent €75.8M and delivered nothing.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground-tertiary font-medium">Phase</th>
                    <th className="text-left py-3 pr-4 text-foreground-tertiary font-medium">Duration</th>
                    <th className="text-left py-3 pr-4 text-foreground-tertiary font-medium">Team</th>
                    <th className="text-left py-3 text-foreground-tertiary font-medium">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { phase: 'Foundation', duration: '3 months', team: '20', cost: '€1-2M' },
                    { phase: 'Identity + First Service', duration: '6 months', team: '35', cost: '€4-6M' },
                    { phase: 'Core Services', duration: '9 months', team: '60', cost: '€10-15M' },
                    { phase: 'Scale + Federate', duration: '12 months', team: '80', cost: '€15-20M' },
                    { phase: 'Full Scale', duration: '18 months', team: '100', cost: '€20-30M' },
                  ].map((row) => (
                    <tr key={row.phase} className="border-b border-border/50">
                      <td className="py-3 pr-4 text-foreground">{row.phase}</td>
                      <td className="py-3 pr-4 text-foreground-secondary">{row.duration}</td>
                      <td className="py-3 pr-4 text-foreground-secondary">{row.team}</td>
                      <td className="py-3 text-foreground font-medium">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-border">
                    <td className="py-3 pr-4 font-bold text-foreground">Total</td>
                    <td className="py-3 pr-4 font-bold text-foreground">48 months</td>
                    <td className="py-3 pr-4 font-bold text-foreground">up to 100</td>
                    <td className="py-3 font-bold text-accent">€50-73M</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <p className="text-foreground-secondary">
                This is roughly the same as what was wasted on i-Police alone &mdash; except this builds a complete sovereign digital operating system for all of Belgium, not a failed police database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Models */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Reference Models
            </h2>
            <p className="text-foreground-secondary">
              Other countries have already proven this works.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { country: 'Estonia', pop: '1.3M', highlight: '99% of services online. X-Road: 1B queries/year. 2% GDP saved annually.', lesson: 'Start with the data exchange layer. Everything else builds on top.' },
                { country: 'India', pop: '1.4B', highlight: 'UPI: 10B+ transactions/month. Direct Benefit Transfer saved $33B in fraud.', lesson: 'Build open protocols, not platforms.' },
                { country: 'Singapore', pop: '5.5M', highlight: '97% Singpass adoption. 350M+ transactions/year. LifeSG bundles 100+ services.', lesson: 'Build a single citizen app that bundles everything.' },
                { country: 'UK', pop: '67M', highlight: 'GOV.UK Notify: 1B+ notifications/year. Gold standard for government web design.', lesson: 'Invest heavily in design. A design system creates consistency and trust.' },
                { country: 'France', pop: '67M', highlight: '30,000+ government employees use Tchap (Matrix) for secure communication.', lesson: 'Matrix works at government scale.' },
                { country: 'Germany', pop: '83M', highlight: 'Sovereign Cloud Stack serves hundreds of thousands daily. ICC replaced Microsoft Office with OpenDesk.', lesson: 'The sovereign cloud stack exists and works.' },
              ].map((item) => (
                <div key={item.country} className="p-5 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{item.country}</h3>
                    <span className="text-xs text-foreground-tertiary">{item.pop}</span>
                  </div>
                  <p className="text-sm text-foreground-secondary leading-relaxed mb-2">{item.highlight}</p>
                  <p className="text-xs text-accent leading-relaxed">Lesson: {item.lesson}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Fraud Detection */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Built-in Transparency
            </h2>
            <p className="text-foreground-secondary leading-relaxed">
              Transparency is not a feature &mdash; it&apos;s a design principle. GOV OS makes fraud structurally impossible, not just detectable after the fact.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Immutable audit trails', desc: 'Every transaction, decision, and data access is logged and tamper-proof.' },
                { title: 'AI anomaly detection', desc: 'ML models on spending data flag irregularities in real-time.' },
                { title: 'Public spending dashboards', desc: 'Citizens see where every euro goes. Real-time budget visibility.' },
                { title: 'Consent management', desc: 'Citizens control who accesses their data, with full visibility into every query.' },
                { title: 'Open data portal', desc: 'Anonymised datasets published for journalists, researchers, and citizen oversight.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <p className="text-sm text-foreground-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-background-secondary rounded-xl border border-border text-center">
                <p className="font-display text-2xl font-bold text-accent">30-40%</p>
                <p className="mt-1 text-xs text-foreground-secondary">Reduction in administrative costs</p>
              </div>
              <div className="p-5 bg-background-secondary rounded-xl border border-border text-center">
                <p className="font-display text-2xl font-bold text-accent">2% GDP</p>
                <p className="mt-1 text-xs text-foreground-secondary">Efficiency gains (Estonia&apos;s benchmark)</p>
              </div>
              <div className="p-5 bg-background-secondary rounded-xl border border-border text-center">
                <p className="font-display text-2xl font-bold text-accent">~0%</p>
                <p className="mt-1 text-xs text-foreground-secondary">Procurement fraud through transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Bet */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
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
                <strong className="text-foreground">Belgium can build</strong> &mdash; Estonia did it with 1.3 million people and far fewer resources. India did it with 1.4 billion people and far more complexity. Belgium, with 11 million people, one of the highest GDP-per-capita countries in the world, and a position at the heart of the EU, has no excuse not to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-subtle">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Help us build GOV OS.
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            This is not a whitepaper. This is a plan. And we&apos;re building the team to execute it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join" className="btn-primary">
              Join as Builder
            </Link>
            <Link href="/support" className="btn-secondary">
              Sign the Petition
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
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
