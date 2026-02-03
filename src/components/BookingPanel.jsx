import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookingPanel() {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('2')
  const navigate = useNavigate()

  function handleFind() {
    const params = new URLSearchParams({ checkin, checkout, guests })
    navigate(`/rooms?${params.toString()}`)
  }

  return (
    <div className="relative z-40 -mt-20 md:-mt-28 mb-15">
      <div className="max-width-[1100px] mx-auto w-[95%] bg-white rounded-3xl shadow-xl p-4 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 pl-4">
          <h3 className="text-xl font-bold">Book Online</h3>
          <p className="text-sm text-gray-500">Guaranteed Accommodation</p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          <label className="flex flex-col text-xs text-gray-600">
            Check-in
            <input value={checkin} onChange={(e) => setCheckin(e.target.value)} type="date" aria-label="Check-in" className="mt-2 px-3 py-2 rounded-xl border border-gray-200" />
          </label>

          <label className="flex flex-col text-xs text-gray-600">
            Check-out
            <input value={checkout} onChange={(e) => setCheckout(e.target.value)} type="date" aria-label="Check-out" className="mt-2 px-3 py-2 rounded-xl border border-gray-200" />
          </label>

          <div className="flex flex-col text-xs text-gray-600">
            <span className="mb-2">Guests</span>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="mt-2 px-3 py-2 rounded-xl border border-gray-200 text-sm">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>

          <div className="flex items-center justify-end">
            <button onClick={handleFind} className="bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold">Find Room</button>
          </div>
        </div>
      </div>
    </div>
  )
}
