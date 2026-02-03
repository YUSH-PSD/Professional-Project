import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-[#132340] text-white">
      {/* white diamond notch */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rotate-45 w-12 h-12 bg-[#132340]" aria-hidden></div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left - Logo and contact */}
          <div className="md:w-1/4">
            <div className="text-2xl font-semibold tracking-widest">Hotel <span className="block text-sm tracking-[0.6">Dwarika</span></div>
            <p className="mt-6 text-sm text-gray-200">
              497 Evergreen Rd. Roseville, CA 95673<br />
              +44 345 678 903<br />
              hotel_dwarika@gmail.com
            </p>
          </div>

          {/* Links */}
          <div className="md:w-1/4">
            <ul className="space-y-4 text-sm text-gray-200">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:w-1/4">
            <div className="flex flex-col gap-4 text-gray-200">
              <a href="#" className="flex items-center gap-3 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.83c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V22C18.34 21.12 22 17 22 12z" fill="currentColor" />
                </svg>
                <span className="text-sm">Facebook</span>
              </a>

              <a href="#" className="flex items-center gap-3 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 5.92c-.77.34-1.6.57-2.47.68a4.26 4.26 0 0 0 1.86-2.36 8.49 8.49 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.22 3.86A12.03 12.03 0 0 1 3.15 4.8a4.24 4.24 0 0 0 1.32 5.65 4.21 4.21 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.16c-.47.13-.97.2-1.48.2-.36 0-.71-.03-1.05-.1a4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54 12.03 12.03 0 0 0 8.29 22c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.36-.01-.54.8-.58 1.49-1.3 2.04-2.12-.73.32-1.52.54-2.34.63z" fill="currentColor" />
                </svg>
                <span className="text-sm">Twitter</span>
              </a>

              <a href="#" className="flex items-center gap-3 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18.5 6.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" fill="currentColor" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <p className="text-sm font-semibold text-gray-200">Subscribe to our membership</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Email Address" className="flex-1 px-4 py-3 rounded-l border border-[#d1c09a] bg-transparent text-white placeholder:text-gray-300 focus:outline-none" />
              <button className="px-6 py-3 bg-[#d1c09a] text-[#0f2340] font-semibold rounded-r hover:opacity-95">OK</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
