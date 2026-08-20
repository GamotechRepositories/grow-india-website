import { useState } from 'react';
import { Workflow, Layers, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../../data/methodology';

export default function DualMethodologySection() {
  const [activeFramework, setActiveFramework] = useState('operating-model');
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);

  const activeStage = growOperatingModel.stages[selectedStageIdx] || growOperatingModel.stages[0];

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800" id="methodology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Structured Frameworks"
          title="XIX & XI. GROW'S OPERATING MODEL & GRC METHODOLOGY"
          subtitle="Two rigorous consulting frameworks connecting organizational discovery with structured implementation and sustained improvement."
          theme="dark"
          align="center"
        />

        {/* Framework Selector Toggle */}
        <div className="flex justify-center mt-12 mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveFramework('operating-model')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFramework === 'operating-model'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>XIX. 6-Stage Operating Model</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFramework('grc-methodology')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFramework === 'grc-methodology'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>XI. 9-Phase GRC Methodology</span>
            </button>
          </div>
        </div>

        {/* Framework 1: 6-Stage Interactive Connected Pipeline */}
        {activeFramework === 'operating-model' && (
          <div className="space-y-10">
            {/* Horizontal Step Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
              {growOperatingModel.stages.map((st, idx) => {
                const isSelected = idx === selectedStageIdx;
                return (
                  <button
                    key={st.stage}
                    type="button"
                    onClick={() => setSelectedStageIdx(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-150 cursor-pointer border ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 text-white shadow-md ring-1 ring-amber-400/30'
                        : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-amber-400 block mb-0.5">
                      Stage {st.stage}
                    </span>
                    <span className="font-display text-xs font-bold block truncate">
                      {st.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Focused Stage Spotlight Canvas */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border-2 border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-amber-400">
                    {activeStage.stage}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      Operating Stage
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Phased Enterprise Execution
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                    {activeStage.summary}
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Enforces ground-level operational discipline and executive alignment.</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Button to="/methodology" variant="gold" size="md" icon={ArrowRight} className="w-full">
                    View Complete Methodology
                  </Button>
                  <Button to="/contact" variant="outline" size="md" className="border-slate-700 text-white hover:bg-slate-900 w-full">
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Framework 2: 9-Phase GRC Flow */}
        {activeFramework === 'grc-methodology' && (
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {grcMethodology.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {grcMethodology.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {grcMethodology.phases.map((ph) => (
                <div
                  key={ph.phase}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                      <span className="font-mono text-xs font-black text-amber-400">
                        {ph.title}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {ph.points.map((pt, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
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
        )}

        {/* Section X & XVIII: Integrated Cycle & Implementation Cycle */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section X: GROW Cycle */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                X. {growIntegratedCycle.title}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                THE GROW CYCLE
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {growIntegratedCycle.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {growIntegratedCycle.cycleSteps.map((step, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                      {step}
                    </span>
                    {idx < growIntegratedCycle.cycleSteps.length - 1 && (
                      <span className="text-amber-400">&darr;</span>
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
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                XVIII. {implementationSupportData.title}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                IMPLEMENTATION CYCLE
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {implementationSupportData.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {implementationSupportData.implementationCycle.map((step, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {step}
                    </span>
                    {idx < implementationSupportData.implementationCycle.length - 1 && (
                      <span className="text-amber-400">&darr;</span>
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

      </div>
    </section>
  );
}
