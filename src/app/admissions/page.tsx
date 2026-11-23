'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { AdmissionEnquiryForm } from '@/components/forms/AdmissionEnquiryForm';
import { PROGRAMMES, COLLEGE_INFO } from '@/data/collegeData';
import {
  CheckCircle2,
  FileText,
  Calendar,
  Award,
  HelpCircle,
  GraduationCap,
  ShieldCheck,
  Phone,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Admissions 2026–2027"
        subtitle="Sree Sakthi College of Arts and Science – 7 premier undergraduate programmes in Computing, Commerce, IT, Management and Literature."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* Main Container with Grid Layout */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Process, Eligibility, Scholarships, FAQs (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Admission Overview */}
              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xs border border-amber-100"
              >
                <span className="text-xs font-black uppercase tracking-wider text-[#CF0003] block mb-1">
                  Admissions Open 2026–2027
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-[#171717] tracking-tight mb-2">
                  Sree Sakthi Elite Campus
                </h2>
                <div className="w-12 h-1 bg-[#FFCB0B] rounded-full mb-4" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 font-normal">
                  <strong>{COLLEGE_INFO.name}</strong> invites applications for its 7 industry-aligned undergraduate degree programmes. Admissions are conducted transparently strictly adhering to educational standards and guidelines.
                </p>
                <div className="bg-red-50 border-l-4 border-[#CF0003] p-3.5 rounded-r-xl text-xs text-red-950 font-medium leading-relaxed">
                  <strong>Admissions Helpdesk:</strong> Contact our admissions cell on Coimbatore Main Road at <strong>{COLLEGE_INFO.phone}</strong> or submit the online enquiry form.
                </div>
              </motion.section>

              {/* The 7 Programmes & Eligibility */}
              <motion.section
                id="programmes"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xs border border-amber-100"
              >
                <h3 className="text-lg font-bold uppercase text-[#171717] mb-2">
                  Our 7 Programmes &amp; Eligibility
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded-full mb-6" />

                <div className="space-y-3">
                  {PROGRAMMES.map((prog) => (
                    <div
                      key={prog.id}
                      className="p-4 bg-[#FFFDF8] rounded-2xl border border-gray-100 hover:border-[#FFCB0B] transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-xs sm:text-sm text-[#171717]">
                          {prog.name}
                        </h4>
                        <span className="text-[10px] font-bold text-[#CF0003] uppercase bg-red-100/60 px-2.5 py-0.5 rounded-full border border-red-100">
                          {prog.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-relaxed font-normal">
                        <strong>Eligibility:</strong> {prog.eligibility}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* 4-Step Procedure */}
              <motion.section
                id="procedure"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xs border border-amber-100"
              >
                <h3 className="text-lg font-bold uppercase text-[#171717] mb-2">
                  Simple 4-Step Admission Procedure
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded-full mb-6" />

                <div className="space-y-3.5">
                  {[
                    {
                      step: '1',
                      title: 'Submit Online Enquiry / Application',
                      desc: 'Fill in your academic profile and choice of programme online or collect the application form from our campus admissions office.'
                    },
                    {
                      step: '2',
                      title: 'Counseling & Eligibility Verification',
                      desc: 'Our admissions counselors guide you regarding curriculum benefits, career prospects, and merit scholarship eligibility.'
                    },
                    {
                      step: '3',
                      title: 'Document Verification',
                      desc: 'Submit 10th and 12th mark sheets, Transfer Certificate (TC), Community Certificate, and Aadhaar card photocopies.'
                    },
                    {
                      step: '4',
                      title: 'Seat Allotment & Enrollment',
                      desc: 'Confirm your admission seat, receive student ID credentials, and join the college orientation session.'
                    }
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3.5 p-4 bg-[#FFFDF8] rounded-2xl border border-gray-100"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#CF0003] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#171717]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-600 mt-1 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Scholarships */}
              <motion.section
                id="scholarships"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xs border border-amber-100"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#FFCB0B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CF0003]">
                    Fee Concessions
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase text-[#171717] mb-2">
                  Scholarships &amp; Financial Assistance
                </h3>
                <div className="w-12 h-1 bg-[#FFCB0B] rounded-full mb-6" />

                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="p-4 bg-yellow-50/70 rounded-2xl border border-yellow-200">
                    <h4 className="font-bold text-[#171717] mb-1">
                      Merit Scholarships for High Board Scores
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      Substantial fee concessions for students securing high marks in Higher Secondary board examinations.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FFFDF8] rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-[#171717] mb-1">
                      Sports Excellence Concession
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      Special fee concessions for athletes who represented district, zonal, or state-level sports competitions.
                    </p>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column: Admission Enquiry Form (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
              id="enquiry"
            >
              <div className="sticky top-24">
                <AdmissionEnquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
