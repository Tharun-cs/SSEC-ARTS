'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InitialSiteLoader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // 1.9 seconds duration for clean 360° 3D rotation cycle
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = '';
      setTimeout(() => {
        setShouldRender(false);
      }, 500);
    }, 1900);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="site-preloader-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
          aria-label="Loading Sree Sakthi"
          role="status"
        >
          {/* 3D Perspective Stage */}
          <div
            className="relative flex flex-col items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* Small 3D Rotating Logo (360 Degree Y-Axis Rotation) */}
            <motion.div
              initial={{ rotateY: 0, scale: 0.9, opacity: 0 }}
              animate={{
                rotateY: [0, 360, 720],
                scale: 1,
                opacity: 1
              }}
              transition={{
                rotateY: {
                  duration: 1.9,
                  ease: [0.45, 0.05, 0.55, 0.95],
                  repeat: 0
                },
                scale: {
                  duration: 0.35,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.25
                }
              }}
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 select-none cursor-default"
            >
              {/* Front Face: Crest on pristine white background */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-white rounded-full"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(1.5px)'
                }}
              >
                <img
                  src="/images/college_crest.png"
                  alt="Sree Sakthi"
                  className="w-full h-full object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </div>

              {/* Back Face: Identical Crest for seamless continuous 360° 3D rotation */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-white rounded-full"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg) translateZ(1.5px)'
                }}
              >
                <img
                  src="/images/college_crest.png"
                  alt="Sree Sakthi"
                  className="w-full h-full object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Straight-Line Loading Bar Below Logo */}
            <div className="mt-6 w-28 sm:w-32 h-[2.5px] bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.85, ease: [0.4, 0.0, 0.2, 1] }}
                className="h-full bg-gradient-to-r from-[#CF0003] to-[#FFCB0B] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
