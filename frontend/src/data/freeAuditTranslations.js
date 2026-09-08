// Multilingual translations for GROW Free Corporate Health Check-Up Audit Form
// Supported Languages: English (en), Marathi (mr), Hindi (hi)

export const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🚩' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' }
];

export const auditTranslations = {
  en: {
    toolbar: {
      badge: 'Interactive Checkbox Audit Matrix',
      fillDemo: 'Fill Demo',
      reset: 'Reset',
      questionsRated: 'Questions Rated',
      langSelect: 'Language'
    },
    topRibbon: '★ 100% FREE CORPORATE HEALTH CHECK-UP ★',
    header: {
      companyName: 'GROW',
      fullName: 'Govind Raadhaa Organizational Wonders',
      tagline: 'Business Growth & Systems Partner India • GRC • Transformation • SOP • KRA',
      badge: '★ Free Corporate Health Check-Up ★',
      title: 'GROW Free Audit Questionnaire',
      subtitle: 'Organizational Health Check (2 Questions Per Department)',
      moto: 'Identify Strengths • Detect Gaps • Improve Systems • Drive Growth'
    },
    orgDetails: {
      title: 'ORGANIZATION DETAILS & BASIC INFORMATION',
      orgName: 'Organization Name',
      orgNamePlaceholder: 'Official enterprise name',
      address: 'Address',
      addressPlaceholder: 'Street / Industrial Area',
      city: 'City',
      cityPlaceholder: 'e.g. Pune',
      state: 'State',
      statePlaceholder: 'e.g. Maharashtra',
      yearEst: 'Year Est.',
      yearEstPlaceholder: 'e.g. 2016',
      employees: 'Employees',
      turnover: 'Turnover',
      natureOfOrg: 'Nature of Org.',
      contactPerson: 'Contact Person',
      contactPersonPlaceholder: 'Full Name',
      designation: 'Designation',
      designationPlaceholder: 'Founder / Director / CEO / Head',
      email: 'Email',
      emailPlaceholder: 'director@company.com',
      mobile: 'Mobile / Phone',
      mobilePlaceholder: '+91 98765 43210'
    },
    instructions: {
      title: 'QUESTIONNAIRE INSTRUCTIONS',
      text: 'For each department, there are <strong>2 specific questions</strong>. Select the checkbox (✓) for each individual question to assess your system maturity.'
    },
    ratingScale: [
      { code: 'A', label: 'Fully Established', desc: 'System is formalized, documented, and consistently executed with regular oversight.' },
      { code: 'B', label: 'Partially Established', desc: 'Partially defined or informal; dependent on key individuals without complete documentation.' },
      { code: 'C', label: 'Not Established', desc: 'Ad-hoc, unorganized, or absent; significant gap exposing the organization to operational risk.' },
      { code: 'D', label: 'Not Applicable', desc: 'Currently not relevant to the organization’s scale or nature of operations.' }
    ],
    tableHeaders: {
      no: 'NO.',
      function: 'FUNCTION / DEPARTMENT',
      questions: 'DEPARTMENT QUESTIONS (2 QUESTIONS EACH)',
      checkboxes: 'RATING CHECKBOXES ( ✓ )',
      remarks: 'REMARKS / COMMENTS',
      remarksPlaceholder: 'Optional remarks / gap...'
    },
    sections: {
      1: {
        name: 'ORGANIZATION & GOVERNANCE',
        hint: 'Checks organizational hierarchy, delegation of authority (DoA), and structural clarity.',
        questions: [
          'Is the organization structure clearly defined?',
          'Are roles, responsibilities and reporting lines documented?'
        ]
      },
      2: {
        name: 'STRATEGY & MANAGEMENT',
        hint: 'Evaluates strategic clarity, quarterly goal alignment, and leadership review cadences.',
        questions: [
          'Are objectives, targets and business/department plans formally defined?',
          'Is management performance reviewed periodically?'
        ]
      },
      3: {
        name: 'FINANCE & ACCOUNTS',
        hint: 'Assesses financial leak protection, approval thresholds, reconciliation, and cash-flow visibility.',
        questions: [
          'Are budgeting, approvals, financial controls and reconciliations properly established?',
          'Are financial/MIS reports timely and reliable?'
        ]
      },
      4: {
        name: 'HUMAN RESOURCES',
        hint: 'Reviews employee lifecycle, role clarity, appraisal transparency, and key-person attrition risks.',
        questions: [
          'Are job descriptions, KRAs/KPIs, attendance, performance appraisal and training systems documented?',
          'Are manpower gaps and employee-related risks reviewed?'
        ]
      },
      5: {
        name: 'OPERATIONS / SERVICE DELIVERY',
        hint: 'Tests process repeatability, standard operating procedures, throughput, and error controls.',
        questions: [
          'Are key operational processes documented through SOPs/workflows?',
          'Are TAT, productivity, quality and service performance monitored?'
        ]
      },
      6: {
        name: 'SALES, MARKETING & CUSTOMER MANAGEMENT',
        hint: 'Checks CRM discipline, pipeline visibility, conversion tracking, and customer retention systems.',
        questions: [
          'Are sales targets, lead/customer records and follow-up processes systematically managed?',
          'Are customer complaints, feedback and retention monitored?'
        ]
      },
      7: {
        name: 'PROCUREMENT, PURCHASE & VENDOR MANAGEMENT',
        hint: 'Evaluates PO controls, three-quote comparisons, supplier SLAs, and vendor dependence.',
        questions: [
          'Are vendor selection, purchase approvals, quotations and payment controls defined?',
          'Are vendor performance periodically evaluated?'
        ]
      },
      8: {
        name: 'IT, DIGITAL & DATA',
        hint: 'Verifies data safety, backup protocols, user access privilege controls, and digital dashboards.',
        questions: [
          'Are systems, access controls, backup, cybersecurity and data protection adequately managed?',
          'Is management information available through reliable MIS/dashboard systems?'
        ]
      },
      9: {
        name: 'LEGAL, COMPLIANCE & REGULATORY',
        hint: 'Ensures statutory registers, labour law filings, MCA/tax compliance, and contract safeguards.',
        questions: [
          'Is there a system to identify, track and monitor applicable legal/regulatory requirements?',
          'Are licences, registrations, filings, contracts and statutory compliances monitored?'
        ]
      },
      10: {
        name: 'RISK, INTERNAL CONTROL & VIGILANCE',
        hint: 'Measures enterprise risk registers, dual-check authorizations, and incident mitigation.',
        questions: [
          'Are major operational, financial, legal, technology and fraud risks identified?',
          'Are internal controls, incident reporting and corrective actions reviewed?'
        ]
      },
      11: {
        name: 'QUALITY, PERFORMANCE & CONTINUOUS IMPROVEMENT',
        hint: 'Validates root cause analysis (RCA), defect prevention cadences, and continuous process upgrades.',
        questions: [
          'Are KPIs/KRAs, quality indicators and improvement actions regularly reviewed?',
          'Are recurring errors, delays and process gaps analysed and corrected?'
        ]
      },
      12: {
        name: 'BUSINESS CONTINUITY & MANAGEMENT INFORMATION',
        hint: 'Assesses disaster recovery, operational succession, and executive decision-support cockpits.',
        questions: [
          'Does the organization have contingency/business-continuity arrangements for critical activities?',
          'Does management receive timely information for decision-making?'
        ]
      }
    },
    selfAssessment: {
      title: 'OVERALL SELF-ASSESSMENT (OPTIONAL)',
      question: 'How would you rate your overall organizational health?',
      options: [
        { code: 'A', label: 'Good', subtitle: 'Healthy systems, clear processes, and robust governance with minor optimization opportunities.' },
        { code: 'B', label: 'Average', subtitle: 'Functional operations but noticeable person-dependency, control gaps, or delayed reporting.' },
        { code: 'C', label: 'Needs Improvement', subtitle: 'High dependency on individuals, informal SOPs, and vulnerability to operational/compliance lapses.' },
        { code: 'D', label: 'Poor', subtitle: 'Critical systems missing, frequent bottlenecks, unmanaged risks, and urgent restructuring required.' }
      ]
    },
    growUseOnly: {
      title: 'FOR GROW USE ONLY',
      score: 'SCORE',
      top5Title: 'Top 5 Priority Intervention Areas:'
    },
    footerInfo: {
      returnTitle: '✉ PLEASE RETURN THE COMPLETED FORM TO US',
      returnDesc: 'We will analyze and share a summary report with key observations and improvement suggestions.',
      commitmentTitle: 'OUR COMMITMENT',
      commitmentDesc: 'Your responses are confidential and will be used only for improvement recommendations.',
      thankYouTitle: 'THANK YOU',
      thankYouDesc: 'for partnering with GROW in building stronger systems, better controls and sustainable growth.'
    },
    submitCard: {
      tag: '1-Click Submission & Instant PDF',
      title: 'Submit Corporate Health Check-Up to GROW',
      desc: 'Downloads your official 2-page PDF certificate and directly opens WhatsApp (+91 94057 51665) with your full responses.',
      buttonReady: 'Download PDF & Submit on WhatsApp (+91 94057 51665)',
      buttonLoading: 'Generating PDF & Opening WhatsApp...'
    },
    autoGuide: {
      tag: 'PDF Report Downloaded',
      title: 'Opening WhatsApp...',
      subtitle: 'Your official 2-page PDF report has been downloaded.',
      step1: 'WhatsApp (+91 94057 51665) is opening automatically',
      step2: 'In WhatsApp chat, click <strong>📎 (Attach / Paperclip)</strong> to share the downloaded PDF file.'
    }
  },

  mr: {
    toolbar: {
      badge: 'इंटरअॅक्टिव्ह चेकबॉक्स ऑडिट मॅट्रिक्स',
      fillDemo: 'डेमो भरा',
      reset: 'रीसेट',
      questionsRated: 'प्रश्नांचे मूल्यांकन पूर्ण',
      langSelect: 'भाषा'
    },
    topRibbon: '★ १००% मोफत कॉर्पोरेट आरोग्य तपासणी (FREE AUDIT) ★',
    header: {
      companyName: 'GROW',
      fullName: 'गोविंद राधा ऑर्गनायझेशनल वंडर्स (GROW)',
      tagline: 'बिझनेस ग्रोथ आणि सिस्टिम पार्टनर भारत • GRC • ट्रान्सफॉर्मेशन • SOP • KRA',
      badge: '★ मोफत कॉर्पोरेट हेल्थ चेक-अप ★',
      title: 'GROW मोफत बिझनेस ऑडिट प्रश्नावली',
      subtitle: 'संस्थात्मक आरोग्य तपासणी (प्रत्येक विभागासाठी २ प्रश्न)',
      moto: 'सामर्थ्य ओळखा • उणिवा शोधा • कार्यप्रणाली सुधारा • व्यवसाय वाढवा'
    },
    orgDetails: {
      title: 'संस्थेचा तपशील आणि मूलभूत माहिती',
      orgName: 'संस्थेचे / कंपनीचे नाव',
      orgNamePlaceholder: 'अधिकृत कंपनी / संस्थेचे नाव',
      address: 'पत्ता',
      addressPlaceholder: 'रस्ता / एमआयडीसी / औद्योगिक क्षेत्र',
      city: 'शहर',
      cityPlaceholder: 'उदा. पुणे / मुंबई',
      state: 'राज्य',
      statePlaceholder: 'उदा. महाराष्ट्र',
      yearEst: 'स्थापना वर्ष',
      yearEstPlaceholder: 'उदा. २०१६',
      employees: 'कर्मचारी संख्या',
      turnover: 'वार्षिक उलाढाल (Turnover)',
      natureOfOrg: 'संस्थेचे स्वरूप (Category)',
      contactPerson: 'संपर्क व्यक्तीचे नाव',
      contactPersonPlaceholder: 'पूर्ण नाव',
      designation: 'पद / हुद्दा (Designation)',
      designationPlaceholder: 'संस्थापक / संचालक / CEO / व्यवस्थापक',
      email: 'ईमेल पत्ता',
      emailPlaceholder: 'director@company.com',
      mobile: 'मोबाईल / व्हॉट्सॲप नंबर',
      mobilePlaceholder: '+91 98765 43210'
    },
    instructions: {
      title: 'प्रश्नावली मार्गदर्शक सूचना',
      text: 'प्रत्येक विभागासाठी <strong>२ विशिष्ट प्रश्न</strong> आहेत. तुमच्या कंपनीच्या कार्यप्रणालीच्या सद्यस्थितीनुसार योग्य चेकबॉक्स (✓) निवडा.'
    },
    ratingScale: [
      { code: 'A', label: 'पूर्णपणे स्थापित (Fully Established)', desc: 'प्रणाली औपचारिक, दस्तऐवजीकरण केलेली आणि नियमित देखरेखीसह सातत्याने राबवली जाते.' },
      { code: 'B', label: 'अंशतः स्थापित (Partially Established)', desc: 'अंशतः परिभाषित किंवा अनौपचारिक; संपूर्ण दस्तऐवजीकरणाशिवाय प्रमुख व्यक्तींवर अवलंबून.' },
      { code: 'C', label: 'स्थापित नाही (Not Established)', desc: 'अनियोजित किंवा अनुपस्थित; संस्थेला ऑपरेशनल जोखीम निर्माण करणारी मोठी उणीव.' },
      { code: 'D', label: 'लागू नाही (Not Applicable)', desc: 'सध्या संस्थेच्या कामकाजाच्या स्वरूपाला किंवा प्रमाणाला लागू नाही.' }
    ],
    tableHeaders: {
      no: 'क्र.',
      function: 'विभाग / कार्यक्षेत्र (DEPARTMENT)',
      questions: 'विभागाचे महत्त्वाचे प्रश्न (प्रत्येकी २ प्रश्न)',
      checkboxes: 'रेटिंग चेकबॉक्स ( ✓ )',
      remarks: 'शेरा / टिप्पणी (REMARKS)',
      remarksPlaceholder: 'काही त्रुटी किंवा टीप लिहा...'
    },
    sections: {
      1: {
        name: 'संस्था आणि कॉर्पोरेट प्रशासन (ORGANIZATION & GOVERNANCE)',
        hint: 'संस्थेची रचना, अधिकार प्रदान (Delegation of Authority) आणि स्ट्रक्चरल स्पष्टता तपासते.',
        questions: [
          'संस्थेची रचना (Organization Structure) स्पष्टपणे परिभाषित आहे का?',
          'भूमिका, जबाबदाऱ्या (Roles & Responsibilities) आणि रिपोर्टिंग लाईन्स दस्तऐवजीकरण केलेल्या आहेत का?'
        ]
      },
      2: {
        name: 'रणनीती आणि व्यवसाय व्यवस्थापन (STRATEGY & MANAGEMENT)',
        hint: 'रणनीतिक स्पष्टता, उद्दिष्टे आणि नेतृत्व आढावा बैठकांचे मूल्यांकन करते.',
        questions: [
          'उद्दिष्टे, लक्ष्ये आणि व्यवसाय/विभाग योजना औपचारिकपणे निश्चित केल्या आहेत का?',
          'व्यवस्थापनाच्या कामगिरीचा वेळोवेळी आढावा घेतला जातो का?'
        ]
      },
      3: {
        name: 'वित्त आणि लेखा (FINANCE & ACCOUNTS)',
        hint: 'आर्थिक गळती नियंत्रण, मंजुरी मर्यादा, बँक जुळवणी आणि रोख प्रवाह पारदर्शकता तपासते.',
        questions: [
          'बजेटिंग, मंजुरी, आर्थिक नियंत्रणे आणि जुळवणी (Reconciliation) योग्यरित्या स्थापित आहेत का?',
          'आर्थिक/MIS अहवाल वेळेवर आणि विश्वासार्ह मिळतात का?'
        ]
      },
      4: {
        name: 'मानवी संसाधन (HUMAN RESOURCES - HR)',
        hint: 'कर्मचारी जीवनचक्र, भूमिका स्पष्टता, कामगिरी मूल्यमापन आणि कर्मचाऱ्यांची जोखीम तपासते.',
        questions: [
          'जॉब डिस्क्रिप्शन्स, KRA/KPI, हजेरी, कामगिरी मूल्यमापन आणि प्रशिक्षण प्रणाली दस्तऐवजीकरण केलेल्या आहेत का?',
          'मनुष्यबळाची कमतरता आणि कर्मचाऱ्यांशी संबंधित जोखमींचा नियमित आढावा घेतला जातो का?'
        ]
      },
      5: {
        name: 'ऑपरेशन्स / सेवा वितरण (OPERATIONS / DELIVERY)',
        hint: 'कार्यप्रणालीची पुनरावृत्ती, SOPs, उत्पादकता आणि त्रुटी नियंत्रणे तपासते.',
        questions: [
          'मुख्य कार्यप्रणाली SOPs/वर्कफ्लो द्वारे दस्तऐवजीकरण केलेल्या आहेत का?',
          'टर्नअराउंड वेळ (TAT), उत्पादकता, गुणवत्ता आणि सेवा कामगिरीचे निरीक्षण केले जाते का?'
        ]
      },
      6: {
        name: 'विक्री, विपणन आणि ग्राहक व्यवस्थापन (SALES & MARKETING)',
        hint: 'CRM शिस्त, सेल्स पाईपलाईन, रूपांतरण ट्रॅकिंग आणि ग्राहक टिकवून ठेवण्याची प्रणाली तपासते.',
        questions: [
          'विक्री लक्ष्ये, लीड/ग्राहक नोंदी आणि फॉलो-अप प्रक्रिया पद्धतशीरपणे व्यवस्थापित केल्या जातात का?',
          'ग्राहकांच्या तक्रारी, अभिप्राय (Feedback) आणि ग्राहक टिकवून ठेवणे याचे निरीक्षण केले जाते का?'
        ]
      },
      7: {
        name: 'खरेदी आणि विक्रेता व्यवस्थापन (PURCHASE & VENDOR)',
        hint: 'खरेदी आदेश (PO), कोटेशन तुलना, पुरवठादार करार आणि विक्रेता अवलंबित्व तपासते.',
        questions: [
          'विक्रेता निवड, खरेदी मंजुरी, कोटेशन्स आणि पेमेंट नियंत्रणे निश्चित आहेत का?',
          'पुरवठादार/विक्रेत्यांच्या कामगिरीचे वेळोवेळी मूल्यमापन केले जाते का?'
        ]
      },
      8: {
        name: 'आयटी, डिजिटल प्रणाली आणि डेटा सुरक्षा (IT & DATA)',
        hint: 'डेटा सुरक्षा, बॅकअप प्रोटोकॉल, युझर ऍक्सेस कंट्रोल्स आणि डिजिटल डॅशबोर्ड्स तपासते.',
        questions: [
          'सिस्टम, ऍक्सेस कंट्रोल्स, बॅकअप, सायबर सुरक्षा आणि डेटा संरक्षण योग्यरित्या व्यवस्थापित आहे का?',
          'व्यवस्थापन माहिती विश्वासार्ह MIS/डॅशबोर्ड सिस्टमद्वारे उपलब्ध आहे का?'
        ]
      },
      9: {
        name: 'कायदेशीर, अनुपालन आणि वैधानिक (LEGAL & COMPLIANCE)',
        hint: 'वैधानिक नोंदवही, कामगार कायदा, कर अनुपालन आणि कायदेशीर करार सुरक्षितता तपासते.',
        questions: [
          'लागू कायदेशीर आणि नियामक आवश्यकता ओळखण्यासाठी व ट्रॅक करण्यासाठी प्रणाली आहे का?',
          'परवाने, नोंदणी, फाइलिंग्ज, करार आणि वैधानिक नियमांचे नियमित निरीक्षण केले जाते का?'
        ]
      },
      10: {
        name: 'जोखीम व्यवस्थापन आणि अंतर्गत नियंत्रण (RISK & CONTROL)',
        hint: 'व्यावसायिक जोखीम नोंदणी, दुहेरी मंजुरी नियंत्रण आणि त्रुटी निवारण तपासते.',
        questions: [
          'प्रमुख ऑपरेशनल, आर्थिक, कायदेशीर, तंत्रज्ञान आणि फसवणूक जोखीम ओळखल्या जातात का?',
          'अंतर्गत नियंत्रणे, घटना अहवाल आणि सुधारात्मक उपायांचा आढावा घेतला जातो का?'
        ]
      },
      11: {
        name: 'गुणवत्ता, कामगिरी आणि निरंतर सुधारणा (QUALITY & IMPROVEMENT)',
        hint: 'मूळ कारण विश्लेषण (RCA), दोष प्रतिबंध आणि निरंतर सुधारणा प्रक्रिया तपासते.',
        questions: [
          'KPI/KRA, गुणवत्ता निर्देशक आणि सुधारणा कृतींचा नियमित आढावा घेतला जातो का?',
          'वारंवार होणाऱ्या चुका, विलंब आणि प्रक्रियेतील त्रुटींचे विश्लेषण करून त्या सुधारल्या जातात का?'
        ]
      },
      12: {
        name: 'व्यवसाय सातत्य आणि निर्णय माहिती (BUSINESS CONTINUITY)',
        hint: 'आपत्ती निवारण, बॅकअप योजना आणि व्यवस्थापकीय निर्णय सहाय्य तपासते.',
        questions: [
          'संस्थेकडे महत्त्वाच्या कामांसाठी आपत्कालीन/व्यवसाय-सातत्य (Contingency Plan) व्यवस्था आहे का?',
          'व्यवस्थापनाला योग्य निर्णय घेण्यासाठी वेळेवर विश्वासार्ह माहिती मिळते का?'
        ]
      }
    },
    selfAssessment: {
      title: 'एकूण स्व-मूल्यांकन (ऐच्छिक - OVERALL SELF-ASSESSMENT)',
      question: 'तुमच्या संस्थेच्या संपूर्ण आरोग्याला तुम्ही कसे रेट कराल?',
      options: [
        { code: 'A', label: 'उत्कृष्ट (Good)', subtitle: 'मजबूत प्रणाली, स्पष्ट प्रक्रिया आणि उत्तम प्रशासन.' },
        { code: 'B', label: 'मध्यम (Average)', subtitle: 'कामकाज सुरू आहे पण व्यक्तींवर अवलंबित्व आणि काही नियंत्रण त्रुटी आहेत.' },
        { code: 'C', label: 'सुधारणा आवश्यक (Needs Improvement)', subtitle: 'व्यक्तींवर जास्त अवलंबित्व, अनौपचारिक कार्यपद्धती आणि ऑपरेशनल त्रुटी.' },
        { code: 'D', label: 'कमकुवत (Poor)', subtitle: 'महत्त्वाच्या प्रणालींचा अभाव, वारंवार अडथळे आणि तातडीने पुनर्रचना आवश्यक.' }
      ]
    },
    growUseOnly: {
      title: 'फक्त GROW च्या वापरासाठी (FOR GROW USE ONLY)',
      score: 'एकूण गुण',
      top5Title: 'सर्वात जास्त प्राधान्याने सुधारणा करावयाचे ५ विभाग:'
    },
    footerInfo: {
      returnTitle: '✉ कृपया भरलेला फॉर्म आम्हाला परत पाठवा',
      returnDesc: 'आम्ही तुमच्या उत्तरांचे सखोल विश्लेषण करून महत्त्वाच्या सुधारणा सूचनांसह अहवाल सादर करू.',
      commitmentTitle: 'आमची बांधिलकी आणि गोपनीयता',
      commitmentDesc: 'तुमची उत्तरे पूर्णपणे गोपनीय राहतील आणि केवळ व्यवसाय सुधारणा शिफारशींसाठी वापरली जातील.',
      thankYouTitle: 'धन्यवाद',
      thankYouDesc: 'अधिक मजबूत प्रणाली, उत्तम नियंत्रण आणि शाश्वत व्यवसाय वाढीसाठी GROW ची निवड केल्याबद्दल.'
    },
    submitCard: {
      tag: '१-क्लिक सबमिशन आणि तात्काळ PDF',
      title: 'GROW कडे कॉर्पोरेट हेल्थ चेक-अप सादर करा',
      desc: 'तुमचा अधिकृत २ पानांचा PDF रिपोर्ट डाऊनलोड होईल आणि थेट व्हॉट्सॲप (+91 94057 51665) वर पूर्ण तपशीलासह सबमिट होईल.',
      buttonReady: 'PDF डाऊनलोड करा आणि WhatsApp वर सबमिट करा (+91 94057 51665)',
      buttonLoading: 'PDF तयार होत आहे आणि WhatsApp ओपन होत आहे...'
    },
    autoGuide: {
      tag: 'PDF रिपोर्ट डाऊनलोड झाला आहे',
      title: 'WhatsApp ओपन होत आहे...',
      subtitle: 'तुमचा २ पानांचा अधिकृत PDF रिपोर्ट डाऊनलोड झाला आहे.',
      step1: 'WhatsApp (+91 94057 51665) आपोआप ओपन होत आहे',
      step2: 'व्हॉट्सॲप चॅटमध्ये <strong>📎 (Attach / Paperclip)</strong> वर क्लिक करून डाऊनलोड झालेली PDF सेंड करा.'
    }
  },

  hi: {
    toolbar: {
      badge: 'इंटरएक्टिव चेकबॉक्स ऑडिट मैट्रिक्स',
      fillDemo: 'डेमो भरें',
      reset: 'रीसेट',
      questionsRated: 'प्रश्नों का मूल्यांकन पूर्ण',
      langSelect: 'भाषा'
    },
    topRibbon: '★ १००% निःशुल्क कॉर्पोरेट स्वास्थ्य जांच (FREE AUDIT) ★',
    header: {
      companyName: 'GROW',
      fullName: 'गोविंद राधा ऑर्गनाइज़ेशनल वंडर्स (GROW)',
      tagline: 'बिजनेस ग्रोथ और सिस्टम्स पार्टनर भारत • GRC • ट्रांसफॉर्मेशन • SOP • KRA',
      badge: '★ निःशुल्क कॉर्पोरेट हेल्थ चेक-अप ★',
      title: 'GROW निःशुल्क बिजनेस ऑडिट प्रश्नावली',
      subtitle: 'संगठनात्मक स्वास्थ्य जांच (प्रत्येक विभाग के लिए २ प्रश्न)',
      moto: 'ताकत पहचानें • कमियां तलाशें • प्रणाली सुधारें • व्यवसाय बढ़ाएं'
    },
    orgDetails: {
      title: 'संगठन का विवरण और बुनियादी जानकारी',
      orgName: 'संगठन / कंपनी का नाम',
      orgNamePlaceholder: 'आधिकारिक कंपनी / फर्म का नाम',
      address: 'पता',
      addressPlaceholder: 'सड़क / औद्योगिक क्षेत्र (MIDC)',
      city: 'शहर',
      cityPlaceholder: 'उदा. पुणे / मुंबई / दिल्ली',
      state: 'राज्य',
      statePlaceholder: 'उदा. महाराष्ट्र',
      yearEst: 'स्थापना वर्ष',
      yearEstPlaceholder: 'उदा. 2016',
      employees: 'कर्मचारी संख्या',
      turnover: 'वार्षिक टर्नओवर (Turnover)',
      natureOfOrg: 'संगठन का प्रकार (Category)',
      contactPerson: 'संपर्क व्यक्ति का नाम',
      contactPersonPlaceholder: 'पूरा नाम',
      designation: 'पद (Designation)',
      designationPlaceholder: 'संस्थापक / निदेशक / CEO / प्रमुख',
      email: 'ईमेल पता',
      emailPlaceholder: 'director@company.com',
      mobile: 'मोबाइल / व्हाट्सएप नंबर',
      mobilePlaceholder: '+91 98765 43210'
    },
    instructions: {
      title: 'प्रश्नावली निर्देश',
      text: 'प्रत्येक विभाग के लिए <strong>२ विशिष्ट प्रश्न</strong> हैं। अपनी कंपनी की वर्तमान स्थिति के अनुसार उपयुक्त चेकबॉक्स (✓) का चयन करें।'
    },
    ratingScale: [
      { code: 'A', label: 'पूर्ण रूप से स्थापित (Fully Established)', desc: 'प्रणाली औपचारिक, प्रलेखित और नियमित निगरानी के साथ लगातार लागू है।' },
      { code: 'B', label: 'आंशिक रूप से स्थापित (Partially Established)', desc: 'आंशिक रूप से परिभाषित या अनौपचारिक; संपूर्ण प्रलेखन के बिना प्रमुख व्यक्तियों पर निर्भर।' },
      { code: 'C', label: 'स्थापित नहीं (Not Established)', desc: 'तदर्थ या अनुपस्थित; संगठन के लिए परिचालन जोखिम पैदा करने वाली बड़ी कमी।' },
      { code: 'D', label: 'लागू नहीं (Not Applicable)', desc: 'वर्तमान में संगठन के संचालन के पैमाने या प्रकृति के लिए प्रासंगिक नहीं।' }
    ],
    tableHeaders: {
      no: 'क्र.',
      function: 'विभाग / कार्यक्षेत्र (DEPARTMENT)',
      questions: 'विभाग के मुख्य प्रश्न (प्रत्येक के २ प्रश्न)',
      checkboxes: 'रेटिंग चेकबॉक्स ( ✓ )',
      remarks: 'टिप्पणी / रिमार्क्स (REMARKS)',
      remarksPlaceholder: 'वैकल्पिक टिप्पणी या कमी लिखें...'
    },
    sections: {
      1: {
        name: 'संगठन और कॉर्पोरेट शासन (ORGANIZATION & GOVERNANCE)',
        hint: 'संगठनात्मक पदानुक्रम, अधिकार प्रत्यायोजन (DoA) और संरचनात्मक स्पष्टता की जांच करता है।',
        questions: [
          'क्या संगठन की संरचना (Organization Structure) स्पष्ट रूप से परिभाषित है?',
          'क्या भूमिकाएं, जिम्मेदारियां और रिपोर्टिंग लाइनें प्रलेखित (Documented) हैं?'
        ]
      },
      2: {
        name: 'रणनीति और व्यवसाय प्रबंधन (STRATEGY & MANAGEMENT)',
        hint: 'रणनीतिक स्पष्टता, लक्ष्यों और नेतृत्व समीक्षा बैठकों का मूल्यांकन करता है।',
        questions: [
          'क्या उद्देश्य, लक्ष्य और व्यवसाय/विभाग योजनाएं औपचारिक रूप से परिभाषित हैं?',
          'क्या प्रबंधन के प्रदर्शन की समय-समय पर समीक्षा की जाती है?'
        ]
      },
      3: {
        name: 'वित्त और लेखा (FINANCE & ACCOUNTS)',
        hint: 'वित्तीय रिसाव नियंत्रण, अनुमोदन सीमा, बैंक समाधान और कैश-फ्लो दृश्यता का आकलन करता है।',
        questions: [
          'क्या बजट, अनुमोदन, वित्तीय नियंत्रण और समाधान (Reconciliation) ठीक से स्थापित हैं?',
          'क्या वित्तीय/MIS रिपोर्ट समय पर और विश्वसनीय प्राप्त होती हैं?'
        ]
      },
      4: {
        name: 'मानव संसाधन (HUMAN RESOURCES - HR)',
        hint: 'कर्मचारी जीवनचक्र, भूमिका स्पष्टता, मूल्यांकन पारदर्शिता और कर्मचारी जोखिम की समीक्षा करता है।',
        questions: [
          'क्या जॉब विवरण, KRA/KPI, उपस्थिति, प्रदर्शन मूल्यांकन और प्रशिक्षण प्रणाली प्रलेखित हैं?',
          'क्या जनशक्ति की कमी और कर्मचारियों से जुड़े जोखिमों की नियमित समीक्षा की जाती है?'
        ]
      },
      5: {
        name: 'संचालन / सेवा वितरण (OPERATIONS / DELIVERY)',
        hint: 'प्रक्रिया पुनरावृत्ति, मानक संचालन प्रक्रिया (SOPs), उत्पादकता और त्रुटि नियंत्रण की जांच करता है।',
        questions: [
          'क्या मुख्य परिचालन प्रक्रियाएं SOPs/वर्कफ़्लो के माध्यम से प्रलेखित हैं?',
          'क्या टर्नअराउंड समय (TAT), उत्पादकता, गुणवत्ता और सेवा प्रदर्शन की निगरानी की जाती है?'
        ]
      },
      6: {
        name: 'बिक्री, विपणन और ग्राहक प्रबंधन (SALES & MARKETING)',
        hint: 'CRM अनुशासन, बिक्री पाइपलाइन, रूपांतरण ट्रैकिंग और ग्राहक प्रतिधारण प्रणाली की जांच करता है।',
        questions: [
          'क्या बिक्री लक्ष्य, लीड/ग्राहक रिकॉर्ड और फॉलो-अप प्रक्रियाएं व्यवस्थित रूप से प्रबंधित हैं?',
          'क्या ग्राहकों की शिकायतें, फीडबैक और ग्राहक प्रतिधारण (Retention) की निगरानी की जाती है?'
        ]
      },
      7: {
        name: 'खरीद और विक्रेता प्रबंधन (PURCHASE & VENDOR)',
        hint: 'खरीद आदेश (PO), कोटेशन तुलना, आपूर्तिकर्ता SLA और विक्रेता निर्भरता का मूल्यांकन करता है।',
        questions: [
          'क्या विक्रेता चयन, खरीद अनुमोदन, कोटेशन और भुगतान नियंत्रण परिभाषित हैं?',
          'क्या आपूर्तिकर्ता/विक्रेताओं के प्रदर्शन का समय-समय पर मूल्यांकन किया जाता है?'
        ]
      },
      8: {
        name: 'आईटी, डिजिटल प्रणाली और डेटा सुरक्षा (IT & DATA)',
        hint: 'डेटा सुरक्षा, बैकअप प्रोटोकॉल, उपयोगकर्ता एक्सेस नियंत्रण और डिजिटल डैशबोर्ड की जांच करता है।',
        questions: [
          'क्या सिस्टम, एक्सेस कंट्रोल, बैकअप, साइबर सुरक्षा और डेटा सुरक्षा पर्याप्त रूप से प्रबंधित हैं?',
          'क्या प्रबंधन जानकारी विश्वसनीय MIS/डैशबोर्ड सिस्टम के माध्यम से उपलब्ध है?'
        ]
      },
      9: {
        name: 'कानूनी, अनुपालन और नियामक (LEGAL & COMPLIANCE)',
        hint: 'वैधानिक रजिस्टर, श्रम कानून, कर अनुपालन और अनुबंध सुरक्षा सुनिश्चित करता है।',
        questions: [
          'क्या लागू कानूनी और नियामक आवश्यकताओं की पहचान और ट्रैकिंग के लिए प्रणाली है?',
          'क्या लाइसेंस, पंजीकरण, फाइलिंग, अनुबंध और वैधानिक अनुपालनों की नियमित निगरानी की जाती है?'
        ]
      },
      10: {
        name: 'जोखिम प्रबंधन और आंतरिक नियंत्रण (RISK & CONTROL)',
        hint: 'उद्यम जोखिम रजिस्टर, दोहरे नियंत्रण प्राधिकरण और घटना शमन को मापता है।',
        questions: [
          'क्या प्रमुख परिचालन, वित्तीय, कानूनी, प्रौद्योगिकी और धोखाधड़ी जोखिमों की पहचान की गई है?',
          'क्या आंतरिक नियंत्रण, घटना रिपोर्टिंग और सुधारात्मक कार्यों की नियमित समीक्षा की जाती है?'
        ]
      },
      11: {
        name: 'गुणवत्ता, प्रदर्शन और निरंतर सुधार (QUALITY & IMPROVEMENT)',
        hint: 'मूल कारण विश्लेषण (RCA), दोष रोकथाम और निरंतर प्रक्रिया उन्नयन की पुष्टि करता है।',
        questions: [
          'क्या KPI/KRA, गुणवत्ता संकेतक और सुधार कार्यों की नियमित समीक्षा की जाती है?',
          'क्या बार-बार होने वाली गलतियों, देरी और प्रक्रिया अंतराल का विश्लेषण कर सुधार किया जाता है?'
        ]
      },
      12: {
        name: 'व्यावसायिक निरंतरता और निर्णय सूचना (BUSINESS CONTINUITY)',
        hint: 'आपदा पुनर्प्राप्ति, बैकअप योजना और कार्यकारी निर्णय सहायता का आकलन करता है।',
        questions: [
          'क्या संगठन के पास महत्वपूर्ण गतिविधियों के लिए आकस्मिक/व्यावसायिक निरंतरता व्यवस्था है?',
          'क्या प्रबंधन को सही निर्णय लेने के लिए समय पर सटीक जानकारी मिलती है?'
        ]
      }
    },
    selfAssessment: {
      title: 'समग्र स्व-मूल्यांकन (वैकल्पिक - OVERALL SELF-ASSESSMENT)',
      question: 'आप अपने समग्र संगठनात्मक स्वास्थ्य को कैसे आंकेंगे?',
      options: [
        { code: 'A', label: 'उत्कृष्ट (Good)', subtitle: 'स्वस्थ प्रणालियां, स्पष्ट प्रक्रियाएं और मजबूत शासन।' },
        { code: 'B', label: 'औसत (Average)', subtitle: 'संचालन ठीक है लेकिन व्यक्तियों पर निर्भरता और कुछ नियंत्रण अंतराल हैं।' },
        { code: 'C', label: 'सुधार आवश्यक (Needs Improvement)', subtitle: 'व्यक्तियों पर उच्च निर्भरता, अनौपचारिक प्रक्रियाएं और परिचालन जोखिम।' },
        { code: 'D', label: 'कमजोर (Poor)', subtitle: 'महत्वपूर्ण प्रणालियों की कमी, बार-बार रुकावटें और तत्काल पुनर्गठन आवश्यक।' }
      ]
    },
    growUseOnly: {
      title: 'केवल GROW के उपयोग के लिए (FOR GROW USE ONLY)',
      score: 'कुल अंक',
      top5Title: 'शीर्ष ५ प्राथमिकता वाले सुधार क्षेत्र:'
    },
    footerInfo: {
      returnTitle: '✉ कृपया भरा हुआ फॉर्म हमें वापस भेजें',
      returnDesc: 'हम आपकी प्रतिक्रियाओं का विश्लेषण करेंगे और मुख्य अवलोकन व सुधार सुझावों के साथ रिपोर्ट साझा करेंगे।',
      commitmentTitle: 'हमारी प्रतिबद्धता और गोपनीयता',
      commitmentDesc: 'आपकी प्रतिक्रियाएं पूरी तरह गोपनीय हैं और केवल व्यावसायिक सुधार सिफारिशों के लिए उपयोग की जाएंगी।',
      thankYouTitle: 'धन्यवाद',
      thankYouDesc: 'मजबूत प्रणाली, बेहतर नियंत्रण और सतत विकास के लिए GROW को चुनने के लिए।'
    },
    submitCard: {
      tag: '१-क्लिक सबमिशन और तुरंत PDF',
      title: 'GROW को कॉर्पोरेट हेल्थ चेक-अप सबमिट करें',
      desc: 'आपकी आधिकारिक २-पेज PDF रिपोर्ट डाउनलोड होगी और सीधे व्हाट्सएप (+91 94057 51665) पर पूर्ण विवरण के साथ सबमिट होगी।',
      buttonReady: 'PDF डाउनलोड करें और WhatsApp पर सबमिट करें (+91 94057 51665)',
      buttonLoading: 'PDF बन रही है और WhatsApp खुल रहा है...'
    },
    autoGuide: {
      tag: 'PDF रिपोर्ट डाउनलोड हो गई है',
      title: 'WhatsApp खुल रहा है...',
      subtitle: 'आपकी आधिकारिक २-पेज PDF रिपोर्ट डाउनलोड हो गई है।',
      step1: 'WhatsApp (+91 94057 51665) स्वचालित रूप से खुल रहा है',
      step2: 'व्हाट्सएप चैट में <strong>📎 (Attach / Paperclip)</strong> पर क्लिक करके डाउनलोड की गई PDF भेजें।'
    }
  }
};
