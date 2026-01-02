// Coalition Builder Platform Type Definitions

export interface Party {
  id: string;
  name: {
    fr: string;
    nl: string;
    en: string;
  };
  abbreviation: string;
  seats: number;
  linguisticGroup: 'French' | 'Dutch';
  ideology: {
    economic: number; // -10 (left) to +10 (right)
    social: number; // -10 (conservative) to +10 (progressive)
  };
  color: string; // Hex color for visualizations
  leader?: string;
}

export interface Veto {
  id: string;
  sourcePartyId: string;
  targetPartyId: string;
  type: 'absolute' | 'conditional';
  reason: string;
  dateAnnounced: string;
  status: 'active' | 'softened' | 'withdrawn';
}

export interface PolicyPosition {
  partyId: string;
  domain: 'economic' | 'mobility' | 'housing' | 'diversity' | 'budget';
  position: number; // -10 to +10 scale
  keyPolicies: string[];
}

export interface Coalition {
  id: string;
  parties: string[]; // Party IDs
  totalSeats: number;
  isMajority: boolean;
  meetsParityRequirement: boolean;
  frenchParties: string[];
  dutchParties: string[];
  blockedBy: string[]; // Veto IDs that block this coalition
  ideologicalDistance: number; // 0-100 scale
  feasibilityScore: number; // 0-100 scale
}

export interface FormationAttempt {
  id: string;
  startDate: string;
  endDate?: string;
  formateur: {
    name: string;
    party: string;
  };
  attemptedCoalition: string[]; // Party IDs
  status: 'ongoing' | 'failed' | 'succeeded';
  failureReason?: string;
  notes?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'election' | 'formateur_appointed' | 'negotiation' | 'veto_announced' | 'formation_failed' | 'other';
  title: string;
  description: string;
  parties?: string[]; // Related party IDs
  significance: 'critical' | 'major' | 'minor';
}

export interface CitizenSurveyResponse {
  id: string;
  date: string;
  question: string;
  responses: {
    option: string;
    percentage: number;
    count: number;
  }[];
}

export interface CoalitionAnalysis {
  coalition: Coalition;
  strengths: string[];
  weaknesses: string[];
  policyCommonGround: {
    domain: string;
    alignment: number; // 0-100
  }[];
  publicSupport?: number; // 0-100 if survey data available
}
