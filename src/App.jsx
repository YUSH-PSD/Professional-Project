import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import BookingPanel from './components/BookingPanel'
import HotelWelcome from './components/HotelWelcome'
import Services from './components/Services'
import BlogsEvents from './components/BlogsEvents'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Amenities from './pages/Amenities'
import Dining from './pages/Dining'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import BlogPost from './pages/BlogPost'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[92%] max-width-[1200px] bg-white rounded-full shadow-lg px-6 py-3 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <div className="text-2xl">🏨</div>
            <div className="text-2xl logo-font">Hotel Dwarika</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <Link to="/about" onClick={scrollToTop} className="hover:text-orange-500">About</Link>
          <Link to="/rooms" onClick={scrollToTop} className="hover:text-orange-500">Rooms & Suites</Link>
          <Link to="/amenities" onClick={scrollToTop} className="hover:text-orange-500">Amenities</Link>
          <Link to="/dining" onClick={scrollToTop} className="hover:text-orange-500">Dining</Link>
          <Link to="/contact" onClick={scrollToTop} className="hover:text-orange-500">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/booking" onClick={scrollToTop} className="hidden md:block ml-4 bg-orange-400 hover:bg-orange-500 text-white rounded-full px-4 py-2 font-semibold">Book Now</Link>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl z-25 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col py-4">
          <Link to="/about" onClick={scrollToTop} className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors">About</Link>
          <Link to="/rooms" onClick={scrollToTop} className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors">Rooms & Suites</Link>
          <Link to="/amenities" onClick={scrollToTop} className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors">Amenities</Link>
          <Link to="/dining" onClick={scrollToTop} className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors">Dining</Link>
          <Link to="/contact" onClick={scrollToTop} className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors">Contact Us</Link>
          <hr className="my-2" />
          <Link to="/booking" onClick={scrollToTop} className="mx-6 my-2 bg-orange-400 hover:bg-orange-500 text-white rounded-full px-4 py-3 font-semibold text-center">Book Now</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
