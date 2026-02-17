import type { Metadata } from 'next'
import Link from 'next/link'
import Disclaimer from '@/components/Disclaimer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'CedarNexus is an independent consultancy that helps mid-market teams automate workflows, build AI-ready data platforms, and modernize Azure / .NET systems — with measurable ROI.',
  openGraph: { title: 'About | CedarNexus' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Senior engineers who ship. Not a slide-deck factory.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            CedarNexus is a consultancy focused on three things: AI workflow automation that
            cuts manual work by 60–80%, data platforms that stop bad decisions, and .NET / Azure
            modernization that unblocks shipping. We staff engagements with the same senior
            engineers who design the architecture. No bait-and-switch.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How we operate</h2>
          <div className="space-y-8">
            {[
              { title: 'Measurable outcomes, not technology demos', body: 'We don\'t sell stacks. We sell hours saved, costs cut, and revenue unlocked. Every engagement starts with a success metric and measures against it.' },
              { title: 'Guardrails ship with the first deploy', body: 'Eval suites, monitoring dashboards, audit logging, and safety controls are in the first sprint — not a "phase 2" that never happens.' },
              { title: 'Same senior team, start to finish', body: 'The engineers in the Blueprint are the engineers who build and deploy. No hand-off to a B-team. No surprise junior resources.' },
              { title: 'You own everything we produce', body: 'Every Blueprint, codebase, and dashboard belongs to you. Open standards, no proprietary platforms, no hostage-ware. Fire us tomorrow and keep everything.' },
            ].map((item) => (
              <div key={item.title} className="p-6 border-l-4 border-primary-500 bg-gray-50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independence */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Independence</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            CedarNexus is an independent company and is not affiliated with Microsoft. We recommend
            Azure, .NET, Fabric, and Power BI when they’re the right fit for your workload and
            budget — not because of a partnership agreement or referral fee. When another technology
            is better, we say so.
          </p>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <Disclaimer />
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the team</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We hire senior engineers who want to ship production AI, own outcomes end-to-end,
            and work directly with client teams. If that’s you, we’d like to talk.
          </p>
          <Link
            href="/careers"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            View open roles
          </Link>
        </div>
      </section>
    </>
  )
}
