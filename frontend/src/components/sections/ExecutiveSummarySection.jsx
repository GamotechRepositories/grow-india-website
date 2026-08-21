import { useState } from 'react';
import { Compass, Shield, Target, ArrowRight, CheckCircle2, ArrowRightCircle, Sparkles, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { aboutGrowIndia, visionMissionPurpose, valueDelivered } from '../../data/brand';

export default function ExecutiveSummarySection() {
  const [activeTab, setActiveTab] = useState('purpose');

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Institutional Overview"
          badgeIcon={Shield}
          title={aboutGrowIndia.title}
          subtitle={aboutGrowIndia.description}
          align="center"
        />

        {/* 11 Intersection Areas Ribbon - Compact */}
        <div className="mt-6 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-2 text-center">
            GROW India works at the intersection of:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {aboutGrowIndia.intersectionAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* 3-Tab Interactive Navigation */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('purpose')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'purpose'
                  ? 'bg-slate-950 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Core Purpose & Philosophy</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vision-mission')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'vision-mission'
                  ? 'bg-slate-950 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Vision & Mission</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('value')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'value'
                  ? 'bg-slate-950 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>9 Value Delivered Dimensions</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Core Purpose & Philosophy */}
        {activeTab === 'purpose' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {visionMissionPurpose.corePurpose.title}
                </span>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {visionMissionPurpose.corePurpose.statement}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                  GROW India exists to help organizations move across critical operational dimensions:
                </p>
              </div>

              {/* 6 Key Transitions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-left">
                {visionMissionPurpose.corePurpose.transitions.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-400 font-medium">{item.from}</span>
                    <ArrowRightCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-amber-300 font-bold">{item.to}</span>
                  </div>
                ))}
              </div>

              {/* Philosophy quote */}
              <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-slate-400 text-center">
                <span className="text-amber-400 uppercase tracking-wider font-bold block mb-1">
                  {visionMissionPurpose.corePhilosophy.title}:
                </span>
                <span>"{visionMissionPurpose.corePhilosophy.statement}"</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vision & Mission */}
        {activeTab === 'vision-mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-300">
            {/* Vision */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    {visionMissionPurpose.vision.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                  {visionMissionPurpose.vision.statement}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Our Vision Means:
                  </span>
                  {visionMissionPurpose.vision.visionMeans.map((vm, idx) => (
                    <div key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">{vm.title}:</strong> {vm.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    {visionMissionPurpose.mission.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                  {visionMissionPurpose.mission.statement}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200 max-h-56 overflow-y-auto pr-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Our Mission Focuses On:
                  </span>
                  {visionMissionPurpose.mission.focusAreas.map((fa, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                      <strong className="text-slate-900 block font-bold mb-0.5">{fa.title}</strong>
                      <span className="text-slate-600">{fa.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 9 Dimensions of Value Delivered */}
        {activeTab === 'value' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 transition-all duration-300">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Impact & Outcomes
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                {valueDelivered.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {valueDelivered.dimensions.map((dim, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    {dim.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {dim.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <Button to="/about" variant="outline" size="sm" icon={ArrowRight}>
            Explore Full Institutional Profile
          </Button>
        </div>

      </div>
    </section>
  );
}
