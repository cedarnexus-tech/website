import Link from 'next/link'

export default function WhatWeThinkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What we think
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Our point of view on AI, service businesses, and the future of customer operations.
            </p>
          </div>
        </div>
      </section>

      {/* Themes We Focus On */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Themes we focus on</h2>
            
            <div className="space-y-8">
              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI agents as teammates, not toys</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe AI agents should be reliable, productive members of your team—not gimmicks or experiments. They should handle real work, integrate with your systems, and deliver measurable value from day one.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Service businesses deserve enterprise-grade tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  HVAC companies, dental practices, and local service providers shouldn't settle for consumer-grade software. They deserve the same sophisticated AI and automation capabilities that enterprise companies use—tailored to their unique needs.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Human + AI, not human vs AI</h3>
                <p className="text-gray-600 leading-relaxed">
                  The goal isn't to replace your team—it's to amplify their capabilities. AI handles repetitive tasks so your people can focus on complex problems, build relationships, and deliver exceptional service. The best outcomes happen when humans and AI work together.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary-500 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Measure what matters: appointments, lifetime value, not just clicks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vanity metrics like website traffic and social media likes don't pay the bills. We focus on metrics that drive real business growth: booked appointments, customer lifetime value, conversion rates, and revenue per customer. If it doesn't impact your bottom line, it doesn't matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perspectives We're Working On */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Perspectives we're working on</h2>
            
            <div className="space-y-6">
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  The invisible revenue leak: missed calls in HVAC
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every missed call is a potential customer choosing your competitor. We explore how HVAC businesses lose thousands in revenue each month from unanswered phones—and how AI receptionists solve this silent problem.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Fix your Google Business Profile before you buy more ads
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Spending money on ads while your Google Business Profile has old hours, no photos, and unanswered reviews is like pouring water into a leaky bucket. We discuss why operational excellence beats marketing spend—and how to optimize both.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  What an AI receptionist can and cannot do
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AI receptionists are powerful, but they're not magic. We break down realistic capabilities, limitations, and when you should route calls to humans—so you can set appropriate expectations and design effective workflows.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Why dental practices need reactivation campaigns, not just new patient ads
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acquiring new patients costs 5-10x more than reactivating lapsed ones. We examine why most dental practices overspend on new patient acquisition while neglecting the goldmine of former patients who already know and trust them.
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
            Want to discuss these ideas?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always happy to talk about AI, service businesses, and practical ways to grow. Reach out to share your perspective or explore how these ideas apply to your business.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-50 transition-colors">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
