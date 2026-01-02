'use client';

import { useState, useMemo } from 'react';
import { parties } from '@/data/brussels-2024-election';
import { policyPositions, topicDisplayNames, type PolicyTopic, policyTopics } from '@/data/brussels-policy-positions';

interface CoalitionCompatibility {
  parties: string[];
  totalSeats: number;
  compatibilityScore: number;
  criticalGaps: { topic: string; distance: number; negotiable: boolean }[];
  strongAlignments: { topic: string; avgPosition: number }[];
  recommendation: string;
}

export default function PolicyDistanceCalculator() {
  const [selectedParties, setSelectedParties] = useState<string[]>(['ps', 'les-engages', 'ecolo', 'team-fouad-ahidar', 'groen']);
  const [selectedTopic, setSelectedTopic] = useState<PolicyTopic | 'all'>('all');

  // Calculate policy distance between two parties on a specific topic
  const calculatePolicyDistance = (party1: string, party2: string, topic: PolicyTopic): number => {
    const p1Pos = policyPositions.find(p => p.party === party1 && p.topic === topic);
    const p2Pos = policyPositions.find(p => p.party === party2 && p.topic === topic);

    if (!p1Pos || !p2Pos) return 0;

    // Distance weighted by priority and reduced by flexibility
    const rawDistance = Math.abs(p1Pos.position - p2Pos.position);
    const avgPriority = (p1Pos.priority + p2Pos.priority) / 2;
    const avgFlexibility = (p1Pos.flexibility + p2Pos.flexibility) / 2;

    // Higher priority increases impact, higher flexibility reduces impact
    const weightedDistance = (rawDistance * avgPriority) / (1 + avgFlexibility);

    return weightedDistance;
  };

  // Calculate coalition compatibility
  const coalitionAnalysis = useMemo((): CoalitionCompatibility => {
    if (selectedParties.length < 2) {
      return {
        parties: selectedParties,
        totalSeats: 0,
        compatibilityScore: 0,
        criticalGaps: [],
        strongAlignments: [],
        recommendation: 'Select at least 2 parties to analyze coalition compatibility.'
      };
    }

    const totalSeats = selectedParties.reduce((sum, partyId) => {
      const party = parties.find(p => p.id === partyId);
      return sum + (party?.seats || 0);
    }, 0);

    // Calculate distances for each policy topic
    const topicAnalysis = policyTopics.map(topic => {
      let totalDistance = 0;
      let pairCount = 0;
      let maxDistance = 0;
      let positions: number[] = [];

      // Get all positions for this topic
      selectedParties.forEach(partyId => {
        const pos = policyPositions.find(p => p.party === partyId && p.topic === topic);
        if (pos) positions.push(pos.position);
      });

      // Calculate pairwise distances
      for (let i = 0; i < selectedParties.length; i++) {
        for (let j = i + 1; j < selectedParties.length; j++) {
          const distance = calculatePolicyDistance(selectedParties[i], selectedParties[j], topic);
          totalDistance += distance;
          maxDistance = Math.max(maxDistance, distance);
          pairCount++;
        }
      }

      const avgDistance = pairCount > 0 ? totalDistance / pairCount : 0;
      const avgPosition = positions.length > 0 ? positions.reduce((a, b) => a + b, 0) / positions.length : 0;

      // Check if negotiable (high flexibility on average)
      const topicPositions = selectedParties.map(partyId =>
        policyPositions.find(p => p.party === partyId && p.topic === topic)
      ).filter(p => p !== undefined);
      const avgFlexibility = topicPositions.reduce((sum, p) => sum + (p?.flexibility || 0), 0) / topicPositions.length;
      const negotiable = avgFlexibility >= 5;

      return {
        topic,
        avgDistance,
        maxDistance,
        avgPosition,
        negotiable,
        positions: topicPositions
      };
    });

    // Identify critical gaps (high distance, low flexibility)
    const criticalGaps = topicAnalysis
      .filter(t => t.avgDistance > 5)
      .sort((a, b) => b.avgDistance - a.avgDistance)
      .slice(0, 5)
      .map(t => ({
        topic: topicDisplayNames[t.topic as PolicyTopic],
        distance: Math.round(t.avgDistance * 10) / 10,
        negotiable: t.negotiable
      }));

    // Identify strong alignments (low distance, high agreement)
    const strongAlignments = topicAnalysis
      .filter(t => t.avgDistance < 3)
      .sort((a, b) => a.avgDistance - b.avgDistance)
      .slice(0, 5)
      .map(t => ({
        topic: topicDisplayNames[t.topic as PolicyTopic],
        avgPosition: Math.round(t.avgPosition * 10) / 10
      }));

    // Calculate overall compatibility score (0-100)
    const avgTopicDistance = topicAnalysis.reduce((sum, t) => sum + t.avgDistance, 0) / topicAnalysis.length;
    const compatibilityScore = Math.max(0, Math.min(100, 100 - (avgTopicDistance * 5)));

    // Generate recommendation
    let recommendation = '';
    if (totalSeats >= 45) {
      if (compatibilityScore >= 70) {
        recommendation = `✅ HIGHLY VIABLE: This coalition has ${totalSeats} seats (majority) and strong policy alignment (${Math.round(compatibilityScore)}% compatibility). Recommended to pursue.`;
      } else if (compatibilityScore >= 50) {
        recommendation = `⚠️ MODERATELY VIABLE: This coalition has ${totalSeats} seats (majority) but moderate policy tensions (${Math.round(compatibilityScore)}% compatibility). Requires negotiation on ${criticalGaps.length} critical policy gaps.`;
      } else {
        recommendation = `❌ DIFFICULT: This coalition has ${totalSeats} seats (majority) but significant policy incompatibilities (${Math.round(compatibilityScore)}% compatibility). Major compromises required on ${criticalGaps.filter(g => !g.negotiable).length} non-negotiable issues.`;
      }
    } else {
      recommendation = `❌ INSUFFICIENT MAJORITY: This coalition has only ${totalSeats} seats (needs 45). Cannot form government regardless of policy compatibility.`;
    }

    return {
      parties: selectedParties,
      totalSeats,
      compatibilityScore: Math.round(compatibilityScore),
      criticalGaps,
      strongAlignments,
      recommendation
    };
  }, [selectedParties]);

  // Get policy positions for selected topic
  const topicPositions = useMemo(() => {
    if (selectedTopic === 'all') return [];

    return selectedParties.map(partyId => {
      const party = parties.find(p => p.id === partyId);
      const position = policyPositions.find(p => p.party === partyId && p.topic === selectedTopic);
      return {
        party: party?.abbreviation || partyId,
        partyId,
        color: party?.color || '#999',
        ...position
      };
    }).filter(p => p.position !== undefined);
  }, [selectedParties, selectedTopic]);

  const toggleParty = (partyId: string) => {
    setSelectedParties(prev =>
      prev.includes(partyId)
        ? prev.filter(p => p !== partyId)
        : [...prev, partyId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-display font-bold mb-4 text-white">
          AI Policy Distance Calculator
        </h2>
        <p className="text-gray-400 mb-4">
          Quantifies coalition viability based on documented policy positions, priorities, and flexibility.
          Select parties to analyze compatibility and identify negotiation obstacles.
        </p>
      </div>

      {/* Party Selection */}
      <div className="bg-background-darker border-2 border-brand-secondary p-6">
        <h3 className="font-bold text-white mb-4">Select Parties for Coalition Analysis</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {parties.filter(p => p.seats > 0).map(party => (
            <button
              key={party.id}
              onClick={() => toggleParty(party.id)}
              className={`p-3 border-2 transition-all ${
                selectedParties.includes(party.id)
                  ? 'border-brand-accent bg-brand-accent bg-opacity-20'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <div className="font-bold text-white text-sm" style={{ color: party.color }}>
                {party.abbreviation}
              </div>
              <div className="text-xs text-gray-400">{party.seats} seats</div>
            </button>
          ))}
        </div>
      </div>

      {/* Compatibility Score */}
      <div className="bg-background-darker border-2 border-brand-accent p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Coalition Compatibility Analysis
          </h3>
          <div className="text-right">
            <div className="text-4xl font-display font-bold text-brand-accent">
              {coalitionAnalysis.compatibilityScore}/100
            </div>
            <div className="text-sm text-gray-400">Compatibility Score</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${coalitionAnalysis.compatibilityScore}%`,
                backgroundColor: coalitionAnalysis.compatibilityScore >= 70 ? '#00D9FF' :
                                coalitionAnalysis.compatibilityScore >= 50 ? '#FFD700' : '#FF0054'
              }}
            />
          </div>
        </div>

        <div className="bg-background p-4 border-l-4 border-brand-accent">
          <p className="text-white font-bold mb-2">Recommendation:</p>
          <p className="text-gray-300">{coalitionAnalysis.recommendation}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <h4 className="font-bold text-brand-danger mb-3">🚨 Critical Policy Gaps</h4>
            {coalitionAnalysis.criticalGaps.length > 0 ? (
              <div className="space-y-2">
                {coalitionAnalysis.criticalGaps.map((gap, i) => (
                  <div key={i} className="bg-background p-3 border-l-2 border-brand-danger">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-sm">{gap.topic}</span>
                      <span className="text-brand-danger font-mono text-sm">Δ {gap.distance}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {gap.negotiable ? '✓ Negotiable (parties show flexibility)' : '✗ Non-negotiable (red lines)'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No critical gaps identified - strong policy alignment!</p>
            )}
          </div>

          <div>
            <h4 className="font-bold text-brand-accent mb-3">✅ Strong Policy Alignments</h4>
            {coalitionAnalysis.strongAlignments.length > 0 ? (
              <div className="space-y-2">
                {coalitionAnalysis.strongAlignments.map((alignment, i) => (
                  <div key={i} className="bg-background p-3 border-l-2 border-brand-accent">
                    <div className="text-white font-bold text-sm">{alignment.topic}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Coalition consensus position: {alignment.avgPosition > 0 ? '+' : ''}{alignment.avgPosition}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No strong alignments - parties have divergent positions.</p>
            )}
          </div>
        </div>
      </div>

      {/* Policy Topic Detail View */}
      <div className="bg-background-darker border-2 border-brand-secondary p-6">
        <h3 className="font-bold text-white mb-4">Policy Position Detail</h3>

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value as PolicyTopic | 'all')}
          className="w-full bg-background text-white border-2 border-brand-secondary p-3 mb-4"
        >
          <option value="all">Select a policy topic to view positions...</option>
          {policyTopics.map(topic => (
            <option key={topic} value={topic}>{topicDisplayNames[topic]}</option>
          ))}
        </select>

        {selectedTopic !== 'all' && (
          <div className="space-y-4">
            <div className="bg-background p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">← Left (-10)</span>
                <span className="text-white font-bold">{topicDisplayNames[selectedTopic]}</span>
                <span className="text-gray-400 text-sm">Right (+10) →</span>
              </div>

              {/* Position scale */}
              <div className="relative h-16 bg-gray-700 rounded">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500" />

                {/* Party positions */}
                {topicPositions.map((pos, i) => {
                  const leftPercent = ((pos.position! + 10) / 20) * 100;
                  return (
                    <div
                      key={pos.partyId}
                      className="absolute top-0 bottom-0 flex items-center"
                      style={{ left: `${leftPercent}%` }}
                    >
                      <div className="relative group">
                        <div
                          className="w-4 h-4 rounded-full border-2 border-white cursor-pointer"
                          style={{ backgroundColor: pos.color }}
                        />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black border-2 border-brand-accent p-2 text-xs whitespace-nowrap z-10">
                          <div className="font-bold" style={{ color: pos.color }}>{pos.party}</div>
                          <div className="text-gray-300">Position: {pos.position}</div>
                          <div className="text-gray-400">Priority: {pos.priority}/10</div>
                          <div className="text-gray-400">Flexibility: {pos.flexibility}/10</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Position details */}
            <div className="grid md:grid-cols-2 gap-3">
              {topicPositions.map(pos => (
                <div key={pos.partyId} className="bg-background p-3 border-l-4" style={{ borderColor: pos.color }}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-white">{pos.party}</span>
                    <div className="text-right">
                      <div className="text-sm font-mono text-gray-300">Position: {pos.position}</div>
                      <div className="text-xs text-gray-500">
                        Priority: {pos.priority}/10 | Flexibility: {pos.flexibility}/10
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{pos.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Methodology */}
      <div className="bg-background-darker border-l-4 border-brand-warning p-6">
        <h3 className="font-bold text-brand-warning mb-3">📊 Methodology</h3>
        <div className="text-sm text-gray-300 space-y-2">
          <p><strong>Policy Position:</strong> Scaled -10 (far left) to +10 (far right) based on party manifestos and voting records.</p>
          <p><strong>Priority:</strong> 1-10 scale indicating how important this policy is to the party (10 = core platform issue).</p>
          <p><strong>Flexibility:</strong> 0-10 scale indicating willingness to compromise (0 = red line, 10 = very negotiable).</p>
          <p><strong>Weighted Distance:</strong> Distance = (|Position1 - Position2| × Avg Priority) / (1 + Avg Flexibility)</p>
          <p><strong>Compatibility Score:</strong> 100 - (Average Weighted Distance × 5), capped at 0-100.</p>
          <p><strong>Negotiable:</strong> Average flexibility ≥ 5 suggests parties could compromise on this issue.</p>
        </div>
      </div>
    </div>
  );
}
