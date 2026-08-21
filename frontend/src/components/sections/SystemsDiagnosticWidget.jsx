import { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Cpu, Layers, TrendingUp, Scale, ShieldCheck, RefreshCcw } from 'lucide-react';
import Button from '../ui/Button';

const sectorOptions = [
  { id: 'manufacturing', name: 'Manufacturing & Industrial' },
  { id: 'retail', name: 'Retail & Distribution' },
  { id: 'healthcare', name: 'Healthcare & Pharma' },
  { id: 'construction', name: 'Construction & Real Estate' },
  { id: 'it', name: 'IT & Professional Services' },
  { id: 'education', name: 'Education & Academies' },
  { id: 'food', name: 'Food Processing & Agri' },
  { id: 'public', name: 'Public Sector / Institutional' }
];

const painPointOptions = [
  {
    id: 'sops',
    label: 'Operations are too person-dependent & lack written SOPs',
    recommendedDivision: 'GROW ENGINE',
    divisionTitle: 'SOPs, Systems & Process Structuring',
    icon: Cpu,
    slug: 'grow-engine',
    deliverables: [
      'Departmental SOP Manuals & Process Maps',
      'RACI Responsibility Matrices & Job Descriptions',
      'Operational Checklists & Handover Protocols'
    ]
  },
  {
    id: 'compliance',
    label: 'Statutory compliance & enterprise risks are unmanaged',
    recommendedDivision: 'GROW SHIELD',
    divisionTitle: 'Legal, Compliance & Risk Protection',
    icon: ShieldCheck,
    slug: 'grow-shield',
    deliverables: [
      'Statutory Compliance Master Tracking Register',
      'Enterprise Risk Matrix & Mitigation Blueprint',
      'Internal Control & Delegation Matrix (DoA)'
    ]
  },
  {
    id: 'mis',
    label: 'Leadership lacks real-time MIS reports & measurable KPIs',
    recommendedDivision: 'GROW SYSTEMS',
    divisionTitle: 'KPI, MIS & Performance Management',
    icon: Layers,
    slug: 'grow-systems',
    deliverables: [
      'Enterprise KPI Dictionary & Department Scorecards',
      'Executive MIS Reporting Dashboards',
      'Monthly Management Review Cadence Protocols'
    ]
  },
  {
    id: 'scale',
    label: 'Struggling to expand to new branches/revenue streams without chaos',
    recommendedDivision: 'GROW SCALE',
    divisionTitle: 'Business Expansion & Revenue Growth',
    icon: TrendingUp,
    slug: 'grow-scale',
    deliverables: [
      'Business Scalability Blueprint & Expansion Model',
      'Replicable Unit/Branch Systems Manual',
      'Channel Partner & Commercial Framework'
    ]
  },
  {
    id: 'legal',
    label: 'Commercial agreements & vendor contracts need formalization',
    recommendedDivision: 'GROW LEGAL',
    divisionTitle: 'Agreements & Documentation Support',
    icon: Scale,
    slug: 'grow-legal',
    deliverables: [
      'Master Commercial Agreement Formats',
      'Vendor & Partner Contract Templates',
      'Confidentiality (NDA) & Policy Documentation'
    ]
  }
];

export default function SystemsDiagnosticWidget() {
  const [selectedSector, setSelectedSector] = useState(sectorOptions[0].id);
  const [selectedPain, setSelectedPain] = useState(painPointOptions[0].id);

  const matchedSector = sectorOptions.find((s) => s.id === selectedSector) || sectorOptions[0];
  const matchedPain = painPointOptions.find((p) => p.id === selectedPain) || painPointOptions[0];
  const Icon = matchedPain.icon;

  const handleReset = () => {
    setSelectedSector(sectorOptions[0].id);
    setSelectedPain(painPointOptions[0].id);
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden" id="diagnostic-tool">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Self-Check</span>
          </span>
          <h2 className="font-display text-xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
            Instant Systems Architecture Diagnostic
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Select your industry sector and primary operational challenge to view the corresponding GROW systems intervention.
          </p>
        </div>

        {/* 2-Column Interactive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Selectors */}
          <div className="lg:col-span-6 space-y-4 bg-slate-950/80 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl">
            {/* Step 1: Industry Sector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Step 1: Select Your Industry Sector
                </label>
                <span className="text-[10px] text-slate-500 font-mono">01/02</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {sectorOptions.map((sector) => (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => setSelectedSector(sector.id)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold text-left transition-all duration-150 cursor-pointer border ${
                      selectedSector === sector.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                    }`}
                  >
                    {sector.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Friction Point */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Step 2: Identify Your Core Systems Friction
                </label>
                <span className="text-[10px] text-slate-500 font-mono">02/02</span>
              </div>
              <div className="space-y-1.5">
                {painPointOptions.map((pain) => {
                  const isSelected = selectedPain === pain.id;
                  return (
                    <button
                      key={pain.id}
                      type="button"
                      onClick={() => setSelectedPain(pain.id)}
                      className={`w-full p-2.5 rounded-xl text-xs text-left transition-all duration-150 cursor-pointer border flex items-start gap-2 ${
                        isSelected
                          ? 'bg-slate-900 border-amber-400 text-white font-semibold ring-1 ring-amber-400/30'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </span>
                      <span>{pain.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>Reset Diagnostic</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Systems Diagnosis Result */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                Recommended Systems Roadmap
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                Sector: {matchedSector.name}
              </span>
            </div>

            {/* Recommended Division Highlight */}
            <div className="flex items-start gap-3 mb-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-0.5">
                  Target Practice Division
                </span>
                <h3 className="font-display text-lg font-extrabold text-white">
                  {matchedPain.recommendedDivision}
                </h3>
                <p className="text-xs font-medium text-slate-300 mt-0.5">
                  {matchedPain.divisionTitle}
                </p>
              </div>
            </div>

            {/* Suggested Institutional Deliverables */}
            <div className="space-y-2.5 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Key Deliverables for {matchedSector.name}:
              </h4>
              <div className="space-y-2">
                {matchedPain.deliverables.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-3 border-t border-slate-800">
              <Button to="/contact" variant="gold" size="sm" icon={ArrowRight} className="w-full sm:w-auto">
                Request Diagnostic for {matchedPain.recommendedDivision}
              </Button>
              <Button to={`/services/${matchedPain.slug}`} variant="outline" size="sm" className="border-slate-700 text-white hover:bg-slate-900 w-full sm:w-auto">
                View Division
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
