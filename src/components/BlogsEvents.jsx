import React from 'react'
import img1 from '../assets/welcome.jpg'
import img2 from '../assets/hotelbanner.jpg'
import img3 from '../assets/img-2.jpg'

const posts = [
  { id: 1, title: 'A Day In The Life Of A Dwarika Guest', category: 'Hotels', date: '23 Feb, 2024', image: img1 },
  { id: 2, title: 'Guide To Seasonal Activities In The City', category: 'Activities', date: '23 Feb, 2024', image: img2 },
  { id: 3, title: 'A Look Inside Hotel Dwarika\'s Suites', category: 'Rooms', date: '23 Feb, 2024', image: img3 },
  { id: 4, title: "Why Hotel Dwarika Is The Perfect Staycation Destination", category: 'Hotels', date: '23 Feb, 2024', image: img2 },
  { id: 5, title: 'The Benefits Of Booking Directly With Hotel Dwarika', category: 'Hotels', date: '23 Feb, 2024', image: img1 },
]

export default function BlogsEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif text-gray-700">Our Blogs &amp; Events</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top row: three small cards */}
          {posts.slice(0, 3).map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden bg-white shadow" tabIndex="0">
              <div className="relative">
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                <div className="absolute left-4 top-4 bg-white/80 text-xs text-gray-700 px-3 py-1 rounded-full">{p.category}</div>
                <div className="absolute left-4 bottom-4 text-left text-sm">
                  <h4 className="text-base font-semibold text-white">{p.title}</h4>
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button aria-label={`Read ${p.title}`} className="bg-white/90 text-gray-900 px-3 py-2 rounded-full text-sm font-medium hover:bg-white">Read</button>
                  <button aria-label={`Save ${p.title}`} className="bg-white/80 text-gray-900 px-3 py-2 rounded-full text-sm font-medium hover:bg-white">Save</button>
                </div>
              </div>
              <div className="p-4 text-xs text-gray-500 flex items-center gap-3">
                <span>🕒 {p.date}</span>
                <span>·</span>
                <span>4 min read</span>
              </div>
            </article>
          ))}

          {/* Big cards: left spans two columns on md */}
          <article className="group rounded-xl overflow-hidden bg-white shadow md:col-span-2" tabIndex="0">
            <div className="relative">
              <img src={posts[3].image} alt={posts[3].title} className="w-full h-64 md:h-72 object-cover" />
              <div className="absolute left-6 top-6 bg-white/80 text-xs text-gray-700 px-3 py-1 rounded-full">{posts[3].category}</div>
              <div className="absolute left-6 bottom-6 right-6 text-left">
                <h4 className="text-2xl md:text-3xl font-extrabold text-white">{posts[3].title}</h4>
                <div className="mt-3 text-sm text-white">🕒 {posts[3].date} · 5 min read</div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-from-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-end justify-end p-6">
                <div className="flex gap-3">
                  <button aria-label={`Read ${posts[3].title}`} className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-white">Read</button>
                  <button aria-label={`Share ${posts[3].title}`} className="bg-white/80 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-white">Share</button>
                </div>
              </div>

            </div>
          </article>

          <article className="group rounded-xl overflow-hidden bg-white shadow" tabIndex="0">
            <div className="relative">
              <img src={posts[4].image} alt={posts[4].title} className="w-full h-64 md:h-72 object-cover" />
              <div className="absolute left-6 top-6 bg-white/80 text-xs text-gray-700 px-3 py-1 rounded-full">{posts[4].category}</div>
              <div className="absolute left-6 bottom-6 right-6 text-left">
                <h4 className="text-2xl md:text-2xl font-extrabold text-white">{posts[4].title}</h4>
                <div className="mt-3 text-sm text-white">🕒 {posts[4].date} · 3 min read</div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-from-black/30 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-end justify-center p-6">
                <div className="flex gap-3">
                  <button aria-label={`Read ${posts[4].title}`} className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-white">Read</button>
                </div>
              </div>

            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
