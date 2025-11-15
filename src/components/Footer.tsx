import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-600">
            © {currentYear} CedarNexus Technologies LLC. All rights reserved.
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/about" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/careers" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
