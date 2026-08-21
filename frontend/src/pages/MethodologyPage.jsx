import { useState } from 'react';
import { 
  Workflow, Layers, ShieldCheck, CheckCircle2, ArrowRight, 
  RotateCw, Sparkles, Target, Compass, ChevronRight 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { GrowCycleFlowchart, OperatingModelFlowchart } from '../components/common/FlowchartDiagram';
import { growOperatingModel, grcMethodology, growIntegratedCycle, implementationSupportData } from '../data/methodology';
import { brandIdentity } from '../data/brand';

export default function MethodologyPage() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const activeStage = growOperatingModel.stages[activeStageIdx];

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

      {/* 1. Operating Model Diagrammatic Presentation (XIX) */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200" id="operating-model">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionTitle
            badge="Operating Architecture"
            title={`XIX. ${growOperatingModel.title}`}
            subtitle={growOperatingModel.subtitle}
            align="center"
          />

          {/* Diagrammatic Stepper Flowchart */}
          <OperatingModelFlowchart />
        </div>
      </section>

      {/* 2. The 9-Phase GRC Methodology (XI) */}
      <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800" id="grc-methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionTitle
            badge="GRC Implementation"
            title={`XI. ${grcMethodology.title}`}
            subtitle={grcMethodology.subtitle}
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* 3. The 10-Node Integrated GROW Cycle (Diagrammatic) & Implementation Loop */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Diagrammatic Flowchart */}
          <GrowCycleFlowchart />

          {/* Implementation Support Loop Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
                  XVIII. {implementationSupportData.title}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  9-Step Implementation Support Cycle
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Adoption & Validation
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {implementationSupportData.subtitle}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 pt-2">
              {implementationSupportData.implementationCycle.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="font-mono text-[10px] font-bold text-amber-400 block mb-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-slate-200 block truncate">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 pt-3 border-t border-slate-800 italic text-center">
              "{implementationSupportData.objective}"
            </p>
          </div>

          <div className="text-center pt-4">
            <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
              Schedule Methodology Consultation
            </Button>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
