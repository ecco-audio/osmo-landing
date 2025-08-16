'use client'

import Link from 'next/link'
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
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              The world is speaking.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <strong className="text-white font-normal">Osmosis listens.</strong>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
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
              <Link
                href="https://osmosis.fm/enter"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-secondary hover:bg-secondary/90 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                GET STARTED
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}