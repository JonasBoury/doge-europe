import { Link } from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-border/30 bg-background mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              DOGE Europe
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              European Department of Government Efficiency - Investigating systemic failures and demanding accountability.
            </p>
          </div>

          {/* Ethics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Our Principles
            </h3>
            <ul className="text-sm text-foreground/50 space-y-2">
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
            <ul className="text-sm text-foreground/50 space-y-2">
              <li>
                <Link href="/investigations" className="hover:text-foreground transition-colors">
                  Active Investigations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/anthropics/doge-europe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dashed border-border/30 mt-12 pt-8 text-center">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} DOGE Europe. Built for transparency and accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}
