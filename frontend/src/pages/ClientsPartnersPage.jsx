import { useState } from 'react';
import { 
  Building2, Landmark, Handshake, Code2, Share2, CheckCircle2, 
  ArrowRight, ShieldCheck, Sparkles, Layers, Users, Globe, ExternalLink 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { ClientPortfolioPieChart } from '../components/common/PieChartDiagram';
import { industryOverview, industries } from '../data/industries';
import { strategicPartnersOverview, verifiedPartners, strategicDeliveryPrinciples } from '../data/partners';
import { whoGrowCorporateServes } from '../data/corporate';
import { potentialGovernmentClients } from '../data/government';
import { brandIdentity } from '../data/brand';

export default function ClientsPartnersPage() {
  const [activeTab, setActiveTab] = useState('clients');

  const principlesList = Array.isArray(strategicDeliveryPrinciples)
    ? strategicDeliveryPrinciples
    : strategicDeliveryPrinciples.principles || [];

  return (
    <PageLayout
      title={`Clients & Strategic Partners – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="GROW India client spectrum across 15 Corporate sectors, 18 Public Sector institutions, and our Strategic Technology & Digital Partner Ecosystem."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Institutional Ecosystem</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            CLIENTS & STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">PARTNER ECOSYSTEM</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Partnering with private enterprises, promoter-led MSMEs, and public sector institutions, supported by specialized technical and digital alliance partners.
          </p>

          {/* Interactive Switcher */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('clients')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'clients'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>1. Client Spectrum (Corporate & Government)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('partners')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'partners'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Share2 className="w-4 h-4" />
                <span>2. Strategic Alliance Partners</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab 1: Client Sectors */}
      {activeTab === 'clients' && (
        <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Pie Chart Representation */}
            <ClientPortfolioPieChart />

            {/* Corporate & MSME Section */}
            <div>
              <SectionTitle
                badge="Private Sector & MSMEs"
                badgeIcon={Building2}
                title={`VI. ${whoGrowCorporateServes.title}`}
                subtitle={whoGrowCorporateServes.subtitle}
                align="center"
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-8">
                {whoGrowCorporateServes.clientTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-400 hover:bg-amber-50/20 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        #{idx + 1}
                      </span>
                      <Building2 className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="font-display text-xs font-bold text-slate-800 leading-snug">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Sector & Government Section */}
            <div className="pt-8 border-t border-slate-200">
              <SectionTitle
                badge="Public Sector & Institutions"
                badgeIcon={Landmark}
                title={`VIII. ${potentialGovernmentClients.title}`}
                subtitle={potentialGovernmentClients.subtitle}
                align="center"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-8">
                {potentialGovernmentClients.segments.map((seg, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-md hover:border-amber-400/50 transition-all flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-display text-xs sm:text-sm font-bold text-slate-200">
                      {seg}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Tab 2: Strategic Partners */}
      {activeTab === 'partners' && (
        <section className="py-12 lg:py-16 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Integrated Solution Delivery
              </span>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {strategicPartnersOverview.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{strategicPartnersOverview.subtitle}</span>
              </div>
            </div>

            {/* Strategic Partners Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {verifiedPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                          {partner.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {partner.name}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                        {partner.id === 'gamotech-solutions' ? (
                          <Code2 className="w-6 h-6" />
                        ) : (
                          <Share2 className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    <div>
                      <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Core Technical Capabilities:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(partner.expertise || []).map((cap, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <strong className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-2">
                        GROW Consulting Role:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {(partner.growRole || []).slice(0, 6).map((role, idx) => (
                          <div key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span className="truncate">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
                      <strong className="block font-bold text-amber-200">Joint Deliverable Outcomes:</strong>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(partner.jointOutcomes || []).slice(0, 4).map((outc, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-amber-400/30 text-[11px] text-amber-200">
                            {outc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      Strategic Alliance
                    </span>
                    <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                      Inquire Joint Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Delivery Principles */}
            <div className="pt-8 border-t border-slate-800 space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Governance Matrix
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  6 Strategic Delivery Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {principlesList.map((prin, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{prin}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Global Consultation CTA */}
      <section className="py-12 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Explore a Strategic Partnership or Enterprise Engagement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Whether you represent a corporation, an MSME, a public department, or a technology vendor, GROW India welcomes strategic collaboration.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
              Schedule Exploratory Discussion
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
