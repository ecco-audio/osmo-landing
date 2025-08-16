import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function FeatureDetails() {
  const features = [
    {
      title: 'Monitor Key Entities',
      description: 'Osmosis continuously scans meetings, documents and press releases for changes in strategy',
      href: '#'
    },
    {
      title: 'Centralize & Summarize', 
      description: 'We consolidate relevant insights into an easy-to-navigate hub, complete with highlights, summaries, and actionable alerts',
      href: '#'
    },
    {
      title: 'Act on Real-Time Signals',
      description: 'The moment an entity you follow modifies their strategy, you get an immediate notification on why it matters to you and your team',
      href: '#'
    }
  ]

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-blue-600 mb-4 font-semibold">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            <span className="block">The data you need to know</span>
            <span className="block">routed to the right person</span>
            <span className="block">with the right context</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                <span className="mr-2">Learn more</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}