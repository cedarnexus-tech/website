import Link from 'next/link'

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers at CedarNexus Technologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Join a small team building AI-powered solutions for real service businesses. Work on meaningful problems that help local companies grow and serve their customers better.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at CedarNexus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Why work at CedarNexus?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-end ownership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Own features from concept to deployment. Talk directly to customers, design solutions, write code, and see the impact of your work in production. No silos, no endless meetings—just building.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern stack & real problems</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with cutting-edge AI, modern cloud infrastructure, and APIs. Solve real problems for real businesses—not vanity projects. Build systems that handle thousands of customer interactions daily.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Small team, big responsibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every person on the team has a meaningful impact. Your ideas and decisions shape the product, the company, and the customer experience. No bureaucracy, no red tape.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning and growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work across the stack, learn from customer conversations, and grow your skills in AI, integrations, and business operations. We invest in your development.
                </p>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support for OPT/STEM and H-1B sponsorship</h3>
                <p className="text-gray-600 leading-relaxed">
                  We support strong OPT/STEM candidates and are open to H-1B sponsorship as the company grows. We value diverse perspectives and are committed to building an inclusive team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Open roles</h2>
            
            <div className="space-y-8">
              {/* Software Engineer, AI & Integrations */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Software Engineer, AI & Integrations</h3>
                  <p className="text-gray-600">
                    Build AI agents and integrations that power customer interactions for service businesses.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What you'll do:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Design and implement AI agents (receptionist, scheduling assistant, operations companion)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Build integrations with CRMs, scheduling systems, and communication platforms (ServiceTitan, Dentrix, Twilio, etc.)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Optimize AI performance through prompt engineering, fine-tuning, and workflow design
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Work directly with customers to understand requirements and iterate on solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Build monitoring, analytics, and reporting systems to track AI agent performance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What we're looking for:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Experience with Python, TypeScript/Node.js, or similar languages
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Interest in AI/LLMs (experience with OpenAI, Anthropic, or similar is a plus)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Strong problem-solving skills and ability to work independently
                    </li>
                  </ul>
                </div>
              </div>

              {/* Implementation Consultant, Service Businesses */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Implementation Consultant, Service Businesses</h3>
                  <p className="text-gray-600">
                    Partner with HVAC, dental, and other service businesses to implement and optimize AI-powered workflows.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What you'll do:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Lead discovery sessions to understand customer workflows and pain points
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Design AI agent configurations and workflows tailored to each business
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Manage pilot launches, training, and onboarding for customer teams
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Create playbooks and documentation for AI agent operations
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Monitor performance and continuously optimize workflows for better results
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What we're looking for:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Experience in consulting, implementation, or customer-facing technical roles
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Understanding of service business operations (HVAC, dental, or similar a plus)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Strong communication and project management skills
                    </li>
                  </ul>
                </div>
              </div>

              {/* Customer Success & Growth Specialist */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Success & Growth Specialist</h3>
                  <p className="text-gray-600">
                    Ensure customer success, drive adoption, and identify growth opportunities within existing accounts.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What you'll do:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Own customer relationships and ensure they achieve their goals with CedarNexus solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Monitor AI agent performance and proactively identify optimization opportunities
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Conduct regular check-ins, business reviews, and strategy sessions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Identify expansion opportunities (additional AI agents, new workflows, etc.)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Gather customer feedback and work with product/engineering to improve solutions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What we're looking for:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Experience in customer success, account management, or operations roles
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Data-driven mindset with ability to analyze metrics and identify trends
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Excellent communication and relationship-building skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to apply</h2>
            
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Interested in joining CedarNexus? We'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  <strong>Send an email to:</strong> <a href="mailto:careers@cedarnexus.com" className="text-primary-600 hover:text-primary-700 underline">careers@cedarnexus.com</a>
                </p>
                
                <p className="text-gray-700">
                  <strong>Include:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Your resume or CV</li>
                  <li>Links to relevant work (GitHub, portfolio, LinkedIn, etc.)</li>
                  <li>A short note about why you're interested in CedarNexus and which role(s) you're applying for</li>
                  <li>Any questions you have about the role or the company</li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                We review applications on a rolling basis and will get back to you within a week. Even if none of the open roles are a perfect fit, we're always happy to meet talented people who are excited about AI and service businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions about working at CedarNexus?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Reach out to learn more about our team, culture, and opportunities.
          </p>
          <a href="mailto:careers@cedarnexus.com" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Contact us
          </a>
        </div>
      </section>
    </>
  )
}
