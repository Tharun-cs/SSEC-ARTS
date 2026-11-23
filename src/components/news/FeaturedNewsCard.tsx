'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Star, ArrowRight } from 'lucide-react';
import { FEATURED_NEWS, FeaturedNewsItem } from '@/data/newsUpdatesData';

interface FeaturedNewsCardProps {
  onOpenStory?: (item: FeaturedNewsItem) => void;
}

export const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ onOpenStory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = FEATURED_NEWS;
  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-white/80 p-3 sm:p-4 flex flex-col md:flex-row gap-3.5 sm:gap-4 items-stretch justify-between h-full transition-all">
      {/* LEFT HALF: Large Event Photograph with Carousel Controls */}
      <div className="relative w-full md:w-[48%] h-48 sm:h-56 md:h-auto rounded-xl overflow-hidden shadow-xs shrink-0 bg-gray-100 group">
        <img
          key={currentItem.id}
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Carousel Previous Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-[#CF0003] shadow-md flex items-center justify-center transition-all z-10 hover:scale-105 active:scale-95"
          aria-label="Previous Featured News"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Carousel Next Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-[#CF0003] shadow-md flex items-center justify-center transition-all z-10 hover:scale-105 active:scale-95"
          aria-label="Next Featured News"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Small Carousel Indicator Dots on the Image */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-3.5 h-1 bg-[#FFCB0B]'
                  : 'w-1 h-1 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT HALF: News Details & Call-to-Action */}
      <div className="w-full md:w-[52%] flex flex-col justify-between py-1">
        <div className="space-y-1.5 sm:space-y-2">
          {/* Yellow Featured News Badge with Star Icon */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFCB0B] text-black font-extrabold text-[10.5px] sm:text-[11px] rounded-full uppercase tracking-wider shadow-2xs">
              <Star className="w-3 h-3 fill-black text-black" />
              <span>Featured News</span>
            </span>
          </div>

          {/* News Headline */}
          <h3 className="text-sm sm:text-base md:text-lg font-black text-[#CF0003] tracking-tight uppercase leading-snug line-clamp-2">
            {currentItem.title}
          </h3>

          {/* Date and Venue Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-1 text-gray-800">
              <Calendar className="w-3.5 h-3.5 text-[#CF0003] shrink-0" />
              <span>{currentItem.date}</span>
            </div>
            <span className="text-gray-300 font-bold">|</span>
            <div className="flex items-center gap-1 text-gray-800">
              <MapPin className="w-3.5 h-3.5 text-[#CF0003] shrink-0" />
              <span>{currentItem.venue}</span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 text-[11.5px] sm:text-xs leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
            {currentItem.description}
          </p>
        </div>

        {/* Bottom Row: Read Full Story Button & Subtle Corner Indicator Dots */}
        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-gray-100">
          <button
            onClick={() => onOpenStory && onOpenStory(currentItem)}
            className="inline-flex items-center gap-1.5 bg-[#CF0003] hover:bg-[#B00003] active:scale-98 text-white font-bold text-[11.5px] sm:text-xs px-4 py-1.5 rounded-full shadow-xs hover:shadow-sm transition-all"
          >
            <span>Read Full Story</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Secondary Carousel Dots */}
          <div className="flex items-center gap-1 pr-1">
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-[#CF0003]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
