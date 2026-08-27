import { ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import FreeAuditForm from '../components/audit/FreeAuditForm';
import { brandIdentity } from '../data/brand';
import { contactDetails } from '../data/contact';

export default function AuditPage() {
  return (
    <PageLayout
      title={`Free Business Health Audit Questionnaire – ${brandIdentity.shortName}`}
      description="Take the official GROW 2-minute organizational health check. Identify operational gaps, reduce person-dependency, and download your free filled PDF diagnostic report."
    >
      {/* ========================================================================= */}
      {/* 1. HERO HEADER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-12 lg:py-16">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>GROW Free Organizational Health Check</span>
          </div>

          {/* Main Headings */}
          <div className="space-y-2 max-w-4xl mx-auto">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              GROW FREE AUDIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">QUESTIONNAIRE</span>
            </h1>
            <p className="font-display text-sm sm:text-lg font-bold text-amber-400/90 tracking-wide uppercase">
              A Short Self-Assessment Tool for Organizations
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Identify Strengths. Detect Gaps. Improve Systems. Drive Sustainable Growth.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE AUDIT FORM */}
      {/* ========================================================================= */}
      <section id="audit-form" className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              href="https://wa.me/919405751665?text=Hello%20GROW%20Team%2C%20I%20have%20filled%20the%20Free%20Business%20Health%20Audit%20Questionnaire%20and%20would%20like%20to%20schedule%20a%20diagnostic%20debrief."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs sm:text-sm shadow-xl transition-all transform active:scale-95"
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
