import Link from 'next/link'

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              AI-powered solutions for service businesses where every call and appointment matters.
            </p>
          </div>
        </div>
      </section>

      {/* HVAC & Home Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Industry Overview */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  Small Businesses
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">HVAC & Home Services</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  For heating, cooling, plumbing, electrical, and general contracting businesses, missing a call can mean losing thousands in revenue. Your team is often in the field, customers need immediate answers, and emergencies don't wait for business hours.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Missed calls when technicians are on job sites or after hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Difficulty distinguishing emergency calls from routine maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Inefficient scheduling leading to wasted drive time and lost revenue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Customers forgetting tune-ups, leading to lost recurring revenue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Lack of visibility into lead sources and conversion rates</span>
                  </li>
                </ul>
              </div>

              {/* How We Help */}
              <div className="lg:mt-16">
                <div className="bg-primary-50 p-8 rounded-lg border border-primary-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">How CedarNexus Helps:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">24/7 AI Receptionist</span>
                        <p className="text-gray-600 text-sm mt-1">Answer every call instantly, qualify leads, and capture job details even when your team is unavailable.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Smart Call Triage</span>
                        <p className="text-gray-600 text-sm mt-1">Automatically prioritize emergencies and route them to on-call technicians while scheduling routine work optimally.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Intelligent Scheduling</span>
                        <p className="text-gray-600 text-sm mt-1">Optimize technician routes and calendars to maximize billable hours and reduce no-shows.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Automated Maintenance Reminders</span>
                        <p className="text-gray-600 text-sm mt-1">Proactive outreach for seasonal tune-ups and filter changes drives recurring revenue.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Lead & Job Analytics</span>
                        <p className="text-gray-600 text-sm mt-1">Track where leads come from, conversion rates, and revenue by service type to optimize marketing.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary-200">
                    <Link href="/solutions#hvac" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                      Explore HVAC solutions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental & Healthcare Clinics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* How We Help */}
              <div className="lg:mt-16 order-2 lg:order-1">
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">How CedarNexus Helps:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">AI Phone & Front-Desk Support</span>
                        <p className="text-gray-600 text-sm mt-1">Handle new patient inquiries, appointment scheduling, and routine questions—freeing staff to focus on in-office patients.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Automated Recall Campaigns</span>
                        <p className="text-gray-600 text-sm mt-1">Multi-channel reminders for 6-month cleanings, annual exams, and overdue visits keep your schedule full.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Patient Reactivation Workflows</span>
                        <p className="text-gray-600 text-sm mt-1">AI identifies lapsed patients and reaches out with personalized messages to bring them back.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Review Management</span>
                        <p className="text-gray-600 text-sm mt-1">Automatically request reviews from satisfied patients and respond professionally to all feedback.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Appointment Optimization</span>
                        <p className="text-gray-600 text-sm mt-1">Reduce no-shows with smart reminder sequences and make rescheduling effortless for patients.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link href="/solutions#dental" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                      Explore dental solutions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Industry Overview */}
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  Healthcare
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Dental & Healthcare Clinics</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Dental and healthcare practices face constant pressure to provide excellent patient care while managing a busy front desk, maintaining full schedules, and building lasting patient relationships.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Overloaded front-desk staff juggling phones and in-office patients</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Inconsistent follow-up on recalls and overdue patients</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">High no-show rates impacting schedule efficiency and revenue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Difficulty maintaining online reputation and responding to reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Lost new patient opportunities due to slow response times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Local & Professional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Industry Overview */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  Professional Services
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Other Local & Professional Services</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  From veterinary clinics to law firms, auto repair shops to salon & spa businesses—any service business that relies on appointments, customer communication, and reputation can benefit from AI-powered automation.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Limited staff capacity to handle incoming inquiries during peak hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Manual appointment scheduling and reminder processes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Inconsistent customer follow-up and relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Difficulty tracking customer sentiment and feedback across channels</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Need to scale operations without proportionally increasing headcount</span>
                  </li>
                </ul>
              </div>

              {/* How We Help */}
              <div className="lg:mt-16">
                <div className="bg-primary-50 p-8 rounded-lg border border-primary-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">How CedarNexus Helps:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Flexible AI Agent Platform</span>
                        <p className="text-gray-600 text-sm mt-1">Core AI capabilities adapt to your specific industry terminology, workflows, and customer interaction patterns.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Multi-Channel Customer Engagement</span>
                        <p className="text-gray-600 text-sm mt-1">Handle phone, SMS, email, and chat from a unified platform with consistent brand voice.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Custom Workflow Automation</span>
                        <p className="text-gray-600 text-sm mt-1">Design workflows specific to your business—from intake forms to follow-up sequences to reporting.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">System Integration</span>
                        <p className="text-gray-600 text-sm mt-1">Connect with your existing CRM, scheduling, and communication tools for seamless data flow.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">Scalable Growth Support</span>
                        <p className="text-gray-600 text-sm mt-1">Handle increased volume without adding staff—AI agents scale instantly to meet demand.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary-200">
                    <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                      Discuss your industry needs
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See What AI Can Do for Your Industry?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Every service business is unique. Let's discuss how CedarNexus can help you capture more opportunities, serve more customers, and grow efficiently.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Schedule a consultation
          </Link>
        </div>
      </section>
    </>
  )
}
