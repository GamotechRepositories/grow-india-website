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
      },
      {
        label: 'Clients & Partners',
        subtitle: 'Corporate Spectrum & Tech Ecosystem',
        href: '/clients-and-partners',
        icon: 'Handshake'
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
        label: 'Free Business Health Audit',
        subtitle: 'Official 12-Area Questionnaire & Health Check',
        href: '/audit',
        icon: 'ShieldCheck'
      },
      {
        label: 'Video Insights & Reels',
        subtitle: '20+ Strategic Video Ads & Educational Shorts',
        href: '/reels',
        icon: 'Film'
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
  { label: 'Video Reels', href: '/reels' },
  { label: 'Contact', href: '/contact' }
];

export const footerLinks = {
  company: [
    { label: 'Institutional Profile', href: '/about' },
    { label: 'Purpose, Vision & Mission', href: '/about' },
    { label: 'Strategic Video Reels', href: '/reels' },
    { label: '10 Ethical Principles', href: '/about' },
    { label: 'Corporate Social Responsibility', href: '/about' },
    { label: 'Clients & Strategic Partners', href: '/clients-and-partners' },
    { label: 'Contact & Advisory', href: '/contact' }
  ],
  services: [
    { label: 'GROW Shield (Compliance & Risk)', href: '/services/grow-shield' },
    { label: 'GROW Engine (Process & SOPs)', href: '/services/grow-engine' },
    { label: 'GROW Consulting (Strategy)', href: '/services/grow-consulting' },
    { label: 'GROW Systems (KPIs & MIS)', href: '/services/grow-systems' },
    { label: 'GROW Marketing (Branding & Leads)', href: '/services/grow-marketing' },
    { label: 'GROW Scale (Expansion Models)', href: '/services/grow-scale' },
    { label: 'GROW Legal (Contracts & Docs)', href: '/services/grow-legal' }
  ],
  practiceAreas: [
    { label: 'Corporate & MSME Practice', href: '/corporate-consulting' },
    { label: 'Government & Public Sector', href: '/government-consulting' },
    { label: 'Industry Sectors & Frameworks', href: '/industries' },
    { label: 'Video Knowledge Hub', href: '/reels' },
    { label: 'Consulting Methodology', href: '/methodology' },
    { label: '360° Systems Diagnostic Audit', href: '/audit' },
    { label: 'Executive Training Programs', href: '/training' }
  ]
};

export default { mainNavLinks, footerLinks };
