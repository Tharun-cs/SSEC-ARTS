'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 bg-[#CF0003] hover:bg-[#B50004] active:scale-95 text-[#FFCB0B] p-2.5 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-[#FFCB0B]"
      aria-label="Back to Top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
    </button>
  );
};
