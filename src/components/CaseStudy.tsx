interface CaseStudyProps {
  industry: string
  challenge: string
  outcome: string
  metrics: string[]
}

export default function CaseStudy({ industry, challenge, outcome, metrics }: CaseStudyProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8">
      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
        {industry}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{outcome}</p>
      <div className="flex flex-wrap gap-4">
        {metrics.map((m) => (
          <span key={m} className="px-3 py-1.5 bg-gray-100 rounded-md text-sm font-medium text-gray-800">
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
