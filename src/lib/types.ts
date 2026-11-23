export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Examinations' | 'Events' | 'General';
  link?: string;
  isUrgent?: boolean;
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  shortCode: string;
  description: string;
  fullOverview: string;
  vision: string;
  mission: string[];
  image: string;
  headOfDepartment: {
    name: string;
    designation: string;
    qualification: string;
    message?: string;
  };
  programmesOffered: string[];
  keyHighlights: string[];
  laboratories: string[];
  careerProspects: string[];
  facultyMembers: Array<{
    name: string;
    designation: string;
    qualification: string;
    experience: string;
  }>;
}

export interface Programme {
  id: string;
  slug: string;
  name: string;
  degreeType: 'UG' | 'PG' | 'Doctoral';
  department: string;
  duration: string;
  eligibility: string;
  description: string;
  curriculumHighlights: string[];
  careerOutcomes: string[];
  intakeCapacity?: string;
  syllabusAvailable?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
  readTime: string;
}

export interface CollegeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Seminar';
  description: string;
  image: string;
  registrationOpen: boolean;
}

export interface StudentAchievement {
  id: string;
  title: string;
  recipient: string;
  department: string;
  award: string;
  eventOrOrg: string;
  year: string;
  description: string;
  image: string;
}

export interface Recruiter {
  id: string;
  name: string;
  category: string;
  logoText: string;
  logoBg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Library' | 'Sports' | 'Events';
  image: string;
  caption: string;
}

export interface AdmissionEnquiryInput {
  studentName: string;
  email: string;
  phone: string;
  programme: string;
  qualification: string;
  preferredContact: 'Phone' | 'Email' | 'WhatsApp';
  message?: string;
  agreeToPolicy: boolean;
}

export interface ContactEnquiryInput {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
