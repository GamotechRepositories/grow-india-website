import { useState } from 'react';
import { 
  Building2, Compass, IndianRupee, Users, Cpu, TrendingUp, ShoppingCart, 
  Laptop, Scale, ShieldAlert, Award, ShieldCheck, CheckCircle2, 
  MessageSquare, Sparkles, RefreshCcw, MessageCircle
} from 'lucide-react';
import { 
  auditApplicableCategories, ratingScale, auditSections, 
  overallHealthOptions, calculateScore, getTopPriorityAreas, getHealthDiagnosis 
} from '../../data/freeAuditData';
import { generateAuditPDF } from '../../utils/pdfGenerator';
import Button from '../ui/Button';

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
  const [activeCommentId, setActiveCommentId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    organizationName: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    natureOfOrganization: 'MSME',
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

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Rating select handler
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
      natureOfOrganization: 'MSME',
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

      const diagnosis = getHealthDiagnosis(scoreData.score);
      const priorityAreas = getTopPriorityAreas(ratings);
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

      const waMessage = `*GROW FREE ORGANIZATIONAL HEALTH AUDIT SUBMISSION*\n` +
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
        `📋 *12 FUNCTION ASSESSMENTS:*\n${vectorsBreakdown}\n\n` +
        `⚠️ *TOP 5 PRIORITY GAP AREAS:*\n${priorityListText}\n\n` +
        `📎 *Attached File:* ${filename}\n` +
        `🤝 *Request:* Please review our audit responses and share improvement recommendations.\n` +
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
      const fallbackUrl = `https://api.whatsapp.com/send?phone=919405751665&text=Hello%20GROW%20Team%2C%20I%20have%20submitted%20the%20Free%20Business%20Health%20Audit%20Questionnaire%20for%20${encodeURIComponent(formData.organizationName || 'My Organization')}.`;
      window.location.assign(fallbackUrl);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmitAndSendWhatsApp} className="w-full max-w-5xl mx-auto space-y-8">
      
      {/* Top Header Bar with Progress & Demo Autofill */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 block">
            Official Self-Diagnostic Form
          </span>
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
            Organizational Health Assessment
          </h2>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            type="button"
            onClick={handleFillSample}
            className="text-xs font-semibold text-slate-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 px-3.5 py-2 rounded-xl border border-amber-200/80 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
            title="Populate sample company responses to preview report quickly"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Fill Demo Data</span>
          </button>

          <button
            type="button"
            onClick={handleResetForm}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer flex items-center gap-1"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <div className="text-right pl-2 border-l border-slate-200">
            <span className="text-[11px] font-bold text-slate-700 block">
              {scoreData.answeredCount} / 12 Rated
            </span>
            <div className="w-24 h-2 rounded-full bg-slate-100 overflow-hidden mt-1">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${(scoreData.answeredCount / 12) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. ORGANIZATION DETAILS */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            Section 1 • Organization Profile
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">
            Organization Details & Basic Information
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            This information will be printed on your official organizational health check certificate and PDF report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Org Name */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>Organization / Enterprise Name <span className="text-red-500">*</span></span>
              <span className="text-[10px] text-slate-400 font-normal">Official Registered Name</span>
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              placeholder="e.g. Apex Manufacturing & Logistics Pvt Ltd"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
              required
            />
          </div>

          {/* Nature of Organization */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Nature / Category of Organization
            </label>
            <select
              name="natureOfOrganization"
              value={formData.natureOfOrganization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            >
              {auditApplicableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Street Address / Industrial Area
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="e.g. Plot 15, Sector 4, Industrial Area"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            />
          </div>

          {/* City */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              City / Location
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="e.g. Mumbai / Pune / Nagpur / Delhi"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            />
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="e.g. Maharashtra"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            />
          </div>

          {/* Contact Person */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              placeholder="e.g. Ramesh Shah"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
              required
            />
          </div>

          {/* Designation */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Designation / Role
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="e.g. Founder / Managing Director / CEO"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. director@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
              required
            />
          </div>

          {/* Mobile / Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Mobile / WhatsApp Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleInputChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
              required
            />
          </div>

          {/* Year of Establishment */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Year of Establishment
            </label>
            <input
              type="text"
              name="yearOfEstablishment"
              value={formData.yearOfEstablishment}
              onChange={handleInputChange}
              placeholder="e.g. 2018"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            />
          </div>

          {/* No. of Employees */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Number of Employees
            </label>
            <select
              name="noOfEmployees"
              value={formData.noOfEmployees}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            >
              <option value="1-10">1 – 10 Employees</option>
              <option value="11-50">11 – 50 Employees</option>
              <option value="51-200">51 – 200 Employees</option>
              <option value="201-500">201 – 500 Employees</option>
              <option value="500+">500+ Employees</option>
            </select>
          </div>

          {/* Turnover */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Approximate Annual Turnover
            </label>
            <select
              name="turnover"
              value={formData.turnover}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm text-slate-900 bg-white"
            >
              <option value="Under ₹1 Cr">Under ₹1 Crore</option>
              <option value="₹1 Cr – ₹5 Cr">₹1 Crore – ₹5 Crores</option>
              <option value="₹5 Cr – ₹25 Cr">₹5 Crores – ₹25 Crores</option>
              <option value="₹25 Cr – ₹100 Cr">₹25 Crores – ₹100 Crores</option>
              <option value="₹100 Cr+">₹100 Crores+</option>
            </select>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RATING INSTRUCTIONS & 12 HEALTH ASSESSMENT FUNCTIONS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        
        {/* Instructions Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-lg space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Section 2 • Questionnaire & Rating Guide
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Instructions: Select the option that best describes the current status in your organization
            </h3>
          </div>

          {/* Rating Legend Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ratingScale.map((r) => (
              <div 
                key={r.code} 
                className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                    {r.code}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {r.label}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Assessment Sections List */}
        <div className="space-y-4">
          {auditSections.map((sec) => {
            const Icon = iconMap[sec.iconName] || ShieldCheck;
            const selectedRating = ratings[sec.id];
            const isCommentOpen = activeCommentId === sec.id || (comments[sec.id] && comments[sec.id].trim().length > 0);

            return (
              <div
                key={sec.id}
                className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden shadow-sm ${
                  selectedRating
                    ? 'border-amber-400/80 ring-1 ring-amber-400/20'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="p-5 sm:p-7 space-y-5">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block">
                          VECTOR {sec.number}
                        </span>
                        <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                          {sec.name}
                        </h4>
                      </div>
                    </div>

                    {selectedRating && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0 self-start sm:self-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Rated: {selectedRating} ({ratingScale.find((r) => r.code === selectedRating)?.label})</span>
                      </div>
                    )}
                  </div>

                  {/* Key Questions */}
                  <div className="space-y-2 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Key Assessment Questions:
                    </span>
                    <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      <li>{sec.questions[0]}</li>
                      <li>{sec.questions[1]}</li>
                    </ol>
                  </div>

                  {/* Rating Selector Pills */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                      Select Current Status:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {ratingScale.map((opt) => {
                        const isSelected = selectedRating === opt.code;
                        return (
                          <button
                            key={opt.code}
                            type="button"
                            onClick={() => handleRatingSelect(sec.id, opt.code)}
                            className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[72px] ${
                              isSelected
                                ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-amber-400'
                                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                                isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-900'
                              }`}>
                                {opt.code}
                              </span>
                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'border-amber-400 bg-amber-400 text-slate-950'
                                    : 'border-slate-300 bg-transparent'
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                              </span>
                            </div>
                            <span className="text-[11px] font-bold mt-1.5 leading-tight">
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional Comment Toggle */}
                  <div className="pt-1">
                    {!isCommentOpen ? (
                      <button
                        type="button"
                        onClick={() => setActiveCommentId(sec.id)}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-700 font-semibold cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>+ Add Optional Comments / Notes for GROW</span>
                      </button>
                    ) : (
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-200 animate-in fade-in duration-150">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                            <span>Comments / Specific Gaps (Optional):</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => setActiveCommentId(null)}
                            className="text-[10px] text-slate-400 hover:text-slate-600 cursor-pointer"
                          >
                            Hide
                          </button>
                        </div>
                        <textarea
                          rows="2"
                          value={comments[sec.id] || ''}
                          onChange={(e) => handleCommentChange(sec.id, e.target.value)}
                          placeholder="e.g. Needs automation, currently managed manually on excel sheets..."
                          className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white text-slate-900"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. OVERALL QUALITATIVE ASSESSMENT */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            Section 3 • Executive Self-Assessment
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">
            How would you rate your overall organizational health?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {overallHealthOptions.map((opt) => {
            const isSelected = overallHealth === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setOverallHealth(opt.code)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-950 shadow-lg ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-800'
                    }`}>
                      {opt.code}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base">
                      {opt.label}
                    </span>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400 text-slate-950'
                        : 'border-slate-300 bg-transparent'
                    }`}
                  >
                    {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  {opt.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. SINGLE DIRECT SUBMIT BUTTON TO WHATSAPP (+91 94057 51665) */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        
        {submittedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>PDF report has been generated and sent to WhatsApp (+91 94057 51665)!</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 block mb-0.5">
              Direct WhatsApp Submission
            </span>
            <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
              Submit Audit Responses to GROW India
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 max-w-md">
              Sends your complete 12-function audit assessment, score, and organization details directly to WhatsApp (+91 94057 51665).
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base shadow-lg transition-all transform active:scale-95 cursor-pointer disabled:opacity-50 shrink-0"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Submit on WhatsApp (+91 94057 51665)</span>
          </button>
        </div>
      </div>

    </form>
  );
}
