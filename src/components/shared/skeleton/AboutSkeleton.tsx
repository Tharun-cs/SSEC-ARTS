import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonCard } from './SkeletonCard';

export const AboutSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen select-none">
      {/* 1. Navy Blue Hero Skeleton */}
      <div className="w-full bg-[#0F2B56] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-3">
          <SkeletonBase variant="dark" className="h-1 w-12 rounded-full" />
          <SkeletonBase variant="dark" className="h-4 w-28 rounded-full" />
          <SkeletonBase variant="dark" className="h-1 w-12 rounded-full" />
        </div>
        <SkeletonBase variant="dark" className="h-10 sm:h-14 w-96 max-w-full rounded-lg" />
        <SkeletonBase variant="dark" className="h-4 w-[520px] max-w-full rounded" />
        <div className="flex gap-3 pt-4">
          <SkeletonBase variant="dark" className="h-8 w-28 rounded-full" />
          <SkeletonBase variant="dark" className="h-8 w-28 rounded-full" />
          <SkeletonBase variant="dark" className="h-8 w-28 rounded-full" />
        </div>
      </div>

      {/* 2. Key Stats Strip */}
      <div className="border-b border-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
        </div>
      </div>

      {/* 3. Narrative Story Section */}
      <div className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <SkeletonBase className="h-8 w-72 rounded-lg" />
          <SkeletonBase className="h-4 w-full rounded" />
          <SkeletonBase className="h-4 w-full rounded" />
          <SkeletonBase className="h-4 w-5/6 rounded" />
        </div>

        {/* 2-column image and text block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
          <SkeletonBase className="aspect-[4/3] rounded-2xl w-full" />
          <div className="space-y-3">
            <SkeletonBase className="h-6 w-3/4 rounded" />
            <SkeletonBase className="h-4 w-full rounded" />
            <SkeletonBase className="h-4 w-full rounded" />
            <SkeletonBase className="h-4 w-2/3 rounded" />
            <div className="pt-4">
              <SkeletonBase className="h-10 w-36 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
