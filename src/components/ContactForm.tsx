
import { useState } from 'react'
import { useMessaging } from '../lib/useMessaging'

export default function ContactForm() {
  const messaging = useMessaging()
  const { contact } = messaging
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    role: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Track form submission attempt
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('contact_form_submitted', {
        company: formData.company,
        team_size: formData.teamSize,
        role: formData.role,
        has_message: !!formData.message,
        source_url: window.location.href,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
      })
    }
    
    // Determine API endpoint based on environment
    const apiBase = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:8080'
      : 'https://osmosis.fm'
    
    try {
      const response = await fetch(`${apiBase}/v2/sales/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          form_type: 'landing',
          name: formData.name,
          company: formData.company,
          team_size: formData.teamSize,
          use_case: formData.role,
          message: formData.message || '',
          subject: 'Landing Page Inquiry',
          submission_metadata: {
            source_url: window.location.href,
            timestamp: new Date().toISOString(),
            utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
            utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
          }
        })
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitStatus('success')
        
        // Track successful submission
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('contact_form_success', {
            company: formData.company,
            team_size: formData.teamSize,
            role: formData.role
          })
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          teamSize: '',
          role: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        
        // Track error
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('contact_form_error', {
            error_type: 'api_error',
            error_message: data.error
          })
        }
        
        console.error('Form submission error:', data.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      
      // Track network/other errors
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('contact_form_error', {
          error_type: 'network_error',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        })
      }
      
      console.error('Form submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section data-testid="cta-section" className="bg-gray-100 py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-pill">
            {contact.sectionTitle}
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
            {contact.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {contact.subheadline}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          {submitStatus === 'success' ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thank you for your inquiry!
              </h3>
              <p className="text-gray-600 mb-4">
                We'll get back to you within 24 hours to discuss how Osmosis can help your team.
              </p>
              <p className="text-sm text-gray-500">
                In the meantime, feel free to explore our solutions at{' '}
                <a href="https://solutions.osmosis.fm" className="text-blue-600 hover:text-blue-700">
                  solutions.osmosis.fm
                </a>
              </p>
            </div>
          ) : (
            /* Form State */
            <>
              {contact.formHeader && (
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {contact.formHeader}
                  </h3>
                  {contact.helperText && (
                    <p className="text-sm text-gray-600">
                      {contact.helperText}
                    </p>
                  )}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  COMPANY
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  TEAM SIZE
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  required
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                ROLE
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                required
              >
                <option value="">Select your role</option>
                <option value="Investment Management">Investment Management</option>
                <option value="Investor Relations">Investor Relations</option>
                <option value="Sales & Business Development">Sales & Business Development</option>
                <option value="Research & Analytics">Research & Analytics</option>
                <option value="Operations">Operations</option>
                <option value="Executive Leadership">Executive Leadership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                MESSAGE <span className="text-gray-400 normal-case">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any additional information you'd like to share..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !formData.email || !formData.name || !formData.company || !formData.teamSize || !formData.role}
              className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  ❌ Something went wrong. Please try again or email us directly at sales@osmosis.fm
                </p>
              </div>
            )}
          </form>
            </>
          )}
        </div>

        {/* Benefits */}
        <div className="flex justify-center items-center space-x-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">$</span>
            </div>
            <p className="text-lg font-medium text-orange-500">
              Drive Revenue
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⏰</span>
            </div>
            <p className="text-lg font-medium text-orange-500">
              Save Time
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⚡</span>
            </div>
            <p className="text-lg font-medium text-orange-500">
              Move Faster
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}