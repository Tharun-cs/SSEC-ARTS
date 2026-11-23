'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PROGRAMMES } from '@/data/collegeData';
import { BookOpen, ArrowRight, Search, Clock, Laptop } from 'lucide-react';

const PROGRAMME_IMAGES: Record<string, string> = {
  'bcom-computer-applications': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'bba-computer-applications': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  'bsc-computer-science': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'bca': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'bsc-information-technology': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  'bsc-mathematics': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
  'ba-english-literature': 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
};

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProgrammes = PROGRAMMES.filter(
    (prog) =>
      prog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Departments & Programmes"
        subtitle="Explore our seven specialized undergraduate programmes offered at Sree Sakthi College of Arts and Science."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <section className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar & Header Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-2xs border border-amber-100 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h2 className="text-lg font-bold text-[#171717]">All Seven Programmes</h2>
              <p className="text-xs text-gray-500">Curriculum formulated with modern computing labs</p>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programme or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:border-[#CF0003] focus:ring-2 focus:ring-[#CF0003]/10 outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Exactly Seven Programme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProgrammes.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl border border-gray-100 hover:border-[#FFCB0B] transition-all duration-300 flex flex-col group border-t-4 border-t-[#CF0003]"
              >
                {/* Programme Image */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={PROGRAMME_IMAGES[prog.slug] || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <span className="absolute top-3 left-3 bg-[#CF0003] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                    {prog.degreeType} Degree
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-bold text-[#FFCB0B] flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFCB0B] transition-colors leading-tight">
                      {prog.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#CF0003] block mb-2">
                      {prog.department}
                    </span>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {prog.description}
                    </p>

                    <div className="bg-[#FFFDF8] p-3 rounded-xl border border-amber-100 text-xs mb-4">
                      <strong className="block text-gray-800 mb-0.5">Eligibility:</strong>
                      <span className="text-gray-600 line-clamp-2 font-normal">{prog.eligibility}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/academics/${prog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CF0003] hover:text-[#A30002] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/admissions"
                      className="bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#171717] font-bold text-xs uppercase px-3.5 py-1.5 rounded-full transition-colors shadow-2xs"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProgrammes.length === 0 && (
            <div className="bg-white p-12 text-center rounded-3xl border border-gray-200">
              <p className="text-sm text-gray-500">No programme matches "{searchTerm}".</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs text-[#CF0003] font-bold underline cursor-pointer"
              >
                Show All 7 Programmes
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
