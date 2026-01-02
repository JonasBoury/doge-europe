'use client';

import { useState } from 'react';
import { getPartyById } from '@/data/brussels-2024-election';

// Mock survey data (in production, this would come from real surveys)
const mockSurveyData = {
  priorities: [
    { issue: 'Housing affordability', percentage: 78, votes: 1560 },
    { issue: 'Public transport', percentage: 65, votes: 1300 },
    { issue: 'Budget crisis resolution', percentage: 62, votes: 1240 },
    { issue: 'Safety and security', percentage: 58, votes: 1160 },
    { issue: 'Environmental policy', percentage: 45, votes: 900 },
    { issue: 'Economic development', percentage: 42, votes: 840 },
  ],
  coalitionPreference: {
    totalVotes: 2000,
    results: [
      { coalitionIds: ['ps', 'mr', 'ecolo', 'groen'], votes: 520, percentage: 26 },
      { coalitionIds: ['ps', 'les-engages', 'ecolo', 'one-brussels'], votes: 440, percentage: 22 },
      { coalitionIds: ['mr', 'les-engages', 'open-vld', 'n-va'], votes: 380, percentage: 19 },
      { coalitionIds: ['ps', 'mr', 'les-engages', 'team-fouad-ahidar'], votes: 340, percentage: 17 },
      { coalitionIds: ['other'], votes: 320, percentage: 16 },
    ],
  },
};

export default function CitizenEngagement() {
  const [surveyView, setSurveyView] = useState<'priorities' | 'coalitions' | 'accountability'>('priorities');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-accent to-brand-primary p-8 text-black">
        <h2 className="text-4xl font-display font-bold mb-2">Citizen Voice</h2>
        <p className="text-lg">
          What do Brussels residents want? Public opinion data on coalition preferences and priorities.
        </p>
      </div>

      {/* View Selector */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { key: 'priorities' as const, label: 'Policy Priorities', icon: '📋' },
          { key: 'coalitions' as const, label: 'Coalition Preferences', icon: '🗳️' },
          { key: 'accountability' as const, label: 'Party Accountability', icon: '⚖️' },
        ].map((view) => (
          <button
            key={view.key}
            onClick={() => setSurveyView(view.key)}
            className={`p-6 font-bold transition-all border-2 ${
              surveyView === view.key
                ? 'bg-brand-primary text-black border-brand-primary'
                : 'bg-background-darker text-gray-300 border-brand-secondary hover:border-brand-accent'
            }`}
          >
            <div className="text-3xl mb-2">{view.icon}</div>
            <div>{view.label}</div>
          </button>
        ))}
      </div>

      {/* Priority Survey Results */}
      {surveyView === 'priorities' && (
        <div className="bg-background-darker border-2 border-brand-secondary p-8">
          <h3 className="text-2xl font-display font-bold mb-4 text-white">
            📋 Public Priority Survey
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            What issues do Brussels residents care about most? (Mock survey data - 2,000 respondents)
          </p>

          <div className="space-y-4">
            {mockSurveyData.priorities.map((item, index) => (
              <div key={item.issue} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-brand-accent">#{index + 1}</span>
                    <span className="font-bold text-white">{item.issue}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-primary">{item.percentage}%</div>
                    <div className="text-xs text-gray-400">{item.votes} votes</div>
                  </div>
                </div>
                <div className="bg-background h-4 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-brand-secondary">
            <h4 className="font-bold text-brand-warning mb-2">💡 Insight:</h4>
            <p className="text-gray-300 text-sm">
              Housing affordability is the top concern for Brussels residents, yet coalition
              negotiations have focused heavily on linguistic and ideological divisions rather than
              addressing this concrete policy priority.
            </p>
          </div>
        </div>
      )}

      {/* Coalition Preference Voting */}
      {surveyView === 'coalitions' && (
        <div className="bg-background-darker border-2 border-brand-secondary p-8">
          <h3 className="text-2xl font-display font-bold mb-4 text-white">
            🗳️ Coalition Preference Voting
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Which coalition would Brussels residents prefer? (Mock survey data - 2,000 respondents)
          </p>

          <div className="space-y-4">
            {mockSurveyData.coalitionPreference.results.map((result, index) => {
              if (result.coalitionIds[0] === 'other') {
                return (
                  <div key="other" className="border-2 border-brand-secondary p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-400">Other / No Preference</span>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-400">{result.percentage}%</div>
                        <div className="text-xs text-gray-500">{result.votes} votes</div>
                      </div>
                    </div>
                    <div className="bg-background h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-500"
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="border-2 border-brand-secondary hover:border-brand-primary p-4 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-wrap gap-2">
                      {result.coalitionIds.map((partyId) => {
                        const party = getPartyById(partyId);
                        return party ? (
                          <span
                            key={partyId}
                            className="px-3 py-1 text-sm font-bold text-white"
                            style={{ backgroundColor: party.color }}
                          >
                            {party.abbreviation}
                          </span>
                        ) : null;
                      })}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-primary">{result.percentage}%</div>
                      <div className="text-xs text-gray-400">{result.votes} votes</div>
                    </div>
                  </div>
                  <div className="bg-background h-4 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-primary"
                      style={{ width: `${result.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-brand-secondary">
            <h4 className="font-bold text-brand-warning mb-2">💡 Insight:</h4>
            <p className="text-gray-300 text-sm">
              Citizen preferences show openness to cross-ideological coalitions that parties have
              rejected. The public appears more pragmatic than political elites about necessary
              compromises.
            </p>
          </div>
        </div>
      )}

      {/* Party Accountability Scorecard */}
      {surveyView === 'accountability' && (
        <div className="bg-background-darker border-2 border-brand-secondary p-8">
          <h3 className="text-2xl font-display font-bold mb-4 text-white">
            ⚖️ Party Accountability Scorecard
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            How do Brussels residents rate party behavior during the formation crisis?
          </p>

          <div className="space-y-6">
            <PartyScorecard
              partyId="ps"
              constructive={35}
              transparent={40}
              flexible={25}
            />
            <PartyScorecard
              partyId="mr"
              constructive={45}
              transparent={50}
              flexible={40}
            />
            <PartyScorecard
              partyId="les-engages"
              constructive={60}
              transparent={55}
              flexible={65}
            />
            <PartyScorecard
              partyId="ecolo"
              constructive={55}
              transparent={60}
              flexible={50}
            />
            <PartyScorecard
              partyId="open-vld"
              constructive={30}
              transparent={35}
              flexible={20}
            />
            <PartyScorecard
              partyId="n-va"
              constructive={25}
              transparent={30}
              flexible={15}
            />
          </div>

          <div className="mt-8 pt-6 border-t-2 border-brand-secondary">
            <h4 className="font-bold text-brand-warning mb-2">💡 Insight:</h4>
            <p className="text-gray-300 text-sm">
              Center parties (Les Engagés, Ecolo) receive highest ratings for constructive
              negotiation. Parties with absolute vetoes (PS, N-VA, Open VLD) score lowest on
              flexibility.
            </p>
          </div>
        </div>
      )}

      {/* Explainer Content */}
      <div className="bg-background-darker border-l-4 border-brand-accent p-6">
        <h3 className="text-xl font-display font-bold mb-4 text-brand-accent">
          📚 Understanding the Crisis
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-2">Why linguistic parity?</h4>
            <p>
              Brussels requires 2 French + 2 Dutch ministers to protect the Dutch-speaking minority
              (only ~10% of population). This ensures both communities have representation in
              government decisions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">How coalition math works</h4>
            <p>
              With 89 total seats, a coalition needs 45+ seats for a majority. But they also need at
              least 2 parties from each linguistic group, making simple math insufficient.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">What can a caretaker government do?</h4>
            <p>
              Caretaker governments handle &ldquo;current business&rdquo; but cannot make major policy changes or
              pass new budgets. After 572 days, this limits Brussels&apos; ability to address crises.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">What happens next?</h4>
            <p>
              Without constitutional deadlines, the crisis could continue indefinitely. Public
              pressure, budget emergencies, or party leadership changes may force a breakthrough.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyScorecard({
  partyId,
  constructive,
  transparent,
  flexible,
}: {
  partyId: string;
  constructive: number;
  transparent: number;
  flexible: number;
}) {
  const party = getPartyById(partyId);
  if (!party) return null;

  const metrics = [
    { label: 'Constructive', value: constructive },
    { label: 'Transparent', value: transparent },
    { label: 'Flexible', value: flexible },
  ];

  const average = Math.round((constructive + transparent + flexible) / 3);

  return (
    <div className="border-2 border-brand-secondary p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="px-4 py-2 text-lg font-bold text-white"
            style={{ backgroundColor: party.color }}
          >
            {party.abbreviation}
          </span>
          <span className="text-gray-300">{party.name.en}</span>
        </div>
        <div className="text-right">
          <div
            className={`text-3xl font-bold ${
              average >= 60
                ? 'text-green-400'
                : average >= 40
                ? 'text-brand-warning'
                : 'text-brand-danger'
            }`}
          >
            {average}
          </div>
          <div className="text-xs text-gray-400">Overall</div>
        </div>
      </div>

      <div className="space-y-3">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">{metric.label}</span>
              <span className="text-white font-bold">{metric.value}%</span>
            </div>
            <div className="bg-background h-2 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  metric.value >= 60
                    ? 'bg-green-400'
                    : metric.value >= 40
                    ? 'bg-brand-warning'
                    : 'bg-brand-danger'
                }`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
