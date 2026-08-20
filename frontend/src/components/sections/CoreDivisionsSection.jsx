import { useState } from 'react';
import { ShieldCheck, Cpu, Briefcase, Layers, TrendingUp, BarChart3, Scale, CheckCircle2, ArrowRight, Info, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { services, legalLimitationNote } from '../../data/services';

const iconMap = {
  ShieldCheck,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  BarChart3,
  Scale
};

export default function CoreDivisionsSection() {
  const [activeDivision, setActiveDivision] = useState(services[0].id);

  const selectedService = services.find((s) => s.id === activeDivision) || services[0];
  const SelectedIcon = iconMap[selectedService.icon] || ShieldCheck;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Specialized Practices"
          title="IV. GROW INDIA'S CORE DIVISIONS"
          subtitle="Seven focused consulting divisions designed to strengthen governance, processes, risk protection, performance management, and scalable business expansion."
          align="center"
        />

        {/* Executive Practice Hub Layout: Left Navigation + Right Blueprint Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
          
          {/* Left Vertical Navigation Menu */}
          <div className="lg:col-span-4 space-y-2 bg-slate-50 border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 block mb-1">
              Select Practice Division:
            </span>

            {services.map((service) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              const isActive = service.id === activeDivision;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveDivision(service.id)}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between group border ${
                    isActive
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 group-hover:text-slate-950'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold leading-tight">
                        {service.code}
                      </h4>
                      <span className={`text-[11px] block leading-tight ${
                        isActive ? 'text-amber-200/80' : 'text-slate-500'
                      }`}>
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Blueprint Canvas */}
          <div className="lg:col-span-8 bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

            <div className="space-y-6 relative">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <SelectedIcon className="w-3.5 h-3.5" />
                  <span>{selectedService.code}</span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {selectedService.tagline}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  {selectedService.title}
                </h3>
              </div>

              {/* Capabilities & Scope from Canonical Client Document */}
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 sm:p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Core Capabilities & Practice Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.capabilities.map((cap, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedService.legalDisclaimer && (
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-400 block mb-1">Legal Notice:</strong>
                  {selectedService.legalDisclaimer}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button to={`/services/${selectedService.slug}`} variant="gold" size="md" icon={ArrowRight}>
                  Explore {selectedService.code}
                </Button>
                <Button to="/contact" variant="outline" size="md" className="border-slate-700 text-white hover:bg-slate-900">
                  Inquire for {selectedService.code}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Legal Limitation Note */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{legalLimitationNote.statement}</p>
        </div>
      </div>
    </section>
  );
}
