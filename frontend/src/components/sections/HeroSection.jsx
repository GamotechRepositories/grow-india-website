import { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Layers, TrendingUp, CheckCircle2, PhoneCall, Sparkles, Network } from 'lucide-react';
import Button from '../ui/Button';
import { brandIdentity } from '../../data/brand';
import { contactDetails } from '../../data/contact';

const blueprintNodes = [
  {
    id: 'grc',
    icon: ShieldCheck,
    title: 'Governance & GRC',
    subtitle: 'Statutory Registers & Risk Controls',
    summary: 'Institutionalizes corporate governance, internal controls, and proactive statutory compliance registers.',
    metric: 'Zero Compliance Blindspots',
    color: 'amber'
  },
  {
    id: 'sops',
    icon: Cpu,
    title: 'Process SOP Engine',
    subtitle: 'Workflow Codification & RACI',
    summary: 'Converts person-dependent operations into documented standard operating procedures and role playbooks.',
    metric: 'Process Independence',
    color: 'blue'
  },
  {
    id: 'mis',
    icon: Layers,
    title: 'MIS & KPI Cockpit',
    subtitle: 'Real-time Performance Reporting',
    summary: 'Equips executive leadership with role-specific KPI dictionaries, scorecards, and review cadences.',
    metric: 'Data-Backed Control',
    color: 'emerald'
  },
  {
    id: 'scale',
    icon: TrendingUp,
    title: 'Scalable Growth',
    subtitle: 'Multi-Unit Replicable Systems',
    summary: 'Architects sustainable expansion frameworks allowing multi-branch and revenue scaling without chaos.',
    metric: 'Predictable Scale',
    color: 'purple'
  }
];

export default function HeroSection() {
  const [activeNode, setActiveNode] = useState(blueprintNodes[0].id);
  const selectedNode = blueprintNodes.find((n) => n.id === activeNode) || blueprintNodes[0];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{brandIdentity.positioning}</span>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-medium">
                UDYAM: {contactDetails.udyamRegistration}
              </span>
            </div>

            {/* Main Brand Title & Promise */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
                {brandIdentity.officialName}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                BUILDING SYSTEMS.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  MANAGING RISKS.
                </span>{' '}
                DRIVING GROWTH.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {brandIdentity.supportingPositioning}. We partner with business promoters, boards, and growing enterprises to institutionalize governance, eliminate person-dependency, and engineer scalable operations.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
                Schedule Diagnostic Consultation
              </Button>
              <Button to="/services" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-900">
                Explore 7 Core Divisions
              </Button>
            </div>

            {/* Direct Telephone Channel */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct Partner Advisory:</span>
              <a
                href={`tel:${contactDetails.phone}`}
                className="font-bold text-white hover:text-amber-400 transition-colors"
              >
                {contactDetails.phoneDisplay}
              </a>
              <span className="text-slate-700">•</span>
              <span>{brandIdentity.geographicReach}</span>
            </div>
          </div>

          {/* Right Hero: Interactive Systems Architecture Blueprint */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-sm relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                    GROW Enterprise Architecture Blueprint
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Interactive Node Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {blueprintNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = node.id === activeNode;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(node.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-slate-950 border-amber-400/80 shadow-md shadow-amber-500/10 ring-1 ring-amber-400/30'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                      <h4 className="font-display text-xs font-bold text-white mb-0.5">
                        {node.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 block leading-tight">
                        {node.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Active Node Detail Canvas */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 relative overflow-hidden">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Active Subsystem
                    </span>
                    <h4 className="font-display text-sm font-bold text-white">
                      {selectedNode.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {selectedNode.metric}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {selectedNode.summary}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Integrated with 9-Phase GRC Methodology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
