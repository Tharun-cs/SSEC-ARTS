import React from 'react';
import { SkeletonBase } from './SkeletonBase';

interface SkeletonCardProps {
  type?: 'card' | 'discipline' | 'management' | 'stat';
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  type = 'card',
  className = ''
}) => {
  if (type === 'stat') {
    return (
      <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-xs flex flex-col items-center justify-center text-center space-y-2 ${className}`}>
        <SkeletonBase className="h-8 sm:h-10 w-20 rounded" />
        <SkeletonBase className="h-4 w-28 rounded" />
        <SkeletonBase className="h-3 w-36 rounded" />
      </div>
    );
  }

  if (type === 'management') {
    return (
      <div className={`rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col ${className}`}>
        <div className="p-2 pb-0">
          <SkeletonBase className="w-full aspect-[740/790] rounded-t-xl" />
        </div>
        <div className="p-4 space-y-2 flex flex-col items-center">
          <SkeletonBase className="h-6 w-6 rounded-full -mt-6 mb-1 ring-4 ring-white" />
          <SkeletonBase className="h-3 w-24 rounded" />
          <SkeletonBase className="h-4 w-36 rounded" />
          <SkeletonBase className="h-1 w-10 rounded-full mt-1" />
        </div>
      </div>
    );
  }

  if (type === 'discipline') {
    return (
      <div className={`rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between space-y-4 ${className}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <SkeletonBase className="h-9 w-9 rounded-lg" />
            <SkeletonBase className="h-4 w-12 rounded-full" />
          </div>
          <SkeletonBase className="h-5 w-3/4 rounded" />
          <SkeletonBase className="h-3 w-1/2 rounded" />
        </div>
        <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
          <SkeletonBase className="h-3 w-20 rounded" />
          <SkeletonBase className="h-6 w-6 rounded-full" />
        </div>
      </div>
    );
  }

  // Default Standard Card
  return (
    <div className={`rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col ${className}`}>
      <SkeletonBase className="w-full aspect-video rounded-t-2xl" />
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <SkeletonBase className="h-3 w-16 rounded-full" />
            <SkeletonBase className="h-3 w-20 rounded-full" />
          </div>
          <SkeletonBase className="h-5 w-4/5 rounded" />
          <SkeletonBase className="h-3.5 w-full rounded" />
          <SkeletonBase className="h-3.5 w-3/4 rounded" />
        </div>
        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
          <SkeletonBase className="h-4 w-24 rounded" />
          <SkeletonBase className="h-4 w-16 rounded" />
        </div>
      </div>
    </div>
  );
};
