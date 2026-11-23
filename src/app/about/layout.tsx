import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us | Sree Sakthi College of Arts and Science',
  description:
    'Explore Sree Sakthi College of Arts and Science, Punjai Puliampatti – 641459. Institutional overview, vision and mission, governing leadership, and executive addresses.'
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

