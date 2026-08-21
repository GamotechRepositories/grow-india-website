import { Building2, Landmark, ArrowRight, PieChart as PieIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { ClientPortfolioPieChart } from '../common/PieChartDiagram';
import { corporateConsulting, whoGrowCorporateServes } from '../../data/corporate';
import { governmentConsulting, potentialGovernmentClients, whyGovernmentSystemsMatter } from '../../data/government';

export default function PracticeAreasSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <SectionTitle
            badge="Practice Groups"
            title="Corporate & Government Consulting Practices"
            subtitle="Dedicated consulting verticals supporting private enterprises, MSMEs, and public sector institutions across India."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Corporate Practice Box (Sections V & VI) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-400/60 transition-all duration-200">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      V. {corporateConsulting.title}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {corporateConsulting.subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {corporateConsulting.description}
                </p>

                {/* 8 Capability Areas */}
                <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block mb-2">
                    Key Capability Areas:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {corporateConsulting.areas.map((area, idx) => (
                      <div key={idx} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{area.category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section VI: WHO GROW CORPORATE SERVES */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
                    VI. {whoGrowCorporateServes.title}:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {whoGrowCorporateServes.clientTypes.slice(0, 10).map((type, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        {type}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded-lg bg-amber-100 text-[11px] font-bold text-amber-900">
                      +5 more categories
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Button to="/corporate-consulting" variant="primary" size="sm" icon={ArrowRight} className="w-full">
                  Explore Corporate Practice
                </Button>
              </div>
            </div>

            {/* Government Practice Box (Sections VII, VIII, IX) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-400/60 transition-all duration-200">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      VII. {governmentConsulting.title}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {governmentConsulting.subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {governmentConsulting.description}
                </p>

                {/* IX. GROW Contribution Flow */}
                <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-1.5">
                    {whyGovernmentSystemsMatter.contributionFlow.title}
                  </span>
                  <div className="flex flex-wrap items-center gap-1 text-xs font-bold text-slate-900">
                    {whyGovernmentSystemsMatter.contributionFlow.steps.map((step, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded bg-white border border-amber-200 text-slate-800 text-[11px]">
                          {step}
                        </span>
                        {idx < whyGovernmentSystemsMatter.contributionFlow.steps.length - 1 && (
                          <span className="text-amber-600 text-xs">&rarr;</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section VIII: POTENTIAL GOVERNMENT CLIENT SEGMENTS */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
                    VIII. {potentialGovernmentClients.title}:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {potentialGovernmentClients.segments.slice(0, 8).map((seg, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        {seg}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded-lg bg-amber-100 text-[11px] font-bold text-amber-900">
                      +10 more public institutions
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Button to="/government-consulting" variant="primary" size="sm" icon={ArrowRight} className="w-full">
                  Explore Government Practice
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Portfolio Distribution Donut / Pie Chart */}
        <div className="pt-6 border-t border-slate-200">
          <ClientPortfolioPieChart />
        </div>

      </div>
    </section>
  );
}
