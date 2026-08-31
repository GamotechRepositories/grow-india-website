import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { footerLinks } from '../../data/navigation';
import { contactDetails } from '../../data/contact';
import { brandIdentity } from '../../data/brand';
import BrandLogo from '../common/BrandLogo';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800" aria-label="Site Footer">
      {/* Upper Footer CTA Strip */}
      <div className="border-b border-slate-900 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block mb-0.5 sm:mb-1">
                {brandIdentity.positioning}
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-tight">
                {brandIdentity.brandPromise}
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-400 transition-colors shadow-sm shrink-0 w-full sm:w-auto"
            >
              <span>Schedule Diagnostic</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <BrandLogo variant="dark" size="md" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2 sm:pr-6">
              {brandIdentity.supportingPositioning}. Institutional governance, risk mitigation, and performance management across India.
            </p>

            {/* Verified Social Media Channels Strip */}
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <a
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Business"
                  className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors border border-emerald-500/30"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactDetails.socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-colors border border-pink-500/30"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactDetails.socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-blue-500/30"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactDetails.socialMedia.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-colors border border-sky-500/30"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap sm:flex-col gap-2 sm:gap-1.5 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>UDYAM: {contactDetails.udyamRegistration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-amber-400 transition-colors font-semibold">
                  {contactDetails.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid: 2 Columns on Mobile, 3 Columns on Desktop */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 pt-2 sm:pt-0">
            {/* Company Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-4 border-b border-slate-800 pb-1.5">
                Organization
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-amber-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/audit" className="text-amber-400 font-bold hover:underline">
                    ★ Free Health Check-Up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Core Divisions */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-4 border-b border-slate-800 pb-1.5">
                Core Divisions
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs">
                {footerLinks.services.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-amber-400 transition-colors truncate block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-4 border-b border-slate-800 pb-1.5">
                Practice Areas
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs grid grid-cols-2 sm:grid-cols-1 gap-x-3 sm:gap-x-0">
                {footerLinks.practiceAreas.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-amber-400 transition-colors truncate block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-4 sm:py-6 text-[11px] sm:text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
            <span>&copy; {currentYear} {brandIdentity.officialName}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-slate-400">
            <span>{brandIdentity.geographicReach}</span>
            <span className="text-slate-700">•</span>
            <span>UDYAM Registered MSME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
