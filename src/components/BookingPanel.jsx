import React from 'react'

export default function BookingPanel() {
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
            <input type="date" aria-label="Check-in" className="mt-2 px-3 py-2 rounded-xl border border-gray-200" />
          </label>

          <label className="flex flex-col text-xs text-gray-600">
            Check-out
            <input type="date" aria-label="Check-out" className="mt-2 px-3 py-2 rounded-xl border border-gray-200" />
          </label>

          <div className="flex flex-col text-xs text-gray-600">
            <span className="mb-2">Guests</span>
            <button className="px-3 py-2 rounded-xl border border-gray-200 text-sm">2 Adults, 0 Child</button>
          </div>

          <div className="flex items-center justify-end">
            <button className="bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold">Find Room</button>
          </div>
        </div>
      </div>
    </div>
  )
}
