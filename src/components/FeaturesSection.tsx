'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState('companies')

  const categories = {
    companies: ['AMD', 'Apple', 'Crowdstrike', 'JetBlue'],
    people: ['Mary Barra', 'Jamie Dimon', 'Jensen Huang'],
    topics: ['FinTech', 'Generative AI', 'Cyber security']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section data-testid="features-section" className="bg-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-4">
            FEATURES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            The data you need to know <br />
            <span className="text-gray-500">routed to the right person <br />
            with the right context</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Feature Descriptions */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Monitor Key Entities */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitor Key Entities</h3>
              <p className="text-gray-600 mb-4">
                Osmosis continuously scans meetings, documents and press releases for 
                changes in strategy
              </p>
              <motion.button 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.button>
            </motion.div>

            {/* Centralize & Summarize */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Centralize & Summarize</h3>
              <p className="text-gray-600 mb-4">
                We consolidate relevant insights into an easy-to-navigate hub, complete 
                with highlights, summaries, and actionable next steps
              </p>
              <motion.button 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.button>
            </motion.div>

            {/* Act on Real-Time Signals */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Act on Real-Time Signals</h3>
              <p className="text-gray-600 mb-4">
                The moment an entity you follow modifies their strategy, you get an 
                immediate notification on why it matters to you and your team
              </p>
              <motion.button 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Panel */}
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white"
            style={{
              backgroundImage: `url('/img/osmosis-noise.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Companies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
                  COMPANIES:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.companies.map((company, index) => (
                    <motion.span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        company === 'JetBlue' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {company}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* People */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
                  PEOPLE:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.people.map((person, index) => (
                    <motion.span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        person === 'Jamie Dimon' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {person}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
                  TOPICS:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.topics.map((topic, index) => (
                    <motion.span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        topic === 'FinTech' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}