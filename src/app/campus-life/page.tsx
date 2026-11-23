'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GALLERY_ITEMS } from '@/data/collegeData';
import { LightboxModal } from '@/components/shared/LightboxModal';
import {
  BookOpen,
  Laptop,
  Trophy,
  Users,
  Bus,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Eye,
  CheckCircle2
} from 'lucide-react';

const FACILITIES = [
  {
    id: 'classrooms',
    title: 'Smart Multimedia Classrooms',
    description: 'Acoustically sound, well-ventilated lecture halls fitted with digital audio-visual projectors and comfortable seating to ensure focus and clarity.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    features: ['High-resolution digital projectors', 'Natural ventilation & lighting', 'Ergonomic seating arrangements']
  },
  {
    id: 'library',
    title: 'Central Institutional Library',
    description: 'A comprehensive knowledge center stocking 18,000+ volumes, peer-reviewed journals, competitive exam guides, and digital e-learning terminals.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    features: ['18,000+ reference & text books', 'DELNET digital journal subscriptions', 'Dedicated silent research hall']
  },
  {
    id: 'laboratories',
    title: 'High-Speed Computing Laboratories',
    description: 'Air-conditioned high-performance labs with gigabit fiber internet, Linux/Windows virtualized environments, and multimedia audio-visual software.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    features: ['150+ Core i7 computers', 'Digital language laboratory software', 'Uninterrupted power backup (UPS)']
  },
  {
    id: 'sports',
    title: 'Sports & Athletic Grounds',
    description: 'Outdoor athletic tracks, volleyball courts, badminton courts, and cricket practice nets promoting physical wellness and teamwork.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    features: ['400m outdoor running track', 'Volleyball & Kabaddi courts', 'Annual inter-departmental tournaments']
  },
  {
    id: 'transport',
    title: 'College Bus Transport Fleet',
    description: 'Safe, punctual college bus transportation connecting Karamadai, Coimbatore, Mettupalayam, Annur, and Tirupur.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: ['Experienced institutional drivers', 'Convenient boarding stages', 'GPS route tracking']
  },
  {
    id: 'clubs',
    title: 'Student Clubs & NSS / YRC',
    description: 'Vibrant student-led societies organizing coding hackathons, cultural festivals, literary debates, and village welfare camps.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    features: ['National Service Scheme (NSS)', 'Youth Red Cross (YRC)', 'BitWise Student Coding Club']
  }
];

export default function CampusLifePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Campus Life & Facilities"
        subtitle="Experience a vibrant, balanced academic lifestyle with modern infrastructure, recreational facilities, and student societies at Sree Sakthi Elite Campus."
        breadcrumbs={[{ label: 'Campus Life' }]}
      />

      {/* Facilities Grid */}
      <section className="py-14 sm:py-16 md:py-20 bg-white" id="facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Campus Facilities"
            title="World-Class Learning Infrastructure"
            description="Our campus on Coimbatore Main Road is structured to offer a peaceful, distraction-free environment conducive to focused study, research, and collaborative recreation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FACILITIES.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl border border-gray-100 hover:border-[#FFCB0B] transition-all flex flex-col group border-t-4 border-t-[#CF0003]"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-[#FFCB0B]">
                    {facility.title}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 font-normal">
                      {facility.description}
                    </p>

                    <div className="space-y-2 mb-2">
                      {facility.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#CF0003] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Photo Gallery with Lightbox */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8] border-t border-amber-100" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visual Walkthrough"
            title="Campus Photo Gallery"
            description="Photographs from our modern computing labs, central library, sports competitions, seminars, and student achievements."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(idx)}
                className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-2xs hover:shadow-xl transition-all bg-gray-900 border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100" />
                <span className="absolute top-3 left-3 bg-[#FFCB0B] text-[#171717] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                  {item.category}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold line-clamp-1">{item.title}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-full bg-white/90 text-[#CF0003] shadow-md">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % GALLERY_ITEMS.length)}
        onPrev={() => setCurrentIdx((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
      />
    </div>
  );
}
