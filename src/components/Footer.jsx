import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  function handleSubscribe(e) {
    e.preventDefault()
    alert('Thanks for subscribing — demo only')
  }

  return (
    <footer className="relative mt-12 bg-[#132340] text-white">
      {/* white diamond notch */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rotate-45 w-12 h-12 bg-[#132340]" aria-hidden></div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left - Logo and contact */}
          <div className="md:w-1/4">
            <div className="text-2xl font-semibold tracking-widest">Hotel <span className="block text-sm tracking-[0.6">Dwarika</span></div>
            <p className="mt-6 text-sm text-gray-200">
              Battisputali Road, Kathmandu 44600, Nepal.<br />
              (+977-1) 4579488 / 4570770<br />
              hotel_dwarika@gmail.com
            </p>
          </div>

          {/* Map */}
          <div className="md:w-1/4">
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Our Location</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4177727655847!2d85.3173!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d4d76e8e77%3A0x9d5d4c3b5c5c5c5c!2sBattisputali%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
              className="rounded"
            />
          </div>

          {/* Links */}
          <div className="md:w-1/4">
            <ul className="space-y-4 text-sm text-gray-200">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <p className="text-sm font-semibold text-gray-200">Subscribe to our membership</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Email Address" className="flex-1 px-4 py-3 rounded-l border border-[#d1c09a] bg-transparent text-white placeholder:text-gray-300 focus:outline-none" />
              <button onClick={handleSubscribe} className="px-6 py-3 bg-[#d1c09a] text-[#0f2340] font-semibold rounded-r hover:opacity-95">OK</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
