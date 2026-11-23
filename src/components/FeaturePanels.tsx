'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FeaturePanels: React.FC = () => {
  return (
    <section className="bg-white py-4 sm:py-6 select-none" aria-label="College Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          
          {/* PANEL 1: ACADEMIC EXCELLENCE (Primary Red Left, Photo Right) */}
          <div className="flex bg-[#CF0003] text-white rounded-md overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Left Content Area */}
            <div className="w-1/2 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading mb-1.5 leading-snug">
                  Academic Excellence
                </h3>
                <p className="text-[11px] sm:text-xs text-red-100/90 leading-relaxed font-normal">
                  Quality education with innovative teaching and practical learning.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-1.5 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-bold text-xs px-3.5 py-1.5 rounded transition-all active:scale-95"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#242424]" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-1/2 relative bg-gray-900">
              <img
                src="/images/panel_academic.jpg"
                alt="Academic Excellence Students"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* PANEL 2: PLACEMENTS (Warm-Cream Left, Photo Right) */}
          <div className="flex bg-[#FFF9F0] border border-[#EAE6DF] rounded-md overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Left Content Area */}
            <div className="w-1/2 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading mb-1.5 text-[#CF0003] leading-snug">
                  Placements
                </h3>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed font-normal">
                  Career opportunities for a global future.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-1.5 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-bold text-xs px-3.5 py-1.5 rounded transition-all active:scale-95"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#242424]" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-1/2 relative bg-gray-900">
              <img
                src="/images/panel_placements.jpg"
                alt="Placements Students in Suits"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* PANEL 3: CAMPUS LIFE (Primary Red Left, Photo Right) */}
          <div className="flex bg-[#CF0003] text-white rounded-md overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Left Content Area */}
            <div className="w-1/2 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading mb-1.5 leading-snug">
                  Campus Life
                </h3>
                <p className="text-[11px] sm:text-xs text-red-100/90 leading-relaxed font-normal">
                  A vibrant campus with endless possibilities.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/campus-life"
                  className="inline-flex items-center gap-1.5 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-bold text-xs px-3.5 py-1.5 rounded transition-all active:scale-95"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#242424]" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-1/2 relative bg-gray-900">
              <img
                src="/images/panel_campuslife.jpg"
                alt="Campus Life Students"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
