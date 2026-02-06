import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  function validateForm() {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (formData.subject === '') newErrors.subject = 'Please select a subject'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus({ type: 'success', message: `Thanks ${formData.name}! We've received your message and will get back to you within 24 hours.` })
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const faqs = [
    { question: 'What are your check-in and check-out times?', answer: 'Check-in is from 2:00 PM and check-out is until 12:00 PM.' },
    { question: 'Do you offer airport pickup?', answer: 'Yes, we offer 24/7 airport pickup. Contact us to arrange.' },
    { question: 'Is breakfast included?', answer: 'Yes, breakfast is included in most room packages.' },
    { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 24 hours before check-in.' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-120 md:h-120 bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-blue from-black/30 to-transparent"></div>
        <div className="relative z-10 text-center text-orange-400 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-500 text-lg">We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Success Message */}
        {submitStatus && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-green-800 font-medium">Message Sent!</p>
              <p className="text-green-600 text-sm">{submitStatus.message}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#132340] mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${errors.name ? 'border-red-300 focus:ring-red-300' : 'border-gray-300 focus:ring-[#d1c09a]'} focus:outline-none focus:ring-2`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${errors.email ? 'border-red-300 focus:ring-red-300' : 'border-gray-300 focus:ring-[#d1c09a]'} focus:outline-none focus:ring-2`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977-98XXXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1c09a] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all ${errors.subject ? 'border-red-300 focus:ring-red-300' : 'border-gray-300 focus:ring-orange-400'} focus:outline-none focus:ring-2`}
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="event">Event & Meeting</option>
                      <option value="feedback">Feedback</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    className={`w-full px-4 py-3 border rounded-lg transition-all ${errors.message ? 'border-red-300 focus:ring-red-300' : 'border-gray-300 focus:ring-[#d1c09a]'} focus:outline-none focus:ring-2`}
                    rows={5}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-400 hover:bg-orange-500'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#132340] mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="https://maps.google.com/?q=Battisputali+Road+Kathmandu" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#132340]">Address</p>
                    <p className="text-gray-600 text-sm">Battisputali Road, Kathmandu 44600, Nepal</p>
                  </div>
                </a>
                
                <a href="tel:+97714579488" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#132340]">Phone</p>
                    <p className="text-gray-600 text-sm">(+977-1) 4579488 / 4570770</p>
                  </div>
                </a>
                
                <a href="mailto:hotel_dwarika@gmail.com" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#132340]">Email</p>
                    <p className="text-gray-600 text-sm">hotel_dwarika@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray">Working Hours</p>
                    <p className="text-gray-600 text-sm">24/7 Front Desk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/booking" className="text-center py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all">
                Book Now
              </Link>
              <a href="tel:+97714579488" className="text-center py-3 border-2 border-orange-400 text-[#132340] font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all">
                Call Us
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-[#132340] mb-4">Quick FAQ</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-700 hover:text-[#132340] transition-colors">
                      {faq.question}
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4177727655847!2d85.3173!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d4d76e8e77%3A0x9d5d4c3b5c5c5c5c!2sBattisputali%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          />
        </div>
      </div>
    </div>
  )
}
