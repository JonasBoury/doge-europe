'use client';

import { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@convex/_generated/api';
import { Link } from '@/i18n/routing';

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const supportMutation = useMutation(api.supporters.support);
  const count = useQuery(api.supporters.getCount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await supportMutation({ email, name: name || undefined });
      setStatus('success');
      setEmail('');
      setName('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              Support the Initiative
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Government should build, not outsource.
            </h1>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Sign to show your support for a government tech department that builds its own software, with full transparency and zero subcontracting.
            </p>
            <Link
              href="/manifesto"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              Read the full manifesto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Petition Form */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background-secondary">
        <div className="max-w-xl mx-auto">
          {count !== undefined && count > 0 && (
            <div className="mb-8 text-center">
              <p className="font-display text-4xl font-bold text-foreground">{count}</p>
              <p className="text-sm text-foreground-tertiary">
                {count === 1 ? 'person has' : 'people have'} signed their support
              </p>
            </div>
          )}

          <div className="p-8 bg-background rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              I support this approach
            </h2>
            <p className="text-sm text-foreground-secondary mb-6">
              No tenders. No subcontracting. Builders who own what they ship. 100% transparency.
            </p>

            {status === 'success' ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  Thanks for your support.
                </p>
                <p className="text-sm text-foreground-secondary">
                  Share this with others who believe government tech can be better.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-secondary mb-1">
                    Name <span className="text-foreground-tertiary">(optional)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-secondary mb-1">
                    Email <span className="text-chart-negative">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                >
                  {status === 'loading' ? 'Signing...' : 'Sign Your Support'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-chart-negative">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What you're supporting */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            What you&apos;re supporting
          </h2>
          <div className="space-y-4">
            {[
              'A government tech department that builds its own software',
              'No more 47-page tenders for digital products',
              'An end to 4-layer subcontracting chains where accountability disappears',
              'Open source by default — every line of code, public',
              'Full financial transparency — every euro accounted for',
              'Hiring builders, not consultants',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-chart-positive mt-0.5">&#x2713;</span>
                <span className="text-foreground-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-subtle">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Want to do more than sign?
          </h2>
          <p className="text-foreground-secondary">
            We&apos;re looking for builders, investigators, and fixers to join the team.
          </p>
          <Link href="/join" className="btn-primary">
            Join as Builder
          </Link>
        </div>
      </section>
    </div>
  );
}
