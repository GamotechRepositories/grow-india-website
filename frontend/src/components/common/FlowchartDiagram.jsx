import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Workflow, Layers, 
  RotateCw, ChevronRight, ChevronLeft, Activity, Sparkles, Target, Landmark, ArrowDown, FileSearch, ShieldAlert, CheckCircle, Compass 
} from 'lucide-react';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../../data/methodology';
import { whyGovernmentSystemsMatter } from '../../data/government';

// 1. The 10-Node Integrated GROW Cycle Flowchart
export function GrowCycleFlowchart() {
  const [activeStep, setActiveStep] = useState(0);

  const phaseGroups = [
    { name: 'Phase 1: Discovery & Assessment', steps: [0, 1] },
    { name: 'Phase 2: Framework Engineering', steps: [2, 3] },
    { name: 'Phase 3: Operational Codification', steps: [4, 5] },
    { name: 'Phase 4: Governance & Review', steps: [6, 7] },
    { name: 'Phase 5: Sustainable Scale', steps: [8, 9] }
  ];

  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#070D1E] via-slate-950 to-[#050914] text-white border-2 border-amber-400/30 shadow-2xl relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6 relative z-10">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
            Interactive Systems Pipeline
          </span>
          <h3 className="font-display text-lg sm:text-2xl font-black text-white">
            The 10-Node Integrated GROW Cycle
          </h3>
        </div>
        <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Closed-Loop Architecture</span>
        </span>
      </div>

      {/* Desktop Visual Flow Pipeline */}
      <div className="hidden lg:block relative z-10 mb-6">
        <div className="grid grid-cols-5 gap-3">
          {growIntegratedCycle.cycleSteps.slice(0, 5).map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.03] font-bold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-slate-950' : 'text-amber-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold opacity-60">→</span>
                </div>
                <span className="text-xs font-bold leading-tight block">
                  {step}
                </span>
              </button>
            );
          })}
        </div>

        {/* Lower Row 6-10 with Loopback */}
        <div className="grid grid-cols-5 gap-3 mt-3">
          {growIntegratedCycle.cycleSteps.slice(5, 10).map((step, idx) => {
            const actualIdx = idx + 5;
            const isActive = actualIdx === activeStep;
            return (
              <button
                key={actualIdx}
                type="button"
                onClick={() => setActiveStep(actualIdx)}
                className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.03] font-bold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-slate-950' : 'text-amber-400'}`}>
                    {actualIdx < 9 ? `0${actualIdx + 1}` : actualIdx + 1}
                  </span>
                  <span className="text-xs font-bold opacity-60">{actualIdx === 9 ? '↺' : '→'}</span>
                </div>
                <span className="text-xs font-bold leading-tight block">
                  {step}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile-Friendly Stepper / Connected Timeline */}
      <div className="lg:hidden relative z-10 mb-6 space-y-2 max-h-[380px] overflow-y-auto pr-1">
        {growIntegratedCycle.cycleSteps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`w-full p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between ${
                isActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                  isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-400'
                }`}>
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="text-xs font-bold leading-tight">{step}</span>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card with Controls */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-mono text-lg font-black shrink-0 shadow-md">
            {activeStep + 1}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
              Active Transformation Node ({activeStep + 1} of 10)
            </span>
            <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
              {growIntegratedCycle.cycleSteps[activeStep]}
            </h4>
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 9))}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            aria-label="Previous Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-slate-400 px-2 font-bold">
            {activeStep + 1}/10
          </span>
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev < 9 ? prev + 1 : 0))}
            className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors cursor-pointer shadow-sm"
            aria-label="Next Step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// 2. 6-Stage Operating Model Flowchart (XIX)
export function OperatingModelFlowchart() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = growOperatingModel.stages[activeStage] || growOperatingModel.stages[0];

  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-0.5">
            XIX. Phased Consulting Pipeline
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
            6-Stage GROW Operating Model Flow
          </h3>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
          Linear & Continuous Feedback Loop
        </span>
      </div>

      {/* Connected Horizontal Stepper Ribbon (Desktop) */}
      <div className="hidden lg:grid grid-cols-6 gap-2.5 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
        {growOperatingModel.stages.map((st, idx) => {
          const isSelected = idx === activeStage;
          return (
            <button
              key={st.stage}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-amber-400'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-black ${
                  isSelected ? 'text-amber-400' : 'text-amber-700'
                }`}>
                  STAGE 0{st.stage}
                </span>
                {idx < 5 ? (
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                ) : (
                  <RotateCw className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                )}
              </div>
              <span className="font-display text-xs font-bold block truncate">
                {st.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Responsive Connected Stepper Cards */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2">
        {growOperatingModel.stages.map((st, idx) => {
          const isSelected = idx === activeStage;
          return (
            <button
              key={st.stage}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer border ${
                isSelected
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className={`font-mono text-[10px] font-bold block mb-0.5 ${
                isSelected ? 'text-amber-400' : 'text-amber-700'
              }`}>
                STAGE 0{st.stage}
              </span>
              <span className="font-display text-xs font-bold block truncate leading-tight">
                {st.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Blueprint Canvas */}
      <div className="p-5 sm:p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3.5">
            <span className="font-mono text-3xl font-black text-amber-400">
              0{stage.stage}
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Execution Deliverable Blueprint
              </span>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">{stage.name}</h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 5))}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveStage((prev) => (prev < 5 ? prev + 1 : 0))}
              className="p-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer hover:bg-amber-400"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {stage.summary}
        </p>
      </div>
    </div>
  );
}

// 3. 5-Step Public Sector Governance Flowchart
export function GovernmentContributionFlowchart() {
  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
            Public Sector Governance
          </span>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            {whyGovernmentSystemsMatter.contributionFlow.title}
          </h3>
        </div>
        <Landmark className="w-5 h-5 text-amber-400" />
      </div>

      {/* Connected Step Pipeline with Arrows */}
      <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-5 gap-2.5 items-center">
        {whyGovernmentSystemsMatter.contributionFlow.steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center">
            <div className="w-full p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/60 transition-colors shadow-sm text-left sm:text-center">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-400 block mb-0.5">
                Step 0{idx + 1}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">
                {step}
              </span>
            </div>
            {idx < whyGovernmentSystemsMatter.contributionFlow.steps.length - 1 && (
              <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-slate-950 border border-amber-400/40 rounded-full items-center justify-center text-[10px] text-amber-400 font-bold">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. 3-Stage Corporate Transformation Flowchart
export function CorporateEngagementFlowchart() {
  const steps = [
    { num: '01', title: 'Diagnostic Discovery', desc: '360° audit of operations, bottlenecks, compliance gaps, and growth readiness.' },
    { num: '02', title: 'Systems & SOP Codification', desc: 'Drafting structured SOP manuals, RACI matrices, KPI dashboards, and internal controls.' },
    { num: '03', title: 'Governance & MMR Cadence', desc: 'Handover drills, monthly management review setup, and ongoing course correction.' }
  ];

  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
            Engagement Roadmap
          </span>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            3-Stage Corporate Transformation Flowchart
          </h3>
        </div>
        <Workflow className="w-5 h-5 text-amber-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((st, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 relative flex flex-col justify-between hover:border-amber-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-amber-400">PHASE {st.num}</span>
                {idx < 2 && <span className="text-slate-500 font-bold hidden md:inline text-xs">→</span>}
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-white mb-1.5">{st.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. 4-Step Audit Methodology Flowchart
export function AuditProcessFlowchart() {
  const stages = [
    { step: '1', title: 'Intake Survey', desc: '5-vector structured diagnostic questionnaire' },
    { step: '2', title: 'Score Computation', desc: 'Algorithmic 0-100 system resilience score' },
    { step: '3', title: 'Gap Profiling', desc: 'Identification of person-dependencies & risks' },
    { step: '4', title: 'Advisory Roadmap', desc: '1-on-1 strategic diagnostic debrief with consultant' }
  ];

  return (
    <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 text-white space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
          Diagnostic Workflow Process
        </span>
        <Activity className="w-4 h-4 text-amber-400" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {stages.map((st, idx) => (
          <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span className="font-mono text-xs font-bold text-amber-400 block mb-1">
              Step 0{st.step}
            </span>
            <strong className="text-xs font-bold text-white block mb-0.5">{st.title}</strong>
            <span className="text-[10px] sm:text-[10.5px] text-slate-400 block leading-tight">{st.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default {
  GrowCycleFlowchart,
  OperatingModelFlowchart,
  GovernmentContributionFlowchart,
  CorporateEngagementFlowchart,
  AuditProcessFlowchart
};
