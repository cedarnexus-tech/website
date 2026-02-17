import Link from 'next/link'
import ProofStrip from '@/components/ProofStrip'
import OfferCard from '@/components/OfferCard'
import SecurityGuardrails from '@/components/SecurityGuardrails'
import CaseStudy from '@/components/CaseStudy'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Disclaimer from '@/components/Disclaimer'

const services = [
  {
    title: 'AI Workflow Automation',
    description: 'Replace 3-day manual processes with auditable AI workflows. Includes tool allowlists, schema enforcement, eval suites, and human-in-the-loop escalation.',
    href: '/services/ai-workflow-automation',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'RAG & Copilot',
    description: 'Cut research and lookup time by 50–70%. Your team gets answers grounded in your data — with faithfulness scoring, PII boundaries, and full audit trails.',
    href: '/services/rag-copilot',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'AI Evals & Observability',
    description: 'Catch regressions before users do. Automated eval suites, red-team tests, drift alerts, and cost dashboards — wired into your CI/CD pipeline.',
    href: '/services/ai-evals-observability',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Modernization Sprint',
    description: 'Go from monthly deploys to daily. Containers, CI/CD, observability, and security hardening for .NET / Azure — in a fixed 4–8 week sprint.',
    href: '/services/modernization-sprint',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Fabric & Power BI Foundation',
    description: 'Eliminate "my numbers don\'t match" debates. One governed lakehouse, one semantic layer, automated quality checks — ready for AI and self-service BI.',
    href: '/services/fabric-powerbi-foundation',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: 'Cost Takeout Blueprint',
    description: 'Cut SaaS + ERP spend 15–30%. License audit, renegotiation playbooks, and a prioritized savings plan — delivered in 10–14 days.',
    href: '/services/cost-takeout-blueprint',
    icon: (
      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const faqItems = [
  {
    question: 'How do you price engagements?',
    answer: 'Every engagement starts with a paid 10-day Blueprint ($X,XXX). Build phases are fixed-scope and priced per sprint. You approve each sprint before it begins — no open-ended retainers, no surprise invoices.',
  },
  {
    question: 'What ROI can we expect?',
    answer: 'It depends on the workflow, but typical outcomes include 60–80% reduction in manual processing time, 15–25% infrastructure cost savings after optimization, and measurably fewer production incidents. The Blueprint includes an ROI model specific to your situation.',
  },
  {
    question: 'Do we need to be on Azure already?',
    answer: 'No. Many AI engagements are cloud-agnostic. For Fabric / Power BI and .NET modernization, Azure is the target — but we handle the migration as part of the sprint. We also work with AWS, GCP, and hybrid setups.',
  },
  {
    question: 'What does "guardrails" mean concretely?',
    answer: 'Input/output allowlists that restrict what the model can access. JSON Schema validation on every tool call. Automated eval suites (regression + red-team) in CI. Production dashboards for latency, cost, error rate, and drift. Human-in-the-loop escalation at configurable confidence thresholds. Full audit logging of every LLM invocation.',
  },
  {
    question: 'Are you a Microsoft partner?',
    answer: 'No. CedarNexus is an independent company and is not affiliated with Microsoft. We use Azure, .NET, Fabric, and Power BI because they fit many mid-market workloads — not because of a partnership. Our recommendations are driven by your best outcome, not a vendor agreement.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cut manual work by 60–80%.
              Ship AI workflows that pass audit.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              We build AI automation, data platforms, and modernized Azure / .NET systems for
              mid-market teams — with the evals, observability, and security controls your CISO
              and CFO both require. Fixed scope. Measurable outcomes. No multi-year roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blueprint"
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get a 10-day paid Blueprint
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Book a free 30-min call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <ProofStrip />

      {/* Services grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Where the budget is going in 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five services that map to the line items procurement is already approving —
              each scoped, priced, and delivered with guardrails baked in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <OfferCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How engagements work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed scope, weekly demos, no surprise invoices. You know the cost and timeline before we write a line of code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Blueprint (10 days)',
                desc: 'Paid discovery. We deliver an architecture doc, risk register, costed backlog, and ROI model. You own every artifact — execute with us or on your own.',
              },
              {
                step: '02',
                title: 'Fixed-scope build (4–10 wks)',
                desc: 'We build in 2-week sprints with weekly demos. Every increment ships with eval suites, monitoring dashboards, and audit logging — not just features.',
              },
              {
                step: '03',
                title: 'Retainer (optional)',
                desc: 'Ongoing eval-suite updates, model-version upgrades, drift monitoring, and quarterly cost-optimization reviews. Most clients see 15–25% infra savings by quarter two.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-8">
                <span className="text-4xl font-bold text-primary-200">{s.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blueprint"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Get a 10-day paid Blueprint
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Measured results, not case-study fluff</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anonymized metrics from production deployments — the numbers clients shared with their boards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudy
              industry="Financial Services"
              challenge="Manual document review consumed 3 analyst-days per deal, blocking $2M+ in quarterly pipeline."
              outcome="RAG copilot with schema-validated extraction and human review on low-confidence outputs. Processing dropped from 3 days to 4 hours. Accuracy exceeded the manual baseline."
              metrics={['80% reduction in review time', '95.3% extraction accuracy vs. 91% manual', '$420K annualized labor savings']}
            />
            <CaseStudy
              industry="B2B SaaS"
              challenge="Legacy .NET monolith deployed monthly with weekend war rooms. Zero observability. AI feature roadmap blocked for 9 months."
              outcome="6-week modernization sprint: containerized on Azure Container Apps, CI/CD via GitHub Actions, OpenTelemetry tracing end-to-end. First AI feature shipped 3 weeks after sprint closed."
              metrics={['Deploy frequency: monthly → daily', 'MTTR: 4 hours → 22 minutes', 'AI roadmap unblocked — first feature live week 9']}
            />
          </div>
        </div>
      </section>

      {/* Security & Guardrails */}
      <SecurityGuardrails />

      {/* FAQ */}
      <FAQ items={faqItems} heading="Frequently asked questions" />

      {/* Final CTA */}
      <CTASection
        headline="Stop funding pilots that never ship."
        body="A 10-day paid Blueprint gives you an architecture doc, risk register, costed backlog, and ROI model — artifacts you own and can act on immediately."
        buttonText="Get a 10-day paid Blueprint"
        href="/blueprint"
      />
    </>
  )
}
