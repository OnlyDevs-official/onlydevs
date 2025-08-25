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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Smooth continuous auto-scroll
  useEffect(() => {
    const smoothScroll = () => {
      if (carouselRef.current && !isDragging) {
        const container = carouselRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // Smooth continuous movement (1 pixel per frame at 60fps)
        container.scrollLeft += 1;
        
        // Reset for infinite loop when near the end
        if (container.scrollLeft >= maxScrollLeft / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    animationRef.current = requestAnimationFrame(smoothScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  // Update current index based on scroll position
  const updateCurrentIndex = () => {
    // Simplified since we're using continuous scroll
  };

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
    updateCurrentIndex();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-aeonik font-bold text-white mb-3">
          Our Events
        </h2>
        <p className="text-lg text-white font-aeonik font-light">
          We don&apos;t just host events, we curate them
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Gradient Overlay - Enhanced */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay - Enhanced */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Images Container */}
        <div
          ref={carouselRef}
          className={`flex gap-8 overflow-x-auto scrollbar-hide py-4 px-6 ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
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
          {/* Render multiple sets for seamless infinite loop */}
          {[...eventImages, ...eventImages, ...eventImages, ...eventImages].map((image, index) => (
            <div
              key={`${image.id}-${Math.floor(index / eventImages.length)}-${index}`}
              className="flex-shrink-0 w-80 h-64 group relative"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-105 select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth hardware acceleration */
        .scrollbar-hide {
          will-change: scroll-position;
          transform: translateZ(0);
        }
        
        .scrollbar-hide > div {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default EventsCarousel;