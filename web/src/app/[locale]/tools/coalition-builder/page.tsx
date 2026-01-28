'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import CoalitionMathEngine from '@/components/coalition/CoalitionMathEngine';
import TransparencyDashboard from '@/components/coalition/TransparencyDashboard';
import PolicyMatrix from '@/components/coalition/PolicyMatrix';
import CitizenEngagement from '@/components/coalition/CitizenEngagement';
import NetworkGraph from '@/components/coalition/NetworkGraph';
import PolicyDistanceCalculator from '@/components/coalition/PolicyDistanceCalculator';

type TabType = 'math' | 'transparency' | 'policy' | 'network' | 'citizen' | 'ai-policy';

export default function CoalitionBuilderPage() {
  const [activeTab, setActiveTab] = useState<TabType>('math');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'math', label: 'Coalition Math' },
    { key: 'ai-policy', label: 'AI Policy Calculator' },
    { key: 'transparency', label: 'Transparency' },
    { key: 'policy', label: 'Policy Matrix' },
    { key: 'network', label: 'Network' },
    { key: 'citizen', label: 'Engagement' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/tools" className="text-foreground-secondary hover:text-accent transition-colors">
                  Tools
                </Link>
              </li>
              <li className="text-foreground-tertiary">/</li>
              <li className="text-foreground">Coalition Builder</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Brussels Coalition Builder
              </h1>
              <p className="mt-3 text-foreground-secondary leading-relaxed">
                Interactive tool for analyzing the Brussels government formation crisis.
                Explore viable coalitions, track negotiations, and understand the political constraints.
              </p>
            </div>

            {/* Status Card */}
            <div className="flex-shrink-0 p-4 bg-status-warning/10 border border-status-warning/20 rounded-xl">
              <p className="text-xs font-medium text-status-warning uppercase tracking-wide">
                Current Status
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-foreground">
                572 days
              </p>
              <p className="text-sm text-foreground-secondary">
                without Brussels government
              </p>
            </div>
          </div>

          {/* Related Investigation */}
          <div className="mt-6 flex items-center gap-2">
            <span className="text-sm text-foreground-tertiary">Related:</span>
            <Link
              href="/investigations/case-001-brussels-gov-formation"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Case 001: Brussels Government Formation Crisis →
            </Link>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? 'bg-accent text-foreground-inverse'
                    : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[600px]">
            {activeTab === 'math' && <CoalitionMathEngine />}
            {activeTab === 'ai-policy' && <PolicyDistanceCalculator />}
            {activeTab === 'transparency' && <TransparencyDashboard />}
            {activeTab === 'policy' && <PolicyMatrix />}
            {activeTab === 'network' && <NetworkGraph />}
            {activeTab === 'citizen' && <CitizenEngagement />}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 px-4 md:px-8 bg-background-secondary border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">About This Tool</h3>
              <p className="text-sm text-foreground-secondary">
                Part of DOGE Europe&apos;s investigation into the Brussels government formation crisis.
                Uses real election data and documented party positions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Methodology</h3>
              <p className="text-sm text-foreground-secondary">
                Coalition feasibility scores based on: majority requirement (45/89 seats),
                linguistic parity (2F+2D ministers), party vetoes, ideological distance,
                and policy alignment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Data Sources</h3>
              <p className="text-sm text-foreground-secondary">
                June 9, 2024 election results, documented party statements,
                media coverage of negotiations, and official parliamentary records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
