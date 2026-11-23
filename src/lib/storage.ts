import { Announcement, NewsItem, CollegeEvent } from '@/lib/types';
import { ANNOUNCEMENTS as initialAnnouncements, NEWS_ITEMS as initialNews, COLLEGE_EVENTS as initialEvents } from '@/data/collegeData';

export interface StoredEnquiry {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  programme: string;
  qualification: string;
  preferredContact: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Closed';
}

export interface StoredContact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

// In-memory global store to provide live working CRUD even before Supabase DB credentials are set
const globalState = {
  enquiries: [
    {
      id: 'enq-001',
      studentName: 'A. Karthi',
      email: 'karthi.a@example.com',
      phone: '9842154321',
      programme: 'Bachelor of Computer Applications (BCA)',
      qualification: 'HSC (+2) Computer Science (88%)',
      preferredContact: 'Phone',
      message: 'Interested in knowing college bus routes from Tirupur and scholarship details.',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: 'New' as const
    },
    {
      id: 'enq-002',
      studentName: 'S. Priyadharshini',
      email: 'priya.s@example.com',
      phone: '9789012345',
      programme: 'B.Com (Computer Applications)',
      qualification: 'HSC (+2) Commerce (92%)',
      preferredContact: 'WhatsApp',
      message: 'Seeking admission information for B.Com CA and hostel facilities for girls.',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      status: 'Contacted' as const
    }
  ] as StoredEnquiry[],
  contacts: [] as StoredContact[],
  announcements: [...initialAnnouncements],
  news: [...initialNews],
  events: [...initialEvents]
};

export function getEnquiries() {
  return globalState.enquiries;
}

export function addEnquiry(enquiry: Omit<StoredEnquiry, 'id' | 'createdAt' | 'status'>) {
  const newRecord: StoredEnquiry = {
    ...enquiry,
    id: `enq-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
    status: 'New'
  };
  globalState.enquiries.unshift(newRecord);
  return newRecord;
}

export function updateEnquiryStatus(id: string, status: StoredEnquiry['status']) {
  const record = globalState.enquiries.find((e) => e.id === id);
  if (record) {
    record.status = status;
    return true;
  }
  return false;
}

export function deleteEnquiry(id: string) {
  const index = globalState.enquiries.findIndex((e) => e.id === id);
  if (index !== -1) {
    globalState.enquiries.splice(index, 1);
    return true;
  }
  return false;
}

export function addContactMessage(contact: Omit<StoredContact, 'id' | 'createdAt'>) {
  const newContact: StoredContact = {
    ...contact,
    id: `cnt-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString()
  };
  globalState.contacts.unshift(newContact);
  return newContact;
}

export function getContactMessages() {
  return globalState.contacts;
}

export function getStoredAnnouncements() {
  return globalState.announcements;
}

export function addStoredAnnouncement(announcement: Announcement) {
  globalState.announcements.unshift(announcement);
  return globalState.announcements;
}

export function deleteStoredAnnouncement(id: string) {
  const index = globalState.announcements.findIndex((a) => a.id === id);
  if (index !== -1) {
    globalState.announcements.splice(index, 1);
    return true;
  }
  return false;
}
