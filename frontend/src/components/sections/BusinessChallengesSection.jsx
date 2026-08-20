import { AlertTriangle, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { businessReality } from '../../data/brand';

export default function BusinessChallengesSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-950 text-white border-b border-slate-800" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Market & Operational Context"
          badgeIcon={AlertTriangle}
          title={businessReality.title}
          subtitle={businessReality.subtitle}
          theme="dark"
          align="center"
        />

        {/* 2-Column Split: Influencing Factors vs. Resulting Business Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
          
          {/* Left Column: 11 Influencing Conditions */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Organizations operate influenced by:
                </span>
                <TrendingDown className="w-4 h-4 text-amber-400" />
              </div>
              <div className="space-y-2">
                {businessReality.macroFactors.map((factor, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              External market, regulatory, and supply-chain pressures.
            </div>
          </div>

          {/* Right Column: 12 Resulting Business Challenges */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-red-950/30 via-slate-900 to-slate-900 border border-red-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-red-900/40 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  RESULTING BUSINESS CHALLENGES:
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                  Operational Vulnerabilities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {businessReality.resultingChallenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/90 border border-red-900/30 text-xs text-slate-200 flex items-start gap-2"
                  >
                    <span className="font-mono text-xs font-bold text-red-400 shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>GROW systems address these vulnerabilities systematically.</span>
              </span>
              <Button to="/audit" variant="gold" size="sm" icon={ArrowRight}>
                Book Business Health Audit
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
