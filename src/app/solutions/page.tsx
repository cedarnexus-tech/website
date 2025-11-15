import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              AI agents and automation designed for service businesses.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Suite */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Agents Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent agents that handle critical business tasks automatically, freeing your team to focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Receptionist */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI Receptionist</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Answers incoming calls 24/7, qualifies leads, handles common questions, and books appointments with natural conversation.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Never miss a call or potential customer
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant response with your brand voice
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Smart routing to the right team member
                </li>
              </ul>
            </div>

            {/* AI Scheduling Assistant */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI Scheduling Assistant</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Optimizes appointment booking, sends reminders, handles rescheduling, and reduces no-shows automatically.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Intelligent calendar optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automated reminder sequences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Seamless rescheduling & cancellations
                </li>
              </ul>
            </div>

            {/* AI Review & Reputation Assistant */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI Review & Reputation Assistant</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monitors reviews across platforms, drafts professional responses, and requests feedback from satisfied customers.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multi-platform review monitoring
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI-drafted on-brand responses
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Proactive review request campaigns
                </li>
              </ul>
            </div>

            {/* AI Operations Companion */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI Operations Companion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Assists your team with internal tasks like customer lookups, report generation, and answering policy questions.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant customer history access
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automated report generation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Team knowledge base assistant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for HVAC & Home Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions for HVAC & Home Services</h2>
              <p className="text-xl text-gray-600">
                Purpose-built AI capabilities for heating, cooling, plumbing, electrical, and general contracting businesses.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Missed-Call Capture & Qualification</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI receptionist answers every call—even after hours or when your team is busy. Qualifies leads, captures job details, and routes emergencies immediately while scheduling routine requests for optimal slots.
                </p>
              </div>

              <div className="p-6 bg-white border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency vs. Routine Triage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent call routing that distinguishes urgent issues (no heat in winter, water leaks) from routine maintenance. Emergency calls get instant attention while routine work is scheduled for maximum efficiency.
                </p>
              </div>

              <div className="p-6 bg-white border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scheduling Automation & Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI scheduling considers technician availability, location, skill sets, and job duration to create optimal routes and maximize billable hours. Automatic confirmation and reminder sequences reduce no-shows.
                </p>
              </div>

              <div className="p-6 bg-white border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tune-Up Reminders & Seasonal Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated outreach for annual HVAC maintenance, filter changes, and seasonal check-ups. AI identifies customers due for service and reaches out with personalized messages at optimal times.
                </p>
              </div>

              <div className="p-6 bg-white border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead & Job Dashboards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time visibility into incoming leads, scheduled jobs, and reactivation opportunities. Track conversion rates, response times, and revenue by source to optimize marketing spend and operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for Dental & Healthcare Clinics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions for Dental & Healthcare Clinics</h2>
              <p className="text-xl text-gray-600">
                AI-powered patient engagement and practice management for dental offices and healthcare providers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">New-Patient Capture & Onboarding</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI receptionist handles new patient inquiries, explains insurance acceptance, collects initial information, and schedules first appointments. Creates a welcoming first impression while reducing front-desk workload.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recall & Reminder Workflows</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated recall campaigns for 6-month cleanings, annual exams, and overdue visits. Multi-channel reminders (phone, text, email) with intelligent follow-up sequences to maximize appointment adherence.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Management & Reputation Building</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically request reviews from satisfied patients after visits. Monitor all review platforms, draft professional responses to feedback, and identify trends to improve patient experience.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Reactivation Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI identifies patients who haven't visited recently and reaches out with personalized reactivation messages. Offers incentives, addresses concerns, and makes it easy to schedule a return visit.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Front-Desk Support & Call Handling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce strain on front-desk staff with AI handling routine calls, appointment changes, insurance questions, and prescription refills. Staff focuses on in-office patients while AI manages phone interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cross-Industry Capabilities</h2>
              <p className="text-xl text-gray-600">
                Shared building blocks that power AI solutions across local service businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conversational AI Engine</h3>
                <p className="text-gray-600 leading-relaxed">
                  Natural language processing that understands context, intent, and industry-specific terminology. Handles complex multi-turn conversations with empathy and accuracy.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Channel Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unified platform for phone, SMS, email, web chat, and messaging apps. Maintains conversation context across channels for seamless customer experience.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">CRM & System Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pre-built connectors for popular service business platforms (ServiceTitan, Dentrix, Salesforce, HubSpot). Custom integrations available for specialized systems.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights Dashboard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time metrics on call volume, conversion rates, appointment adherence, and customer sentiment. Identify trends and opportunities to optimize operations.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Automation Framework</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible rule engine for building custom workflows: trigger actions based on customer behavior, time of day, service history, or business rules unique to your operation.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Data Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unified customer profiles that aggregate interaction history, preferences, and service records. Powers personalized experiences and intelligent recommendations.
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
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can help you capture more leads, serve more customers, and grow your business.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Explore solutions for your business
          </Link>
        </div>
      </section>
    </>
  )
}
