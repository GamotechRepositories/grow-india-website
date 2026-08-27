import { useState } from 'react';
import { 
  Building2, Compass, IndianRupee, Users, Cpu, TrendingUp, ShoppingCart, 
  Laptop, Scale, ShieldAlert, Award, ShieldCheck, CheckCircle2, 
  MessageSquare, Sparkles, RefreshCcw, MessageCircle, Download, Check
} from 'lucide-react';
import { 
  auditApplicableCategories, ratingScale, auditSections, 
  overallHealthOptions, calculateScore, getTopPriorityAreas, getHealthDiagnosis 
} from '../../data/freeAuditData';
import { generateAuditPDF } from '../../utils/pdfGenerator';
import { contactDetails } from '../../data/contact';

// Icon Map helper
const iconMap = {
  Building2,
  Compass,
  IndianRupee,
  Users,
  Cpu,
  TrendingUp,
  ShoppingCart,
  Laptop,
  Scale,
  ShieldAlert,
  Award,
  ShieldCheck
};

export default function FreeAuditForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    organizationName: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    natureOfOrganization: 'CORPORATE',
    contactPerson: '',
    designation: '',
    email: '',
    mobilePhone: '',
    yearOfEstablishment: '',
    noOfEmployees: '11-50',
    turnover: '₹5 Cr – ₹25 Cr'
  });

  // Ratings State: { [sectionId]: 'A' | 'B' | 'C' | 'D' }
  const [ratings, setRatings] = useState({});

  // Comments State: { [sectionId]: string }
  const [comments, setComments] = useState({});

  // Overall Health Self-Assessment: 'A' | 'B' | 'C' | 'D'
  const [overallHealth, setOverallHealth] = useState('B');

  // Score Calculation
  const scoreData = calculateScore(ratings);
  const diagnosis = getHealthDiagnosis(scoreData.score);
  const priorityAreas = getTopPriorityAreas(ratings);

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Rating select handler (Checkbox toggle)
  const handleRatingSelect = (sectionId, ratingCode) => {
    setRatings((prev) => ({ ...prev, [sectionId]: ratingCode }));
  };

  // Comment change handler
  const handleCommentChange = (sectionId, value) => {
    setComments((prev) => ({ ...prev, [sectionId]: value }));
  };

  // Pre-fill Sample Data for fast preview
  const handleFillSample = () => {
    setFormData({
      organizationName: 'Vertex Engineering & Industrial Solutions Pvt Ltd',
      address: 'Plot 42, MIDC Industrial Area, Chakan',
      city: 'Pune',
      state: 'Maharashtra',
      natureOfOrganization: 'CORPORATE',
      contactPerson: 'Rajesh Kulkarni',
      designation: 'Managing Director',
      email: 'rajesh.kulkarni@vertexsolutions.in',
      mobilePhone: '+91 98220 12345',
      yearOfEstablishment: '2016',
      noOfEmployees: '45',
      turnover: '₹18 Crores'
    });

    const sampleRatings = {
      1: 'A',
      2: 'B',
      3: 'B',
      4: 'C',
      5: 'B',
      6: 'B',
      7: 'C',
      8: 'C',
      9: 'B',
      10: 'C',
      11: 'B',
      12: 'C'
    };
    setRatings(sampleRatings);

    setComments({
      4: 'HR processes are managed manually without structured KRAs.',
      7: 'Purchase approvals are largely verbal without formal 3-quote comparisons.',
      8: 'Need automated dashboard for daily sales & production MIS.'
    });

    setOverallHealth('B');
  };

  // Reset form
  const handleResetForm = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setRatings({});
      setComments({});
      setOverallHealth('B');
      setSubmittedSuccess(false);
    }
  };

  // Direct Submit Handler: Generates actual PDF file and shares on mobile / auto-downloads on desktop + opens WhatsApp
  const handleSubmitAndSendWhatsApp = async (e) => {
    if (e) e.preventDefault();

    if (!formData.organizationName.trim()) {
      alert('Please enter your Organization / Enterprise Name.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!formData.contactPerson.trim()) {
      alert('Please enter Contact Person Name.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!formData.mobilePhone.trim()) {
      alert('Please enter Mobile / WhatsApp Phone Number.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter Email Address.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      setSubmitting(true);

      const overallObj = overallHealthOptions.find((h) => h.code === overallHealth) || { label: 'Not Selected' };
      
      // Build 12 vectors ratings breakdown
      const vectorsBreakdown = auditSections.map((sec) => {
        const rCode = ratings[sec.id] || 'Not Rated';
        const rObj = ratingScale.find((r) => r.code === rCode);
        const comment = comments[sec.id] ? ` (Note: ${comments[sec.id]})` : '';
        return `• ${sec.number}. ${sec.name}: *[Rating ${rCode}]* - ${rObj ? rObj.label : ''}${comment}`;
      }).join('\n');

      const priorityListText = priorityAreas.map((p, i) => `${i + 1}. ${p.name} [Rating: ${p.ratingCode}]`).join('\n');

      const safeOrgName = (formData.organizationName || 'Client').replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `GROW_Business_Health_Audit_${safeOrgName}.pdf`;

      // 1. Generate the official 2-page PDF
      const doc = await generateAuditPDF(formData, ratings, comments, overallHealth);
      const pdfBlob = doc.output('blob');
      const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

      const waMessage = `*GROW FREE CORPORATE HEALTH CHECK-UP SUBMISSION*\n` +
        `═════════════════════════\n` +
        `🏢 *ORGANIZATION DETAILS:*\n` +
        `• *Name:* ${formData.organizationName || 'N/A'}\n` +
        `• *Category:* ${formData.natureOfOrganization || 'N/A'}\n` +
        `• *Location:* ${formData.city ? formData.city + ', ' : ''}${formData.state || 'N/A'}\n` +
        `• *Contact Person:* ${formData.contactPerson || 'N/A'} (${formData.designation || 'N/A'})\n` +
        `• *Mobile/Phone:* ${formData.mobilePhone || 'N/A'}\n` +
        `• *Email:* ${formData.email || 'N/A'}\n` +
        `• *Employees:* ${formData.noOfEmployees || 'N/A'} | *Turnover:* ${formData.turnover || 'N/A'}\n\n` +
        `📊 *AUDIT HEALTH SCORE:* ${scoreData.score} / 48 (${scoreData.percentage}% Maturity Index)\n` +
        `🏷️ *Diagnosis:* ${diagnosis.level}\n` +
        `⭐ *Executive Self-Assessment:* ${overallObj.label} (${overallHealth || 'N/A'})\n\n` +
        `📋 *12 FUNCTION ASSESSMENTS (RATINGS A/B/C/D):*\n${vectorsBreakdown}\n\n` +
        `⚠️ *TOP 5 PRIORITY GAP AREAS:*\n${priorityListText}\n\n` +
        `📎 *Attached File:* ${filename}\n` +
        `🤝 *Request:* Please review our organizational health check questionnaire responses and share improvement recommendations.\n` +
        `═════════════════════════`;

      const waUrl = `https://api.whatsapp.com/send?phone=919405751665&text=${encodeURIComponent(waMessage)}`;

      // 2. Automatically generate and download the official 2-page PDF certificate
      try {
        doc.save(filename);
      } catch (pdfErr) {
        console.warn('PDF download error:', pdfErr);
      }

      setSubmittedSuccess(true);

      // 3. Immediately & directly open the WhatsApp chat targeted to +91 94057 51665
      setTimeout(() => {
        window.location.assign(waUrl);
      }, 400);

    } catch (err) {
      console.error('Error in submission:', err);
      const fallbackUrl = `https://api.whatsapp.com/send?phone=919405751665&text=Hello%20GROW%20Team%2C%20I%20have%20submitted%20the%20Free%20Corporate%20Health%20Check-Up%20Questionnaire%20for%20${encodeURIComponent(formData.organizationName || 'My Organization')}.`;
      window.location.assign(fallbackUrl);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmitAndSendWhatsApp} className="w-full max-w-6xl mx-auto space-y-5 sm:space-y-6">
      
      {/* Top Demo & Reset Action Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Interactive Checkbox Audit Matrix
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleFillSample}
            className="text-xs font-bold text-slate-800 bg-amber-100/80 hover:bg-amber-200/90 px-3 py-1.5 rounded-xl border border-amber-300 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            title="Populate demo company answers for quick test"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Fill Demo</span>
          </button>

          <button
            type="button"
            onClick={handleResetForm}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-xl border border-slate-200 transition-colors cursor-pointer flex items-center gap-1"
          >
            <RefreshCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>

          <div className="pl-2 border-l border-slate-200 text-xs font-bold text-slate-700 whitespace-nowrap">
            <span className="text-amber-700 font-extrabold">{scoreData.answeredCount}</span> / 12 Rated
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* OFFICIAL QUESTIONNAIRE PAPER CONTAINER */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-300 shadow-xl overflow-hidden text-slate-900">
        
        {/* 1. OFFICIAL QUESTIONNAIRE HEADER (NAVY & GOLD RIBBON) */}
        <div className="bg-gradient-to-r from-slate-950 via-[#0B1528] to-slate-950 text-white p-4 sm:p-6 lg:p-7 border-b-2 border-amber-400 relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            {/* Logo & Brand Identity */}
            <div className="flex items-center gap-3 sm:gap-3.5 text-left w-full md:w-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center text-amber-400">
                  <span className="font-display font-black text-lg sm:text-xl leading-none">G</span>
                  <span className="text-[6px] sm:text-[7px] font-bold tracking-widest uppercase text-amber-200">GROW</span>
                </div>
              </div>

              <div>
                <h2 className="font-display font-black text-lg sm:text-2xl tracking-tight text-amber-400 leading-none">
                  GROW
                </h2>
                <p className="text-[9px] sm:text-[11px] font-bold text-slate-200 tracking-wider uppercase mt-0.5">
                  Govind Raadhaa Organizational Wonders
                </p>
                <p className="text-[7px] sm:text-[9px] text-amber-300 font-semibold tracking-wide">
                  Business Growth & Systems Partner India • GRC • Transformation • SOP • KRA
                </p>
              </div>
            </div>

            {/* Document Titles */}
            <div className="text-left md:text-right space-y-1 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider">
                ★ Free Corporate Health Check-Up ★
              </span>
              <h3 className="font-display text-base sm:text-2xl font-black text-white uppercase tracking-tight">
                GROW Free Audit Questionnaire
              </h3>
              <p className="font-display text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide">
                Organizational Health Check
              </p>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium italic">
                Identify Strengths • Detect Gaps • Improve Systems • Drive Growth
              </p>
            </div>
          </div>

          {/* Applicable To Strip */}
          <div className="mt-3.5 pt-2.5 border-t border-slate-800 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[9px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider">
            {auditApplicableCategories.map((cat, idx) => (
              <span key={cat} className="flex items-center gap-1.5">
                <span>{cat}</span>
                {idx < auditApplicableCategories.length - 1 && <span className="text-slate-600">•</span>}
              </span>
            ))}
          </div>

        </div>

        {/* 2. ORGANIZATION DETAILS FORM GRID */}
        <div className="p-4 sm:p-6 bg-slate-50/80 border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
            
            {/* Left Column */}
            <div className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[140px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Organization Name <span className="text-red-500">*</span>:
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Official enterprise name"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:bg-white text-xs text-slate-900 bg-white"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[140px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Address :
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street / Industrial Area"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:bg-white text-xs text-slate-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <label className="font-bold text-slate-800 sm:min-w-[50px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                    City :
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Pune"
                    className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <label className="font-bold text-slate-800 sm:min-w-[50px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                    State :
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="e.g. Maharashtra"
                    className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 text-[10px] uppercase tracking-wider block">
                    Year Est. :
                  </label>
                  <input
                    type="text"
                    name="yearOfEstablishment"
                    value={formData.yearOfEstablishment}
                    onChange={handleInputChange}
                    placeholder="e.g. 2016"
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 text-[10px] uppercase tracking-wider block">
                    Employees :
                  </label>
                  <select
                    name="noOfEmployees"
                    value={formData.noOfEmployees}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                  >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 text-[10px] uppercase tracking-wider block">
                    Turnover :
                  </label>
                  <select
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                  >
                    <option value="Under ₹1 Cr">Under ₹1 Cr</option>
                    <option value="₹1 Cr – ₹5 Cr">₹1 Cr – ₹5 Cr</option>
                    <option value="₹5 Cr – ₹25 Cr">₹5 Cr – ₹25 Cr</option>
                    <option value="₹25 Cr – ₹100 Cr">₹25 Cr – ₹100 Cr</option>
                    <option value="₹100 Cr+">₹100 Cr+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[150px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Nature of Org :
                </label>
                <select
                  name="natureOfOrganization"
                  value={formData.natureOfOrganization}
                  onChange={handleInputChange}
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                >
                  {auditApplicableCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[150px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Contact Person <span className="text-red-500">*</span>:
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[150px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Designation :
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="Founder / Director / CEO / Head"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[150px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Email <span className="text-red-500">*</span>:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="director@company.com"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label className="font-bold text-slate-800 sm:min-w-[150px] uppercase tracking-wider text-[10px] sm:text-[11px]">
                  Mobile / Phone <span className="text-red-500">*</span>:
                </label>
                <input
                  type="tel"
                  name="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 text-xs text-slate-900 bg-white"
                  required
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3. INSTRUCTIONS & RATING SCALE GUIDE */}
        <div className="bg-[#0B1528] text-white p-3 sm:p-4 border-b-2 border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2">
            <div className="p-1 rounded-lg bg-amber-400 text-slate-950 mt-0.5 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block">
                INSTRUCTIONS
              </span>
              <p className="text-[11px] text-slate-200 leading-snug">
                Select the checkbox option (✓) that best describes the current status in your organization.
              </p>
            </div>
          </div>

          {/* Rating Scale Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-bold border border-slate-700 bg-slate-900/90 px-3 py-2 rounded-xl w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-amber-400">A</span>
              <span className="text-slate-200">Fully Established</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-amber-400">B</span>
              <span className="text-slate-200">Partially Established</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-amber-400">C</span>
              <span className="text-slate-200">Not Established</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-amber-400">D</span>
              <span className="text-slate-200">Not Applicable</span>
            </div>
          </div>
        </div>

        {/* 4A. DESKTOP VIEW: OFFICIAL TABLE MATRIX (md:block) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-amber-100/90 text-slate-950 text-xs font-black uppercase border-b-2 border-slate-400">
                <th className="py-2.5 px-3 text-center border-r border-slate-300 w-12">
                  NO.
                </th>
                <th className="py-2.5 px-4 border-r border-slate-300 w-48 lg:w-56">
                  FUNCTION / AREA
                </th>
                <th className="py-2.5 px-4 border-r border-slate-300">
                  KEY QUESTION
                </th>
                <th className="py-2 px-1 text-center border-r border-slate-300 w-44 bg-amber-200/80">
                  <div className="text-[11px] font-black uppercase border-b border-amber-300 pb-1 mb-1 tracking-wider">
                    RATING ( ✓ )
                  </div>
                  <div className="grid grid-cols-4 text-center font-black text-xs">
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                  </div>
                </th>
                <th className="py-2.5 px-4 w-44 lg:w-52">
                  COMMENTS (Optional)
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-200 text-xs">
              {auditSections.map((sec) => {
                const Icon = iconMap[sec.iconName] || ShieldCheck;
                const selectedRating = ratings[sec.id];

                return (
                  <tr 
                    key={sec.id}
                    className={`transition-colors hover:bg-amber-50/40 ${
                      selectedRating ? 'bg-amber-50/20' : ''
                    }`}
                  >
                    {/* No. */}
                    <td className="py-3 px-3 text-center font-black text-slate-800 border-r border-slate-200 bg-slate-50/60">
                      {sec.number}
                    </td>

                    {/* Function / Area */}
                    <td className="py-3 px-3.5 border-r border-slate-200 align-top">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 uppercase tracking-tight text-[11px] block leading-tight">
                            {sec.name}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Key Questions */}
                    <td className="py-3 px-4 border-r border-slate-200 align-top">
                      <ol className="list-decimal list-inside space-y-1 text-[11px] sm:text-xs text-slate-700 font-medium leading-snug">
                        <li>{sec.questions[0]}</li>
                        <li>{sec.questions[1]}</li>
                      </ol>
                    </td>

                    {/* Checkboxes for A, B, C, D */}
                    <td className="py-2 px-1 border-r border-slate-200 align-middle bg-slate-50/40">
                      <div className="grid grid-cols-4 gap-1 h-full items-center justify-center">
                        {['A', 'B', 'C', 'D'].map((code) => {
                          const isChecked = selectedRating === code;
                          return (
                            <div key={code} className="flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => handleRatingSelect(sec.id, code)}
                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 transition-all flex items-center justify-center cursor-pointer ${
                                  isChecked
                                    ? 'bg-slate-950 border-slate-950 text-amber-400 shadow-md ring-2 ring-amber-400'
                                    : 'bg-white border-slate-300 hover:border-slate-500 hover:bg-slate-100 text-transparent'
                                }`}
                                title={`Select ${code} for ${sec.name}`}
                              >
                                {isChecked ? (
                                  <Check className="w-4 h-4 stroke-[3]" />
                                ) : (
                                  <span className="text-[10px] text-slate-300 font-bold opacity-0 hover:opacity-100">
                                    {code}
                                  </span>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </td>

                    {/* Comments Input */}
                    <td className="py-2.5 px-3 align-middle">
                      <textarea
                        rows="2"
                        value={comments[sec.id] || ''}
                        onChange={(e) => handleCommentChange(sec.id, e.target.value)}
                        placeholder="Optional remarks..."
                        className="w-full p-2 text-[11px] rounded-lg border border-slate-300 focus:border-amber-500 focus:bg-white bg-slate-50/50 text-slate-900 resize-none leading-snug"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* 4B. MOBILE VIEW: TOUCH-FRIENDLY RESPONSIVE CARDS (block md:hidden) */}
        <div className="block md:hidden divide-y divide-slate-200">
          {auditSections.map((sec) => {
            const Icon = iconMap[sec.iconName] || ShieldCheck;
            const selectedRating = ratings[sec.id];

            return (
              <div 
                key={sec.id}
                className={`p-4 space-y-3 transition-colors ${
                  selectedRating ? 'bg-amber-50/30' : 'bg-white'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 text-xs font-black flex items-center justify-center shrink-0">
                      {sec.number}
                    </span>
                    <h4 className="font-display text-xs font-bold text-slate-900 uppercase tracking-tight">
                      {sec.name}
                    </h4>
                  </div>
                  {selectedRating && (
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-black text-[10px]">
                      Rating {selectedRating}
                    </span>
                  )}
                </div>

                {/* Questions */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-700 font-medium leading-relaxed">
                    <li>{sec.questions[0]}</li>
                    <li>{sec.questions[1]}</li>
                  </ol>
                </div>

                {/* 4 Interactive Checkbox Boxes for Mobile */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
                    Select Rating ( ✓ ):
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {ratingScale.map((opt) => {
                      const isChecked = selectedRating === opt.code;
                      return (
                        <button
                          key={opt.code}
                          type="button"
                          onClick={() => handleRatingSelect(sec.id, opt.code)}
                          className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-amber-400'
                              : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-400 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="leading-tight min-w-0">
                            <span className="text-xs font-black mr-1 text-amber-500">{opt.code}</span>
                            <span className="text-[10px] font-semibold truncate">{opt.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Optional Comment */}
                <div>
                  <input
                    type="text"
                    value={comments[sec.id] || ''}
                    onChange={(e) => handleCommentChange(sec.id, e.target.value)}
                    placeholder="Optional remarks / gap..."
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-900"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. BOTTOM EVALUATION MATRIX BOX */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-slate-400 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white">
          
          {/* Overall Self-Assessment (Left Box) */}
          <div className="md:col-span-7 p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-slate-900 text-amber-300 font-black text-[10px] uppercase tracking-wider">
                OVERALL SELF-ASSESSMENT (OPTIONAL)
              </span>
            </div>
            
            <p className="text-xs font-bold text-slate-800">
              How would you rate your overall organizational health?
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {overallHealthOptions.map((opt) => {
                const isSelected = overallHealth === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setOverallHealth(opt.code)}
                    className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-amber-400'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-400 bg-white'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-[11px] font-bold leading-tight">
                      <strong className="text-amber-500 mr-1">{opt.code}</strong> {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FOR GROW USE ONLY (Right Box) */}
          <div className="md:col-span-5 p-4 sm:p-5 bg-amber-50/50 space-y-2">
            <div className="flex items-center justify-between border-b border-amber-300/80 pb-1.5">
              <span className="px-2 py-0.5 rounded bg-amber-300 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                FOR GROW USE ONLY
              </span>
              <span className="text-xs font-black text-slate-900">
                SCORE: <strong className="text-base text-amber-700 font-black">{scoreData.score}</strong> / 48
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                Top 5 Priority Gap Areas:
              </span>
              <ol className="space-y-1 text-[11px] text-slate-800 font-medium">
                {priorityAreas.slice(0, 5).map((pa, idx) => (
                  <li key={pa.id} className="flex items-center justify-between border-b border-slate-200/80 pb-0.5">
                    <span className="truncate pr-1">
                      {idx + 1}. {pa.name}
                    </span>
                    <span className="text-[9px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded shrink-0">
                      Rating {pa.ratingCode}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>

        {/* 6. SUBMISSION FOOTER INSTRUCTIONS */}
        <div className="p-4 sm:p-5 bg-[#0B1528] text-white border-t-2 border-amber-400 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-5 space-y-1">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider block">
              ✉ PLEASE RETURN THE COMPLETED FORM TO US
            </span>
            <p className="text-[11px] text-slate-300">
              Email: <strong className="text-white">{contactDetails.email}</strong>
            </p>
            <p className="text-[11px] text-slate-300">
              WhatsApp: <strong className="text-white">+91 94057 51665</strong>
            </p>
            <p className="text-[10px] text-slate-400 italic leading-snug pt-0.5">
              We will analyze and share a summary report with key observations and improvement suggestions.
            </p>
          </div>

          <div className="md:col-span-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[9px] font-black uppercase tracking-wider">
              OUR COMMITMENT
            </span>
            <p className="text-[10px] text-slate-300 leading-snug">
              Your responses are confidential and will be used only for improvement recommendations.
            </p>
          </div>

          <div className="md:col-span-4 text-left md:text-right space-y-1">
            <h4 className="font-display text-sm font-black text-amber-400 uppercase tracking-tight">
              THANK YOU
            </h4>
            <p className="text-[11px] text-slate-300 leading-snug">
              for partnering with GROW in building stronger systems, better controls and sustainable growth.
            </p>
          </div>

        </div>

        {/* Bottom Contact Footer Strip */}
        <div className="bg-slate-950 text-slate-400 px-4 py-2.5 text-[10px] flex flex-wrap items-center justify-between gap-2 border-t border-slate-800">
          <span>📞 +91 94057 51665</span>
          <span>✉ {contactDetails.email}</span>
          <span>📸 @growbusinesspartner</span>
          <span>🌐 https://grow-india-website.onrender.com</span>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 7. FINAL SUBMISSION ACTION BUTTON */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-emerald-700 block mb-0.5">
            1-Click Submission & Instant PDF
          </span>
          <h4 className="font-display text-sm sm:text-lg font-black text-slate-900">
            Submit Corporate Health Check-Up to GROW
          </h4>
          <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 max-w-md">
            Downloads your official 2-page PDF certificate and directly opens WhatsApp (+91 94057 51665) with your full responses.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-black text-xs sm:text-base shadow-lg transition-all transform active:scale-95 cursor-pointer disabled:opacity-50 shrink-0"
        >
          {submitting ? (
            <>
              <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5 animate-spin shrink-0" />
              <span>Generating PDF & Opening WhatsApp...</span>
            </>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Download PDF & Submit on WhatsApp (+91 94057 51665)</span>
            </>
          )}
        </button>

      </div>

    </form>
  );
}
