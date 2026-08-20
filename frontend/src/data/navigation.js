import { contactDetails } from './contact';

export const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    description: 'The 7 Core GROW Practice Divisions',
    children: [
      {
        code: 'GROW SHIELD',
        label: 'GROW Shield',
        subtitle: 'Legal, Compliance & Risk Protection',
        href: '/services/grow-shield',
        icon: 'ShieldCheck'
      },
      {
        code: 'GROW ENGINE',
        label: 'GROW Engine',
        subtitle: 'SOPs, Systems & Process Structuring',
        href: '/services/grow-engine',
        icon: 'Cpu'
      },
      {
        code: 'GROW CONSULTING',
        label: 'GROW Consulting',
        subtitle: 'Business Strategy & Growth Advisory',
        href: '/services/grow-consulting',
        icon: 'Briefcase'
      },
      {
        code: 'GROW SYSTEMS',
        label: 'GROW Systems',
        subtitle: 'KPI, MIS & Performance Management',
        href: '/services/grow-systems',
        icon: 'Layers'
      },
      {
        code: 'GROW MARKETING',
        label: 'GROW Marketing',
        subtitle: 'Branding, Advertising & Lead Generation',
        href: '/services/grow-marketing',
        icon: 'TrendingUp'
      },
      {
        code: 'GROW SCALE',
        label: 'GROW Scale',
        subtitle: 'Business Expansion & Revenue Systems',
        href: '/services/grow-scale',
        icon: 'BarChart3'
      },
      {
        code: 'GROW LEGAL',
        label: 'GROW Legal',
        subtitle: 'Agreements & Documentation Support',
        href: '/services/grow-legal',
        icon: 'Scale'
      }
    ]
  },
  {
    label: 'Practices',
    href: '/corporate-consulting',
    description: 'Corporate & Public Sector Consulting',
    children: [
      {
        label: 'Corporate Consulting',
        subtitle: 'Promoter-led, MSMEs & Growth Enterprises',
        href: '/corporate-consulting',
        icon: 'Building2'
      },
      {
        label: 'Government Consulting',
        subtitle: 'Administrative Modernization & Public Sector',
        href: '/government-consulting',
        icon: 'Landmark'
      },
      {
        label: 'Industry Practices',
        subtitle: '8 Sector Frameworks Across India',
        href: '/industries',
        icon: 'Factory'
      }
    ]
  },
  {
    label: 'Approach & Audit',
    href: '/methodology',
    description: 'Frameworks, Audits & Partnerships',
    children: [
      {
        label: 'GROW Methodology',
        subtitle: '6-Stage Operating Model & 9-Phase GRC',
        href: '/methodology',
        icon: 'Workflow'
      },
      {
        label: 'Systems & Compliance Audit',
        subtitle: 'Comprehensive 360° Diagnostic Health Check',
        href: '/audit',
        icon: 'ShieldCheck'
      },
      {
        label: 'Executive Training',
        subtitle: 'Institutional Capacity Building & Workshops',
        href: '/training',
        icon: 'GraduationCap'
      },
      {
        label: 'Strategic Partners',
        subtitle: 'Gamotech Solutions & Digital Buddies',
        href: '/partners',
        icon: 'Handshake'
      }
    ]
  },
  { label: 'Contact', href: '/contact' }
];

export const footerLinks = {
  company: [
    { label: 'About GROW India', href: '/about' },
    { label: 'Core Purpose & Philosophy', href: '/about#purpose' },
    { label: 'Ethics & Integrity', href: '/about#ethics' },
    { label: 'Our Methodology', href: '/methodology' },
    { label: 'Strategic Partners', href: '/partners' },
    { label: 'Contact & Advisory', href: '/contact' }
  ],
  services: [
    { label: 'GROW Shield (Compliance & Risk)', href: '/services/grow-shield' },
    { label: 'GROW Engine (SOPs & Processes)', href: '/services/grow-engine' },
    { label: 'GROW Consulting (Strategy)', href: '/services/grow-consulting' },
    { label: 'GROW Systems (KPI & MIS)', href: '/services/grow-systems' },
    { label: 'GROW Marketing (Branding & Leads)', href: '/services/grow-marketing' },
    { label: 'GROW Scale (Business Expansion)', href: '/services/grow-scale' },
    { label: 'GROW Legal (Documentation Support)', href: '/services/grow-legal' }
  ],
  practiceAreas: [
    { label: 'Corporate Consulting Practice', href: '/corporate-consulting' },
    { label: 'Government Consulting Practice', href: '/government-consulting' },
    { label: 'Industry Sector Groups', href: '/industries' },
    { label: 'Systems & Compliance Audit', href: '/audit' },
    { label: 'Executive Training Programs', href: '/training' },
    { label: 'Engagement Models', href: '/contact' }
  ]
};

export const quickContact = {
  phone: contactDetails.phone,
  phoneDisplay: contactDetails.phoneDisplay,
  email: contactDetails.email,
  whatsapp: contactDetails.whatsapp,
  whatsappLink: contactDetails.whatsappLink,
  udyam: contactDetails.udyamRegistration,
  geographicScope: contactDetails.geographicScope
};

export default mainNavLinks;
