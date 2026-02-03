import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import roomImg from '../assets/room.jpg'
import img2 from '../assets/img-2.jpg'
import image1 from '../assets/image-1.jpg'
import Footer from '../components/Footer'

const roomsData = [
  {
    id: 1,
    name: 'Deluxe Room',
    tagline: 'Comfort & Elegance',
    price: 120,
    size: '35 m²',
    bed: 'King Size',
    view: 'City View',
    maxGuests: 2,
    image: roomImg,
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Room Service', 'Safe']
  },
  {
    id: 2,
    name: 'Executive Suite',
    tagline: 'Business & Leisure',
    price: 220,
    size: '55 m²',
    bed: 'King Size + Sofa Bed',
    view: 'Ocean View',
    maxGuests: 3,
    image: img2,
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Room Service', 'Safe', 'Work Desk', 'Bathtub']
  },
  {
    id: 3,
    name: 'Presidential Suite',
    tagline: 'Ultimate Luxury',
    price: 520,
    size: '120 m²',
    bed: '2 King Size Beds',
    view: 'Panoramic View',
    maxGuests: 4,
    image: image1,
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Room Service', 'Safe', 'Work Desk', 'Bathtub', 'Private Terrace', 'Butler Service', 'Jacuzzi']
  }
]

export default function Rooms() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const checkin = params.get('checkin')
  const checkout = params.get('checkout')
  const guests = params.get('guests')
  const navigate = useNavigate()
  const [hoveredRoom, setHoveredRoom] = useState(null)

  function handleBook(room) {
    navigate(`/booking?room=${room.id}&checkin=${checkin || ''}&checkout=${checkout || ''}&guests=${guests || ''}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src={roomImg} 
          alt="Rooms & Suites" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rooms & Suites
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Experience unparalleled comfort and luxury in our thoughtfully designed accommodations
          </p>
          <div className="mt-6 flex items-center space-x-4 text-white">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              Downtown Location
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              24/7 Concierge
            </span>
          </div>
        </div>
      </div>

      {/* Search Summary */}
      {(checkin || checkout || guests) && (
        <div className="bg-white shadow-md py-4 px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">
            <span className="text-gray-600 font-medium">Your Stay:</span>
            {checkin && (
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                Check-in: {checkin}
              </span>
            )}
            {checkout && (
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                Check-out: {checkout}
              </span>
            )}
            {guests && (
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                {guests} Guest{guests > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Accommodations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Choose Your Perfect Stay</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Each room is designed with your comfort in mind, featuring modern amenities and elegant décor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roomsData.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden group">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {room.tagline}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        {room.size}
                      </span>
                      <span className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5z"></path>
                        </svg>
                        {room.bed}
                      </span>
                      <span className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                        </svg>
                        {room.view}
                      </span>
                    </div>
                    <span className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                      Up to {room.maxGuests}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Experience luxury and comfort</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-orange-500">${room.price}</span>
                    <span className="text-gray-500 text-sm"> / night</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 5).map((amenity, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                          hoveredRoom === room.id 
                            ? 'bg-orange-100 text-orange-700 scale-100' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 5 && (
                      <span className="px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-600">
                        +{room.amenities.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleBook(room)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </button>
                  <button 
                    className="px-4 py-3 border-2 border-gray-300 hover:border-orange-500 text-gray-600 hover:text-orange-500 rounded-lg transition-all duration-300"
                    title="View Details"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Only the finest materials and furnishings in every room</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Best Price Guarantee</h4>
              <p className="text-gray-600">Competitive rates with exclusive member discounts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Cancellation</h4>
              <p className="text-gray-600">Flexible booking with free cancellation up to 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
