import Link from 'next/link'

interface OfferCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function OfferCard({ title, description, href, icon }: OfferCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-300 transition-all"
    >
      <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{description}</p>
      <span className="text-primary-600 font-medium group-hover:underline">
        Learn more →
      </span>
    </Link>
  )
}
