import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              {t('hero')}
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Investigating systemic government failures and demanding accountability across Europe.
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/investigations"
                className="btn-primary"
              >
                {t('cta')}
              </Link>
              <Link
                href="/about"
                className="btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashed Divider */}
      <div className="h-px border-t border-dashed border-border/30 max-w-6xl mx-auto" />

      {/* Mission Statement */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Investigate
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Deep-dive investigations into systemic government failures and inefficiencies
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Expose
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Transparent, data-driven reporting on accountability failures
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Reform
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Concrete recommendations for structural reforms to prevent future crises
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
