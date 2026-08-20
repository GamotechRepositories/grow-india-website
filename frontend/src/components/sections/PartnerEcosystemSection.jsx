import { Code2, Share2, CheckCircle2, ArrowRight, Handshake, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { strategicPartnersOverview, verifiedPartners, strategicDeliveryPrinciples } from '../../data/partners';

export default function PartnerEcosystemSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Strategic Alliances"
          badgeIcon={Handshake}
          title={strategicPartnersOverview.title}
          subtitle={strategicPartnersOverview.subtitle}
          theme="dark"
          align="center"
        />

        <div className="mt-8 mb-12 p-6 rounded-3xl bg-slate-950 border border-slate-800 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {strategicPartnersOverview.description}
          </p>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-300 font-semibold">
            {strategicPartnersOverview.deliveryModel.description}
          </div>
        </div>

        {/* 2 Strategic Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {verifiedPartners.map((partner) => {
            const isTech = partner.id === 'gamotech-solutions';
            return (
              <div
                key={partner.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                        STRATEGIC PARTNER
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {partner.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                        {partner.category}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      {isTech ? <Code2 className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Partner Area of Expertise */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                      {partner.name}'S AREA OF EXPERTISE:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.expertise.map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GROW'S ROLE WHERE ENGAGED */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                      GROW'S ROLE WHERE ENGAGED:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {partner.growRole.map((role, idx) => (
                        <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* POTENTIAL JOINT OUTCOMES */}
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      POTENTIAL JOINT OUTCOMES:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {partner.jointOutcomes.map((outcome, idx) => (
                        <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Integrated Systems + Technology</span>
                  <Button to="/partners" variant="gold" size="sm" icon={ArrowRight}>
                    View Partnership Model
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section XIII: Strategic Partner Delivery Principles */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Governance & Integrity
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {strategicDeliveryPrinciples.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategicDeliveryPrinciples.principles.map((p, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{p.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
