import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Fabric & Power BI Foundation',
  description:
    'Stop bad data from producing bad decisions. One governed lakehouse, one semantic layer, automated quality checks, and self-service BI — using Microsoft Fabric and Power BI.',
  openGraph: { title: 'Fabric & Power BI Foundation | CedarNexus' },
}

export default function FabricPowerBIPage() {
  return (
    <ServicePageLayout
      heroTitle="Stop bad data from producing bad decisions — for humans and AI."
      heroSubtitle="Your team debates whose numbers are right. Your AI models train on stale snapshots. Your analysts wait days for data engineering to build a new report. We fix the foundation: one lakehouse, one semantic layer, automated quality checks, and self-service BI that both humans and machines trust."
      techQualifier="Microsoft Fabric, Power BI, Purview, Azure Data Factory, dbt."
    >
      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What&rsquo;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Lakehouse architecture', desc: 'A Fabric OneLake lakehouse with medallion layers (bronze → silver → gold). Clean, versioned, queryable data — not a dump of CSVs in blob storage.' },
              { title: 'Automated data pipelines', desc: 'Ingestion from your source systems with incremental loads, error handling, and monitoring. When a pipeline fails, you know within minutes — not when someone complains about a stale dashboard.' },
              { title: 'Semantic layer', desc: 'A Power BI semantic model with business-logic measures, relationships, and row-level security. One source of truth — your KPIs match whether you\'re in Power BI, Excel, or an AI agent.' },
              { title: 'Data quality rules', desc: 'Automated checks for completeness, uniqueness, freshness, and referential integrity. Failures alert before downstream consumers see bad data. Typical catch rate: 90%+ of data issues within 15 minutes of occurrence.' },
              { title: 'Governance & lineage', desc: 'Purview integration for classification, lineage tracking, and access controls. Know where every column comes from, who changed it, and who can see it.' },
              { title: 'Self-service BI', desc: 'Reports and dashboards your team can explore and extend without filing a ticket. Fewer bottlenecks, faster decisions, and analysts spend time on analysis instead of waiting for data.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why data foundations matter for AI */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why this is an AI prerequisite</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Bad data in → bad AI out</h3>
              <p className="text-gray-600 text-sm leading-relaxed">RAG copilots and AI workflows are only as good as the data they access. Duplicate records, stale snapshots, and ungoverned schemas don’t just produce wrong dashboards — they produce wrong AI outputs that your team acts on.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">One truth for humans and machines</h3>
              <p className="text-gray-600 text-sm leading-relaxed">When your Power BI revenue number matches what the AI agent computes, stakeholders trust both. A shared semantic layer eliminates the &ldquo;my numbers don&rsquo;t match&rdquo; meeting that burns 2 hours every Monday.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Governance = speed, not bureaucracy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">When data is classified, access-controlled, and lineage-tracked, teams self-serve safely. Less gatekeeping, faster iteration, lower compliance risk. Your security team says yes faster when they can see the controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & privacy */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data &amp; privacy</h2>
          <ul className="space-y-4">
            {[
              'Permissioning: row-level security in Power BI and workspace-level controls in Fabric ensure users see only what they should.',
              'PII handling: Purview auto-classification labels PII columns. Policies enforce masking or access restrictions by sensitivity level.',
              'Data boundaries: all data stays in your Fabric tenant and Azure subscription. We configure — we don\'t host.',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline & pricing */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Timeline &amp; investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Blueprint</p>
              <p className="text-2xl font-bold text-gray-900">10 days</p>
              <p className="text-sm text-gray-600 mt-1">Data audit + architecture</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Build</p>
              <p className="text-2xl font-bold text-gray-900">4 – 10 weeks</p>
              <p className="text-sm text-gray-600 mt-1">Lakehouse + BI + governance</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Investment</p>
              <p className="text-2xl font-bold text-gray-900">$30K – $120K</p>
              <p className="text-sm text-gray-600 mt-1">Depends on source count</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">What we need from you</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Access to source systems (databases, APIs, file shares) and their schemas</li>
              <li>• A data steward or business analyst who can define key metrics and business rules</li>
              <li>• Fabric / Power BI Premium or F-SKU capacity (we help provision if needed)</li>
              <li>• Weekly 30-minute check-ins during the build phase</li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
