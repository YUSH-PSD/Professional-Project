import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const rooms = [
  { id: 1, name: 'Deluxe Room', price: 120 },
  { id: 2, name: 'Executive Suite', price: 220 },
  { id: 3, name: 'Presidential Suite', price: 520 },
]

export default function Rooms() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const checkin = params.get('checkin')
  const checkout = params.get('checkout')
  const guests = params.get('guests')
  const navigate = useNavigate()

  function handleBook(room) {
    navigate(`/booking?room=${room.id}&checkin=${checkin || ''}&checkout=${checkout || ''}&guests=${guests || ''}`)
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold">Rooms & Suites</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div key={r.id} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="mt-2 text-gray-600">From ${r.price} / night</p>
              <div className="mt-4">
                <button onClick={() => handleBook(r)} className="px-4 py-2 bg-orange-400 text-white rounded-md">Book</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-600">
          {checkin && <div>Check-in: {checkin}</div>}
          {checkout && <div>Check-out: {checkout}</div>}
          {guests && <div>Guests: {guests}</div>}
        </div>
      </div>
    </div>
  )
}
