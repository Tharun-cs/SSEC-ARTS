import React from 'react';

interface SkeletonBaseProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const SkeletonBase: React.FC<SkeletonBaseProps> = ({
  className = '',
  variant = 'light'
}) => {
  return (
    <div
      className={`rounded-md ${
        variant === 'dark' ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'
      } ${className}`}
      aria-hidden="true"
    />
  );
};
