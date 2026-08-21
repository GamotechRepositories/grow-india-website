import { 
  Handshake, Code2, Share2, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Layers, Cpu 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { strategicPartnersOverview, verifiedPartners, strategicDeliveryPrinciples } from '../data/partners';
import { brandIdentity } from '../data/brand';

export default function PartnersPage() {
  return (
    <PageLayout
      title={`Strategic Partner Ecosystem – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="GROW India Strategic Partner Ecosystem: Technology & ERP collaboration with Gamotech Solutions, and digital marketing scaling with Digital Buddies."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Strategic Alliances</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            STRATEGIC PARTNER <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">ECOSYSTEM</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {strategicPartnersOverview.description}
          </p>
        </div>
      </section>

      {/* Delivery Model Banner */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
            Integrated Solution Delivery Model
          </span>
          <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-3">
            {strategicPartnersOverview.deliveryModel.description}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {strategicPartnersOverview.deliveryModel.growRoleNote}
          </p>
        </div>
      </section>

      {/* Verified Strategic Partners Dossiers */}
      <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Verified Alliances"
            title="Strategic Technology & Growth Partners"
            subtitle="Specialist technical execution combined with GROW's business systems and governance oversight."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {verifiedPartners.map((partner) => {
              const isTech = partner.id === 'gamotech-solutions';
              return (
                <div
                  key={partner.id}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-2xl"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                          STRATEGIC ALLIANCE
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

                    {/* Area of Expertise */}
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                      <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5">
                        {partner.name}'S TECHNICAL EXPERTISE:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {partner.expertise.map((exp, idx) => (
                          <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GROW's Role */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                        GROW'S BUSINESS & GOVERNANCE ROLE:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {partner.growRole.map((role, idx) => (
                          <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Joint Client Outcomes */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Measurable Joint Outcomes:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {partner.jointOutcomes.map((out, idx) => (
                          <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800">
                    <Button to="/contact" variant="gold" size="sm" className="w-full" icon={ArrowRight}>
                      Inquire for Joint {partner.name} Project
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Strategic Delivery Principles */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Operating Integrity"
            title={strategicDeliveryPrinciples.title}
            subtitle="The core values governing all joint partner client engagements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {strategicDeliveryPrinciples.principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-black text-amber-700 block mb-1">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
