'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, UserCheck, FileText, CheckCircle } from 'lucide-react';

export const AdmissionsBanner: React.FC = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setShowBrochureModal(false);
      setDownloadSuccess(false);
    }, 2000);
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#CF0003] via-[#B50004] to-[#8C0002] text-white py-6 sm:py-8 overflow-hidden select-none">
        {/* 1. TOP-LEFT YELLOW CORNER WAVE (Exact News & Updates Page Border Shape) */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 max-h-[36px] sm:max-h-[42px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 160 45"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 L160,0 C85,6 20,12 0,44 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        {/* 2. BOTTOM-RIGHT YELLOW CORNER SWOOSH (Exact News & Updates Page Border Shape) */}
        <div className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 max-h-[40px] sm:max-h-[46px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 240 50"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M240,0 C220,25 150,42 0,50 L240,50 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Students Group Image */}
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <div className="relative rounded-md overflow-hidden shadow-lg border border-white/20 max-w-[220px] bg-black/20">
                <img
                  src="/images/admissions_students.jpg"
                  alt="Students Collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Centre: Heading, Subtitle & Apply Now Button */}
            <div className="w-full lg:w-1/2 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight mb-2">
                Begin Your Journey With Sree Sakthi
              </h2>
              <p className="text-xs sm:text-sm text-red-100/90 font-normal mb-5 max-w-lg mx-auto">
                Take the next step towards a bright and successful future.
              </p>
              <div>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-black text-xs sm:text-sm uppercase tracking-wide px-7 py-3 rounded-md shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-[#242424]" />
                </Link>
              </div>
            </div>

            {/* Right: Two Transparent Action Cards */}
            <div className="w-full lg:w-1/4 flex flex-col gap-2.5 max-w-sm">
              <Link
                href="/admissions"
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 rounded-md px-4 py-3 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-[#FFCB0B]" />
                  <span className="text-xs sm:text-[13px] font-bold text-white tracking-wide">
                    Admissions Enquiry
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setShowBrochureModal(true)}
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 rounded-md px-4 py-3 transition-colors group text-left w-full focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#FFCB0B]" />
                  <span className="text-xs sm:text-[13px] font-bold text-white tracking-wide">
                    Download Brochure
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Brochure Download Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative border-t-4 border-[#CF0003] text-[#242424]">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-[#242424] mb-1 font-heading">
              Download Official College Brochure
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Enter your details to receive the verified prospectus and programme guidelines for Sree Sakthi College of Arts and Science.
            </p>

            {downloadSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded text-center my-3">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-sm">Download Request Received!</p>
                <p className="text-xs text-emerald-700 mt-1">Our admissions desk will send the brochure package to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter student / parent name"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#CF0003] hover:bg-[#B50004] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wide transition-colors"
                >
                  Confirm & Download PDF
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
