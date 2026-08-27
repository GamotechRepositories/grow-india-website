import { ShieldCheck, MessageCircle, ArrowRight, Sparkles, Building2, Clock, FileText, Lock, Award } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import FreeAuditForm from '../components/audit/FreeAuditForm';
import { brandIdentity } from '../data/brand';
import { contactDetails } from '../data/contact';

export default function AuditPage() {
  return (
    <PageLayout
      title={`Free Corporate Health Check-Up – Business Audit Questionnaire – ${brandIdentity.shortName}`}
      description="Take the official GROW Free Corporate Health Check-Up & Organizational Audit Questionnaire. Identify strengths, detect gaps, improve systems, and drive sustainable growth."
    >
      {/* ========================================================================= */}
      {/* 1. TOP HERO HEADER: HIGHLIGHTED FREE CORPORATE HEALTH CHECK-UP */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a1122] to-slate-950 text-white border-b-2 border-amber-400/40 py-10 sm:py-14 lg:py-16">
        {/* Background Gradients & Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-amber-500/25 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          
          {/* Top Sparkling Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg transform hover:scale-105 transition-all">
            <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950 animate-bounce" />
            <span>★ 100% FREE CORPORATE HEALTH CHECK-UP ★</span>
          </div>

          {/* Grand Main Headings with Maximum Visibility */}
          <div className="space-y-2.5 max-w-4xl mx-auto">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              FREE CORPORATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">HEALTH CHECK-UP</span>
            </h1>
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-inner">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-display text-xs sm:text-base font-bold text-amber-300 tracking-wider uppercase">
                GROW Free Audit Questionnaire • Organizational Health Check
              </span>
            </div>

            <p className="font-display text-xs sm:text-sm font-semibold text-slate-300 tracking-wide uppercase mt-1">
              A Short Self-Assessment Tool for Organizations
            </p>
            <p className="text-xs sm:text-sm text-amber-300 font-medium">
              Identify Strengths • Detect Gaps • Improve Systems • Drive Sustainable Growth
            </p>
          </div>

          {/* 4 Quick Value Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold text-slate-200">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Takes Only 2 Minutes</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant 2-Page PDF Certificate</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Confidential</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Expert GROW Diagnosis</span>
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE AUDIT FORM & TABLE MATRIX */}
      {/* ========================================================================= */}
      <section id="audit-form" className="py-8 sm:py-12 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <FreeAuditForm />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BOTTOM CTA & DIRECT CONTACT */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
            Partner With GROW
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white max-w-3xl mx-auto leading-tight">
            Ready to Build Stronger Systems & Protect Your Profitability?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Send your completed audit sheet or connect directly with our senior consulting partners for an in-depth diagnostic debrief.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <a
              href="https://wa.me/919405751665?text=Hello%20GROW%20Team%2C%20I%20have%20filled%20the%20Free%20Corporate%20Health%20Check-Up%20Questionnaire%20and%20would%20like%20to%20schedule%20a%20diagnostic%20debrief."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs sm:text-sm shadow-xl transition-all transform active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 94057 51665)</span>
            </a>

            <Button
              to="/contact"
              variant="gold"
              size="md"
              icon={ArrowRight}
            >
              Schedule 1-on-1 Consultation
            </Button>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            <span>Email: </span>
            <a href={`mailto:${contactDetails.email}`} className="text-amber-400 hover:underline">
              {contactDetails.email}
            </a>
            <span className="mx-2">•</span>
            <span>Serving Businesses Across India</span>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
