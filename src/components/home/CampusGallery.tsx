'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { LightboxModal } from '@/components/shared/LightboxModal';

export const CampusGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const categories = ['All', 'Campus', 'Labs', 'Library', 'Sports', 'Events'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="campus-gallery-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Visual Tour"
          title="Campus Photo Gallery"
          description="Explore our academic buildings, smart classrooms, computing laboratories, and student activities at Karamadai."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#CF0003] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.slice(0, 8).map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-60 rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-xs hover:shadow-md transition-shadow border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <span className="absolute top-3 left-3 bg-[#FFCB0B] text-[#242424] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                {item.category}
              </span>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 text-[#CF0003] p-3 rounded-full shadow-lg">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center mt-10">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#CF0003] hover:text-[#CF0003]"
          >
            <span>View Complete Campus Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
