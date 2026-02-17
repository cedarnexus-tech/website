'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ({ items, heading }: { items: FAQItem[]; heading?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {heading}
          </h2>
        )}

        <dl className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <div key={i} className="py-6">
              <dt>
                <button
                  className="flex w-full items-start justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="mt-4 text-gray-600 leading-relaxed">{item.answer}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
