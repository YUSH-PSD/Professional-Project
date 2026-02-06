import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import hotelView from '../assets/image-4.jpg'
import welcomeImg from '../assets/dwarikas-97.jpg'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src={welcomeImg} 
          alt="About Hotel Dwarika" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Discover the legacy of hospitality that defines Hotel Dwarika</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <img src={hotelView} alt="Hotel Dwarika" className="w-full rounded-xl shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">A Legacy of Exceptional Hospitality</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Hotel Dwarika, where tradition meets modern luxury in the heart of Kathmandu. 
              Established with a vision to provide world-class hospitality while preserving Nepalese heritage, 
              our hotel has been a beacon of excellence for over three decades.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to guest satisfaction, attention to detail, and warm Nepalese hospitality 
              has earned us recognition as one of the premier luxury hotels in the region.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-orange-400">30+</span>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-orange-400">150+</span>
                <p className="text-sm text-gray-600">Luxury Rooms</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-orange-400">50K+</span>
                <p className="text-sm text-gray-600">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for perfection in every detail of our service and accommodations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heritage</h3>
              <p className="text-gray-600">Preserving and celebrating Nepalese culture and traditions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Committed to environmentally responsible practices.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rajendra Dhar</h3>
              <p className="text-orange-500">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sita Sharma</h3>
              <p className="text-orange-500">General Manager</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Amit Patel</h3>
              <p className="text-orange-500">Executive Chef</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Experience Our Hospitality</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We invite you to discover the Hotel Dwarika difference. Book your stay today and create unforgettable memories.
          </p>
          <Link to="/booking" className="inline-block bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Book Your Stay
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
