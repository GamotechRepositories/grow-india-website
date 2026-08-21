import { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, ShieldCheck, 
  CheckCircle2, ArrowRight, Sparkles, Building2, HelpCircle, Send 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { contactDetails } from '../data/contact';
import { brandIdentity, callToActionData } from '../data/brand';
import { services } from '../data/services';
import { industries } from '../data/industries';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    sector: industries[0].name,
    division: services[0].code,
    primaryFriction: '',
    urgency: 'Within 2-4 Weeks'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title={`Contact & Diagnostic Consultation – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="Connect directly with GROW India's principal consultants for business health audits, GRC frameworks, SOP codification, and scalable enterprise systems."
    >
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Principal Advisory</span>
          </span>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-3">
            START WITH A STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">DIAGNOSTIC CONVERSATION</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our senior consulting partners to discuss organizational restructuring, compliance registers, SOPs, or multi-branch scalability.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Form (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. A principal consultant from GROW India will review your inquiry and connect via {formData.phone || formData.email} within 24 business hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-amber-700 font-bold hover:underline cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-slate-200 pb-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">
                        Confidential Scope Intake
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        Schedule An Enterprise Diagnostic Discussion
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Enterprise / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Apex Manufacturing Pvt Ltd"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Industry Sector
                        </label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                        >
                          {industries.map((ind) => (
                            <option key={ind.id} value={ind.name}>{ind.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Target Practice Division
                        </label>
                        <select
                          value={formData.division}
                          onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                        >
                          {services.map((srv) => (
                            <option key={srv.id} value={srv.code}>{srv.code} – {srv.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Primary Operational Challenge / Scope
                      </label>
                      <textarea
                        rows={3}
                        value={formData.primaryFriction}
                        onChange={(e) => setFormData({ ...formData, primaryFriction: e.target.value })}
                        placeholder="Briefly describe your key pain points (e.g. person-dependent operations, compliance risks, lack of MIS reports, or multi-branch expansion needs)..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
                        Submit Diagnostic Request
                      </Button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      Strict confidentiality assured under mutual non-disclosure standards.
                    </p>
                  </form>
                )}

              </div>
            </div>

            {/* Right Information Channels (5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Channels Box */}
              <div className="p-5 sm:p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                    Direct Corporate Access
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    Verified Advisory Channels
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Telephone */}
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 flex items-center justify-between gap-2.5 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Direct Line</span>
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate block">
                          {contactDetails.phoneDisplay}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 flex items-center justify-between gap-2.5 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Official Inquiries</span>
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors break-all leading-snug block">
                          {contactDetails.email}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={contactDetails.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between gap-2.5 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">Instant WhatsApp Advisory</span>
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate block">
                          Connect on WhatsApp
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Location & Working Hours (Clean Multi-line Stacking) */}
                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-[11px] uppercase tracking-wider mb-0.5">
                        Location:
                      </strong>
                      <span className="text-slate-400 text-xs leading-relaxed block">
                        {contactDetails.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-[11px] uppercase tracking-wider mb-0.5">
                        Working Hours:
                      </strong>
                      <span className="text-slate-400 text-xs leading-relaxed block">
                        {contactDetails.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entity Registration Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-1">
                  Official Entity Credential
                </span>
                <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {brandIdentity.officialName} ({brandIdentity.shortName})
                </h4>
                <div className="text-xs font-mono text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 mb-2 break-all">
                  UDYAM REGISTRATION: {contactDetails.udyamRegistration}
                </div>
                <p className="text-xs text-slate-500 italic">
                  "{contactDetails.motto}"
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
