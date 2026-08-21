import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Workflow, Layers, 
  RotateCw, ChevronRight, Activity, Sparkles, Target, Landmark, ArrowDown 
} from 'lucide-react';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../../data/methodology';
import { whyGovernmentSystemsMatter } from '../../data/government';

export function GrowCycleFlowchart() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
            Diagrammatic Architecture
          </span>
          <h3 className="font-display text-xl font-bold text-white">
            The 10-Node Integrated GROW Cycle
          </h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
          Connected Systems Pipeline
        </span>
      </div>

      {/* Responsive Diagrammatic Pipeline Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
        {growIntegratedCycle.cycleSteps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative group ${
                isActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg font-black'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-[10px] font-bold ${
                  isActive ? 'text-slate-950' : 'text-amber-400'
                }`}>
                  0{idx + 1}
                </span>
                <span className={`text-[10px] ${isActive ? 'text-slate-950 font-bold' : 'text-slate-500'}`}>
                  {idx < 9 ? '→' : '↺'}
                </span>
              </div>
              <span className="text-xs font-bold block leading-tight">
                {step}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-mono font-bold shrink-0">
            {activeStep + 1}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">Active Node Focus</span>
            <h4 className="font-display text-sm sm:text-base font-bold text-white">
              {growIntegratedCycle.cycleSteps[activeStep]}
            </h4>
          </div>
        </div>
        <p className="text-xs text-slate-400 italic hidden sm:block max-w-sm text-right">
          "{growIntegratedCycle.objective}"
        </p>
      </div>
    </div>
  );
}

export function OperatingModelFlowchart() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = growOperatingModel.stages[activeStage];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">
            Flowchart Pipeline
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">
            6-Stage Operating Model Flow
          </h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
          Linear & Feedback Driven
        </span>
      </div>

      {/* Connected Stepper Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {growOperatingModel.stages.map((st, idx) => {
          const isSelected = idx === activeStage;
          return (
            <button
              key={st.stage}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-black ${
                  isSelected ? 'text-amber-400' : 'text-amber-600'
                }`}>
                  STAGE {st.stage}
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

      {/* Active Stage Blueprint Card */}
      <div className="p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl font-black text-amber-400">
            {stage.stage}
          </span>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Stage Blueprint</span>
            <h4 className="font-display text-base font-bold text-white">{stage.name}</h4>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
          {stage.summary}
        </p>
      </div>
    </div>
  );
}

export function GovernmentContributionFlowchart() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
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

      {/* 5-Step Connected Flowchart Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 items-center">
        {whyGovernmentSystemsMatter.contributionFlow.steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center">
            <div className="w-full p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/60 transition-colors shadow-sm">
              <span className="font-mono text-xs font-bold text-amber-400 block mb-1">
                Step 0{idx + 1}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">
                {step}
              </span>
            </div>
            {idx < whyGovernmentSystemsMatter.contributionFlow.steps.length - 1 && (
              <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-slate-950 border border-amber-400/40 rounded-full items-center justify-center text-[10px] text-amber-400">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default {
  GrowCycleFlowchart,
  OperatingModelFlowchart,
  GovernmentContributionFlowchart
};
