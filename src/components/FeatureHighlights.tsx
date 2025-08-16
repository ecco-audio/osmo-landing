export default function FeatureHighlights() {
  return (
    <section data-testid="product-overview" className="py-16 lg:py-20" style={{ backgroundColor: '#F4F3EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-pill">
            Conversations distilled
          </p>
          <h2 className="section-header section-header-blue">
            Real-time Intelligence Monitoring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identify new opportunities, accelerate capital raises and sales, and stay 
            ahead of changing market dynamics – all in one platform
          </p>
        </div>

        {/* Single White Container */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Features */}
            <div>
              <div className="mb-6">
                <span className="section-pill">
                  HIDDEN INSIGHTS
                </span>
              </div>
              <h3 className="section-subheader">
                <span style={{ color: '#2A60F8' }}>Industry leaders shape markets.</span>{' '}
                <span className="text-gray-500">We'll tell you when their script changes.</span>
              </h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p><strong>$6T</strong> in AUM tracked, <strong>500K</strong> meetings and interviews, <strong>daily and hourly updates</strong> so you never miss a change</p>
              </div>
              <button className="cta-button inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-blue-600">
                Learn more
              </button>
            </div>

            {/* Right Section - Quote in nested box */}
            <div>
              <div className="rounded-3xl p-6" style={{ backgroundColor: '#F4F3EE' }}>
                <div className="mb-2">
                  <span className="text-4xl font-serif" style={{ color: '#2A60F8' }}>"</span>
                </div>
                <p className="quote-text mb-4">
                  I've sourced two $100M+ opportunities from Osmosis in the past month.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">IR Executive</p>
                  <p className="text-gray-600">$30B Hedge Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Mirror Layout with 220px spacing */}
        <div className="mt-52"> {/* 220px = mt-52 (52 * 4px = 208px, close to 220px) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Quote in white box */}
            <div className="flex justify-start">
              <div className="bg-white rounded-3xl p-6 shadow-sm max-w-lg">
                <div className="mb-2">
                  <span className="text-4xl font-serif" style={{ color: '#2A60F8' }}>"</span>
                </div>
                <p className="quote-text mb-4">
                  Raising capital is harder than ever. These insights allow our sales people to spend more time in front of the right investors getting quality at bats.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Head of Distribution</p>
                  <p className="text-gray-600">$400B Global Investment Firm</p>
                </div>
              </div>
            </div>

            {/* Right Section - Features */}
            <div>
              <div className="mb-6">
                <span className="section-pill">
                  FUNDRAISING INTEL
                </span>
              </div>
              <h3 className="section-subheader">
                <span style={{ color: '#2A60F8' }}>Raise funds faster and more efficiently.</span>
              </h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>Get <strong>action plans</strong> based on the latest strategy updates from the largest allocators.</p>
              </div>
              <button className="cta-button inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-blue-600">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}