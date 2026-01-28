import { Link } from '@/i18n/routing';

export default function DonateSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-status-success/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-status-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Message */}
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-foreground-secondary mb-8 leading-relaxed">
          Your donation has been received. Your support helps us continue our mission
          of investigating government inefficiency and holding institutions accountable.
        </p>

        {/* Receipt Info */}
        <div className="p-4 bg-background-secondary rounded-lg mb-8">
          <p className="text-sm text-foreground-tertiary">
            A receipt has been sent to your email address.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/investigations" className="btn-primary justify-center">
            View Our Investigations
          </Link>
          <Link href="/" className="btn-secondary justify-center">
            Back to Home
          </Link>
        </div>

        {/* Social Share */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-foreground-tertiary mb-4">
            Help spread the word
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=I%20just%20supported%20DOGE%20Europe%20in%20their%20mission%20to%20investigate%20government%20inefficiency.%20Join%20me!&url=https://doge-europe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors"
            >
              <svg className="w-5 h-5 text-foreground-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://doge-europe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors"
            >
              <svg className="w-5 h-5 text-foreground-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
