import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Layout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[92%] max-width-[1200px] bg-white rounded-full shadow-lg px-6 py-3 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-2xl">🏨</div>
            <div className="text-sm font-semibold">Hotel Dwarika</div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/rooms" className="hover:text-orange-500">Rooms &amp; Suites</Link>
          <Link to="/amenities" className="hover:text-orange-500">Amenities</Link>
          <Link to="/dining" className="hover:text-orange-500">Dining</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
        </nav>

        <Link to="/booking" className="ml-4 bg-orange-400 hover:bg-orange-500 text-white rounded-full px-4 py-2 font-semibold">Book Now</Link>
      </header>

      <main className="pt-28">{children}</main>

      <Footer />
    </div>
  )
}
