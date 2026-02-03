import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks ${name}, we'll get back to you soon.`)
    setName('')
    setMessage('')
  }

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-3 border rounded" required />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded" required />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full px-4 py-3 border rounded" rows={6} required />
          <button type="submit" className="px-6 py-3 bg-rose-600 text-white rounded-md">Send</button>
        </form>
      </div>
    </div>
  )
}
