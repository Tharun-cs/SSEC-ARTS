import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { NEWS_ITEMS } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white" id="news-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#CF0003]"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#CF0003]">
                Campus Bulletin
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#242424]">
              Latest News & Announcements
            </h2>
            <div className="w-16 h-1 bg-[#FFCB0B] rounded mt-2"></div>
          </div>

          <Link
            href="/admissions"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#CF0003] hover:text-[#CF0003]"
          >
            <span>View All Bulletins</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#CF0003] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#CF0003]" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#242424] group-hover:text-[#CF0003] transition-colors leading-snug line-clamp-2 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#CF0003] group-hover:underline"
                  >
                    <span>Read Full Notice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
