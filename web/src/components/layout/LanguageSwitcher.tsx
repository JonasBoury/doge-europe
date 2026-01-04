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
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLocaleChange('fr')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          currentLocale === 'fr'
            ? 'bg-muted text-foreground'
            : 'text-foreground/50 hover:text-foreground hover:bg-muted/50'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => handleLocaleChange('nl')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          currentLocale === 'nl'
            ? 'bg-muted text-foreground'
            : 'text-foreground/50 hover:text-foreground hover:bg-muted/50'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-muted text-foreground'
            : 'text-foreground/50 hover:text-foreground hover:bg-muted/50'
        }`}
      >
        EN
      </button>
    </div>
  );
}
