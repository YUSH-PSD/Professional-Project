import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import fitnessImg from '../assets/fitness.jpg'
import spaImg from '../assets/spa.jpg'
import swimmingImg from '../assets/Swimming.jpeg'

const amenities = [
  {
    id: 1,
    name: 'Spa & Wellness',
    description: 'Rejuvenate your senses at our world-class spa offering traditional Nepalese treatments and modern therapies.',
    image: spaImg,
    features: ['Full Service Spa', 'Massage Therapy', 'Steam & Sauna', 'Jacuzzi', 'Beauty Salon']
  },
  {
    id: 2,
    name: 'Fitness Center',
    description: 'Stay fit with our state-of-the-art gym equipped with the latest cardiovascular and strength training equipment.',
    image: fitnessImg,
    features: ['24/7 Access', 'Personal Training', 'Yoga Classes', 'Cardio Equipment', 'Free Weights']
  },
  {
    id: 3,
    name: 'Swimming Pool',
    description: 'Take a refreshing dip in our temperature-controlled infinity pool with stunning city views.',
    image: swimmingImg,
    features: ['Infinity Pool', 'Kids Pool', 'Pool Bar', 'Towel Service', 'Lounge Chairs']
  },
  {
    id: 4,
    name: 'Business Center',
    description: 'Complete your work efficiently with our fully equipped business center and meeting facilities.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    features: ['Private Offices', 'Meeting Rooms', 'High-Speed WiFi', 'Printing Services', 'Secretarial Support']
  },
  {
    id: 5,
    name: 'Concierge Services',
    description: 'Our dedicated concierge team is here to make your stay seamless and memorable.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    features: ['Airport Transfers', 'Tour Desk', 'Restaurant Reservations', 'Car Rental', 'Event Tickets']
  },
  {
    id: 6,
    name: 'Kids Club',
    description: 'Keep the little ones entertained with our supervised kids club activities and facilities.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    features: ['Games Room', 'Arts & Crafts', 'Outdoor Play', 'Story Time', 'Snack Bar']
  }
]

export default function Amenities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src={fitnessImg} 
          alt="Amenities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Amenities</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Experience world-class facilities designed for your comfort and relaxation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Facilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Premium Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hotel Dwarika, we offer an array of world-class amenities to make your stay truly exceptional. 
            From relaxation to recreation, everything you need is right at your fingertips.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={amenity.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{amenity.name}</h3>
                <p className="text-gray-600 mb-4">{amenity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {amenity.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🚗', name: 'Valet Parking' },
              { icon: '🧳', name: 'Luggage Storage' },
              { icon: '🧺', name: 'Laundry Service' },
              { icon: '🔒', name: '24/7 Security' },
              { icon: '🏥', name: 'Medical Services' },
              { icon: '💼', name: 'Currency Exchange' },
              { icon: '📦', name: 'Package Handling' },
              { icon: '🐾', name: 'Pet Friendly' }
            ].map((service, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{service.icon}</span>
                <p className="mt-2 text-gray-700 font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hours Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Spa & Wellness</h3>
            <p className="text-gray-600 mb-2">Open Daily</p>
            <p className="text-orange-500 font-medium">10:00 AM - 9:00 PM</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fitness Center</h3>
            <p className="text-gray-600 mb-2">24/7 Access</p>
            <p className="text-orange-500 font-medium">Always Open</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Swimming Pool</h3>
            <p className="text-gray-600 mb-2">Open Daily</p>
            <p className="text-orange-500 font-medium">6:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Experience Luxury?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your stay now and enjoy all our premium amenities during your visit.
          </p>
          <Link to="/booking" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Book Your Stay
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
