
import { useState } from 'react'
import { useMessaging } from '../lib/useMessaging'

export default function ContactForm() {
  const messaging = useMessaging()
  const { contact } = messaging
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <p 
            className="font-mono font-semibold tracking-wider uppercase"
            style={{
              fontSize: '12px',
              lineHeight: '20px',
              color: 'rgb(255, 154, 135)',
              marginBottom: '24px'
            }}
          >
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
                  placeholder="jane@osmosis.fm"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
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