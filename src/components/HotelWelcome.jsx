import React, { useEffect, useRef, useState } from 'react'
import HotelImage from '../assets/welcome.jpg'

export default function HotelWelcome() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.unobserve(el)
      }
    }, { root: null, rootMargin: '0px', threshold: 0.15 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`bg-white py-16 -mt-12 md:-mt-20 relative z-20 transition-transform duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ willChange: 'opacity, transform' }}
      aria-hidden={!visible}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-orange-400 font-medium">Welcome To</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">Hotel Dwarika</h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">Hotel View Villa is nestled on the tranquil hills of Nagarkot, our villa offers the perfect escape for those seeking peace, comfort, and breathtaking Himalayan views. Surrounded by lush greenery and fresh mountain air, the Hotel View Villa combines modern comfort with a touch of traditional Nepali warmth. Experience calm mornings, starry nights, and the true essence of mountain living - all from the comfort of your away from home.</p>

        <div className="mt-10">
          <img src={HotelImage} alt="Hotel Dwarika" className="mx-auto w-full max-w-4xl h-64 sm:h-72 md:h-80 object-cover rounded-2xl shadow-md"/>
        </div>
      </div>
    </section>
  )
}
