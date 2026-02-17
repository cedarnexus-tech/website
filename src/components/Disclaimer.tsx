export default function Disclaimer({ variant = 'footer' }: { variant?: 'footer' | 'inline' }) {
  if (variant === 'inline') {
    return (
      <p className="text-xs text-gray-500 max-w-3xl mx-auto mt-8">
        CedarNexus is an independent company and is not affiliated with Microsoft.
        Azure, Azure OpenAI, .NET, Microsoft Fabric, and Power BI are trademarks of Microsoft Corporation.
      </p>
    )
  }

  return (
    <p className="text-xs text-gray-500">
      CedarNexus is an independent company and is not affiliated with Microsoft.
      Azure, .NET, Power BI, and Microsoft Fabric are trademarks of Microsoft Corporation.
    </p>
  )
}
