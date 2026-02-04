import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600" 
          alt="Terms & Conditions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms & Conditions</h1>
          <p className="text-gray-200">Please read our policies carefully</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Welcome to Hotel Dwarika. By accessing and using our website and services, you agree to comply with 
            the following terms and conditions. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Reservation and Booking Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>1.1 Reservation Confirmation:</strong> All reservations are subject to availability and confirmation. A reservation is considered confirmed only upon receipt of a confirmation email from Hotel Dwarika.</p>
              <p><strong>1.2 Payment Terms:</strong> Full payment or a deposit may be required at the time of booking, depending on the room type and length of stay. We accept major credit cards, debit cards, and bank transfers.</p>
              <p><strong>1.3 Check-in/Check-out:</strong> Check-in time is 2:00 PM onwards, and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request and are subject to additional charges.</p>
              <p><strong>1.4 Minimum Stay:</strong> A minimum stay of 2 nights may be required during peak seasons and special events.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cancellation Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>2.1 Standard Cancellation:</strong> Free cancellation is available up to 24 hours before the scheduled check-in date. Cancellations made less than 24 hours before check-in will be charged one night's stay.</p>
              <p><strong>2.2 Non-Refundable Rates:</strong> Certain promotional rates are non-refundable and cannot be cancelled or modified without penalty.</p>
              <p><strong>2.3 No-Show Policy:</strong> Failure to arrive on the scheduled check-in date without prior notice will result in a charge of one night's stay.</p>
              <p><strong>2.4 Early Departure:</strong> Guests departing before their scheduled check-out date may be charged an early departure fee equal to one night's stay.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Guest Responsibilities</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>3.1 Age Requirement:</strong> Guests must be at least 18 years of age to make a reservation and check-in.</p>
              <p><strong>3.2 Valid Identification:</strong> Guests must provide valid government-issued identification at check-in.</p>
              <p><strong>3.3 Guest Conduct:</strong> Guests are expected to conduct themselves in a manner that does not disturb other guests or staff. We reserve the right to remove any guest who violates our policies.</p>
              <p><strong>3.4 Damage and Loss:</strong> Guests will be held responsible for any damage to hotel property or loss of hotel assets during their stay.</p>
              <p><strong>3.5 Pets:</strong> Pets are not allowed on the premises, except for service animals as defined by applicable law.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Room Rates and Taxes</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>4.1 Rate Inclusion:</strong> Room rates include accommodation for the number of guests specified and may include breakfast unless otherwise stated.</p>
              <p><strong>4.2 Taxes and Fees:</strong> All rates are subject to applicable taxes, including but not limited to service charges, government taxes, and tourism fees.</p>
              <p><strong>4.3 Rate Changes:</strong> Hotel Dwarika reserves the right to modify rates at any time. The rate applicable at the time of booking will be honored for the duration of the stay.</p>
              <p><strong>4.4 Special Packages:</strong> Promotional packages and rates may have additional terms and conditions that will be communicated at the time of booking.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability and Insurance</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>5.1 Hotel Liability:</strong> Hotel Dwarika shall not be held liable for any loss, theft, or damage to personal belongings unless caused by the negligence of the hotel.</p>
              <p><strong>5.2 Safekeeping:</strong> The hotel provides in-room safes for valuable items. We strongly recommend guests use these facilities for valuable possessions.</p>
              <p><strong>5.3 Travel Insurance:</strong> We strongly recommend that guests obtain comprehensive travel insurance to cover any unforeseen circumstances.</p>
              <p><strong>5.4 Force Majeure:</strong> Hotel Dwarika shall not be liable for any failure to perform obligations due to events beyond our reasonable control, including natural disasters, war, terrorism, or government actions.</p>
            </div>
          </section>

          <div className="bg-gray-50 rounded-xl p-6 mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these terms and conditions, please don't hesitate to contact us.
            </p>
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
