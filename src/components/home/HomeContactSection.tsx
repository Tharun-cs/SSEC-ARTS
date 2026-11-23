import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { COLLEGE_INFO } from '@/data/collegeData';
import { MapPin, Phone, Mail, Clock, ArrowRight, Bus } from 'lucide-react';

export const HomeContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="home-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get in Touch"
          title="Connect with Our Administrative Office"
          description="Have questions about admissions, programmes, scholarships, or campus visits? Reach out to us today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF9F0] p-6 sm:p-8 rounded-xl border border-gray-200">
              <span className="text-xs font-black uppercase tracking-wider text-[#CF0003] block mb-1">
                Punjai Puliampatti Campus
              </span>
              <h3 className="text-xl font-black uppercase text-[#242424] mb-6">
                Official Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242424]">Campus Postal Address:</strong>
                    <span>
                      {COLLEGE_INFO.name}<br />
                      {COLLEGE_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242424]">Admissions Helpdesk:</strong>
                    <span>{COLLEGE_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242424]">Official Email:</strong>
                    <a href={`mailto:${COLLEGE_INFO.email}`} className="text-[#CF0003] hover:underline">
                      {COLLEGE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242424]">Office Timings:</strong>
                    <span>{COLLEGE_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CF0003] hover:text-[#CF0003]"
                >
                  <span>View Travel Directions & Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};
