export interface FeaturedNewsItem {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  category: string;
  fullStory?: string;
}

export interface UpcomingEventItem {
  id: string;
  month: string;
  day: string;
  title: string;
  venue: string;
  time?: string;
  category?: string;
  link: string;
}

export interface LatestNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
  fullStory: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  category: string;
  isNew?: boolean;
  link: string;
  details?: string;
}

export const FEATURED_NEWS: FeaturedNewsItem[] = [
  {
    id: 'feat-1',
    title: 'SSEC ACHIEVERS DAY 2K26',
    date: 'Apr 02, 2026',
    venue: 'College Auditorium',
    category: 'Featured News',
    description: 'A grand celebration honouring the outstanding achievements of our students in academics, sports and co-curricular activities.',
    image: '/images/news/featured_achievers.webp',
    fullStory: 'Sree Sakthi College of Arts and Science proudly convened SSEC Achievers Day 2K26 in the grand College Auditorium. The management, faculty, students, and distinguished guests gathered to celebrate exceptional academic ranks, national-level sports honours, and innovative collegiate hackathon awards. Merit certificates and prestigious institutional trophies were conferred on top achievers across all seven undergraduate departments.'
  },
  {
    id: 'feat-2',
    title: 'INVICTUS 2K26 – CULTURAL NIGHT',
    date: 'Apr 02, 2026',
    venue: 'College Open Air Amphitheatre',
    category: 'Cultural Gala',
    description: 'An electrifying extravaganza of music, dance, and creative talent featuring stellar student performances.',
    image: '/images/news/cultural_night.webp',
    fullStory: 'Invictus 2K26, the flagship annual cultural carnival of Sree Sakthi Elite Campus, brought the open-air amphitheatre alive with scintillating choreographies, classical fusion music, and vibrant theatrical displays. Over 800 students showcased their creative genius amidst energetic cheers and applause from alumni and faculty.'
  },
  {
    id: 'feat-3',
    title: 'INDIA MARATHON 2026 – 2ND EDITION',
    date: 'Nov 07, 2026',
    venue: 'Sree Sakthi Campus Grounds',
    category: 'Sports & Wellness',
    description: 'Over 1,200 runners united to advocate youth fitness, clean environment, and community health.',
    image: '/images/news/india_marathon.webp',
    fullStory: 'The 2nd Edition of the prestigious India Marathon 2026 was flagged off with immense enthusiasm from the Sree Sakthi Campus. Collegiate athletes, faculty members, and fitness enthusiasts from across the Coimbatore corridor completed the 10K and 5K runs promoting youth fitness, wellness, and environmental consciousness.'
  },
  {
    id: 'feat-4',
    title: 'SPONSOR FELICITATION CEREMONY',
    date: 'Nov 07, 2026',
    venue: 'Central Auditorium',
    category: 'Institutional Pride',
    description: 'Heartfelt appreciation and felicitation of our distinguished corporate sponsors and industry partners.',
    image: '/images/news/sponsor_felicitation.webp',
    fullStory: 'The Sree Sakthi Elite Campus leadership convened a gala felicitation ceremony honoring corporate sponsors, industry partners, and internship benefactors. Certificates of gratitude and mementos were presented in recognition of their continued support for student scholarships and campus placement programs.'
  }
];

export const UPCOMING_EVENTS: UpcomingEventItem[] = [
  {
    id: 'ev-1',
    month: 'APR',
    day: '02',
    title: 'SSEC Achievers Day 2K26',
    venue: 'College Auditorium',
    time: '10:00 AM – 1:30 PM',
    category: 'Academics & Honours',
    link: '/news-updates#event-1'
  },
  {
    id: 'ev-2',
    month: 'NOV',
    day: '07',
    title: 'Sakthi Star Night 2K26',
    venue: 'Open Air Amphitheatre',
    time: '5:30 PM – 9:30 PM',
    category: 'Cultural Extravaganza',
    link: '/news-updates#event-2'
  },
  {
    id: 'ev-3',
    month: 'NOV',
    day: '07',
    title: 'India Marathon 2026 (2nd Edition)',
    venue: 'Campus Sports Complex & Main Track',
    time: '6:00 AM – 9:00 AM',
    category: 'Marathon & Fitness',
    link: '/news-updates#event-3'
  }
];

export const LATEST_NEWS: LatestNewsItem[] = [
  {
    id: 'news-1',
    title: 'SSEC ACHIEVERS DAY 2K26',
    date: 'Apr 02, 2026',
    image: '/images/news/achievers_day.webp',
    category: 'Academics & Honours',
    excerpt: 'Grand felicitation ceremony celebrating student brilliance in academics, co-curriculars, and university ranks.',
    fullStory: 'Sree Sakthi College of Arts and Science held SSEC Achievers Day 2K26, honouring top rank holders, university gold medallists, and national sports achievers. Dignitaries lauded student dedication and presented prestigious academic excellence awards.'
  },
  {
    id: 'news-2',
    title: 'INVICTUS 2K26 – CULTURAL NIGHT',
    date: 'Apr 02, 2026',
    image: '/images/news/cultural_night.webp',
    category: 'Cultural Extravaganza',
    excerpt: 'A vibrant showcase of musical melodies, classical dances, and theatrical drama by elite campus students.',
    fullStory: 'Invictus 2K26 illuminated the campus with dynamic musical harmonies, classical bharatanatyam fusion, folk dance routines, and stage plays, celebrating cultural diversity and artistic talents.'
  },
  {
    id: 'news-3',
    title: 'INDIA MARATHON 2026 – 2ND EDITION',
    date: 'Nov 07, 2026',
    image: '/images/news/india_marathon.webp',
    category: 'Sports & Marathon',
    excerpt: 'Over 1,200 runners participated in the flagship marathon promoting fitness and healthy living.',
    fullStory: 'The 2nd Edition of India Marathon 2026 witnessed unprecedented participation across 10K and 5K runs. Runners received finisher medals, certificates, and refreshments courtesy of our patron sponsors.'
  },
  {
    id: 'news-4',
    title: 'SPONSOR FELICITATION CEREMONY',
    date: 'Nov 07, 2026',
    image: '/images/news/sponsor_felicitation.webp',
    category: 'Corporate Relations',
    excerpt: 'Recognizing corporate recruiters, visionary philanthropists, and scholarship sponsors.',
    fullStory: 'The college management formally honoured corporate sponsors, recruitment leads, and scholarship donors at the Sponsor Felicitation Ceremony, commending their tireless support for student career growth.'
  }
];

export const LATEST_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'Odd Semester Examination Schedule Released',
    date: 'March 2026',
    category: 'Examinations',
    isNew: true,
    link: '/news-updates#ann-1',
    details: 'The official timetable for the Odd Semester Autonomous Examinations (Theory and Practical) has been published on the student portal. Download the schedule and check your hall ticket clearance.'
  },
  {
    id: 'ann-2',
    title: 'Value Added Course Registration – Open Now',
    date: 'March 2026',
    category: 'Skill Courses',
    isNew: true,
    link: '/news-updates#ann-2',
    details: 'Registrations are open for industry-certified value-added courses in Python Full-Stack, Advanced Financial Modeling, Digital Marketing, and Cloud Computing. Enroll before the closing deadline.'
  },
  {
    id: 'ann-3',
    title: 'Parents–Teachers Meeting – Jan 28, 2026',
    date: 'Jan 28, 2026',
    category: 'Academic Review',
    isNew: false,
    link: '/news-updates#ann-3',
    details: 'The departmental Parents–Teachers Review Meeting will be conducted on Jan 28, 2026. Parents are cordially invited to interact with faculty advisors and discuss their ward’s academic performance.'
  }
];

