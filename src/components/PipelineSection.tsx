import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance the active step for the pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000) // Change every 2 seconds
    return () => clearInterval(interval)
  }, [steps.length])

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
      {/* Earth globe background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/earth-night-bg.jpg)',
        backgroundSize: '800px 800px',
        backgroundPosition: 'center 120px',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        pointerEvents: 'none',
        filter: 'blur(1px)'
      }} />
      
      {/* Subtle background gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(255, 154, 135, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            className="section-pill mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            {pill}
          </motion.p>
          <motion.h2 
            className="text-6xl font-light text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255, 255, 255, 0.95)' }}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Simplified visual pipeline rail */}
        <div className="relative h-16 mb-16" aria-hidden="true">
          <svg 
            viewBox="0 0 1200 40" 
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9A87" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#F8613C" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#FF9A87" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            {/* Subtle base line */}
            <path 
              d="M 100 20 L 1100 20" 
              stroke="rgba(255, 154, 135, 0.2)" 
              strokeWidth="2" 
              fill="none"
            />
            {/* Animated progress line */}
            <motion.path 
              d="M 100 20 L 1100 20" 
              stroke="url(#pipelineGrad)" 
              strokeWidth="3" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Step nodes */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.circle 
                key={i}
                cx={100 + (i * 250)} 
                cy="20" 
                r={activeStep === i ? "8" : "5"}
                fill={activeStep === i ? "#FF9A87" : "rgba(255, 154, 135, 0.4)"}
                animate={{
                  scale: activeStep === i ? [1, 1.5, 1] : 1,
                  opacity: activeStep === i ? 1 : 0.5
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </svg>
        </div>

        {/* Ghost cards - minimal, emphasis on labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="pipeline-step text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 + (index * 0.05) }}
              viewport={{ once: true }}
              animate={{
                opacity: activeStep === index ? 1 : 0.6,
                scale: activeStep === index ? 1.02 : 1
              }}
              style={{
                padding: '30px 15px',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Glow effect for active step */}
              {activeStep === index && (
                <motion.div 
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    background: 'radial-gradient(circle, rgba(255, 154, 135, 0.2) 0%, transparent 70%)',
                    borderRadius: '12px',
                    pointerEvents: 'none'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative z-10">
                {/* Icon - smaller, subtle */}
                <motion.div 
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 16px',
                    color: activeStep === index ? '#FF9A87' : 'rgba(255, 154, 135, 0.5)',
                    transition: 'color 0.3s ease'
                  }}
                  animate={{
                    y: activeStep === index ? [0, -5, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {getIcon(step.icon)}
                </motion.div>

                {/* Label - THE HERO */}
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: activeStep === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.3s ease'
                }}>
                  {step.label}
                </h3>

                {/* Description - supporting caption */}
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.6)',
                  maxWidth: '220px',
                  margin: '0 auto'
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