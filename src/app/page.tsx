import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { WelcomeSection } from '@/components/WelcomeSection';
import { ManagementSection } from '@/components/management/ManagementSection';
import { NewsUpdatesSection } from '@/components/news/NewsUpdatesSection';
import { CourseCatalogSection } from '@/components/catalog/CourseCatalogSection';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Full-width Panoramic Campus Hero Section (Preserved) */}
      <HeroSection />

      {/* 2. Welcome to Sree Sakthi Elite Campus Section (Preserved) */}
      <WelcomeSection />

      {/* 3. Our Management Section (Leadership of Sree Sakthi - Preserved) */}
      <ManagementSection />

      {/* 4. News & Updates Section (Immediately below Management Section - Preserved) */}
      <NewsUpdatesSection />

      {/* 5. Course Catalog Section (All Programmes for Students + Institutional Stats Banner) */}
      <CourseCatalogSection showStatsBanner={true} />
    </div>
  );
}
