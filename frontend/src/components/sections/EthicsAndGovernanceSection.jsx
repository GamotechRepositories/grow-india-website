import { useState } from 'react';
import { Shield, Heart, CheckCircle2, ArrowRight, Scale, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { ethicsData } from '../../data/ethics';
import { csrData } from '../../data/csr';

export default function EthicsAndGovernanceSection() {
  const [activeTab, setActiveTab] = useState('ethics');

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200" id="ethics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Professional Standards"
          badgeIcon={Shield}
          title={ethicsData.title}
          subtitle={ethicsData.introduction}
          align="center"
        />

        {/* 2-Tab Switcher */}
        <div className="flex justify-center mt-6 mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('ethics')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'ethics'
                  ? 'bg-slate-950 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>1. Code of Professional Ethics (10 Principles)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('csr')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'csr'
                  ? 'bg-slate-950 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-500" />
              <span>2. Corporate Social Responsibility (CSR)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 10 Ethics Principles */}
        {activeTab === 'ethics' && (
          <div className="space-y-6 transition-all duration-300">
            {/* Ethical Principle Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-3xl mx-auto shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                OUR ETHICAL PRINCIPLE
              </span>
              <h3 className="font-display text-sm sm:text-base font-extrabold text-slate-900">
                "{ethicsData.ethicalPrinciple}"
              </h3>
            </div>

            {/* 10 Ethics Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ethicsData.principles.map((p) => (
                <div
                  key={p.number}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 hover:bg-slate-100/60 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {p.number}
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.statement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Button to="/about#ethics" variant="outline" size="sm" icon={ArrowRight}>
                Read Complete Governance & Ethics Framework
              </Button>
            </div>
          </div>
        )}

        {/* Tab 2: OUR CSR Section */}
        {activeTab === 'csr' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                    Corporate Social Responsibility
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {csrData.title}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-amber-300 border border-slate-800">
                "{csrData.csrPhilosophy}"
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-4xl">
              {csrData.introduction} {csrData.csrMission.statement}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {csrData.csrObjectives.map((obj, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{obj.title}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 italic">
                "{csrData.csrStatement}"
              </span>
              <Button to="/about#ethics" variant="gold" size="sm" icon={ArrowRight}>
                Read Ethics & CSR Policy
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
