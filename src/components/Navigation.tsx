'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CN</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">CedarNexus Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* What we do - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                What we do
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link 
                    href="/services" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="/industries" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Industries
                  </Link>
                </div>
              )}
            </div>

            <Link href="/what-we-think" className="text-gray-700 hover:text-gray-900 font-medium">
              What we think
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-gray-900 font-medium">
              Careers
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-500 px-4">What we do</div>
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Services
                </Link>
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Solutions
                </Link>
                <Link href="/industries" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Industries
                </Link>
              </div>
              <Link href="/what-we-think" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                What we think
              </Link>
              <Link href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Careers
              </Link>
              <Link href="/contact" className="block mx-4 text-center btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
