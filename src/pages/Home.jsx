import React from 'react'
import hotelBanner from '../assets/Hotelfull.jpeg'
import BookingPanel from '../components/BookingPanel'
import HotelWelcome from '../components/HotelWelcome'
import Services from '../components/Services'
import BlogsEvents from '../components/BlogsEvents'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <main className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hotelBanner})` }}>
        <div className="absolute inset-0 bg-black/15"></div>
      </main>

      <BookingPanel />

      <HotelWelcome />

      <Services />

      <BlogsEvents />

      <Footer />
    </div>
  )
}
