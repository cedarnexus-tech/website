export default function ProofStrip() {
  const stats = [
    { value: '60–80% less manual work', label: 'AI workflow automation with guardrails, evals & audit trails' },
    { value: '90%+ data quality catch rate', label: 'Fabric & Power BI foundations with automated quality checks' },
    { value: 'Monthly → daily deploys', label: 'Azure / .NET modernization in fixed 4–8 week sprints' },
  ]

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          What buyers are funding in 2026
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-lg font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
