'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as string;

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-1 bg-background-dark border border-brand-secondary rounded-sm p-1">
      <button
        onClick={() => handleLocaleChange('fr')}
        className={`px-3 py-1 text-sm font-mono ${
          currentLocale === 'fr'
            ? 'bg-brand-primary text-black font-bold'
            : 'text-gray-400 hover:text-white'
        } transition-colors`}
      >
        FR
      </button>
      <button
        onClick={() => handleLocaleChange('nl')}
        className={`px-3 py-1 text-sm font-mono ${
          currentLocale === 'nl'
            ? 'bg-brand-primary text-black font-bold'
            : 'text-gray-400 hover:text-white'
        } transition-colors`}
      >
        NL
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-3 py-1 text-sm font-mono ${
          currentLocale === 'en'
            ? 'bg-brand-primary text-black font-bold'
            : 'text-gray-400 hover:text-white'
        } transition-colors`}
      >
        EN
      </button>
    </div>
  );
}
