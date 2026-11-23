import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { COLLEGE_EVENTS } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const EventsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F0]" id="events-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Campus Engagement"
          title="Upcoming Events & Seminars"
          description="Participate in dynamic technical symposiums, hackathons, and cultural festivals hosted at Sree Sakthi Engineering College."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLEGE_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-gray-200 transition-all flex flex-col group border-t-4 border-t-[#CF0003]"
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#FFCB0B] text-[#242424] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  {evt.category}
                </span>

                {evt.registrationOpen && (
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Open for Registration
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-3 text-xs text-[#FFCB0B] font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {evt.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#242424] group-hover:text-[#CF0003] transition-colors leading-snug mb-2">
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#CF0003] shrink-0" />
                    <span>Venue: {evt.venue}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/campus-life"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#CF0003] hover:text-[#CF0003]"
                  >
                    <span>Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {evt.registrationOpen && (
                    <Link
                      href="/contact"
                      className="bg-[#CF0003] hover:bg-[#CF0003] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-colors"
                    >
                      Register Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
