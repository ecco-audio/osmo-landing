import { useState } from 'react'
import { motion } from 'framer-motion'

// Alert notification component
const AlertView = () => (
  <div className="space-y-4">
    <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-lg">
      <div className="mb-3">
        <span className="text-orange-500 text-sm font-medium">Watchlist alert!</span>
        <div className="text-sm text-gray-600 font-medium">"Peter Hurlsman"</div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">P</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900">Powering Big Tech: Hurlsman Corp. CEO on the burgeoning energy crisis for Silicon Valley</div>
          <div className="text-xs text-gray-500 mt-1">DBC A6 - Transcript</div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">13:18- 23:04</span>
      </div>
    </div>
  </div>
)

// Questions/Research component
const QuestionsView = () => (
  <div className="space-y-4">
    <div className="text-center mb-4">
      <h3 className="text-white text-sm font-medium tracking-wider uppercase">WHAT ARE IBM'S PLANS FOR UPGRADING MAINFRAMES?</h3>
    </div>
    <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-lg">
      <div className="text-sm text-gray-700 leading-relaxed mb-4">
        IBM's plans for upgrading mainframes include several key initiatives at AI and IBM Think. Significant announcements are expected regarding the IBM Watson X Assistant set of "Granite" LLMs, which aims to reduce the number of mainframes currently working on multiple future generations of mainframes, including zOS and System z.
      </div>
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">A</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900">AI-Assisted and the Mainframe See Five Quarters of IBM Data</div>
          <div className="text-xs text-gray-500">DBC A6 - Transcript</div>
        </div>
      </div>
      <div className="flex space-x-3">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">00:09- 00:29</span>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">31:50- 31:37</span>
      </div>
    </div>
  </div>
)

// Companies view component (existing)
const CompaniesView = ({ categories }) => (
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
)

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('monitor')

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
          <p 
            className="font-mono font-semibold tracking-wider uppercase mb-4"
            style={{
              fontSize: '12px',
              lineHeight: '20px',
              color: 'rgb(255, 154, 135)'
            }}
          >
            FEATURES
          </p>
          <h2 
            className="font-heading font-normal"
            style={{
              fontSize: '64px',
              lineHeight: '64px',
              letterSpacing: '-0.02em',
              color: 'rgb(42, 96, 248)',
              marginBottom: '32px'
            }}
          >
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
            <motion.div 
              variants={itemVariants}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeFeature === 'monitor' ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveFeature('monitor')}
            >
              <h3 
                className="font-sans font-normal mb-4"
                style={{
                  fontSize: '22px',
                  lineHeight: '30px',
                  color: activeFeature === 'monitor' ? 'rgb(42, 96, 248)' : 'rgb(28, 28, 28)',
                  fontWeight: 400
                }}
              >Monitor Key Entities</h3>
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
            <motion.div 
              variants={itemVariants}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeFeature === 'centralize' ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveFeature('centralize')}
            >
              <h3 
                className="font-sans font-normal mb-4"
                style={{
                  fontSize: '22px',
                  lineHeight: '30px',
                  color: activeFeature === 'centralize' ? 'rgb(42, 96, 248)' : 'rgb(28, 28, 28)',
                  fontWeight: 400
                }}
              >Centralize & Summarize</h3>
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
            <motion.div 
              variants={itemVariants}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeFeature === 'signals' ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveFeature('signals')}
            >
              <h3 
                className="font-sans font-normal mb-4"
                style={{
                  fontSize: '22px',
                  lineHeight: '30px',
                  color: activeFeature === 'signals' ? 'rgb(42, 96, 248)' : 'rgb(28, 28, 28)',
                  fontWeight: 400
                }}
              >Act on Real-Time Signals</h3>
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
            className="bg-noise bg-cover bg-center rounded-xl p-8 text-white overflow-hidden min-h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {activeFeature === 'monitor' && <CompaniesView categories={categories} />}
              {activeFeature === 'centralize' && <AlertView />}
              {activeFeature === 'signals' && <QuestionsView />}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}