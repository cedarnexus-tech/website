export default function SecurityGuardrails() {
  const items = [
    {
      title: 'Tool-call allowlists',
      desc: 'The AI can only call tools you explicitly approve. Every external integration is registered with typed schemas — no unapproved operations, no unstructured side effects.',
    },
    {
      title: 'Schema-enforced outputs',
      desc: 'Every response to a downstream system is validated against a JSON Schema before delivery. Malformed output is caught and logged, not silently propagated.',
    },
    {
      title: 'Eval suites in CI/CD',
      desc: 'Regression tests, red-team prompts, and accuracy benchmarks run on every pull request. If eval scores drop below threshold, the merge is blocked.',
    },
    {
      title: 'Production observability',
      desc: 'Latency P50/P95, token costs, error rates, and output drift — all in dashboards with configurable alerts. You see problems before users report them.',
    },
    {
      title: 'Human-in-the-loop gates',
      desc: 'Configurable confidence thresholds route low-certainty decisions to a human reviewer before execution. The threshold is tunable without a code deploy.',
    },
    {
      title: 'Immutable audit trail',
      desc: 'Every LLM call — inputs, outputs, token counts, tool invocations, cost, latency — is logged in an append-only store. Ready for compliance review or incident forensics.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Security &amp; guardrails your CISO will approve
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every AI system we ship includes these controls — in the first deploy, not a future phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
