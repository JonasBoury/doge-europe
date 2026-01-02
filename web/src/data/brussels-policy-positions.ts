/**
 * Brussels 2024 Party Policy Positions
 *
 * Positions are scaled -10 (far left) to +10 (far right) for economic policies
 * and 0-10 for non-economic policies where appropriate
 *
 * Priority: 1-10 (how important this policy is to the party)
 * Flexibility: 0-10 (how willing to compromise - 0 = red line, 10 = very flexible)
 */

export interface PolicyPosition {
  party: string;
  topic: string;
  position: number;
  priority: number;
  flexibility: number;
  description: string;
}

export const policyTopics = [
  'taxation',
  'public_spending',
  'budget_discipline',
  'housing_investment',
  'mobility_congestion_pricing',
  'car_free_zones',
  'public_transport_investment',
  'environmental_regulation',
  'diversity_integration',
  'linguistic_parity',
  'brussels_autonomy',
] as const;

export type PolicyTopic = typeof policyTopics[number];

export const policyPositions: PolicyPosition[] = [
  // PS (Parti Socialiste) - Left, 23 seats
  { party: 'ps', topic: 'taxation', position: -7, priority: 9, flexibility: 3, description: 'Progressive taxation, wealth tax' },
  { party: 'ps', topic: 'public_spending', position: -8, priority: 10, flexibility: 2, description: 'Increase social spending significantly' },
  { party: 'ps', topic: 'budget_discipline', position: -6, priority: 4, flexibility: 6, description: 'Balanced budget not immediate priority' },
  { party: 'ps', topic: 'housing_investment', position: 10, priority: 10, flexibility: 2, description: 'Massive public housing investment' },
  { party: 'ps', topic: 'mobility_congestion_pricing', position: 6, priority: 6, flexibility: 7, description: 'Support congestion pricing with caveats' },
  { party: 'ps', topic: 'car_free_zones', position: 7, priority: 5, flexibility: 8, description: 'Support car-free zones' },
  { party: 'ps', topic: 'public_transport_investment', position: 10, priority: 9, flexibility: 3, description: 'Major public transport expansion' },
  { party: 'ps', topic: 'environmental_regulation', position: 7, priority: 7, flexibility: 5, description: 'Strong environmental standards' },
  { party: 'ps', topic: 'diversity_integration', position: 9, priority: 10, flexibility: 0, description: 'Pro-diversity, multicultural Brussels' },
  { party: 'ps', topic: 'linguistic_parity', position: 8, priority: 8, flexibility: 4, description: 'Respect parity but French-dominant' },
  { party: 'ps', topic: 'brussels_autonomy', position: 8, priority: 8, flexibility: 5, description: 'More autonomy for Brussels' },

  // MR (Mouvement Réformateur) - Center-Right, 16 seats
  { party: 'mr', topic: 'taxation', position: 7, priority: 10, flexibility: 2, description: 'Tax cuts, especially income tax' },
  { party: 'mr', topic: 'public_spending', position: 6, priority: 9, flexibility: 3, description: 'Reduce public spending, efficiency' },
  { party: 'mr', topic: 'budget_discipline', position: 9, priority: 10, flexibility: 1, description: 'Immediate balanced budget priority' },
  { party: 'mr', topic: 'housing_investment', position: 3, priority: 5, flexibility: 6, description: 'Private sector housing solutions' },
  { party: 'mr', topic: 'mobility_congestion_pricing', position: -2, priority: 7, flexibility: 4, description: 'Oppose congestion pricing (anti-car)' },
  { party: 'mr', topic: 'car_free_zones', position: -4, priority: 6, flexibility: 5, description: 'Skeptical of car-free zones' },
  { party: 'mr', topic: 'public_transport_investment', position: 4, priority: 6, flexibility: 7, description: 'Moderate transport investment' },
  { party: 'mr', topic: 'environmental_regulation', position: 2, priority: 4, flexibility: 6, description: 'Balanced environmental approach' },
  { party: 'mr', topic: 'diversity_integration', position: 5, priority: 6, flexibility: 5, description: 'Integration with expectations' },
  { party: 'mr', topic: 'linguistic_parity', position: 7, priority: 8, flexibility: 3, description: 'Strong support for parity' },
  { party: 'mr', topic: 'brussels_autonomy', position: 6, priority: 7, flexibility: 5, description: 'Support Brussels autonomy' },

  // Les Engagés - Center, 12 seats
  { party: 'les-engages', topic: 'taxation', position: 1, priority: 6, flexibility: 7, description: 'Moderate taxation, social market' },
  { party: 'les-engages', topic: 'public_spending', position: 0, priority: 7, flexibility: 6, description: 'Balanced spending approach' },
  { party: 'les-engages', topic: 'budget_discipline', position: 8, priority: 9, flexibility: 3, description: 'Fiscal responsibility essential' },
  { party: 'les-engages', topic: 'housing_investment', position: 6, priority: 8, flexibility: 6, description: 'Public-private housing partnerships' },
  { party: 'les-engages', topic: 'mobility_congestion_pricing', position: 3, priority: 5, flexibility: 8, description: 'Open to congestion pricing if fair' },
  { party: 'les-engages', topic: 'car_free_zones', position: 4, priority: 4, flexibility: 8, description: 'Pragmatic on car-free zones' },
  { party: 'les-engages', topic: 'public_transport_investment', position: 7, priority: 7, flexibility: 6, description: 'Support public transport' },
  { party: 'les-engages', topic: 'environmental_regulation', position: 6, priority: 7, flexibility: 6, description: 'Environmental stewardship' },
  { party: 'les-engages', topic: 'diversity_integration', position: 7, priority: 7, flexibility: 5, description: 'Integration with support' },
  { party: 'les-engages', topic: 'linguistic_parity', position: 9, priority: 9, flexibility: 2, description: 'Strong commitment to parity' },
  { party: 'les-engages', topic: 'brussels_autonomy', position: 7, priority: 7, flexibility: 5, description: 'Respect Brussels identity' },

  // Ecolo - Green Left, 11 seats
  { party: 'ecolo', topic: 'taxation', position: -6, priority: 7, flexibility: 5, description: 'Environmental taxation, wealth tax' },
  { party: 'ecolo', topic: 'public_spending', position: -5, priority: 8, flexibility: 4, description: 'Invest in green transition' },
  { party: 'ecolo', topic: 'budget_discipline', position: -4, priority: 5, flexibility: 7, description: 'Long-term sustainability over austerity' },
  { party: 'ecolo', topic: 'housing_investment', position: 9, priority: 9, flexibility: 3, description: 'Sustainable social housing' },
  { party: 'ecolo', topic: 'mobility_congestion_pricing', position: 9, priority: 9, flexibility: 3, description: 'Strong support for congestion pricing' },
  { party: 'ecolo', topic: 'car_free_zones', position: 10, priority: 10, flexibility: 1, description: 'Extensive car-free zones priority' },
  { party: 'ecolo', topic: 'public_transport_investment', position: 10, priority: 10, flexibility: 2, description: 'Massive public transport expansion' },
  { party: 'ecolo', topic: 'environmental_regulation', position: 10, priority: 10, flexibility: 1, description: 'Strict environmental standards' },
  { party: 'ecolo', topic: 'diversity_integration', position: 9, priority: 9, flexibility: 2, description: 'Inclusive, multicultural society' },
  { party: 'ecolo', topic: 'linguistic_parity', position: 8, priority: 7, flexibility: 5, description: 'Support parity, inclusivity' },
  { party: 'ecolo', topic: 'brussels_autonomy', position: 8, priority: 8, flexibility: 4, description: 'Strong Brussels autonomy' },

  // PTB (Parti du Travail) - Far Left, 8 seats
  { party: 'ptb', topic: 'taxation', position: -10, priority: 10, flexibility: 0, description: 'Wealth redistribution, high taxes on rich' },
  { party: 'ptb', topic: 'public_spending', position: -10, priority: 10, flexibility: 0, description: 'Massive public investment' },
  { party: 'ptb', topic: 'budget_discipline', position: -9, priority: 2, flexibility: 2, description: 'Reject austerity completely' },
  { party: 'ptb', topic: 'housing_investment', position: 10, priority: 10, flexibility: 0, description: 'Universal public housing' },
  { party: 'ptb', topic: 'mobility_congestion_pricing', position: -3, priority: 6, flexibility: 5, description: 'Skeptical - regressive for workers' },
  { party: 'ptb', topic: 'car_free_zones', position: 5, priority: 4, flexibility: 7, description: 'Support if alternatives exist' },
  { party: 'ptb', topic: 'public_transport_investment', position: 10, priority: 10, flexibility: 1, description: 'Free public transport for all' },
  { party: 'ptb', topic: 'environmental_regulation', position: 8, priority: 8, flexibility: 3, description: 'Environmental justice' },
  { party: 'ptb', topic: 'diversity_integration', position: 9, priority: 9, flexibility: 2, description: 'Workers solidarity across communities' },
  { party: 'ptb', topic: 'linguistic_parity', position: 6, priority: 5, flexibility: 7, description: 'Class over linguistic divisions' },
  { party: 'ptb', topic: 'brussels_autonomy', position: 7, priority: 6, flexibility: 6, description: 'Support local control' },

  // Team Fouad Ahidar (TFA) - Dutch Left, 4 seats
  { party: 'team-fouad-ahidar', topic: 'taxation', position: -5, priority: 7, flexibility: 6, description: 'Progressive taxation' },
  { party: 'team-fouad-ahidar', topic: 'public_spending', position: -6, priority: 8, flexibility: 5, description: 'Social investment priority' },
  { party: 'team-fouad-ahidar', topic: 'budget_discipline', position: -3, priority: 5, flexibility: 7, description: 'Flexibility for social needs' },
  { party: 'team-fouad-ahidar', topic: 'housing_investment', position: 9, priority: 10, flexibility: 2, description: 'Affordable housing crisis priority' },
  { party: 'team-fouad-ahidar', topic: 'mobility_congestion_pricing', position: 4, priority: 5, flexibility: 7, description: 'Support with exemptions' },
  { party: 'team-fouad-ahidar', topic: 'car_free_zones', position: 6, priority: 5, flexibility: 7, description: 'Support livable neighborhoods' },
  { party: 'team-fouad-ahidar', topic: 'public_transport_investment', position: 9, priority: 9, flexibility: 3, description: 'Public transport expansion' },
  { party: 'team-fouad-ahidar', topic: 'environmental_regulation', position: 7, priority: 7, flexibility: 5, description: 'Environmental justice' },
  { party: 'team-fouad-ahidar', topic: 'diversity_integration', position: 10, priority: 10, flexibility: 0, description: 'Multicultural Brussels identity' },
  { party: 'team-fouad-ahidar', topic: 'linguistic_parity', position: 7, priority: 8, flexibility: 4, description: 'Respect parity, Brussels-focused' },
  { party: 'team-fouad-ahidar', topic: 'brussels_autonomy', position: 9, priority: 9, flexibility: 2, description: 'Strong Brussels autonomy' },

  // one.brussels - Dutch Liberal, 3 seats
  { party: 'one-brussels', topic: 'taxation', position: 5, priority: 7, flexibility: 5, description: 'Moderate taxation, business-friendly' },
  { party: 'one-brussels', topic: 'public_spending', position: 3, priority: 6, flexibility: 6, description: 'Efficient spending' },
  { party: 'one-brussels', topic: 'budget_discipline', position: 7, priority: 8, flexibility: 4, description: 'Fiscal responsibility' },
  { party: 'one-brussels', topic: 'housing_investment', position: 5, priority: 7, flexibility: 7, description: 'Mixed housing solutions' },
  { party: 'one-brussels', topic: 'mobility_congestion_pricing', position: 5, priority: 6, flexibility: 7, description: 'Pragmatic mobility solutions' },
  { party: 'one-brussels', topic: 'car_free_zones', position: 3, priority: 4, flexibility: 8, description: 'Selective car-free zones' },
  { party: 'one-brussels', topic: 'public_transport_investment', position: 7, priority: 8, flexibility: 6, description: 'Modernize public transport' },
  { party: 'one-brussels', topic: 'environmental_regulation', position: 6, priority: 7, flexibility: 6, description: 'Sustainable development' },
  { party: 'one-brussels', topic: 'diversity_integration', position: 7, priority: 8, flexibility: 5, description: 'Inclusive Brussels identity' },
  { party: 'one-brussels', topic: 'linguistic_parity', position: 8, priority: 9, flexibility: 3, description: 'Bilingual Brussels equality' },
  { party: 'one-brussels', topic: 'brussels_autonomy', position: 9, priority: 10, flexibility: 2, description: 'Maximum Brussels autonomy' },

  // Groen - Dutch Green, 3 seats
  { party: 'groen', topic: 'taxation', position: -6, priority: 7, flexibility: 5, description: 'Environmental taxation' },
  { party: 'groen', topic: 'public_spending', position: -5, priority: 7, flexibility: 5, description: 'Green investment' },
  { party: 'groen', topic: 'budget_discipline', position: -3, priority: 5, flexibility: 7, description: 'Long-term sustainability focus' },
  { party: 'groen', topic: 'housing_investment', position: 9, priority: 9, flexibility: 3, description: 'Sustainable social housing' },
  { party: 'groen', topic: 'mobility_congestion_pricing', position: 9, priority: 9, flexibility: 3, description: 'Strong support for congestion pricing' },
  { party: 'groen', topic: 'car_free_zones', position: 10, priority: 10, flexibility: 1, description: 'Extensive car-free zones' },
  { party: 'groen', topic: 'public_transport_investment', position: 10, priority: 10, flexibility: 2, description: 'Major public transport expansion' },
  { party: 'groen', topic: 'environmental_regulation', position: 10, priority: 10, flexibility: 1, description: 'Strict environmental standards' },
  { party: 'groen', topic: 'diversity_integration', position: 9, priority: 9, flexibility: 2, description: 'Inclusive society' },
  { party: 'groen', topic: 'linguistic_parity', position: 8, priority: 8, flexibility: 4, description: 'Support parity and inclusivity' },
  { party: 'groen', topic: 'brussels_autonomy', position: 8, priority: 8, flexibility: 4, description: 'Brussels autonomy' },

  // N-VA - Dutch Nationalist Right, 3 seats
  { party: 'n-va', topic: 'taxation', position: 8, priority: 9, flexibility: 2, description: 'Lower taxes, fiscal conservatism' },
  { party: 'n-va', topic: 'public_spending', position: 7, priority: 9, flexibility: 2, description: 'Reduce public spending' },
  { party: 'n-va', topic: 'budget_discipline', position: 10, priority: 10, flexibility: 0, description: 'Strict budget discipline' },
  { party: 'n-va', topic: 'housing_investment', position: 2, priority: 4, flexibility: 5, description: 'Market-based housing' },
  { party: 'n-va', topic: 'mobility_congestion_pricing', position: -5, priority: 7, flexibility: 3, description: 'Oppose anti-car policies' },
  { party: 'n-va', topic: 'car_free_zones', position: -7, priority: 8, flexibility: 2, description: 'Strong opposition to car-free zones' },
  { party: 'n-va', topic: 'public_transport_investment', position: 3, priority: 5, flexibility: 6, description: 'Moderate transport investment' },
  { party: 'n-va', topic: 'environmental_regulation', position: 1, priority: 4, flexibility: 5, description: 'Balanced environmental approach' },
  { party: 'n-va', topic: 'diversity_integration', position: -2, priority: 9, flexibility: 1, description: 'Integration requirements, Flemish identity' },
  { party: 'n-va', topic: 'linguistic_parity', position: 10, priority: 10, flexibility: 0, description: 'Flemish rights absolute priority' },
  { party: 'n-va', topic: 'brussels_autonomy', position: -3, priority: 8, flexibility: 2, description: 'Flemish influence in Brussels' },

  // Open VLD - Dutch Liberal, 2 seats
  { party: 'open-vld', topic: 'taxation', position: 8, priority: 10, flexibility: 1, description: 'Major tax cuts' },
  { party: 'open-vld', topic: 'public_spending', position: 8, priority: 10, flexibility: 1, description: 'Reduce government size' },
  { party: 'open-vld', topic: 'budget_discipline', position: 10, priority: 10, flexibility: 0, description: 'Immediate balanced budget' },
  { party: 'open-vld', topic: 'housing_investment', position: 1, priority: 3, flexibility: 4, description: 'Private sector solutions' },
  { party: 'open-vld', topic: 'mobility_congestion_pricing', position: -6, priority: 8, flexibility: 2, description: 'Strong opposition to congestion pricing' },
  { party: 'open-vld', topic: 'car_free_zones', position: -8, priority: 8, flexibility: 2, description: 'Oppose car-free zones' },
  { party: 'open-vld', topic: 'public_transport_investment', position: 2, priority: 4, flexibility: 6, description: 'Limited public transport investment' },
  { party: 'open-vld', topic: 'environmental_regulation', position: 0, priority: 3, flexibility: 6, description: 'Market-based environmental solutions' },
  { party: 'open-vld', topic: 'diversity_integration', position: 2, priority: 6, flexibility: 4, description: 'Integration expectations' },
  { party: 'open-vld', topic: 'linguistic_parity', position: 10, priority: 10, flexibility: 0, description: 'Absolute parity requirement' },
  { party: 'open-vld', topic: 'brussels_autonomy', position: 5, priority: 6, flexibility: 6, description: 'Moderate on Brussels autonomy' },

  // CD&V - Dutch Christian Democrat, 1 seat
  { party: 'cd-v', topic: 'taxation', position: 2, priority: 6, flexibility: 7, description: 'Moderate taxation' },
  { party: 'cd-v', topic: 'public_spending', position: 1, priority: 6, flexibility: 7, description: 'Social market economy' },
  { party: 'cd-v', topic: 'budget_discipline', position: 7, priority: 8, flexibility: 4, description: 'Fiscal responsibility' },
  { party: 'cd-v', topic: 'housing_investment', position: 6, priority: 7, flexibility: 7, description: 'Social housing support' },
  { party: 'cd-v', topic: 'mobility_congestion_pricing', position: 2, priority: 4, flexibility: 8, description: 'Pragmatic on mobility' },
  { party: 'cd-v', topic: 'car_free_zones', position: 3, priority: 4, flexibility: 8, description: 'Balanced approach' },
  { party: 'cd-v', topic: 'public_transport_investment', position: 6, priority: 7, flexibility: 7, description: 'Support public transport' },
  { party: 'cd-v', topic: 'environmental_regulation', position: 6, priority: 7, flexibility: 6, description: 'Environmental stewardship' },
  { party: 'cd-v', topic: 'diversity_integration', position: 6, priority: 7, flexibility: 6, description: 'Integration with support' },
  { party: 'cd-v', topic: 'linguistic_parity', position: 9, priority: 9, flexibility: 3, description: 'Strong commitment to parity' },
  { party: 'cd-v', topic: 'brussels_autonomy', position: 6, priority: 6, flexibility: 7, description: 'Respect Brussels identity' },

  // Vooruit - Dutch Socialist, 1 seat
  { party: 'vooruit', topic: 'taxation', position: -7, priority: 8, flexibility: 4, description: 'Progressive taxation' },
  { party: 'vooruit', topic: 'public_spending', position: -7, priority: 9, flexibility: 3, description: 'Social investment' },
  { party: 'vooruit', topic: 'budget_discipline', position: -5, priority: 4, flexibility: 7, description: 'Social needs over austerity' },
  { party: 'vooruit', topic: 'housing_investment', position: 9, priority: 9, flexibility: 3, description: 'Public housing expansion' },
  { party: 'vooruit', topic: 'mobility_congestion_pricing', position: 5, priority: 6, flexibility: 7, description: 'Support with worker protections' },
  { party: 'vooruit', topic: 'car_free_zones', position: 6, priority: 5, flexibility: 7, description: 'Support livable cities' },
  { party: 'vooruit', topic: 'public_transport_investment', position: 9, priority: 9, flexibility: 3, description: 'Major public transport investment' },
  { party: 'vooruit', topic: 'environmental_regulation', position: 7, priority: 7, flexibility: 5, description: 'Environmental justice' },
  { party: 'vooruit', topic: 'diversity_integration', position: 8, priority: 8, flexibility: 4, description: 'Solidarity across communities' },
  { party: 'vooruit', topic: 'linguistic_parity', position: 7, priority: 7, flexibility: 5, description: 'Support parity' },
  { party: 'vooruit', topic: 'brussels_autonomy', position: 7, priority: 7, flexibility: 5, description: 'Support Brussels autonomy' },
];

export const topicDisplayNames: Record<PolicyTopic, string> = {
  taxation: 'Taxation Policy',
  public_spending: 'Public Spending',
  budget_discipline: 'Budget Discipline',
  housing_investment: 'Housing Investment',
  mobility_congestion_pricing: 'Congestion Pricing',
  car_free_zones: 'Car-Free Zones',
  public_transport_investment: 'Public Transport',
  environmental_regulation: 'Environmental Regulation',
  diversity_integration: 'Diversity & Integration',
  linguistic_parity: 'Linguistic Parity',
  brussels_autonomy: 'Brussels Autonomy',
};
