import { Link } from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-secondary bg-background-darker py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold text-brand-primary mb-3">
              DOGE Europe
            </h3>
            <p className="text-gray-400 text-sm">
              European Department of Government Efficiency - Investigating systemic failures and demanding accountability.
            </p>
          </div>

          {/* Ethics */}
          <div>
            <h3 className="text-xl font-display font-bold text-brand-accent mb-3">
              Our Principles
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>✓ Truth over partisanship</li>
              <li>✓ Transparency in all findings</li>
              <li>✓ Accountability to the public</li>
              <li>✓ Evidence-based research</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-brand-warning mb-3">
              Resources
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/investigations" className="hover:text-brand-primary transition-colors">
                  Active Investigations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/anthropics/doge-europe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-secondary mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DOGE Europe. Built for transparency and accountability.</p>
        </div>
      </div>
    </footer>
  );
}
