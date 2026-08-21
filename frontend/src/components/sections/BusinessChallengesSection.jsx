import { useState } from 'react';
import { AlertTriangle, TrendingDown, CheckCircle2, ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { businessReality, whySystemsMatter } from '../../data/brand';

export default function BusinessChallengesSection() {
  const [activeView, setActiveView] = useState('challenges');

  return (
    <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Transformation Spectrum"
          badgeIcon={Zap}
          title="III. BUSINESS REALITY VS. SYSTEMS ADVANTAGE"
          subtitle="How external pressures create severe operational vulnerabilities, and how institutional systems transform them into sustainable enterprise strength."
          theme="dark"
          align="center"
        />

        {/* Interactive View Switcher */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveView('challenges')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeView === 'challenges'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>1. Operational Challenges & Risks</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('systems')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeView === 'systems'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>2. Why Systems Matter (12 Outcomes)</span>
            </button>
          </div>
        </div>

        {/* View 1: 11 Macro Factors + 12 Resulting Challenges */}
        {activeView === 'challenges' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-300">
            
            {/* Left Column: 11 Influencing Conditions */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Influenced by External Factors:
                  </span>
                  <TrendingDown className="w-4 h-4 text-amber-400" />
                </div>
                <div className="space-y-1.5">
                  {businessReality.macroFactors.map((factor, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                External market, regulatory, and supply-chain pressures.
              </div>
            </div>

            {/* Right Column: 12 Resulting Business Challenges */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-red-950/30 via-slate-900 to-slate-900 border border-red-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-red-900/40 pb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    RESULTING BUSINESS CHALLENGES:
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                    12 Vulnerabilities
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {businessReality.resultingChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950/90 border border-red-900/30 text-xs text-slate-200 flex items-start gap-2"
                    >
                      <span className="font-mono text-xs font-bold text-red-400 shrink-0 mt-0.5">
                        {idx + 1}.
                      </span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>GROW systems address these vulnerabilities systematically.</span>
                </span>
                <Button to="/audit" variant="gold" size="sm" icon={ArrowRight}>
                  Book Business Health Audit
                </Button>
              </div>
            </div>

          </div>
        )}

        {/* View 2: Why Strong Systems Matter + 12 Outcomes */}
        {activeView === 'systems' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl transition-all duration-300">
            {/* Formula Highlight Banner */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-center max-w-4xl mx-auto shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                The Institutional Formula:
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-amber-200 leading-relaxed">
                {whySystemsMatter.formula}
              </p>
            </div>

            {/* 12 Outcomes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
              {whySystemsMatter.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5 hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                Start With A Diagnostic Conversation
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
