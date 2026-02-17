import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Disclaimer from '@/components/Disclaimer'

export const metadata: Metadata = {
  title: 'Blueprint — Paid Discovery',
  description:
    'A 10-day paid engagement that gives you an architecture doc, risk register, ROI model, and costed backlog you own — so you can get budget approval with confidence.',
  openGraph: { title: 'Blueprint | CedarNexus' },
}

const faqItems = [
  {
    question: 'How is the Blueprint different from a free consultation?',
    answer: 'In a free call we assess fit and understand your goals. The Blueprint is a paid engagement with dedicated senior consultants who produce real deliverables — an architecture document, risk register, prioritized backlog, and cost model. You own the deliverables whether or not you engage us for the build.',
  },
  {
    question: 'What if we already have an architecture document?',
    answer: "Great — we'll review it, pressure-test the assumptions, and add the risk register, eval strategy, and costed backlog that are usually missing. You'll end up with a more complete, buildable plan.",
  },
  {
    question: 'Can we apply the Blueprint fee toward a build engagement?',
    answer: 'Yes. If you proceed to a build engagement within 60 days, the Blueprint fee is credited toward the project.',
  },
  {
    question: 'What does the client need to provide?',
    answer: 'A product owner with decision-making authority, access to relevant systems and data, and availability for 2–3 working sessions during the 10-day period.',
  },
]

export default function BlueprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get the architecture doc your CFO needs to approve the budget.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            The Blueprint is a paid 10-day engagement. We deliver an architecture document, risk
            register, costed backlog, and ROI model. You own every artifact and can execute with
            us or hand it to your internal team. No lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Book a Blueprint call
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Architecture document', desc: 'System design, technology choices, integration map, and data-flow diagrams — reviewed against your constraints. Clear enough for your tech lead to estimate and your CTO to approve.' },
              { title: 'Risk register', desc: 'Technical, organizational, and compliance risks with concrete mitigations — not a vague "risk: complexity" line item. Scored by likelihood and impact.' },
              { title: 'Costed backlog', desc: 'A buildable backlog ordered by ROI. Each item has acceptance criteria, a time estimate, and a dependency map. Ready to drop into Jira or Linear.' },
              { title: 'ROI model', desc: 'Infrastructure cost projections, build investment range, ongoing operational costs, and expected savings/revenue impact. The spreadsheet your CFO needs to say yes.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How it works</h2>
          <div className="space-y-8">
            {[
              { day: 'Day 1–2', title: 'Discovery sessions', desc: 'We interview stakeholders, review existing systems, and align on goals and constraints.' },
              { day: 'Day 3–5', title: 'Architecture & analysis', desc: 'We design the system, map integrations, identify risks, and draft the backlog.' },
              { day: 'Day 6–8', title: 'Cost modeling & estimation', desc: 'We size the backlog, project infrastructure costs, and build the cost model.' },
              { day: 'Day 9–10', title: 'Presentation & handoff', desc: 'We walk through the deliverables, answer questions, and hand off all artifacts.' },
            ].map((step) => (
              <div key={step.day} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-sm font-bold text-primary-600">{step.day}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who it&rsquo;s for</h2>
          <ul className="space-y-4">
            {[
              'Engineering teams with an AI initiative that need a credible plan before requesting budget.',
              'Companies with a legacy .NET platform that want a modernization roadmap with clear cost/benefit.',
              'Organizations adopting Fabric / Power BI that need a data-quality and governance plan — not just a lakehouse demo.',
              'CTOs or VPs who need an independent technical assessment before committing to a vendor or a build.',
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

      {/* FAQ */}
      <FAQ items={faqItems} heading="Blueprint FAQ" />

      {/* CTA */}
      <CTASection
        headline="Ready to get the plan your board needs?"
        body="Book a 30-minute call. If there’s a fit, we’ll scope a Blueprint and start within a week. You’ll have a buildable plan with ROI projections in 10 business days."
        buttonText="Get a 10-day paid Blueprint"
        href="/contact"
      />

      <div className="py-6 bg-gray-50 text-center">
        <Disclaimer variant="inline" />
      </div>
    </>
  )
}
