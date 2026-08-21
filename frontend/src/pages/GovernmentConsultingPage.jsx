import { useState } from 'react';
import { 
  Landmark, ShieldCheck, CheckCircle2, ArrowRight, Building2, 
  Workflow, FileCheck, Layers, FileText, ChevronRight 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { GovernmentContributionFlowchart } from '../components/common/FlowchartDiagram';
import { 
  governmentConsulting, 
  whyGovernmentSystemsMatter, 
  potentialGovernmentClients 
} from '../data/government';
import { brandIdentity } from '../data/brand';

export default function GovernmentConsultingPage() {
  const [activeAreaIdx, setActiveAreaIdx] = useState(0);
  const activeArea = governmentConsulting.areas[activeAreaIdx] || governmentConsulting.areas[0];

  return (
    <PageLayout
      title={`Public Sector & Government Consulting – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="Public Sector Governance, GRC Architecture, Process Modernization, Citizen-Centric SOPs, and Administrative Efficiency for Government Bodies."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Public Sector Governance Practice</span>
            </span>

            <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {governmentConsulting.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {governmentConsulting.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
                Initiate Institutional Consultation
              </Button>
              <Button to="/methodology" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-900">
                View GRC Methodology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Government Systems Matter & Diagrammatic Contribution Flow */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">
                Administrative Context
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {whyGovernmentSystemsMatter.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {whyGovernmentSystemsMatter.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {whyGovernmentSystemsMatter.realities.slice(0, 8).map((rel, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{rel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Diagrammatic Flowchart */}
            <div className="lg:col-span-6">
              <GovernmentContributionFlowchart />
            </div>
          </div>

        </div>
      </section>

      {/* 8 Specialized Consulting Areas */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Public Sector Capabilities"
            title="8 Core Governance Disciplines"
            subtitle="Tailored frameworks designed specifically for statutory bodies, administrative departments, and public enterprises."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
            {/* Left Nav */}
            <div className="lg:col-span-5 space-y-2">
              {governmentConsulting.areas.map((area, idx) => {
                const isSelected = idx === activeAreaIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAreaIdx(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer border flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-lg'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                          isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold block">{area.category}</h4>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Canvas */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-700 uppercase">
                      Practice Area #0{activeAreaIdx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                      {activeArea.category}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Landmark className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Scope & Implementation Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeArea.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
                    Inquire for {activeArea.category}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Government Clients (Section VIII) */}
      <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Reach"
            title={`VIII. ${potentialGovernmentClients.title}`}
            subtitle={potentialGovernmentClients.subtitle}
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-10">
            {potentialGovernmentClients.segments.map((segment, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-colors flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {segment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
