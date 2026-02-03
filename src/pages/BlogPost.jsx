import React from 'react'
import { useParams } from 'react-router-dom'

const posts = [
  { id: '1', title: 'A Day In The Life Of A Dwarika Guest', body: 'An inside look into a guest experience at Hotel Dwarika.' },
  { id: '2', title: 'Guide To Seasonal Activities In The City', body: 'Top seasonal activities for visitors.' },
  { id: '3', title: 'A Look Inside Hotel Dwarika\'s Suites', body: 'Explore our luxury suites and amenities.' },
]

export default function BlogPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) return <div className="p-8">Post not found</div>

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold">{post.title}</h1>
        <p className="mt-4 text-gray-700">{post.body}</p>
      </div>
    </div>
  )
}
