import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join a small, senior team building production-grade AI workflows, data platforms, and Azure/.NET modernization for mid-market companies.',
  openGraph: { title: 'Careers | CedarNexus' },
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Careers at CedarNexus</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We build AI workflows, data platforms, and modernized .NET systems for clients who
            measure success in hours saved and revenue unlocked — not in demos delivered. If you
            want end-to-end ownership and direct client impact, keep reading.
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Why CedarNexus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'End-to-end ownership', body: 'You design it, build it, deploy it, and support it. No hand-offs to unknown teams. Every engineer talks to clients.' },
              { title: 'Modern stack, real problems', body: 'Azure OpenAI, Fabric, .NET 8, Semantic Kernel, LangGraph, GitHub Actions. Solve real production problems — not proof-of-concepts that never ship.' },
              { title: 'Small team, big responsibility', body: 'Every person shapes the product, the company, and the client relationship. Your decisions matter from week one.' },
              { title: 'Learning built-in', body: 'Work across AI, data engineering, and platform modernization. You won\'t get siloed into one narrow specialty.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">OPT / STEM &amp; H-1B sponsorship</h3>
              <p className="text-gray-600 leading-relaxed">
                We support strong OPT/STEM candidates and are open to H-1B sponsorship as we grow.
                We value diverse perspectives and are committed to building an inclusive team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open roles</h2>
          <p className="text-gray-600 mb-10">Every role below is essential to how we operate. We hire senior people, keep the team lean, and give everyone real ownership.</p>

          {/* Delivery — Engineering */}
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Delivery — Engineering</h3>
          <div className="space-y-8 mb-16">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">AI Engineer — Agentic Systems</h4>
              <p className="text-gray-600 mb-4">Design and ship agentic AI workflows with guardrails, evals, and observability for mid-market clients.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Build multi-step AI workflows with tool calling, schema enforcement, and human-in-the-loop</li>
                  <li>• Design eval suites and production monitoring for AI systems</li>
                  <li>• Integrate with client CRMs, ERPs, and data platforms</li>
                  <li>• Work directly with clients from discovery through production support</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Strong Python or TypeScript skills</li>
                  <li>• Experience with LLM APIs, prompt engineering, or AI orchestration frameworks (Azure AI Foundry, Microsoft AI Agent Framework, Semantic Kernel, LangGraph, or similar)</li>
                  <li>• Familiarity with Azure OpenAI, responsible-AI tooling, and model evaluation pipelines</li>
                  <li>• Comfort with ambiguity, direct client communication, and shipping to production</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Data Engineer — Fabric &amp; Power BI</h4>
              <p className="text-gray-600 mb-4">Build governed data foundations on Fabric and Power BI so clients&rsquo; AI and BI workloads run on data they can trust.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Design Fabric lakehouses, data pipelines, and semantic models</li>
                  <li>• Implement data quality rules, governance, and access controls</li>
                  <li>• Build Power BI reports and self-service BI frameworks</li>
                  <li>• Ensure data platforms are ready to serve AI workloads</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Experience with Fabric, Power BI, or comparable data platforms</li>
                  <li>• SQL, Python, and data modeling skills</li>
                  <li>• Understanding of data governance, lineage, and quality frameworks</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Platform Engineer — Azure / .NET</h4>
              <p className="text-gray-600 mb-4">Modernize .NET platforms and Azure infrastructure so clients can ship daily and run AI features safely.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Containerize .NET applications and set up CI/CD pipelines</li>
                  <li>• Implement observability with OpenTelemetry and Application Insights</li>
                  <li>• Design infrastructure as code with Bicep or Terraform</li>
                  <li>• Harden security: managed identities, Key Vault, network isolation</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Strong .NET and Azure experience</li>
                  <li>• Hands-on with containers, CI/CD, and IaC</li>
                  <li>• Passion for developer experience, reliability, and clean infrastructure</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Full-Stack Engineer</h4>
              <p className="text-gray-600 mb-4">Build the internal tools, client dashboards, and web applications that support every engagement.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Build and maintain client-facing dashboards, monitoring UIs, and copilot interfaces</li>
                  <li>• Develop internal tooling for project tracking, eval reporting, and cost modeling</li>
                  <li>• Own the CedarNexus website, CMS, and marketing infrastructure</li>
                  <li>• Contribute to API design and backend services as needed</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• React / Next.js and TypeScript proficiency</li>
                  <li>• Experience with Node.js or .NET backends</li>
                  <li>• Eye for clean UI and strong fundamentals in accessibility and performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Delivery — Consulting */}
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Delivery — Consulting</h3>
          <div className="space-y-8 mb-16">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Solutions Architect</h4>
              <p className="text-gray-600 mb-4">Lead Blueprint engagements and design the technical architecture clients build on.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Run discovery sessions and produce architecture documents, risk registers, and costed backlogs</li>
                  <li>• Design system integrations, data flows, and security boundaries</li>
                  <li>• Guide engineering teams during build sprints as the technical authority</li>
                  <li>• Review AI guardrail designs, eval strategies, and monitoring plans</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• 8+ years in software architecture or senior engineering, ideally in consulting</li>
                  <li>• Deep experience with Azure, .NET, or modern data platforms</li>
                  <li>• Ability to translate business requirements into buildable technical plans</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Engagement Manager</h4>
              <p className="text-gray-600 mb-4">Keep client projects on scope, on budget, and on time. The single point of accountability between CedarNexus and the client.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Own project plans, sprint schedules, budgets, and risk tracking for active engagements</li>
                  <li>• Run weekly client check-ins and internal standups</li>
                  <li>• Coordinate staffing across concurrent projects</li>
                  <li>• Escalate blockers early and propose trade-offs with clear cost/benefit</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Experience managing technical consulting or professional services engagements</li>
                  <li>• Strong written and verbal communication — you are the client&rsquo;s primary contact</li>
                  <li>• Comfort with fixed-scope, fixed-price delivery models</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sales & Marketing */}
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Sales &amp; Marketing</h3>
          <div className="space-y-8 mb-16">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Account Executive</h4>
              <p className="text-gray-600 mb-4">Find and close new Blueprint and build engagements. Own the pipeline from first call to signed SOW.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Qualify inbound leads and run outbound prospecting to mid-market IT and finance buyers</li>
                  <li>• Lead discovery calls, scope engagements with Solutions Architects, and present proposals</li>
                  <li>• Negotiate contracts and close deals on Blueprint and build engagements</li>
                  <li>• Maintain CRM data and pipeline forecasts</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• B2B sales experience selling technical services ($25K–$150K deal sizes)</li>
                  <li>• Ability to have credible conversations about AI, data, and cloud with technical buyers</li>
                  <li>• Self-starter comfortable building pipeline without a large SDR team</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Content &amp; Growth Marketer</h4>
              <p className="text-gray-600 mb-4">Drive inbound pipeline through technical content, SEO, and targeted campaigns.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Write and publish technical articles, case studies, and LinkedIn content</li>
                  <li>• Manage SEO, website analytics, and conversion optimization</li>
                  <li>• Build and run email campaigns targeting mid-market IT and finance leaders</li>
                  <li>• Collaborate with engineers to turn delivery lessons into marketing assets</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Experience marketing B2B technical services or developer tools</li>
                  <li>• Strong writing skills — you can explain AI guardrails without sounding like a press release</li>
                  <li>• Hands-on with SEO, analytics, and email/marketing automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operations & Finance */}
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Operations &amp; Finance</h3>
          <div className="space-y-8">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Operations &amp; Finance Lead</h4>
              <p className="text-gray-600 mb-4">Keep the business running: contracts, invoicing, payroll, compliance, and vendor management.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Manage bookkeeping, invoicing, accounts receivable, and payroll coordination</li>
                  <li>• Draft and manage client contracts, SOWs, NDAs, and vendor agreements</li>
                  <li>• Handle insurance, state registrations, tax filings, and compliance obligations</li>
                  <li>• Own internal tooling procurement, license management, and office/remote infrastructure</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Experience in operations, finance, or office management at a small tech or consulting firm</li>
                  <li>• Comfort with QuickBooks, Gusto, or similar small-business financial tools</li>
                  <li>• Highly organized, detail-oriented, and proactive about deadlines</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Recruiter — Technical Hiring</h4>
              <p className="text-gray-600 mb-4">Source and hire the engineers, architects, and specialists we need to staff growing client demand.</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You will:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Source candidates through LinkedIn, communities, referrals, and job boards</li>
                  <li>• Screen resumes, run initial calls, and coordinate technical interviews</li>
                  <li>• Manage the candidate pipeline and keep everyone informed at every stage</li>
                  <li>• Help define and improve our hiring process, scorecards, and employer brand</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">We&rsquo;re looking for:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  <li>• Experience recruiting software engineers, data engineers, or cloud/DevOps roles</li>
                  <li>• Strong sourcing skills and a network in the Azure / AI / .NET ecosystem</li>
                  <li>• Can-do attitude — you&rsquo;ll be the entire recruiting function initially</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to apply</h2>
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Send an email to{' '}
              <a href="mailto:careers@cedarnexus.com" className="text-primary-600 hover:text-primary-700 underline">
                careers@cedarnexus.com
              </a>{' '}
              with:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Your resume or LinkedIn profile</li>
              <li>• A brief note about what interests you and what you&rsquo;ve built</li>
              <li>• Links to any relevant work (GitHub, portfolio, blog posts)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We respond to every application within one week. No recruiters, no ghosting.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
