"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const follower = followerRef.current;
    
    if (!follower) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Update follower position with delay (no cursor, just follower)
      setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }, 100);
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Hover handlers for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* SVG Dot Follower - follows the default cursor */}
      <div
        ref={followerRef}
        className={`
          fixed w-5 h-5 pointer-events-none z-[9999]
          transform -translate-x-1/2 -translate-y-1/2 
          transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isClicking ? 'scale-75' : 'scale-100'}
          ${isHovering ? 'scale-150' : ''}
        `}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 375 374.999991"
          className={`w-full h-full transition-all duration-300 ${isHovering ? 'opacity-80' : 'opacity-100'}`}
          style={{ mixBlendMode: 'difference' }}
        >
          <defs>
            <clipPath id="5d2cc78f6d">
              <path d="M 28.699219 28.699219 L 346.300781 28.699219 L 346.300781 346.300781 L 28.699219 346.300781 Z M 28.699219 28.699219 "/>
            </clipPath>
            <clipPath id="aee4bcf293">
              <path d="M 187.5 28.699219 C 99.796875 28.699219 28.699219 99.796875 28.699219 187.5 C 28.699219 275.203125 99.796875 346.300781 187.5 346.300781 C 275.203125 346.300781 346.300781 275.203125 346.300781 187.5 C 346.300781 99.796875 275.203125 28.699219 187.5 28.699219 Z M 187.5 28.699219 "/>
            </clipPath>
            <clipPath id="53b7649c0a">
              <path d="M 0.699219 0.699219 L 318.300781 0.699219 L 318.300781 318.300781 L 0.699219 318.300781 Z M 0.699219 0.699219 "/>
            </clipPath>
            <clipPath id="ecf87feebe">
              <path d="M 159.5 0.699219 C 71.796875 0.699219 0.699219 71.796875 0.699219 159.5 C 0.699219 247.203125 71.796875 318.300781 159.5 318.300781 C 247.203125 318.300781 318.300781 247.203125 318.300781 159.5 C 318.300781 71.796875 247.203125 0.699219 159.5 0.699219 Z M 159.5 0.699219 "/>
            </clipPath>
            <clipPath id="6f5293d4c0">
              <rect x="0" width="319" y="0" height="319"/>
            </clipPath>
          </defs>
          <g clipRule="nonzero" clipPath="url(#5d2cc78f6d)">
            <g clipRule="nonzero" clipPath="url(#aee4bcf293)">
              <g transform="matrix(1,0,0,1,28,28)">
                <g clipPath="url(#6f5293d4c0)">
                  <g clipRule="nonzero" clipPath="url(#53b7649c0a)">
                    <g clipRule="nonzero" clipPath="url(#ecf87feebe)">
                      <path 
                        style={{ stroke: 'none', fillRule: 'nonzero', fillOpacity: 1 }} 
                        fill={isHovering ? '#4ecdc4' : '#006eff'}
                        d="M 0.699219 0.699219 L 318.300781 0.699219 L 318.300781 318.300781 L 0.699219 318.300781 Z M 0.699219 0.699219"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;