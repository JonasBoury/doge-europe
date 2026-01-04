import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getAllInvestigations } from '@/lib/investigations';

export default function InvestigationsPage() {
  const t = useTranslations('investigation');
  const investigations = getAllInvestigations();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-foreground">
        Active Investigations
      </h1>

      {/* Investigation Cards */}
      {investigations.length > 0 ? (
        <div className="space-y-6">
          {investigations.map((investigation) => (
            <div
              key={investigation.id}
              className="card p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-foreground">
                    {investigation.title}
                  </h2>
                  <p className="text-sm text-foreground/50 font-mono">{investigation.caseId}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`px-3 py-1 text-xs rounded ${
                      investigation.status === 'Active'
                        ? 'bg-accent/20 text-accent'
                        : investigation.status === 'Completed'
                        ? 'bg-muted text-foreground/70'
                        : 'bg-muted/50 text-foreground/50'
                    }`}
                  >
                    {investigation.status === 'Active' && t('status.active')}
                    {investigation.status === 'Completed' && t('status.completed')}
                    {investigation.status === 'Pending' && t('status.pending')}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs rounded ${
                      investigation.priority === 'High'
                        ? 'bg-accent/20 text-accent'
                        : investigation.priority === 'Medium'
                        ? 'bg-muted text-foreground/70'
                        : 'bg-muted/50 text-foreground/50'
                    }`}
                  >
                    {investigation.priority === 'High' && t('priority.high')}
                    {investigation.priority === 'Medium' && t('priority.medium')}
                    {investigation.priority === 'Low' && t('priority.low')}
                  </span>
                </div>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                Investigation into systemic accountability failures and transparency gaps
                in the Brussels-Capital Region government formation crisis.
              </p>

              <div className="flex items-center justify-between border-t border-dashed border-border/30 pt-4">
                <div className="text-sm text-foreground/50">
                  Last Updated: {investigation.lastUpdated}
                </div>
                <Link
                  href={`/investigations/${investigation.id}`}
                  className="btn-primary"
                >
                  View Investigation
                </Link>
              </div>
            </div>
          ))}

          {/* Coming Soon */}
          <div className="card p-6 opacity-60">
            <h2 className="text-lg font-semibold mb-2 text-foreground/70">
              More Investigations Coming Soon
            </h2>
            <p className="text-sm text-foreground/50">
              DOGE Europe is expanding its investigative scope across European institutions.
            </p>
          </div>
        </div>
      ) : (
        <div className="card p-6">
          <p className="text-foreground/50">No investigations found. Run sync script to load data.</p>
        </div>
      )}
    </div>
  );
}
