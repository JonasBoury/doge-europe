import { Link } from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              DOGE Belgium
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              Belgian Department of Government Efficiency - Investigating systemic failures and demanding accountability.
            </p>
          </div>

          {/* Ethics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Our Principles
            </h3>
            <ul className="text-sm text-foreground-secondary space-y-2">
              <li>Truth over partisanship</li>
              <li>Transparency in all findings</li>
              <li>Accountability to the public</li>
              <li>Evidence-based research</li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="text-sm text-foreground-secondary space-y-2">
              <li>
                <Link href="/investigations" className="hover:text-accent transition-colors">
                  Active Investigations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/jonasboury/doge-europe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-foreground-tertiary">
            © {new Date().getFullYear()} DOGE Belgium. Built for transparency and accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}
