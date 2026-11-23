'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RECRUITERS = [
  { id: 'rec-tcs', name: 'TCS', image: '/images/recruiters/recruiter_tcs.svg' },
  { id: 'rec-infosys', name: 'Infosys', image: '/images/recruiters/recruiter_infosys.svg' },
  { id: 'rec-wipro', name: 'Wipro', image: '/images/recruiters/recruiter_wipro.svg' },
  { id: 'rec-hcl', name: 'HCL', image: '/images/recruiters/recruiter_hcl.svg' },
  { id: 'rec-accenture', name: 'Accenture', image: '/images/recruiters/recruiter_accenture.svg' },
  { id: 'rec-techmahindra', name: 'Tech Mahindra', image: '/images/recruiters/recruiter_techmahindra.svg' },
  { id: 'rec-cognizant', name: 'Cognizant', image: '/images/recruiters/recruiter_cognizant.svg' },
  { id: 'rec-ibm', name: 'IBM', image: '/images/recruiters/recruiter_ibm.svg' }
];

export const RecruiterCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : RECRUITERS.length - 4));
  };

  const next = () => {
    setStartIndex((prev) => (prev < RECRUITERS.length - 4 ? prev + 1 : 0));
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-1 bg-[#CF0003] rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-extrabold text-[#242424] tracking-tight">
            Our Recruiters
          </h2>
        </div>
      </div>

      {/* Carousel Container with Left/Right Arrows */}
      <div className="relative flex items-center">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#CF0003] hover:border-[#CF0003] shadow-xs flex items-center justify-center transition-colors shrink-0 mr-2 z-10"
          aria-label="Previous Recruiters"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Recruiter Logo Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 flex-1 overflow-hidden py-1">
          {RECRUITERS.slice(startIndex, startIndex + 7).concat(
            RECRUITERS.slice(0, Math.max(0, startIndex + 7 - RECRUITERS.length))
          ).map((rec, idx) => (
            <div
              key={`${rec.id}-${idx}`}
              className="bg-white rounded-md border border-gray-200/90 shadow-2xs hover:shadow-sm hover:border-[#CF0003]/50 transition-all p-2 flex items-center justify-center h-14"
            >
              <img
                src={rec.image}
                alt={rec.name}
                className="max-h-9 max-w-full object-contain filter hover:contrast-125 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#CF0003] hover:border-[#CF0003] shadow-xs flex items-center justify-center transition-colors shrink-0 ml-2 z-10"
          aria-label="Next Recruiters"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
