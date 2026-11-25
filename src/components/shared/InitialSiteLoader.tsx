'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InitialSiteLoader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // Cinematic 3D entrance timing: 2.1 seconds for full 360° rotation cycle
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = '';
      setTimeout(() => {
        setShouldRender(false);
      }, 700);
    }, 2100);

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
          key="site-preloader-3d"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(12px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
          aria-label="Loading Sree Sakthi"
          role="status"
        >
          {/* Ultra Dark Ambient Glow & Vignette */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Center Cinematic Warm Red/Gold Radial Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-radial from-[#CF0003]/25 via-[#FFCB0B]/10 to-transparent blur-3xl opacity-80" />

            {/* Deep Vignette Perimeter */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#050507]/60 to-[#030304]" />
          </div>

          {/* 3D Perspective Stage */}
          <div
            className="relative z-10 flex flex-col items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {/* Animated 3D Rotating Logo Medallion */}
            <motion.div
              initial={{ rotateY: 0, scale: 0.85, opacity: 0 }}
              animate={{
                rotateY: [0, 360, 720],
                scale: [0.92, 1.05, 1],
                opacity: 1
              }}
              transition={{
                rotateY: {
                  duration: 2.1,
                  ease: [0.45, 0.05, 0.55, 0.95],
                  repeat: 0
                },
                scale: {
                  duration: 2.1,
                  ease: 'easeInOut'
                },
                opacity: {
                  duration: 0.35
                }
              }}
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 select-none"
            >
              {/* Front Face: High-Resolution College Crest inside Gold-Bordered Medallion */}
              <div
                className="absolute inset-0 rounded-full bg-white border-[3.5px] border-[#FFCB0B] shadow-[0_0_45px_rgba(255,203,11,0.4),0_0_90px_rgba(207,0,3,0.35)] flex items-center justify-center p-4 sm:p-5 overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(3px)'
                }}
              >
                <img
                  src="/images/college_crest.png"
                  alt="Sree Sakthi Crest"
                  className="w-full h-full object-contain filter drop-shadow-md pointer-events-none select-none"
                  draggable={false}
                />

                {/* 3D Specular Light Sweep Effect */}
                <motion.div
                  animate={{ x: ['-140%', '220%'] }}
                  transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-12 pointer-events-none"
                />
              </div>

              {/* Back Face: Identical Dual-Sided Crest for seamless 360° 3D Rotation */}
              <div
                className="absolute inset-0 rounded-full bg-white border-[3.5px] border-[#FFCB0B] shadow-[0_0_45px_rgba(255,203,11,0.4),0_0_90px_rgba(207,0,3,0.35)] flex items-center justify-center p-4 sm:p-5 overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg) translateZ(3px)'
                }}
              >
                <img
                  src="/images/college_crest.png"
                  alt="Sree Sakthi Crest"
                  className="w-full h-full object-contain filter drop-shadow-md pointer-events-none select-none"
                  draggable={false}
                />

                {/* 3D Specular Light Sweep on back face */}
                <motion.div
                  animate={{ x: ['-140%', '220%'] }}
                  transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4, delay: 0.52 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Dynamic 3D Floor Shadow that shrinks/expands with the 3D rotation angle */}
            <motion.div
              animate={{
                scaleX: [1, 0.2, 1, 0.2, 1],
                opacity: [0.65, 0.2, 0.65, 0.2, 0.65]
              }}
              transition={{
                duration: 2.1,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: 0
              }}
              className="mt-8 sm:mt-11 w-28 sm:w-36 h-3 rounded-full bg-black/90 blur-md pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
