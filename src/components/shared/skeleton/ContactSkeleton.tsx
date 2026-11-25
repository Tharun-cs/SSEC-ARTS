import React from 'react';
import { SkeletonBase } from './SkeletonBase';
import { SkeletonCard } from './SkeletonCard';

export const ContactSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-12 max-w-[1440px] mx-auto select-none">
      {/* Contact Header */}
      <div className="text-center flex flex-col items-center space-y-3">
        <SkeletonBase className="h-4 w-32 rounded-full" />
        <SkeletonBase className="h-10 sm:h-12 w-80 max-w-full rounded-lg" />
        <SkeletonBase className="h-4 w-96 max-w-full rounded" />
      </div>

      {/* 3 Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeletonCard type="stat" />
        <SkeletonCard type="stat" />
        <SkeletonCard type="stat" />
      </div>

      {/* 2 Columns: Map Skeleton + Form Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Skeleton */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <SkeletonBase className="h-6 w-48 rounded" />
          <SkeletonBase className="h-4 w-72 rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <SkeletonBase className="h-11 rounded-lg" />
            <SkeletonBase className="h-11 rounded-lg" />
          </div>
          <SkeletonBase className="h-11 rounded-lg" />
          <SkeletonBase className="h-28 rounded-lg" />
          <SkeletonBase className="h-12 w-40 rounded-lg" />
        </div>

        {/* Map Placeholder Skeleton */}
        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
          <SkeletonBase className="aspect-[4/3] rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};
