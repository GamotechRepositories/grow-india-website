import React, { useState, useEffect } from 'react';
import { 
  Landmark, Target, IndianRupee, Users, Cpu, TrendingUp, 
  ShoppingCart, Monitor, Scale, ShieldAlert, Award, CheckCircle2,
  Printer, MessageCircle, Mail, Sparkles, AlertCircle, FileCheck,
  RefreshCcw, ArrowRight, ArrowLeft, Building2, Check, ShieldCheck, 
  CheckCircle, AlertTriangle, XCircle, MinusCircle, User,
  Phone, Clock, HelpCircle, FileText, ChevronRight, BarChart3
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import { auditSections } from '../data/auditQuestionnaire';
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

const answerChoices = [
  {
    code: 'A',
    title: 'Yes, Fully Established',
    desc: 'Clearly documented, active & followed by team',
    points: 4,
    badgeColor: 'bg-emerald-500 text-white',
    cardBorder: 'hover:border-emerald-500 hover:bg-emerald-50/40',
    selectedStyle: 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500 shadow-md',
    icon: CheckCircle
  },
  {
    code: 'B',
    title: 'Partially Established',
    desc: 'Work in progress / partial systems exist',
    points: 3,
    badgeColor: 'bg-amber-500 text-slate-950 font-bold',
    cardBorder: 'hover:border-amber-500 hover:bg-amber-50/40',
    selectedStyle: 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400 shadow-md',
    icon: AlertTriangle
  },
  {
    code: 'C',
    title: 'No, Major Gaps / Informal',
    desc: 'Unwritten, ad-hoc, or person-dependent',
    points: 1,
    badgeColor: 'bg-rose-500 text-white',
    cardBorder: 'hover:border-rose-500 hover:bg-rose-50/40',
    selectedStyle: 'border-rose-600 bg-rose-50/80 ring-2 ring-rose-400 shadow-md',
    icon: XCircle
  },
  {
    code: 'D',
    title: 'Not Applicable',
    desc: 'Not relevant to our current business stage',
    points: 0,
    badgeColor: 'bg-slate-600 text-white',
    cardBorder: 'hover:border-slate-400 hover:bg-slate-50',
    selectedStyle: 'border-slate-600 bg-slate-100 ring-2 ring-slate-400 shadow-md',
    icon: MinusCircle
  }
];

export default function AuditPage() {
  // View mode: 'step' (interactive wizard) or 'list' (all questions on one page)
  const [viewMode, setViewMode] = useState('step');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Client Answers
  const [answers, setAnswers] = useState({});
  const [notes, setNotes] = useState({});

  // Client Contact Details
  const [contactInfo, setContactInfo] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'MSME'
  });

  const [formError, setFormError] = useState('');

  const totalQuestions = auditSections.length;
  const answeredCount = Object.keys(answers).length;

  // Calculate Score
  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach((code) => {
      const choice = answerChoices.find((c) => c.code === code);
      if (choice) score += choice.points;
    });
    return score;
  };

  const currentScore = calculateScore();
  const maxScore = totalQuestions * 4; // 48
  const scorePercent = Math.round((currentScore / maxScore) * 100);

  // Health diagnosis
  let healthDiagnosis = {
    title: 'High Vulnerability & Person Dependency',
    color: 'text-rose-600',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
    desc: 'Critical gaps detected in daily operations and compliance. Standardized SOPs and accountability matrices are urgently needed.'
  };

  if (currentScore >= 38) {
    healthDiagnosis = {
      title: 'Strong Institutional Governance',
      color: 'text-emerald-600',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      desc: 'High process maturity. Ready for automated digital ERP workflows, expansion models, and market scaling.'
    };
  } else if (currentScore >= 24) {
    healthDiagnosis = {
      title: 'Moderate Operational Health',
      color: 'text-amber-600',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      desc: 'Good foundation, but certain departments depend heavily on informal memory. Departmental KPIs and written playbooks will unlock growth.'
    };
  }

  // Answer selection handler
  const handleSelectAnswer = (sectionId, code) => {
    setAnswers((prev) => ({ ...prev, [sectionId]: code }));

    // In step mode, smoothly move to next question after small delay
    if (viewMode === 'step' && currentStepIndex < totalQuestions) {
      setTimeout(() => {
        setCurrentStepIndex((prev) => Math.min(prev + 1, totalQuestions));
      }, 250);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  // Formatted WhatsApp Message
  const getWhatsAppMessage = () => {
    let msg = `*GROW BUSINESS HEALTH AUDIT REPORT*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Company:* ${contactInfo.companyName || 'Not Provided'}\n`;
    msg += `*Contact:* ${contactInfo.contactName || 'Not Provided'}\n`;
    msg += `*Phone:* ${contactInfo.phone || 'Not Provided'}\n`;
    if (contactInfo.email) msg += `*Email:* ${contactInfo.email}\n`;
    if (contactInfo.city) msg += `*City:* ${contactInfo.city}\n`;
    msg += `*Type:* ${contactInfo.businessType}\n\n`;

    msg += `*OVERALL DIAGNOSTIC SCORE:* ${currentScore} / ${maxScore} (${scorePercent}%)\n`;
    msg += `*Diagnosis:* ${healthDiagnosis.title}\n\n`;

    msg += `*12 FUNCTIONAL AREA RATINGS:*\n`;
    auditSections.forEach((sec) => {
      const code = answers[sec.id] || 'Not Answered';
      const choice = answerChoices.find((c) => c.code === code);
      const note = notes[sec.id] ? ` (Note: ${notes[sec.id]})` : '';
      msg += `• ${sec.no}. ${sec.area}: *${choice ? choice.title : code}*${note}\n`;
    });

    msg += `\n_Submitted via GROW India Web Portal._\n`;
    msg += `Please review our audit and share recommendations.`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSend = () => {
    if (!contactInfo.companyName.trim() && !contactInfo.phone.trim()) {
      setFormError('Please enter your Company Name and Phone Number to submit.');
      return;
    }
    const url = `https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = () => {
    if (!contactInfo.companyName.trim() && !contactInfo.phone.trim()) {
      setFormError('Please enter your Company Name and Phone Number to submit.');
      return;
    }
    const subject = encodeURIComponent(`Business Health Audit - ${contactInfo.companyName}`);
    const body = decodeURIComponent(getWhatsAppMessage()).replace(/\*/g, '').replace(/_/g, '');
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    if (window.confirm('Do you want to reset all responses?')) {
      setAnswers({});
      setNotes({});
      setContactInfo({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        city: '',
        businessType: 'MSME'
      });
      setCurrentStepIndex(0);
      setFormError('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentSection = auditSections[currentStepIndex] || auditSections[0];
  const CurrentIcon = iconMap[currentSection?.icon] || CheckCircle2;
  const isFinalStep = currentStepIndex >= totalQuestions;

  return (
    <PageLayout
      title={`Free Business Health Audit – ${brandIdentity.shortName}`}
      description="2-Minute simple self-assessment for businesses. Discover your operational health score and find system gaps."
    >
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>2-Minute Free Assessment</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            GROW Business Health Audit
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Is your business running on predictable systems or person-dependent hustle? Answer 12 quick questions to find out.
          </p>

          {/* View Mode Toggle: Interactive Stepper vs Full Sheet */}
          <div className="pt-3 flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode('step')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'step'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Step-by-Step (Easy)
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              View All 12 Questions
            </button>
          </div>
        </div>
      </section>

      {/* Main Assessment Container */}
      <section className="py-8 sm:py-12 bg-slate-50 min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* ========================================================= */}
          {/* MODE 1: STEP-BY-STEP INTERACTIVE WIZARD (SUPER EASY) */}
          {/* ========================================================= */}
          {viewMode === 'step' && (
            <div className="space-y-6">

              {/* Progress Bar & Counter */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>
                    {isFinalStep 
                      ? 'Assessment Complete! Review & Submit' 
                      : `Question ${currentStepIndex + 1} of ${totalQuestions}`}
                  </span>
                  <span className="text-amber-600 font-extrabold font-mono">
                    {answeredCount} of {totalQuestions} Answered ({scorePercent}% Health Score)
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* QUESTION CARD (Step 0 to 11) */}
              {!isFinalStep ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                  
                  {/* Department Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                        {currentSection.no}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-1.5 border border-slate-200">
                        <CurrentIcon className="w-3.5 h-3.5 text-amber-600" />
                        <span>{currentSection.area}</span>
                      </span>
                    </div>

                    {/* Clear Questions */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5 text-slate-800 text-sm sm:text-base font-semibold">
                      {currentSection.questions.map((q, idx) => (
                        <p key={idx} className="leading-snug">
                          {q}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* 4 Big, Tap-Friendly Choices */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Select status in your organization:
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {answerChoices.map((choice) => {
                        const isSelected = answers[currentSection.id] === choice.code;
                        const ChoiceIcon = choice.icon;

                        return (
                          <button
                            key={choice.code}
                            type="button"
                            onClick={() => handleSelectAnswer(currentSection.id, choice.code)}
                            className={`p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between select-none ${
                              isSelected 
                                ? choice.selectedStyle 
                                : `bg-white border-slate-200 ${choice.cardBorder}`
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-xs px-2.5 py-0.5 rounded-md font-extrabold ${choice.badgeColor}`}>
                                {choice.code}
                              </span>
                              <ChoiceIcon className={`w-4 h-4 ${isSelected ? 'text-slate-900' : 'text-slate-400'}`} />
                            </div>

                            <div>
                              <div className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
                                {choice.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1 leading-snug">
                                {choice.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <input
                      type="text"
                      placeholder="Optional remark / specific note for this area..."
                      value={notes[currentSection.id] || ''}
                      onChange={(e) => setNotes((prev) => ({ ...prev, [currentSection.id]: e.target.value }))}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Navigation Buttons (Back & Next) */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      disabled={currentStepIndex === 0}
                      onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                      className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>{currentStepIndex === totalQuestions - 1 ? 'Review & Submit' : 'Next Question'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* FINAL SUMMARY & 1-CLICK SUBMIT CARD */
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                  
                  {/* Score & Diagnosis Banner */}
                  <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Assessment Completed
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black font-display">
                        Health Score: {currentScore} / {maxScore} ({scorePercent}%)
                      </h3>
                      <p className="text-xs text-slate-300">
                        {healthDiagnosis.desc}
                      </p>
                    </div>

                    <div className={`px-4 py-2 rounded-xl border text-xs font-bold shrink-0 ${healthDiagnosis.badgeClass}`}>
                      {healthDiagnosis.title}
                    </div>
                  </div>

                  {/* Contact Details Form to Send */}
                  <div className="space-y-4 pt-2">
                    <div className="border-b border-slate-100 pb-2">
                      <h4 className="font-display font-bold text-base text-slate-900">
                        Where should we send your detailed diagnostic report?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Enter your contact details so our senior partner can review and share recommendations.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Company / Organization Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={contactInfo.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. ABC Manufacturing Pvt Ltd"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={contactInfo.contactName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          WhatsApp Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={contactInfo.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Send My Audit on WhatsApp (+91 94057 51665)</span>
                    </button>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleEmailSend}
                        className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      >
                        <Mail className="w-4 h-4 text-amber-600" />
                        <span>Send via Email</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStepIndex(0)}
                        className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>Edit Answers</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* MODE 2: ALL 12 QUESTIONS IN ONE CLEAN VIEW */}
          {/* ========================================================= */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              
              {/* Contact Info Header Box */}
              <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <span>Company Details</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <input
                    type="text"
                    name="companyName"
                    value={contactInfo.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name *"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                  <input
                    type="text"
                    name="contactName"
                    value={contactInfo.contactName}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleInputChange}
                    placeholder="WhatsApp Number *"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              {/* 12 Question Cards List */}
              <div className="space-y-4">
                {auditSections.map((sec) => {
                  const IconComp = iconMap[sec.icon] || CheckCircle2;
                  const currentSelected = answers[sec.id];

                  return (
                    <div key={sec.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                        <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                          {sec.no}
                        </span>
                        <IconComp className="w-4 h-4 text-amber-600" />
                        <span>{sec.area}</span>
                      </div>

                      <div className="text-xs text-slate-600 space-y-0.5 pl-8">
                        {sec.questions.map((q, idx) => (
                          <p key={idx}>{q}</p>
                        ))}
                      </div>

                      {/* 4 Choices */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 pl-0 sm:pl-8">
                        {answerChoices.map((c) => {
                          const isSel = currentSelected === c.code;
                          return (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => handleSelectAnswer(sec.id, c.code)}
                              className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                                isSel ? c.selectedStyle : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              <span className="font-extrabold text-xs block mb-0.5">{c.code}</span>
                              <span className="font-bold text-xs block">{c.title.split(',')[0]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Send Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 text-center">
                <div className="text-lg font-bold">
                  Score: {currentScore} / {maxScore} ({scorePercent}%) - {healthDiagnosis.title}
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full max-w-md mx-auto flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Completed Audit via WhatsApp</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </section>
    </PageLayout>
  );
}
