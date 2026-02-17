import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'CedarNexus Technologies — AI Workflow Automation, Data & Modernization',
    template: '%s | CedarNexus',
  },
  description:
    'CedarNexus helps mid-market teams ship AI workflows with guardrails, build AI-ready data foundations on Fabric & Power BI, and modernize Azure / .NET platforms to production-grade.',
  metadataBase: new URL('https://cedarnexus.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CedarNexus Technologies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
