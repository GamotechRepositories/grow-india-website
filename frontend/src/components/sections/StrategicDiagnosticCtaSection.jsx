import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { contactDetails } from '../../data/contact';
import { brandPromiseSection, callToActionData } from '../../data/brand';

export default function StrategicDiagnosticCtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">
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
        <div className="mt-8 mb-12 p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-3">
            {callToActionData.startConversation.heading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {callToActionData.startConversation.steps.map((step, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200"
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: What GROW Can Help Identify */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Diagnostic Scope
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
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

            <div className="mt-8 pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Official Entity Registration:
              </span>
              <div className="text-xs text-slate-400 font-mono">
                UDYAM: {contactDetails.udyamRegistration}
              </div>
              <p className="text-xs text-slate-400 mt-1 italic">
                "{contactDetails.motto}"
              </p>
            </div>
          </div>

          {/* Right: Direct Verified Communication Channels */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border-2 border-amber-500/40 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
                Direct Corporate Advisory
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-2">
                {callToActionData.bookAuditBanner}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Connect directly with our consulting team to initiate an institutional review of your governance, SOPs, controls, and growth systems.
              </p>

              <div className="space-y-3">
                {/* Telephone */}
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-amber-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Mobile / WhatsApp
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {contactDetails.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                </a>

                {/* WhatsApp */}
                <a
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-emerald-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Instant WhatsApp Messaging
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {contactDetails.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between hover:border-amber-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Official Corporate Email
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors break-all">
                        {contactDetails.email}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <Button to="/contact" variant="gold" size="lg" className="w-full" icon={ArrowRight}>
                Book Free Business / Process Audit
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
