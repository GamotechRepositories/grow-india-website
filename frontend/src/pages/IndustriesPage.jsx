import { useState } from 'react';
import { 
  Factory, ShoppingBag, Laptop, Activity, GraduationCap, Truck, 
  Building2, Landmark, CheckCircle2, ArrowRight, Sparkles, Shield, ChevronRight 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { industries, industryOverview } from '../data/industries';
import { brandIdentity } from '../data/brand';

const industryIcons = {
  manufacturing: Factory,
  'retail-trading': ShoppingBag,
  'it-services': Laptop,
  'healthcare-institutions': Activity,
  'education-academies': GraduationCap,
  'logistics-infra': Truck,
  'family-msmes': Building2,
  'government-public-sector': Landmark
};

export default function IndustriesPage() {
  const [selectedIndustryId, setSelectedIndustryId] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === selectedIndustryId) || industries[0];
  const ActiveIcon = industryIcons[activeIndustry.id] || Factory;

  return (
    <PageLayout
      title={`Industry Practice Sectors – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="Specialized systems architecture across 8 core industry sectors: Manufacturing, Retail, IT Services, Healthcare, Education, Logistics, Family MSMEs, and Public Sector."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Factory className="w-3.5 h-3.5 text-amber-400" />
            <span>8 Sector Practice Groups</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            INDUSTRY-SPECIFIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">SYSTEMS ARCHITECTURE</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every industry operates under distinct regulatory, operational, and market constraints. GROW designs customized governance, SOP, and performance frameworks tailored to your sector.
          </p>
        </div>
      </section>

      {/* 8 Sector Practice Explorer */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sector List */}
            <div className="lg:col-span-4 space-y-1.5 bg-slate-50 border border-slate-200/90 rounded-3xl p-3 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 block mb-1">
                Select Industry Sector:
              </span>

              {industries.map((ind) => {
                const Icon = industryIcons[ind.id] || Factory;
                const isActive = ind.id === selectedIndustryId;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`w-full p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer flex items-center justify-between group border ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display text-xs font-bold truncate max-w-[200px]">
                        {ind.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Active Sector Blueprint */}
            <div className="lg:col-span-8 bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

              <div className="space-y-6 relative">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                        Sector Focus Group
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {activeIndustry.name}
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {activeIndustry.tagline}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Practice Framework Description:
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {activeIndustry.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Core Intervention Modules:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Departmental Process SOPs & RACI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Statutory Compliance Tracking Master</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Role-Specific KPI & MIS Scorecards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Delegation of Authority & Internal Controls</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                    Inquire for {activeIndustry.name.split('&')[0].trim()}
                  </Button>
                  <Button to="/audit" variant="outline" size="sm" className="border-slate-700 text-white hover:bg-slate-900">
                    Take Sector Health Audit
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate & Government Full Rosters */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Comprehensive Reach"
            title={industryOverview.title}
            subtitle={industryOverview.subtitle}
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Corporate Categories */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <h3 className="font-display text-base font-bold text-slate-900 uppercase tracking-wider">
                    Corporate & MSME Client Segments (15 Types)
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industryOverview.corporateList.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button to="/corporate-consulting" variant="primary" size="sm" icon={ArrowRight} className="w-full">
                  Explore Corporate Practice
                </Button>
              </div>
            </div>

            {/* Government Segments */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-800 pb-3">
                  <Landmark className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                    Public Sector & Institutional Clients (18 Segments)
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industryOverview.governmentList.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800">
                <Button to="/government-consulting" variant="gold" size="sm" icon={ArrowRight} className="w-full">
                  Explore Government Practice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
