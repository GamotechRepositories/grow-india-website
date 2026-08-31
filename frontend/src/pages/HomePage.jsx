import { ShieldCheck, Sparkles, Clock, FileText, Lock, Award } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/sections/HeroSection';
import BusinessChallengesSection from '../components/sections/BusinessChallengesSection';
import FreeAuditForm from '../components/audit/FreeAuditForm';
import CoreDivisionsSection from '../components/sections/CoreDivisionsSection';
import VideoReelsSection from '../components/sections/VideoReelsSection';
import DualMethodologySection from '../components/sections/DualMethodologySection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import IndustrySectorsSection from '../components/sections/IndustrySectorsSection';
import PartnerEcosystemSection from '../components/sections/PartnerEcosystemSection';
import StrategicDiagnosticCtaSection from '../components/sections/StrategicDiagnosticCtaSection';
import { brandIdentity } from '../data/brand';

export default function HomePage() {
  return (
    <PageLayout
      title={`${brandIdentity.shortName} – ${brandIdentity.officialName} | ${brandIdentity.positioning}`}
      description={`${brandIdentity.officialName} (${brandIdentity.shortName}) – ${brandIdentity.brandPromise} ${brandIdentity.supportingPositioning}. Serving businesses across India with GRC, SOPs, and performance systems.`}
    >
      {/* 1. Hero Command Center & Quick Diagnostic Overview */}
      <HeroSection />

      {/* 2. FRONT & CENTER: 100% FREE CORPORATE HEALTH CHECK-UP AUDIT FORM */}
      <section id="free-audit" className="py-10 sm:py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-amber-400/30">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 sm:space-y-8">
          
          {/* Section Header Banner */}
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950 animate-bounce" />
              <span>★ 100% FREE CORPORATE HEALTH CHECK-UP ★</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              FREE BUSINESS HEALTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">AUDIT QUESTIONNAIRE</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto">
              A 2-Minute Diagnostic Tool for Organizations • 2 Questions Per Department with Instant Checkbox Ratings & 2-Page PDF Certificate.
            </p>

            {/* 4 Quick Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-slate-300 pt-1">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Takes 2 Minutes</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant 2-Page PDF</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Confidential</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Expert GROW Review</span>
              </span>
            </div>
          </div>

          {/* Interactive Form Component */}
          <div className="bg-slate-100/90 rounded-3xl p-3 sm:p-6 lg:p-8 shadow-2xl border border-slate-300">
            <FreeAuditForm />
          </div>

        </div>
      </section>

      {/* 3. Operational Vulnerability vs Systems Advantage (Punchy 4-Card Contrast) */}
      <BusinessChallengesSection />

      {/* 4. The 7 Core GROW Practice Hub (Interactive Division Canvas) */}
      <CoreDivisionsSection />

      {/* 5. Strategic Video Reels & Masterclass Shorts Showcase (20 Educational Videos) */}
      <VideoReelsSection />

      {/* 6. Structured Methodologies & Practice Weightage (Interactive Pie Chart & Flowcharts) */}
      <DualMethodologySection />

      {/* 7. Corporate & Government Practice Groups + Client Spectrum Pie Chart */}
      <PracticeAreasSection />

      {/* 8. Industry Sectors Footprint */}
      <IndustrySectorsSection />

      {/* 9. Strategic Alliance & Partner Ecosystem (Gamotech, Digital Buddies, Engagement Models, Training) */}
      <PartnerEcosystemSection />

      {/* 10. High-Impact Strategic Diagnostic Consultation CTA & WhatsApp Contact */}
      <StrategicDiagnosticCtaSection />
    </PageLayout>
  );
}
