import React from 'react';
import { SkeletonBase } from './SkeletonBase';

interface SkeletonHeroProps {
  dark?: boolean;
}

export const SkeletonHero: React.FC<SkeletonHeroProps> = ({ dark = false }) => {
  return (
    <div
      className={`w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b ${
        dark ? 'bg-[#0F2B56] border-[#18467D]' : 'bg-[#FFFDF8] border-gray-100'
      }`}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Overline, Title, Subtitle, CTAs */}
        <div className="lg:col-span-7 space-y-4">
          {/* Badge / Overline */}
          <div className="flex items-center gap-2">
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-3 w-8 rounded-full"
            />
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-5 w-32 rounded-full"
            />
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-3 w-8 rounded-full"
            />
          </div>

          {/* Heading Lines */}
          <SkeletonBase
            variant={dark ? 'dark' : 'light'}
            className="h-10 sm:h-12 md:h-14 w-11/12 rounded-lg"
          />
          <SkeletonBase
            variant={dark ? 'dark' : 'light'}
            className="h-10 sm:h-12 md:h-14 w-3/4 rounded-lg"
          />

          {/* Subtitle */}
          <div className="space-y-2 pt-2">
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-4 w-full rounded"
            />
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-4 w-5/6 rounded"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-11 sm:h-12 w-36 sm:w-44 rounded-lg"
            />
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="h-11 sm:h-12 w-32 sm:w-40 rounded-lg"
            />
          </div>
        </div>

        {/* Right Column: Hero Visual Frame */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border-2 border-dashed border-gray-200/40 p-2">
            <SkeletonBase
              variant={dark ? 'dark' : 'light'}
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
