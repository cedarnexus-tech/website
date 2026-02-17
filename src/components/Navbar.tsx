'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const serviceLinks = [
  { href: '/services/ai-workflow-automation', label: 'AI Workflow Automation', desc: 'Agentic AI with guardrails & evals' },
  { href: '/services/rag-copilot', label: 'RAG & Copilot', desc: 'AI copilots grounded in your data' },
  { href: '/services/ai-evals-observability', label: 'AI Evals & Observability', desc: 'Know when your AI is wrong' },
  { href: '/services/modernization-sprint', label: 'Modernization Sprint', desc: 'Azure / .NET to production-grade' },
  { href: '/services/fabric-powerbi-foundation', label: 'Fabric & Power BI Foundation', desc: 'AI-ready data platform' },
]

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleDropdownKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setIsDropdownOpen(false)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">CN</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold text-gray-900">CedarNexus</span>
                <span className="text-sm font-light text-primary-600">Technologies</span>
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`font-medium flex items-center transition-colors py-8 ${
                    isActive('/services') ? 'text-primary-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onKeyDown={handleDropdownKeyDown}
                >
                  Services
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-80 z-50" role="menu">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                      <div className="p-2">
                        <Link href="/services" role="menuitem" className={`block px-4 py-3 rounded-md transition-colors ${pathname === '/services' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}>
                          <div className="font-semibold text-gray-900">All Services</div>
                          <div className="text-sm text-gray-600 mt-0.5">Overview of everything we do</div>
                        </Link>
                        {serviceLinks.map((link) => (
                          <Link key={link.href} href={link.href} role="menuitem" className={`block px-4 py-3 rounded-md transition-colors ${isActive(link.href) ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}>
                            <div className="font-semibold text-gray-900">{link.label}</div>
                            <div className="text-sm text-gray-600 mt-0.5">{link.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blueprint" className={`font-medium transition-colors ${isActive('/blueprint') ? 'text-primary-600' : 'text-gray-700 hover:text-gray-900'}`}>Blueprint</Link>
              <Link href="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-gray-900'}`}>About</Link>
              <Link href="/what-we-think" className={`font-medium transition-colors ${isActive('/what-we-think') ? 'text-primary-600' : 'text-gray-700 hover:text-gray-900'}`}>What We Think</Link>
              <Link href="/careers" className={`font-medium transition-colors ${isActive('/careers') ? 'text-primary-600' : 'text-gray-700 hover:text-gray-900'}`}>Careers</Link>
              <Link href="/contact" className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">Book a Call</Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</div>
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`block px-4 py-2.5 rounded-md transition-colors ${isActive(link.href) ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
                ))}
                <Link href="/blueprint" className={`block px-4 py-2.5 rounded-md transition-colors ${isActive('/blueprint') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)}>Blueprint</Link>
                <Link href="/about" className={`block px-4 py-2.5 rounded-md transition-colors ${isActive('/about') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/what-we-think" className={`block px-4 py-2.5 rounded-md transition-colors ${isActive('/what-we-think') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)}>What We Think</Link>
                <Link href="/careers" className={`block px-4 py-2.5 rounded-md transition-colors ${isActive('/careers') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                <Link href="/contact" className="block mx-4 mt-4 px-6 py-2.5 bg-primary-600 text-white text-center font-medium rounded-lg hover:bg-primary-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
