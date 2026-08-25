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
import { brandIdentity } from '../data/brand';

export default function HomePage() {
  return (
    <PageLayout
      title={`${brandIdentity.shortName} – ${brandIdentity.officialName} | ${brandIdentity.positioning}`}
      description={`${brandIdentity.officialName} (${brandIdentity.shortName}) – ${brandIdentity.brandPromise} ${brandIdentity.supportingPositioning}. Serving businesses across India with GRC, SOPs, and performance systems.`}
    >
      {/* 1. Hero Command Center & Quick Diagnostic Overview */}
      <HeroSection />

      {/* 2. Operational Vulnerability vs Systems Advantage (Punchy 4-Card Contrast) */}
      <BusinessChallengesSection />

      {/* 3. The 7 Core GROW Practice Hub (Interactive Division Canvas) */}
      <CoreDivisionsSection />

      {/* 4. Strategic Video Reels & Masterclass Shorts Showcase (20 Educational Videos) */}
      <VideoReelsSection />

      {/* 5. Structured Methodologies & Practice Weightage (Interactive Pie Chart & Flowcharts) */}
      <DualMethodologySection />

      {/* 6. Corporate & Government Practice Groups + Client Spectrum Pie Chart */}
      <PracticeAreasSection />

      {/* 7. Industry Sectors Footprint */}
      <IndustrySectorsSection />

      {/* 8. Strategic Alliance & Partner Ecosystem (Gamotech, Digital Buddies, Engagement Models, Training) */}
      <PartnerEcosystemSection />

      {/* 9. High-Impact Strategic Diagnostic Consultation CTA & WhatsApp Contact */}
      <StrategicDiagnosticCtaSection />
    </PageLayout>
  );
}
