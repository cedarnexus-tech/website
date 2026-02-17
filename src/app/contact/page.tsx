'use client'

import { useState } from 'react'

const focusAreas = [
  'AI Workflow Automation',
  'RAG & Copilot',
  'AI Evals & Observability',
  'Azure / .NET Modernization',
  'Fabric & Power BI',
  'Blueprint Engagement',
  'General Inquiry',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    focusArea: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Formspree, Resend, or API route
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Let’s scope your project</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tell us what you’re trying to automate or modernize. We’ll set up a 30-minute call to
            assess fit, estimate scope, and decide if a paid Blueprint is the right next step.
            No pitch deck. No pressure.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>

              <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email us directly</h3>
                <a
                  href="mailto:info@cedarnexus.com"
                  className="text-2xl font-semibold text-primary-600 hover:text-primary-700 underline"
                >
                  info@cedarnexus.com
                </a>
                <p className="text-gray-600 mt-3">We respond within one business day.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to expect</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    'Response within one business day',
                    'A 30-minute call to understand your goals, constraints, and budget',
                    'Honest assessment — if we\'re not the right fit, we\'ll say so and explain why',
                    'If there\'s a fit: a scoped Blueprint proposal with timeline and investment range within a week',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>

              {submitted ? (
                <div className="p-8 bg-primary-50 border border-primary-200 rounded-lg text-center">
                  <svg className="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent</h3>
                  <p className="text-gray-600">We&rsquo;ll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                    <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone <span className="text-gray-500 font-normal">(optional)</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="focusArea" className="block text-sm font-semibold text-gray-700 mb-2">Focus area *</label>
                    <select id="focusArea" name="focusArea" required value={formData.focusArea} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white">
                      <option value="">Select a focus area</option>
                      {focusAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical" placeholder="Tell us about your project and what you're looking to accomplish..." />
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-colors">
                    Send message
                  </button>
                  <p className="text-sm text-gray-500">* Required fields</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
