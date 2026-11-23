'use client';

import React from 'react';
import { ManagementHeader } from './ManagementHeader';
import { ManagementCarousel } from './ManagementCarousel';

export const ManagementSection: React.FC = () => {
  return (
    <section
      id="our-management"
      className="relative w-full bg-[#FFFDF8] py-6 sm:py-8 lg:py-10 overflow-hidden select-none border-b border-gray-100"
      aria-label="Our Management - Leadership of Sree Sakthi"
    >
      {/* 1. TOP-LEFT YELLOW CORNER WAVE (Exact News & Updates Page Border Shape) */}
      <div className="absolute top-0 left-0 w-28 sm:w-36 md:w-44 lg:w-52 max-h-[42px] sm:max-h-[48px] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 160 45"
          fill="none"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L160,0 C85,6 20,12 0,44 Z"
            fill="#FFCB0B"
          />
        </svg>
      </div>

      {/* 2. BOTTOM-RIGHT YELLOW CORNER SWOOSH (Exact News & Updates Page Border Shape) */}
      <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-56 lg:w-64 max-h-[48px] sm:max-h-[55px] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 240 50"
          fill="none"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M240,0 C220,25 150,42 0,50 L240,50 Z"
            fill="#FFCB0B"
          />
        </svg>
      </div>

      {/* 3. MAIN CONTENT CONTAINER (Fits Cleanly Within Single Viewport) */}
      <div className="relative z-10 max-w-[1480px] mx-auto">
        {/* Section Header */}
        <ManagementHeader />

        {/* Continuous Infinite Profile Cards Carousel */}
        <ManagementCarousel />
      </div>
    </section>
  );
};
