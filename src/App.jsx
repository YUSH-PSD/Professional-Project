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
  return (
    <div className="min-h-screen relative overflow-hidden">
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[92%] max-width-[1200px] bg-white rounded-full shadow-lg px-6 py-3 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
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
