import { useState } from 'react';
import { PieChart as PieIcon, Sparkles, ShieldCheck, BarChart3, TrendingUp, Layers } from 'lucide-react';

// 1. GROW Core Practice Intervention Weightage Pie / Donut Chart
export function PracticeWeightagePieChart() {
  const [activeSlice, setActiveSlice] = useState(0);

  const data = [
    { label: 'GRC & Risk Governance (GROW Shield)', value: 25, color: '#f59e0b', text: 'Statutory registers, compliance audits, DoA matrices & board oversight.' },
    { label: 'SOPs & Process Engineering (GROW Engine)', value: 25, color: '#10b981', text: 'Step-by-step SOP manuals, RACI matrices, checklists & zero person-dependency.' },
    { label: 'MIS Cockpit & KPI Visibility (GROW Systems)', value: 20, color: '#3b82f6', text: 'Departmental scorecards, role KPIs, executive dashboards & MMR cadences.' },
    { label: 'Strategic Business Model Growth (GROW Consulting)', value: 15, color: '#8b5cf6', text: 'Promoter advisory, margin diagnostics, restructuring & 1-3 year roadmaps.' },
    { label: 'Multi-Unit Scale & Replicability (GROW Scale)', value: 15, color: '#ec4899', text: 'Turnkey replication playbooks, dealer governance & expansion control.' }
  ];

  // Calculate SVG Pie Segments (Circumference calculation for r=80)
  const radius = 80;
  const circumference = 2 * Math.PI * radius; // ~502.65
  let cumulativePercent = 0;

  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
            Holistic Ecosystem Allocation
          </span>
          <h3 className="font-display text-lg sm:text-2xl font-black text-white">
            GROW 360° Consulting Intervention Weightage
          </h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
          <PieIcon className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Pie Distribution</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: SVG Donut / Pie Chart */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {data.map((slice, idx) => {
                const strokeDasharray = `${(slice.value / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                cumulativePercent += slice.value;
                const isSelected = idx === activeSlice;

                return (
                  <circle
                    key={idx}
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="transparent"
                    stroke={slice.color}
                    strokeWidth={isSelected ? "28" : "20"}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(idx)}
                  />
                );
              })}
            </svg>

            {/* Donut Center Core */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="font-mono text-3xl font-black text-white">
                {data[activeSlice].value}%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 max-w-[120px] truncate">
                {data[activeSlice].label.split('(')[0]}
              </span>
            </div>
          </div>
          <span className="text-[11px] text-slate-400 mt-2 text-center">
            (Tap any slice or legend item to inspect discipline breakdown)
          </span>
        </div>

        {/* Right: Interactive Legend & Scope Details */}
        <div className="lg:col-span-7 space-y-2.5">
          {data.map((item, idx) => {
            const isSelected = idx === activeSlice;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlice(idx)}
                className={`w-full p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 shadow-lg ring-1 ring-amber-400/40'
                    : 'bg-slate-950 text-slate-400 border-slate-850 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="font-mono text-xs font-black px-2 py-0.5 rounded-lg shrink-0"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.value}%
                  </span>
                </div>
                {isSelected && (
                  <p className="text-xs text-slate-300 mt-2 pl-6 leading-relaxed border-t border-slate-800 pt-2 animate-in fade-in duration-200">
                    {item.text}
                  </p>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

// 2. Client & Sector Portfolio Distribution Pie Chart
export function ClientPortfolioPieChart() {
  const [activeSlice, setActiveSlice] = useState(0);

  const portfolio = [
    { label: 'Promoter-Led MSMEs & Mid-Market', value: 45, color: '#f59e0b', desc: 'Family-owned enterprises, manufacturing units, and growing trade businesses transitioning from person-dependency.' },
    { label: 'Government & Public Sector Institutions', value: 35, color: '#0ea5e9', desc: 'Municipal corporations, Smart City SPVs, state directorates, public utilities, and board-level initiatives.' },
    { label: 'High-Growth Startups & Multi-Branch Brands', value: 20, color: '#10b981', desc: 'Retail chains, healthcare networks, franchise operations, and fast-scaling tech-enabled companies.' }
  ];

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercent = 0;

  return (
    <div className="p-5 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-0.5">
            Client Demographic Footprint
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
            Sector & Client Portfolio Distribution
          </h3>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
          Pan-India Coverage
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SVG Donut */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-56 h-56 sm:w-60 sm:h-60 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {portfolio.map((slice, idx) => {
                const strokeDasharray = `${(slice.value / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                cumulativePercent += slice.value;
                const isSelected = idx === activeSlice;

                return (
                  <circle
                    key={idx}
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="transparent"
                    stroke={slice.color}
                    strokeWidth={isSelected ? "26" : "18"}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(idx)}
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="font-mono text-3xl font-black text-slate-900">
                {portfolio[activeSlice].value}%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 max-w-[110px] truncate">
                {portfolio[activeSlice].label.split(' ')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="lg:col-span-7 space-y-3">
          {portfolio.map((item, idx) => {
            const isSelected = idx === activeSlice;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlice(idx)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-amber-400'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <strong className="text-xs sm:text-sm font-bold">
                      {item.label}
                    </strong>
                  </div>
                  <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-lg ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-800'
                  }`}>
                    {item.value}%
                  </span>
                </div>
                <p className={`text-xs mt-1 leading-relaxed ${
                  isSelected ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default {
  PracticeWeightagePieChart,
  ClientPortfolioPieChart
};
