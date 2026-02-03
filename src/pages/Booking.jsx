import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const roomTypes = [
  { id: 1, name: 'Deluxe Room', price: 120, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800' },
  { id: 2, name: 'Executive Suite', price: 220, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' },
  { id: 3, name: 'Presidential Suite', price: 520, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800' }
]

export default function Booking() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const preselectedRoom = params.get('room')
  const checkin = params.get('checkin') || ''
  const checkout = params.get('checkout') || ''
  const guests = params.get('guests') || ''
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roomType: preselectedRoom || '',
    checkIn: checkin,
    checkOut: checkout,
    guests: guests || '2',
    specialRequests: '',
    paymentMethod: 'creditCard'
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for your reservation! A confirmation email will be sent shortly.')
    navigate('/')
  }

  const selectedRoom = roomTypes.find(r => r.id.toString() === formData.roomType)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-red from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" 
          alt="Book Your Stay" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Book Your Stay</h1>
          <p className="text-gray-200">Complete your reservation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Room Selection */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Select Room
                </h2>
                <div className="space-y-4">
                  {roomTypes.map((room) => (
                    <label 
                      key={room.id} 
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.roomType === room.id.toString()
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="roomType"
                        value={room.id}
                        checked={formData.roomType === room.id.toString()}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <img src={room.image} alt={room.name} className="w-24 h-24 object-cover rounded-lg" />
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold text-gray-900">{room.name}</h3>
                        <p className="text-gray-600">From ${room.price} / night</p>
                      </div>
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        {formData.roomType === room.id.toString() && (
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stay Details */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Stay Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">Check-In Date *</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">Check-Out Date *</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  Payment Information
                </h2>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                  <div className="flex gap-4">
                    {['creditCard', 'debitCard', 'paypal'].map((method) => (
                      <label 
                        key={method}
                        className={`flex items-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.paymentMethod === method
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {method.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-orange-700">
                    <strong>Note:</strong> Your card will only be charged after confirmation. 
                    Free cancellation available up to 24 hours before check-in.
                  </p>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Special Requests</h2>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Complete Reservation
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h2>
              
              {selectedRoom && (
                <div className="mb-6">
                  <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <h3 className="font-semibold text-gray-900">{selectedRoom.name}</h3>
                  <p className="text-orange-500 font-bold text-xl">${selectedRoom.price} / night</p>
                </div>
              )}

              <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-In</span>
                  <span className="font-medium text-gray-900">{formData.checkIn || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-Out</span>
                  <span className="font-medium text-gray-900">{formData.checkOut || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium text-gray-900">{formData.guests}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Room Rate</span>
                  <span className="font-medium text-gray-900">${selectedRoom?.price || 0} × 1 night</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Taxes & Fees (13%)</span>
                  <span className="font-medium text-gray-900">${selectedRoom ? Math.round(selectedRoom.price * 0.13) : 0}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${selectedRoom ? selectedRoom.price + Math.round(selectedRoom.price * 0.13) : 0}</span>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center text-orange-700 text-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Free Cancellation
                </div>
                <div className="flex items-center text-orange-700 text-sm mt-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Best Price Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
