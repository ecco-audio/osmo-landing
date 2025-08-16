export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Expand Your Coverage',
      description: (
        <>
          Stay on top of developments across{' '}
          <strong className="text-gray-900">thousands of orgs</strong>{' '}
          without manual tracking. Osmosis captures fleeting data that static databases miss.
        </>
      )
    },
    {
      title: 'Save Time & Resources',
      description: (
        <>
          Eliminate countless hours of research. Redirect efforts to{' '}
          <strong className="text-gray-900">high-value interactions</strong>{' '}
          that bring in more capital.
        </>
      )
    },
    {
      title: 'Empower Sales',
      description: (
        <>
          Deliver{' '}
          <strong className="text-gray-900">tailored updates</strong>{' '}
          to each sales rep, ensuring they have the insights they need to close faster and more confidently.
        </>
      )
    }
  ]

  return (
    <section data-testid="benefits-section" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-6">
            KEY BENEFITS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 leading-tight max-w-4xl mx-auto">
            Move faster and expand your coverage with Osmosis
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}