import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/sections/HeroSection';
import SystemsDiagnosticWidget from '../components/sections/SystemsDiagnosticWidget';
import ExecutiveSummarySection from '../components/sections/ExecutiveSummarySection';
import BusinessChallengesSection from '../components/sections/BusinessChallengesSection';
import CoreDivisionsSection from '../components/sections/CoreDivisionsSection';
import DualMethodologySection from '../components/sections/DualMethodologySection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import IndustrySectorsSection from '../components/sections/IndustrySectorsSection';
import PartnerEcosystemSection from '../components/sections/PartnerEcosystemSection';
import EthicsAndGovernanceSection from '../components/sections/EthicsAndGovernanceSection';
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

      {/* 3. Executive Overview, Core Purpose & Philosophy Hub (Interactive 3-Tab) */}
      <ExecutiveSummarySection />

      {/* 4. Business Reality vs Systems Transformation (Interactive 2-View Switcher) */}
      <BusinessChallengesSection />

      {/* 5. The 7 Core GROW Practice Hub (Vertical Navigation & Blueprint Canvas) */}
      <CoreDivisionsSection />

      {/* 6. Dual Methodology Showcase (Operating Model & GRC Methodology) */}
      <DualMethodologySection />

      {/* 7. Corporate & Public Sector Practice Areas */}
      <PracticeAreasSection />

      {/* 8. Interactive Industry Sector Dossier */}
      <IndustrySectorsSection />

      {/* 9. Engagement, Alliances & Capacity Ecosystem (3-Tab Hub) */}
      <PartnerEcosystemSection />

      {/* 10. Professional Ethics, Code of Conduct & CSR (2-Tab Hub) */}
      <EthicsAndGovernanceSection />

      {/* 11. High-Impact Strategic Diagnostic Consultation CTA */}
      <StrategicDiagnosticCtaSection />
    </PageLayout>
  );
}
