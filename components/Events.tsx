import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsCarousel = () => {
  const eventImages = [
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we're showing the last set of 4 images (starting from index 2), go back to 0
        return prevIndex >= eventImages.length - 4 ? 0 : prevIndex + 1;
      });
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, eventImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= eventImages.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? eventImages.length - 4 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate visible images (4 at a time)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const imageIndex = (currentIndex + i) % eventImages.length;
      visible.push(eventImages[imageIndex]);
    }
    return visible;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
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
      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Images Container */}
        <div className="relative h-64 md:h-80">
          <div className="flex transition-transform duration-500 ease-in-out h-full">
            {getVisibleImages().map((image, index) => (
              <div
                key={`${image.id}-${currentIndex}-${index}`}
                className="w-1/4 flex-shrink-0 px-1"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: eventImages.length - 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-blue-500 scale-110'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
        </button>
      </div>
    </div>
  );
};

export default EventsCarousel;