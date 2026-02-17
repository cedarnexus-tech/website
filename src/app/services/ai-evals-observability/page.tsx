import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'AI Evals & Observability',
  description:
    'Catch AI regressions before users file tickets. Eval suites in CI, red-team testing, drift detection, cost dashboards, and full audit trails for LLM-powered systems.',
  openGraph: { title: 'AI Evals & Observability | CedarNexus' },
}

export default function AIEvalsObservabilityPage() {
  return (
    <ServicePageLayout
      heroTitle="Stop shipping AI updates blind. Know what broke before your users do."
      heroSubtitle="Most teams ship model updates with no regression tests and no monitoring. The result: silent quality drops, cost spikes, and trust erosion. We build the eval suites and observability layer that make AI deployments as rigorous as your code deployments."
      techQualifier="Works with Azure OpenAI, OpenAI, Anthropic, open-source models, and custom fine-tunes."
    >
      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What&rsquo;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Eval suite design', desc: 'Golden-answer datasets, edge-case catalogs, and automated scoring functions built for your domain — not generic benchmarks that miss your failure modes.' },
              { title: 'CI integration', desc: 'Evals run on every pull request. Regressions block the merge — exactly like unit tests. No more "we\'ll test it in staging."' },
              { title: 'Red-team prompt library', desc: 'Curated adversarial prompts that test for jailbreaks, prompt injection, data leakage, and off-topic drift. Updated as new attack patterns emerge.' },
              { title: 'Production dashboards', desc: 'Latency P50/P95, token cost per request, error rate, and quality scores — all in one view your ops team can act on.' },
              { title: 'Drift detection', desc: 'Automated alerts when model behavior shifts — whether from a provider-side update, a data change, or prompt drift. You find out in minutes, not weeks.' },
              { title: 'Cost optimization', desc: 'Token-usage analysis, semantic caching, and model-routing recommendations. Typical result: 20–40% cost reduction with no quality loss.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tooling approach */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How we keep it safe</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Plugs into your existing stack</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We integrate with your CI/CD (GitHub Actions, Azure DevOps), observability tools (Datadog, Grafana, Application Insights), and model providers. No new vendor login required.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Schema-validated eval outputs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">All eval results output to a typed schema — easy to aggregate into dashboards, historical trend analysis, and automated gating decisions.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Audit trail</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every eval run is versioned and logged: dataset version, model version, prompt version, and score. Full traceability for compliance and improvement tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality assurance</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Multi-dimensional scoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We don&rsquo;t rely on a single accuracy number. Eval suites score faithfulness, relevance, safety, format compliance, and latency independently. A failure in any dimension blocks the deploy — because "mostly accurate" isn\'t a production standard.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Production failures become test cases</h3>
              <p className="text-gray-600 text-sm leading-relaxed">When a new failure mode surfaces in production, it automatically becomes a test case in the eval suite. The same issue never ships twice. Your AI gets more reliable over time, not less.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & privacy */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data &amp; privacy</h2>
          <ul className="space-y-4">
            {[
              'Permissioning: eval dashboards and logs are scoped to your team via RBAC — no cross-tenant data exposure.',
              'PII handling: eval datasets can be auto-anonymized. Production logs support PII redaction in the ingestion pipeline.',
              'Data boundaries: all monitoring data stays in your infrastructure. We deploy dashboards and alerting — we don\'t host your data.',
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
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Timeline &amp; investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Blueprint</p>
              <p className="text-2xl font-bold text-gray-900">10 days</p>
              <p className="text-sm text-gray-600 mt-1">Eval strategy + tooling assessment</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Build</p>
              <p className="text-2xl font-bold text-gray-900">2 – 4 weeks</p>
              <p className="text-sm text-gray-600 mt-1">Eval suite + monitoring</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Investment</p>
              <p className="text-2xl font-bold text-gray-900">$15K – $50K</p>
              <p className="text-sm text-gray-600 mt-1">Depends on system count</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">What we need from you</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Access to the AI systems to be evaluated (APIs, prompts, model configs)</li>
              <li>• Subject-matter experts to define golden answers and review edge cases</li>
              <li>• Access to your CI/CD and observability stack for integration</li>
              <li>• Weekly 30-minute check-ins during setup</li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
