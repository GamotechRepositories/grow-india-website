export const auditApplicableCategories = [
  'CORPORATE',
  'MSME',
  'START-UP',
  'NGO',
  'TRUST',
  'INSTITUTION',
  'GOVERNMENT',
  'PSU',
  'PUBLIC SECTOR',
  'OTHER'
];

export const ratingScale = [
  {
    code: 'A',
    label: 'Fully Established',
    points: 4,
    description: 'System is formalized, documented, and consistently executed with regular oversight.',
    color: 'emerald'
  },
  {
    code: 'B',
    label: 'Partially Established',
    points: 3,
    description: 'Partially defined or informal; dependent on key individuals without complete documentation.',
    color: 'amber'
  },
  {
    code: 'C',
    label: 'Not Established',
    points: 2,
    description: 'Ad-hoc, unorganized, or absent; significant gap exposing the organization to operational risk.',
    color: 'red'
  },
  {
    code: 'D',
    label: 'Not Applicable',
    points: 1,
    description: 'Currently not relevant to the organization’s scale or nature of operations.',
    color: 'slate'
  }
];

export const auditSections = [
  {
    id: 1,
    number: '01',
    name: 'ORGANIZATION & GOVERNANCE',
    iconName: 'Building2',
    questions: [
      'Is the organization structure clearly defined?',
      'Are roles, responsibilities and reporting lines documented?'
    ],
    hint: 'Checks organizational hierarchy, delegation of authority (DoA), and structural clarity.'
  },
  {
    id: 2,
    number: '02',
    name: 'STRATEGY & MANAGEMENT',
    iconName: 'Compass',
    questions: [
      'Are objectives, targets and business/department plans formally defined?',
      'Is management performance reviewed periodically?'
    ],
    hint: 'Evaluates strategic clarity, quarterly goal alignment, and leadership review cadences.'
  },
  {
    id: 3,
    number: '03',
    name: 'FINANCE & ACCOUNTS',
    iconName: 'IndianRupee',
    questions: [
      'Are budgeting, approvals, financial controls and reconciliations properly established?',
      'Are financial/MIS reports timely and reliable?'
    ],
    hint: 'Assesses financial leak protection, approval thresholds, reconciliation, and cash-flow visibility.'
  },
  {
    id: 4,
    number: '04',
    name: 'HUMAN RESOURCES',
    iconName: 'Users',
    questions: [
      'Are job descriptions, KRAs/KPIs, attendance, performance appraisal and training systems documented?',
      'Are manpower gaps and employee-related risks reviewed?'
    ],
    hint: 'Reviews employee lifecycle, role clarity, appraisal transparency, and key-person attrition risks.'
  },
  {
    id: 5,
    number: '05',
    name: 'OPERATIONS / SERVICE DELIVERY',
    iconName: 'Cpu',
    questions: [
      'Are key operational processes documented through SOPs/workflows?',
      'Are TAT, productivity, quality and service performance monitored?'
    ],
    hint: 'Tests process repeatability, standard operating procedures, throughput, and error controls.'
  },
  {
    id: 6,
    number: '06',
    name: 'SALES, MARKETING & CUSTOMER MANAGEMENT',
    iconName: 'TrendingUp',
    questions: [
      'Are sales targets, lead/customer records and follow-up processes systematically managed?',
      'Are customer complaints, feedback and retention monitored?'
    ],
    hint: 'Checks CRM discipline, pipeline visibility, conversion tracking, and customer retention systems.'
  },
  {
    id: 7,
    number: '07',
    name: 'PROCUREMENT, PURCHASE & VENDOR MANAGEMENT',
    iconName: 'ShoppingCart',
    questions: [
      'Are vendor selection, purchase approvals, quotations and payment controls defined?',
      'Are vendor performance periodically evaluated?'
    ],
    hint: 'Evaluates PO controls, three-quote comparisons, supplier SLAs, and vendor dependence.'
  },
  {
    id: 8,
    number: '08',
    name: 'IT, DIGITAL & DATA',
    iconName: 'Laptop',
    questions: [
      'Are systems, access controls, backup, cybersecurity and data protection adequately managed?',
      'Is management information available through reliable MIS/dashboard systems?'
    ],
    hint: 'Verifies data safety, backup protocols, user access privilege controls, and digital dashboards.'
  },
  {
    id: 9,
    number: '09',
    name: 'LEGAL, COMPLIANCE & REGULATORY',
    iconName: 'Scale',
    questions: [
      'Is there a system to identify, track and monitor applicable legal/regulatory requirements?',
      'Are licences, registrations, filings, contracts and statutory compliances monitored?'
    ],
    hint: 'Ensures statutory registers, labour law filings, MCA/tax compliance, and contract safeguards.'
  },
  {
    id: 10,
    number: '10',
    name: 'RISK, INTERNAL CONTROL & VIGILANCE',
    iconName: 'ShieldAlert',
    questions: [
      'Are major operational, financial, legal, technology and fraud risks identified?',
      'Are internal controls, incident reporting and corrective actions reviewed?'
    ],
    hint: 'Measures enterprise risk registers, dual-check authorizations, and incident mitigation.'
  },
  {
    id: 11,
    number: '11',
    name: 'QUALITY, PERFORMANCE & CONTINUOUS IMPROVEMENT',
    iconName: 'Award',
    questions: [
      'Are KPIs/KRAs, quality indicators and improvement actions regularly reviewed?',
      'Are recurring errors, delays and process gaps analysed and corrected?'
    ],
    hint: 'Validates root cause analysis (RCA), defect prevention cadences, and continuous process upgrades.'
  },
  {
    id: 12,
    number: '12',
    name: 'BUSINESS CONTINUITY & MANAGEMENT INFORMATION',
    iconName: 'ShieldCheck',
    questions: [
      'Does the organization have contingency/business-continuity arrangements for critical activities?',
      'Does management receive timely information for decision-making?'
    ],
    hint: 'Assesses disaster recovery, operational succession, and executive decision-support cockpits.'
  }
];

export const overallHealthOptions = [
  {
    code: 'A',
    label: 'Good',
    subtitle: 'Healthy systems, clear processes, and robust governance with minor optimization opportunities.',
    badgeClass: 'text-emerald-700 bg-emerald-100 border-emerald-300'
  },
  {
    code: 'B',
    label: 'Average',
    subtitle: 'Functional operations but noticeable person-dependency, control gaps, or delayed reporting.',
    badgeClass: 'text-amber-700 bg-amber-100 border-amber-300'
  },
  {
    code: 'C',
    label: 'Needs Improvement',
    subtitle: 'High dependency on individuals, informal SOPs, and vulnerability to operational/compliance lapses.',
    badgeClass: 'text-orange-700 bg-orange-100 border-orange-300'
  },
  {
    code: 'D',
    label: 'Poor',
    subtitle: 'Critical systems missing, frequent bottlenecks, unmanaged risks, and urgent restructuring required.',
    badgeClass: 'text-rose-700 bg-rose-100 border-rose-300'
  }
];

export const calculateScore = (ratings = {}) => {
  let totalScore = 0;
  let answeredCount = 0;
  const totalQuestions = auditSections.length * 2; // 12 departments * 2 questions = 24 questions
  const maxScore = totalQuestions * 4; // 96 points

  auditSections.forEach((section) => {
    [1, 2].forEach((qNum) => {
      const key = `${section.id}_${qNum}`;
      const selected = ratings[key];
      if (selected) {
        answeredCount++;
        const item = ratingScale.find((r) => r.code === selected);
        if (item) {
          totalScore += item.points;
        }
      }
    });
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  return {
    score: totalScore,
    maxScore,
    answeredCount,
    totalQuestions,
    totalSections: auditSections.length,
    percentage
  };
};

export const getTopPriorityAreas = (ratings = {}) => {
  // Calculate average score for each department from its 2 questions
  const scoredSections = auditSections.map((sec) => {
    const q1Code = ratings[`${sec.id}_1`];
    const q2Code = ratings[`${sec.id}_2`];

    const q1Obj = ratingScale.find((r) => r.code === q1Code) || { points: 2, code: 'C', label: 'Not Established' };
    const q2Obj = ratingScale.find((r) => r.code === q2Code) || { points: 2, code: 'C', label: 'Not Established' };

    const avgPoints = (q1Obj.points + q2Obj.points) / 2;

    let dominantCode = 'C';
    if (avgPoints >= 3.5) dominantCode = 'A';
    else if (avgPoints >= 2.5) dominantCode = 'B';
    else if (avgPoints >= 1.5) dominantCode = 'C';
    else dominantCode = 'D';

    const dominantObj = ratingScale.find((r) => r.code === dominantCode) || ratingScale[2];

    return {
      id: sec.id,
      number: sec.number,
      name: sec.name,
      q1Code: q1Code || 'C',
      q2Code: q2Code || 'C',
      ratingCode: dominantCode,
      ratingLabel: dominantObj.label,
      points: avgPoints
    };
  });

  // Sort departments by points ascending (lowest scores = highest priority gaps)
  scoredSections.sort((a, b) => a.points - b.points);

  return scoredSections.slice(0, 5);
};

export const getHealthDiagnosis = (score) => {
  // Score out of 96 points (24 questions * 4 max points)
  if (score >= 77) {
    return {
      level: 'Systems-Driven & High Maturity',
      color: 'emerald',
      summary:
        'Your organization exhibits strong process adherence and governance structures across all departments. GROW can partner with you for advanced MIS dashboard automation, institutional scaling manuals, and board-level risk oversight.',
      recommendation: 'Strengthen continuous improvement and prepare systems for national or multi-unit expansion.'
    };
  } else if (score >= 53) {
    return {
      level: 'Moderate Maturity (Person-Dependency Gaps)',
      color: 'amber',
      summary:
        'Your organization has functional operations but experiences moderate person-dependencies and department-level control gaps. Standardizing SOPs and Delegation of Authority (DoA) matrices will prevent revenue leakage and founder burnout.',
      recommendation: 'Formalize department-level SOPs, RACI charts, and monthly KPI management dashboards.'
    };
  } else {
    return {
      level: 'Critical Vulnerability & High Risk',
      color: 'red',
      summary:
        'Your organization operates with heavy reliance on individuals, informal controls, and elevated compliance vulnerability across multiple departments. Immediate structured intervention via GROW Shield, GROW Engine, and core governance frameworks is recommended.',
      recommendation: 'Urgent turnaround needed: establish baseline statutory registers, financial controls, and operational workflows.'
    };
  }
};
