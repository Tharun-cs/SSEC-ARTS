'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/lib/types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs select-none"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#FFCC00] bg-black/50 p-2 rounded-full transition-colors z-50 focus:outline-none"
        aria-label="Close gallery lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFCC00] bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors z-50"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFCC00] bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors z-50"
        aria-label="Next photo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image and Caption Card */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-lg bg-black border border-gray-800">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center px-4">
          <span className="text-xs uppercase font-extrabold text-[#FFCC00] tracking-widest bg-black/50 px-2.5 py-1 rounded border border-[#FFCC00]/30 inline-block mb-1.5">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
