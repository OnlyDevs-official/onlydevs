import React, { useEffect, useRef } from 'react';

interface Services {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  link?: {
    href: string;
    target?: string;
  };
}

const ServicesCarousel: React.FC = () => {
  const services: Services[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      name: 'Brand Identity',
      description: 'Your story, visualized. We design the core assets, logo, palette and typography, that make your brand instantly recognizable and deeply memorable.'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400',
      name: 'Graphic Design',
      description: 'Digital experiences that feel intuitive and effortless. We design not just how it looks, but how it works guiding users with clarity and purpose.'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
      name: 'Content Production',
      description: 'For stories that connect and convert- We craft compelling copy, video, and imagery that gives your brand a powerful voice and builds authentic relationships.',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400',
      name: 'UI/UX Design',
      description: 'Digital experiences that feel intuitive and effortless. We design not just how it looks, but how it works guiding users with clarity and purpose.'
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const smoothScroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        container.scrollLeft += 1;
        
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
  }, []);

  return (
    <div className="w-full backdrop-blur-md bg-opacity-35 py-12">
      <div className="relative">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Services Cards Container */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto py-4 px-6"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <div
              key={`${service.id}-${Math.floor(index / services.length)}-${index}`}
              className="flex-shrink-0 w-72 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
              style={{ backgroundColor: '#006eff' }}
            >
              {service.link ? (
                <a
                  href={service.link.href}
                  target={service.link.target || '_self'}
                  rel={service.link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="block w-full cursor-pointer"
                >
                  <div className="w-full h-64 overflow-hidden bg-white/10 relative">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-white/80 font-light text-sm group-hover:text-white/70 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="w-full">
                  <div className="w-full h-64 overflow-hidden bg-white/10 relative">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-white/80 font-light text-sm group-hover:text-white/70 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div[class*="overflow-x-auto"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        div[class*="overflow-x-auto"]::-webkit-scrollbar {
          display: none;
        }
        
        div[class*="overflow-x-auto"] {
          will-change: scroll-position;
          transform: translateZ(0);
        }
        
        div[class*="overflow-x-auto"] > div {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;