"use client";

import React, { useState, useEffect, useRef } from 'react';

interface EventImage {
  id: number;
  url: string;
  alt: string;
  link?: {
    href: string;
    target?: string;
  };
}

const EventsCarousel: React.FC = () => {
  const eventImages: EventImage[] = [
    {
      id: 1,
      url: '/assets/events/meshcraft.png',
      alt: 'Meshcraft'
    },
    {
      id: 2,
      url: '/assets/events/Stylt final.png',
      alt: 'Stylt'
    },
    {
      id: 3,
      url: '/assets/events/interface 14(1).png',
      alt: 'Interface 14'
           link: {
        href: 'https://luma.com/1jonjptg',
        target: '_blank',
      }
    },
    {
      id: 4,
      url: '/assets/events/meshcraft.png',
      alt: 'Meshcraft'
    },
    {
      id: 5,
      url: '/assets/events/Stylt final.png',
      alt: 'Stylt',
    },
    {
      id: 6,
      url: '/assets/events/interface 14(1).png',
      alt: 'Interface14'
           link: {
        href: 'https://luma.com/1jonjptg',
        target: '_blank',
      }
    }
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Smooth continuous auto-scroll - Always running
  useEffect(() => {
    const smoothScroll = () => {
      if (carouselRef.current) {
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
  }, []); // Removed isDragging dependency

  // Update current index based on scroll position
  const updateCurrentIndex = () => {
    // Simplified since we're using continuous scroll
  };

  // Touch/Mouse handlers for swipe functionality - Modified to not stop auto-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    // Removed setIsDragging(false) to keep auto-scroll running
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
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
    // Removed setIsDragging(false) to keep auto-scroll running
  };

  const handleScroll = () => {
    updateCurrentIndex();
  };

  // Handle image click - simplified since auto-scroll never stops
  const handleImageClick = (e: React.MouseEvent, link?: EventImage['link']) => {
    if (!link) {
      e.preventDefault();
      return;
    }
    // Link will be handled by the anchor tag naturally
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-aeonik font-bold text-white mb-3">
          Our Events
        </h2>
        <p className="text-lg text-white font-aeonik font-light">
          We don&apos;t just host events, we curate experiences.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Gradient Overlay - Enhanced */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay - Enhanced */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Images Container */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-6 cursor-grab active:cursor-grabbing"
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
              className="flex-shrink-0 w-80 h-80 group relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out"
            >
              {image.link ? (
                <a
                  href={image.link.href}
                  target={image.link.target || '_self'}
                  rel={image.link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleImageClick(e, image.link)}
                  className="block w-full h-full"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                    draggable={false}
                  />
                </a>
              ) : (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                  draggable={false}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
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