import { Link } from '@/i18n/routing';

export default function ReformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            Our Proposal
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            A Better Way to Build Government Tech
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            Replace closed RFPs with open challenges. Let builders compete on working code, not PowerPoint proposals.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-chart-negative/5 border border-chart-negative/20 rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-6 text-chart-negative">
              The Current System is Broken
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-display font-bold text-chart-negative">3-5 years</p>
                <p className="text-foreground-secondary mt-1">From need identification to deployment</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-chart-negative">€10-100M</p>
                <p className="text-foreground-secondary mt-1">Contracts to the same handful of consultancies</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-chart-negative">80%+</p>
                <p className="text-foreground-secondary mt-1">Failure rate on major projects</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-chart-negative">Zero</p>
                <p className="text-foreground-secondary mt-1">Accountability — contractors get paid even when projects fail</p>
              </div>
            </div>
            <p className="mt-6 text-foreground-secondary">
              The result: Citizens pay for software that doesn&apos;t work, built by people who don&apos;t use it.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
            Challenge-Based Procurement
          </h2>

          {/* Phase diagram */}
          <div className="space-y-4">
            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="text-lg font-semibold text-foreground">Define (2 weeks)</h3>
              </div>
              <p className="text-foreground-secondary ml-11">
                Government publishes problem + success criteria. Open comment period for builders to ask questions.
              </p>
            </div>

            <div className="flex justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="text-lg font-semibold text-foreground">Build (8-12 weeks)</h3>
              </div>
              <p className="text-foreground-secondary ml-11">
                Open challenge — anyone can submit. Regular check-ins, public progress updates. Access to anonymized test data + government APIs.
              </p>
            </div>

            <div className="flex justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="text-lg font-semibold text-foreground">Evaluate (2 weeks)</h3>
              </div>
              <p className="text-foreground-secondary ml-11">
                Working demos evaluated by technical jury (developers, security experts), end users (actual government employees), and citizens (public voting component).
              </p>
            </div>

            <div className="flex justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">4</span>
                <h3 className="text-lg font-semibold text-foreground">Reward + Continue</h3>
              </div>
              <p className="text-foreground-secondary ml-11">
                Top 10 submissions: €5-20K each. Winner: Development contract + ongoing maintenance. All code: Open source (public paid for it).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8 text-foreground">
            Key Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Working Code Over Proposals</h3>
              <p className="text-sm text-foreground-secondary">
                <strong>Current:</strong> Award contracts based on documents describing what <em>will</em> be built.<br />
                <strong>Better:</strong> Award contracts based on working MVPs that <em>already work</em>.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Open By Default</h3>
              <p className="text-sm text-foreground-secondary">
                Challenge specs, submissions, evaluation criteria, winner selection rationale, and final code — all public. Transparency at every step.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lower Barriers, Wider Talent Pool</h3>
              <p className="text-sm text-foreground-secondary">
                No existing government contracts required. No minimum company size. Solo developers and small teams can compete. International submissions allowed.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Pay for Results, Not Promises</h3>
              <p className="text-sm text-foreground-secondary">
                Milestone payments tied to working features. Top submissions get compensated. Failure = no payment (revolutionary concept for government IT).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8 text-foreground">
            What Changes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden">
              <thead className="bg-background-secondary">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-chart-negative">Current System</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-status-success">Challenge Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Timeline</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">3-5 years</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">3-6 months</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Who can compete</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">5-10 large consultancies</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Anyone with skills</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Evaluation basis</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Proposals + past contracts</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Working code</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Transparency</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Closed</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Fully open</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Failure cost</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Millions lost</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Limited to challenge prizes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">Code ownership</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Proprietary (locked in)</td>
                  <td className="px-4 py-3 text-sm text-foreground-secondary">Open source (public owns it)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reward Structure */}
      <section className="py-16 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
            Example: €500K Project
          </h2>
          <p className="text-foreground-secondary mb-8">
            How the reward structure works for a typical government software project.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-sm text-foreground-tertiary uppercase tracking-wide">Top 10 MVPs</p>
              <p className="text-3xl font-display font-bold text-accent mt-1">€10K each</p>
              <p className="text-sm text-foreground-secondary mt-2">Compensate serious builders for their time</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-sm text-foreground-tertiary uppercase tracking-wide">2nd-3rd Place</p>
              <p className="text-3xl font-display font-bold text-accent mt-1">€25K each</p>
              <p className="text-sm text-foreground-secondary mt-2">Recognize excellent work</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-sm text-foreground-tertiary uppercase tracking-wide">Winner</p>
              <p className="text-3xl font-display font-bold text-accent mt-1">€50K + contract</p>
              <p className="text-sm text-foreground-secondary mt-2">Continue to production</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <p className="text-sm text-foreground-tertiary uppercase tracking-wide">Maintenance</p>
              <p className="text-3xl font-display font-bold text-accent mt-1">€200K/year</p>
              <p className="text-sm text-foreground-secondary mt-2">Ongoing support and improvements</p>
            </div>
          </div>

          <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-foreground-tertiary">Challenge model total</p>
                <p className="text-2xl font-display font-bold text-accent">~€350K</p>
              </div>
              <div className="text-foreground-tertiary">vs.</div>
              <div>
                <p className="text-sm text-foreground-tertiary">Current system for same scope</p>
                <p className="text-2xl font-display font-bold text-chart-negative">€2-5M+</p>
                <p className="text-sm text-foreground-secondary">(and often fails anyway)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
            Reigniting the Motivation to Work for Government
          </h2>
          <p className="text-foreground-secondary mb-8">
            The procurement problem isn&apos;t just about money. It&apos;s about <strong>talent</strong>.
          </p>

          <div className="p-6 bg-background-secondary border border-border rounded-xl mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">The Talent Crisis</h3>
            <p className="text-foreground-secondary mb-4">
              Right now, the best developers avoid government work. Why?
            </p>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <span className="text-chart-negative">✗</span>
                <span>3-year procurement cycles before writing a line of code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-negative">✗</span>
                <span>Legacy systems from 2005, no CI/CD, waterfall methodology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-negative">✗</span>
                <span>Layers of approval, committees, sign-offs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-negative">✗</span>
                <span>Can&apos;t compete with private sector salaries</span>
              </li>
            </ul>
            <p className="mt-4 text-foreground-secondary font-medium">
              Result: Government gets the consultants who couldn&apos;t get better jobs elsewhere.
            </p>
          </div>

          <div className="p-6 bg-accent-subtle border border-accent/20 rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-4">Challenge-based procurement makes government work attractive again</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-accent mb-2">For Builders</p>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Ship in weeks, not years</li>
                  <li>• Own your work — your name on the repo</li>
                  <li>• Get paid fairly at market rates</li>
                  <li>• Build a public portfolio</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent mb-2">For Government</p>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Access to top talent in Europe</li>
                  <li>• Culture shift to shipping what works</li>
                  <li>• Attract the next generation</li>
                  <li>• Modern development practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-16 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8 text-foreground">
            It&apos;s Already Working Elsewhere
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">UK Government Digital Service</h3>
              <p className="text-sm text-foreground-secondary">
                Transformed UK gov services with small, agile teams. Built GOV.UK — one of the world&apos;s best government websites. Open source, user-centered, iterative.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">US 18F / USDS</h3>
              <p className="text-sm text-foreground-secondary">
                Embedded tech teams that fixed Healthcare.gov disaster. Challenge.gov runs open innovation challenges. Proved government can ship good software.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">Estonia e-Residency</h3>
              <p className="text-sm text-foreground-secondary">
                Small country, limited budget, world-class digital services. Open, API-first architecture. Built by small teams, not big consultancies.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">Taiwan g0v</h3>
              <p className="text-sm text-foreground-secondary">
                Civic hackers build government tools. Government adopts successful projects. Radical transparency and citizen participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            We&apos;re Not Waiting for Permission
          </h2>
          <p className="mt-4 text-foreground-secondary leading-relaxed">
            DOGE Europe is running shadow challenges — building the tools government should have built.
            When our solutions work better than €75M failures, the argument makes itself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/jonasboury/doge-europe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Join as a Builder
            </a>
            <Link href="/investigations/case-005-belgian-procurement-system" className="btn-secondary">
              Read Our Investigation
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 bg-background-secondary rounded-lg">
              <p className="text-sm font-semibold text-foreground">Builders</p>
              <p className="text-xs text-foreground-tertiary">Join challenges</p>
            </div>
            <div className="p-4 bg-background-secondary rounded-lg">
              <p className="text-sm font-semibold text-foreground">Citizens</p>
              <p className="text-xs text-foreground-tertiary">Test and vote</p>
            </div>
            <div className="p-4 bg-background-secondary rounded-lg">
              <p className="text-sm font-semibold text-foreground">Civil Servants</p>
              <p className="text-xs text-foreground-tertiary">Tell us what you need</p>
            </div>
            <div className="p-4 bg-background-secondary rounded-lg">
              <p className="text-sm font-semibold text-foreground">Politicians</p>
              <p className="text-xs text-foreground-tertiary">Champion reform</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
