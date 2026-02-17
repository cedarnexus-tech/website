import type { Metadata } from 'next'
import Link from 'next/link'
import Disclaimer from '@/components/Disclaimer'
import SecurityGuardrails from '@/components/SecurityGuardrails'
import CTASection from '@/components/CTASection'

interface ServicePageLayoutProps {
  children: React.ReactNode
  heroTitle: string
  heroSubtitle: string
  techQualifier?: string
}

export default function ServicePageLayout({
  children,
  heroTitle,
  heroSubtitle,
  techQualifier,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">{heroSubtitle}</p>
          {techQualifier && (
            <p className="text-sm text-gray-500 font-medium">{techQualifier}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/blueprint"
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Get a 10-day paid Blueprint
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center"
            >
              Book a free 30-min call
            </Link>
          </div>
        </div>
      </section>

      {/* Page-specific content */}
      {children}

      {/* Guardrails */}
      <SecurityGuardrails />

      {/* CTA */}
      <CTASection
        headline="Stop funding pilots that never ship."
        body="A 10-day paid Blueprint gives you an architecture doc, risk register, costed backlog, and ROI model — artifacts you own and can act on immediately."
        buttonText="Get a 10-day paid Blueprint"
        href="/blueprint"
      />

      {/* Inline disclaimer */}
      <div className="py-6 bg-gray-50 text-center">
        <Disclaimer variant="inline" />
      </div>
    </>
  )
}
