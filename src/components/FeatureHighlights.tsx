import { motion } from 'framer-motion'
import messaging from '../data/messaging.json'

export default function FeatureHighlights() {
  const { featureHighlights } = messaging.variants.current
  return (
    <section data-testid="product-overview" className="py-16 lg:py-20" style={{ backgroundColor: '#F4F3EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p 
            className="section-pill"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            {featureHighlights.sectionPill}
          </motion.p>
          <motion.h2 
            className="section-header section-header-blue"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {featureHighlights.headline}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {featureHighlights.description}
          </motion.p>
        </motion.div>

        {/* Single White Container */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <span className="section-pill">
                  {featureHighlights.sections[0].pill}
                </span>
              </motion.div>
              <motion.h3 
                className="section-subheader"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span style={{ color: '#2A60F8' }}>{featureHighlights.sections[0].headline.blue}</span>{' '}
                <span className="text-gray-500">{featureHighlights.sections[0].headline.gray}</span>
              </motion.h3>
              <motion.div 
                className="space-y-2 text-gray-600 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <p>{featureHighlights.sections[0].description}</p>
              </motion.div>
              <motion.a 
                href={featureHighlights.sections[0].ctaUrl}
                className="cta-button inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {featureHighlights.sections[0].cta}
              </motion.a>
            </motion.div>

            {/* Right Section - Quote in nested box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-3xl p-6" 
                style={{ backgroundColor: '#F4F3EE' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Section - Mirror Layout with 220px spacing */}
        <motion.div 
          className="mt-52"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Quote in white box */}
            <motion.div 
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-sm max-w-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </motion.div>

            {/* Right Section - Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <span className="section-pill">
                  {featureHighlights.sections[1].pill}
                </span>
              </motion.div>
              <motion.h3 
                className="section-subheader"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span style={{ color: '#2A60F8' }}>{featureHighlights.sections[1].headline.blue}</span>
              </motion.h3>
              <motion.div 
                className="space-y-2 text-gray-600 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <p>{featureHighlights.sections[1].description}</p>
              </motion.div>
              <motion.a 
                href={featureHighlights.sections[1].ctaUrl}
                className="cta-button inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {featureHighlights.sections[1].cta}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}