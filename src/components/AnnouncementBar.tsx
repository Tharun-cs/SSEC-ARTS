'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, GraduationCap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#CF0003] text-white border-b border-[#A50003] relative z-50 select-none text-xs sm:text-sm font-medium overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-11 gap-2 sm:gap-6">

          {/* Left Side: Phone + Campus Life */}
          <div className="flex items-center shrink-0">
            {/* Phone */}
            <a
              href="tel:+919244504444"
              className="flex items-center gap-1.5 sm:gap-2 text-white/95 hover:text-[#FFCB0B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFCB0B] fill-[#FFCB0B] shrink-0" />
              <span className="font-semibold text-xs sm:text-sm tracking-wide">+9244504444</span>
            </a>

            {/* Campus Life - Hidden on very small screens to give marquee breathing room */}
            <span className="text-white/40 mx-2 sm:mx-3 text-xs hidden sm:inline">|</span>
            <Link
              href="/campus-life"
              className="hidden sm:flex items-center gap-1.5 text-white/95 hover:text-[#FFCB0B] transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-[#FFCB0B] shrink-0" />
              <span className="font-semibold text-xs sm:text-sm tracking-wide">Campus Life</span>
            </Link>
          </div>

          {/* Center: Seamless Looping Text in Regular Size with Continuous Flow */}
          <div className="flex-1 overflow-hidden relative mx-2 sm:mx-4 select-none min-w-0 flex">
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 animate-marquee-continuous">
              <span className="text-white font-bold text-xs sm:text-[15px] uppercase tracking-wide whitespace-nowrap">
                WELCOME TO SREE SAKTHI COLLEGE OF ARTS AND SCIENCE-COIMBATORE
              </span>
              <span className="text-[#FFCB0B] font-bold text-xs sm:text-sm shrink-0">★</span>
              <span className="text-white font-bold text-xs sm:text-[15px] uppercase tracking-wide whitespace-nowrap">
                WELCOME TO SREE SAKTHI COLLEGE OF ARTS AND SCIENCE-COIMBATORE
              </span>
              <span className="text-[#FFCB0B] font-bold text-xs sm:text-sm shrink-0">★</span>
            </div>
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 animate-marquee-continuous" aria-hidden="true">
              <span className="text-white font-bold text-xs sm:text-[15px] uppercase tracking-wide whitespace-nowrap">
                WELCOME TO SREE SAKTHI COLLEGE OF ARTS AND SCIENCE-COIMBATORE
              </span>
              <span className="text-[#FFCB0B] font-bold text-xs sm:text-sm shrink-0">★</span>
              <span className="text-white font-bold text-xs sm:text-[15px] uppercase tracking-wide whitespace-nowrap">
                WELCOME TO SREE SAKTHI COLLEGE OF ARTS AND SCIENCE-COIMBATORE
              </span>
              <span className="text-[#FFCB0B] font-bold text-xs sm:text-sm shrink-0">★</span>
            </div>
          </div>

          {/* Right Side: ICON REACT 2K26 Badge + Careers + Community + Social Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 py-0.5">

            {/* White Rounded Pill Badge: ICON REACT 2K26 */}
            <span className="bg-white text-[#CF0003] font-black text-[10px] sm:text-[12px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap select-none">
              ICON REACT 2K26
            </span>

            <span className="text-white/40 mx-1.5 hidden lg:inline text-sm">|</span>

            {/* Careers */}
            <Link
              href="/placements#careers"
              className="text-white/95 hover:text-[#FFCB0B] transition-colors font-semibold text-sm whitespace-nowrap hidden lg:inline"
            >
              Careers
            </Link>

            <span className="text-white/40 mx-1.5 hidden lg:inline text-sm">|</span>

            {/* Community */}
            <Link
              href="/about#community"
              className="text-white/95 hover:text-[#FFCB0B] transition-colors font-semibold text-sm whitespace-nowrap hidden lg:inline"
            >
              Community
            </Link>

            {/* Social Media Icons */}
            <div className="hidden sm:flex items-center gap-2 ml-1 text-white">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#CF0003] text-white flex items-center justify-center transition-all p-1.5"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#CF0003] text-white flex items-center justify-center transition-all p-1.5"
                aria-label="Pinterest"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ssec_elite_puliyampatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#CF0003] text-white flex items-center justify-center transition-all p-1.5"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#CF0003] text-white flex items-center justify-center transition-all p-1.5"
                aria-label="Twitter"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
