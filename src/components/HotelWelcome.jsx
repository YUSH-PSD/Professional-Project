import React, { useEffect, useRef, useState } from 'react'
import HotelImage from '../assets/welcome.jpg'

export default function HotelWelcome() {
  const ref = useRef(null)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [visible, setVisible] = useState(prefersReduced)

  useEffect(() => {
    if (prefersReduced) return
    if (!ref.current) return
    const el = ref.current

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.unobserve(el)
      }
    }, { root: null, rootMargin: '0px', threshold: 0.15 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [prefersReduced])

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

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">Dwarika's Hotel is a luxury hotel in Kathmandu, Nepal, located in the Battisputali neighborhood. The hotel is a collection of traditional heritage Newari houses centered around courtyards. It has over 80 rooms and 48 suites, and took over 30 years to construct. It has been recognized with the UNESCO Asia-Pacific Heritage Award for Culture Heritage Conservation for its commitment to preserving Nepali architectural traditions. It was awarded the PATA (Pacific Asia Travel Association) Heritage Gold Award in 1980..</p>

        <div className="mt-10">
          <img src={HotelImage} alt="Hotel Dwarika" className="mx-auto w-full max-w-4xl h-64 sm:h-72 md:h-80 object-cover rounded-2xl shadow-md"/>
        </div>
      </div>
    </section>
  )
}
