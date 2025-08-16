export default function FeatureHighlights() {
  return (
    <section data-testid="product-overview" className="bg-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-4">
            Conversations distilled
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            Real-time Intelligence Monitoring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identify new opportunities, accelerate capital raises and sales, and stay 
            ahead of changing market dynamics – all in one platform
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left - Features */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                HIDDEN INSIGHTS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              Industry leaders shape markets.{' '}
              <span className="text-gray-500">We'll tell you when their script changes.</span>
            </h3>
            <div className="space-y-2 text-gray-600 mb-6">
              <p><strong>$6T</strong> in AUM tracked, <strong>500K</strong> meetings and interviews, <strong>daily and hourly updates</strong> so you never miss a change</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn more
            </button>
          </div>

          {/* Top Right - Testimonial */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-4xl text-blue-600">"</span>
            </div>
            <blockquote className="text-lg text-orange-500 font-medium mb-6">
              I've sourced two $100M+ opportunities from Osmosis in the past month.
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">IR Executive</p>
              <p className="text-gray-600">$30B Hedge Fund</p>
            </div>
          </div>

          {/* Bottom Left - Testimonial */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-4xl text-blue-600">"</span>
            </div>
            <blockquote className="text-lg text-orange-500 font-medium mb-6">
              Raising capital is harder than ever. These insights allow our sales people to spend more time in front of the right investors getting quality at bats.
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Head of Distribution</p>
              <p className="text-gray-600">$400B Global Investment Firm</p>
            </div>
          </div>

          {/* Bottom Right - Features */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                FUNDRAISING INTEL
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              Raise funds faster and more efficiently.
            </h3>
            <p className="text-gray-600 mb-6">
              Get <strong>action plans</strong> based on the latest strategy updates from the largest allocators.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}