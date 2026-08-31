import { Sparkles, Clock, FileText, Lock, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/sections/HeroSection';
import BusinessChallengesSection from '../components/sections/BusinessChallengesSection';
import CoreDivisionsSection from '../components/sections/CoreDivisionsSection';
import VideoReelsSection from '../components/sections/VideoReelsSection';
import DualMethodologySection from '../components/sections/DualMethodologySection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import IndustrySectorsSection from '../components/sections/IndustrySectorsSection';
import PartnerEcosystemSection from '../components/sections/PartnerEcosystemSection';
import StrategicDiagnosticCtaSection from '../components/sections/StrategicDiagnosticCtaSection';
import Button from '../components/ui/Button';
import { brandIdentity } from '../data/brand';

export default function HomePage() {
  return (
    <PageLayout
      title={`${brandIdentity.shortName} – ${brandIdentity.officialName} | ${brandIdentity.positioning}`}
      description={`${brandIdentity.officialName} (${brandIdentity.shortName}) – ${brandIdentity.brandPromise} ${brandIdentity.supportingPositioning}. Serving businesses across India with GRC, SOPs, and performance systems.`}
    >
      {/* 1. Hero Command Center & Quick Diagnostic Overview */}
      <HeroSection />

      {/* 2. FREE CORPORATE HEALTH CHECK-UP QUICK ACCESS BANNER (CLEAN & UNDERSTANDABLE) */}
      <section id="free-audit" className="py-10 sm:py-14 bg-gradient-to-r from-slate-950 via-[#0A1128] to-slate-950 text-white relative overflow-hidden border-b-2 border-amber-400/40">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-slate-900/90 rounded-3xl border-2 border-amber-400/80 p-6 sm:p-10 shadow-2xl backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Content */}
            <div className="space-y-3.5 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                <span>100% Free Corporate Health Check-Up</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                How Healthy Are Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Systems & Operations?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Take our 2-minute diagnostic self-assessment across 12 core departments. Detect operational gaps, eliminate person-dependencies, and get an instant official 2-Page PDF certificate.
              </p>

              {/* 4 Feature Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-[11px] font-bold text-slate-200">
                <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>2 Mins Only</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instant 2-Page PDF</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>100% Confidential</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Free Expert Review</span>
                </span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 flex flex-col items-center sm:items-stretch gap-2.5 w-full sm:w-auto">
              <Button
                to="/audit"
                variant="gold"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-4 shadow-xl font-black uppercase tracking-wide cursor-pointer"
              >
                ★ Start Free Audit (2 Min)
              </Button>
              <span className="text-[11px] text-slate-400 text-center font-medium">
                No payment required • 100% Free
              </span>
            </div>

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
