import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ClipboardCheck, 
  ArrowRight, 
  Sparkles, 
  X, 
  AlertCircle,
  MessageCircle,
  Phone,
  Globe
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import growLogo from '../assets/logo/grow-india-logo.png';
import { resourcesConfig } from '../config/resourcesConfig';
import { contactDetails } from '../data/contact';
import { brandIdentity } from '../data/brand';

export default function ResourcesPage() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  // Handle View Brochure click
  const handleViewBrochure = () => {
    if (resourcesConfig.brochure.isAvailable && resourcesConfig.brochure.url) {
      window.open(resourcesConfig.brochure.url, '_blank', 'noopener,noreferrer');
    } else {
      setShowBrochureModal(true);
    }
  };

  return (
    <PageLayout
      title={`Explore Our Resources – ${brandIdentity.shortName}`}
      description="Access GROW India official resources: View Corporate Brochure or Fill the Free Corporate Health Check-Up Questionnaire."
      hideFooter={true}
    >
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-between bg-gradient-to-b from-[#060B1C] via-[#09112A] to-[#040816] text-white px-4 py-8 sm:py-12 relative overflow-hidden">
        
        {/* Subtle Ambient Golden Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* =================================================================== */}
        {/* CENTER CONTENT: BRANDING + 2 PROPER OPTIONS                         */}
        {/* =================================================================== */}
        <div className="max-w-md w-full mx-auto my-auto relative z-10 space-y-6 sm:space-y-8 text-center">
          
          {/* 1. Official Logo & Brand Header */}
          <div className="space-y-3">
            <div className="inline-flex justify-center items-center">
              <img
                src={growLogo}
                alt={contactDetails.officialName}
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_8px_20px_rgba(217,175,55,0.35)]"
              />
            </div>

            <div className="space-y-1">
              <h1 className="font-display text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
                {brandIdentity.brandName}
              </h1>
              <p className="text-[11px] sm:text-xs font-semibold text-amber-300/90 tracking-widest uppercase">
                {contactDetails.officialName}
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                {contactDetails.tagline}
              </p>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Explore Our Resources</span>
            </div>
          </div>

          {/* 2. ONLY TWO PROPER OPTIONS */}
          <div className="space-y-3.5 text-left pt-2">
            
            {/* OPTION 1: VIEW BROCHURE */}
            <button
              type="button"
              onClick={handleViewBrochure}
              className="w-full p-4 sm:p-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/95 border-2 border-slate-700/80 hover:border-amber-400 text-left transition-all duration-300 flex items-center justify-between group shadow-xl backdrop-blur-md cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors border border-amber-400/30">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Option 1
                  </span>
                  <h2 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    View Brochure
                  </h2>
                  <p className="text-xs text-slate-300 truncate">
                    Corporate Profile & Services Suite
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </button>

            {/* OPTION 2: FILL QUESTIONNAIRE */}
            <Link
              to={resourcesConfig.questionnairePath}
              className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-left transition-all duration-300 flex items-center justify-between group shadow-2xl hover:shadow-amber-500/25 cursor-pointer hover:scale-[1.02] border-2 border-amber-300"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-900/80 block">
                    Option 2 • 100% Free
                  </span>
                  <h2 className="font-display text-base sm:text-lg font-black text-slate-950 truncate">
                    Fill Questionnaire
                  </h2>
                  <p className="text-xs text-slate-900 font-semibold truncate">
                    2-Min Health Check • Instant PDF Report
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </Link>

          </div>

          {/* 3. Minimal Helpline & Main Site Link */}
          <div className="pt-2 space-y-3 text-center">
            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-300">
              <a
                href={contactDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <span className="text-slate-600">•</span>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Main Website</span>
              </Link>
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* SIMPLE MINIMAL BOTTOM CREDENTIAL STRIP (NOT A BIG FOOTER)           */}
        {/* =================================================================== */}
        <div className="relative z-10 text-center pt-6 border-t border-slate-800/80 mt-8 max-w-md mx-auto w-full text-[11px] text-slate-400 font-mono space-y-1">
          <div>UDYAM: {contactDetails.udyamRegistration}</div>
          <div className="text-slate-400">{contactDetails.email}</div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* PENDING BROCHURE DIALOG (CLEAN & NON-INTRUSIVE)                      */}
      {/* =================================================================== */}
      {showBrochureModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border-2 border-amber-400/40 text-white p-6 shadow-2xl space-y-4 text-center">
            
            <button
              type="button"
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-3.5 right-3.5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-white">
                Brochure Update in Progress
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The official corporate brochure PDF is currently being finalized. You can request it directly via WhatsApp or proceed to the Free Questionnaire.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={resourcesConfig.getWhatsAppBrochureRequestUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request via WhatsApp</span>
              </a>

              <Link
                to={resourcesConfig.questionnairePath}
                onClick={() => setShowBrochureModal(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Fill Questionnaire Instead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </PageLayout>
  );
}
