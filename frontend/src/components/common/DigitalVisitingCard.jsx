import { Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import growLogo from '../../assets/logo/grow-india-logo.png';
import { contactDetails } from '../../data/contact';

// Custom clean SVG icons for Instagram, Facebook, and LinkedIn
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function DigitalVisitingCard({ className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#060B1C] via-[#09112A] to-[#040816] text-white border-2 border-amber-400/40 p-5 sm:p-7 shadow-2xl backdrop-blur-xl ${className}`}>
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Filigree Highlights */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400/50 rounded-tl-md" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400/50 rounded-tr-md" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400/50 rounded-bl-md" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400/50 rounded-br-md" />

      {/* Center Golden Brand Emblem & Title */}
      <div className="text-center space-y-2.5 relative z-10 pb-4 border-b border-amber-500/20">
        <div className="inline-flex justify-center items-center">
          <img
            src={growLogo}
            alt={contactDetails.officialName}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_8px_16px_rgba(217,175,55,0.3)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-0.5">
          <h2 className="font-display font-extrabold text-base sm:text-lg text-white tracking-wider uppercase leading-snug">
            {contactDetails.officialName}
          </h2>
          <p className="font-sans font-bold text-[9.5px] sm:text-[11px] text-amber-300/90 tracking-widest uppercase">
            {contactDetails.subtitle}
          </p>
        </div>

        {/* Golden Tagline Pills */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] sm:text-[11px] font-bold text-amber-300 tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>GRC • Transformation • SOP • KRA</span>
        </div>
      </div>

      {/* Redesigned Clean Clickable Verified Channels */}
      <div className="py-4 space-y-2 relative z-10">
        
        {/* 1. Phone */}
        <a
          href={`tel:${contactDetails.phone}`}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 hover:bg-slate-800/90 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold leading-tight">Phone</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                {contactDetails.phoneDisplay}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 transition-colors" />
        </a>

        {/* 2. Email */}
        <a
          href={`mailto:${contactDetails.email}`}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 hover:bg-slate-800/90 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold leading-tight">Email</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors break-all leading-tight block">
                {contactDetails.email}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 transition-colors" />
        </a>

        {/* 3. WhatsApp Business (Single Number Clean Display) */}
        <a
          href={contactDetails.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/40 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-emerald-300 block font-semibold leading-tight">WhatsApp Business</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate block">
                {contactDetails.phoneDisplay}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-400 shrink-0 transition-colors" />
        </a>

        {/* 4. Instagram */}
        <a
          href={contactDetails.socialMedia.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/60 hover:bg-slate-800/90 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold leading-tight">Instagram</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition-colors truncate block">
                {contactDetails.socialMedia.instagram.handle}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 shrink-0 transition-colors" />
        </a>

        {/* 5. Facebook */}
        <a
          href={contactDetails.socialMedia.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-800/90 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold leading-tight">Facebook</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate block">
                {contactDetails.socialMedia.facebook.name}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 shrink-0 transition-colors" />
        </a>

        {/* 6. LinkedIn */}
        <a
          href={contactDetails.socialMedia.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-800/90 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <LinkedInIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold leading-tight">LinkedIn</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate block">
                {contactDetails.socialMedia.linkedin.name}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 shrink-0 transition-colors" />
        </a>

      </div>

      {/* Bottom Golden Divider Filigree & Udyam Footnote */}
      <div className="pt-3 border-t border-amber-500/20 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
          <span>UDYAM: {contactDetails.udyamRegistration}</span>
          <span>•</span>
          <span className="text-amber-300 font-semibold">{contactDetails.geographicScope}</span>
        </div>
      </div>
    </div>
  );
}
