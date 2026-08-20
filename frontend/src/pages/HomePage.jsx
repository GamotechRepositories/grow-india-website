import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/sections/HeroSection';
import SystemsDiagnosticWidget from '../components/sections/SystemsDiagnosticWidget';
import ExecutiveSummarySection from '../components/sections/ExecutiveSummarySection';
import BusinessChallengesSection from '../components/sections/BusinessChallengesSection';
import WhySystemsSection from '../components/sections/WhySystemsSection';
import CoreDivisionsSection from '../components/sections/CoreDivisionsSection';
import DualMethodologySection from '../components/sections/DualMethodologySection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import IndustrySectorsSection from '../components/sections/IndustrySectorsSection';
import PartnerEcosystemSection from '../components/sections/PartnerEcosystemSection';
import EngagementModelsSection from '../components/sections/EngagementModelsSection';
import TrainingAndCapacitySection from '../components/sections/TrainingAndCapacitySection';
import EthicsAndGovernanceSection from '../components/sections/EthicsAndGovernanceSection';
import StrategicDiagnosticCtaSection from '../components/sections/StrategicDiagnosticCtaSection';
import { brandIdentity } from '../data/brand';

export default function HomePage() {
  return (
    <PageLayout
      title={`${brandIdentity.shortName} – ${brandIdentity.officialName} | ${brandIdentity.positioning}`}
      description={`${brandIdentity.officialName} (${brandIdentity.shortName}) – ${brandIdentity.brandPromise} ${brandIdentity.supportingPositioning}. Serving businesses across India with GRC, SOPs, and performance systems.`}
    >
      {/* 1. Split Hero Command Center & Interactive Systems Architecture Blueprint */}
      <HeroSection />

      {/* 2. Interactive Systems Health Self-Diagnostic Tool */}
      <SystemsDiagnosticWidget />

      {/* 3. Executive Overview, Core Purpose & Philosophy Spotlight */}
      <ExecutiveSummarySection />

      {/* 4. Interactive Transformation Spectrum (Fragile vs. Systems-Driven) */}
      <BusinessChallengesSection />

      {/* 5. Why Strong Systems Matter */}
      <WhySystemsSection />

      {/* 6. The 7 Core GROW Practice Hub (Vertical Navigation & Blueprint Canvas) */}
      <CoreDivisionsSection />

      {/* 7. Dual Methodology Showcase (Horizontal Stepper & 9-Phase Matrix) */}
      <DualMethodologySection />

      {/* 8. Corporate & Public Sector Practice Areas */}
      <PracticeAreasSection />

      {/* 9. Interactive Industry Sector Dossier */}
      <IndustrySectorsSection />

      {/* 10. Strategic Partner Ecosystem (Gamotech Solutions & Digital Buddies) */}
      <PartnerEcosystemSection />

      {/* 11. Structured Client Engagement Models */}
      <EngagementModelsSection />

      {/* 12. Executive Training & Institutional Capacity Building */}
      <TrainingAndCapacitySection />

      {/* 13. Professional Ethics, Code of Conduct & CSR */}
      <EthicsAndGovernanceSection />

      {/* 14. High-Impact Strategic Diagnostic Consultation CTA */}
      <StrategicDiagnosticCtaSection />
    </PageLayout>
  );
}
