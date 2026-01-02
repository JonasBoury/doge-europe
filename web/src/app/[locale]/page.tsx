import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 gradient-doge opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-12 text-white">
              {t('hero')}
            </h1>

            {/* CTA Button */}
            <div>
              <Link
                href="/investigations"
                className="inline-block bg-brand-primary hover:bg-brand-accent text-black font-bold text-xl px-12 py-4 transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                {t('cta')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-background-darker">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="border-2 border-brand-accent p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-display font-bold mb-2 text-brand-accent">
                Investigate
              </h3>
              <p className="text-gray-400">
                Deep-dive investigations into systemic government failures and inefficiencies
              </p>
            </div>

            <div className="border-2 border-brand-warning p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-display font-bold mb-2 text-brand-warning">
                Expose
              </h3>
              <p className="text-gray-400">
                Transparent, data-driven reporting on accountability failures
              </p>
            </div>

            <div className="border-2 border-brand-danger p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-display font-bold mb-2 text-brand-danger">
                Reform
              </h3>
              <p className="text-gray-400">
                Concrete recommendations for structural reforms to prevent future crises
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
