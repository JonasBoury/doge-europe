// Brussels-Capital Region 2024 Election Data
// Based on June 9, 2024 election results

import type { Party, Veto, PolicyPosition, TimelineEvent } from '@/types/coalition';

export const TOTAL_SEATS = 89;
export const MAJORITY_THRESHOLD = 45;
export const REQUIRED_FRENCH_MINISTERS = 2;
export const REQUIRED_DUTCH_MINISTERS = 2;

export const parties: Party[] = [
  // French-speaking parties
  {
    id: 'ps',
    name: {
      fr: 'Parti Socialiste',
      nl: 'Socialistische Partij',
      en: 'Socialist Party',
    },
    abbreviation: 'PS',
    seats: 23,
    linguisticGroup: 'French',
    ideology: {
      economic: -6,
      social: 7,
    },
    color: '#FF0000',
    leader: 'Ahmed Laaouej',
  },
  {
    id: 'mr',
    name: {
      fr: 'Mouvement Réformateur',
      nl: 'Hervormingsbeweging',
      en: 'Reformist Movement',
    },
    abbreviation: 'MR',
    seats: 16,
    linguisticGroup: 'French',
    ideology: {
      economic: 7,
      social: 3,
    },
    color: '#0066CC',
    leader: 'David Leisterh',
  },
  {
    id: 'les-engages',
    name: {
      fr: 'Les Engagés',
      nl: 'Les Engagés',
      en: 'The Committed',
    },
    abbreviation: 'LE',
    seats: 12,
    linguisticGroup: 'French',
    ideology: {
      economic: 2,
      social: 5,
    },
    color: '#FF6600',
  },
  {
    id: 'ecolo',
    name: {
      fr: 'Ecolo',
      nl: 'Ecolo',
      en: 'Ecolo',
    },
    abbreviation: 'ECOLO',
    seats: 11,
    linguisticGroup: 'French',
    ideology: {
      economic: -4,
      social: 8,
    },
    color: '#00CC66',
  },
  {
    id: 'ptb',
    name: {
      fr: 'Parti du Travail de Belgique',
      nl: 'Partij van de Arbeid van België',
      en: 'Workers\' Party of Belgium',
    },
    abbreviation: 'PTB',
    seats: 8,
    linguisticGroup: 'French',
    ideology: {
      economic: -9,
      social: 8,
    },
    color: '#CC0000',
  },
  {
    id: 'destexhe',
    name: {
      fr: 'Destexhe Liste',
      nl: 'Destexhe Lijst',
      en: 'Destexhe List',
    },
    abbreviation: 'DEST',
    seats: 2,
    linguisticGroup: 'French',
    ideology: {
      economic: 6,
      social: -3,
    },
    color: '#9933CC',
  },

  // Dutch-speaking parties
  {
    id: 'team-fouad-ahidar',
    name: {
      fr: 'Team Fouad Ahidar',
      nl: 'Team Fouad Ahidar',
      en: 'Team Fouad Ahidar',
    },
    abbreviation: 'TFA',
    seats: 4,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: -2,
      social: 6,
    },
    color: '#FF9900',
  },
  {
    id: 'one-brussels',
    name: {
      fr: 'one.brussels',
      nl: 'one.brussels',
      en: 'one.brussels',
    },
    abbreviation: 'ONE',
    seats: 3,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: 4,
      social: 5,
    },
    color: '#00CCFF',
  },
  {
    id: 'groen',
    name: {
      fr: 'Groen',
      nl: 'Groen',
      en: 'Green',
    },
    abbreviation: 'GROEN',
    seats: 3,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: -3,
      social: 8,
    },
    color: '#00AA44',
  },
  {
    id: 'n-va',
    name: {
      fr: 'Nieuw-Vlaamse Alliantie',
      nl: 'Nieuw-Vlaamse Alliantie',
      en: 'New Flemish Alliance',
    },
    abbreviation: 'N-VA',
    seats: 3,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: 6,
      social: -4,
    },
    color: '#FFCC00',
  },
  {
    id: 'open-vld',
    name: {
      fr: 'Open Vlaamse Liberalen en Democraten',
      nl: 'Open Vlaamse Liberalen en Democraten',
      en: 'Open Flemish Liberals and Democrats',
    },
    abbreviation: 'Open VLD',
    seats: 2,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: 7,
      social: 4,
    },
    color: '#0033AA',
  },
  {
    id: 'cd-v',
    name: {
      fr: 'Christen-Democratisch en Vlaams',
      nl: 'Christen-Democratisch en Vlaams',
      en: 'Christian Democratic and Flemish',
    },
    abbreviation: 'CD&V',
    seats: 1,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: 3,
      social: 2,
    },
    color: '#FF6600',
  },
  {
    id: 'vooruit',
    name: {
      fr: 'Vooruit',
      nl: 'Vooruit',
      en: 'Forward',
    },
    abbreviation: 'Vooruit',
    seats: 1,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: -5,
      social: 6,
    },
    color: '#FF3333',
  },
  {
    id: 'vlaams-belang',
    name: {
      fr: 'Vlaams Belang',
      nl: 'Vlaams Belang',
      en: 'Flemish Interest',
    },
    abbreviation: 'VB',
    seats: 0,
    linguisticGroup: 'Dutch',
    ideology: {
      economic: 4,
      social: -7,
    },
    color: '#FFFF00',
  },
];

export const vetoes: Veto[] = [
  {
    id: 'veto-ps-nva',
    sourcePartyId: 'ps',
    targetPartyId: 'n-va',
    type: 'absolute',
    reason: 'PS refuses to work with N-VA, characterizing them as "anti-Brussels and anti-diversity"',
    dateAnnounced: '2024-06-15',
    status: 'active',
  },
  {
    id: 'veto-openvld-requires-nva',
    sourcePartyId: 'open-vld',
    targetPartyId: 'n-va',
    type: 'absolute',
    reason: 'Open VLD insists N-VA must be included in any coalition, calling PS "addicted to public spending"',
    dateAnnounced: '2024-07-10',
    status: 'active',
  },
];

export const policyPositions: PolicyPosition[] = [
  // Economic positions
  { partyId: 'ps', domain: 'economic', position: -7, keyPolicies: ['Progressive taxation', 'Social spending increase', 'Public sector expansion'] },
  { partyId: 'mr', domain: 'economic', position: 8, keyPolicies: ['Tax cuts', 'Fiscal restraint', 'Private sector growth'] },
  { partyId: 'les-engages', domain: 'economic', position: 1, keyPolicies: ['Balanced budget', 'Social market economy'] },
  { partyId: 'ecolo', domain: 'economic', position: -3, keyPolicies: ['Green investment', 'Sustainable economy'] },
  { partyId: 'ptb', domain: 'economic', position: -10, keyPolicies: ['Wealth redistribution', 'Nationalization', 'Worker ownership'] },
  { partyId: 'open-vld', domain: 'economic', position: 8, keyPolicies: ['Liberal economics', 'Deregulation', 'Tax reduction'] },
  { partyId: 'n-va', domain: 'economic', position: 7, keyPolicies: ['Fiscal responsibility', 'Budget cuts', 'Economic efficiency'] },

  // Mobility positions
  { partyId: 'ps', domain: 'mobility', position: -6, keyPolicies: ['Public transport expansion', 'Car restrictions in city center'] },
  { partyId: 'mr', domain: 'mobility', position: 6, keyPolicies: ['Car access protection', 'Infrastructure investment', 'Parking expansion'] },
  { partyId: 'ecolo', domain: 'mobility', position: -9, keyPolicies: ['Car-free zones', 'Cycling infrastructure', 'Congestion pricing'] },
  { partyId: 'groen', domain: 'mobility', position: -9, keyPolicies: ['Sustainable transport', 'Pedestrian priority', 'Low emission zones'] },

  // Housing positions
  { partyId: 'ps', domain: 'housing', position: -8, keyPolicies: ['Social housing expansion', 'Rent controls', 'Public housing investment'] },
  { partyId: 'mr', domain: 'housing', position: 7, keyPolicies: ['Market-based solutions', 'Private development', 'Property rights'] },
  { partyId: 'ecolo', domain: 'housing', position: -6, keyPolicies: ['Affordable housing', 'Energy-efficient buildings', 'Community land trusts'] },
  { partyId: 'ptb', domain: 'housing', position: -10, keyPolicies: ['Massive social housing program', 'Expropriation of empty properties'] },

  // Diversity positions
  { partyId: 'ps', domain: 'diversity', position: 8, keyPolicies: ['Multiculturalism', 'Anti-discrimination laws', 'Inclusive policies'] },
  { partyId: 'mr', domain: 'diversity', position: 4, keyPolicies: ['Integration requirements', 'Secular values', 'Merit-based approach'] },
  { partyId: 'n-va', domain: 'diversity', position: -6, keyPolicies: ['Flemish identity', 'Integration obligations', 'Cultural assimilation'] },
  { partyId: 'ecolo', domain: 'diversity', position: 9, keyPolicies: ['Inclusive society', 'Anti-racism', 'Cultural diversity celebration'] },

  // Budget positions
  { partyId: 'ps', domain: 'budget', position: -7, keyPolicies: ['Revenue increases (taxes)', 'Maintain social spending', 'Investment in services'] },
  { partyId: 'mr', domain: 'budget', position: 9, keyPolicies: ['Spending cuts', 'Efficiency gains', 'No new taxes'] },
  { partyId: 'les-engages', domain: 'budget', position: 2, keyPolicies: ['Balanced approach', 'Targeted reforms', 'Sustainable finances'] },
  { partyId: 'open-vld', domain: 'budget', position: 8, keyPolicies: ['Austerity measures', 'Budget discipline', 'Cost reduction'] },
];

export const timeline: TimelineEvent[] = [
  {
    id: 'event-election',
    date: '2024-06-09',
    type: 'election',
    title: 'Brussels-Capital Region Elections',
    description: 'Regional elections result in 14 parties represented, with PS winning 23 seats (largest party)',
    significance: 'critical',
  },
  {
    id: 'event-ps-veto',
    date: '2024-06-15',
    type: 'veto_announced',
    title: 'PS Announces N-VA Veto',
    description: 'PS leader declares absolute refusal to work with N-VA, citing anti-Brussels stance',
    parties: ['ps', 'n-va'],
    significance: 'critical',
  },
  {
    id: 'event-formateur-1',
    date: '2024-06-20',
    type: 'formateur_appointed',
    title: 'First Formateur Appointed',
    description: 'Initial formateur tasked with exploring coalition possibilities',
    significance: 'major',
  },
  {
    id: 'event-openvld-veto',
    date: '2024-07-10',
    type: 'veto_announced',
    title: 'Open VLD Demands N-VA Inclusion',
    description: 'Open VLD announces they will only join coalitions including N-VA, creating mirror veto to PS position',
    parties: ['open-vld', 'n-va'],
    significance: 'critical',
  },
  {
    id: 'event-formation-failed-1',
    date: '2024-08-30',
    type: 'formation_failed',
    title: 'First Formation Attempt Fails',
    description: 'Initial coalition attempt collapses due to mutual party vetoes',
    significance: 'major',
  },
  {
    id: 'event-budget-crisis',
    date: '2024-11-15',
    type: 'other',
    title: 'Budget Crisis Deepens',
    description: 'Brussels Region faces mounting budget deficit without full government to address fiscal challenges',
    significance: 'critical',
  },
  {
    id: 'event-200-days',
    date: '2024-12-26',
    type: 'other',
    title: '200 Days Without Government',
    description: 'Crisis reaches 200-day milestone with no resolution in sight',
    significance: 'major',
  },
  {
    id: 'event-500-days',
    date: '2025-10-22',
    type: 'other',
    title: '500 Days Without Government',
    description: 'Deadlock continues past 500 days, approaching Belgian record for regional government formation',
    significance: 'critical',
  },
  {
    id: 'event-current',
    date: '2026-01-02',
    type: 'other',
    title: '572 Days and Counting',
    description: 'Government formation crisis continues with no breakthrough, multiple formateurs have failed',
    significance: 'critical',
  },
];

// Helper functions
export function getPartyById(id: string): Party | undefined {
  return parties.find(p => p.id === id);
}

export function getPartiesByLanguage(language: 'French' | 'Dutch'): Party[] {
  return parties.filter(p => p.linguisticGroup === language);
}

export function calculateTotalSeats(partyIds: string[]): number {
  return partyIds.reduce((sum, id) => {
    const party = getPartyById(id);
    return sum + (party?.seats || 0);
  }, 0);
}

export function meetsParityRequirement(partyIds: string[]): { meets: boolean; french: number; dutch: number } {
  const frenchParties = partyIds.filter(id => getPartyById(id)?.linguisticGroup === 'French');
  const dutchParties = partyIds.filter(id => getPartyById(id)?.linguisticGroup === 'Dutch');

  return {
    meets: frenchParties.length >= REQUIRED_FRENCH_MINISTERS && dutchParties.length >= REQUIRED_DUTCH_MINISTERS,
    french: frenchParties.length,
    dutch: dutchParties.length,
  };
}

export function isBlockedByVeto(partyIds: string[]): { blocked: boolean; vetoes: Veto[] } {
  const activeVetoes = vetoes.filter(v => v.status === 'active');
  const blockingVetoes: Veto[] = [];

  for (const veto of activeVetoes) {
    const hasSource = partyIds.includes(veto.sourcePartyId);
    const hasTarget = partyIds.includes(veto.targetPartyId);

    if (veto.type === 'absolute' && hasSource && hasTarget) {
      blockingVetoes.push(veto);
    }

    // Special case: Open VLD requires N-VA
    if (veto.id === 'veto-openvld-requires-nva' && hasSource && !hasTarget) {
      blockingVetoes.push(veto);
    }
  }

  return {
    blocked: blockingVetoes.length > 0,
    vetoes: blockingVetoes,
  };
}
