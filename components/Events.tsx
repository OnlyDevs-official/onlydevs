"use client";

import React, { useState, useEffect, useRef } from 'react';

interface EventImage {
  id: number;
  url: string;
  alt: string;
}

const EventsCarousel: React.FC = () => {
  const eventImages: EventImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      alt: 'Corporate Event 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      alt: 'Conference Event'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      alt: 'Workshop Event'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
      alt: 'Networking Event'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=300&fit=crop',
      alt: 'Team Building Event'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
      alt: 'Awards Ceremony'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality - always running
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= eventImages.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 2000); // Faster: changed from 3000ms to 2000ms

    return () => clearInterval(interval);
  }, [eventImages.length]);

  // Auto-scroll effect with smoother animation
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentIndex * 320; // 320px = card width + gap
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Add CSS transition for even smoother scrolling
      carouselRef.current.style.scrollBehavior = 'smooth';
    }
  }, [currentIndex]);

  // Touch/Mouse handlers for swipe functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = 320;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(Math.min(newIndex, eventImages.length - 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Our Events
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          We don&apos;t just host events, we curate them
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Images Container */}
        <div
          ref={carouselRef}
          className={`flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4 transition-all duration-300 ease-out ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
        >
          {/* Render multiple sets for infinite scroll effect */}
          {[...eventImages, ...eventImages].map((image, index) => (
            <div
              key={`${image.id}-${Math.floor(index / eventImages.length)}`}
              className="flex-shrink-0 w-80 h-64 group relative"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-105 select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-lg" />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {eventImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-500 ease-out ${
                Math.floor(currentIndex) === index
                  ? 'bg-gray-800 w-8 h-2'
                  : 'bg-gray-400 hover:bg-gray-600 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Enhanced smooth scrolling */
        .scrollbar-hide {
          scroll-snap-type: x mandatory;
        }
        
        .scrollbar-hide > div {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
};

export default EventsCarousel;