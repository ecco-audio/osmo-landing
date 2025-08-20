import { motion } from 'framer-motion'
import messaging from '../data/messaging.json'

export default function BenefitsSection() {
  const benefits = messaging.variants.current?.featureHighlights?.benefits

  if (!benefits) {
    return null
  }

  return (
    <section 
      data-testid="benefits-section" 
      className="bg-white py-20 lg:py-24"
      style={{ backgroundColor: '#F4F3EE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="section-pill mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            {benefits.pill}
          </motion.p>
          
          <motion.h2 
            className="section-header section-header-blue max-w-5xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {benefits.headline}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {benefits.subheadline}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.points.map((point, index) => (
            <motion.div 
              key={index} 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(42, 96, 248, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #FF9A87 0%, #F8613C 50%, #2A60F8 100%)'
              }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2A60F8',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: '1.3'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666666',
                  margin: 0
                }}>
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://solutions.osmosis.fm"
            className="cta-button inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-secondary shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See live allocator activity
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}