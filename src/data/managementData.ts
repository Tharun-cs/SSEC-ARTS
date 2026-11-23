export interface ManagementMember {
  id: string;
  designation: string;
  name: string;
  image: string;
  iconType: 'leadership' | 'handshake' | 'graduation' | 'book' | 'team' | 'trustee' | 'shield';
  roleDescription?: string;
}

export const MANAGEMENT_MEMBERS: ManagementMember[] = [
  {
    id: 'chairman',
    designation: 'Chairman',
    name: 'Shri. N. Dharmalingam',
    image: '/images/management/chairman.webp',
    iconType: 'leadership',
    roleDescription: 'Visionary founder guiding the institution towards academic excellence and state-of-the-art infrastructure.'
  },
  {
    id: 'correspondent',
    designation: 'Correspondent',
    name: 'Dr. S. Karthikeyan',
    image: '/images/management/correspondent.webp',
    iconType: 'handshake',
    roleDescription: 'Driving strategic partnerships, academic innovations, and global industry connect.'
  },
  {
    id: 'secretary',
    designation: 'Secretary',
    name: 'Smt. K. Punithavalli',
    image: '/images/management/secretary.webp',
    iconType: 'graduation',
    roleDescription: 'Championing holistic student development, ethical values, and inclusive campus culture.'
  },
  {
    id: 'joint-correspondent',
    designation: 'Joint Correspondent',
    name: 'Mr. K. Akileshwaran',
    image: '/images/management/joint-correspondent.webp',
    iconType: 'book',
    roleDescription: 'Fostering modern technology adoption, youth empowerment, and research initiatives.'
  },
  {
    id: 'joint-secretary',
    designation: 'Joint Secretary',
    name: 'Ms. V. Vidhya',
    image: '/images/management/joint-secretary.webp',
    iconType: 'team',
    roleDescription: 'Empowering future-ready graduates through experiential learning and community leadership.'
  },
  {
    id: 'trustee-murugan',
    designation: 'Trustee',
    name: 'Shri. S. Murugan',
    image: '/images/management/trustee-murugan.webp',
    iconType: 'trustee',
    roleDescription: 'Providing strategic counsel, community development, and institutional governance.'
  },
  {
    id: 'trustee-savithri',
    designation: 'Trustee',
    name: 'Smt. D. Savithri',
    image: '/images/management/trustee-savithri.webp',
    iconType: 'shield',
    roleDescription: 'Guiding philanthropic outreach, student welfare, and value-based institutional ethics.'
  }
];

