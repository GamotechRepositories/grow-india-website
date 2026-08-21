import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/sections/HeroSection';
import SystemsDiagnosticWidget from '../components/sections/SystemsDiagnosticWidget';
import CoreDivisionsSection from '../components/sections/CoreDivisionsSection';
import DualMethodologySection from '../components/sections/DualMethodologySection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import StrategicDiagnosticCtaSection from '../components/sections/StrategicDiagnosticCtaSection';
import { brandIdentity } from '../data/brand';

export default function HomePage() {
  return (
    <PageLayout
      title={`${brandIdentity.shortName} – ${brandIdentity.officialName} | ${brandIdentity.positioning}`}
      description={`${brandIdentity.officialName} (${brandIdentity.shortName}) – ${brandIdentity.brandPromise} ${brandIdentity.supportingPositioning}. Serving businesses across India with GRC, SOPs, and performance systems.`}
    >
      {/* 1. Hero Command Center & Interactive Systems Architecture Blueprint */}
      <HeroSection />

      {/* 2. Interactive Systems Health Self-Diagnostic Tool */}
      <SystemsDiagnosticWidget />

      {/* 3. The 7 Core GROW Practice Hub (Interactive Canvas & Capability Matrix) */}
      <CoreDivisionsSection />

      {/* 4. Dual Methodology Showcase & Practice Weightage Pie Chart */}
      <DualMethodologySection />

      {/* 5. Corporate & Public Sector Practice Areas with Client Portfolio Pie Chart */}
      <PracticeAreasSection />

      {/* 6. High-Impact Strategic Diagnostic Consultation CTA & Digital Card */}
      <StrategicDiagnosticCtaSection />
    </PageLayout>
  );
}
