import { useState } from 'react';
import { 
  Workflow, Layers, ShieldCheck, CheckCircle2, ArrowRight, 
  RotateCw, Sparkles, Target, Compass, ChevronRight 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../data/methodology';
import { brandIdentity } from '../data/brand';

export default function MethodologyPage() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const activeStage = growOperatingModel.stages[activeStageIdx];
  const activePhase = grcMethodology.phases[activePhaseIdx];

  return (
    <PageLayout
      title={`GROW Methodology & Frameworks – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="The 6-Stage GROW Operating Model, 9-Phase GRC Methodology, and Implementation Cycles for sustainable enterprise systemization and governance."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            <span>Consulting Frameworks</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            THE GROW CONSULTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">METHODOLOGY</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Two rigorous frameworks connecting ground-level organizational discovery with structured implementation and sustained improvement.
          </p>
        </div>
      </section>

      {/* 1. The 6-Stage Operating Model (XIX) */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200" id="operating-model">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Operating Architecture"
            title={`XIX. ${growOperatingModel.title}`}
            subtitle={growOperatingModel.subtitle}
            align="center"
          />

          {/* Interactive Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-10 mb-6 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
            {growOperatingModel.stages.map((st, idx) => {
              const isSelected = idx === activeStageIdx;
              return (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-150 cursor-pointer border ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold block mb-0.5 ${
                    isSelected ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    Stage {st.stage}
                  </span>
                  <span className="font-display text-xs font-bold block truncate">
                    {st.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Canvas */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

            <div className="space-y-6 relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-amber-400">
                    {activeStage.stage}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      Operating Stage
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Phased Execution
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                {activeStage.summary}
              </p>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs text-amber-400 font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Enforces ground-level operational discipline, employee accountability, and leadership alignment.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The 9-Phase GRC Methodology (XI) */}
      <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800" id="grc-methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="GRC Implementation"
            title={`XI. ${grcMethodology.title}`}
            subtitle={grcMethodology.subtitle}
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {grcMethodology.phases.map((ph, idx) => (
              <div
                key={ph.phase}
                className="p-5 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                    <span className="font-mono text-xs font-black text-amber-400">
                      {ph.title}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {ph.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Integrated GROW Cycle & Implementation Cycle */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section X: GROW Cycle */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  X. {growIntegratedCycle.title}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  THE GROW CYCLE (10 NODES)
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  {growIntegratedCycle.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {growIntegratedCycle.cycleSteps.map((step, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-xs font-semibold">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                        {step}
                      </span>
                      {idx < growIntegratedCycle.cycleSteps.length - 1 && (
                        <span className="text-amber-400">&rarr;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-slate-800 pt-4 italic">
                "{growIntegratedCycle.objective}"
              </p>
            </div>

            {/* Section XVIII: Implementation Support Cycle */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  XVIII. {implementationSupportData.title}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  IMPLEMENTATION SUPPORT CYCLE
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  {implementationSupportData.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {implementationSupportData.implementationCycle.map((step, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-xs font-semibold">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                        {step}
                      </span>
                      {idx < implementationSupportData.implementationCycle.length - 1 && (
                        <span className="text-amber-400">&rarr;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-slate-800 pt-4 italic">
                "{implementationSupportData.objective}"
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
              Schedule Methodology Consultation
            </Button>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
