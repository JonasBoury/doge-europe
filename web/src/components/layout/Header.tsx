'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandName, setBrandName] = useState('Belgium');

  useEffect(() => {
    const host = window.location.hostname;
    if (host.includes('dogebelgium')) {
      setBrandName('Belgium');
    }
  }, []);

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/investigations' as const, label: t('investigations') },
    { href: '/tools' as const, label: t('tools') },
    { href: '/gov-os' as const, label: t('govOs') },
    { href: '/about' as const, label: t('about') },
    { href: '/manifesto' as const, label: t('manifesto') },
    { href: '/join' as const, label: t('join') },
  ];

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
              <span className="text-foreground-secondary"> {brandName}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/donate"
              className="ml-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              {t('donate')}
            </Link>

            <div className="h-5 w-px bg-border mx-2" />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-accent hover:bg-accent/10 rounded-lg transition-colors"
            >
              {t('donate')}
            </Link>

            <div className="pt-2 border-t border-border mt-2">
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
