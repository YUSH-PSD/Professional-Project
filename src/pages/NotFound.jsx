import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519065662770-ab3b7e60f2c2?w=1600" 
          alt="404 Page Not Found" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-200">Page Not Found</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <svg className="w-32 h-32 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Looks like you took a wrong turn.</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. 
            Don't worry, it happens to the best of us!
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Link to="/" className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-6 transition-all group">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Home</h3>
              </div>
            </Link>

            <Link to="/rooms" className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-6 transition-all group">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
                <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Rooms</h3>
              </div>
            </Link>

            <Link to="/booking" className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-6 transition-all group">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Book Now</h3>
              </div>
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need help?</h3>
            <p className="text-gray-600 mb-4">Contact our support team for assistance.</p>
            <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
