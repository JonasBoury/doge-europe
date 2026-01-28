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
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleLocaleChange('fr')}
        className={`px-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
          currentLocale === 'fr'
            ? 'bg-accent text-foreground-inverse'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => handleLocaleChange('nl')}
        className={`px-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
          currentLocale === 'nl'
            ? 'bg-accent text-foreground-inverse'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
          currentLocale === 'en'
            ? 'bg-accent text-foreground-inverse'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
      >
        EN
      </button>
    </div>
  );
}
