import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonCard } from './SkeletonCard';

export const CampusLifeSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-12 max-w-[1440px] mx-auto select-none">
      {/* Campus Hero */}
      <div className="text-center flex flex-col items-center space-y-3">
        <SkeletonBase className="h-4 w-32 rounded-full" />
        <SkeletonBase className="h-10 sm:h-12 w-88 max-w-full rounded-lg" />
        <SkeletonBase className="h-4 w-96 max-w-full rounded" />
      </div>

      {/* Facilities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} type="card" />
        ))}
      </div>

      {/* Photo Gallery Grid */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6">
        <SkeletonBase className="h-6 w-40 rounded" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBase key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};
