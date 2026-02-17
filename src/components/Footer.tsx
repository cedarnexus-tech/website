import Link from 'next/link'
import Disclaimer from './Disclaimer'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CN</span>
              </div>
              <span className="text-lg font-bold text-white">CedarNexus</span>
            </Link>
            <p className="text-sm leading-relaxed">
              AI workflow automation, data foundations, and Azure modernization for mid-market teams.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-workflow-automation" className="hover:text-white transition-colors">AI Workflow Automation</Link></li>
              <li><Link href="/services/rag-copilot" className="hover:text-white transition-colors">RAG &amp; Copilot</Link></li>
              <li><Link href="/services/ai-evals-observability" className="hover:text-white transition-colors">AI Evals &amp; Observability</Link></li>
              <li><Link href="/services/modernization-sprint" className="hover:text-white transition-colors">Modernization Sprint</Link></li>
              <li><Link href="/services/fabric-powerbi-foundation" className="hover:text-white transition-colors">Fabric &amp; Power BI</Link></li>
              <li><Link href="/services/cost-takeout-blueprint" className="hover:text-white transition-colors">Cost Takeout</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blueprint" className="hover:text-white transition-colors">Blueprint</Link></li>
              <li><Link href="/what-we-think" className="hover:text-white transition-colors">What We Think</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@cedarnexus.com" className="hover:text-white transition-colors">
                  info@cedarnexus.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a call →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-sm">
            © {currentYear} CedarNexus Technologies LLC. All rights reserved.
          </div>
          <div className="max-w-lg">
            <Disclaimer />
          </div>
        </div>
      </div>
    </footer>
  )
}
