import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMessaging } from '../lib/useMessaging'

// Personalized Mandate Alerts component
const AlertView = () => (
  <div className="space-y-4">
    <div className="bg-white rounded-2xl p-6 max-w-lg mx-auto shadow-lg">
      <div className="mb-4">
        <div className="text-lg font-semibold text-gray-900 mb-2">Maine PERS</div>
        <div className="text-sm text-gray-600 font-medium mb-3">
          <span className="font-semibold text-green-600">Allocation Status:</span> Hedge funds were actively discussed and receiving allocation.
        </div>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">
        MainePERS has strategically increased its private credit allocation from 5% in 2017 to 16.5%. This signals a strong shift towards higher-yielding investment avenues and highlights new partnerships with multi-strategy managers like Surgo Capital and Alyeska Master Fund.
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">Mandate Alert</span>
        <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">Active Opportunity</span>
      </div>
    </div>
  </div>
)

// Pitch Preparation component
const QuestionsView = () => (
  <div className="space-y-4">
    <div className="text-center mb-4">
      <h3 className="text-white text-sm font-medium tracking-wider uppercase">How should I prepare for my CalPERS infrastructure pitch?</h3>
    </div>
    <div className="bg-white rounded-2xl p-6 max-w-lg mx-auto shadow-lg">
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-900 mb-1">You'll be meeting with Sarah Corr</div>
        <div className="text-xs text-gray-600 mb-3">
          Managing Investment Director, Real Assets
        </div>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed mb-4">
        Over the past year, she has increasingly voiced her opinions about ESG integration in infrastructure investments and has been pushing for more direct infrastructure deals rather than fund-of-funds approaches. She's particularly interested in renewable energy projects and has expressed skepticism about traditional infrastructure valuations.
      </div>
      <div className="border-t pt-3">
        <div className="text-xs text-gray-500 mb-2">Key talking points:</div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ESG Focus</span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Direct Deals</span>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Renewable Energy</span>
        </div>
      </div>
    </div>
  </div>
)

// Monitor Key Entities view component
const CompaniesView = ({ categories }) => (
  <div className="space-y-8">
    {/* Pension Funds */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
        PENSION FUNDS:
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories.pensionFunds.map((fund, index) => (
          <motion.span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              fund === 'SWIB' 
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
            {fund}
          </motion.span>
        ))}
      </div>
    </motion.div>

    {/* Consultants */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
        CONSULTANTS:
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories.consultants.map((consultant, index) => (
          <motion.span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              consultant === 'Meketa' 
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
            {consultant}
          </motion.span>
        ))}
      </div>
    </motion.div>

    {/* Investment Strategies */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
        STRATEGIES:
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories.strategies.map((strategy, index) => (
          <motion.span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              strategy === 'Private Credit' 
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
            {strategy}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
)

export default function FeaturesSection() {
  const messaging = useMessaging()
  const { features } = messaging
  const [activeFeature, setActiveFeature] = useState('monitor')

  const categories = {
    pensionFunds: ['Florida SBA', 'SWIB', 'TRS', 'CalPERS'],
    consultants: ['Meketa', 'Cambridge Associates', 'NEPC', 'RVK'],
    strategies: ['Private Credit', 'Private Equity', 'Infrastructure', 'Hedge Funds']
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
          <p className="section-pill">
            {features.sectionTitle}
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
            {features.headline}
            {features.subheadline && (
              <>
                <br />
                <span className="text-gray-500">{features.subheadline}</span>
              </>
            )}
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
            {/* Dynamic Feature Items */}
            {features.items.map((item, index) => {
              const featureKeys = ['monitor', 'centralize', 'signals']
              const featureKey = featureKeys[index]
              
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === featureKey ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveFeature(featureKey)}
                >
                  <h3 
                    className="font-sans font-normal mb-4"
                    style={{
                      fontSize: '22px',
                      lineHeight: '30px',
                      color: activeFeature === featureKey ? 'rgb(42, 96, 248)' : 'rgb(28, 28, 28)',
                      fontWeight: 400
                    }}
                  >{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <motion.button 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more →
                  </motion.button>
                </motion.div>
              )
            })}
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