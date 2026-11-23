'use client';

import React, { useState } from 'react';
import { Play, X, Compass, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { COLLEGE_INFO } from '@/data/collegeData';

export const CampusVideoTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="campus-video-tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Virtual Exploration"
          title="Campus Video Tour & Walkthrough"
          description="Take an inspiring visual tour across our Autonomous Technical Campus located on Ooty Main Road, Karamadai, Coimbatore."
        />

        {/* Video Preview Card */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=85"
            alt="Sree Sakthi Engineering College Karamadai Campus Tour"
            className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

          {/* Play Button Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#CF0003] flex items-center justify-center pl-1 shadow-2xl transition-all duration-300 hover:scale-110 mb-4 animate-pulse"
              aria-label="Play Campus Video Tour"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
            </button>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight drop-shadow-md">
              Experience Sree Sakthi Engineering College
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-md">
              Click to view classrooms, computing laboratories, sports complex, and student facilities.
            </p>
          </div>

          {/* Badge at Bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
            <span className="flex items-center gap-1.5 font-bold text-[#FFCB0B]">
              <Compass className="w-4 h-4" />
              Karamadai, Coimbatore – 641104
            </span>
            <span className="hidden sm:inline bg-black/60 px-3 py-1 rounded-full text-[11px] font-semibold border border-white/20">
              HD Campus Tour
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 text-white hover:text-[#FFCB0B] p-2 rounded-full bg-black/50 transition-colors z-50"
            aria-label="Close Video Player"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Sree Sakthi Engineering College Campus Tour"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
