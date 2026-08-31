import { CheckCircle2, Shield, Sparkles, TrendingUp, Cpu, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import DigitalVisitingCard from '../common/DigitalVisitingCard';
import Button from '../ui/Button';
import { contactDetails } from '../../data/contact';
import { brandPromiseSection, callToActionData } from '../../data/brand';
import consultingImg from '../../assets/images/consulting_advisory.jpg';

export default function StrategicDiagnosticCtaSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-950 text-white relative overflow-hidden" id="contact">
      {/* Background Decorative Ambient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        <SectionTitle
          badge="Engagement & Advisory"
          badgeIcon={Shield}
          title="PARTNER WITH GROW FOR STRATEGIC TRANSFORMATION"
          subtitle="Direct executive consulting, GRC safeguards, SOP systems structuring, and measurable growth advisory across India."
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: High-Impact Visual Transformation Showcase with Image */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-2xl relative group">
            
            {/* Visual Image with Gradient Overlay */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden">
              <img
                src={consultingImg}
                alt="GROW Corporate Strategy and Systems Consulting"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Executive Partner Advisory</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                  Institutional Governance & Process Excellence
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  Eliminate person-dependencies • Protect enterprise margins
                </p>
              </div>
            </div>

            {/* Visual Metric Pillars Grid */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Zero Blindspots</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Statutory compliance & proactive risk registers
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide">
                    <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>SOP Engine</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Codified workflows & RACI responsibility matrices
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>MIS Cockpit</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Role-level KPIs and monthly review dashboards
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Scale Systems</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Multi-unit expansion without operational chaos
                  </p>
                </div>
              </div>

              {/* Bottom Quick Trust Strip */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-amber-400/90 font-bold">
                  UDYAM: {contactDetails.udyamRegistration}
                </span>
                <span className="text-[11px] text-slate-400">
                  {contactDetails.geographicReach}
                </span>
              </div>
            </div>

          </div>

          {/* Right: The Exact Digital Visiting Card as Requested */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <DigitalVisitingCard />
          </div>
        </div>

      </div>
    </section>
  );
}
