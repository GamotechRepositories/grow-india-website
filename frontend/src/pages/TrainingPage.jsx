import { useState } from 'react';
import { 
  GraduationCap, CheckCircle2, ArrowRight, BookOpen, Users, 
  Target, Award, Sparkles, Clock, Calendar 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { trainingAndCapacityData } from '../data/engagementModels';
import { brandIdentity } from '../data/brand';

const workshopFormats = [
  {
    title: 'Executive Leadership Masterclass',
    duration: '1-Day Intensive (6 Hours)',
    audience: 'Founders, MDs, Board Members & CXOs',
    deliverables: 'Governance blueprint, DoA delegation frameworks & board review protocols.'
  },
  {
    title: 'Departmental SOP & Adoption Bootcamp',
    duration: '2-Day Interactive Workshop',
    audience: 'HODs, Plant Heads, Operations Managers & Team Leads',
    deliverables: 'RACI matrix drills, SOP writing guidelines & supervisory audit checklists.'
  },
  {
    title: 'KPI & MIS Performance Cockpit Clinic',
    duration: 'Half-Day Focused Session',
    audience: 'Finance, HR, Sales & Operational Leaders',
    deliverables: 'Role-specific KPI scorecards, target setting formulas & review cadences.'
  }
];

export default function TrainingPage() {
  return (
    <PageLayout
      title={`Executive Training & Capacity Building – ${brandIdentity.shortName}`}
      description="GROW Executive Training: Practical workshops on SOP adoption, risk and compliance awareness, KPI management, and governance for growing enterprises."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Section XVII • Institutional Capacity</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
            EXECUTIVE TRAINING & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">CAPACITY BUILDING</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {trainingAndCapacityData.subtitle}
          </p>
        </div>
      </section>

      {/* 8 Core Training Modules */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Curriculum Focus"
            title="8 Core Capacity Building Modules"
            subtitle="Equipping internal leadership and managerial teams with permanent operational discipline."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {trainingAndCapacityData.topics.map((topic, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-mono text-xs font-black text-amber-700 block mb-2">
                    MODULE 0{idx + 1}
                  </span>
                  <h3 className="font-display text-sm font-bold text-slate-900 leading-snug">
                    {topic}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Interactive Drill</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Workshop Formats */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Delivery Formats"
            title="Institutional Workshop Formats"
            subtitle="Customized on-premise and offsite programs tailored to your organization's stage."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {workshopFormats.map((w, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                      {w.duration}
                    </span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {w.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div>
                      <strong className="text-slate-800 block">Target Participants:</strong>
                      <span>{w.audience}</span>
                    </div>
                    <div className="pt-2">
                      <strong className="text-slate-800 block">Core Deliverable:</strong>
                      <span>{w.deliverables}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button to="/contact" variant="outline" size="sm" className="w-full justify-between" icon={ArrowRight}>
                    Request Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Need a Customized In-House Training Workshop?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We curate specific modules based on your company's SOP rollout or governance transition agenda.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="gold" size="md" icon={ArrowRight}>
              Inquire for Custom Workshop
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
