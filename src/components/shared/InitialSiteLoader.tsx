'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InitialSiteLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Academic Portal...');
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // Status messages based on progress checkpoints
    const getStatus = (p: number) => {
      if (p < 30) return 'Initializing Academic Portal...';
      if (p < 60) return 'Connecting Campus Infrastructure...';
      if (p < 85) return 'Loading Academic Programmes...';
      if (p < 100) return 'Finalizing Elite Experience...';
      return 'Welcome to Sree Sakthi';
    };

    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds optimal entrance experience

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Ease-out progress curve for natural premium feel
      const easedProgress = Math.round(
        rawProgress >= 100 ? 100 : Math.min(99, Math.pow(rawProgress / 100, 0.85) * 100)
      );

      setProgress(easedProgress);
      setStatusText(getStatus(easedProgress));

      if (rawProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setStatusText('Welcome to Sree Sakthi');

        // Short pause at 100% before curtain reveal
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = '';
          // Remove from DOM after exit fade completes
          setTimeout(() => {
            setShouldRender(false);
          }, 700);
        }, 250);
      }
    }, 25);

    // Safety fallback timeout: never block visitor longer than 3 seconds
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setIsLoaded(true);
      document.body.style.overflow = '';
      setTimeout(() => setShouldRender(false), 700);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsLoaded(true);
    document.body.style.overflow = '';
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-[#172C4F] via-[#7B0002] to-[#CF0003] text-white select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
          aria-label="Loading Sree Sakthi College of Arts and Science"
          role="status"
        >
          {/* Ambient Background Aura & Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top-Right Golden Radial Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FFCB0B]/20 blur-3xl" />
            {/* Bottom-Left Deep Navy Radial Glow */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#172C4F]/60 blur-3xl" />
            {/* Subtle Center Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#FFCB0B]/10 to-transparent blur-2xl" />
          </div>

          {/* Central Prestige Crest & Identity */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
            
            {/* Crest Container with Concentric Rotating Rings */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-6">
              
              {/* Outer Slow-Spinning Golden Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#FFCB0B]/40"
              />

              {/* Middle Pulsing Glowing Ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full border border-[#FFCB0B]/60 shadow-[0_0_25px_rgba(255,203,11,0.35)]"
              />

              {/* Crisp White Circular Card Housing College Crest */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl flex items-center justify-center p-3 border-2 border-[#FFCB0B]"
              >
                <img
                  src="/images/college_crest.png"
                  alt="Sree Sakthi College Crest"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </motion.div>
            </div>

            {/* Institution Brand Typography */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-1 mb-8"
            >
              <span className="inline-block text-[#FFCB0B] font-black text-xs sm:text-sm tracking-[0.22em] uppercase">
                Sree Sakthi
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white uppercase drop-shadow-md">
                College of Arts and Science
              </h1>
              <p className="text-[11px] sm:text-xs text-white/80 font-medium tracking-wide">
                Elite Campus • Autonomous Institution • Accredited Excellence
              </p>
            </motion.div>

            {/* Premium Animated Progress Track */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] space-y-2.5">
              {/* Progress Bar Container */}
              <div className="relative h-2 w-full bg-black/30 backdrop-blur-md rounded-full overflow-hidden border border-white/20 p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#FFCB0B] via-amber-300 to-[#FFCB0B] shadow-[0_0_12px_rgba(255,203,11,0.8)] relative"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                >
                  {/* Leading Edge Shimmer Spark */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full blur-[1px]" />
                </motion.div>
              </div>

              {/* Progress Percentage & Status Label */}
              <div className="flex items-center justify-between text-[11px] font-bold text-white/90 px-0.5">
                <span className="text-white/75 font-medium truncate max-w-[210px] text-left">
                  {statusText}
                </span>
                <span className="text-[#FFCB0B] font-extrabold tabular-nums ml-2">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Skip Button (Bottom-Right Subtle Action) */}
          <button
            onClick={handleSkip}
            className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1 font-semibold cursor-pointer z-20 py-1 px-2.5 rounded-full hover:bg-white/10"
            aria-label="Skip intro loader"
          >
            <span>Skip</span>
            <span>→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
