import { Shield, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { ethicsData } from '../../data/ethics';
import { csrData } from '../../data/csr';

export default function EthicsAndGovernanceSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="ethics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Professional Standards"
          badgeIcon={Shield}
          title={ethicsData.title}
          subtitle={ethicsData.introduction}
          align="center"
        />

        {/* Ethical Principle Banner */}
        <div className="mt-8 mb-14 p-6 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-3xl mx-auto shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
            OUR ETHICAL PRINCIPLE
          </span>
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
            "{ethicsData.ethicalPrinciple}"
          </h3>
        </div>

        {/* 10 Ethics Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {ethicsData.principles.map((p) => (
            <div
              key={p.number}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4 hover:bg-slate-100/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                {p.number}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900 mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* OUR CSR Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                  Corporate Social Responsibility
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {csrData.title}
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-amber-300 border border-slate-800">
              "{csrData.csrPhilosophy}"
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-4xl">
            {csrData.introduction} {csrData.csrMission.statement}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {csrData.csrObjectives.map((obj, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{obj.title}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 italic">
              "{csrData.csrStatement}"
            </span>
            <Button to="/about#ethics" variant="gold" size="sm" icon={ArrowRight}>
              Read Ethics & CSR Policy
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
