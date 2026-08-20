import { Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { whySystemsMatter } from '../../data/brand';

export default function WhySystemsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="why-systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Foundational Principle"
          badgeIcon={Cpu}
          title={whySystemsMatter.title}
          subtitle="Organizations with: Clear SOPs + Strong Governance + Process Discipline + Risk Management + Performance Monitoring + Effective Controls are better positioned to:"
          align="center"
        />

        {/* Formula Highlight Banner */}
        <div className="mt-8 mb-12 p-6 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
            The Institutional Formula:
          </span>
          <p className="font-display text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
            {whySystemsMatter.formula}
          </p>
        </div>

        {/* 12 Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-12">
          {whySystemsMatter.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:bg-slate-100/80 transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {outcome}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
            Start With A Diagnostic Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
