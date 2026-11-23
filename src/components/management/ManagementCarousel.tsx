'use client';

import React, { useRef, useState } from 'react';
import { MANAGEMENT_MEMBERS } from '@/data/managementData';
import { ManagementCard } from './ManagementCard';

export const ManagementCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 4 seamless repeated sets to guarantee 100% infinite continuous loop without gaps or jump
  const loopItems = [
    ...MANAGEMENT_MEMBERS,
    ...MANAGEMENT_MEMBERS,
    ...MANAGEMENT_MEMBERS,
    ...MANAGEMENT_MEMBERS
  ];

  return (
    <div
      className="relative w-full max-w-[1480px] mx-auto px-2 sm:px-4 lg:px-6 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Continuous Marquee Loop Viewport */}
      <div
        ref={scrollRef}
        className="overflow-hidden py-2 px-1 select-none"
      >
        <div
          className={`flex items-stretch gap-3.5 sm:gap-4.5 lg:gap-5.5 w-max animate-management-loop ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {loopItems.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[190px] sm:w-[205px] md:w-[220px] lg:w-[230px] xl:w-[240px] shrink-0"
            >
              <ManagementCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
