import Link from 'next/link'

interface CTASectionProps {
  headline: string
  body: string
  buttonText: string
  href: string
  variant?: 'primary' | 'dark'
}

export default function CTASection({ headline, body, buttonText, href, variant = 'primary' }: CTASectionProps) {
  const bgClass = variant === 'dark' ? 'bg-gray-900' : 'bg-primary-600'
  const bodyClass = variant === 'dark' ? 'text-gray-300' : 'text-primary-100'
  const btnClass =
    variant === 'dark'
      ? 'bg-primary-500 text-white hover:bg-primary-400'
      : 'bg-white text-primary-700 hover:bg-gray-50'

  return (
    <section className={`py-20 sm:py-28 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{headline}</h2>
        <p className={`text-xl ${bodyClass} mb-8 leading-relaxed`}>{body}</p>
        <Link
          href={href}
          className={`inline-block px-8 py-4 font-semibold rounded-lg transition-colors shadow-lg ${btnClass}`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
