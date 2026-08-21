import { useState } from 'react';
import { 
  ShieldCheck, Cpu, Layers, TrendingUp, Scale, CheckCircle2, 
  AlertTriangle, ArrowRight, RefreshCcw, Sparkles, PhoneCall, Award 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { AuditProcessFlowchart } from '../components/common/FlowchartDiagram';
import { brandIdentity } from '../data/brand';
import { contactDetails } from '../data/contact';

const auditQuestions = [
  {
    id: 'q1',
    category: 'Governance & GRC',
    question: 'How are your statutory compliance obligations and registers tracked?',
    options: [
      { text: 'Informal or managed ad-hoc by individuals (High Risk)', score: 0 },
      { text: 'Basic calendar / spreadsheet with occasional lapses', score: 10 },
      { text: 'Institutionalized compliance register with designated owners & regular reviews', score: 20 }
    ]
  },
  {
    id: 'q2',
    category: 'Operations & SOPs',
    question: 'What happens to operations when key department personnel are absent?',
    options: [
      { text: 'Operations stall, errors increase, or promoter must step in', score: 0 },
      { text: 'Partial documentation exists but people still rely on verbal instructions', score: 10 },
      { text: 'Fully documented SOP manuals, checklists & RACI matrices ensure zero interruption', score: 20 }
    ]
  },
  {
    id: 'q3',
    category: 'KPIs & MIS Visibility',
    question: 'How does executive leadership monitor organizational performance?',
    options: [
      { text: 'Gut feeling & delayed verbal updates without quantifiable scorecards', score: 0 },
      { text: 'Monthly accountant summaries without department-level operational KPIs', score: 10 },
      { text: 'Structured real-time MIS cockpit, role-specific KPIs & monthly review cadences', score: 20 }
    ]
  },
  {
    id: 'q4',
    category: 'Contracts & Legal Risk',
    question: 'How are commercial agreements, client contracts, and vendor terms executed?',
    options: [
      { text: 'Informal WhatsApp/Email agreements or generic untested templates', score: 0 },
      { text: 'Standard contracts exist but lack regular review and risk clauses', score: 10 },
      { text: 'Rigorous master agreements, NDAs, vendor SLAs & defined approval hierarchies', score: 20 }
    ]
  },
  {
    id: 'q5',
    category: 'Scalability & Expansion',
    question: 'How easily can your business open a new branch or replicate its operations?',
    options: [
      { text: 'Cannot replicate without severe quality drops and founder exhaustion', score: 0 },
      { text: 'Possible with heavy founder supervision and ad-hoc troubleshooting', score: 10 },
      { text: 'Standardized unit replication manual and turnkey onboarding frameworks exist', score: 20 }
    ]
  }
];

export default function AuditPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, score) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const totalQuestions = auditQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  let statusBadge = { title: 'High Vulnerability Risk', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
  if (totalScore >= 70) {
    statusBadge = { title: 'Systems-Driven & Institutionalized', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
  } else if (totalScore >= 40) {
    statusBadge = { title: 'Moderate Person-Dependency Gaps', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
  }

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <PageLayout
      title={`360° Systems & Compliance Health Audit – ${brandIdentity.shortName}`}
      description="Run an interactive self-diagnostic audit to evaluate your organizational governance, SOP strength, KPI visibility, and scalability readiness."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Self-Diagnostic</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            360° SYSTEMS & COMPLIANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">HEALTH AUDIT</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Evaluate your enterprise vulnerability across Governance, SOPs, KPI visibility, Contracts, and Scalability in 2 minutes.
          </p>

          <div className="max-w-3xl mx-auto">
            <AuditProcessFlowchart />
          </div>
        </div>
      </section>

      {/* Main Audit Tool */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Indicator */}
          <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                Audit Progress
              </span>
              <span className="font-display text-sm font-bold text-slate-900">
                {answeredCount} of {totalQuestions} Vectors Answered
              </span>
            </div>
            <div className="w-32 h-2.5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {!submitted ? (
            <div className="space-y-8">
              {auditQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                      Vector 0{idx + 1} • {q.category}
                    </span>
                    {answers[q.id] !== undefined && (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Answered
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h3>

                  <div className="space-y-2.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = answers[q.id] === opt.score;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSelect(q.id, opt.score)}
                          className={`w-full p-4 rounded-2xl text-left transition-all duration-150 cursor-pointer border flex items-center justify-between ${
                            isSelected
                              ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-medium pr-3">{opt.text}</span>
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400 text-slate-950'
                                : 'border-slate-300 bg-transparent'
                            }`}
                          >
                            {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-4 text-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  disabled={answeredCount < totalQuestions}
                  onClick={() => setSubmitted(true)}
                  className="w-full sm:w-auto"
                >
                  Generate Systems Health Score & Diagnosis
                </Button>
              </div>
            </div>
          ) : (
            /* Audit Result Certificate */
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-8 text-center animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                  Diagnostic Result
                </span>
                <h3 className="font-display text-4xl sm:text-6xl font-black text-white">
                  {totalScore} <span className="text-2xl text-slate-500 font-normal">/ 100</span>
                </h3>
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold border mt-2 ${statusBadge.color}`}>
                  {statusBadge.title}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                {totalScore >= 70
                  ? 'Your enterprise exhibits strong process adherence. GROW can assist in advanced MIS dashboard automation, institutional scaling manuals, and board-level risk oversight.'
                  : totalScore >= 40
                  ? 'Your enterprise has notable person-dependencies and moderate compliance risk. GROW Engine & Shield can codify standard SOPs and insulation registers to prevent revenue leakages.'
                  : 'Your enterprise operates with critical person-dependency and elevated compliance vulnerability. Immediate intervention via GROW Shield, Engine, and DoA governance matrices is recommended.'}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
                  Schedule Free 1-on-1 Diagnostic Debrief
                </Button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCcw className="w-4 h-4" />
                  <span>Retake Audit</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </PageLayout>
  );
}
