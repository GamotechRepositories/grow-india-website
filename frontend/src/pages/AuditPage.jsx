import React, { useState } from 'react';
import { 
  Landmark, Target, IndianRupee, Users, Cpu, TrendingUp, 
  ShoppingCart, Monitor, Scale, ShieldAlert, Award, CheckCircle2,
  Printer, MessageCircle, Mail, Sparkles, AlertCircle, FileCheck,
  RefreshCcw, ArrowRight, Building2, Check, ShieldCheck, Download,
  CheckCircle, AlertTriangle, XCircle, MinusCircle, Send, User,
  MapPin, Phone, Briefcase
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import { auditQuestionnaireMeta, auditSections } from '../data/auditQuestionnaire';
import { brandIdentity } from '../data/brand';
import { contactDetails } from '../data/contact';

const iconMap = {
  Landmark,
  Target,
  IndianRupee,
  Users,
  Cpu,
  TrendingUp,
  ShoppingCart,
  Monitor,
  Scale,
  ShieldAlert,
  Award,
  CheckCircle2
};

const ratingConfig = {
  A: {
    code: 'A',
    label: 'Fully Established',
    subtext: 'Documented & Active',
    points: 4,
    icon: CheckCircle,
    color: 'emerald',
    activeClass: 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-400',
    idleClass: 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
  },
  B: {
    code: 'B',
    label: 'Partially Established',
    subtext: 'In Progress / Partial',
    points: 3,
    icon: AlertTriangle,
    color: 'amber',
    activeClass: 'bg-amber-500 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-400 font-bold',
    idleClass: 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
  },
  C: {
    code: 'C',
    label: 'Not Established',
    subtext: 'Informal / Major Gaps',
    points: 1,
    icon: XCircle,
    color: 'rose',
    activeClass: 'bg-rose-600 text-white border-rose-600 shadow-md ring-2 ring-rose-400',
    idleClass: 'bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50'
  },
  D: {
    code: 'D',
    label: 'Not Applicable',
    subtext: 'Not Relevant',
    points: 0,
    icon: MinusCircle,
    color: 'slate',
    activeClass: 'bg-slate-700 text-white border-slate-700 shadow-md ring-2 ring-slate-400',
    idleClass: 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
  }
};

export default function AuditPage() {
  // Client Organization Info
  const [clientInfo, setClientInfo] = useState({
    orgName: '',
    orgNature: 'MSME',
    contactPerson: '',
    designation: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    employees: '',
    turnover: ''
  });

  // Ratings for all 12 areas
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [overallHealth, setOverallHealth] = useState('B');
  const [priorityNotes, setPriorityNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleRatingSelect = (sectionId, ratingCode) => {
    setRatings((prev) => ({ ...prev, [sectionId]: ratingCode }));
  };

  const handleCommentChange = (sectionId, value) => {
    setComments((prev) => ({ ...prev, [sectionId]: value }));
  };

  // Score Calculation
  const totalSections = auditSections.length;
  const answeredCount = Object.keys(ratings).length;

  const calculateScore = () => {
    let score = 0;
    Object.values(ratings).forEach((code) => {
      const cfg = ratingConfig[code];
      if (cfg) score += cfg.points;
    });
    return score;
  };

  const currentScore = calculateScore();
  const maxPossibleScore = totalSections * 4; // 48 points max

  // Diagnostic Status
  let diagnosisStatus = {
    title: 'High Vulnerability & Person Dependency',
    colorText: 'text-rose-600',
    bgColor: 'bg-rose-50 border-rose-200 text-rose-800',
    summary: 'Significant gaps in standardized systems. Urgent SOPs and compliance controls needed.'
  };

  if (currentScore >= 38) {
    diagnosisStatus = {
      title: 'Strong Institutional Governance',
      colorText: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      summary: 'High process maturity. Ready for automated scaling and digital ERP/MIS integration.'
    };
  } else if (currentScore >= 24) {
    diagnosisStatus = {
      title: 'Moderate Operational Maturity',
      colorText: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
      summary: 'Partial systems exist. Needs structured departmental KPIs, RACI matrices & SOP playbooks.'
    };
  }

  // Format WhatsApp Submission
  const getFormattedWhatsAppMessage = () => {
    let msg = `*GROW FREE AUDIT QUESTIONNAIRE SUBMISSION*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Organization:* ${clientInfo.orgName || 'Not specified'}\n`;
    msg += `*Nature:* ${clientInfo.orgNature || 'MSME'}\n`;
    msg += `*Contact:* ${clientInfo.contactPerson || 'Not specified'} (${clientInfo.designation || 'Leader'})\n`;
    msg += `*Phone:* ${clientInfo.phone || 'Not specified'} | *Email:* ${clientInfo.email || 'Not specified'}\n`;
    msg += `*Location:* ${clientInfo.city || 'City'}, ${clientInfo.state || 'State'}\n`;
    if (clientInfo.turnover) msg += `*Turnover:* ${clientInfo.turnover} | *Employees:* ${clientInfo.employees || 'N/A'}\n`;
    msg += `\n*DIAGNOSTIC HEALTH SCORE:* ${currentScore} / ${maxPossibleScore} Points (${answeredCount}/12 Evaluated)\n`;
    msg += `*Overall Health Rating:* [${overallHealth}]\n\n`;

    msg += `*12 FUNCTIONAL RATINGS:*\n`;
    auditSections.forEach((sec) => {
      const code = ratings[sec.id] || 'Not Rated';
      const label = ratingConfig[code]?.label || 'Pending';
      const note = comments[sec.id] ? ` - Note: "${comments[sec.id]}"` : '';
      msg += `${sec.no}. ${sec.area}: *${label} (${code})*${note}\n`;
    });

    if (priorityNotes.trim()) {
      msg += `\n*Top Focus & Priorities:*\n${priorityNotes.trim()}\n`;
    }

    msg += `\n_Submitted via GROW India Web Portal._\n`;
    msg += `Please analyze our responses and provide recommendations.`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = () => {
    if (!clientInfo.orgName.trim() && !clientInfo.phone.trim()) {
      setValidationError('Please enter your Organization Name and Contact Phone Number to submit.');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }
    const url = `https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${getFormattedWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = () => {
    if (!clientInfo.orgName.trim() && !clientInfo.phone.trim()) {
      setValidationError('Please enter your Organization Name and Contact Phone Number to submit.');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }
    const subject = encodeURIComponent(`Free Business Health Audit - ${clientInfo.orgName || 'Organization Response'}`);
    const body = decodeURIComponent(getFormattedWhatsAppMessage()).replace(/\*/g, '').replace(/_/g, '');
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm('Reset all questionnaire answers?')) {
      setRatings({});
      setComments({});
      setClientInfo({
        orgName: '',
        orgNature: 'MSME',
        contactPerson: '',
        designation: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        employees: '',
        turnover: ''
      });
      setPriorityNotes('');
      setValidationError('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageLayout
      title={`Free Business Health Audit Questionnaire – ${brandIdentity.shortName}`}
      description="Simple self-assessment tool for organizations. Rate 12 core functional areas and send back for expert diagnostic recommendations."
    >
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14 print:py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Free Organizational Health Check</span>
          </span>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            GROW Business Health Audit Questionnaire
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A simple self-assessment to identify operational strengths, detect risk gaps, and improve your systems.
          </p>

          {/* Quick Step Guide */}
          <div className="pt-4 grid grid-cols-3 gap-2 max-w-xl mx-auto text-xs font-semibold text-slate-700">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-amber-600 font-bold block mb-0.5">1. Details</span>
              <span>Your Company</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-amber-600 font-bold block mb-0.5">2. Rate Areas</span>
              <span>12 Simple Questions</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-amber-600 font-bold block mb-0.5">3. Send Back</span>
              <span>WhatsApp / Email</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

          {/* Validation Alert */}
          {validationError && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* STEP 1: Organization Details Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                1
              </div>
              <h2 className="font-display font-bold text-base sm:text-lg text-slate-900">
                Your Organization & Contact Details
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={clientInfo.orgName}
                  onChange={handleInfoChange}
                  placeholder="e.g. Acme Tech Solutions Pvt Ltd"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Nature of Organization
                </label>
                <select
                  name="orgNature"
                  value={clientInfo.orgNature}
                  onChange={handleInfoChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                >
                  <option value="MSME">MSME / Small Enterprise</option>
                  <option value="Private Limited / Corporate">Private Limited / Corporate</option>
                  <option value="Start-up">Start-up</option>
                  <option value="Family Business">Family Business</option>
                  <option value="Manufacturing">Manufacturing & Industrial</option>
                  <option value="Trading / Retail">Trading / Retail</option>
                  <option value="Services / IT">Services / IT / Consulting</option>
                  <option value="Healthcare / Education">Healthcare / Education</option>
                  <option value="NGO / Trust / Institution">NGO / Trust / Institution</option>
                  <option value="Government / PSU">Government / PSU / Public Sector</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={clientInfo.contactPerson}
                  onChange={handleInfoChange}
                  placeholder="Your Full Name"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Designation / Role
                </label>
                <input
                  type="text"
                  name="designation"
                  value={clientInfo.designation}
                  onChange={handleInfoChange}
                  placeholder="e.g. Founder, Director, Manager"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleInfoChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={clientInfo.email}
                  onChange={handleInfoChange}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  City & State
                </label>
                <input
                  type="text"
                  name="city"
                  value={clientInfo.city}
                  onChange={handleInfoChange}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Approx. Annual Turnover (Optional)
                </label>
                <input
                  type="text"
                  name="turnover"
                  value={clientInfo.turnover}
                  onChange={handleInfoChange}
                  placeholder="e.g. ₹2 Cr to ₹10 Cr"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2: 12 Functional Areas Health Check */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-slate-900">
                      12 Functional Areas Health Check
                    </h2>
                    <p className="text-xs text-slate-500">
                      Tap the status option for each area that best describes your organization.
                    </p>
                  </div>
                </div>

                {/* Score Counter */}
                <div className="bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2 shrink-0">
                  <span>Completed:</span>
                  <span className="text-amber-600 font-extrabold">{answeredCount} / {totalSections}</span>
                </div>
              </div>

              {/* Questionnaire Cards */}
              <div className="divide-y divide-slate-100 mt-2">
                {auditSections.map((sec) => {
                  const IconComp = iconMap[sec.icon] || CheckCircle2;
                  const currentSelected = ratings[sec.id];

                  return (
                    <div key={sec.id} className="py-5 sm:py-6 space-y-3">
                      
                      {/* Section Title & Questions */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                          <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                            {sec.no}
                          </span>
                          <IconComp className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{sec.area}</span>
                        </div>

                        {/* Questions list */}
                        <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-0.5">
                          {sec.questions.map((q, idx) => (
                            <p key={idx} className="leading-snug">
                              {q}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* 4 Simple, Tap-Friendly Choice Buttons (Mobile & Desktop) */}
                      <div className="pl-0 sm:pl-8 pt-1">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {Object.values(ratingConfig).map((cfg) => {
                            const isSelected = currentSelected === cfg.code;
                            const IconElem = cfg.icon;

                            return (
                              <button
                                key={cfg.code}
                                type="button"
                                onClick={() => handleRatingSelect(sec.id, cfg.code)}
                                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between select-none ${
                                  isSelected ? cfg.activeClass : cfg.idleClass
                                }`}
                              >
                                <div className="flex items-center justify-between w-full mb-1">
                                  <span className="font-extrabold text-xs">
                                    Option {cfg.code}
                                  </span>
                                  <IconElem className="w-3.5 h-3.5 opacity-80" />
                                </div>
                                <div>
                                  <div className="font-bold text-xs sm:text-sm leading-tight">
                                    {cfg.label}
                                  </div>
                                  <div className={`text-[10px] mt-0.5 leading-tight ${isSelected ? 'opacity-90' : 'text-slate-400'}`}>
                                    {cfg.subtext}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Optional Single Line Note */}
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Optional note / observation for this department..."
                            value={comments[sec.id] || ''}
                            onChange={(e) => handleCommentChange(sec.id, e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STEP 3: Overall Rating & Priority Focus */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                3
              </div>
              <h2 className="font-display font-bold text-base sm:text-lg text-slate-900">
                Overall Assessment & Key Priorities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {/* Overall Rating */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  How would you rate overall organizational health?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {auditQuestionnaireMeta.overallRatingOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => setOverallHealth(opt.code)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        overallHealth === opt.code
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-400'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                        {opt.code}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Real-time Health Result Pill */}
                <div className={`p-3 rounded-2xl border text-xs mt-3 ${diagnosisStatus.bgColor}`}>
                  <div className="font-bold">{diagnosisStatus.title}</div>
                  <div className="text-[11px] opacity-90 mt-0.5">{diagnosisStatus.summary}</div>
                </div>
              </div>

              {/* Priority Areas Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Top Priority Areas (Mention 2 to 5 focus areas)
                </label>
                <textarea
                  rows={4}
                  value={priorityNotes}
                  onChange={(e) => setPriorityNotes(e.target.value)}
                  placeholder="e.g.&#10;1. Sales & Lead follow-up SOPs&#10;2. Finance approvals & cash flow reporting&#10;3. HR JDs and performance scorecards"
                  className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 4: Simple Submission Box (1-Click Return via WhatsApp / Email) */}
          <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ready to Submit</span>
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Send Your Completed Audit to GROW
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Click below to send your responses. Our consulting team will review your diagnostic scores and share actionable improvement recommendations.
              </p>
            </div>

            {/* Main Action Buttons: Super Clear & Big */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto pt-2">
              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/60 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>Send via WhatsApp</span>
              </button>

              {/* Email Button */}
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 active:bg-slate-850 text-white font-bold text-sm sm:text-base border border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Send via Email</span>
              </button>
            </div>

            {/* Secondary Controls: Print & Reset */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400 border-t border-slate-800">
              <button
                type="button"
                onClick={handlePrint}
                className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF Copy</span>
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={handleReset}
                className="hover:text-rose-400 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Clear Form</span>
              </button>
              <span>•</span>
              <span className="text-slate-400">
                Direct Helpline: <strong className="text-amber-400 font-mono">+91 94057 51665</strong>
              </span>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
