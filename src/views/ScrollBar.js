'use client';

import { useEffect, useRef } from 'react';

export default function ScrollingText() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const text = "Happy New Year 2025 * 50% OFF on 01/01/2025 Subscribers Offer till IST 12PM * ";
  // Repeat the text to ensure smooth scrolling
  const repeatedText = Array(20).fill(text).join('');

  return (
    <div className="text-ellipsis w-full overflow-hidden bg-gradient-to-r from-[#004D40] to-[#8BC34A] -rotate-2 scale-110">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap py-6 overflow-x-hidden"
        style={{ width: '200%' }} // Double width for smooth looping
      >
        <div className="flex min-w-full">
          <span className="text-white text-3xl md:text-4xl font-serif animate-slide">
            {repeatedText}
          </span>
          <span className="text-white text-3xl md:text-4xl font-serif animate-slide">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
}
