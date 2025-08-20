import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import messaging from '../data/messaging.json'

export default function CapabilitiesSection() {
  const capabilities = messaging.variants.current?.featureHighlights?.capabilities
  const [activeItem, setActiveItem] = useState(capabilities?.items?.[0]?.id || 'flow')
  const [lastUpdated, setLastUpdated] = useState(12)
  
  // Add null check
  if (!capabilities || !capabilities.items || capabilities.items.length === 0) {
    return null
  }
  
  const currentItem = capabilities.items.find(item => item.id === activeItem) || capabilities.items[0]

  // Update freshness cue periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(prev => prev + 1)
    }, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="py-28 lg:py-32"
      style={{ 
        background: 'linear-gradient(135deg, #0C1224 0%, #0B1328 50%, #0A1834 100%)',
        position: 'relative'
      }}
      role="region"
      aria-label="Platform capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '48px',
            lineHeight: '1.15',
            color: 'rgba(255, 255, 255, 0.92)',
            fontWeight: 300
          }}
        >
          {capabilities.headline}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left side - Ghost tabs */}
          <motion.div 
            className="lg:col-span-4 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            role="tablist"
            aria-label="Capability options"
          >
            {capabilities.items.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="w-full text-left capability-tab"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                viewport={{ once: true }}
                role="tab"
                aria-selected={activeItem === item.id}
                aria-controls={`panel-${item.id}`}
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: activeItem === item.id 
                    ? '1px solid rgba(255, 255, 255, 0.22)' 
                    : '1px solid rgba(255, 255, 255, 0.14)',
                  background: activeItem === item.id
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'transparent',
                  transition: 'all 0.2s ease',
                  fontSize: '17px',
                  fontWeight: activeItem === item.id ? 500 : 400,
                  color: activeItem === item.id 
                    ? 'rgba(255, 255, 255, 0.92)' 
                    : 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'var(--font-sans)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (activeItem !== item.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeItem !== item.id) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {/* Active gradient border */}
                {activeItem === item.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    style={{
                      position: 'absolute',
                      left: '-1px',
                      top: '10px',
                      bottom: '10px',
                      width: '4px',
                      background: 'linear-gradient(90deg, #FF9A87 0%, #F8613C 50%, #2A60F8 100%)',
                      borderRadius: '4px'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span style={{ marginLeft: activeItem === item.id ? '12px' : '0' }}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Right side - Ghost panel */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                id={`panel-${activeItem}`}
                role="tabpanel"
                aria-labelledby={activeItem}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                style={{
                  padding: '28px 32px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  position: 'relative'
                }}
              >
                {/* Freshness cue */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase'
                  }}
                >
                  Updated {lastUpdated}m ago
                </motion.div>

                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.92)',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {currentItem.title}
                </h3>

                <div style={{ marginBottom: '14px' }}>
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.62)',
                    marginBottom: '8px'
                  }}>
                    <strong style={{ color: 'rgba(255, 255, 255, 0.92)', fontWeight: 500 }}>
                      So you can:
                    </strong> {currentItem.benefit}
                  </p>
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.62)'
                  }}>
                    <strong style={{ color: 'rgba(255, 255, 255, 0.92)', fontWeight: 500 }}>
                      Next best action:
                    </strong> {currentItem.action}
                  </p>
                </div>

                {/* Stat receipt chips */}
                <div className="flex flex-wrap gap-2.5 mt-3.5 mb-5">
                  {currentItem.chips.map((chip, index) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.2, 
                        delay: 0.05 + (index * 0.04)
                      }}
                      className="chip-receipt"
                      style={{
                        padding: '6px 10px',
                        borderRadius: '999px',
                        background: 'rgba(8, 16, 40, 0.55)',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        color: 'rgba(255, 255, 255, 0.92)',
                        fontSize: '12px',
                        fontWeight: 500,
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.02em',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 154, 135, 0.2)'
                        e.currentTarget.style.borderColor = 'rgba(255, 154, 135, 0.3)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)'
                      }}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>

                {/* Tertiary text link */}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.92)',
                    fontSize: '15px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'opacity 0.2s ease'
                  }}
                >
                  {currentItem.ctaText} 
                  <span style={{ fontSize: '18px' }}>→</span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}