'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Investigation } from '@/types/investigation';
import MarkdownContent from './MarkdownContent';

interface Props {
  investigation: Investigation;
}

type TabType = 'overview' | 'timeline' | 'sources' | 'notes';

export default function InvestigationTabs({ investigation }: Props) {
  const t = useTranslations('investigation.tabs');
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'overview', label: t('overview') },
    { key: 'timeline', label: t('timeline') },
    { key: 'sources', label: t('sources') },
    { key: 'notes', label: 'Notes' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b-2 border-brand-secondary mb-8">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 font-bold transition-colors ${
                activeTab === tab.key
                  ? 'bg-brand-primary text-black border-b-4 border-brand-primary'
                  : 'text-gray-400 hover:text-white hover:bg-background-darker'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'overview' && (
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={investigation.overview} />
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={investigation.timeline} />
          </div>
        )}

        {activeTab === 'sources' && (
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={investigation.sources} />
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={investigation.notes} />
          </div>
        )}
      </div>
    </div>
  );
}
