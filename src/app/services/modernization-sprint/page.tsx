import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Modernization Sprint',
  description:
    'Go from monthly deploys to daily. Containers, CI/CD, observability, and security hardening for .NET / Azure — delivered in a fixed-scope 4–8 week sprint with measurable before/after metrics.',
  openGraph: { title: 'Modernization Sprint | CedarNexus' },
}

export default function ModernizationSprintPage() {
  return (
    <ServicePageLayout
      heroTitle="Go from monthly deploys with war rooms to daily deploys with rollback."
      heroSubtitle="Your .NET platform ships monthly, incidents take hours to diagnose, and the AI roadmap is blocked because there’s no place to put new capabilities. We fix that in a fixed-scope sprint: containers, CI/CD, observability, and security hardening — with before/after metrics you can show the board."
      techQualifier=".NET 8+, Azure App Service / Container Apps / AKS, GitHub Actions, OpenTelemetry, Aspire."
    >
      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What&rsquo;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Architecture review', desc: 'We assess your codebase, dependencies, hosting, and deployment pipeline. You get the shortest path to production-grade — with a clear cost/benefit for each recommendation.' },
              { title: 'Containerization', desc: 'Docker builds, multi-stage images, health checks, and orchestration on Azure Container Apps or AKS. Right-sized for your traffic — not over-provisioned "just in case."' },
              { title: 'CI/CD pipeline', desc: 'Build, test, lint, security scan, and deploy stages with zero-downtime rollouts. Most clients go from manual deploy scripts to automated pipelines in the first sprint.' },
              { title: 'Observability', desc: 'OpenTelemetry tracing, structured logging, Application Insights dashboards, and alerting. Debug production issues in minutes, not hours. Typical MTTR reduction: 60–80%.' },
              { title: 'Infrastructure as Code', desc: 'Bicep or Terraform for repeatable, version-controlled provisioning. No more "works on my machine" for infrastructure.' },
              { title: 'Security hardening', desc: 'Managed identities, Key Vault integration, network isolation, and dependency vulnerability scanning. Pass your next security review without scrambling.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why modernize */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why modernize now?</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Your AI roadmap is blocked</h3>
              <p className="text-gray-600 text-sm leading-relaxed">You can’t bolt AI onto a monolith that deploys monthly and has no observability. Modernization unblocks the AI feature roadmap — and pays for itself in reliability gains within the first quarter.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Ship faster with less risk</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Monthly releases with weekend war rooms become daily deploys with automated rollbacks. Less risk per deploy, faster feedback loops, and your team stops dreading release day.</p>
            </div>
            <div className="p-6 border-l-4 border-primary-500 bg-white rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">See what you’re spending</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Right-sized containers, auto-scaling, and resource tagging give you clear spend visibility by service, by environment. Most clients find 15–30% in immediate savings from right-sizing alone.</p>
            </div>
          </div>
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
              <p className="text-sm text-gray-600 mt-1">Architecture review + migration plan</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Sprint</p>
              <p className="text-2xl font-bold text-gray-900">4 – 8 weeks</p>
              <p className="text-sm text-gray-600 mt-1">Container + CI/CD + observability</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Investment</p>
              <p className="text-2xl font-bold text-gray-900">$30K – $100K</p>
              <p className="text-sm text-gray-600 mt-1">Depends on scope &amp; legacy debt</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-2">What we need from you</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Source code access and a walkthrough of the current architecture</li>
              <li>• A staging or dev environment we can safely modify</li>
              <li>• A designated tech lead for architecture decisions and code reviews</li>
              <li>• Weekly 30-minute check-ins during the sprint</li>
            </ul>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
