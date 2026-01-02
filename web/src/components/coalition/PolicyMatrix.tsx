'use client';

import { useState } from 'react';
import { policyPositions, getPartyById } from '@/data/brussels-2024-election';
import { findPolicyCommonGround } from '@/lib/coalition-engine';
import type { PolicyPosition } from '@/types/coalition';

type Domain = PolicyPosition['domain'];

const domainInfo: Record<Domain, { name: string; leftLabel: string; rightLabel: string; icon: string }> = {
  economic: {
    name: 'Economic Policy',
    leftLabel: 'Left (Social Spending)',
    rightLabel: 'Right (Tax Cuts)',
    icon: '💰',
  },
  mobility: {
    name: 'Mobility & Transport',
    leftLabel: 'Public Transit',
    rightLabel: 'Car Access',
    icon: '🚗',
  },
  housing: {
    name: 'Housing Policy',
    leftLabel: 'Social Housing',
    rightLabel: 'Market Solutions',
    icon: '🏠',
  },
  diversity: {
    name: 'Diversity & Integration',
    leftLabel: 'Multiculturalism',
    rightLabel: 'Assimilation',
    icon: '🌍',
  },
  budget: {
    name: 'Budget Approach',
    leftLabel: 'Revenue Increases',
    rightLabel: 'Spending Cuts',
    icon: '📊',
  },
};

export default function PolicyMatrix() {
  const [selectedDomain, setSelectedDomain] = useState<Domain>('economic');
  const [selectedParties, setSelectedParties] = useState<string[]>([]);

  const domainPositions = policyPositions.filter((p) => p.domain === selectedDomain);

  const toggleParty = (partyId: string) => {
    setSelectedParties((prev) =>
      prev.includes(partyId) ? prev.filter((id) => id !== partyId) : [...prev, partyId]
    );
  };

  const commonGround = selectedParties.length >= 2 ? findPolicyCommonGround(selectedParties) : [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-display font-bold mb-4 text-white">
          Policy Position Matrix
        </h2>
        <p className="text-gray-400">
          Visualize party positions across key policy domains to identify common ground and gaps.
          Select parties to analyze potential coalition compatibility.
        </p>
      </div>

      {/* Domain Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {(Object.keys(domainInfo) as Domain[]).map((domain) => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`p-4 font-bold transition-all border-2 ${
              selectedDomain === domain
                ? 'bg-brand-primary text-black border-brand-primary'
                : 'bg-background-darker text-gray-300 border-brand-secondary hover:border-brand-accent'
            }`}
          >
            <div className="text-2xl mb-2">{domainInfo[domain].icon}</div>
            <div className="text-sm">{domainInfo[domain].name}</div>
          </button>
        ))}
      </div>

      {/* Policy Spectrum Visualization */}
      <div className="bg-background-darker border-2 border-brand-secondary p-8">
        <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
          <span>{domainInfo[selectedDomain].icon}</span>
          <span>{domainInfo[selectedDomain].name}</span>
        </h3>

        {/* Spectrum Labels */}
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>← {domainInfo[selectedDomain].leftLabel}</span>
          <span>{domainInfo[selectedDomain].rightLabel} →</span>
        </div>

        {/* Spectrum Bar */}
        <div className="relative h-32 bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 rounded mb-8">
          {/* Position markers */}
          {domainPositions.map((position) => {
            const party = getPartyById(position.partyId);
            if (!party) return null;

            // Map -10 to +10 scale to 0-100% position
            const leftPosition = ((position.position + 10) / 20) * 100;

            return (
              <div
                key={position.partyId}
                className="absolute transform -translate-x-1/2 cursor-pointer"
                style={{ left: `${leftPosition}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
                onClick={() => toggleParty(position.partyId)}
              >
                <div
                  className={`px-3 py-2 font-bold text-white transition-all ${
                    selectedParties.includes(position.partyId)
                      ? 'ring-4 ring-brand-accent scale-110'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: party.color }}
                >
                  {party.abbreviation}
                </div>
                <div className="text-xs text-center mt-1 text-gray-300 font-mono">
                  {position.position > 0 ? '+' : ''}
                  {position.position}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Policies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domainPositions.map((position) => {
            const party = getPartyById(position.partyId);
            if (!party) return null;

            return (
              <div
                key={position.partyId}
                className={`p-4 border-2 cursor-pointer transition-all ${
                  selectedParties.includes(position.partyId)
                    ? 'border-brand-accent bg-background'
                    : 'border-brand-secondary bg-background hover:border-brand-primary'
                }`}
                onClick={() => toggleParty(position.partyId)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: party.color }}
                  >
                    {party.abbreviation}
                  </span>
                  <span className="text-gray-400 text-sm">{party.name.en}</span>
                </div>
                <ul className="text-xs text-gray-300 space-y-1">
                  {position.keyPolicies.map((policy, idx) => (
                    <li key={idx}>• {policy}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Common Ground Analysis */}
      {selectedParties.length >= 2 && (
        <div className="bg-background-darker border-l-4 border-brand-accent p-6">
          <h3 className="text-2xl font-display font-bold mb-4 text-brand-accent">
            🎯 Common Ground Analysis
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Analyzing policy compatibility for selected parties:{' '}
            {selectedParties
              .map((id) => getPartyById(id)?.abbreviation)
              .filter(Boolean)
              .join(', ')}
          </p>

          <div className="space-y-4">
            {commonGround.map((result) => (
              <div key={result.domain} className="border-l-2 border-brand-secondary pl-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">
                    {domainInfo[result.domain as Domain].icon}{' '}
                    {domainInfo[result.domain as Domain].name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-2xl font-bold ${
                        result.alignment >= 70
                          ? 'text-green-400'
                          : result.alignment >= 40
                          ? 'text-brand-warning'
                          : 'text-brand-danger'
                      }`}
                    >
                      {result.alignment}%
                    </span>
                    <span className="text-sm text-gray-400">alignment</span>
                  </div>
                </div>

                {/* Alignment bar */}
                <div className="bg-background h-3 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full ${
                      result.alignment >= 70
                        ? 'bg-green-400'
                        : result.alignment >= 40
                        ? 'bg-brand-warning'
                        : 'bg-brand-danger'
                    }`}
                    style={{ width: `${result.alignment}%` }}
                  />
                </div>

                {/* Party positions */}
                <div className="flex gap-3 text-sm">
                  {result.parties.map((p) => {
                    const party = getPartyById(p.id);
                    return party ? (
                      <span key={p.id} className="text-gray-400">
                        {party.abbreviation}: {p.position > 0 ? '+' : ''}
                        {p.position}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-6 border-t-2 border-brand-secondary">
            <h4 className="font-bold text-white mb-2">Coalition Compatibility Summary</h4>
            <p className="text-sm text-gray-300">
              {commonGround.filter((r) => r.alignment >= 70).length > 0 ? (
                <>
                  <span className="text-green-400 font-bold">
                    {commonGround.filter((r) => r.alignment >= 70).length}
                  </span>{' '}
                  policy domains with strong alignment (70%+).
                </>
              ) : null}
              {commonGround.filter((r) => r.alignment < 40).length > 0 ? (
                <>
                  {' '}
                  <span className="text-brand-danger font-bold">
                    {commonGround.filter((r) => r.alignment < 40).length}
                  </span>{' '}
                  domains with significant gaps (under 40%).
                </>
              ) : null}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Average policy alignment:{' '}
              <strong className="text-white">
                {Math.round(commonGround.reduce((sum, r) => sum + r.alignment, 0) / commonGround.length)}%
              </strong>
            </p>
          </div>
        </div>
      )}

      {selectedParties.length === 0 && (
        <div className="bg-background-darker border-2 border-brand-secondary p-8 text-center">
          <p className="text-gray-400">
            Click on party badges above or in the policy cards to select parties for comparison.
          </p>
        </div>
      )}
    </div>
  );
}
