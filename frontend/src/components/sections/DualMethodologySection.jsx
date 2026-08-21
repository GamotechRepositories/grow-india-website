import { useState } from 'react';
import { Workflow, Layers, CheckCircle2, ArrowRight, ShieldCheck, PieChart as PieIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { PracticeWeightagePieChart } from '../common/PieChartDiagram';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../../data/methodology';

export default function DualMethodologySection() {
  const [activeFramework, setActiveFramework] = useState('operating-model');
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);

  const activeStage = growOperatingModel.stages[selectedStageIdx] || growOperatingModel.stages[0];

  return (
    <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800" id="methodology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Structured Frameworks"
          title="XIX & XI. GROW'S OPERATING MODEL, GRC & WEIGHTAGE ALLOCATION"
          subtitle="Three rigorous consulting dimensions connecting organizational discovery, GRC codification, and holistic practice allocation."
          theme="dark"
          align="center"
        />

        {/* Framework Selector Toggle with 3 Tabs */}
        <div className="flex justify-center mt-6 mb-6">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner gap-1">
            <button
              type="button"
              onClick={() => setActiveFramework('operating-model')}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFramework === 'operating-model'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>1. 6-Stage Operating Flow</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFramework('grc-methodology')}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFramework === 'grc-methodology'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. 9-Phase GRC Matrix</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFramework('pie-chart')}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFramework === 'pie-chart'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PieIcon className="w-4 h-4" />
              <span>3. Practice Weightage (Pie Chart)</span>
            </button>
          </div>
        </div>

        {/* Framework 1: 6-Stage Interactive Connected Pipeline */}
        {activeFramework === 'operating-model' && (
          <div className="space-y-4">
            {/* Horizontal Step Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800">
              {growOperatingModel.stages.map((st, idx) => {
                const isSelected = idx === selectedStageIdx;
                return (
                  <button
                    key={st.stage}
                    type="button"
                    onClick={() => setSelectedStageIdx(idx)}
                    className={`p-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer border ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 text-white shadow-md ring-1 ring-amber-400/30'
                        : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-amber-400 block mb-0.5">
                      Stage 0{st.stage}
                    </span>
                    <span className="font-display text-xs font-bold block truncate">
                      {st.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Focused Stage Spotlight Canvas */}
            <div className="p-5 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-amber-400">
                    0{activeStage.stage}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      Operating Stage
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Phased Enterprise Execution
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {activeStage.summary}
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Enforces ground-level operational discipline and executive alignment.</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2">
                  <Button to="/methodology" variant="gold" size="sm" icon={ArrowRight} className="w-full">
                    View Complete Methodology
                  </Button>
                  <Button to="/contact" variant="outline" size="sm" className="border-slate-700 text-white hover:bg-slate-900 w-full">
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Framework 2: 9-Phase GRC Flow */}
        {activeFramework === 'grc-methodology' && (
          <div className="space-y-4">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                {grcMethodology.title}
              </h3>
              <p className="text-xs text-slate-300">
                {grcMethodology.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {grcMethodology.phases.map((p) => (
                <div
                  key={p.phase}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-amber-400 block mb-1">
                    Phase {p.phase}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">
                    {p.title}
                  </h4>
                  <div className="space-y-1">
                    {p.points.slice(0, 3).map((pt, ptIdx) => (
                      <div key={ptIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Framework 3: Interactive Practice Weightage Pie Chart */}
        {activeFramework === 'pie-chart' && (
          <div className="animate-in fade-in duration-300">
            <PracticeWeightagePieChart />
          </div>
        )}

      </div>
    </section>
  );
}
