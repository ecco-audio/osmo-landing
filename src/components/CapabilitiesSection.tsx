import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import messaging from '../data/messaging.json'

export default function CapabilitiesSection() {
  const capabilities = messaging.variants.current?.featureHighlights?.capabilities
  const [activeItem, setActiveItem] = useState(capabilities?.items?.[0]?.id || 'flow')
  
  // Add null check
  if (!capabilities || !capabilities.items || capabilities.items.length === 0) {
    return null
  }
  
  const currentItem = capabilities.items.find(item => item.id === activeItem) || capabilities.items[0]

  return (
    <section 
      className="py-20 lg:py-24"
      style={{ 
        background: 'linear-gradient(135deg, #0C1224 0%, #0B1328 50%, #0A1834 100%)',
        position: 'relative'
      }}
    >
      {/* Subtle background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(42, 96, 248, 0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-5xl lg:text-6xl font-light text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {capabilities.headline}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Capabilities list - left side */}
          <motion.div 
            className="lg:col-span-1 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {capabilities.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setActiveItem(item.id)}
                  className="w-full text-left"
                  style={{
                    padding: '18px 24px',
                    borderRadius: '12px',
                    border: activeItem === item.id 
                      ? '1px solid rgba(255, 154, 135, 0.4)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    background: activeItem === item.id
                      ? 'rgba(255, 154, 135, 0.08)'
                      : 'rgba(255, 255, 255, 0.03)',
                    transition: 'all 0.25s ease',
                    fontSize: '18px',
                    fontWeight: activeItem === item.id ? 600 : 400,
                    color: activeItem === item.id 
                      ? '#FFFFFF' 
                      : 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-sans)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (activeItem !== item.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== item.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {/* Active indicator */}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '60%',
                        background: 'linear-gradient(180deg, #FF9A87 0%, #F8613C 100%)',
                        borderRadius: '0 3px 3px 0'
                      }}
                    />
                  )}
                  <span style={{ marginLeft: activeItem === item.id ? '8px' : '0' }}>
                    {item.label}
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Content panel - right side */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '40px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 154, 135, 0.2)',
                  backdropFilter: 'blur(10px)',
                  minHeight: '380px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient accent in top corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 154, 135, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                <div className="relative z-10">
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: 600,
                    color: '#FF9A87',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {currentItem.title}
                  </h3>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '16px'
                    }}>
                      <strong style={{ color: '#FFFFFF' }}>So you can:</strong> {currentItem.benefit}
                    </p>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      <strong style={{ color: '#FFFFFF' }}>Next best action:</strong> {currentItem.action}
                    </p>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentItem.chips.map((chip, index) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '999px',
                          background: 'rgba(255, 154, 135, 0.1)',
                          border: '1px solid rgba(255, 154, 135, 0.3)',
                          color: '#FF9A87',
                          fontSize: '14px',
                          fontWeight: 500,
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '16px 32px',
                      borderRadius: '999px',
                      background: 'linear-gradient(90deg, #FF9A87 0%, #F8613C 50%, #2A60F8 100%)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span className="relative z-10">
                      {currentItem.ctaText} →
                    </span>
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #2A60F8 0%, #F8613C 50%, #FF9A87 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}