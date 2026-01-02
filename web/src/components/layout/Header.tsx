'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b-2 border-brand-primary bg-background-darker">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl font-display font-bold">
              <span className="text-brand-primary group-hover:text-brand-accent transition-colors">
                DOGE
              </span>
              <span className="text-white"> Europe</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-brand-primary transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link
              href="/investigations"
              className="text-gray-300 hover:text-brand-primary transition-colors font-medium"
            >
              {t('investigations')}
            </Link>
            <Link
              href="/coalition-builder"
              className="text-gray-300 hover:text-brand-accent transition-colors font-medium flex items-center gap-1"
            >
              <span>🔧</span>
              <span>{t('coalitionBuilder')}</span>
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-brand-primary transition-colors font-medium"
            >
              {t('about')}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
