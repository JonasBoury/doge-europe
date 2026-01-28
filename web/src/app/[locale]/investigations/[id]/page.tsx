import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { getInvestigationData, getAllInvestigationIds } from '@/lib/investigations';
import InvestigationTabs from '@/components/investigation/InvestigationTabs';

// Map investigation IDs to related tools
const relatedTools: Record<string, { name: string; href: string; description: string }[]> = {
  'case-001-brussels-gov-formation': [
    {
      name: 'Brussels Coalition Builder',
      href: '/tools/coalition-builder',
      description: 'Interactive tool to explore coalition combinations and political constraints'
    }
  ],
  'case-004-persona-onderwijsadministratie': [
    {
      name: 'IT Project Cost Calculator',
      href: '/tools',
      description: 'Calculate the real cost of failed IT projects (Coming Soon)'
    }
  ]
};

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

  const tools = relatedTools[id] || [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/investigations" className="text-foreground-secondary hover:text-accent transition-colors">
                  Investigations
                </Link>
              </li>
              <li className="text-foreground-tertiary">/</li>
              <li className="text-foreground">{investigation.caseId}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <StatusBadge status={investigation.status} />
                <PriorityBadge priority={investigation.priority} />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {investigation.title}
              </h1>
              <p className="mt-2 font-mono text-sm text-foreground-tertiary">
                {investigation.caseId}
              </p>
            </div>

            {/* Dates */}
            <div className="flex-shrink-0 text-sm text-foreground-secondary space-y-1">
              <div>
                <span className="text-foreground-tertiary">Opened:</span> {investigation.dateOpened}
              </div>
              <div>
                <span className="text-foreground-tertiary">Updated:</span> {investigation.lastUpdated}
              </div>
            </div>
          </div>

          {/* Related Tools */}
          {tools.length > 0 && (
            <div className="mt-6 p-4 bg-accent-subtle border border-accent/20 rounded-xl">
              <p className="text-sm font-medium text-accent mb-3">Related Tools</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg hover:border-accent transition-colors group"
                  >
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {tool.name}
                      </span>
                      <p className="text-xs text-foreground-tertiary">{tool.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-foreground-tertiary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <InvestigationTabs investigation={investigation} />
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Active: 'badge-active',
    Completed: 'badge-success',
    Pending: 'badge-warning',
  };

  return (
    <span className={styles[status as keyof typeof styles] || 'badge'}>
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles = {
    High: 'badge-error',
    Medium: 'badge-warning',
    Low: 'badge',
  };

  const baseStyle = styles[priority as keyof typeof styles] || 'badge';
  const isPlain = priority === 'Low';

  return (
    <span className={isPlain ? 'badge bg-background-tertiary text-foreground-secondary' : baseStyle}>
      {priority} Priority
    </span>
  );
}
