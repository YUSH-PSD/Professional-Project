import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const restaurants = [
  {
    id: 1,
    name: 'The Ganj',
    cuisine: 'Fine Dining • Nepali & International',
    description: 'Our flagship restaurant offering an exquisite blend of traditional Nepali cuisine and international favorites, prepared by our award-winning chefs.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    hours: '6:30 AM - 10:30 PM',
    dressCode: 'Smart Casual'
  },
  {
    id: 2,
    name: 'Terrace Restaurant',
    cuisine: 'All-Day Dining • Multi-Cuisine',
    description: 'A vibrant all-day dining venue with live cooking stations, featuring a diverse menu of Asian, Western, and Nepali dishes.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    hours: '6:00 AM - 11:00 PM',
    dressCode: 'Casual'
  },
  {
    id: 3,
    name: 'Dragon House',
    cuisine: 'Specialty • Chinese',
    description: 'Experience authentic Chinese cuisine in an elegant setting, with signature dishes from various regions of China.',
    image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800',
    hours: '12:00 PM - 3:00 PM, 6:00 PM - 10:30 PM',
    dressCode: 'Smart Casual'
  },
  {
    id: 4,
    name: 'Mithai Shop',
    cuisine: 'Bakery & Confectionery',
    description: 'Satisfy your sweet tooth with our freshly baked pastries, cakes, and traditional Nepali sweets.',
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800',
    hours: '7:00 AM - 9:00 PM',
    dressCode: 'Casual'
  }
]

const bars = [
  {
    id: 1,
    name: 'Club 1933',
    type: 'Rooftop Bar',
    description: 'The city\'s premier rooftop lounge offering stunning views, handcrafted cocktails, and a sophisticated ambiance.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
    hours: '4:00 PM - 1:00 AM'
  },
  {
    id: 2,
    name: 'The Lounge',
    type: 'Lobby Bar',
    description: 'A cozy lobby bar perfect for casual meetings or enjoying afternoon tea and light snacks.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    hours: '10:00 AM - 11:00 PM'
  }
]

export default function Dining() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600" 
          alt="Dining" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dining</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Culinary excellence awaits - from traditional Nepali to international flavors</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Culinary Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Exquisite Dining Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on a culinary journey at Hotel Dwarika, where our talented chefs create memorable dining experiences 
            using the finest local and international ingredients.
          </p>
        </div>

        {/* Restaurants Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Restaurants</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{restaurant.cuisine}</p>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                      {restaurant.hours}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                      {restaurant.dressCode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bars Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Bars & Lounges</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bars.map((bar) => (
              <div key={bar.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={bar.image} 
                    alt={bar.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{bar.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{bar.type}</p>
                  <p className="text-gray-600 mb-4">{bar.description}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    {bar.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Experiences */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Special Dining Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Private Dining</h3>
              <p className="text-gray-600">Intimate dining experiences in our private rooms for special occasions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4 14a3 3 0 100-6 3 3 0 000 6zm-7.293 2.293a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L4.414 18H9a1 1 0 000-2H4.414l.293-.293a1 1 0 000-1.414l-2-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cooking Classes</h3>
              <p className="text-gray-600">Learn to prepare authentic Nepali dishes with our expert chefs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chef's Table</h3>
              <p className="text-gray-600">An exclusive multi-course dining experience with wine pairings.</p>
            </div>
          </div>
        </div>

        {/* Reservations */}
        <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reserve Your Table</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            For reservations and special dietary requirements, please contact our dining team or book online.
          </p>
          <Link to="/booking" className="inline-block bg-white hover:bg-gray-100 text-orange-500 font-semibold py-3 px-8 rounded-lg transition-colors">
            Make a Reservation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
