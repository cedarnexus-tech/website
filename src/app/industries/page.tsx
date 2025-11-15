import Link from 'next/link'

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries we serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              CedarNexus empowers service businesses where every call and appointment matters. We help teams capture more opportunities, automate follow-up, and deliver consistent customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Groups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Banking & Financial Services */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Banking & Financial Services</h2>
              <p className="text-gray-700 mb-4">Missed calls, regulatory compliance, and customer onboarding are critical challenges. Staff are often overloaded with manual tasks and complex workflows.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for customer support and onboarding</li>
                <li>Automation of compliance checks and reporting</li>
                <li>24/7 service and appointment scheduling</li>
              </ul>
            </div>
            {/* Communications, Media & Info Services */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Communications, Media & Info Services</h2>
              <p className="text-gray-700 mb-4">High call volumes, content delivery, and customer engagement are ongoing challenges. Teams struggle with inconsistent follow-up and data management.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI-powered customer engagement</li>
                <li>Automated content distribution and analytics</li>
                <li>Reporting and workflow automation</li>
              </ul>
            </div>
            {/* Consumer, Retail, Travel */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Consumer, Retail & Travel</h2>
              <p className="text-gray-700 mb-4">Missed sales opportunities, seasonal demand, and customer retention are key challenges. Staff are often stretched thin during peak periods.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for sales and support</li>
                <li>Automated reminders and loyalty campaigns</li>
                <li>Dashboards for sales and customer insights</li>
              </ul>
            </div>
            {/* Energy, Manufacturing, Resources, Utilities */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Energy, Manufacturing, Resources & Utilities</h2>
              <p className="text-gray-700 mb-4">Complex scheduling, regulatory reporting, and field service coordination are major pain points. Missed calls can mean lost revenue or compliance issues.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI scheduling and dispatch</li>
                <li>Automated compliance and reporting</li>
                <li>Real-time dashboards for operations</li>
              </ul>
            </div>
            {/* Hi-Tech, Software, Platforms, Gaming */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Hi-Tech, Software, Platforms & Gaming</h2>
              <p className="text-gray-700 mb-4">Customer support, onboarding, and retention are critical. Teams face challenges with scaling support and managing user feedback.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for onboarding and support</li>
                <li>Automated feedback collection and analysis</li>
                <li>Workflow automation for product teams</li>
              </ul>
            </div>
            {/* Healthcare, Life Sciences, Pharma, Medical Devices */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Healthcare, Life Sciences, Pharma & Medical Devices</h2>
              <p className="text-gray-700 mb-4">Missed appointments, patient reactivation, and regulatory compliance are ongoing challenges. Staff are overloaded with calls and paperwork.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for patient scheduling and reminders</li>
                <li>Automated review management and reporting</li>
                <li>Dashboards for patient engagement</li>
              </ul>
            </div>
            {/* Aerospace, Automotive, Industrial, Chemicals */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Aerospace, Automotive, Industrial & Chemicals</h2>
              <p className="text-gray-700 mb-4">Complex supply chains, service scheduling, and compliance are key challenges. Missed calls and slow follow-up can disrupt operations.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI scheduling and supply chain automation</li>
                <li>Automated compliance checks</li>
                <li>Reporting and analytics dashboards</li>
              </ul>
            </div>
            {/* Insurance, Public Service, US Federal Government */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Insurance, Public Service & US Federal Government</h2>
              <p className="text-gray-700 mb-4">High call volumes, claims processing, and regulatory requirements are major pain points. Staff are often overwhelmed by manual tasks.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for claims and support</li>
                <li>Automation of regulatory reporting</li>
                <li>Dashboards for service delivery</li>
              </ul>
            </div>
            {/* Private Equity, Capital Markets, Natural Resources */}
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Private Equity, Capital Markets & Natural Resources</h2>
              <p className="text-gray-700 mb-4">Deal flow management, compliance, and reporting are critical. Teams face challenges with manual data entry and missed opportunities.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-2">
                <li>AI agents for deal flow and reporting</li>
                <li>Automation of compliance checks</li>
                <li>Dashboards for portfolio management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not seeing your industry?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            CedarNexus can tailor AI solutions for any service-driven business. Contact us to discuss your needs.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  )
}
