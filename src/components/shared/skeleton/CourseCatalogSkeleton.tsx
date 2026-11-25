import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonCard } from './SkeletonCard';

export const CourseCatalogSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-10 max-w-[1440px] mx-auto select-none">
      {/* 1. Catalog Hero Header Skeleton */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-3/5 space-y-4">
          <div className="flex items-center gap-2">
            <SkeletonBase className="h-5 w-5 rounded-full" />
            <SkeletonBase className="h-4 w-32 rounded-full" />
          </div>
          <SkeletonBase className="h-10 sm:h-12 w-4/5 rounded-lg" />
          <SkeletonBase className="h-4 w-full rounded" />
          <SkeletonBase className="h-4 w-3/4 rounded" />

          {/* UG / PG Filter Pills */}
          <div className="flex items-center gap-3 pt-3">
            <SkeletonBase className="h-10 w-48 rounded-full" />
            <SkeletonBase className="h-10 w-48 rounded-full" />
          </div>
        </div>

        {/* Right Hero Image Frame */}
        <div className="w-full lg:w-2/5 aspect-[16/10] rounded-2xl overflow-hidden">
          <SkeletonBase className="w-full h-full rounded-2xl" />
        </div>
      </div>

      {/* 2. Filter & Search Bar Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center gap-4">
        <SkeletonBase className="h-11 flex-1 w-full rounded-xl" />
        <SkeletonBase className="h-11 w-full sm:w-48 rounded-xl" />
        <SkeletonBase className="h-11 w-full sm:w-40 rounded-xl" />
        <SkeletonBase className="h-11 w-full sm:w-28 rounded-xl" />
      </div>

      {/* 3. Discipline Cards Grid (8 Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SkeletonBase className="h-6 w-52 rounded" />
          <SkeletonBase className="h-4 w-28 rounded" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} type="discipline" />
          ))}
        </div>
      </div>

      {/* 4. Programme Table / List Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-4">
        <SkeletonBase className="h-6 w-60 rounded" />
        <div className="space-y-3 pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div className="space-y-1.5 w-2/3">
                <SkeletonBase className="h-4 w-3/4 rounded" />
                <SkeletonBase className="h-3 w-1/2 rounded" />
              </div>
              <SkeletonBase className="h-8 w-24 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
