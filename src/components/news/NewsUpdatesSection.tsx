'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NewsPageHeader } from './NewsPageHeader';
import { FeaturedNewsCard } from './FeaturedNewsCard';
import { UpcomingEventsCard } from './UpcomingEventsCard';
import { LatestNewsContainer } from './LatestNewsContainer';
import { LatestAnnouncementsCard } from './LatestAnnouncementsCard';
import { NewsDetailModal, ModalContent } from './NewsDetailModal';
import { FeaturedNewsItem, LatestNewsItem, UpcomingEventItem, AnnouncementItem } from '@/data/newsUpdatesData';

export const NewsUpdatesSection: React.FC = () => {
  const [modalData, setModalData] = useState<ModalContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenFeaturedStory = (item: FeaturedNewsItem) => {
    setModalData({
      title: item.title,
      category: item.category,
      date: item.date,
      venue: item.venue,
      image: item.image,
      content: item.fullStory || item.description,
      type: 'news'
    });
    setIsModalOpen(true);
  };

  const handleOpenLatestStory = (item: LatestNewsItem) => {
    setModalData({
      title: item.title,
      category: item.category,
      date: item.date,
      image: item.image,
      content: item.fullStory || item.excerpt,
      type: 'news'
    });
    setIsModalOpen(true);
  };

  const handleSelectEvent = (item: UpcomingEventItem) => {
    setModalData({
      title: item.title,
      category: item.category || 'Upcoming Event',
      date: `${item.month} ${item.day}, 2026`,
      venue: item.venue,
      content: `Join us for ${item.title} at ${item.venue}. Session timing: ${item.time || '10:00 AM onwards'}. All students and faculty are invited to attend and participate.`,
      type: 'event'
    });
    setIsModalOpen(true);
  };

  const handleSelectAnnouncement = (item: AnnouncementItem) => {
    setModalData({
      title: item.title,
      category: item.category,
      date: item.date,
      content: item.details || item.title,
      type: 'announcement'
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="news-updates"
        className="relative w-full bg-[#CF0003] text-white overflow-hidden pt-12 sm:pt-14 md:pt-16 pb-5 sm:pb-6 md:pb-7 select-none"
        aria-label="News and Updates - Sree Sakthi Elite Campus"
      >
        {/* 1. TOP-LEFT YELLOW CORNER WAVE (Ultra-Compact - Will NEVER Touch Header Text) */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 max-h-[38px] sm:max-h-[44px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 160 45"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 L160,0 C85,6 20,12 0,44 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        {/* 2. BOTTOM-RIGHT YELLOW CORNER WAVE (Ultra-Compact - Will NEVER Touch Cards) */}
        <div className="absolute bottom-0 right-0 w-32 sm:w-44 md:w-52 lg:w-60 max-h-[45px] sm:max-h-[50px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 240 50"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M240,0 C220,25 150,42 0,50 L240,50 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        {/* 3. MAIN CONTENT CONTAINER (Ample Clearance from Corner Waves) */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: NEWS & UPDATES */}
          <NewsPageHeader />

          {/* UPPER ROW: Featured News & Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch mb-4 sm:mb-5"
          >
            {/* Left Column: Featured News (~66.7% / 8 cols) */}
            <div className="lg:col-span-8 flex flex-col">
              <FeaturedNewsCard onOpenStory={handleOpenFeaturedStory} />
            </div>

            {/* Right Column: Upcoming Events (~33.3% / 4 cols) */}
            <div className="lg:col-span-4 flex flex-col">
              <UpcomingEventsCard onSelectEvent={handleSelectEvent} />
            </div>
          </motion.div>

          {/* LOWER ROW: Latest News & Latest Announcements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch"
          >
            {/* Lower Left: Latest News (4 Equal Desktop Cards) */}
            <div className="lg:col-span-8 flex flex-col">
              <LatestNewsContainer onReadMore={handleOpenLatestStory} />
            </div>

            {/* Lower Right: Latest Announcements (Same Height Container) */}
            <div className="lg:col-span-4 flex flex-col">
              <LatestAnnouncementsCard onSelectAnnouncement={handleSelectAnnouncement} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Detail Modal for Full Stories / Events / Announcements */}
      <NewsDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />
    </>
  );
};
