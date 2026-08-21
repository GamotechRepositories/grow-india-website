import { useState } from 'react';
import { 
  Landmark, Shield, CheckCircle2, ArrowRight, FileText, 
  Settings, Users, Activity, Sparkles, ChevronRight, HelpCircle, AlertCircle 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { governmentConsulting, potentialGovernmentClients, whyGovernmentSystemsMatter } from '../data/government';
import { brandIdentity } from '../data/brand';

export default function GovernmentConsultingPage() {
  const [selectedAreaIdx, setSelectedAreaIdx] = useState(0);
  const activeArea = governmentConsulting.areas[selectedAreaIdx];

  return (
    <PageLayout
      title={`Government & Public Sector Consulting – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="GROW Government Consulting: Administrative process modernization, GRC, office procedure manuals, RTI compliance, and capacity development for public sector institutions."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Section VII, VIII & IX • Public Sector Practice</span>
            </span>

            <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              GROW GOVERNMENT & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                PUBLIC SECTOR CONSULTING
              </span>
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

      {/* Why Government Systems Matter & Contribution Flow */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

            {/* Right: GROW Contribution Flow */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Institutional Transformation
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-6">
                {whyGovernmentSystemsMatter.contributionFlow.title}
              </h3>

              <div className="space-y-3">
                {whyGovernmentSystemsMatter.contributionFlow.steps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-amber-400">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-sm font-bold text-white">{step}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8 Public Sector Capability Disciplines */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Public Sector Scope"
            title="8 Specialized Practice Disciplines"
            subtitle="Explore how GROW supports government departments, public enterprises, and municipal bodies."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-start">
            
            {/* Left Nav List */}
            <div className="lg:col-span-4 space-y-1.5 bg-white border border-slate-200/90 rounded-3xl p-3 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 block mb-1">
                Select Public Discipline:
              </span>

              {governmentConsulting.areas.map((area, idx) => {
                const isActive = idx === selectedAreaIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedAreaIdx(idx)}
                    className={`w-full p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer flex items-center justify-between group border ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
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

            {/* Right Active Area Details */}
            <div className="lg:col-span-8 bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

              <div className="space-y-6 relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                      Public Sector Discipline 0{selectedAreaIdx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {activeArea.category}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {activeArea.items.length} Focus Areas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeArea.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                      <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Complies with public accountability standards, audit norms & administrative guidelines.
                  </span>
                  <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                    Inquire for {activeArea.category}
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section VIII: 18 Potential Government Client Segments */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Coverage"
            title={`VIII. ${potentialGovernmentClients.title}`}
            subtitle={potentialGovernmentClients.subtitle}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
            {potentialGovernmentClients.segments.map((seg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-amber-400 hover:bg-amber-50/20 transition-all flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {idx + 1}
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-slate-800">
                  {seg}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
              Schedule Institutional Advisory Meeting
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
