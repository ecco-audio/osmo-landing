import { useMessaging } from '../lib/useMessaging'

export default function BenefitsSection() {
  const messaging = useMessaging()
  const { benefits } = messaging

  return (
    <section data-testid="benefits-section" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-pill">
            {benefits.sectionTitle}
          </p>
          <h2 
            className="font-heading font-normal max-w-4xl mx-auto"
            style={{
              fontSize: '64px',
              lineHeight: '64px',
              letterSpacing: '-0.02em',
              color: 'rgb(42, 96, 248)',
              marginBottom: '32px'
            }}
          >
            {benefits.headline || 'Move faster and expand your coverage with Osmosis'}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.items.map((benefit, index) => (
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