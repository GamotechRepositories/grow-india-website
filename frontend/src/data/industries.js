import { whoGrowCorporateServes } from './corporate';
import { potentialGovernmentClients } from './government';

export const industryOverview = {
  title: 'WHO GROW SERVES',
  subtitle: 'Serving Private Enterprises, MSMEs, and Public Sector Institutions Across India',
  corporateList: whoGrowCorporateServes.clientTypes,
  governmentList: potentialGovernmentClients.segments
};

export const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Companies',
    tagline: 'Production SOPs, Quality Controls & Plant Governance',
    description:
      'Support for manufacturing organizations to establish standard operating procedures, inventory controls, RACI matrices, and statutory safety & compliance registers.'
  },
  {
    id: 'retail-trading',
    name: 'Retail & Trading Organizations',
    tagline: 'Multi-Store Systems, Inventory Reconciliation & Cash Controls',
    description:
      'Helping retail and trading businesses build replicable unit SOPs, daily reconciliation workflows, and multi-branch management scorecards.'
  },
  {
    id: 'it-services',
    name: 'IT, Software & Professional Services',
    tagline: 'Service Delivery Frameworks, Milestone Tracking & Client Agreements',
    description:
      'Assisting technology companies and professional firms in structuring project governance, client contract management, and employee KPI scorecards.'
  },
  {
    id: 'healthcare-institutions',
    name: 'Healthcare & Hospital Organizations',
    tagline: 'Clinical SOPs, Statutory Compliance & Operational Resilience',
    description:
      'Structuring healthcare and medical institutions with clinical process flows, statutory healthcare compliance registers, and facility audit readiness.'
  },
  {
    id: 'education-academies',
    name: 'Educational Organizations & Universities',
    tagline: 'Academic Administration, Process Manuals & Governance',
    description:
      'Supporting universities, academies, and educational trusts with administrative manuals, compliance monitoring, and accreditation audit preparedness.'
  },
  {
    id: 'logistics-infra',
    name: 'Logistics & Infrastructure Companies',
    tagline: 'Fleet Workflows, Vendor Controls & Operational Risk Management',
    description:
      'Structuring logistics and infrastructure firms with fleet movement SOPs, vendor risk-control matrices, and project milestone MIS.'
  },
  {
    id: 'family-msmes',
    name: 'Family-Owned Businesses & Growing MSMEs',
    tagline: 'Transition from Person Dependency to Process Governance',
    description:
      'Empowering promoter-led family businesses to establish formal Delegation of Authority (DoA), eliminate key-person dependency, and scale sustainably.'
  },
  {
    id: 'government-public-sector',
    name: 'Government & Public Sector Institutions',
    tagline: 'Citizen Charters, File-Movement Systems & CAG/CVC Audit Readiness',
    description:
      'Supporting ministries, departments, PSUs, and municipal bodies with office procedure improvements, RTI compliance, and vigilance support.'
  }
];

export default industries;
