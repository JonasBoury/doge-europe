export interface Investigation {
  id: string;
  caseId: string;
  title: string;
  status: 'Active' | 'Completed' | 'Pending';
  dateOpened: string;
  lastUpdated: string;
  priority: 'High' | 'Medium' | 'Low';
  overview: string;
  timeline: string;
  sources: string;
  notes: string;
}

export interface ParsedOverview {
  executiveSummary: string;
  keyQuestions: string[];
  keyEntities: string[];
  background: string;
}
