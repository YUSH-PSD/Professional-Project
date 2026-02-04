import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer'

const posts = [
  {
    id: '1',
    title: 'A Day In The Life Of A Dwarika Guest',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    date: 'January 15, 2024',
    author: 'Sarah Johnson',
    category: 'Experience',
    body: `From the moment you step through our doors at Hotel Dwarika, you enter a world of refined luxury and warm Nepalese hospitality. Your day begins with a wake-up call accompanied by fresh mountain views from our spacious rooms.

**Morning Bliss**
Start your day with a visit to our award-winning spa, where traditional Nepalese treatments await. Choose from our signature Ayurvedic massages or our refreshing morning yoga session on the terrace, overlooking the city skyline.

**Culinary Journey**
Breakfast at The Ganj is an experience in itself. Our chefs prepare a spread featuring both local delicacies and international favorites. Don't miss our traditional Newari breakfast set, a culinary journey through Nepal's rich heritage.

**Afternoon Exploration**
Our concierge team can arrange guided tours to nearby attractions, from ancient temples to bustling markets. Alternatively, spend your afternoon by our infinity pool or work out at our state-of-the-art fitness center.

**Evening Elegance**
As the sun sets, join us at Club 1933 for handcrafted cocktails and breathtaking views. Dinner at our specialty restaurants offers everything from authentic Nepali cuisine to international favorites.

At Hotel Dwarika, every moment is designed to create memories that last a lifetime.`
  },
  {
    id: '2',
    title: 'Guide To Seasonal Activities In The City',
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800',
    date: 'January 10, 2024',
    author: 'Michael Chen',
    category: 'Travel Guide',
    body: `Kathmandu Valley is a year-round destination, but each season brings unique experiences that make your visit truly special. Here's our comprehensive guide to seasonal activities.

**Spring (March-May)**
The valley bursts into color during spring. The famous rhododendron season peaks in April, with mountain trails adorned with vibrant blooms. This is the perfect time for trekking in the nearby hills and exploring ancient gardens.

**Summer (June-August)**
While monsoon season brings occasional rains, summer offers lush green landscapes. Visit during this time to experience:
- Festival preparations for Teej and Indrajatra
- Fresh local produce at local markets
- Spa packages with seasonal treatments

**Autumn (September-November)**
Considered the best time to visit, autumn offers clear skies and perfect weather. Major festivals like Dashain and Tihar take place during this season, offering visitors a chance to experience authentic Nepalese culture.

**Winter (December-February)**
Clear mountain views and crisp air make winter magical. Enjoy:
- Mountain flights with stunning Himalayan views
- Cozy evenings at our fire-lit lounge
- Traditional Newari hot pot dining experiences

No matter when you visit, Hotel Dwarika ensures your stay is comfortable and memorable.`
  },
  {
    id: '3',
    title: 'A Look Inside Hotel Dwarika\'s Suites',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    date: 'January 5, 2024',
    author: 'Emily Watson',
    category: 'Accommodation',
    body: `Welcome to the pinnacle of luxury accommodation at Hotel Dwarika. Our suites are designed to provide an unparalleled experience of comfort and elegance.

**The Presidential Suite**
Our crown jewel, spanning 120 square meters, features:
- Panoramic views of the Himalayas
- Private terrace with outdoor jacuzzi
- Separate living and dining areas
- Butler service round the clock
- Master bedroom with king-sized bed

**The Executive Suite**
Perfect for business travelers and couples:
- 55 square meters of refined space
- Ocean-view (city view) balcony
- Dedicated work desk with high-speed internet
- jacuzzi in the bathroom
- Complimentary minibar

**The Deluxe Room**
Our signature accommodation:
- 35 square meters of comfortable luxury
- City view from floor-to-ceiling windows
- King-sized bed with premium linens
- Rain shower in the bathroom
- Smart TV with international channels

Every suite features:
- 24/7 room service
- Climate control
- In-room safe
- Premium toiletries
- Free high-speed WiFi

Experience the difference at Hotel Dwarika.`
  },
  {
    id: '4',
    title: 'Discovering Local Culture And Heritage',
    image: 'https://images.unsplash.com/photo-1553611016-33850d5c4c2e?w=800',
    date: 'December 28, 2023',
    author: 'Rajendra Dhar',
    category: 'Culture',
    body: `Kathmandu is a living museum of ancient traditions and living heritage. At Hotel Dwarika, we believe that understanding local culture enriches every travel experience.

**UNESCO World Heritage Sites**
Located just minutes from our hotel, you can explore:
- Swayambhunath (Monkey Temple)
- Pashupatinath Temple
- Boudhanath Stupa
- Kathmandu Durbar Square

Each site offers a unique glimpse into Nepal's spiritual and architectural heritage. Our concierge can arrange guided tours with expert local guides.

**Traditional Arts and Crafts**
Visit local workshops to see:
- Thangka painting
- Wood carving
- Pottery
- Newari handloom

**Cultural Experiences**
Immerse yourself in local traditions:
- Traditional Newari dinner experiences
- Folk music performances
- Dance shows
- Festival participation

**Local Markets**
Explore vibrant local markets:
- Asan Bazaar for spices and textiles
- Indra Chowk for traditional goods
- Thamel for souvenirs and trekking gear

Let Hotel Dwarika be your gateway to discovering the rich cultural tapestry of Nepal.`
  },
  {
    id: '5',
    title: 'Wellness And Rejuvenation At Our Spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
    date: 'December 20, 2023',
    author: 'Priya Sharma',
    category: 'Wellness',
    body: `Escape the ordinary and discover a sanctuary of wellness at Hotel Dwarika's spa. Our holistic approach to relaxation combines ancient Nepalese healing traditions with modern wellness practices.

**Our Signature Treatments**
- Abhyanga: Traditional Ayurvedic full body massage
- Shirodhara: Therapeutic oil pouring on the forehead
- Himalayan Stone Therapy: Heated stones from the mountains
- Dwarika Special: Our proprietary full-body rejuvenation treatment

**Spa Facilities**
- 8 treatment rooms
- Separate men's and women's areas
- Steam and sauna
- Jacuzzi
- Meditation room
- Yoga pavilion

**Wellness Programs**
Choose from our curated wellness programs:
- Weekend Detox (2 nights)
- Stress Relief Package (3 nights)
- Romantic Retreat (2 nights)
- Executive Wellness (5 nights)

**Opening Hours**
- Daily: 10:00 AM - 9:00 PM
- Advance booking recommended
- Room service available for hotel guests

Book your wellness journey today and emerge refreshed and revitalized.`
  }
]

export default function BlogPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)
  const recentPosts = posts.filter(p => p.id !== id).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">{post.title}</h1>
          <div className="flex items-center text-gray-200">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {post.body.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h2>
            }
            return <p key={idx} className="text-gray-600 mb-6 leading-relaxed">{paragraph}</p>
          })}
        </article>

        {/* Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((recentPost) => (
              <Link key={recentPost.id} to={`/blog/${recentPost.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={recentPost.image} 
                      alt={recentPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-orange-500 text-sm font-medium">{recentPost.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-orange-500 transition-colors">
                      {recentPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{recentPost.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
