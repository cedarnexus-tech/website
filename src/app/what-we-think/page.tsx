import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'What We Think',
  description:
    'Hard-won lessons on getting AI to production, building data platforms that hold up under scrutiny, and modernizing .NET stacks without multi-year rewrites.',
  openGraph: { title: 'What We Think | CedarNexus' },
}

const articles = [
  {
    title: 'Why your AI pilot never made it to production',
    summary: 'Most AI pilots die between demo and production. The causes are predictable: no eval suite, no monitoring, no data-quality baseline, and no owner with P&L accountability. We break down what the teams that ship have in common.',
    tags: ['AI Workflow Automation', 'Guardrails'],
  },
  {
    title: 'Agentic AI needs guardrails, not just prompts',
    summary: 'Tool-calling agents can create CRM records, move money, and send emails. Without allowlists, schema validation, and confidence-gated escalation, one bad inference becomes a production incident. We detail the six controls that make agentic AI auditable.',
    tags: ['AI Workflow Automation', 'Security'],
  },
  {
    title: 'Fabric vs. Databricks: how to choose for mid-market',
    summary: 'Both are capable platforms. The right choice depends on your existing Microsoft licensing, team SQL proficiency, and whether Power BI is a first-class requirement. A decision framework with real cost comparisons.',
    tags: ['Data Foundations', 'Fabric'],
  },
  {
    title: 'The hidden cost of skipping AI evals',
    summary: 'Shipping an AI feature without an eval suite is like deploying code without tests. One client lost $180K in a week from a silent accuracy regression. We show how to build eval suites that scale and what they cost to maintain.',
    tags: ['AI Evals', 'Observability'],
  },
  {
    title: 'Modernization is an AI prerequisite',
    summary: 'You can\'t add AI features to a monolith that deploys monthly and has zero observability. We show how containerization, CI/CD, and tracing pay for themselves in reliability gains within the first quarter — and unblock the AI roadmap as a side effect.',
    tags: ['Modernization', 'Azure / .NET'],
  },
  {
    title: 'What "AI-ready data" actually means',
    summary: 'It\'s not a data lake. AI-ready data means governed schemas, freshness SLAs, access controls that work for both humans and machines, and a semantic layer that eliminates the "my numbers don\'t match" meeting. We define the standard and show what it costs to get there.',
    tags: ['Data Foundations', 'Governance'],
  },
]

export default function WhatWeThinkPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What we think</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hard-won lessons from shipping AI to production, building data platforms that hold up
            under audit, and modernizing .NET stacks without multi-year rewrites. Written by the
            engineers who do the work — not a marketing team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.title} className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                <p className="text-gray-600 leading-relaxed">{article.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have a project that needs a plan?"
        body="A 10-day paid Blueprint gives you an architecture doc, risk register, costed backlog, and ROI model you own."
        buttonText="Get a 10-day paid Blueprint"
        href="/blueprint"
      />
    </>
  )
}
