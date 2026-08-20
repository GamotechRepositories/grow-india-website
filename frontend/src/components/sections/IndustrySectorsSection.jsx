import { useState } from 'react';
import { Factory, ShoppingBag, Laptop, Activity, GraduationCap, Truck, Building2, Landmark, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { industries, industryOverview } from '../../data/industries';

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

export default function IndustrySectorsSection() {
  const [activeSectorId, setActiveSectorId] = useState(industries[0].id);

  const selectedSector = industries.find((i) => i.id === activeSectorId) || industries[0];
  const Icon = industryIcons[selectedSector.id] || Factory;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Sectors & Institutions"
          title={`VI & VIII. ${industryOverview.title}`}
          subtitle={industryOverview.subtitle}
          align="center"
        />

        {/* Interactive Sector Badge Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-12 mb-10">
          {industries.map((ind) => {
            const SectorIcon = industryIcons[ind.id] || Factory;
            const isActive = ind.id === activeSectorId;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveSectorId(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-slate-950 text-amber-400 border-slate-950 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <SectorIcon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{ind.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Dossier Canvas */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Sector Practice Framework
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedSector.name}
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              {selectedSector.tagline}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mb-6 font-medium">
            {selectedSector.description}
          </p>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Integrated with GROW GRC Methodology, Departmental SOPs & Role-Specific KPI Dashboards.</span>
          </div>
        </div>

        {/* Two Full Lists: Corporate (VI) & Government (VIII) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section VI: WHO GROW CORPORATE SERVES */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <Building2 className="w-5 h-5 text-amber-400" />
                <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  VI. WHO GROW CORPORATE SERVES (15 Types)
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industryOverview.corporateList.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Button to="/corporate-consulting" variant="gold" size="sm" icon={ArrowRight} className="w-full">
                Explore Corporate Consulting
              </Button>
            </div>
          </div>

          {/* Section VIII: POTENTIAL GOVERNMENT CLIENT SEGMENTS */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <Landmark className="w-5 h-5 text-amber-400" />
                <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  VIII. POTENTIAL GOVERNMENT CLIENTS (18 Segments)
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industryOverview.governmentList.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
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
  );
}
