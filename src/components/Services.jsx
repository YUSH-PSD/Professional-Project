import React, { useState } from 'react'
import spaImage from '../assets/hotelbanner.jpg'
import welcomeImage from '../assets/welcome.jpg'

const items = [
  {
    key: 'spa',
    label: 'Spa',
    eyebrow: 'SPA',
    title: 'M Wellness Spa',
    desc: 'Unwind with a relaxing massage at the sleek and sophisticated spa at our hotel in Kathmandu near Thamel.',
    image: spaImage,
  },
  {
    key: 'fitness',
    label: 'Fitness',
    eyebrow: 'FITNESS',
    title: 'Wellness Gym',
    desc: 'Stay in shape during your stay with our fully equipped fitness center and personal trainers.',
    image: welcomeImage,
  },
  {
    key: 'swimming',
    label: 'Swimming',
    eyebrow: 'SWIMMING',
    title: 'Rooftop Pool',
    desc: 'Take a dip in our heated rooftop pool with panoramic views of the Himalayas.',
    image: spaImage,
  },
]

export default function Services() {
  const [active, setActive] = useState('spa')
  const current = items.find((i) => i.key === active) || items[0]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-extrabold">More Ways to Enjoy Your Stay</h3>

        <div className="mt-6">
          <nav className="flex justify-center gap-8 border-b border-gray-200">
            {items.map((it) => (
              <button
                key={it.key}
                onClick={() => setActive(it.key)}
                className={`py-3 font-medium relative text-gray-700 ${active === it.key ? 'text-black' : 'text-gray-500'}`}
              >
                {it.label}
                {active === it.key && (
                  <span className="absolute left-1/2 -bottom-[1px] w-12 transform -translate-x-1/2 h-0.5 bg-rose-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="rounded-xl overflow-hidden">
                <img src={current.image} alt={current.title} className="w-full h-64 md:h-80 object-cover" />
              </div>

              <div className="text-center md:text-left px-4 md:px-8">
                <div className="text-sm text-gray-400 tracking-widest">{current.eyebrow}</div>
                <h4 className="text-3xl font-extrabold mt-2">{current.title}</h4>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">{current.desc}</p>

                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-rose-600 font-medium">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
