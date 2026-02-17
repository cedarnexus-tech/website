import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'AI Workflow Automation',
  description:
    'Automate multi-step business processes with AI — cut manual work 60–80% while maintaining full auditability. Tool allowlists, schema enforcement, eval suites, and human-in-the-loop controls included.',
  openGraph: { title: 'AI Workflow Automation | CedarNexus' },
}

export default function AIWorkflowAutomationPage() {
  return (
    <ServicePageLayout
      heroTitle="Automate the 3-day process into 3 hours — without losing auditability."
      heroSubtitle="Most manual workflows exist because no one trusts automation to handle the edge cases. We build AI workflows with tool allowlists, schema validation, eval suites, and human-in-the-loop escalation — so the process is faster and more auditable than the manual version it replaces."
      techQualifier="Typically uses Azure OpenAI, Semantic Kernel, LangGraph, or your preferred orchestration layer."
    >
      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What&rsquo;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Multi-step orchestration', desc: 'Workflows with conditional branching, parallel tool calls, retries, and dead-letter handling — not a single prompt-and-pray call.' },
              { title: 'Integration connectors', desc: 'Pre-built and custom connectors for your CRM, ERP, database, and messaging systems. The workflow talks to your stack, not a demo environment.' },
              { title: 'Tool allowlists & schema gates', desc: 'Every external call is gated by an allowlist and validated against a JSON Schema. The AI cannot invoke unapproved operations or produce malformed output.' },
              { title: 'Human-in-the-loop escalation', desc: 'Configurable confidence thresholds route uncertain decisions to a human reviewer — before execution, not after damage.' },
              { title: 'Eval suite in CI', desc: 'Regression tests, red-team prompts, and accuracy benchmarks run on every pull request. Regressions block the merge, just like unit tests.' },
              { title: 'Monitoring & cost dashboard', desc: 'Latency P95, token cost per workflow run, error rate, and output drift — with alerting. Deployed alongside the workflow, not as an afterthought.' },
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
              <h3 className="font-semibold text-gray-900 mb-2">Typed integrations only</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every external call is defined as a typed tool with input/output schemas. Tools are registered in an allowlist. If it’s not on the list, the agent cannot call it — period.
              </p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Retries & dead-letter handling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transient failures trigger automatic retries with exponential backoff. Permanent failures are logged with full context, alerted, and routed to a dead-letter queue for human triage. No silent failures.
              </p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Immutable audit trail</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every LLM call is logged: prompt, completion, token count, tool invocations, latency, and cost. Logs are append-only and queryable — ready for compliance review or incident forensics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality you can measure</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Eval suites gate every deploy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Golden-answer datasets, edge-case prompts, and accuracy thresholds run in CI on every PR. If eval scores drop, the merge is blocked. No regressions reach production.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Red-team testing on every release</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A curated adversarial prompt set tests for jailbreaks, prompt injection, off-topic outputs, and data leakage. Runs automatically — not once in a slide deck, but on every release.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Live dashboards with alerting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Latency P50/P95, token cost per run, error rate, and output drift. Alerts fire when any metric breaches your threshold — you see the problem before your users report it.</p>
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
              'Permissioning: role-based access controls determine which users and services can invoke each workflow.',
              'PII handling: configurable PII detection and redaction in prompts and logs — compliant with your data-handling policy.',
              'Data boundaries: your data stays in your tenant. We configure Azure OpenAI deployments in your subscription with your network controls.',
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
              <p className="text-sm text-gray-600 mt-1">Architecture + backlog</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Build</p>
              <p className="text-2xl font-bold text-gray-900">4 – 8 weeks</p>
              <p className="text-sm text-gray-600 mt-1">MVP to production</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Investment</p>
              <p className="text-2xl font-bold text-gray-900">$30K – $120K</p>
              <p className="text-sm text-gray-600 mt-1">Depends on scope</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">What we need from you</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• A designated product owner with decision-making authority</li>
              <li>• Access to the systems and APIs the workflows will integrate with</li>
              <li>• Sample data or test accounts for eval-suite development</li>
              <li>• Weekly 30-minute check-ins during the build phase</li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
