'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { ContactForm } from '@/components/forms/ContactForm';
import { COLLEGE_INFO } from '@/data/collegeData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Bus,
  Train,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Contact Us & Directions"
        subtitle="Get in touch with our administrative office, schedule a campus visit, or submit your academic queries."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid: Details (5 cols) & Contact Form (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-16">
            {/* Contact Details (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
              id="details"
            >
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xs border border-amber-100">
                <span className="text-xs font-black uppercase tracking-wider text-[#CF0003] block mb-1">
                  Official Communication
                </span>
                <h3 className="text-xl font-bold uppercase text-[#171717] mb-6">
                  College Contact Information
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-red-50 text-[#CF0003] shrink-0 mt-0.5 border border-red-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#171717] mb-1 font-bold">
                        Campus Postal Address:
                      </strong>
                      <span className="text-gray-600 leading-relaxed block font-normal">
                        <strong>{COLLEGE_INFO.name}</strong><br />
                        <span className="text-[#CF0003] font-semibold">{COLLEGE_INFO.campusType}</span><br />
                        {COLLEGE_INFO.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-yellow-50 text-yellow-900 shrink-0 mt-0.5 border border-yellow-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#171717] mb-1 font-bold">
                        Telephone &amp; Helpdesk:
                      </strong>
                      <span className="text-gray-600 block font-normal">
                        Admissions Desk: {COLLEGE_INFO.phone}
                      </span>
                      <span className="text-gray-500 text-xs">
                        Admissions Helpline: {COLLEGE_INFO.phoneAdmissions}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-red-50 text-[#CF0003] shrink-0 mt-0.5 border border-red-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#171717] mb-1 font-bold">
                        Official Email Addresses:
                      </strong>
                      <a href={`mailto:${COLLEGE_INFO.email}`} className="text-[#CF0003] hover:underline block font-medium">
                        {COLLEGE_INFO.email}
                      </a>
                      <a href={`mailto:${COLLEGE_INFO.admissionsEmail}`} className="text-gray-600 hover:underline block text-xs mt-0.5 font-normal">
                        {COLLEGE_INFO.admissionsEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-yellow-50 text-yellow-900 shrink-0 mt-0.5 border border-yellow-200">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#171717] mb-1 font-bold">
                        Office Hours:
                      </strong>
                      <span className="text-gray-600 block font-normal">{COLLEGE_INFO.officeHours}</span>
                      <span className="text-xs text-gray-400">Sundays &amp; Public Holidays Closed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 bg-[#FFFDF8] p-4 rounded-2xl border border-amber-100">
                  <h4 className="text-xs font-bold uppercase text-[#CF0003] mb-1">
                    Admissions Desk 2026–2027
                  </h4>
                  <p className="text-xs text-gray-600 mb-3 font-normal leading-relaxed">
                    Looking for course options or merit scholarship details? Submit your online enquiry directly.
                  </p>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CF0003] hover:underline"
                  >
                    <span>Go to Admission Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
              id="form"
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Location & Travel Directions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xs border border-amber-100"
            id="directions"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-6 h-0.5 bg-[#CF0003]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#CF0003]">
                  Reaching Sree Sakthi Campus
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#171717]">
                Location &amp; Travel Directions
              </h3>
            </div>

            {/* Google Map Embed Container */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-100 mb-8 bg-gray-100 shadow-inner">
              <iframe
                title="Sree Sakthi College of Arts and Science Location Map"
                src="https://maps.google.com/maps?q=Sellappampalayam+Punjai+Puliampatti+Tamil+Nadu+641459&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Travel Directions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-amber-100">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#CF0003] flex items-center justify-center border border-red-100">
                    <Bus className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#171717]">From Coimbatore City</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Regular buses from Gandhipuram Bus Stand towards Sathyamangalam / Punjai Puliampatti along Coimbatore Main Road. Alight at Sellappampalayam.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-amber-100">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#CF0003] flex items-center justify-center border border-red-100">
                    <Bus className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#171717]">From Sathyamangalam / Erode</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Frequent route and town buses toward Coimbatore pass directly through Punjai Puliampatti reaching the campus stop within 10 minutes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-amber-100">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-yellow-50 text-yellow-900 flex items-center justify-center border border-yellow-200">
                    <Train className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#171717]">From Tiruppur / Annur</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Well-connected bus routes connect Annur and Tiruppur with Punjai Puliampatti, with quick local transit right to our college gates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
