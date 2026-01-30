'use client';

import { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';

const presetAmounts = [10, 25, 50, 100, 250];

export default function DonatePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = params.locale as string;
  const canceled = searchParams.get('canceled');

  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setIsCustom(true);
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: isCustom ? parseInt(customAmount, 10) : amount,
          recurring,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setLoading(false);
    }
  };

  const finalAmount = isCustom ? parseInt(customAmount, 10) || 0 : amount;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            Support Our Work
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Donate to DOGE Belgium
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            Your donation helps us continue independent investigations into government
            inefficiency and hold institutions accountable.
          </p>
        </div>
      </section>

      {/* Canceled Notice */}
      {canceled && (
        <div className="max-w-xl mx-auto px-4 mb-8">
          <div className="p-4 bg-status-warning/10 border border-status-warning/20 rounded-lg text-center">
            <p className="text-foreground-secondary">
              Your donation was canceled. No charges were made.
            </p>
          </div>
        </div>
      )}

      {/* Donation Form */}
      <section className="pb-24 px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 bg-background-elevated border border-border rounded-2xl">
            {/* Donation Type Toggle */}
            <div className="mb-8">
              <label className="text-sm font-medium text-foreground-secondary mb-3 block">
                Donation Type
              </label>
              <div className="flex gap-2 p-1 bg-background-secondary rounded-lg">
                <button
                  type="button"
                  onClick={() => setRecurring(false)}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                    !recurring
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-foreground-tertiary hover:text-foreground'
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setRecurring(true)}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                    recurring
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-foreground-tertiary hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="text-sm font-medium text-foreground-secondary mb-3 block">
                Select Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAmountSelect(preset)}
                    className={`py-3 px-4 rounded-lg text-lg font-semibold transition-all ${
                      amount === preset && !isCustom
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-background-secondary text-foreground hover:bg-background-tertiary border border-border'
                    }`}
                  >
                    &euro;{preset}
                  </button>
                ))}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-tertiary font-semibold">
                    &euro;
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Other"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full py-3 pl-8 pr-4 rounded-lg text-lg font-semibold transition-all ${
                      isCustom
                        ? 'bg-accent text-white placeholder-white/70'
                        : 'bg-background-secondary text-foreground placeholder-foreground-tertiary border border-border'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-status-error/10 border border-status-error/20 rounded-lg">
                <p className="text-status-error text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || finalAmount < 1}
              className="w-full btn-primary py-4 text-lg justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  Donate &euro;{finalAmount}
                  {recurring && '/month'}
                </>
              )}
            </button>

            {/* Security Note */}
            <p className="mt-4 text-center text-xs text-foreground-tertiary">
              <svg className="inline-block w-4 h-4 mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payment powered by Stripe
            </p>
          </form>

          {/* What Your Donation Supports */}
          <div className="mt-8 p-6 bg-background-secondary rounded-xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              What Your Donation Supports
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-secondary text-sm">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Independent investigations into government inefficiency
              </li>
              <li className="flex items-start gap-3 text-foreground-secondary text-sm">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Open-source tools for government transparency
              </li>
              <li className="flex items-start gap-3 text-foreground-secondary text-sm">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI-powered document analysis and research
              </li>
              <li className="flex items-start gap-3 text-foreground-secondary text-sm">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Public accountability reporting
              </li>
            </ul>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-accent hover:text-accent-hover text-sm">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
