import React, { useState } from 'react';
import { 
  Landmark, Target, IndianRupee, Users, Cpu, TrendingUp, 
  ShoppingCart, Monitor, Scale, ShieldAlert, Award, CheckCircle2,
  Printer, MessageCircle, Mail, Sparkles, AlertCircle, FileCheck,
  RefreshCcw, ArrowRight, Building, Check, ShieldCheck, Download
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
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

export default function AuditPage() {
  // Client Organization Info State
  const [clientInfo, setClientInfo] = useState({
    orgName: '',
    orgNature: 'MSME',
    address: '',
    contactPerson: '',
    designation: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    estYear: '',
    employees: '',
    turnover: ''
  });

  // Ratings & Comments for 12 Functional Areas
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});

  // Overall Self Assessment & Top 5 Priority Areas
  const [overallHealth, setOverallHealth] = useState('B');
  const [priorityAreas, setPriorityAreas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (sectionId, ratingCode) => {
    setRatings((prev) => ({ ...prev, [sectionId]: ratingCode }));
  };

  const handleCommentChange = (sectionId, value) => {
    setComments((prev) => ({ ...prev, [sectionId]: value }));
  };

  const handlePriorityChange = (key, value) => {
    setPriorityAreas((prev) => ({ ...prev, [key]: value }));
  };

  // Calculate Diagnostic Score
  const totalSections = auditSections.length;
  const answeredCount = Object.keys(ratings).length;

  const calculateScore = () => {
    let score = 0;
    Object.values(ratings).forEach((code) => {
      const opt = auditQuestionnaireMeta.ratingOptions.find((o) => o.code === code);
      if (opt) score += opt.points;
    });
    return score;
  };

  const currentScore = calculateScore();
  const maxPossibleScore = totalSections * 4; // 48 points max

  // Score Health Level
  let healthDiagnosis = {
    title: 'High Person-Dependency & Compliance Gaps',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
    description: 'Significant operational risks identified. Standardized SOPs, GRC registers, and management controls are urgently recommended.',
    color: 'rose'
  };

  if (currentScore >= 38) {
    healthDiagnosis = {
      title: 'Strong Institutional Governance & Scalable Systems',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Your organization exhibits strong process maturity. Focus on digital automation, advanced MIS reporting, and unit expansion.',
      color: 'emerald'
    };
  } else if (currentScore >= 24) {
    healthDiagnosis = {
      title: 'Moderate Operational Maturity (Work-In-Progress)',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      description: 'Key processes exist but require formal codification, role-based KPIs, and tighter internal controls to prevent revenue leakages.',
      color: 'amber'
    };
  }

  // Format WhatsApp Return Message
  const generateWhatsAppMessage = () => {
    const filledDate = new Date().toLocaleDateString('en-IN');
    let msg = `*GROW FREE AUDIT QUESTIONNAIRE SUBMISSION*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Organization:* ${clientInfo.orgName || 'N/A'}\n`;
    msg += `*Nature:* ${clientInfo.orgNature || 'N/A'}\n`;
    msg += `*Contact Person:* ${clientInfo.contactPerson || 'N/A'} (${clientInfo.designation || 'N/A'})\n`;
    msg += `*Phone:* ${clientInfo.phone || 'N/A'} | *Email:* ${clientInfo.email || 'N/A'}\n`;
    msg += `*Location:* ${clientInfo.city || 'N/A'}, ${clientInfo.state || 'N/A'}\n`;
    msg += `*Turnover:* ${clientInfo.turnover || 'N/A'} | *Employees:* ${clientInfo.employees || 'N/A'}\n\n`;
    
    msg += `*DIAGNOSTIC HEALTH RATINGS (Score: ${currentScore}/${maxPossibleScore}):*\n`;
    auditSections.forEach((sec) => {
      const rate = ratings[sec.id] || 'Not Rated';
      const opt = auditQuestionnaireMeta.ratingOptions.find((o) => o.code === rate);
      const comment = comments[sec.id] ? ` (${comments[sec.id]})` : '';
      msg += `• ${sec.no}. ${sec.area}: *[${rate}]* ${opt ? opt.label : ''}${comment}\n`;
    });

    msg += `\n*Overall Self-Assessment:* [${overallHealth}]\n`;
    
    const priorities = Object.values(priorityAreas).filter((p) => p.trim() !== '');
    if (priorities.length > 0) {
      msg += `*Top Priority Areas:*\n`;
      priorities.forEach((p, idx) => {
        msg += ` ${idx + 1}. ${p}\n`;
      });
    }

    msg += `\n_Submitted via GROW India Web Portal on ${filledDate}._\n`;
    msg += `Please analyze this questionnaire and provide key observations and improvement recommendations.`;
    return encodeURIComponent(msg);
  };

  // Format Email Link
  const generateEmailHref = () => {
    const subject = encodeURIComponent(`Free Business Health Audit Submission - ${clientInfo.orgName || 'Organization Assessment'}`);
    const body = decodeURIComponent(generateWhatsAppMessage()).replace(/\*/g, '').replace(/_/g, '');
    return `mailto:${contactDetails.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the audit questionnaire?')) {
      setRatings({});
      setComments({});
      setClientInfo({
        orgName: '',
        orgNature: 'MSME',
        address: '',
        contactPerson: '',
        designation: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        estYear: '',
        employees: '',
        turnover: ''
      });
      setPriorityAreas({ p1: '', p2: '', p3: '', p4: '', p5: '' });
      setSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageLayout
      title={`Free Business Health Audit Questionnaire – ${brandIdentity.shortName}`}
      description="Fill the official GROW Free Audit Questionnaire & Organizational Health Check. Evaluate your organization across 12 key functional areas and send back for expert analysis."
    >
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800 print:bg-white print:text-slate-900 print:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider print:border-slate-300 print:text-slate-800">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Official Self-Assessment Tool</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white print:text-slate-900 leading-tight">
            GROW FREE AUDIT QUESTIONNAIRE
          </h1>
          <p className="font-display text-lg sm:text-2xl font-bold text-amber-400 print:text-amber-600">
            ORGANIZATIONAL HEALTH CHECK
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed print:text-slate-700">
            <strong>A Short Self-Assessment Tool for Organizations</strong>: Identify Strengths. Detect Gaps. Improve Systems. Drive Growth.
          </p>

          {/* Target Sectors Pill Strip */}
          <div className="pt-2 flex flex-wrap justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-300 print:text-slate-600">
            {auditQuestionnaireMeta.targetSectors.map((sector, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 print:bg-slate-100 print:border-slate-300"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Questionnaire Form Container */}
      <section className="py-10 lg:py-14 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Form Top: Instructions & Scoring Legend Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-amber-600" />
                  <span>INSTRUCTIONS</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {auditQuestionnaireMeta.instructions}
                </p>
              </div>

              {/* Progress Pill */}
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200 shrink-0">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900">
                    {answeredCount} of {totalSections} Rated
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Score: {currentScore} / {maxPossibleScore}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-xs">
                  {Math.round((answeredCount / totalSections) * 100)}%
                </div>
              </div>
            </div>

            {/* Rating Code Legend (A, B, C, D) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {auditQuestionnaireMeta.ratingOptions.map((opt) => (
                <div 
                  key={opt.code} 
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                    {opt.code}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{opt.label}</div>
                    <div className="text-[11px] text-slate-500">{opt.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Client Organization Information */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-600" />
                <span>ORGANIZATION PROFILE & CONTACT DETAILS</span>
              </h3>
              <p className="text-xs text-slate-500">
                Please provide your basic organization profile so we can prepare your personalized diagnostic summary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
              {/* Organization Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Organization Name *
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={clientInfo.orgName}
                  onChange={handleInfoChange}
                  placeholder="e.g. Acme Engineering Solutions Pvt Ltd"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Nature of Organization */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nature of Organization
                </label>
                <select
                  name="orgNature"
                  value={clientInfo.orgNature}
                  onChange={handleInfoChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="MSME">MSME</option>
                  <option value="Corporate / Private Ltd">Corporate / Private Ltd</option>
                  <option value="Start-up">Start-up</option>
                  <option value="Family-Owned Business">Family-Owned Business</option>
                  <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                  <option value="Trading / Retail">Trading / Retail</option>
                  <option value="Healthcare / Hospital">Healthcare / Hospital</option>
                  <option value="IT & Software">IT & Software</option>
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="NGO / Trust">NGO / Trust</option>
                  <option value="Government / PSU / Public Sector">Government / PSU / Public Sector</option>
                </select>
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={clientInfo.address}
                  onChange={handleInfoChange}
                  placeholder="Office / Plant / Headquarters Address"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={clientInfo.contactPerson}
                  onChange={handleInfoChange}
                  placeholder="Name of Key Contact"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={clientInfo.designation}
                  onChange={handleInfoChange}
                  placeholder="e.g. Managing Director / CEO / Head Ops"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={clientInfo.city}
                  onChange={handleInfoChange}
                  placeholder="e.g. Mumbai, Pune, Nagpur"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={clientInfo.state}
                  onChange={handleInfoChange}
                  placeholder="e.g. Maharashtra"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={clientInfo.email}
                  onChange={handleInfoChange}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Mobile / Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile / Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleInfoChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Year of Establishment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Year of Establishment
                </label>
                <input
                  type="text"
                  name="estYear"
                  value={clientInfo.estYear}
                  onChange={handleInfoChange}
                  placeholder="e.g. 2018"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* No. of Employees */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  No. of Employees
                </label>
                <input
                  type="text"
                  name="employees"
                  value={clientInfo.employees}
                  onChange={handleInfoChange}
                  placeholder="e.g. 25-50"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Turnover Approx */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Turnover (Approx.)
                </label>
                <input
                  type="text"
                  name="turnover"
                  value={clientInfo.turnover}
                  onChange={handleInfoChange}
                  placeholder="e.g. ₹5 Cr - ₹25 Cr"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 2: The 12 Functional Areas & Key Questions */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Core Diagnostic Matrix
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  12 FUNCTIONAL AREAS & KEY SELF-ASSESSMENT QUESTIONS
                </h3>
              </div>
              <div className="text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 inline-block">
                Select A, B, C, or D for each area
              </div>
            </div>

            {/* Questions List */}
            <div className="divide-y divide-slate-200">
              {auditSections.map((sec) => {
                const IconComponent = iconMap[sec.icon] || CheckCircle2;
                const currentRating = ratings[sec.id];

                return (
                  <div 
                    key={sec.id}
                    className={`p-5 sm:p-7 transition-colors ${
                      currentRating ? 'bg-amber-50/20' : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                      
                      {/* Left: Section Header & Questions */}
                      <div className="lg:col-span-7 space-y-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                            {sec.no}
                          </div>
                          <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-amber-600" />
                            <span>{sec.area}</span>
                          </h4>
                        </div>

                        {/* Questions bullet box */}
                        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 text-xs sm:text-sm text-slate-700 space-y-1.5">
                          {sec.questions.map((q, idx) => (
                            <p key={idx} className="leading-relaxed font-medium">
                              {q}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Right: Rating Options Selection (A, B, C, D) + Comments */}
                      <div className="lg:col-span-5 space-y-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                            Rating Status (Select One):
                          </label>
                          <div className="grid grid-cols-4 gap-2">
                            {auditQuestionnaireMeta.ratingOptions.map((opt) => {
                              const isSelected = currentRating === opt.code;
                              return (
                                <button
                                  key={opt.code}
                                  type="button"
                                  onClick={() => handleRatingSelect(sec.id, opt.code)}
                                  className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                                    isSelected
                                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-400'
                                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                                  }`}
                                >
                                  <span className="font-black text-sm sm:text-base mb-0.5">
                                    {opt.code}
                                  </span>
                                  <span className="text-[9px] sm:text-[10px] leading-tight font-medium opacity-90 line-clamp-1">
                                    {opt.label.split(' ')[0]}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Optional Comments */}
                        <div>
                          <input
                            type="text"
                            placeholder="Optional Comments / Specific observations..."
                            value={comments[sec.id] || ''}
                            onChange={(e) => handleCommentChange(sec.id, e.target.value)}
                            className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Overall Self-Assessment & Top 5 Priority Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Overall Rating Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>OVERALL SELF-ASSESSMENT</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                  How would you rate your overall organizational health?
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Select your subjective executive assessment of the organization's current readiness.
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  {auditQuestionnaireMeta.overallRatingOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => setOverallHealth(opt.code)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        overallHealth === opt.code
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-md ring-2 ring-amber-400/40'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                        {opt.code}
                      </span>
                      <span className="text-xs font-bold">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Diagnostic Score Card */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Diagnostic Score</span>
                  <span className="font-mono font-bold text-amber-400">{answeredCount}/12 Evaluated</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-display text-white">{currentScore}</span>
                  <span className="text-slate-400 font-bold text-sm">/ {maxPossibleScore} Points</span>
                </div>
                <div className={`p-2.5 rounded-xl border text-xs font-bold ${healthDiagnosis.badgeClass}`}>
                  {healthDiagnosis.title}
                </div>
              </div>
            </div>

            {/* Top 5 Priority Areas */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                  <Target className="w-4 h-4" />
                  <span>TOP 5 PRIORITY AREAS</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                  What are the top 5 areas in your organization requiring immediate systemization?
                </h4>
                <p className="text-xs text-slate-500 mb-3">
                  Specify the key departments, pain points, or processes you want GROW India to prioritize in recommendations.
                </p>
              </div>

              <div className="space-y-2.5">
                {[1, 2, 3, 4, 5].map((num) => {
                  const key = `p${num}`;
                  return (
                    <div key={key} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                        {num}
                      </span>
                      <input
                        type="text"
                        placeholder={`Priority Area ${num} (e.g. Finance approvals, Sales SOPs, Vendor SLAs)`}
                        value={priorityAreas[key]}
                        onChange={(e) => handlePriorityChange(key, e.target.value)}
                        className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 4: Return The Completed Form (Multi-Channel Action Center) */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>OUR CONFIDENTIALITY COMMITMENT</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  PLEASE RETURN THE COMPLETED FORM TO US
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Your responses are strictly confidential and will be used only for organizational improvement recommendations. Our senior consultants will analyze and share a structured summary report with key observations and improvement suggestions.
                </p>
              </div>

              {/* Diagnostic Quick Score */}
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 text-center shrink-0">
                <div className="text-[11px] font-bold text-amber-400 uppercase">Current Audit Score</div>
                <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                  {currentScore} <span className="text-xs text-slate-400">/ 48</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">{answeredCount} of 12 Areas Rated</div>
              </div>
            </div>

            {/* Submission Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* WhatsApp Return Button */}
              <a
                href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>Send via WhatsApp</span>
              </a>

              {/* Email Return Button */}
              <a
                href={generateEmailHref()}
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all cursor-pointer text-center"
              >
                <Mail className="w-5 h-5 shrink-0 text-amber-400" />
                <span>Email Form to GROW</span>
              </a>

              {/* Print / Save PDF Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <Printer className="w-5 h-5 shrink-0 text-slate-700" />
                <span>Print / Save as PDF</span>
              </button>
            </div>

            {/* Direct Official Contact Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-slate-800 gap-4">
              <div className="flex items-center gap-2">
                <span>Direct WhatsApp Helpline:</span>
                <strong className="text-amber-400 font-mono">{contactDetails.phoneDisplay}</strong>
              </div>
              <div className="flex items-center gap-2">
                <span>Official Consulting Email:</span>
                <strong className="text-slate-200">{contactDetails.email}</strong>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset Form</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
