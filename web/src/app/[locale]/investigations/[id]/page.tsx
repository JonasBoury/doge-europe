import { notFound } from 'next/navigation';
import { getInvestigationData, getAllInvestigationIds } from '@/lib/investigations';
import InvestigationTabs from '@/components/investigation/InvestigationTabs';

export function generateStaticParams() {
  const ids = getAllInvestigationIds();
  return ids.map((id) => ({ id }));
}

export default async function InvestigationPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;
  const investigation = getInvestigationData(id);

  if (!investigation) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">
              {investigation.title}
            </h1>
            <p className="text-gray-400 font-mono text-sm">
              {investigation.caseId}
            </p>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <StatusBadge status={investigation.status} />
            <PriorityBadge priority={investigation.priority} />
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <div>
            <span className="font-semibold">Opened:</span> {investigation.dateOpened}
          </div>
          <div>
            <span className="font-semibold">Updated:</span> {investigation.lastUpdated}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <InvestigationTabs investigation={investigation} />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Active: 'bg-brand-danger text-black',
    Completed: 'bg-brand-accent text-black',
    Pending: 'bg-brand-warning text-black',
  };

  return (
    <span className={`${colors[status as keyof typeof colors] || 'bg-gray-500 text-white'} px-4 py-1 text-sm font-bold`}>
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors = {
    High: 'bg-brand-warning text-black',
    Medium: 'bg-brand-accent text-black',
    Low: 'bg-gray-500 text-white',
  };

  return (
    <span className={`${colors[priority as keyof typeof colors] || 'bg-gray-500 text-white'} px-4 py-1 text-sm font-bold`}>
      Priority: {priority}
    </span>
  );
}
