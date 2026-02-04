import React from 'react'
import BannerSlider from '../components/BannerSlider'
import BookingPanel from '../components/BookingPanel'
import HotelWelcome from '../components/HotelWelcome'
import Services from '../components/Services'
import BlogsEvents from '../components/BlogsEvents'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <BannerSlider />

      <BookingPanel />

      <HotelWelcome />

      <Services />

      <BlogsEvents />

      <Footer />
    </div>
  )
}
