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
      <div className="border-b border-border mb-8">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 font-medium transition-colors rounded-t-lg ${
                activeTab === tab.key
                  ? 'bg-background-secondary text-accent border-b-2 border-accent'
                  : 'text-foreground-tertiary hover:text-foreground hover:bg-background-secondary'
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
          <div className="max-w-none">
            <MarkdownContent content={investigation.overview} />
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="max-w-none">
            <MarkdownContent content={investigation.timeline} />
          </div>
        )}

        {activeTab === 'sources' && (
          <div className="max-w-none">
            <MarkdownContent content={investigation.sources} />
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="max-w-none">
            <MarkdownContent content={investigation.notes} />
          </div>
        )}
      </div>
    </div>
  );
}
