import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Cpu, Briefcase, Layers, TrendingUp, BarChart3, Scale, 
  CheckCircle2, ArrowRight, Sparkles, Filter, Info, ChevronRight, HelpCircle
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { services, legalLimitationNote } from '../data/services';
import { brandIdentity } from '../data/brand';

const iconMap = {
  ShieldCheck,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  BarChart3,
  Scale
};

export default function ServicesPage() {
  const [activeDivisionId, setActiveDivisionId] = useState(services[0].id);
  const [filterTag, setFilterTag] = useState('all');

  const selectedService = services.find((s) => s.id === activeDivisionId) || services[0];
  const SelectedIcon = iconMap[selectedService.icon] || ShieldCheck;

  const categories = [
    { id: 'all', label: 'All 7 Divisions' },
    { id: 'governance', label: 'Governance & Risk' },
    { id: 'operations', label: 'Process & SOPs' },
    { id: 'strategy', label: 'Strategy & Scale' },
    { id: 'performance', label: 'KPIs & MIS' }
  ];

  const filteredServices = services.filter((s) => {
    if (filterTag === 'governance') return s.id === 'grow-shield' || s.id === 'grow-legal';
    if (filterTag === 'operations') return s.id === 'grow-engine';
    if (filterTag === 'strategy') return s.id === 'grow-consulting' || s.id === 'grow-scale' || s.id === 'grow-marketing';
    if (filterTag === 'performance') return s.id === 'grow-systems';
    return true;
  });

  return (
    <PageLayout
      title={`Core Divisions & Services – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="Explore GROW India's 7 specialized consulting divisions: GROW Shield, GROW Engine, GROW Consulting, GROW Systems, GROW Marketing, GROW Scale, and GROW Legal."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/3 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Integrated Solutions Suite</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            THE 7 CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">GROW PRACTICE DIVISIONS</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Seven specialized practices engineered to transition organizations from person-dependent bottlenecks to institutional, system-driven market leaders.
          </p>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterTag(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  filterTag === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Division Explorer */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Divisions List */}
            <div className="lg:col-span-4 space-y-2 bg-slate-50 border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 block mb-1">
                Select Division to Inspect:
              </span>

              {filteredServices.map((service) => {
                const Icon = iconMap[service.icon] || ShieldCheck;
                const isActive = service.id === activeDivisionId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveDivisionId(service.id)}
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

            {/* Right Detailed Division Dossier Canvas */}
            <div className="lg:col-span-8 bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

              <div className="space-y-6 relative">
                {/* Badge & Tagline */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <SelectedIcon className="w-4 h-4" />
                    <span>{selectedService.code}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedService.tagline}
                  </span>
                </div>

                {/* Division Title */}
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                    {selectedService.title}
                  </h2>
                </div>

                {/* Core Capabilities */}
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 sm:p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                    Core Practice Capabilities & Scope:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.capabilities.map((cap, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal disclaimer if applicable */}
                {selectedService.legalDisclaimer && (
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed">
                    <strong className="text-amber-400 block mb-1">Legal Notice:</strong>
                    {selectedService.legalDisclaimer}
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button to={`/services/${selectedService.slug}`} variant="gold" size="md" icon={ArrowRight}>
                    Full {selectedService.code} Details
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

      {/* Grid of All 7 Divisions Cards */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Full Suite Overview"
            title="Comprehensive Practice Directory"
            subtitle="Deep dive into the specialized focus and execution scope of each division."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((srv) => {
              const Icon = iconMap[srv.icon] || ShieldCheck;
              return (
                <div
                  key={srv.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        {srv.code}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 font-medium">
                      {srv.tagline}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {srv.capabilities.slice(0, 4).map((cap, idx) => (
                        <div key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                      {srv.capabilities.length > 4 && (
                        <span className="text-[11px] text-amber-700 font-bold block pt-1">
                          +{srv.capabilities.length - 4} more capabilities
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100">
                    <Button to={`/services/${srv.slug}`} variant="outline" size="sm" className="w-full justify-between" icon={ArrowRight}>
                      Explore Division
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Diagnostic Call to Action */}
      <section className="py-12 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Unsure Which Division Matches Your Operational Need?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Take our 2-minute diagnostic audit or speak directly with our principal consultants for a customized systems roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button to="/audit" variant="gold" size="md" icon={ArrowRight}>
              Run 360° Systems Audit
            </Button>
            <Button to="/contact" variant="outline" size="md" className="border-slate-700 text-white hover:bg-slate-900">
              Speak with a Consultant
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
