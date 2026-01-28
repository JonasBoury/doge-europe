import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="font-semibold text-gray-900">Open Challenge</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#how-it-works"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#waitlist"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            A Better Way to Build
            <br />
            <span className="text-blue-600">Government Tech</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Challenge-based procurement for digital services. Governments define problems,
            teams build working prototypes, winners get paid for results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join the Waitlist
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              The Problem We&apos;re Solving
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Traditional Government IT Procurement is Broken
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600">2-4 years</div>
              <div className="mt-2 text-sm text-gray-600">Before first line of code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600">~30%</div>
              <div className="mt-2 text-sm text-gray-600">Project success rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600">200-500%</div>
              <div className="mt-2 text-sm text-gray-600">Typical cost overrun</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600">5 vendors</div>
              <div className="mt-2 text-sm text-gray-600">Control most contracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Our Approach
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Four Phases to Working Software
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Define</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Government describes the problem and success metrics. No 500-page RFPs, just clear
                outcomes.
              </p>
              <div className="text-xs text-gray-400 mt-3">2 weeks</div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teams build working prototypes. Weekly check-ins, access to real users, open
                collaboration.
              </p>
              <div className="text-xs text-gray-400 mt-3">8-12 weeks</div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real users test solutions. Automatic accessibility and performance checks. Objective
                scoring.
              </p>
              <div className="text-xs text-gray-400 mt-3">2 weeks</div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reward</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Winners get paid. Code is open source. Deployment to production. Continued
                iteration.
              </p>
              <div className="text-xs text-gray-400 mt-3">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Benefits</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Why Challenge-Based Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10x Faster</h3>
              <p className="text-gray-600 text-sm">
                From problem to working software in 12-16 weeks instead of 2-4 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Open to All</h3>
              <p className="text-gray-600 text-sm">
                Startups, freelancers, and civic tech groups can compete, not just big vendors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay for Results</h3>
              <p className="text-gray-600 text-sm">
                Teams get paid for working software, not proposals. No delivery, no payment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Transparent</h3>
              <p className="text-gray-600 text-sm">
                All submissions, evaluations, and payments are public. Citizens see where money
                goes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Lock-in</h3>
              <p className="text-gray-600 text-sm">
                All code is open source (EUPL-1.2). Government owns the result, can hire anyone to
                continue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Tested</h3>
              <p className="text-gray-600 text-sm">
                Real users evaluate solutions. The one that works best wins, not the best proposal
                writer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Traditional vs. Challenge-Based</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                    Traditional
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                    Challenge-Based
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Time to first code</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">2-4 years</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">
                    2 weeks
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Selection criteria</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Proposal quality
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">
                    Working software
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Who can compete</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">Big vendors only</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">
                    Anyone
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">User involvement</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">After delivery</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">
                    Throughout
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Code ownership</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">Vendor lock-in</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">
                    Open source
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Transparency</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">Minimal</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Be the First to Know</h2>
          <p className="mt-4 text-lg text-blue-100">
            Join the waitlist to get early access when we launch. We&apos;re starting with pilot
            challenges in Belgium and expanding across Europe.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-sm text-blue-200">
            No spam, just updates on launch and early pilot opportunities.
          </p>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Who Is This For?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm">
                  G
                </span>
                Government Agencies
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get working software in weeks, not years
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  See solutions before committing budget
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access diverse talent beyond usual vendors
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Demonstrate innovation to citizens
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm">
                  D
                </span>
                Development Teams
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Win contracts without procurement bureaucracy
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Compete on merit, not connections
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Build portfolio with public sector work
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get paid for results, not paperwork
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="font-semibold text-white">Open Challenge</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>
                A{" "}
                <a
                  href="https://dogeeurope.eu"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  DOGE Europe
                </a>{" "}
                project
              </span>
              <span>EUPL-1.2 License</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            Building better government tech, one challenge at a time.
          </div>
        </div>
      </footer>
    </div>
  );
}
