'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-xl font-semibold tracking-tight">
              <span className="font-display text-foreground group-hover:text-accent transition-colors">
                DOGE
              </span>
              <span className="text-foreground-secondary"> Europe</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href="/investigations"
              className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
            >
              {t('investigations')}
            </Link>
            <Link
              href="/tools"
              className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
            >
              {t('tools')}
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
            >
              {t('about')}
            </Link>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="ml-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              {t('donate')}
            </Link>

            {/* Divider */}
            <div className="h-5 w-px bg-border mx-2" />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
