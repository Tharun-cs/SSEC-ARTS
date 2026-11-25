import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Oswald } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTopButton } from '@/components/shared/BackToTopButton';
import { NavigationProgressBar } from '@/components/shared/NavigationProgressBar';
import { InitialSiteLoader } from '@/components/shared/InitialSiteLoader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ssec.ac.in'),
  title: {
    default: 'Sree Sakthi College of Arts and Science | Elite Campus – Punjai Puliampatti',
    template: '%s | Sree Sakthi College of Arts and Science'
  },
  description:
    'Official website of Sree Sakthi College of Arts and Science – Elite Campus, Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459, Tamil Nadu. UGC / AICTE Approved. Admissions open 2026–2027.',
  keywords: [
    'Sree Sakthi College of Arts and Science',
    'Sree Sakthi Elite Campus',
    'Autonomous Arts and Science Campus Punjai Puliampatti',
    'College Coimbatore Main Road Sellappampalayam',
    'B.Com Computer Applications',
    'BBA Computer Applications',
    'B.Sc Computer Science',
    'BCA',
    'B.Sc Information Technology',
    'B.Sc Mathematics',
    'B.A. English Literature'
  ],
  authors: [{ name: 'Sree Sakthi College of Arts and Science' }],
  creator: 'Sree Sakthi College of Arts and Science',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/college_crest.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/images/college_crest.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ssec.ac.in',
    siteName: 'Sree Sakthi College of Arts and Science – Elite Campus',
    title: 'Sree Sakthi College of Arts and Science | Elite Campus',
    description:
      'Elite Campus in Sellappampalayam, Punjai Puliampatti – 641459. Offering premier degree programmes with modern computing labs and career placement cell.',
    images: [
      {
        url: '/images/college_crest.png',
        width: 1200,
        height: 630,
        alt: 'Sree Sakthi College of Arts and Science Emblem'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakartaSans.variable} ${oswald.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-[#242424] antialiased">
        {/* Full-Page Entrance Loading Screen */}
        <InitialSiteLoader />

        {/* Top Navigation Transition Progress Bar */}
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>

        {/* 1. Slim Maroon Announcement Bar */}
        <AnnouncementBar />

        {/* 2. Main Navigation Header with Original Logo & 8 Tabs */}
        <Header />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Back to Top Smooth Button */}
        <BackToTopButton />

        {/* Deep Maroon Footer */}
        <Footer />
      </body>
    </html>
  );
}
