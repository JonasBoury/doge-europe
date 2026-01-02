export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-5xl font-display font-bold mb-8 text-brand-primary">
        About DOGE Europe
      </h1>

      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-brand-accent">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The European Department of Government Efficiency (DOGE Europe) is an independent
            investigative initiative dedicated to exposing systemic failures, inefficiencies,
            and accountability gaps in European governance.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We conduct rigorous, evidence-based investigations into prolonged political crises,
            budget mismanagement, and institutional paralysis that harm citizens and undermine
            democratic legitimacy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-brand-warning">
            Our Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-brand-primary p-6">
              <h3 className="text-xl font-bold mb-2 text-brand-primary">Truth Over Partisanship</h3>
              <p className="text-gray-400">
                We prioritize factual accuracy and systemic analysis over political agendas.
              </p>
            </div>
            <div className="border-2 border-brand-accent p-6">
              <h3 className="text-xl font-bold mb-2 text-brand-accent">Radical Transparency</h3>
              <p className="text-gray-400">
                All findings, sources, and methodologies are publicly documented.
              </p>
            </div>
            <div className="border-2 border-brand-warning p-6">
              <h3 className="text-xl font-bold mb-2 text-brand-warning">Accountability First</h3>
              <p className="text-gray-400">
                We demand accountability from institutions and public officials.
              </p>
            </div>
            <div className="border-2 border-brand-danger p-6">
              <h3 className="text-xl font-bold mb-2 text-brand-danger">Evidence-Based</h3>
              <p className="text-gray-400">
                Every claim is backed by rigorous research and multiple sources.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-brand-danger">
            Why DOGE Europe?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Europe faces unprecedented governance challenges: prolonged government formations,
            budget crises, institutional gridlock, and eroding public trust. Traditional oversight
            mechanisms often fail to address these systemic issues.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            DOGE Europe fills this accountability gap by conducting independent investigations,
            exposing institutional failures, and proposing concrete structural reforms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-4 text-white">
            Get Involved
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            DOGE Europe is built on transparency and community engagement. You can:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            <li>Follow our investigations and share findings</li>
            <li>Submit tips and evidence (via secure channels)</li>
            <li>Contribute to our open-source research tools</li>
            <li>Demand accountability from your representatives</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
