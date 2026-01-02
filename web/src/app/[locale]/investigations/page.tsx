import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getAllInvestigations } from '@/lib/investigations';

export default function InvestigationsPage() {
  const t = useTranslations('investigation');
  const investigations = getAllInvestigations();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-display font-bold mb-8 text-brand-primary">
        Active Investigations
      </h1>

      {/* Investigation Cards */}
      {investigations.length > 0 ? (
        <>
          {investigations.map((investigation) => (
            <div
              key={investigation.id}
              className="border-2 border-brand-primary bg-background-darker p-8 mb-6 hover:border-brand-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    {investigation.title}
                  </h2>
                  <p className="text-gray-400 font-mono text-sm">{investigation.caseId}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span
                    className={`px-4 py-1 text-sm font-bold ${
                      investigation.status === 'Active'
                        ? 'bg-brand-danger text-black'
                        : investigation.status === 'Completed'
                        ? 'bg-brand-accent text-black'
                        : 'bg-brand-warning text-black'
                    }`}
                  >
                    {investigation.status === 'Active' && t('status.active')}
                    {investigation.status === 'Completed' && t('status.completed')}
                    {investigation.status === 'Pending' && t('status.pending')}
                  </span>
                  <span
                    className={`px-4 py-1 text-sm font-bold ${
                      investigation.priority === 'High'
                        ? 'bg-brand-warning text-black'
                        : investigation.priority === 'Medium'
                        ? 'bg-brand-accent text-black'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {investigation.priority === 'High' && t('priority.high')}
                    {investigation.priority === 'Medium' && t('priority.medium')}
                    {investigation.priority === 'Low' && t('priority.low')}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-lg">
                Investigation into systemic accountability failures and transparency gaps
                in the Brussels-Capital Region government formation crisis.
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Last Updated: {investigation.lastUpdated}
                </div>
                <Link
                  href={`/investigations/${investigation.id}`}
                  className="bg-brand-primary hover:bg-brand-accent text-black font-bold px-6 py-2 transition-colors inline-block"
                >
                  View Investigation →
                </Link>
              </div>
            </div>
          ))}

          {/* Coming Soon */}
          <div className="border-2 border-brand-secondary bg-background-darker p-8 opacity-50">
            <h2 className="text-2xl font-display font-bold mb-2 text-gray-500">
              More Investigations Coming Soon
            </h2>
            <p className="text-gray-500">
              DOGE Europe is expanding its investigative scope across European institutions.
            </p>
          </div>
        </>
      ) : (
        <div className="border-2 border-brand-secondary bg-background-darker p-8 mb-6">
          <p className="text-gray-400">No investigations found. Run sync script to load data.</p>
        </div>
      )}
    </div>
  );
}
