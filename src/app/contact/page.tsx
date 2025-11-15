'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    focusArea: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission (e.g., send to API endpoint or email service)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within one business day.')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Let's talk about your customer operations and growth goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're an HVAC company looking to capture more leads, a dental practice aiming to improve patient engagement, or another service business ready to leverage AI—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info Panel */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
              
              <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email us directly</h3>
                <p className="text-gray-700 mb-4">
                  Prefer email? You can reach us at:
                </p>
                <a href="mailto:info@cedarnexus.com" className="text-2xl font-semibold text-primary-600 hover:text-primary-700 underline">
                  info@cedarnexus.com
                </a>
                <p className="text-gray-600 mt-4">
                  We'll respond within one business day.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to expect</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Quick response within one business day</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>A conversation about your specific needs and goals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No pressure sales pitch—just practical advice</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>A clear next step, whether that's a demo, discovery session, or simply more information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Focus Area */}
                <div>
                  <label htmlFor="focusArea" className="block text-sm font-semibold text-gray-700 mb-2">
                    Focus area *
                  </label>
                  <select
                    id="focusArea"
                    name="focusArea"
                    required
                    value={formData.focusArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a focus area</option>
                    <option value="ai-receptionist">AI Receptionist / Call Handling</option>
                    <option value="scheduling">Scheduling & Appointment Management</option>
                    <option value="review-management">Review & Reputation Management</option>
                    <option value="customer-reactivation">Customer Reactivation</option>
                    <option value="implementation">Implementation & Consulting</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your business and what you're looking to accomplish..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-colors"
                  >
                    Send message
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
