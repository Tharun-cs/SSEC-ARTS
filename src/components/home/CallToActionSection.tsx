import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#8C0002] via-[#CF0003] to-[#CF0003] text-white py-16 md:py-20 relative overflow-hidden" id="admissions-cta">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#FFCB0B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FFCB0B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#242424] font-black text-xs uppercase px-4 py-1 rounded-full mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#CF0003]" />
          Admissions Open for Academic Year 2026–2027
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight drop-shadow-sm">
          Shape Your Future With Excellence.
        </h2>

        <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Enroll in our Autonomous Technical Campus in Karamadai, Coimbatore. Explore 7 future-ready programmes in Computing, IT, Commerce, Management, and Literature.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="w-full sm:w-auto bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Apply for Admissions Online</span>
            <ArrowRight className="w-4 h-4 text-[#CF0003]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-[#CF0003] border-2 border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Campus Visit & Helpdesk</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-xs text-red-100 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#FFCB0B]" />
            Ooty Main Road, Coimbatore – 641104
          </span>
          <span>•</span>
          <span>Helpdesk: +91 (0) 4254 262626</span>
          <span>•</span>
          <span>{COLLEGE_INFO.email}</span>
        </div>
      </div>
    </section>
  );
};
