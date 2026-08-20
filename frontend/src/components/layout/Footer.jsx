import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { footerLinks } from '../../data/navigation';
import { contactDetails } from '../../data/contact';
import { brandIdentity } from '../../data/brand';
import BrandLogo from '../common/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800" aria-label="Site Footer">
      {/* Upper Footer CTA Strip */}
      <div className="border-b border-slate-900 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {brandIdentity.positioning}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {brandIdentity.brandPromise}
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm shrink-0"
            >
              <span>Schedule Diagnostic Consultation</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" size="lg" />

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              {brandIdentity.supportingPositioning}. Providing institutional governance, risk mitigation, process structuring, and performance management across India.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>UDYAM: {contactDetails.udyamRegistration}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-amber-400 transition-colors">
                  {contactDetails.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-amber-400 transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Core Divisions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.practiceAreas.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <span>&copy; {currentYear} {brandIdentity.officialName}. All Rights Reserved.</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-400 text-xs">
            <span>{brandIdentity.geographicReach}</span>
            <span className="text-slate-700">•</span>
            <span>UDYAM Registered MSME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
