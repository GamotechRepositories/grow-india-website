import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: What GROW Can Help Identify */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Diagnostic Scope
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4">
                GROW Can Help Identify:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {callToActionData.identifyPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                Official Entity Registration:
              </span>
              <div className="text-xs text-slate-400 font-mono">
                UDYAM: {contactDetails.udyamRegistration}
              </div>
              <p className="text-xs text-slate-400 mt-0.5 italic">
                "{contactDetails.motto}"
              </p>
            </div>
          </div>

          {/* Right: Direct Verified Communication Channels */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border-2 border-amber-500/40 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                Direct Corporate Advisory
              </span>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white mb-1.5">
                Initiate Confidential Diagnostic
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Connect directly with principal consultants to discuss organizational restructuring, compliance, or scaling systems.
              </p>

              <div className="space-y-2.5">
                {/* Telephone */}
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Direct Line</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {contactDetails.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Official Inquiries</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {contactDetails.email}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* WhatsApp */}
                <a
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">Instant Messaging</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        WhatsApp Consultation Channel
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
              <span>Location: {contactDetails.location}</span>
              <span className="text-amber-400 font-semibold">{contactDetails.workingHours}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
