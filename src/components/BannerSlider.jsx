import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hotelBanner from '../assets/Hotelfull.jpeg'
import hotelView from '../assets/welcome.jpg'
import roomImg from '../assets/room.jpg'

const banners = [
  {
    image: hotelBanner,
    title: 'Welcome to Hotel Dwarika',
    subtitle: 'Experience comfort like never before'
  },
  {
    image: hotelView,
    title: 'Stunning Views',
    subtitle: 'Wake up to breathtaking scenery'
  },
  {
    image: roomImg,
    title: 'Premium Rooms',
    subtitle: 'Your sanctuary of relaxation'
  }
]

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    arrows: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    pauseOnHover: false,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 mt-4" />
    ),
    dotsClass: 'slick-dots slick-thumb'
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-screen">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-gradient from-black/40 via-black/20 to-black/50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg animate-fade-in">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide drop-shadow-md">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrow Styles */}
      <style>{`
        .slick-slider {
          cursor: grab;
        }
        .slick-slider:active {
          cursor: grabbing;
        }
        .slick-list {
          overflow: hidden;
        }
        .slick-prev, .slick-next {
          z-index: 10;
          width: 50px;
          height: 50px;
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
        .slick-prev::before, .slick-next::before {
          font-size: 40px;
          opacity: 0.8;
        }
        .slick-prev::before {
          content: '‹';
        }
        .slick-next::before {
          content: '›';
        }
        .slick-dots {
          bottom: 50px;
        }
        .slick-dots li {
          margin: 0 8px;
        }
        .slick-thumb .slick-active div {
          background: white;
          width: 40px;
          border-radius: 4px;
        }
      `}</style>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
