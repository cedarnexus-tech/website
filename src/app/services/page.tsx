import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Hands-on services to get AI and automation working in your business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              CedarNexus partners with HVAC, dental, and other service businesses to design, implement, and refine AI-powered workflows. We don't just provide technology—we work alongside your team to ensure AI agents deliver real results from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation & Onboarding */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implementation & Onboarding</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Getting AI working in your business requires careful planning and execution. Our implementation process ensures a smooth transition from current operations to AI-enhanced workflows.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery Sessions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start by understanding your current processes, customer touchpoints, and pain points. Through collaborative sessions with your team, we map out where AI can make the biggest impact.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Workflow Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We document your current workflows—from initial customer contact through service delivery and follow-up. This mapping reveals opportunities for automation and identifies where AI agents can enhance customer experience.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuration & Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  We configure AI agents to match your brand voice, business rules, and service standards. Rigorous testing ensures agents handle real-world scenarios before going live.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pilot Launch & Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  We launch with a controlled pilot to validate performance, then train your team on working alongside AI agents. This hands-on approach builds confidence and ensures smooth adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent & Workflow Design */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Agent & Workflow Design</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CedarNexus designs AI agents with specific jobs tailored to your business. Each agent is configured to handle particular tasks, integrate with your systems, and escalate appropriately when needed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Receptionist</h3>
                <p className="text-gray-600 leading-relaxed">
                  Answers calls 24/7, handles common inquiries, books appointments, and routes complex issues to the right team member. Never miss a potential customer again.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Scheduling Assistant</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimizes your calendar by finding ideal appointment times, sending reminders, and handling rescheduling requests—reducing no-shows and maximizing utilization.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Response Assistant</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitors online reviews across platforms and drafts professional, on-brand responses. Saves hours while maintaining your reputation and customer relationships.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Internal Operations Companion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Helps your team with common internal tasks—looking up customer history, generating reports, answering policy questions—so they can focus on higher-value work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Data Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration & Data Services</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI agents work best when they're connected to your existing systems. We handle the technical complexity of integrating with CRMs, booking systems, messaging tools, and more—ensuring data flows smoothly and insights are actionable.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">System Integration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We connect AI agents with your CRM, scheduling software, payment processors, and communication platforms. This enables agents to access real-time information and take actions on behalf of your business.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">ServiceTitan</span>
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">Dentrix</span>
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">Open Dental</span>
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">Salesforce</span>
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">HubSpot</span>
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700">Calendly</span>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Flow Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  We architect how data moves between systems—ensuring customer information stays synchronized, AI agents have the context they need, and your team gets actionable insights without manual data entry.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting & Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom dashboards and reports help you understand AI agent performance, customer interaction trends, and ROI. Track metrics like call answer rates, appointment conversions, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Optimization & Managed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ongoing Optimization & Managed Services</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI agents improve over time with continuous tuning and optimization. We provide ongoing support to ensure your systems adapt to changing business needs and deliver maximum value.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Tuning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular refinement of AI agent responses, conversation flows, and decision logic based on real-world performance data. We monitor interactions, identify improvement opportunities, and make adjustments to optimize results.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Playbooks & Documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop custom playbooks that document how AI agents operate, when they escalate to humans, and best practices for your team. This ensures consistent service delivery and makes onboarding new team members seamless.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Managed Services (Optional)</h3>
                <p className="text-gray-600 leading-relaxed">
                  For businesses that want a hands-off approach, we offer fully-managed AI services. We handle ongoing monitoring, optimization, updates, and support—so you can focus on running your business while AI handles the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our hands-on services can help you implement AI solutions that drive real business results.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Schedule a discovery session
          </Link>
        </div>
      </section>
    </>
  )
}
