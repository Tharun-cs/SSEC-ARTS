'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users
} from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  endValue: number;
  suffix: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'students-enrolled',
    icon: GraduationCap,
    endValue: 2400,
    suffix: '+',
    label: 'Students Enrolled'
  },
  {
    id: 'overall-courses',
    icon: BookOpen,
    endValue: 9,
    suffix: '+',
    label: 'Overall Course'
  },
  {
    id: 'centres-excellence',
    icon: Award,
    endValue: 10,
    suffix: '+',
    label: 'Centre of Excellence'
  },
  {
    id: 'students-graduated',
    icon: Users,
    endValue: 10000,
    suffix: '+',
    label: 'Students Graduated'
  }
];

// High-performance animated counter with cubic ease-out
const AnimatedCounter: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
  startAnimation: boolean;
}> = ({ end, suffix = '+', duration = 1800, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      // Ease-out cubic: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startAnimation]);

  const formattedCount = count.toLocaleString('en-US');

  return (
    <span className="inline-flex items-baseline font-black tracking-tight text-white drop-shadow-xs tabular-nums">
      <span>{formattedCount}</span>
      <span className="text-[#FFCB0B] ml-0.5 text-lg xs:text-xl sm:text-2xl lg:text-3xl font-extrabold select-none">
        {suffix}
      </span>
    </span>
  );
};

export const CourseStatsBanner: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#CF0003] text-white py-4 sm:py-5 lg:py-5 px-3 sm:px-6 select-none shadow-md border border-[#FFCB0B]/30"
      style={{ backgroundColor: '#CF0003' }}
      aria-label="Academic Key Statistics"
    >
      {/* 4 STATS COLUMNS WITH SLEEK VERTICAL DIVIDERS */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0 items-center justify-between">
        {STATS_DATA.map((stat, idx) => {
          const Icon = stat.icon;
          const isLast = idx === STATS_DATA.length - 1;

          return (
            <div
              key={stat.id}
              className="relative flex flex-col items-center text-center px-1.5 sm:px-4 group cursor-default transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Thin Vertical Divider between columns on Desktop */}
              {!isLast && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-gradient-to-b from-transparent via-white/25 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Stat Column Body */}
              <div className="flex flex-col items-center">
                {/* Small Clean Icon */}
                <div className="mb-1 text-white/90 group-hover:text-[#FFCB0B] transition-colors duration-200">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2]" />
                </div>

                {/* Number with Count-Up Animation */}
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-none mb-1 font-sans">
                  <AnimatedCounter
                    end={stat.endValue}
                    suffix={stat.suffix}
                    duration={1800}
                    startAnimation={isInView}
                  />
                </div>

                {/* Clean Label */}
                <h3 className="text-[11px] xs:text-xs sm:text-[13px] lg:text-sm font-bold text-white/90 tracking-normal group-hover:text-[#FFCB0B] transition-colors duration-200">
                  {stat.label}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
