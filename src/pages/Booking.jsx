import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Booking() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const room = params.get('room')
  const checkin = params.get('checkin')
  const checkout = params.get('checkout')
  const guests = params.get('guests')

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold">Booking</h2>
        <p className="mt-4 text-gray-700">Room: {room || 'Not specified'}</p>
        <p className="text-gray-700">Check-in: {checkin || 'Not specified'}</p>
        <p className="text-gray-700">Check-out: {checkout || 'Not specified'}</p>
        <p className="text-gray-700">Guests: {guests || 'Not specified'}</p>

        <div className="mt-6">
          <button className="px-6 py-3 bg-orange-400 text-white rounded-md" onClick={() => alert('Reservation requested — this is a demo.')}>Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}
