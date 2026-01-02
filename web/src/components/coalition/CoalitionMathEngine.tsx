'use client';

import { useState, useMemo } from 'react';
import {
  getViableCoalitions,
  getMinimalWinningCoalitions,
  getCoalitionStatistics,
  analyzeVetoImpact,
} from '@/lib/coalition-engine';
import { getPartyById, MAJORITY_THRESHOLD } from '@/data/brussels-2024-election';
import type { Coalition } from '@/types/coalition';

export default function CoalitionMathEngine() {
  const [minFeasibility, setMinFeasibility] = useState(50);
  const [showMinimal, setShowMinimal] = useState(false);

  const stats = useMemo(() => getCoalitionStatistics(), []);
  const viableCoalitions = useMemo(
    () => (showMinimal ? getMinimalWinningCoalitions() : getViableCoalitions(minFeasibility)),
    [minFeasibility, showMinimal]
  );

  const psNvaVetoImpact = useMemo(() => analyzeVetoImpact('veto-ps-nva'), []);
  const openVldVetoImpact = useMemo(() => analyzeVetoImpact('veto-openvld-requires-nva'), []);

  return (
    <div className="space-y-8">
      {/* Statistics Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-background-darker border-2 border-brand-secondary p-6">
          <div className="text-4xl font-display font-bold text-brand-accent mb-2">
            {stats.total.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">Total Possible Coalitions</div>
          <div className="text-xs text-gray-500 mt-1">
            Combinations of 2-8 parties from 14 parties
          </div>
        </div>

        <div className="bg-background-darker border-2 border-brand-warning p-6">
          <div className="text-4xl font-display font-bold text-brand-warning mb-2">
            {stats.viable}
          </div>
          <div className="text-gray-400 text-sm">Viable Coalitions</div>
          <div className="text-xs text-gray-500 mt-1">
            Meet majority ({MAJORITY_THRESHOLD}+ seats), parity (2F+2D), and no vetoes
          </div>
        </div>

        <div className="bg-background-darker border-2 border-brand-danger p-6">
          <div className="text-4xl font-display font-bold text-brand-danger mb-2">
            {stats.blocked.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">Blocked by Vetoes</div>
          <div className="text-xs text-gray-500 mt-1">
            PS-N-VA veto: {stats.blockedByPSNVAVeto} | Open VLD requirement: {stats.blockedByOpenVLDVeto}
          </div>
        </div>
      </div>

      {/* Veto Impact Analysis */}
      <div className="bg-background-darker border-l-4 border-brand-danger p-6">
        <h2 className="text-2xl font-display font-bold mb-4 text-white">Veto Impact Analysis</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-brand-danger mb-2">🚫 PS refuses N-VA</h3>
            <p className="text-gray-300 text-sm mb-2">
              This veto blocks <strong>{psNvaVetoImpact.currentlyBlockedCoalitions}</strong> potential coalitions.
              If removed, <strong>{psNvaVetoImpact.wouldBecomeViable}</strong> new options would become viable.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-danger mb-2">🚫 Open VLD requires N-VA</h3>
            <p className="text-gray-300 text-sm mb-2">
              This requirement blocks <strong>{openVldVetoImpact.currentlyBlockedCoalitions}</strong> potential coalitions.
              If removed, <strong>{openVldVetoImpact.wouldBecomeViable}</strong> new options would become viable.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-300">
            Minimum Feasibility Score: {minFeasibility}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={minFeasibility}
            onChange={(e) => setMinFeasibility(Number(e.target.value))}
            className="w-64"
          />
        </div>
        <button
          onClick={() => setShowMinimal(!showMinimal)}
          className={`px-4 py-2 font-bold transition-colors ${
            showMinimal
              ? 'bg-brand-primary text-black'
              : 'bg-background-darker text-gray-300 border border-brand-secondary hover:border-brand-primary'
          }`}
        >
          {showMinimal ? '✓ Minimal Coalitions Only' : 'Show All Viable'}
        </button>
      </div>

      {/* Coalition List */}
      <div>
        <h2 className="text-2xl font-display font-bold mb-4 text-white">
          {showMinimal ? 'Minimal Winning Coalitions' : 'Viable Coalition Options'}
          <span className="text-brand-accent ml-3">({viableCoalitions.length})</span>
        </h2>

        {viableCoalitions.length === 0 ? (
          <div className="bg-background-darker border-2 border-brand-danger p-8 text-center">
            <p className="text-brand-danger font-bold text-lg mb-2">
              ⚠️ No Viable Coalitions Found
            </p>
            <p className="text-gray-400">
              Current party vetoes make it mathematically impossible to form a government
              that meets both majority and parity requirements.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {viableCoalitions.map((coalition) => (
              <CoalitionCard key={coalition.id} coalition={coalition} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CoalitionCard({ coalition }: { coalition: Coalition }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-background-darker border-2 border-brand-secondary hover:border-brand-primary transition-colors">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              {coalition.parties.map((partyId) => {
                const party = getPartyById(partyId);
                if (!party) return null;
                return (
                  <span
                    key={partyId}
                    className="px-3 py-1 text-sm font-bold text-white"
                    style={{ backgroundColor: party.color }}
                  >
                    {party.abbreviation}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <span>
                <strong className="text-white">{coalition.totalSeats}</strong> seats
              </span>
              <span>
                <strong className="text-white">{coalition.parties.length}</strong> parties
              </span>
              <span>
                Parity: <strong className="text-white">{coalition.frenchParties.length}F + {coalition.dutchParties.length}D</strong>
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-display font-bold text-brand-primary">
              {coalition.feasibilityScore}
            </div>
            <div className="text-xs text-gray-400">Feasibility</div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="flex gap-4 text-xs">
          <div className="flex-1">
            <div className="text-gray-400 mb-1">Ideological Coherence</div>
            <div className="bg-background h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-accent"
                style={{ width: `${100 - coalition.ideologicalDistance}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t-2 border-brand-secondary p-6 bg-background">
          <h4 className="font-bold mb-3 text-white">Coalition Analysis</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-brand-accent">French-speaking parties ({coalition.frenchParties.length}):</strong>
              <ul className="mt-1 space-y-1">
                {coalition.frenchParties.map((id) => {
                  const party = getPartyById(id);
                  return party ? (
                    <li key={id} className="text-gray-300">
                      • {party.name.en} ({party.seats} seats)
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <div>
              <strong className="text-brand-accent">Dutch-speaking parties ({coalition.dutchParties.length}):</strong>
              <ul className="mt-1 space-y-1">
                {coalition.dutchParties.map((id) => {
                  const party = getPartyById(id);
                  return party ? (
                    <li key={id} className="text-gray-300">
                      • {party.name.en} ({party.seats} seats)
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-brand-secondary">
            <p className="text-xs text-gray-400">
              Ideological distance: {coalition.ideologicalDistance.toFixed(1)}/100 •
              {coalition.blockedBy.length > 0 ? ` Blocked by ${coalition.blockedBy.length} veto(es)` : ' No blocking vetoes'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
