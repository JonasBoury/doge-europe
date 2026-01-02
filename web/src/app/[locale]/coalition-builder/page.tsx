'use client';

import { useState } from 'react';
import CoalitionMathEngine from '@/components/coalition/CoalitionMathEngine';
import TransparencyDashboard from '@/components/coalition/TransparencyDashboard';
import PolicyMatrix from '@/components/coalition/PolicyMatrix';
import CitizenEngagement from '@/components/coalition/CitizenEngagement';
import NetworkGraph from '@/components/coalition/NetworkGraph';

type TabType = 'math' | 'transparency' | 'policy' | 'network' | 'citizen';

export default function CoalitionBuilderPage() {
  const [activeTab, setActiveTab] = useState<TabType>('math');

  const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: 'math', label: 'Coalition Mathematics', icon: '🔢' },
    { key: 'transparency', label: 'Transparency Dashboard', icon: '📊' },
    { key: 'policy', label: 'Policy Matrix', icon: '🎯' },
    { key: 'network', label: 'Network Graph', icon: '🕸️' },
    { key: 'citizen', label: 'Citizen Engagement', icon: '👥' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-brand-primary">
          Coalition Builder Platform
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl">
          Interactive tool for analyzing Brussels government formation crisis.
          Explore viable coalitions, track negotiations, visualize policy positions,
          and understand the mathematical and political constraints preventing resolution.
        </p>
        <div className="mt-6 bg-background-darker border-l-4 border-brand-warning p-4">
          <p className="text-brand-warning font-bold mb-2">📅 Current Status:</p>
          <p className="text-gray-300">
            <strong>572 days</strong> without Brussels-Capital Region government (as of January 2, 2026)
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b-2 border-brand-secondary mb-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 font-bold transition-colors flex items-center gap-2 ${
                activeTab === tab.key
                  ? 'bg-brand-primary text-black border-b-4 border-brand-primary'
                  : 'text-gray-400 hover:text-white hover:bg-background-darker'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[800px]">
        {activeTab === 'math' && <CoalitionMathEngine />}
        {activeTab === 'transparency' && <TransparencyDashboard />}
        {activeTab === 'policy' && <PolicyMatrix />}
        {activeTab === 'network' && <NetworkGraph />}
        {activeTab === 'citizen' && <CitizenEngagement />}
      </div>

      {/* Footer Info */}
      <div className="mt-16 border-t-2 border-brand-secondary pt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-brand-accent mb-2">About This Tool</h3>
            <p className="text-sm text-gray-400">
              Part of DOGE Europe&apos;s investigation into the Brussels government formation crisis.
              Uses real election data and documented party positions.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-accent mb-2">Methodology</h3>
            <p className="text-sm text-gray-400">
              Coalition feasibility scores based on: majority requirement (45/89 seats),
              linguistic parity (2F+2D ministers), party vetoes, ideological distance,
              and policy alignment.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-accent mb-2">Data Sources</h3>
            <p className="text-sm text-gray-400">
              June 9, 2024 election results, documented party statements,
              media coverage of negotiations, and official parliamentary records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
