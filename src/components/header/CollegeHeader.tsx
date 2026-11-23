'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Sparkles, MapPin, CheckCircle, ShieldCheck, Phone } from 'lucide-react';
import { COLLEGE_INFO, PROGRAMMES } from '@/data/collegeData';

export const CollegeHeader: React.FC = () => {
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
      <header className="bg-white border-b border-[#E8E8E8] py-2 sm:py-3 transition-all relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Original SSEC Technical Campus Logo (No duplicate name beside it) */}
            <Link href="/" className="inline-block group focus:outline-none" aria-label="Sree Sakthi Engineering College Home">
              <img
                src={COLLEGE_INFO.logoUrl}
                alt="Sree Sakthi Engineering College – Autonomous Technical Campus, Karamadai"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              />
            </Link>

            {/* Right: Institutional Credentials & Actions */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-end">
              
              {/* Autonomous Badge */}
              <div className="hidden xl:flex flex-col text-right border-r border-gray-200 pr-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#CF0003] flex items-center justify-end gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CF0003]" />
                  Autonomous Institution
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  Approved by AICTE, New Delhi
                </span>
              </div>

              {/* Download Brochure Button */}
              <button
                onClick={() => setShowBrochureModal(true)}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded shadow-xs transition-colors"
                title="Download Official Information Prospectus"
              >
                <Download className="w-3.5 h-3.5 text-[#CF0003]" />
                Prospectus 2026
              </button>

              {/* Golden Yellow Apply Now Button */}
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-black text-xs sm:text-sm tracking-wider uppercase rounded shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#CF0003]" />
                Apply Now 2026–27
              </Link>

            </div>

          </div>
        </div>
      </header>

      {/* Prospectus Download Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative border-t-4 border-[#CF0003]">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#242424] mb-1">
              Download College Prospectus 2026–2027
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Enter your details to download the official Sree Sakthi Engineering College prospectus, programme curriculum guidelines, and fee structures.
            </p>

            {downloadSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded text-center my-4">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-sm">Prospectus Download Initiated!</p>
                <p className="text-xs text-emerald-700 mt-1">Thank you for your interest in Sree Sakthi Engineering College.</p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter student / guardian name"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Interested Programme</label>
                  <select
                    required
                    className="w-full text-sm px-3 py-2 border border-gray-300 rounded focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none bg-white"
                  >
                    <option value="">Select Programme</option>
                    {PROGRAMMES.map((prog) => (
                      <option key={prog.id} value={prog.name}>{prog.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#CF0003] hover:bg-[#CF0003] text-white font-bold py-2.5 rounded text-sm transition-colors mt-2"
                >
                  Download Prospectus PDF
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
