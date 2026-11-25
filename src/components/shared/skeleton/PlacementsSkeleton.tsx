import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonCard } from './SkeletonCard';

export const PlacementsSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-12 max-w-[1440px] mx-auto select-none">
      {/* Placements Hero */}
      <div className="text-center flex flex-col items-center space-y-3">
        <SkeletonBase className="h-4 w-36 rounded-full" />
        <SkeletonBase className="h-10 sm:h-12 w-80 max-w-full rounded-lg" />
        <SkeletonBase className="h-4 w-96 max-w-full rounded" />
      </div>

      {/* Salary Highlights 4 Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <SkeletonCard type="stat" />
        <SkeletonCard type="stat" />
        <SkeletonCard type="stat" />
        <SkeletonCard type="stat" />
      </div>

      {/* Corporate Recruiters Logos Grid */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between">
          <SkeletonBase className="h-6 w-48 rounded" />
          <SkeletonBase className="h-4 w-24 rounded" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonBase key={i} className="h-20 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};
