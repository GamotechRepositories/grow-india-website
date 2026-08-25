import React, { useState } from 'react';
import { 
  Landmark, Target, IndianRupee, Users, Cpu, TrendingUp, 
  ShoppingCart, Monitor, Scale, ShieldAlert, Award, CheckCircle2,
  Printer, MessageCircle, Mail, Sparkles, AlertCircle, FileCheck,
  RefreshCcw, ArrowRight, ArrowLeft, Building2, Check, ShieldCheck, 
  Download, CheckCircle, AlertTriangle, XCircle, MinusCircle, 
  Send, User, Phone, Play, HelpCircle, Eye
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

const ratingOptions = [
  {
    code: 'A',
    label: 'Fully Established',
    description: 'Documented SOPs, active controls & institutional workflows are fully in place.',
    points: 4,
    color: 'emerald',
    badgeClass: 'bg-emerald-500 text-white',
    cardActive: 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-400 shadow-md',
    cardIdle: 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
  },
  {
    code: 'B',
    label: 'Partially Established',
    description: 'Work-in-progress or partial documentation exists; still relies on verbal instructions.',
    points: 3,
    color: 'amber',
    badgeClass: 'bg-amber-500 text-slate-950 font-black',
    cardActive: 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-400 shadow-md',
    cardIdle: 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/30'
  },
  {
    code: 'C',
    label: 'Not Established',
    description: 'Informal / ad-hoc practices with major vulnerability or owner dependency gaps.',
    points: 1,
    color: 'rose',
    badgeClass: 'bg-rose-500 text-white',
    cardActive: 'bg-rose-50/80 border-rose-500 ring-2 ring-rose-400 shadow-md',
    cardIdle: 'bg-white border-slate-200 hover:border-rose-300 hover:bg-rose-50/30'
  },
  {
    code: 'D',
    label: 'Not Applicable',
    description: 'Not relevant or not applicable to our current organizational stage.',
    points: 0,
    color: 'slate',
    badgeClass: 'bg-slate-600 text-white',
    cardActive: 'bg-slate-100 border-slate-600 ring-2 ring-slate-400 shadow-md',
    cardIdle: 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
  }
];

export default function AuditPage() {
  // Current Flow Step: 'register' | 'exam' | 'result'
  const [currentStep, setCurrentStep] = useState('register');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Client Organization Registration Data
  const [clientInfo, setClientInfo] = useState({
    orgName: '',
    orgNature: 'MSME',
    contactPerson: '',
    designation: '',
    phone: '',
    email: '',
    city: '',
    turnover: ''
  });

  // User MCQ Answers ({ gov: 'A', strat: 'B', ... })
  const [answers, setAnswers] = useState({});
  const [notes, setNotes] = useState({});
  const [priorityAreas, setPriorityAreas] = useState('');
  const [overallHealth, setOverallHealth] = useState('B');
  const [validationError, setValidationError] = useState('');

  const totalQuestions = auditSections.length;
  const answeredCount = Object.keys(answers).length;

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleStartExam = (e) => {
    e.preventDefault();
    if (!clientInfo.orgName.trim() || !clientInfo.phone.trim()) {
      setValidationError('Please enter your Organization Name and Contact Phone Number to start the diagnostic test.');
      return;
    }
    setValidationError('');
    setCurrentStep('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId, code) => {
    setAnswers((prev) => ({ ...prev, [questionId]: code }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } else {
      // Finished all questions -> go to result
      setCurrentStep('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  // Calculate Diagnostic Score (out of 48)
  const calculateTotalScore = () => {
    let score = 0;
    Object.values(answers).forEach((code) => {
      const opt = ratingOptions.find((o) => o.code === code);
      if (opt) score += opt.points;
    });
    return score;
  };

  const totalScore = calculateTotalScore();
  const maxScore = totalQuestions * 4; // 48
  const scorePercentage = Math.round((totalScore / maxScore) * 100);

  // Health diagnosis details
  let diagnosis = {
    grade: 'C (High Risk)',
    title: 'High Person-Dependency & Compliance Gaps',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    summary: 'Critical operational and risk vulnerabilities detected. Standardized SOPs, RACI matrices, and internal controls are urgently needed.'
  };

  if (totalScore >= 38) {
    diagnosis = {
      grade: 'A (Excellent)',
      title: 'Strong Institutional Governance & Scalable Systems',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      summary: 'Your organization shows strong system maturity. Focus on digital automation, advanced MIS reporting, and multi-unit replication.'
    };
  } else if (totalScore >= 24) {
    diagnosis = {
      grade: 'B (Moderate)',
      title: 'Moderate Operational Maturity (Work-In-Progress)',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      summary: 'Partial systems exist but lack full documentation and management oversight. Departmental KPIs and master compliance registers recommended.'
    };
  }

  // Format WhatsApp Submission Message
  const getWhatsAppReportMessage = () => {
    let msg = `*GROW BUSINESS HEALTH DIAGNOSTIC TEST REPORT*\n`;
    msg += `========================================\n`;
    msg += `*Organization:* ${clientInfo.orgName}\n`;
    msg += `*Sector:* ${clientInfo.orgNature}\n`;
    msg += `*Contact Person:* ${clientInfo.contactPerson || 'Lead'} (${clientInfo.designation || 'Leader'})\n`;
    msg += `*Phone:* ${clientInfo.phone} | *City:* ${clientInfo.city || 'N/A'}\n`;
    if (clientInfo.email) msg += `*Email:* ${clientInfo.email}\n`;
    msg += `\n*EXAM SCORECARD:* ${totalScore} / ${maxScore} Points (${scorePercentage}% Score)\n`;
    msg += `*Diagnostic Result:* ${diagnosis.title} [Grade: ${diagnosis.grade}]\n\n`;

    msg += `*12 DEPARTMENT MCQ RESULTS:*\n`;
    auditSections.forEach((sec) => {
      const code = answers[sec.id] || 'Not Answered';
      const opt = ratingOptions.find((o) => o.code === code);
      const note = notes[sec.id] ? ` (Note: ${notes[sec.id]})` : '';
      msg += `Q${sec.no}. ${sec.area}: *Option ${code}* - ${opt ? opt.label : 'Pending'}${note}\n`;
    });

    if (priorityAreas.trim()) {
      msg += `\n*Top Priority Areas Requested:*\n${priorityAreas.trim()}\n`;
    }

    msg += `\n_Submitted via GROW India Web Diagnostic Portal._\n`;
    msg += `Please analyze this report and provide structured recommendations.`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${getWhatsAppReportMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Business Health Test Report - ${clientInfo.orgName}`);
    const body = decodeURIComponent(getWhatsAppReportMessage()).replace(/\*/g, '').replace(/=/g, '-');
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const currentQuestion = auditSections[currentQuestionIndex] || auditSections[0];
  const CurrentIcon = iconMap[currentQuestion.icon] || CheckCircle2;
  const currentAnswer = answers[currentQuestion.id];

  return (
    <PageLayout
      title={`Business Health Diagnostic Exam – ${brandIdentity.shortName}`}
      description="Take the 12-question interactive business health check test. Assess your company's SOPs, risk controls, and systems maturity with instant grading."
    >
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-8 sm:py-12 border-b border-slate-800 print:bg-white print:text-slate-900 print:py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Self-Diagnostic Test</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white print:text-slate-900 leading-tight">
            GROW Business Health Diagnostic Test
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto print:text-slate-600">
            A structured 12-question diagnostic test to evaluate your organizational systems, governance, and risk controls.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-8 sm:py-12 bg-slate-50 min-h-[700px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* ========================================================================= */}
          {/* STEP 1: REGISTRATION / START SCREEN                                       */}
          {/* ========================================================================= */}
          {currentStep === 'register' && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 shadow-sm space-y-6">
              
              <div className="text-center space-y-2 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-md shadow-amber-500/20">
                  <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Start Your 12-Question Diagnostic Test
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Takes less than 3 minutes. Answer 12 simple multiple-choice questions to receive your instant systems health score and actionable report.
                </p>
              </div>

              {validationError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              <form onSubmit={handleStartExam} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      name="orgName"
                      value={clientInfo.orgName}
                      onChange={handleInfoChange}
                      placeholder="e.g. Zenith Tech Solutions Pvt Ltd"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Nature of Organization */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sector / Business Type
                    </label>
                    <select
                      name="orgNature"
                      value={clientInfo.orgNature}
                      onChange={handleInfoChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="MSME">MSME / Small Business</option>
                      <option value="Private Limited / Corporate">Private Limited / Corporate</option>
                      <option value="Start-up">Start-up</option>
                      <option value="Family Business">Family Business</option>
                      <option value="Manufacturing & Plant">Manufacturing & Plant</option>
                      <option value="Trading / Retail">Trading / Retail</option>
                      <option value="Services / IT">Services / IT / BPO</option>
                      <option value="Healthcare / Hospital">Healthcare / Hospital</option>
                      <option value="Educational Institution">Educational Institution</option>
                      <option value="NGO / Trust">NGO / Trust</option>
                      <option value="Government / PSU">Government / PSU</option>
                    </select>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={clientInfo.contactPerson}
                      onChange={handleInfoChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={clientInfo.phone}
                      onChange={handleInfoChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={clientInfo.city}
                      onChange={handleInfoChange}
                      placeholder="e.g. Mumbai, Pune"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Begin 12-Question Diagnostic Test</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>

              <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free & Confidential • No Credit Card Required</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: INTERACTIVE EXAM QUESTION PLAYER (One Question at a Time)         */}
          {/* ========================================================================= */}
          {currentStep === 'exam' && (
            <div className="space-y-6">
              
              {/* Exam Top Bar: Progress & Question Palette */}
              <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 text-amber-700">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                  </span>
                  <span className="text-slate-500 font-mono">
                    {answeredCount} / {totalQuestions} Answered ({Math.round((answeredCount / totalQuestions) * 100)}%)
                  </span>
                </div>

                {/* Progress Bar Line */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                  />
                </div>

                {/* Question Bubbles Palette (1 to 12) */}
                <div className="flex items-center justify-between gap-1 pt-1 overflow-x-auto pb-1 scrollbar-none">
                  {auditSections.map((sec, idx) => {
                    const isAnswered = Boolean(answers[sec.id]);
                    const isCurrent = idx === currentQuestionIndex;

                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-bold text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                          isCurrent
                            ? 'bg-slate-900 text-amber-400 ring-2 ring-amber-400 shadow-sm'
                            : isAnswered
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        title={`Question ${idx + 1}: ${sec.area}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Question Box */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Department Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                      Q{currentQuestion.no}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                        Functional Area
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                        <CurrentIcon className="w-4 h-4 text-amber-600" />
                        <span>{currentQuestion.area}</span>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Question Text Box */}
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 text-slate-800 text-xs sm:text-sm space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Assessment Questions:
                  </span>
                  {currentQuestion.questions.map((q, i) => (
                    <p key={i} className="font-medium leading-relaxed">
                      {q}
                    </p>
                  ))}
                </div>

                {/* MCQ Options (A, B, C, D) */}
                <div className="space-y-2.5">
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select the option that best describes your organization:
                  </span>

                  <div className="space-y-2.5">
                    {ratingOptions.map((opt) => {
                      const isSelected = currentAnswer === opt.code;

                      return (
                        <div
                          key={opt.code}
                          onClick={() => handleSelectOption(currentQuestion.id, opt.code)}
                          className={`p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex items-start gap-3.5 select-none ${
                            isSelected ? opt.cardActive : opt.cardIdle
                          }`}
                        >
                          {/* Radio / Code Badge */}
                          <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs ${
                            isSelected ? opt.badgeClass : 'bg-slate-100 text-slate-700 border border-slate-300'
                          }`}>
                            {opt.code}
                          </div>

                          {/* Option Details */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-sm text-slate-900 leading-tight">
                                {opt.label}
                              </h4>
                              {isSelected && (
                                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Selected</span>
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                              {opt.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Note */}
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Optional: Add a specific note or observation for this department..."
                    value={notes[currentQuestion.id] || ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Question Navigation Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 sm:px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-xs font-bold text-slate-500 hidden sm:block">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 sm:px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{currentQuestionIndex === totalQuestions - 1 ? 'Review & View Result' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: EXAM SCORECARD & REPORT CARD RESULT                               */}
          {/* ========================================================================= */}
          {currentStep === 'result' && (
            <div className="space-y-6">
              
              {/* Scorecard Header Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                  <Award className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Diagnostic Exam Completed
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {clientInfo.orgName || 'Your Organization'} Health Report
                  </h2>
                  <p className="text-xs text-slate-500">
                    Candidate: {clientInfo.contactPerson || 'Lead'} • Sector: {clientInfo.orgNature}
                  </p>
                </div>

                {/* Big Score Box */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Overall Systems Maturity Score
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-display text-amber-400">
                      {totalScore}
                    </span>
                    <span className="text-slate-400 font-bold text-lg">/ {maxScore}</span>
                    <span className="text-emerald-400 font-bold text-sm ml-1">({scorePercentage}%)</span>
                  </div>

                  <div className={`p-2.5 rounded-xl border text-xs font-bold ${diagnosis.badgeColor}`}>
                    Grade: {diagnosis.grade} — {diagnosis.title}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {diagnosis.summary}
                  </p>
                </div>
              </div>

              {/* Department Breakdown Matrix */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-600" />
                  <span>12-Department MCQ Score Breakdown</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {auditSections.map((sec) => {
                    const ans = answers[sec.id] || 'Not Answered';
                    const opt = ratingOptions.find((o) => o.code === ans);

                    return (
                      <div 
                        key={sec.id}
                        className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-slate-900 text-amber-400 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {sec.no}
                          </span>
                          <span className="text-xs font-bold text-slate-800 line-clamp-1">
                            {sec.area}
                          </span>
                        </div>

                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold shrink-0 ${
                          ans === 'A' ? 'bg-emerald-100 text-emerald-800' :
                          ans === 'B' ? 'bg-amber-100 text-amber-800' :
                          ans === 'C' ? 'bg-rose-100 text-rose-800' : 'bg-slate-200 text-slate-700'
                        }`}>
                          Option {ans} ({opt ? opt.points : 0} pts)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top Priority Areas Notes */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                  Priority Areas (Optional note for GROW Consultants):
                </h3>
                <textarea
                  rows={3}
                  value={priorityAreas}
                  onChange={(e) => setPriorityAreas(e.target.value)}
                  placeholder="Mention any specific challenges e.g. Sales team follow-ups, finance reconciliation, employee attendance tracking..."
                  className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* SEND REPORT TO GROW (1-Click Action Center) */}
              <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-5 text-center">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Official Advisory Handover
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Send This Diagnostic Report to GROW India
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                    Click below to send your completed diagnostic report via WhatsApp or Email. Our senior consultants will analyze your department scores and contact you with targeted recommendations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/60 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer transition-all"
                  >
                    <Mail className="w-5 h-5 text-amber-400" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="pt-3 flex items-center justify-center gap-4 text-xs text-slate-400 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep('exam');
                      setCurrentQuestionIndex(0);
                    }}
                    className="hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Review Answers</span>
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print PDF</span>
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Retake diagnostic test from start?')) {
                        setAnswers({});
                        setNotes({});
                        setPriorityAreas('');
                        setCurrentStep('register');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Retake Test</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </PageLayout>
  );
}
