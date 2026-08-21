import { useState } from 'react';
import { 
  Building2, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers, 
  TrendingUp, Scale, Sparkles, BarChart, Users, ChevronRight, HelpCircle 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CorporateEngagementFlowchart } from '../components/common/FlowchartDiagram';
import { corporateConsulting, whoGrowCorporateServes } from '../data/corporate';
import { brandIdentity } from '../data/brand';

export default function CorporateConsultingPage() {
  const [selectedAreaIdx, setSelectedAreaIdx] = useState(0);
  const activeArea = corporateConsulting.areas[selectedAreaIdx];

  return (
    <PageLayout
      title={`Corporate Consulting Practice – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="GROW Corporate Consulting: Strategic systems, GRC, SOPs, KPI dashboards, and scalability frameworks for promoter-led businesses, MSMEs, and growing enterprises."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Section V & VI • Enterprise Practice</span>
            </span>

            <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              GROW CORPORATE: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                BUSINESS GROWTH & SYSTEMS CONSULTING
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {corporateConsulting.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
                Schedule Corporate Diagnostic
              </Button>
              <Button to="/audit" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-900">
                Run Business Health Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Flowchart Presentation */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CorporateEngagementFlowchart />
        </div>
      </section>

      {/* 8 Core Capability Areas: Interactive Dossier */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Comprehensive Practice Scope"
            title="8 Core Capability Disciplines"
            subtitle="Explore how GROW Corporate structures governance, process standardization, risk insulation, and revenue acceleration."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-start">
            
            {/* Left Nav List */}
            <div className="lg:col-span-4 space-y-1.5 bg-slate-50 border border-slate-200/90 rounded-3xl p-3 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 block mb-1">
                Select Practice Discipline:
              </span>

              {corporateConsulting.areas.map((area, idx) => {
                const isActive = idx === selectedAreaIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedAreaIdx(idx)}
                    className={`w-full p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer flex items-center justify-between group border ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="font-display text-xs font-bold">
                        {area.category}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Active Discipline Canvas */}
            <div className="lg:col-span-8">
              <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
                
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                      Discipline #{selectedAreaIdx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {activeArea.category}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Scope of Professional Intervention:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeArea.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 text-xs font-semibold text-slate-200 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                    Inquire for {activeArea.category}
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section VI: Who GROW Corporate Serves */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Client Footprint"
            title={`VI. ${whoGrowCorporateServes.title}`}
            subtitle={whoGrowCorporateServes.subtitle}
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
            {whoGrowCorporateServes.clientTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] font-bold text-amber-400/80 mb-2">
                  0{idx + 1}
                </span>
                <span className="font-display text-xs font-bold text-slate-200 leading-snug">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
