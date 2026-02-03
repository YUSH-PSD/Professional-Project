import React from 'react'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">
        <h1 className="text-4xl font-bold">About Hotel Dwarika</h1>
        <p className="mt-6 text-lg">Welcome to Hotel Dwarika — an overview about our history, values, and what makes us unique.</p>
        <p className="mt-4 text-gray-600">This is a demo page created for the project. Replace with real content as needed.</p>
      </div>
      <Footer />
    </div>
  )
}
