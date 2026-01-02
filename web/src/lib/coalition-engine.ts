// Coalition Mathematics Engine
// Generates all possible coalition combinations and analyzes feasibility

import type { Coalition, Party, PolicyPosition } from '@/types/coalition';
import {
  parties,
  MAJORITY_THRESHOLD,
  calculateTotalSeats,
  meetsParityRequirement,
  isBlockedByVeto,
  getPartyById,
  policyPositions,
} from '@/data/brussels-2024-election';

/**
 * Generate all possible combinations of parties
 */
function* combinations<T>(array: T[], size: number): Generator<T[]> {
  if (size === 0) {
    yield [];
    return;
  }
  if (size > array.length) return;

  for (let i = 0; i <= array.length - size; i++) {
    const head = array[i];
    const tail = array.slice(i + 1);
    for (const combination of combinations(tail, size - 1)) {
      yield [head, ...combination];
    }
  }
}

/**
 * Calculate ideological distance between coalition partners
 * Returns 0-100 scale (0 = perfect alignment, 100 = maximum distance)
 */
function calculateIdeologicalDistance(partyIds: string[]): number {
  const coalitionParties = partyIds.map(id => getPartyById(id)).filter(Boolean) as Party[];

  if (coalitionParties.length < 2) return 0;

  // Calculate variance in economic and social positions
  const economicPositions = coalitionParties.map(p => p.ideology.economic);
  const socialPositions = coalitionParties.map(p => p.ideology.social);

  const economicRange = Math.max(...economicPositions) - Math.min(...economicPositions);
  const socialRange = Math.max(...socialPositions) - Math.min(...socialPositions);

  // Normalize to 0-100 scale (max range is 20 for each dimension)
  const distance = ((economicRange + socialRange) / 40) * 100;
  return Math.min(100, distance);
}

/**
 * Calculate policy alignment score across domains
 */
function calculatePolicyAlignment(partyIds: string[]): number {
  const domains: Array<PolicyPosition['domain']> = ['economic', 'mobility', 'housing', 'diversity', 'budget'];
  let totalAlignment = 0;
  let domainCount = 0;

  for (const domain of domains) {
    const positions = policyPositions
      .filter(p => partyIds.includes(p.partyId) && p.domain === domain)
      .map(p => p.position);

    if (positions.length >= 2) {
      const range = Math.max(...positions) - Math.min(...positions);
      const alignment = Math.max(0, 100 - (range / 20) * 100);
      totalAlignment += alignment;
      domainCount++;
    }
  }

  return domainCount > 0 ? totalAlignment / domainCount : 0;
}

/**
 * Calculate overall feasibility score
 * Factors: majority, parity, vetoes, ideological distance, policy alignment
 */
function calculateFeasibilityScore(coalition: Coalition): number {
  let score = 0;

  // Majority requirement (30 points)
  if (coalition.isMajority) score += 30;

  // Parity requirement (30 points)
  if (coalition.meetsParityRequirement) score += 30;

  // No blocking vetoes (20 points)
  if (coalition.blockedBy.length === 0) score += 20;

  // Ideological coherence (10 points)
  score += (100 - coalition.ideologicalDistance) * 0.1;

  // Policy alignment (10 points)
  const policyScore = calculatePolicyAlignment(coalition.parties);
  score += policyScore * 0.1;

  return Math.round(Math.min(100, score));
}

/**
 * Generate all possible coalitions
 */
export function generateAllCoalitions(): Coalition[] {
  const allCoalitions: Coalition[] = [];
  const partyIds = parties.map(p => p.id);

  // Generate coalitions of size 2 to 8 parties
  // (more than 8 parties in a coalition is practically infeasible)
  for (let size = 2; size <= Math.min(8, partyIds.length); size++) {
    for (const combination of combinations(partyIds, size)) {
      const totalSeats = calculateTotalSeats(combination);
      const parity = meetsParityRequirement(combination);
      const vetoCheck = isBlockedByVeto(combination);
      const ideologicalDistance = calculateIdeologicalDistance(combination);

      const frenchParties = combination.filter(id => getPartyById(id)?.linguisticGroup === 'French');
      const dutchParties = combination.filter(id => getPartyById(id)?.linguisticGroup === 'Dutch');

      const coalition: Coalition = {
        id: combination.sort().join('-'),
        parties: combination,
        totalSeats,
        isMajority: totalSeats >= MAJORITY_THRESHOLD,
        meetsParityRequirement: parity.meets,
        frenchParties,
        dutchParties,
        blockedBy: vetoCheck.vetoes.map(v => v.id),
        ideologicalDistance,
        feasibilityScore: 0, // Will be calculated below
      };

      coalition.feasibilityScore = calculateFeasibilityScore(coalition);
      allCoalitions.push(coalition);
    }
  }

  return allCoalitions;
}

/**
 * Filter coalitions by viability criteria
 */
export function getViableCoalitions(minFeasibility: number = 50): Coalition[] {
  const allCoalitions = generateAllCoalitions();

  return allCoalitions
    .filter(c => c.isMajority && c.meetsParityRequirement && c.blockedBy.length === 0)
    .filter(c => c.feasibilityScore >= minFeasibility)
    .sort((a, b) => b.feasibilityScore - a.feasibilityScore);
}

/**
 * Get minimal winning coalitions (smallest majority)
 */
export function getMinimalWinningCoalitions(): Coalition[] {
  const viable = getViableCoalitions();

  // Find the smallest coalition size that's viable
  if (viable.length === 0) return [];

  const minSize = Math.min(...viable.map(c => c.parties.length));

  return viable
    .filter(c => c.parties.length === minSize)
    .sort((a, b) => b.feasibilityScore - a.feasibilityScore);
}

/**
 * Get all coalitions blocked by specific veto
 */
export function getCoalitionsBlockedBy(vetoId: string): Coalition[] {
  const allCoalitions = generateAllCoalitions();

  return allCoalitions.filter(c => c.blockedBy.includes(vetoId));
}

/**
 * Calculate impact of removing a veto
 */
export function analyzeVetoImpact(vetoId: string): {
  vetoId: string;
  currentlyBlockedCoalitions: number;
  wouldBecomeViable: number;
  topNewOptions: Coalition[];
} {
  const allCoalitions = generateAllCoalitions();
  const currentlyBlocked = allCoalitions.filter(c =>
    c.blockedBy.includes(vetoId) &&
    c.isMajority &&
    c.meetsParityRequirement
  );

  const wouldBecomeViable = currentlyBlocked.filter(c =>
    c.blockedBy.length === 1 && // Only blocked by this veto
    c.feasibilityScore >= 50
  );

  return {
    vetoId,
    currentlyBlockedCoalitions: currentlyBlocked.length,
    wouldBecomeViable: wouldBecomeViable.length,
    topNewOptions: wouldBecomeViable
      .sort((a, b) => b.feasibilityScore - a.feasibilityScore)
      .slice(0, 5),
  };
}

/**
 * Find common ground between parties
 */
export function findPolicyCommonGround(partyIds: string[]): {
  domain: string;
  alignment: number;
  parties: { id: string; position: number }[];
}[] {
  const domains: Array<PolicyPosition['domain']> = ['economic', 'mobility', 'housing', 'diversity', 'budget'];
  const results = [];

  for (const domain of domains) {
    const positions = policyPositions
      .filter(p => partyIds.includes(p.partyId) && p.domain === domain)
      .map(p => ({ id: p.partyId, position: p.position }));

    if (positions.length >= 2) {
      const range = Math.max(...positions.map(p => p.position)) - Math.min(...positions.map(p => p.position));
      const alignment = Math.max(0, 100 - (range / 20) * 100);

      results.push({
        domain,
        alignment: Math.round(alignment),
        parties: positions,
      });
    }
  }

  return results.sort((a, b) => b.alignment - a.alignment);
}

/**
 * Generate coalition statistics
 */
export function getCoalitionStatistics(): {
  total: number;
  withMajority: number;
  withParity: number;
  viable: number;
  blocked: number;
  blockedByPSNVAVeto: number;
  blockedByOpenVLDVeto: number;
} {
  const all = generateAllCoalitions();

  return {
    total: all.length,
    withMajority: all.filter(c => c.isMajority).length,
    withParity: all.filter(c => c.meetsParityRequirement).length,
    viable: all.filter(c => c.isMajority && c.meetsParityRequirement && c.blockedBy.length === 0).length,
    blocked: all.filter(c => c.blockedBy.length > 0).length,
    blockedByPSNVAVeto: all.filter(c => c.blockedBy.includes('veto-ps-nva')).length,
    blockedByOpenVLDVeto: all.filter(c => c.blockedBy.includes('veto-openvld-requires-nva')).length,
  };
}
