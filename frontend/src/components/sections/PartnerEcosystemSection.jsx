import { useState } from 'react';
import { Code2, Share2, CheckCircle2, ArrowRight, Handshake, Shield, Layers, GraduationCap, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { strategicPartnersOverview, verifiedPartners, strategicDeliveryPrinciples } from '../../data/partners';
import { engagementModels, trainingAndCapacityData } from '../../data/engagementModels';

export default function PartnerEcosystemSection() {
  const [activeTab, setActiveTab] = useState('partners');

  return (
    <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Ecosystem & Delivery"
          badgeIcon={Handshake}
          title="ENGAGEMENT, ALLIANCES & CAPACITY ECOSYSTEM"
          subtitle="How GROW India collaborates with strategic partners, structures institutional engagements, and builds internal executive capacity."
          theme="dark"
          align="center"
        />

        {/* 3-Tab Interactive Switcher */}
        <div className="flex justify-center mt-6 mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('partners')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'partners'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Handshake className="w-4 h-4" />
              <span>1. Strategic Partners (Gamotech & Digital Buddies)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('models')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'models'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. Engagement Models (XVI)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('training')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'training'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>3. Executive Training (XVII)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Strategic Partners */}
        {activeTab === 'partners' && (
          <div className="space-y-6 transition-all duration-300">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center max-w-4xl mx-auto">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {strategicPartnersOverview.description}
              </p>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-300 font-semibold">
                {strategicPartnersOverview.deliveryModel.description}
              </div>
            </div>

            {/* 2 Strategic Partner Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {verifiedPartners.map((partner) => {
                const isTech = partner.id === 'gamotech-solutions';
                return (
                  <div
                    key={partner.id}
                    className="p-6 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                            STRATEGIC PARTNER
                          </span>
                          <h3 className="font-display text-xl font-bold text-white">
                            {partner.name}
                          </h3>
                          <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                            {partner.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                          {isTech ? <Code2 className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                        </div>
                      </div>

                      {/* Partner Area of Expertise */}
                      <div className="mb-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                          {partner.name}'S EXPERTISE:
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5">
                          {partner.expertise.map((exp, idx) => (
                            <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                              <span>{exp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* GROW Role in Collaboration */}
                      <div className="mb-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          GROW'S ROLE IN COLLABORATION:
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5">
                          {partner.growRole.map((role, idx) => (
                            <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Joint Outcomes */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Joint Client Outcomes:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {partner.jointOutcomes.map((del, idx) => (
                            <div key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <Button
                        to="/contact"
                        variant="outline"
                        size="sm"
                        className="w-full justify-between border-slate-700 text-white hover:bg-slate-900"
                        icon={ArrowRight}
                      >
                        Inquire for {partner.name} Joint Solutions
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic Delivery Principles */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 text-center md:text-left">
                {strategicDeliveryPrinciples.title}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:text-left">
                {strategicDeliveryPrinciples.principles.map((principle, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {principle.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Engagement Models (XVI) */}
        {activeTab === 'models' && (
          <div className="space-y-6 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {engagementModels.map((model) => (
                <div
                  key={model.number}
                  className="p-5 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-black text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                        MODEL {model.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </div>

                    <h3 className="font-display text-sm font-bold text-white mb-2">
                      {model.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <Button to="/contact" variant="outline" size="sm" className="w-full justify-between border-slate-700 text-white hover:bg-slate-900" icon={ArrowRight}>
                      Select Model
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Executive Training & Capacity Building (XVII) */}
        {activeTab === 'training' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl transition-all duration-300">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                XVII. {trainingAndCapacityData.title}
              </h3>
              <p className="text-xs text-slate-300">
                {trainingAndCapacityData.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {trainingAndCapacityData.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 hover:border-amber-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                Request Customized Training Program
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
