import { Compass, Shield, Target, ArrowRight, CheckCircle2, ArrowRightCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { aboutGrowIndia, visionMissionPurpose, valueDelivered } from '../../data/brand';

export default function ExecutiveSummarySection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Institutional Overview"
          badgeIcon={Shield}
          title={aboutGrowIndia.title}
          subtitle={aboutGrowIndia.description}
          align="center"
        />

        {/* 11 Intersection Areas Ribbon */}
        <div className="mt-8 mb-16 p-6 rounded-3xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-3 text-center">
            GROW India works at the intersection of:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {aboutGrowIndia.intersectionAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Core Purpose & Philosophy Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              {visionMissionPurpose.corePurpose.title}
            </span>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {visionMissionPurpose.corePurpose.statement}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              GROW India exists to help organizations move across critical operational dimensions:
            </p>

            {/* 6 Key Transitions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 text-left">
              {visionMissionPurpose.corePurpose.transitions.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400 font-medium">{item.from}</span>
                  <ArrowRightCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-amber-300 font-bold">{item.to}</span>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="pt-6 border-t border-slate-800 text-xs font-semibold text-slate-400">
              <span className="text-amber-400 uppercase tracking-wider font-bold block mb-1">
                {visionMissionPurpose.corePhilosophy.title}:
              </span>
              <span>"{visionMissionPurpose.corePhilosophy.statement}"</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  {visionMissionPurpose.vision.title}
                </h4>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                {visionMissionPurpose.vision.statement}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
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
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  {visionMissionPurpose.mission.title}
                </h4>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                {visionMissionPurpose.mission.statement}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 max-h-72 overflow-y-auto pr-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  Our Mission Focuses On:
                </span>
                {visionMissionPurpose.mission.focusAreas.map((fa, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                    <strong className="text-slate-900 block font-bold mb-0.5">{fa.title}</strong>
                    <span className="text-slate-600">{fa.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9 Dimensions of Value Delivered by GROW */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Impact & Outcomes
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {valueDelivered.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueDelivered.dimensions.map((dim, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {dim.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button to="/about" variant="gold" size="sm" icon={ArrowRight}>
              Explore Full Institutional Profile
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
