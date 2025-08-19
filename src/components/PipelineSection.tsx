import { motion } from 'framer-motion'

interface PipelineProps {
  pill: string
  headline: string
  steps: Array<{
    label: string
    description: string
    icon: string
  }>
}

export default function PipelineSection({ pill, headline, steps }: PipelineProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'mic':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C11.4477 2 11 2.44772 11 3V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V3C13 2.44772 12.5523 2 12 2Z" fill="currentColor"/>
            <path d="M7 6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V11C17 13.2091 15.2091 15 13 15H11C8.79086 15 7 13.2091 7 11V6Z" fill="currentColor"/>
            <path d="M5 11C5 10.4477 4.55228 10 4 10C3.44772 10 3 10.4477 3 11C3 14.5265 5.60771 17.4439 9 17.9291V20H7C6.44772 20 6 20.4477 6 21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H15V17.9291C18.3923 17.4439 21 14.5265 21 11C21 10.4477 20.5523 10 20 10C19.4477 10 19 10.4477 19 11C19 13.7614 16.7614 16 14 16H10C7.23858 16 5 13.7614 5 11Z" fill="currentColor"/>
          </svg>
        )
      case 'sparkle':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L19 7L15.45 11.82L19 16.63L13.09 15.38L12 22L10.91 15.38L5 16.63L8.55 11.82L5 7L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
        )
      case 'link':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        )
      case 'network':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="12" r="2" fill="currentColor"/>
            <circle cx="12" cy="5" r="2" fill="currentColor"/>
            <circle cx="19" cy="12" r="2" fill="currentColor"/>
            <circle cx="12" cy="19" r="2" fill="currentColor"/>
            <path d="M6.7 10.7L10.3 7.3M13.7 6.7L17.3 10.3M17.3 13.7L13.7 17.3M10.3 17.3L6.7 13.7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.section 
      className="pipeline-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0C1224 0%, #0B1328 50%, #0A1834 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(255, 154, 135, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.p 
            className="section-pill mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            {pill}
          </motion.p>
          <motion.h2 
            className="text-5xl font-light text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Visual pipeline rail */}
        <div className="relative h-20 mb-12" aria-hidden="true">
          <svg 
            viewBox="0 0 1200 64" 
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9A87"/>
                <stop offset="50%" stopColor="#F8613C"/>
                <stop offset="100%" stopColor="#2A60F8"/>
              </linearGradient>
              <filter id="pipelineGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M 100 32 L 1100 32" 
              stroke="url(#pipelineGrad)" 
              strokeWidth="3" 
              filter="url(#pipelineGlow)" 
              fill="none" 
              opacity=".6"
            />
            {/* Nodes */}
            {[0, 1, 2, 3, 4].map((i) => (
              <circle 
                key={i}
                className="pipeline-node" 
                cx={100 + (i * 250)} 
                cy="32" 
                r="6" 
                fill="#FF9A87"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 154, 135, 0.6))'
                }}
              />
            ))}
            {/* Animated pulse */}
            <circle r="8" fill="#FF9A87">
              <animate attributeName="cx" values="100;1100" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="32;32" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.3;1;0.3;1" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="r" values="8;10;8;10;8" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="pipeline-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 154, 135, 0.2)',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient border effect on hover */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '16px',
                padding: '1px',
                background: 'linear-gradient(135deg, transparent, rgba(255, 154, 135, 0.5), transparent)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0,
                transition: 'opacity 0.3s'
              }} className="hover:opacity-100" />

              <div className="relative z-10">
                <div style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '16px',
                  color: '#FF9A87'
                }}>
                  {getIcon(step.icon)}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FF9A87',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {step.label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}