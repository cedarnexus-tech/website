import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Disclaimer from '@/components/Disclaimer'

export const metadata: Metadata = {
  title: 'Cost Takeout Blueprint',
  description:
    'Cut SaaS and ERP spend 15–30% without breaking operations. A 10–14 day engagement that audits licenses, contracts, and usage — then delivers a prioritized savings plan you can execute immediately.',
  openGraph: {
    title: 'Cost Takeout Blueprint | CedarNexus',
    description: 'Cut SaaS + ERP spend 15–30% in 10–14 days. Audit, renegotiate, right-size — without breaking operations.',
  },
}

const faqItems = [
  {
    question: 'How is this different from a generic cost-cutting exercise?',
    answer:
      'We don\'t hand you a spreadsheet and wish you luck. The Blueprint includes vendor-specific renegotiation scripts, license-reclamation playbooks, and a phased execution plan with rollback checkpoints. You can act on the first savings within days of handoff.',
  },
  {
    question: 'Will this disrupt our teams?',
    answer:
      'No. We audit usage data and contracts — not your people\'s calendars. Stakeholder interviews take 30 minutes each, and we schedule around your availability. Changes are phased so nothing breaks.',
  },
  {
    question: 'What if we just renewed our contracts?',
    answer:
      'Renewal timing doesn\'t stop savings. We identify unused licenses, duplicate tools, and overprovisioed tiers that can be right-sized immediately. For locked contracts, we build a renegotiation calendar that captures savings at each renewal window.',
  },
  {
    question: 'Do you handle the vendor negotiations?',
    answer:
      'We deliver the leverage and the scripts. You can negotiate yourself using our playbook, or we can join calls as your technical advisor for an additional retainer.',
  },
  {
    question: 'What\'s the typical ROI timeline?',
    answer:
      'Most clients recoup the Blueprint cost within 30 days through quick wins (unused license reclamation, tier downgrades). The full savings plan typically pays back 5–10× within the first year.',
  },
]

export default function CostTakeoutBlueprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cost Takeout Blueprint
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Cut SaaS + ERP spend without breaking operations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most mid-market companies overspend 15–30% on software licenses, cloud infrastructure,
            and ERP modules they barely use. We audit your contracts, usage, and entitlements in
            10–14 days — then hand you a prioritized savings plan with vendor-specific renegotiation
            scripts you can execute immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Book a Call
            </Link>
            <Link
              href="/blueprint"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center"
            >
              Get the Blueprint
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who it&rsquo;s for</h2>
          <ul className="space-y-4">
            {[
              'CFOs and finance teams under pressure to cut operating costs without slowing teams down.',
              'IT leaders managing 50–500+ SaaS subscriptions who suspect significant waste but lack time to audit.',
              'Companies mid-ERP-migration that want to right-size licenses before the next renewal locks pricing.',
              'Post-acquisition teams consolidating duplicate tooling across merged organizations.',
              'Any mid-market company spending $500K+ annually on software that hasn\'t been audited in 12+ months.',
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

      {/* What you get */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'License & usage audit',
                desc: 'A complete inventory of every SaaS subscription, ERP module, and cloud commitment — mapped to actual usage data, not what the vendor says you need.',
              },
              {
                title: 'Savings map',
                desc: 'A prioritized list of savings opportunities with dollar amounts, effort levels, and risk ratings. Quick wins at the top, structural changes phased over quarters.',
              },
              {
                title: 'Renegotiation playbooks',
                desc: 'Vendor-specific scripts, benchmark pricing data, and timing recommendations for your top 5–10 contracts. Ready to use in your next renewal conversation.',
              },
              {
                title: 'Right-sizing recommendations',
                desc: 'Tier downgrades, license reclamations, and consolidation opportunities — with rollback plans so nothing breaks if a change has unintended effects.',
              },
              {
                title: 'Execution timeline',
                desc: 'A 90-day phased plan with owners, milestones, and checkpoints. Not a "boil the ocean" transformation — a sequenced set of actions you can start this month.',
              },
              {
                title: 'ROI model',
                desc: 'Projected annual savings, one-time reclamation value, and payback period — the spreadsheet your CFO needs to green-light the next step.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How it works (10–14 days)</h2>
          <div className="space-y-8">
            {[
              {
                day: 'Day 1–3',
                title: 'Data collection & inventory',
                desc: 'We gather contract documents, license entitlements, billing data, and usage logs. We also conduct 2–3 short stakeholder interviews to understand what tools teams actually depend on.',
              },
              {
                day: 'Day 4–7',
                title: 'Analysis & benchmarking',
                desc: 'We map usage against entitlements, identify unused or underused licenses, flag duplicate tools, and benchmark your pricing against market rates for comparable companies.',
              },
              {
                day: 'Day 8–11',
                title: 'Savings plan & playbooks',
                desc: 'We build the prioritized savings map, write renegotiation scripts for your top contracts, and model the ROI for each recommended change.',
              },
              {
                day: 'Day 12–14',
                title: 'Presentation & handoff',
                desc: 'We walk through every recommendation, answer questions, and hand off all artifacts. You own every document. Execute with us or on your own.',
              },
            ].map((step) => (
              <div key={step.day} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-sm font-bold text-primary-600">{step.day}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What we need from you</h2>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">1.</span>
                <span>A finance or IT sponsor who can share contract and billing data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">2.</span>
                <span>Access to license management portals (admin consoles for major SaaS vendors, ERP, cloud).</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">3.</span>
                <span>30 minutes each with 2–3 stakeholders (IT, finance, one business-line owner).</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">4.</span>
                <span>A 60-minute session at the end to walk through findings and next steps.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Typical outcomes */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Typical outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: '15–30%',
                label: 'annual SaaS + ERP cost reduction',
                detail: 'From license reclamation, tier optimization, and contract renegotiation.',
              },
              {
                metric: '< 30 days',
                label: 'to first realized savings',
                detail: 'Quick wins (unused licenses, duplicate tools) execute immediately after handoff.',
              },
              {
                metric: '5–10×',
                label: 'ROI in the first year',
                detail: 'Blueprint fee typically pays back within the first month of savings.',
              },
            ].map((item) => (
              <div key={item.metric} className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-primary-600 mb-1">{item.metric}</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">{item.label}</p>
                <p className="text-xs text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Cost Takeout FAQ" />

      {/* CTA */}
      <CTASection
        headline="Stop overpaying for software you barely use."
        body="A 10–14 day Cost Takeout Blueprint gives you a prioritized savings plan, renegotiation playbooks, and an ROI model — artifacts you own and can act on immediately."
        buttonText="Get a 10-day paid Blueprint"
        href="/blueprint"
      />

      {/* Disclaimer */}
      <div className="py-6 bg-gray-50 text-center">
        <Disclaimer variant="inline" />
      </div>
    </>
  )
}
