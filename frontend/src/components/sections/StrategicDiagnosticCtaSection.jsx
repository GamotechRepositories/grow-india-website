import { CheckCircle2, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import DigitalVisitingCard from '../common/DigitalVisitingCard';
import { contactDetails } from '../../data/contact';
import { brandPromiseSection, callToActionData } from '../../data/brand';

export default function StrategicDiagnosticCtaSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-950 text-white relative overflow-hidden" id="contact">
      {/* Background Decorative Ambient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          badge="Engagement & Audit"
          badgeIcon={Shield}
          title={callToActionData.title}
          subtitle={brandPromiseSection.belief}
          theme="dark"
          align="center"
        />

        {/* Start with a conversation steps */}
        <div className="mt-6 mb-8 p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            {callToActionData.startConversation.heading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {callToActionData.startConversation.steps.map((step, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200"
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: What GROW Can Help Identify */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Diagnostic Scope
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                GROW Can Help Identify:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {callToActionData.identifyPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                Official Entity Registration:
              </span>
              <div className="text-xs text-slate-400 font-mono break-all">
                UDYAM: {contactDetails.udyamRegistration}
              </div>
              <p className="text-xs text-slate-400 italic">
                "{contactDetails.motto}"
              </p>
            </div>
          </div>

          {/* Right: The Exact Digital Visiting Card as Requested */}
          <div className="lg:col-span-6">
            <DigitalVisitingCard />
          </div>
        </div>

      </div>
    </section>
  );
}
