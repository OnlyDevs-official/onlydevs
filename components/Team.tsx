"use client";

import React, { useEffect, useRef } from 'react';

interface TeamMember {
  id: number;
  imageUrl: string;
  name: string;
  designation: string;
  link?: {
    href: string;
    target?: string;
  };
}

const TeamCarousel: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      imageUrl: '/assets/team_members/sankeerath.png',
      name: 'Sankeerath Santosh',
      designation: 'Founder & Chief Executive Officer'
    },
    {
      id: 2,
      imageUrl: '/assets/team_members/pradyumna.jpg',
      name: 'Pradyumna Gururaj',
      designation: 'Chief Technical Officer & Chief Analyst'
    },
    {
      id: 3,
      imageUrl: '/assets/team_members/mayank.png',
      name: 'Mayank Rawat',
      designation: 'Content Production Lead & Frontend Developer',
    //   link: {
    //     href: 'https://linkedin.com/in/mikejohnson',
    //     target: '_blank',
    //   }
    },
    {
      id: 4,
      imageUrl: '/assets/team_members/avani.jpg',
      name: 'Avani Ramesh',
      designation: 'Multimedia & Motion Graphic Designer'
    },
    // {
    //   id: 5,
    //   imageUrl: '/assets/team/member5.jpg',
    //   name: 'Pradyumna Gururaj',
    //   designation: 'CTO'
    // },
    // {
    //   id: 6,
    //   imageUrl: '/assets/team/member6.jpg',
    //   name: 'Yoyo Honey Singh',
    //   designation: 'Music maker'
    // }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Smooth continuous auto-scroll
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
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-aeonik font-bold text-white mb-3">
          Meet Our Team
        </h2>
        <p className="text-lg text-white font-aeonik font-light">
          The brilliant minds behind our success.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Team Cards Container */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-6"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {/* Render multiple sets for seamless infinite loop */}
          {[...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={`${member.id}-${Math.floor(index / teamMembers.length)}-${index}`}
              className="flex-shrink-0 w-72 group relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out"
              style={{ backgroundColor: '#006eff' }}
            >
              {member.link ? (
                <a
                  href={member.link.href}
                  target={member.link.target || '_self'}
                  rel={member.link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="block w-full cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="w-full h-64 overflow-hidden bg-white/10 relative">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-aeonik font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/80 font-aeonik font-light text-sm group-hover:text-white/70 transition-colors duration-300">
                      {member.designation}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="w-full">
                  {/* Image Section */}
                  <div className="w-full h-64 overflow-hidden bg-white/10 relative">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-aeonik font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/80 font-aeonik font-light text-sm group-hover:text-white/70 transition-colors duration-300">
                      {member.designation}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056cc]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-2xl pointer-events-none" />
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

export default TeamCarousel;