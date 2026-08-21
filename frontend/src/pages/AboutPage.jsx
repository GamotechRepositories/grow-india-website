import { useState } from 'react';
import { 
  Shield, Compass, Target, Heart, CheckCircle2, ArrowRight, 
  ArrowRightCircle, Sparkles, Award, Scale, Users 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { brandIdentity, aboutGrowIndia, visionMissionPurpose, valueDelivered } from '../data/brand';
import { ethicsData } from '../data/ethics';
import { csrData } from '../data/csr';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <PageLayout
      title={`About Us & Institutional Profile – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="About GROW India: Purpose, Vision, Mission, 10 Ethics Principles, Corporate Social Responsibility, and our leadership philosophy in business systems & GRC."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Institutional Profile</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">{brandIdentity.officialName}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {aboutGrowIndia.description}
          </p>
        </div>
      </section>

      {/* Main Multi-Tab Institutional Hub */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Pill Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner flex-wrap justify-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-slate-950 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Purpose, Vision & Mission</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ethics')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'ethics'
                    ? 'bg-slate-950 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>10 Ethics Principles (XII)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('csr')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'csr'
                    ? 'bg-slate-950 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Corporate Social Responsibility (XIII)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Profile, Purpose & Transitions */}
          {activeTab === 'profile' && (
            <div className="space-y-12 transition-all duration-300">
              {/* Purpose Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                    {visionMissionPurpose.corePurpose.title}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {visionMissionPurpose.corePurpose.statement}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left pt-4">
                    {visionMissionPurpose.corePurpose.transitions.map((t, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                        <span className="text-xs text-slate-400">{t.from}</span>
                        <ArrowRightCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs font-bold text-amber-300">{t.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision & Mission Split */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {visionMissionPurpose.vision.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                    {visionMissionPurpose.vision.statement}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase text-amber-800 block">Our Vision Means:</span>
                    {visionMissionPurpose.vision.visionMeans.map((vm, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900">{vm.title}:</strong> {vm.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {visionMissionPurpose.mission.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                    {visionMissionPurpose.mission.statement}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase text-amber-800 block">Focus Areas:</span>
                    {visionMissionPurpose.mission.focusAreas.map((fa, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                        <strong className="text-slate-900 block font-bold mb-0.5">{fa.title}</strong>
                        <span>{fa.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: 10 Ethics Principles */}
          {activeTab === 'ethics' && (
            <div className="space-y-8 transition-all duration-300">
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1">
                  OUR ETHICAL PRINCIPLE
                </span>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                  "{ethicsData.ethicalPrinciple}"
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ethicsData.principles.map((p) => (
                  <div
                    key={p.number}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4"
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
            </div>
          )}

          {/* Tab 3: CSR Policy */}
          {activeTab === 'csr' && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    Corporate Social Responsibility
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {csrData.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-amber-300 border border-slate-800">
                  "{csrData.csrPhilosophy}"
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {csrData.introduction} {csrData.csrMission.statement}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {csrData.csrObjectives.map((obj, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
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
            </div>
          )}

        </div>
      </section>
    </PageLayout>
  );
}
