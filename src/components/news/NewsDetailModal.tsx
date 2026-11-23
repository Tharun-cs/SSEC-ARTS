'use client';

import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';

export interface ModalContent {
  title: string;
  category?: string;
  date?: string;
  venue?: string;
  image?: string;
  content: string;
  type: 'news' | 'event' | 'announcement';
}

interface NewsDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalContent | null;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Top Header Bar */}
        <div className="bg-[#CF0003] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFCB0B]" />
            <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase">
              {data.type === 'event' ? 'Event Details' : data.type === 'announcement' ? 'Official Announcement' : 'News Article'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-4">
          {data.image && (
            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-2">
            {data.category && (
              <span className="inline-block px-3 py-1 bg-[#FFCB0B] text-black font-bold text-xs uppercase rounded-full">
                {data.category}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-black text-[#171717] leading-snug">
              {data.title}
            </h2>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 font-semibold pt-1 border-b border-gray-100 pb-3">
              {data.date && (
                <div className="flex items-center gap-1.5 text-[#CF0003]">
                  <Calendar className="w-4 h-4" />
                  <span>{data.date}</span>
                </div>
              )}
              {data.venue && (
                <div className="flex items-center gap-1.5 text-gray-700">
                  <MapPin className="w-4 h-4 text-[#CF0003]" />
                  <span>{data.venue}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
            <p>{data.content}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-2">
          <span className="text-xs text-gray-500 font-medium truncate">Sree Sakthi Elite Campus</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#CF0003] hover:bg-[#b00003] active:scale-98 text-white text-xs sm:text-sm font-bold rounded-lg transition-all shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

