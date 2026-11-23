import React from 'react';
import type { Metadata } from 'next';
import { NewsUpdatesSection } from '@/components/news/NewsUpdatesSection';

export const metadata: Metadata = {
  title: 'News & Updates | Sree Sakthi College of Arts and Science',
  description:
    'Stay informed with the latest happenings, academic achievements, events, cultural galas, and official announcements at Sree Sakthi College of Arts and Science – Elite Campus.'
};

export default function NewsUpdatesPage() {
  return (
    <main className="min-h-screen bg-[#CF0003]">
      <NewsUpdatesSection />
    </main>
  );
}

