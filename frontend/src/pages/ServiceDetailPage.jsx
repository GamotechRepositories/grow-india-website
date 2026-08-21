import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, Cpu, Briefcase, Layers, TrendingUp, BarChart3, Scale, 
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles, AlertTriangle, PhoneCall, HelpCircle 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { services, legalLimitationNote } from '../data/services';
import { contactDetails } from '../data/contact';
import { brandIdentity } from '../data/brand';

const iconMap = {
  ShieldCheck,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  BarChart3,
  Scale
};

const divisionDetailsExtra = {
  'grow-shield': {
    targetAudience: 'Boards of Directors, Promoters, CFOs & Audit Committees seeking statutory certainty and risk control.',
    commonProblems: [
      'Person-dependent compliance tracking with high risk of penalty defaults.',
      'Unstructured risk visibility across departments and branch networks.',
      'Lack of clear Delegation of Authority (DoA) matrices causing financial leakage.'
    ],
    executionPhases: [
      { name: '1. Diagnostic Review', desc: 'Statutory audit of registers, licences, and operational risks.' },
      { name: '2. Framework Codification', desc: 'Design of internal control matrix, DoA and compliance calendars.' },
      { name: '3. Cadence Institutionalization', desc: 'Embedding quarterly risk reviews and board oversight protocols.' }
    ]
  },
  'grow-engine': {
    targetAudience: 'Founders, MDs, COOs and Department Heads battling daily chaos and person-dependent operations.',
    commonProblems: [
      'Work ceases or derails whenever key personnel are absent or leave.',
      'Inconsistent output quality across shifts, stores, or regional units.',
      'Absence of written RACI matrices causing blame games between teams.'
    ],
    executionPhases: [
      { name: '1. As-Is Process Mapping', desc: 'Ground-level discovery of current workflows and bottlenecks.' },
      { name: '2. To-Be SOP Engineering', desc: 'Drafting structured SOP manuals, step-by-step checklists & RACI matrices.' },
      { name: '3. Handover & Team Training', desc: 'Workshop rollouts, adoption drills and supervisory audits.' }
    ]
  },
  'grow-consulting': {
    targetAudience: 'Promoter-led MSMEs and enterprise boards preparing for next-level scaling or organizational pivot.',
    commonProblems: [
      'Revenue growth has plateaued despite hard work by leadership.',
      'Lack of an objective, third-party strategic review of the business model.',
      'Unclear organizational structure and decision-making bottlenecks.'
    ],
    executionPhases: [
      { name: '1. Strategic Health Audit', desc: '360° diagnostic of business model, margins, and market positioning.' },
      { name: '2. Growth Roadmap Design', desc: 'Formulating clear 1-3 year strategic milestones and restructuring.' },
      { name: '3. Advisory Cadence', desc: 'Monthly board-level strategic tracking and course correction.' }
    ]
  },
  'grow-systems': {
    targetAudience: 'Business Owners, CEOs and General Managers needing real-time operational visibility without micro-management.',
    commonProblems: [
      'Management decisions are based on gut feeling rather than verifiable data.',
      'Departmental heads lack measurable scorecards and target accountability.',
      'Reports are delayed by weeks, rendering review meetings ineffective.'
    ],
    executionPhases: [
      { name: '1. KPI Dictionary Design', desc: 'Formulating department and role-specific quantifiable metrics.' },
      { name: '2. MIS Dashboard Architecture', desc: 'Structuring weekly and monthly executive MIS reporting templates.' },
      { name: '3. Review Cadence Setup', desc: 'Standardizing Monthly Management Review (MMR) meeting protocols.' }
    ]
  },
  'grow-marketing': {
    targetAudience: 'Sales Directors, Marketing Heads and Business Promoters seeking predictable lead generation pipelines.',
    commonProblems: [
      'Disorganized lead handoffs between marketing agencies and internal sales teams.',
      'Unmeasured marketing spend with unknown ROI across digital/offline channels.',
      'Lack of structured sales scripts, follow-up cadences, and CRM SOPs.'
    ],
    executionPhases: [
      { name: '1. Sales Funnel Structuring', desc: 'Mapping customer acquisition stages, touchpoints and SLAs.' },
      { name: '2. Marketing SOPs & SLAs', desc: 'Setting response time benchmarks, lead nurturing flows and scripts.' },
      { name: '3. Campaign Performance Dashboards', desc: 'Continuous tracking of cost-per-lead, conversion rates and ROI.' }
    ]
  },
  'grow-scale': {
    targetAudience: 'Growing enterprises looking to replicate their business model across new geographies and channels.',
    commonProblems: [
      'Opening a new branch or unit requires constant founder involvement on site.',
      'Lack of a turnkey unit replication manual and partner onboarding kit.',
      'Inefficient dealer/distributor network management frameworks.'
    ],
    executionPhases: [
      { name: '1. Unit Economics & Model Refinement', desc: 'Standardizing the core business unit blueprint.' },
      { name: '2. Replication Manual Development', desc: 'Creating multi-branch operating playbooks and channel terms.' },
      { name: '3. Expansion Governance', desc: 'Establishing monitoring cockpits for multi-unit performance.' }
    ]
  },
  'grow-legal': {
    targetAudience: 'Enterprises needing robust commercial contracts, NDAs, vendor terms, and internal policy documentation.',
    commonProblems: [
      'Conducting business on informal terms or outdated, generic contract templates.',
      'High contractual ambiguity creating delayed collections or dispute exposure.',
      'Lack of formalized employee, vendor, and intellectual property protection policies.'
    ],
    executionPhases: [
      { name: '1. Contractual Risk Review', desc: 'Inventorying active commercial arrangements and liability gaps.' },
      { name: '2. Template Standardisation', desc: 'Drafting robust master agreements, vendor SLAs and NDAs.' },
      { name: '3. Execution Governance', desc: 'Creating document approval hierarchies and archiving protocols.' }
    ]
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon] || ShieldCheck;
  const extra = divisionDetailsExtra[service.id] || divisionDetailsExtra['grow-shield'];
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <PageLayout
      title={`${service.code} – ${service.title} | ${brandIdentity.shortName}`}
      description={`${service.title} by ${brandIdentity.officialName}: ${service.tagline}. Institutional systems, capabilities, and structured implementation.`}
    >
      {/* Top Breadcrumb Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Divisions</span>
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">{service.code}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Icon className="w-3.5 h-3.5" />
                <span>Specialized Practice Division</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {service.code}: <span className="text-amber-400">{service.title}</span>
              </h1>
              <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button to="/contact" variant="gold" size="lg" icon={ArrowRight} className="w-full">
                Request Diagnostic for {service.code}
              </Button>
              <Button to="/audit" variant="outline" size="md" className="border-slate-700 text-white hover:bg-slate-900 w-full">
                Run Systems Health Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 1. Core Practice Capabilities */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      Scope of Engagement
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Core Capabilities Delivered
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Common Operational Vulnerabilities This Solves */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                  Target Friction Points
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Key Organizational Challenges Addressed:
                </h3>

                <div className="space-y-3">
                  {extra.commonProblems.map((prob, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Phased Implementation Roadmap Flowchart */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                      Execution Blueprint
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      3-Stage Implementation Flowchart
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    Phased Methodology
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 relative">
                  {extra.executionPhases.map((phase, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between relative hover:border-amber-400/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-amber-400">
                            PHASE 0{idx + 1}
                          </span>
                          {idx < 2 && (
                            <span className="text-slate-500 font-bold hidden md:inline text-xs">
                              →
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-sm font-bold text-white mb-2">
                          {phase.name}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Disclaimer */}
              {service.legalDisclaimer && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong className="block font-bold mb-1">Regulatory & Professional Limitation:</strong>
                  {service.legalDisclaimer}
                </div>
              )}

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Ideal Audience Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Ideal For:
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {extra.targetAudience}
                </p>
              </div>

              {/* Direct Booking Box */}
              <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                  Confidential Consultation
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Discuss {service.code} For Your Enterprise
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Book a direct advisory discussion with principal consultants to scope deliverables and timeline.
                </p>
                <Button to="/contact" variant="gold" size="sm" icon={ArrowRight} className="w-full">
                  Initiate Inquiry
                </Button>
                <div className="pt-3 border-t border-slate-800 text-center">
                  <a href={`tel:${contactDetails.phone}`} className="text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Direct: {contactDetails.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Other 6 Divisions Links */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Other Practice Divisions:
                </span>
                <div className="space-y-1.5">
                  {otherServices.map((oth) => (
                    <Link
                      key={oth.id}
                      to={`/services/${oth.slug}`}
                      className="p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 flex items-center justify-between transition-colors border border-transparent hover:border-slate-200"
                    >
                      <span>{oth.code}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
