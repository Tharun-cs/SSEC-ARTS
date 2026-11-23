'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, Laptop, ChevronDown } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export const HeroVideoBanner: React.FC = () => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-gray-950 text-white" aria-label="Campus Hero Video">
      
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85"
          className="w-full h-full object-cover object-center scale-105"
        >
          {/* High-quality campus life ambient video stock */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-43365-large.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85"
            alt="Sree Sakthi Engineering College Campus"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Cinematic Dual Dark Overlay for Contrast and Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#CF0003]/90 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
        <div className="max-w-3xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#242424] font-black text-xs sm:text-sm uppercase px-4 py-1.5 rounded-sm tracking-wider mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#CF0003]" />
            <span>Autonomous: Technical Campus – Karamadai</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Shape Your Future <br />
            <span className="text-[#FFCB0B]">With Excellence.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-8 max-w-2xl">
            A premier autonomous collegiate institution on Ooty Main Road, Coimbatore – providing industry-driven academic programmes in Computing, Commerce, Information Technology, Management, and Sciences.
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="/departments"
              className="w-full sm:w-auto bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Departments</span>
              <ArrowRight className="w-4 h-4 text-[#CF0003]" />
            </Link>

            <Link
              href="/admissions"
              className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-[#CF0003] border-2 border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md transition-all flex items-center justify-center gap-2"
            >
              <span>Admissions Enquiry</span>
            </Link>
          </div>

          {/* Bottom Highlights Strip */}
          <div className="mt-12 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#FFCB0B] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Autonomous</span>
                <span className="text-[10px] text-gray-300">Technical Campus</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-5 h-5 text-[#FFCB0B] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">7 Programmes</span>
                <span className="text-[10px] text-gray-300">UG Offerings</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#FFCB0B] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">AICTE Approved</span>
                <span className="text-[10px] text-gray-300">Recognized Status</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#FFCB0B] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">100% Career Cell</span>
                <span className="text-[10px] text-gray-300">Training & Drives</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#college-intro" className="text-white/60 hover:text-[#FFCB0B] transition-colors flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest font-bold">
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
