import { useState } from 'react';
import { 
  Workflow, Layers, ShieldCheck, CheckCircle2, ArrowRight, 
  RotateCw, Sparkles, Target, Compass, ChevronRight, PieChart as PieIcon 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { GrowCycleFlowchart, OperatingModelFlowchart } from '../components/common/FlowchartDiagram';
import { PracticeWeightagePieChart } from '../components/common/PieChartDiagram';
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

      {/* 2. Consulting Weightage Pie Chart Presentation */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PracticeWeightagePieChart />
        </div>
      </section>

      {/* 3. The 9-Phase GRC Methodology (XI) */}
      <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800" id="grc-methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Governance Architecture"
            title={`XI. ${grcMethodology.title}`}
            subtitle={grcMethodology.subtitle}
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {grcMethodology.phases.map((p, idx) => (
              <div
                key={p.phase}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800/90 shadow-sm hover:border-amber-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-amber-400 mb-2 block">
                    Phase {p.phase}
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <div className="space-y-1.5 pt-1">
                    {p.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The 10-Node Integrated Cycle Flowchart */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowCycleFlowchart />
        </div>
      </section>

      {/* 5. Implementation Support & Next Steps */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Execution Guarantee"
            title={implementationSupportData.title}
            subtitle={implementationSupportData.subtitle}
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 mt-8">
            {implementationSupportData.implementationCycle.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  0{idx + 1}
                </div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900">
                  {step}
                </h4>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 text-center max-w-2xl mx-auto mt-8">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "{implementationSupportData.objective}"
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Initiate Diagnostic Assessment
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
