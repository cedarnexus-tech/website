'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Helper to check if a path is active
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  // Helper to check if "What we do" section is active
  const isWhatWeDoActive = () => 
    isActive('/services') || isActive('/solutions') || isActive('/industries')

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">CN</span>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-bold text-gray-900">CedarNexus</span>
              <span className="text-sm font-light text-primary-600">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* What we do - Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`font-medium flex items-center transition-colors py-8 ${
                  isWhatWeDoActive() 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                What we do
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-2">
                      <Link 
                        href="/services" 
                        className={`block px-4 py-3 rounded-md transition-colors ${
                          isActive('/services')
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">Services</div>
                        <div className="text-sm text-gray-600 mt-1">
                          AI-powered solutions for your business
                        </div>
                      </Link>
                      <Link 
                        href="/solutions" 
                        className={`block px-4 py-3 rounded-md transition-colors ${
                          isActive('/solutions')
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">Solutions</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Complete systems tailored to your needs
                        </div>
                      </Link>
                      <Link 
                        href="/industries" 
                        className={`block px-4 py-3 rounded-md transition-colors ${
                          isActive('/industries')
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">Industries</div>
                        <div className="text-sm text-gray-600 mt-1">
                          HVAC, dental, and healthcare expertise
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/what-we-think" 
              className={`font-medium transition-colors ${
                isActive('/what-we-think')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              What we think
            </Link>
            <Link 
              href="/careers" 
              className={`font-medium transition-colors ${
                isActive('/careers')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {/* What we do section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  What we do
                </div>
                <Link 
                  href="/services" 
                  className={`block px-4 py-2.5 rounded-md transition-colors ${
                    isActive('/services')
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/solutions" 
                  className={`block px-4 py-2.5 rounded-md transition-colors ${
                    isActive('/solutions')
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link 
                  href="/industries" 
                  className={`block px-4 py-2.5 rounded-md transition-colors ${
                    isActive('/industries')
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries
                </Link>
              </div>

              {/* Other links */}
              <Link 
                href="/what-we-think" 
                className={`block px-4 py-2.5 rounded-md transition-colors ${
                  isActive('/what-we-think')
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                What we think
              </Link>
              <Link 
                href="/careers" 
                className={`block px-4 py-2.5 rounded-md transition-colors ${
                  isActive('/careers')
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="block mx-4 mt-4 px-6 py-2.5 bg-primary-600 text-white text-center font-medium rounded-lg hover:bg-primary-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
