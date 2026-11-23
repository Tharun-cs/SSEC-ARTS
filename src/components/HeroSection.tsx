'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CampusSlide {
  id: number;
  image: string;
  line1: string;
  line2: string;
  alt: string;
}

const CAMPUS_SLIDES: CampusSlide[] = [
  {
    id: 1,
    image: '/images/ssec_campus_drone_aerial.jpg',
    line1: 'WELCOME TO',
    line2: 'SREE SAKTHI COLLEGE OF ARTS AND SCIENCE',
    alt: 'Sree Sakthi College of Arts and Science - Panoramic Campus Aerial View'
  },
  {
    id: 2,
    image: '/images/hero_slide_1_facade_hd.jpg',
    line1: 'INSPIRING CAMPUS',
    line2: 'ARCHITECTURE WORLD-CLASS ACADEMIC ENVIRONMENT',
    alt: 'Sree Sakthi College of Arts and Science - Grand Architectural Entrance and Administrative Block'
  },
  {
    id: 3,
    image: '/images/hero_slide_2_library_hd.jpg',
    line1: 'ADVANCED DIGITAL',
    line2: 'LIBRARY KNOWLEDGE & RESEARCH EXCELLENCE',
    alt: 'Sree Sakthi College of Arts and Science - State-of-the-Art Digital Central Library'
  },
  {
    id: 4,
    image: '/images/hero_slide_3_courtyard_hd.jpg',
    line1: 'VIBRANT STUDENT LIFE',
    line2: 'SPORTS ARENA & OPEN AMPHITHEATER',
    alt: 'Sree Sakthi College of Arts and Science - Sprawling Student Courtyard and Sports Grounds'
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic looping slideshow: transitions to next image every 8 seconds (allows slow cinematic entrance & ample reading time)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAMPUS_SLIDES.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden select-none" aria-label="Campus Hero">
      {/* Hero Visual Container */}
      <section className="relative w-full h-[400px] xs:h-[440px] sm:h-[520px] md:h-[620px] lg:h-[700px] bg-[#1a1a1a]">

        {/* 1. Multiple Campus Photographs with Smooth Cross-fade Animation */}
        {CAMPUS_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover object-center brightness-[1.02] transition-transform duration-[5500ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* 2. Transparent Dark Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/45 z-5 pointer-events-none" />

        {/* 3. Central Hero Heading: Strictly Two Lines in Pure White */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-3 sm:px-6 lg:px-8 z-10 pointer-events-none">
          <div className="max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={CAMPUS_SLIDES[currentSlide].id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.6, ease: 'easeIn' } }}
                transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center gap-1 sm:gap-2 px-1 max-w-full"
              >
                {/* Line 1 (White Bold Heading - Extra Slow Cinematic Entrance) */}
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-hero text-white text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[44px] font-black uppercase tracking-wider leading-tight whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] [text-shadow:0_3px_20px_rgba(0,0,0,0.95)]"
                >
                  {CAMPUS_SLIDES[currentSlide].line1}
                </motion.h1>

                {/* Line 2 (White Bold Line - Extra Slow Cinematic Entrance) */}
                <motion.h2
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="font-hero text-white text-[11px] xs:text-xs sm:text-lg md:text-2xl lg:text-[32px] xl:text-[36px] font-black uppercase tracking-wider leading-tight whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] [text-shadow:0_3px_20px_rgba(0,0,0,0.95)] max-w-full overflow-hidden"
                >
                  {CAMPUS_SLIDES[currentSlide].line2}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4. Looping Slide Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {CAMPUS_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                idx === currentSlide
                  ? 'w-7 sm:w-10 h-2 sm:h-2.5 bg-[#FFCB0B] shadow-md'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white hover:scale-125'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>
    </div>
  );
};
