import type { Metadata } from 'next'
import Link from 'next/link'
import OfferCard from '@/components/OfferCard'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI workflow automation, RAG copilots, evals & observability, Azure/.NET modernization, Fabric/Power BI data foundations, and cost takeout — delivered with guardrails and production-grade quality.',
  openGraph: { title: 'Services | CedarNexus', description: 'Six focused services for mid-market engineering and finance teams.' },
}

const services = [
  {
    title: 'AI Workflow Automation',
    description: 'Replace 3-day manual processes with auditable AI workflows. Tool allowlists, schema enforcement, eval suites, and human-in-the-loop escalation included.',
    href: '/services/ai-workflow-automation',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: 'RAG & Copilot',
    description: 'Cut research and lookup time by 50–70%. Answers grounded in your data with faithfulness scoring, PII boundaries, and full audit trails.',
    href: '/services/rag-copilot',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
  },
  {
    title: 'AI Evals & Observability',
    description: 'Catch regressions before users do. Automated eval suites, red-team tests, drift alerts, and cost dashboards wired into your CI/CD pipeline.',
    href: '/services/ai-evals-observability',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    title: 'Modernization Sprint',
    description: 'Go from monthly deploys to daily. Containers, CI/CD, observability, and security hardening for .NET / Azure — in a fixed 4–8 week sprint.',
    href: '/services/modernization-sprint',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  },
  {
    title: 'Fabric & Power BI Foundation',
    description: 'Eliminate "my numbers don\'t match" debates. One governed lakehouse, one semantic layer, automated quality checks — ready for AI and self-service BI.',
    href: '/services/fabric-powerbi-foundation',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  },
  {
    title: 'Cost Takeout Blueprint',
    description: 'Cut SaaS + ERP spend 15–30%. License audit, renegotiation playbooks, and a prioritized savings plan — delivered in 10–14 days.',
    href: '/services/cost-takeout-blueprint',
    icon: <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Each offering maps to a budget line item your CFO already recognizes: workflow automation
            that cuts manual hours, data platforms that stop bad decisions, modernization that unblocks
            shipping. Fixed scope. Guardrails included. Measurable ROI.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <OfferCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not sure which service fits?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The 10-day Blueprint tells you exactly what to build, what it costs, and the ROI
            you can present to your leadership team — before you commit to a build.
          </p>
          <Link
            href="/blueprint"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Get a 10-day paid Blueprint
          </Link>
        </div>
      </section>
    </>
  )
}
