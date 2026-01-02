'use client';

import { useState } from 'react';
import { timeline, vetoes, getPartyById } from '@/data/brussels-2024-election';
import type { TimelineEvent } from '@/types/coalition';

export default function TransparencyDashboard() {
  const [filterType, setFilterType] = useState<TimelineEvent['type'] | 'all'>('all');
  const [filterSignificance, setFilterSignificance] = useState<TimelineEvent['significance'] | 'all'>('all');

  const filteredTimeline = timeline.filter((event) => {
    if (filterType !== 'all' && event.type !== filterType) return false;
    if (filterSignificance !== 'all' && event.significance !== filterSignificance) return false;
    return true;
  });

  const sortedTimeline = [...filteredTimeline].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate days elapsed
  const electionDate = new Date('2024-06-09');
  const today = new Date();
  const daysElapsed = Math.floor((today.getTime() - electionDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-brand-danger to-brand-warning p-8 text-black">
        <h2 className="text-4xl font-display font-bold mb-2">Crisis Timeline Tracker</h2>
        <div className="flex gap-8 text-2xl font-bold mt-4">
          <div>
            <span className="text-5xl">{daysElapsed}</span>
            <span className="ml-2">days without government</span>
          </div>
          <div>
            <span className="text-5xl">{timeline.length}</span>
            <span className="ml-2">tracked events</span>
          </div>
        </div>
      </div>

      {/* Red Line Registry */}
      <div className="bg-background-darker border-2 border-brand-danger p-6">
        <h3 className="text-2xl font-display font-bold mb-4 text-brand-danger">
          🚫 Red Line Registry
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Documented party vetoes and demands that block coalition formation
        </p>
        <div className="space-y-4">
          {vetoes.map((veto) => {
            const sourceParty = getPartyById(veto.sourcePartyId);
            const targetParty = getPartyById(veto.targetPartyId);

            return (
              <div
                key={veto.id}
                className="border-l-4 border-brand-danger pl-4 py-2"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-3 items-center">
                    <span
                      className="px-3 py-1 text-sm font-bold text-white"
                      style={{ backgroundColor: sourceParty?.color }}
                    >
                      {sourceParty?.abbreviation}
                    </span>
                    <span className="text-brand-danger text-xl">→</span>
                    <span
                      className="px-3 py-1 text-sm font-bold text-white"
                      style={{ backgroundColor: targetParty?.color }}
                    >
                      {targetParty?.abbreviation}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold ${
                      veto.status === 'active'
                        ? 'bg-brand-danger text-black'
                        : veto.status === 'softened'
                        ? 'bg-brand-warning text-black'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {veto.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-1">{veto.reason}</p>
                <p className="text-gray-500 text-xs">
                  Announced: {new Date(veto.dateAnnounced).toLocaleDateString()} •
                  Type: {veto.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-300">Event Type</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as TimelineEvent['type'] | 'all')}
            className="bg-background-darker border-2 border-brand-secondary text-white px-4 py-2 font-bold"
          >
            <option value="all">All Types</option>
            <option value="election">Elections</option>
            <option value="formateur_appointed">Formateur Appointments</option>
            <option value="negotiation">Negotiations</option>
            <option value="veto_announced">Vetoes Announced</option>
            <option value="formation_failed">Formation Failures</option>
            <option value="other">Other Events</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-300">Significance</label>
          <select
            value={filterSignificance}
            onChange={(e) => setFilterSignificance(e.target.value as TimelineEvent['significance'] | 'all')}
            className="bg-background-darker border-2 border-brand-secondary text-white px-4 py-2 font-bold"
          >
            <option value="all">All Levels</option>
            <option value="critical">Critical Only</option>
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-2xl font-display font-bold mb-4 text-white">
          Chronological Timeline
          <span className="text-brand-accent ml-3">({filteredTimeline.length} events)</span>
        </h3>

        <div className="relative border-l-4 border-brand-secondary pl-8 space-y-8">
          {sortedTimeline.map((event, index) => (
            <TimelineEventCard key={event.id} event={event} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineEventCard({ event, isFirst }: { event: TimelineEvent; isFirst: boolean }) {
  const eventTypeColors: Record<TimelineEvent['type'], string> = {
    election: 'bg-brand-primary',
    formateur_appointed: 'bg-brand-accent',
    negotiation: 'bg-blue-500',
    veto_announced: 'bg-brand-danger',
    formation_failed: 'bg-brand-warning',
    other: 'bg-gray-500',
  };

  const significanceIcons: Record<TimelineEvent['significance'], string> = {
    critical: '🔴',
    major: '🟡',
    minor: '⚪',
  };

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-10 w-6 h-6 rounded-full border-4 border-background ${
          eventTypeColors[event.type]
        } ${isFirst ? 'animate-pulse' : ''}`}
      />

      {/* Event card */}
      <div className="bg-background-darker border-2 border-brand-secondary p-6 hover:border-brand-primary transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{significanceIcons[event.significance]}</span>
              <h4 className="text-xl font-display font-bold text-white">{event.title}</h4>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              {new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <span
            className={`px-3 py-1 text-xs font-bold text-white ${eventTypeColors[event.type]}`}
          >
            {event.type.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        <p className="text-gray-300 mb-3">{event.description}</p>

        {event.parties && event.parties.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {event.parties.map((partyId) => {
              const party = getPartyById(partyId);
              return party ? (
                <span
                  key={partyId}
                  className="px-2 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: party.color }}
                >
                  {party.abbreviation}
                </span>
              ) : null;
            })}
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-brand-secondary flex justify-between text-xs text-gray-500">
          <span>Significance: {event.significance}</span>
          <span>
            {Math.floor(
              (new Date().getTime() - new Date(event.date).getTime()) / (1000 * 60 * 60 * 24)
            )}{' '}
            days ago
          </span>
        </div>
      </div>
    </div>
  );
}
