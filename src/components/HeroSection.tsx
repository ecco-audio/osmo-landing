'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/img/osmosis-noise.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-blue-700/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
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
              <strong className="text-white">Osmosis listens.</strong>
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
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