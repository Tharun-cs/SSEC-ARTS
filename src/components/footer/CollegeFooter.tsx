'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COLLEGE_INFO, PROGRAMMES } from '@/data/collegeData';

export const CollegeFooter: React.FC = () => {
  return (
    <footer className="bg-[#CF0003] text-white border-t-4 border-[#FFCB0B] mt-auto">
      {/* Pre-Footer Golden-Yellow Accent Bar */}
      <div className="bg-[#8C0002] py-3.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-4 h-4 text-[#FFCB0B]" />
              <span className="font-semibold tracking-wide">
                Autonomous: Technical Campus – Coimbatore | Approved by AICTE, New Delhi
              </span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <Link href="/admissions" className="hover:text-[#FFCB0B] transition-colors underline-offset-4 hover:underline">
                Admissions Helpdesk 2026–27
              </Link>
              <span>•</span>
              <Link href="/contact#directions" className="hover:text-[#FFCB0B] transition-colors underline-offset-4 hover:underline">
                Campus Location (Puliampatti)
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1: Original Logo & College Introduction */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
              <img
                src={COLLEGE_INFO.logoUrl}
                alt="Sree Sakthi Engineering College"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-red-100/90 leading-relaxed">
              <strong>Sree Sakthi Engineering College</strong> (Autonomous Technical Campus) is committed to providing cutting-edge computing, business administration, commerce, and scientific education with modern lab infrastructure on Ooty Main Road, Karamadai, Coimbatore.
            </p>

            <div className="space-y-2.5 text-xs text-red-100 pt-2 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFCB0B] shrink-0 mt-0.5" />
                <span>
                  Sakthy Main Road, Coimbatore – 641655,<br />
                  Tamil Nadu, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFCB0B] shrink-0" />
                <span>+91 (0) 4254 262626</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFCB0B] shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-[#FFCB0B] transition-colors">
                  {COLLEGE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFCB0B] shrink-0" />
                <span>{COLLEGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: The Eight Main Navigation Tabs */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFCB0B] mb-4 pb-2 border-b border-white/10">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Departments
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Academics
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Placements
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Admissions
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Campus Life
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The 7 Academic Programmes */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFCB0B] mb-4 pb-2 border-b border-white/10">
              Our 7 Programmes
            </h4>
            <ul className="space-y-2 text-xs">
              {PROGRAMMES.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" />
                    <span>{prog.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus Life, Cell Contacts & Admissions Callout */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFCB0B] mb-4 pb-2 border-b border-white/10">
              Autonomous Governance
            </h4>
            <ul className="space-y-1.5 text-xs text-red-100">
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Internal Quality Assurance Cell (IQAC)
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Anti-Ragging Committee & Squad
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> Grievance Redressal Cell
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B]" /> National Service Scheme (NSS)
              </li>
            </ul>

            <div className="mt-5 p-3.5 bg-[#8C0002] rounded-lg border border-white/10">
              <p className="text-xs font-bold text-[#FFCB0B] mb-1">Admissions Open 2026–2027</p>
              <p className="text-[11px] text-red-100 mb-2.5">
                Apply online or connect with our academic admissions counsellor at Karamadai campus.
              </p>
              <Link
                href="/admissions"
                className="inline-block bg-[#FFCB0B] text-[#242424] font-black text-xs uppercase px-3.5 py-1.5 rounded hover:bg-[#E5B50A] transition-colors"
              >
                Apply Online
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright and Legal Bar */}
      <div className="bg-[#5C0812] border-t border-white/10 py-4 text-xs text-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-center sm:text-left">
            © 2026 Sree Sakthi Engineering College. All rights reserved. Sakthy Main Road, Coimbatore – 641655.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Use</span>
            <span>•</span>
            <span>Mandatory Disclosure</span>
            <span>•</span>
            <Link href="/admin" className="text-[#FFCB0B] hover:underline font-bold">
              Staff Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
