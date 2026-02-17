import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'RAG & Copilot',
  description:
    'Cut research and lookup time by 50–70%. AI copilots grounded in your data with faithfulness scoring, PII boundaries, schema-validated outputs, and full audit trails.',
  openGraph: { title: 'RAG & Copilot | CedarNexus' },
}

export default function RAGCopilotPage() {
  return (
    <ServicePageLayout
      heroTitle="Cut research time in half. Get answers from your data — not hallucinations."
      heroSubtitle="Your team spends hours searching documents, Slack threads, and wikis for answers that already exist. We build copilots that retrieve the right information, cite their sources, and flag uncertainty — so people make faster decisions with higher confidence."
      techQualifier="Typically uses Azure OpenAI, Azure AI Search, and your choice of vector store (Qdrant, Weaviate, pgvector)."
    >
      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What&rsquo;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Embedding pipeline', desc: 'Automated chunking, embedding, and indexing of your documents. Configurable strategies (fixed-size, semantic, recursive) tuned for your content — not a one-size-fits-all default.' },
              { title: 'Hybrid retrieval', desc: 'Vector similarity + keyword search + reranking. Retrieves the most relevant context, not just the most similar embedding — measurably better hit rate than vector-only search.' },
              { title: 'Prompt engineering', desc: 'System prompts, few-shot examples, and citation formatting tuned for your domain. The copilot sounds like your team, not a generic chatbot.' },
              { title: 'Schema-validated outputs', desc: 'When downstream systems need structured data, responses conform to a JSON Schema. No free-text surprises breaking integrations.' },
              { title: 'Eval harness', desc: 'Faithfulness, relevance, and answer-quality metrics computed on golden datasets. Runs in CI on every PR — hallucination regressions block the deploy.' },
              { title: 'Deploy anywhere', desc: 'Chat UI, API endpoint, or embedded in your existing app. Whatever fits your team\'s actual workflow — not whatever\'s easiest for the vendor.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tooling approach */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our tooling approach</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tool allowlists</h3>
              <p className="text-gray-600 text-sm leading-relaxed">If your copilot can call tools (search, database lookups, APIs), each tool is explicitly allowlisted with typed schemas. The LLM cannot invoke unapproved operations.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Retries &amp; fallbacks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Retrieval failures trigger automatic retries. If the index is unavailable, the copilot surfaces a graceful &ldquo;I can&rsquo;t answer right now&rdquo; message instead of hallucinating.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Audit logging</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every query, retrieved chunk, prompt, and response is logged with tracing IDs. Full audit trail for compliance and continuous-improvement analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality &amp; evaluation</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Faithfulness scoring catches hallucination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Automated checks verify every answer is grounded in the retrieved context. Fabricated claims are flagged before they reach users — not discovered in a customer-facing incident.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Regression + red-team tests in CI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Golden answers, edge-case queries, and adversarial prompts run on every PR. If accuracy drops or the model leaks data, the deploy is blocked. Same rigor as your unit test suite.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Live dashboards you can show your CISO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Retrieval-hit rate, answer latency, user satisfaction signals, cost per query, and drift detection. Alerts fire automatically — you see problems before users file tickets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & privacy */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data &amp; privacy</h2>
          <ul className="space-y-4">
            {[
              'Permissioning: document-level access controls ensure users only retrieve content they are authorized to see.',
              'PII handling: configurable PII detection and redaction in both the indexing pipeline and the response layer.',
              'Data boundaries: embeddings and indexes live in your Azure subscription. Your data never leaves your tenant.',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline & pricing */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Timeline &amp; investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Blueprint</p>
              <p className="text-2xl font-bold text-gray-900">10 days</p>
              <p className="text-sm text-gray-600 mt-1">Data audit + architecture</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Build</p>
              <p className="text-2xl font-bold text-gray-900">3 – 6 weeks</p>
              <p className="text-sm text-gray-600 mt-1">MVP to production</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Investment</p>
              <p className="text-2xl font-bold text-gray-900">$25K – $90K</p>
              <p className="text-sm text-gray-600 mt-1">Depends on data volume</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">What we need from you</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Access to the document corpus or data sources the copilot will use</li>
              <li>• Subject-matter experts to validate golden answers for the eval suite</li>
              <li>• A product owner who can define scope and prioritize user scenarios</li>
              <li>• Weekly 30-minute check-ins during the build phase</li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
