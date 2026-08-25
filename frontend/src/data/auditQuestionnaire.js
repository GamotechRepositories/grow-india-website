export const auditQuestionnaireMeta = {
  title: 'GROW FREE AUDIT QUESTIONNAIRE',
  subtitle: 'ORGANIZATIONAL HEALTH CHECK',
  tagline: 'A SHORT SELF-ASSESSMENT TOOL FOR ORGANIZATIONS',
  purpose: 'Identify Strengths. Detect Gaps. Improve Systems. Drive Growth.',
  targetSectors: [
    'CORPORATE',
    'MSME',
    'START-UP',
    'NGO',
    'TRUST',
    'INSTITUTION',
    'GOVERNMENT',
    'PSU',
    'PUBLIC SECTOR'
  ],
  instructions:
    'Please respond to each of the following by selecting the option that best describes the current status in your organization.',
  ratingOptions: [
    { code: 'A', label: 'Fully Established', description: 'Institutionalized & Documented', points: 4 },
    { code: 'B', label: 'Partially Established', description: 'Work in progress / Partial', points: 3 },
    { code: 'C', label: 'Not Established', description: 'Informal / Ad-hoc / Gaps', points: 1 },
    { code: 'D', label: 'Not Applicable', description: 'Not relevant to current stage', points: 0 }
  ],
  overallRatingOptions: [
    { code: 'A', label: 'Good' },
    { code: 'B', label: 'Average' },
    { code: 'C', label: 'Needs Improvement' },
    { code: 'D', label: 'Poor' }
  ]
};

export const auditSections = [
  {
    no: 1,
    id: 'gov',
    area: 'ORGANIZATION & GOVERNANCE',
    icon: 'Landmark',
    questions: [
      '1. Is the organization structure clearly defined?',
      '2. Are roles, responsibilities and reporting lines documented?'
    ]
  },
  {
    no: 2,
    id: 'strat',
    area: 'STRATEGY & MANAGEMENT',
    icon: 'Target',
    questions: [
      '1. Are objectives, targets and business/department plans formally defined?',
      '2. Is management performance reviewed periodically?'
    ]
  },
  {
    no: 3,
    id: 'fin',
    area: 'FINANCE & ACCOUNTS',
    icon: 'IndianRupee',
    questions: [
      '1. Are budgeting, approvals, financial controls and reconciliations properly established?',
      '2. Are financial/MIS reports timely and reliable?'
    ]
  },
  {
    no: 4,
    id: 'hr',
    area: 'HUMAN RESOURCES',
    icon: 'Users',
    questions: [
      '1. Are job descriptions, KRAs/KPIs, attendance, performance appraisal and training systems documented?',
      '2. Are manpower gaps and employee-related risks reviewed?'
    ]
  },
  {
    no: 5,
    id: 'ops',
    area: 'OPERATIONS / SERVICE DELIVERY',
    icon: 'Cpu',
    questions: [
      '1. Are key operational processes documented through SOPs/workflows?',
      '2. Are TAT, productivity, quality and service performance monitored?'
    ]
  },
  {
    no: 6,
    id: 'sales',
    area: 'SALES, MARKETING & CUSTOMER MANAGEMENT',
    icon: 'TrendingUp',
    questions: [
      '1. Are sales targets, lead/customer records and follow-up processes systematically managed?',
      '2. Are customer complaints, feedback and retention monitored?'
    ]
  },
  {
    no: 7,
    id: 'proc',
    area: 'PROCUREMENT, PURCHASE & VENDOR MANAGEMENT',
    icon: 'ShoppingCart',
    questions: [
      '1. Are vendor selection, purchase approvals, quotations and payment controls defined?',
      '2. Is vendor performance periodically evaluated?'
    ]
  },
  {
    no: 8,
    id: 'it',
    area: 'IT, DIGITAL & DATA',
    icon: 'Monitor',
    questions: [
      '1. Are systems, access controls, backups, cybersecurity and data protection adequately managed?',
      '2. Is management information available through reliable MIS/dashboard systems?'
    ]
  },
  {
    no: 9,
    id: 'legal',
    area: 'LEGAL, COMPLIANCE & REGULATORY',
    icon: 'Scale',
    questions: [
      '1. Is there a system to identify, track and monitor applicable legal/regulatory requirements?',
      '2. Are licences, registrations, filings, contracts and statutory compliances monitored?'
    ]
  },
  {
    no: 10,
    id: 'risk',
    area: 'RISK, INTERNAL CONTROL & VIGILANCE',
    icon: 'ShieldAlert',
    questions: [
      '1. Are major operational, financial, legal, technology and fraud risks identified?',
      '2. Are internal controls, incident reporting and corrective actions reviewed?'
    ]
  },
  {
    no: 11,
    id: 'quality',
    area: 'QUALITY, PERFORMANCE & CONTINUOUS IMPROVEMENT',
    icon: 'Award',
    questions: [
      '1. Are KPIs/KRAs, quality indicators and improvement actions regularly reviewed?',
      '2. Are recurring errors, delays and process gaps analysed and corrected?'
    ]
  },
  {
    no: 12,
    id: 'bcp',
    area: 'BUSINESS CONTINUITY & MANAGEMENT INFORMATION',
    icon: 'CheckCircle2',
    questions: [
      '1. Does the organization have contingency/business-continuity arrangements for critical activities?',
      '2. Does management receive timely information for decision-making?'
    ]
  }
];
