import { useState } from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight, CheckCircle2, TrendingDown, Zap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function BusinessChallengesSection() {
  const contrastPairs = [
    {
      symptom: 'Person-Dependent Daily Operations',
      symptomDesc: 'Work halts or quality drops whenever key personnel are absent or resign.',
      solution: 'SOP Codification & RACI Matrices',
      solutionDesc: 'Written operating playbooks & clear ownership ensuring seamless operational continuity.'
    },
    {
      symptom: 'Hidden Statutory & Compliance Vulnerabilities',
      symptomDesc: 'Ad-hoc statutory tracking risking severe penalties, notices, and financial leakage.',
      solution: 'GRC Risk Register & Control Matrix',
      solutionDesc: 'Master compliance calendar, DoA framework & quarterly oversight review cadences.'
    },
    {
      symptom: 'Gut-Feeling Decisions & Delayed Reports',
      symptomDesc: 'Executive reviews delayed by weeks without department-level quantifiable scorecards.',
      solution: 'Real-Time MIS Cockpit & Role KPIs',
      solutionDesc: 'Automated executive dashboards and structured Monthly Management Review (MMR) cadences.'
    },
    {
      symptom: 'Founder Exhaustion in Multi-Unit Expansion',
      symptomDesc: 'Opening a new branch or distributor requires constant on-site promoter firefighting.',
      solution: 'Turnkey Unit Replication Manuals',
      solutionDesc: 'Standardized operational blueprint and partner onboarding governance for scalable growth.'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-950 text-white border-b border-slate-800" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          badge="Transformation Matrix"
          badgeIcon={Zap}
          title="OPERATIONAL VULNERABILITY VS. SYSTEMS ADVANTAGE"
          subtitle="How GROW converts daily operational chaos into predictable, scalable enterprise strength."
          theme="dark"
          align="center"
        />

        {/* 4-Card Crisp Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {contrastPairs.map((pair, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4 shadow-md"
            >
              {/* Top: Vulnerability */}
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>The Vulnerability:</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  {pair.symptom}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pair.symptomDesc}
                </p>
              </div>

              {/* Bottom: GROW Institutional Transformation */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>GROW Institutional System:</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  {pair.solution}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pair.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button to="/audit" variant="gold" size="md" icon={ArrowRight}>
            Run 360° Systems Diagnostic Self-Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
