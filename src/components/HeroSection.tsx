import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative py-20 lg:py-24 overflow-hidden bg-noise bg-cover bg-center bg-no-repeat"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="block hero-headline-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              The world is speaking.
            </motion.span>
            <motion.span 
              className="block hero-headline-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Osmosis listens.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="hero-body mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Osmosis tracks public records from pension funds, corporations, governments, and nonprofits. 
            We monitor meetings, earnings, interviews, and key documents, alerting you whenever a narrative shifts.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://osmosis.fm/enter"
                className="cta-button inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-secondary shadow-lg hover:shadow-xl"
              >
                GET STARTED
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}