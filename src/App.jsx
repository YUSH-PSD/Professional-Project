import hotelBanner from './assets/hotelbanner.jpg'
import BookingPanel from './components/BookingPanel'
import HotelWelcome from './components/HotelWelcome'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[92%] max-width-[1200px] bg-white rounded-full shadow-lg px-6 py-3 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🏨</div>
          <div className="text-sm font-semibold">Hotel Dwarika</div>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Rooms & Suites</a>
          <a href="#" className="hover:text-orange-500">Amenities</a>
          <a href="#" className="hover:text-orange-500">Dining</a>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
        </nav>

        <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white rounded-full px-4 py-2 font-semibold">Book Now</button>
      </header>

      <main className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hotelBanner})` }}>
        <div className="absolute inset-0 bg-black/15"></div>
      </main> 

      <BookingPanel />

      <HotelWelcome />

      <Services />

    </div>
  )
}

export default App
