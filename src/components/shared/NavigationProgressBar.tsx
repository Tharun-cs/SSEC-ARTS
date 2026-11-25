'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const NavigationProgressBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Briefly pulse the progress bar on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div className="h-full bg-gradient-to-r from-[#CF0003] via-[#FFCB0B] to-[#CF0003] animate-pulse w-full shadow-[0_0_10px_#FFCB0B]" />
    </div>
  );
};
