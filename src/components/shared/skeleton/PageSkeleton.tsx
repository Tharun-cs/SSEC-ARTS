import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonHero } from './SkeletonHero';
import { SkeletonCard } from './SkeletonCard';

export const PageSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen animate-fade-in select-none">
      {/* 1. Hero Section Skeleton */}
      <SkeletonHero />

      {/* 2. Key Stats Strip Skeleton */}
      <div className="w-full bg-white border-b border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
          <SkeletonCard type="stat" />
        </div>
      </div>

      {/* 3. Section Header & Grid Skeleton */}
      <div className="max-w-[1440px] mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading Center */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="flex items-center gap-3">
            <SkeletonBase className="h-1 w-12 rounded-full" />
            <SkeletonBase className="h-4 w-32 rounded-full" />
            <SkeletonBase className="h-1 w-12 rounded-full" />
          </div>
          <SkeletonBase className="h-8 sm:h-10 w-80 max-w-full rounded-lg" />
          <SkeletonBase className="h-4 w-96 max-w-full rounded" />
        </div>

        {/* Responsive Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-4">
          <SkeletonCard type="card" />
          <SkeletonCard type="card" />
          <SkeletonCard type="card" />
          <SkeletonCard type="card" />
        </div>
      </div>

      {/* 4. Recruiter / Partner Logos Strip Skeleton */}
      <div className="w-full bg-[#CF0003]/5 border-y border-[#CF0003]/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto space-y-5">
          <div className="flex justify-center">
            <SkeletonBase className="h-4 w-48 rounded-full" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            <SkeletonBase className="h-14 rounded-xl" />
            <SkeletonBase className="h-14 rounded-xl" />
            <SkeletonBase className="h-14 rounded-xl" />
            <SkeletonBase className="h-14 rounded-xl" />
            <SkeletonBase className="h-14 rounded-xl" />
            <SkeletonBase className="h-14 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
