import { motion } from 'framer-motion'
import { useMessaging } from '../lib/useMessaging'

export default function HeroSection() {
  const messaging = useMessaging()
  const { hero } = messaging

  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative py-20 lg:py-24 overflow-hidden bg-noise bg-cover bg-center bg-no-repeat"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Pre-headline */}
          {hero.preHeadline && (
            <motion.p 
              className="section-pill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {hero.preHeadline}
            </motion.p>
          )}

          {/* Main Headline */}
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="block hero-headline-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {hero.headline.line1}
            </motion.span>
            {hero.headline.line2 && (
              <motion.span 
                className="block hero-headline-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {hero.headline.line2}
              </motion.span>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="hero-body mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={hero.cta.primaryUrl}
                className="cta-button inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-secondary shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Track CTA click
                  if (typeof window !== 'undefined' && (window as any).posthog) {
                    (window as any).posthog.capture('cta_clicked', {
                      cta_text: hero.cta.primary,
                      cta_location: 'hero',
                      destination_url: hero.cta.primaryUrl,
                      source_url: window.location.href
                    })
                  }
                }}
              >
                {hero.cta.primary}
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Strip */}
          {hero.trustStrip && (
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              {hero.trustStrip.metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                    {metric.value}
                    {metric.isLive && (
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Legacy Proof Metrics (fallback) */}
          {hero.proofMetrics && !hero.trustStrip && (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              {hero.proofMetrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Brand Line (demoted but elegant) */}
          {hero.brandLine && (
            <motion.p 
              className="text-white/70 font-light tracking-wide"
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontStyle: 'italic'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              {hero.brandLine}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}