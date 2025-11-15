import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-powered growth for service businesses.
            </h1>
            <div className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              CedarNexus helps HVAC, dental, and other service businesses turn every call, message, 
              and review into predictable revenue. Our AI agents work 24/7 to capture demand, boost 
              conversions, and bring customers back.
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Stop losing leads to voicemail and slow responses. Start converting more opportunities 
              into loyal customers with intelligent automation that feels human.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Talk to our team
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Explore our solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What we deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful systems that work together to grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Demand Capture Platform */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Demand Capture Platform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a lead again. Our AI receptionist answers every call, chat, and message 
                instantly—day or night. Qualify prospects, book appointments, and route urgent requests 
                to the right person, every time.
              </p>
            </div>

            {/* Conversion Lift Kit */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conversion Lift Kit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Turn more inquiries into paying customers. Smart follow-ups, automated reminders, 
                and personalized outreach ensure prospects don't slip through the cracks. Reduce 
                no-shows and increase close rates.
              </p>
            </div>

            {/* Reactivation Engine */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reactivation Engine
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bring customers back on autopilot. Intelligent campaigns reach out to past customers 
                at the perfect time—seasonal reminders, maintenance check-ups, and special offers that 
                drive repeat business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries we serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for service-driven businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HVAC & Home Services */}
            <Link 
              href="/industries#hvac"
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-300 transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                HVAC & Home Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI solutions for heating, cooling, plumbing, electrical, and general contracting. 
                Handle emergency calls 24/7, optimize technician schedules, and boost seasonal maintenance revenue.
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>

            {/* Dental & Healthcare */}
            <Link 
              href="/industries#healthcare"
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-300 transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Dental & Healthcare Clinics
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Patient engagement and practice management for dental offices and healthcare providers. 
                Reduce no-shows, streamline scheduling, and improve patient satisfaction with automated workflows.
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>

            {/* Other Local Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Other Local Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lawn care, pest control, cleaning services, and more. If you run a local service business 
                that relies on phone calls and appointments, our AI agents can help you grow.
              </p>
              <Link href="/contact" className="text-primary-600 font-medium hover:underline">
                Discuss your needs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Teaser Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Build the future of AI with us
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're looking for talented engineers, data scientists, and consultants who want to create 
            AI solutions that make a real difference. Join a team that's transforming how service 
            businesses operate and grow.
          </p>
          <Link 
            href="/careers" 
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View open positions
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to grow your service business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's discuss how AI can help you capture more leads, convert more customers, 
            and grow predictable revenue.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  )
}
