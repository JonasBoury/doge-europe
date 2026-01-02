'use client';

import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { parties } from '@/data/brussels-2024-election';

// Network data based on investigation notes.md network analysis
const networkRelationships = [
  // Alliance relationships (strong compatibility)
  { source: 'ps', target: 'ecolo', type: 'alliance', strength: 0.8, label: 'Left coalition partners' },
  { source: 'ecolo', target: 'groen', type: 'alliance', strength: 0.9, label: 'Sister parties (Green)' },
  { source: 'mr', target: 'open-vld', type: 'alliance', strength: 0.9, label: 'Sister parties (Liberal)' },
  { source: 'mr', target: 'one-brussels', type: 'alliance', strength: 0.7, label: 'Liberal economic alignment' },
  { source: 'ps', target: 'ptb', type: 'alliance', strength: 0.6, label: 'Left economic policy' },
  { source: 'ps', target: 'vooruit', type: 'alliance', strength: 0.7, label: 'Sister parties (Socialist)' },
  { source: 'les-engages', target: 'cd-v', type: 'alliance', strength: 0.8, label: 'Sister parties (Christian Dem)' },

  // Negotiation attempts (complex/tense relationships)
  { source: 'ps', target: 'mr', type: 'negotiation', strength: 0.3, label: 'Arizona coalition attempts (failed)' },
  { source: 'ps', target: 'les-engages', type: 'negotiation', strength: 0.5, label: 'Moderate left coalition talks' },
  { source: 'mr', target: 'les-engages', type: 'negotiation', strength: 0.6, label: 'Center-right coalition potential' },

  // Veto relationships (blocking)
  { source: 'ps', target: 'n-va', type: 'veto', strength: 1.0, label: 'PS absolute veto of N-VA' },
  { source: 'open-vld', target: 'n-va', type: 'requirement', strength: 1.0, label: 'Open VLD requires N-VA' },

  // Ideological opposition (incompatible)
  { source: 'ps', target: 'open-vld', type: 'opposition', strength: 0.8, label: 'Economic policy clash' },
  { source: 'mr', target: 'ptb', type: 'opposition', strength: 0.9, label: 'Ideological incompatibility' },
  { source: 'ecolo', target: 'n-va', type: 'opposition', strength: 0.7, label: 'Diversity/environment policy gap' },
];

export default function NetworkGraph() {
  // Create nodes from parties
  const initialNodes: Node[] = useMemo(() => {
    const frenchParties = parties.filter(p => p.linguisticGroup === 'French' && p.seats > 0);
    const dutchParties = parties.filter(p => p.linguisticGroup === 'Dutch' && p.seats > 0);

    const nodes: Node[] = [];

    // Position French parties on left
    frenchParties.forEach((party, index) => {
      nodes.push({
        id: party.id,
        type: 'default',
        position: {
          x: 100 + (index % 2) * 200,
          y: 100 + Math.floor(index / 2) * 150
        },
        data: {
          label: (
            <div className="text-center">
              <div className="font-bold text-white px-2 py-1 text-sm" style={{ backgroundColor: party.color }}>
                {party.abbreviation}
              </div>
              <div className="text-xs text-gray-400 mt-1">{party.seats} seats</div>
            </div>
          )
        },
        style: {
          background: 'transparent',
          border: 'none',
          width: 100,
          height: 60,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      });
    });

    // Position Dutch parties on right
    dutchParties.forEach((party, index) => {
      nodes.push({
        id: party.id,
        type: 'default',
        position: {
          x: 600 + (index % 2) * 200,
          y: 100 + Math.floor(index / 2) * 150
        },
        data: {
          label: (
            <div className="text-center">
              <div className="font-bold text-white px-2 py-1 text-sm" style={{ backgroundColor: party.color }}>
                {party.abbreviation}
              </div>
              <div className="text-xs text-gray-400 mt-1">{party.seats} seats</div>
            </div>
          )
        },
        style: {
          background: 'transparent',
          border: 'none',
          width: 100,
          height: 60,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      });
    });

    return nodes;
  }, []);

  // Create edges from relationships
  const initialEdges: Edge[] = useMemo(() => {
    return networkRelationships.map((rel, index) => {
      const edgeStyles: Record<string, { color: string; strokeWidth: number; markerEnd?: string; animated?: boolean }> = {
        alliance: {
          color: '#00D9FF',
          strokeWidth: 3,
          markerEnd: 'none',
        },
        negotiation: {
          color: '#FFD700',
          strokeWidth: 2,
          markerEnd: 'none',
          animated: true,
        },
        veto: {
          color: '#FF0054',
          strokeWidth: 4,
          markerEnd: 'arrow',
        },
        requirement: {
          color: '#FF6B00',
          strokeWidth: 3,
          markerEnd: 'arrow',
        },
        opposition: {
          color: '#666666',
          strokeWidth: 2,
          markerEnd: 'none',
        },
      };

      const style = edgeStyles[rel.type] || { color: '#999999', strokeWidth: 1 };

      return {
        id: `${rel.source}-${rel.target}-${index}`,
        source: rel.source,
        target: rel.target,
        type: rel.type === 'veto' || rel.type === 'requirement' ? 'straight' : 'default',
        label: rel.label,
        animated: style.animated || false,
        style: {
          stroke: style.color,
          strokeWidth: style.strokeWidth,
        },
        markerEnd: style.markerEnd === 'arrow' ? {
          type: MarkerType.ArrowClosed,
          color: style.color,
          width: 20,
          height: 20,
        } : undefined,
        labelStyle: {
          fill: '#FFFFFF',
          fontSize: 10,
          fontWeight: 'bold',
        },
        labelBgStyle: {
          fill: '#1A1A1A',
          fillOpacity: 0.9,
        },
        labelBgPadding: [4, 4] as [number, number],
        labelBgBorderRadius: 2,
      };
    });
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(() => {
    // Disabled - static network
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-display font-bold mb-4 text-white">
          Party Network Graph
        </h2>
        <p className="text-gray-400 mb-4">
          Interactive visualization of party relationships in the Brussels-Capital Region Parliament.
          This network analysis reveals the structural and behavioral obstacles perpetuating the 572+ day government formation deadlock.
        </p>
      </div>

      {/* Legend */}
      <div className="bg-background-darker border-2 border-brand-secondary p-4">
        <h3 className="font-bold text-white mb-3">Relationship Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#00D9FF]"></div>
            <span className="text-gray-300">Alliance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#FFD700]"></div>
            <span className="text-gray-300">Negotiation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#FF0054]"></div>
            <span className="text-gray-300">Veto (blocking)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#FF6B00]"></div>
            <span className="text-gray-300">Requirement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#666666]"></div>
            <span className="text-gray-300">Opposition</span>
          </div>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="bg-background-darker border-2 border-brand-secondary" style={{ height: '600px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-right"
          className="bg-background"
        >
          <Background color="#333" gap={16} />
          <Controls className="bg-background-darker border-2 border-brand-secondary" />
          <MiniMap
            nodeColor={(node) => {
              const party = parties.find(p => p.id === node.id);
              return party?.color || '#999999';
            }}
            className="bg-background-darker border-2 border-brand-secondary"
          />
        </ReactFlow>
      </div>

      {/* Key Insights */}
      <div className="bg-background-darker border-l-4 border-brand-accent p-6">
        <h3 className="text-2xl font-display font-bold mb-4 text-brand-accent">
          🔍 Network Analysis Insights
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-2">1. PS is Unavoidable Kingmaker</h4>
            <p className="text-gray-300 text-sm">
              With 23 seats (26% of parliament), PS has the highest network centrality.
              Nearly all viable majority coalitions require PS participation.
              Their veto of N-VA is structurally significant, not just tactical posturing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">2. Open VLD Creates Artificial Deadlock</h4>
            <p className="text-gray-300 text-sm">
              Despite having only 2 seats (2.2% of parliament), Open VLD wields disproportionate power
              via the linguistic parity requirement. Their insistence on N-VA inclusion creates a
              <span className="text-brand-danger font-bold"> mirror veto</span> to PS&apos;s N-VA refusal,
              blocking viable coalitions. This is the <strong>primary stalling mechanism</strong>.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">3. Most Viable Path: Moderate Left Coalition</h4>
            <p className="text-gray-300 text-sm">
              PS(23) + Les Engagés(12) + Ecolo(11) + TFA(4) + Groen(3) = <strong>53 seats</strong>
              <br />
              ✓ Meets majority threshold (45 seats)
              <br />
              ✓ Satisfies linguistic parity (3 French + 2 Dutch parties)
              <br />
              ✓ Avoids N-VA veto trap
              <br />
              ✓ Coherent left-center policy alignment
              <br />
              <span className="text-brand-warning">⚠ Obstacle:</span> Les Engagés demands fiscal responsibility guarantees from PS
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">4. Dutch Bloc as Choke Point</h4>
            <p className="text-gray-300 text-sm">
              The 7 Dutch-speaking parties compete for only 17 seats (19% of parliament),
              yet the 2+2 ministerial parity requirement gives each Dutch party outsized veto power.
              This structural design flaw enables small parties to block coalitions via the parity mechanism.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">5. Arizona Coalition Culturally Impossible</h4>
            <p className="text-gray-300 text-sm">
              While PS + MR + Ecolo could mathematically reach 50+ seats with Dutch partners,
              the ideological chasm between PS (left, social spending) and MR (right, tax cuts)
              proved unbridgeable in multiple attempts. Personal animosities between leaders worsen the impasse.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t-2 border-brand-secondary">
          <h4 className="font-bold text-white mb-2">Reform Priority</h4>
          <p className="text-sm text-gray-300">
            <strong className="text-brand-accent">Recommendation:</strong> Address the linguistic parity mechanism
            to prevent 2-seat parties from wielding absolute veto power via the Dutch bloc requirement.
            Consider weighted parity or minimum seat thresholds for ministerial selection.
          </p>
        </div>
      </div>
    </div>
  );
}
