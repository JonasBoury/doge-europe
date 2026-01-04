'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-dashed border-border/30 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-xl font-semibold">
              <span className="text-foreground group-hover:text-accent transition-colors">
                DOGE
              </span>
              <span className="text-foreground/70"> Europe</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {t('home')}
            </Link>
            <div className="h-4 w-px border-l border-dashed border-border/30" />
            <Link
              href="/investigations"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {t('investigations')}
            </Link>
            <div className="h-4 w-px border-l border-dashed border-border/30" />
            <Link
              href="/coalition-builder"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {t('coalitionBuilder')}
            </Link>
            <div className="h-4 w-px border-l border-dashed border-border/30" />
            <Link
              href="/about"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {t('about')}
            </Link>

            {/* Language Switcher */}
            <div className="h-4 w-px border-l border-dashed border-border/30" />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
