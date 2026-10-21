import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ClipboardCheck, 
  ArrowRight, 
  Sparkles, 
  X, 
  Download,
  Eye,
  ExternalLink,
  MessageCircle,
  Phone,
  Globe,
  CheckCircle2,
  Maximize2,
  ZoomIn
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import growLogo from '../assets/logo/grow-india-logo.png';
import trifoldBrochureImg from '../assets/images/GROW_India_TriFold_Brochure_Resized.png';
import qrBrochureImg from '../assets/images/GROW_brochure_updated_working_QR.png';
import { resourcesConfig } from '../config/resourcesConfig';
import { contactDetails } from '../data/contact';
import { brandIdentity } from '../data/brand';

export default function ResourcesPage() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [activeBrochure, setActiveBrochure] = useState(null); // For full-screen lightbox preview
  const [isZoomed, setIsZoomed] = useState(false);

  const brochures = [
    {
      id: 'trifold',
      title: 'GROW India Tri-Fold Brochure',
      tagline: 'Official Corporate Profile & 7 Divisions',
      image: trifoldBrochureImg,
      publicPath: '/brochures/GROW_India_TriFold_Brochure_Resized.png',
      downloadName: 'GROW_India_TriFold_Corporate_Brochure.png',
      description: 'Comprehensive presentation covering institutional credentials, 7 practice divisions, and business systems.'
    },
    {
      id: 'executive-qr',
      title: 'GROW Executive Brochure (QR Edition)',
      tagline: 'Strategic Diagnostic & Systems Guide',
      image: qrBrochureImg,
      publicPath: '/brochures/GROW_brochure_updated_working_QR.png',
      downloadName: 'GROW_Brochure_Strategic_Guide.png',
      description: 'Executive overview detailing diagnostic health check vectors, quick scan access, and advisory methodologies.'
    }
  ];

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeBrochure) {
          setActiveBrochure(null);
          setIsZoomed(false);
        } else if (showBrochureModal) {
          setShowBrochureModal(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeBrochure, showBrochureModal]);

  return (
    <PageLayout
      title={`Explore Our Resources – ${brandIdentity.shortName}`}
      description="Access GROW India official resources: View Corporate Brochures or Fill the Free Corporate Health Check-Up Questionnaire."
      hideFooter={true}
    >
      {/* Dynamic Viewport Container tailored for Mobile Viewports */}
      <div className="min-h-[calc(100dvh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-between bg-gradient-to-b from-[#060B1C] via-[#09112A] to-[#040816] text-white px-3 sm:px-6 py-4 sm:py-10 relative overflow-x-hidden">
        
        {/* Subtle Ambient Golden Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* =================================================================== */}
        {/* CENTER CONTENT: BRANDING + 2 PROPER OPTIONS                         */}
        {/* =================================================================== */}
        <div className="max-w-md w-full mx-auto my-auto relative z-10 space-y-4 sm:space-y-6 text-center">
          
          {/* 1. Official Logo & Brand Header (Mobile Optimized Dimensions) */}
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex justify-center items-center">
              <img
                src={growLogo}
                alt={contactDetails.officialName}
                className="h-14 sm:h-20 w-auto object-contain drop-shadow-[0_6px_16px_rgba(217,175,55,0.35)]"
              />
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="font-display text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                {brandIdentity.brandName}
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-amber-300/90 tracking-widest uppercase">
                {contactDetails.officialName}
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">
                {contactDetails.tagline}
              </p>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] sm:text-[11px] font-bold text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Explore Our Resources</span>
            </div>
          </div>

          {/* 2. ONLY TWO PROPER OPTIONS (Mobile Friendly Touch Cards) */}
          <div className="space-y-3 text-left pt-1">
            
            {/* OPTION 1: VIEW BROCHURE */}
            <button
              type="button"
              onClick={() => setShowBrochureModal(true)}
              className="w-full p-3.5 sm:p-5 rounded-2xl bg-slate-900/95 hover:bg-slate-800 border-2 border-slate-700/80 hover:border-amber-400 active:scale-[0.99] text-left transition-all duration-200 flex items-center justify-between group shadow-lg backdrop-blur-md cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors border border-amber-400/30">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Option 1
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      2 Brochures
                    </span>
                  </div>
                  <h2 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors truncate leading-tight">
                    View Brochure
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                    Tri-Fold &amp; Executive QR Guide
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-1.5" />
            </button>

            {/* OPTION 2: FILL QUESTIONNAIRE */}
            <Link
              to={resourcesConfig.questionnairePath}
              className="w-full p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 active:scale-[0.99] text-slate-950 text-left transition-all duration-200 flex items-center justify-between group shadow-xl hover:shadow-amber-500/25 cursor-pointer border-2 border-amber-300"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                  <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-900/80 block">
                    Option 2 • 100% Free
                  </span>
                  <h2 className="font-display text-sm sm:text-base font-black text-slate-950 truncate leading-tight">
                    Fill Questionnaire
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-900 font-semibold truncate">
                    2-Min Health Check • Instant PDF Report
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 group-hover:translate-x-1 transition-transform shrink-0 ml-1.5" />
            </Link>

          </div>

          {/* 3. Minimal Helpline & Main Site Link */}
          <div className="pt-1 space-y-2 text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-300">
              <a
                href={contactDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
              <span className="text-slate-600">•</span>
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Main Site</span>
              </Link>
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* SIMPLE MINIMAL BOTTOM CREDENTIAL STRIP (NOT A BIG FOOTER)           */}
        {/* =================================================================== */}
        <div className="relative z-10 text-center pt-3 pb-1 border-t border-slate-800/80 mt-4 max-w-md mx-auto w-full text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-0.5">
          <div>UDYAM: {contactDetails.udyamRegistration}</div>
          <div className="text-slate-400">{contactDetails.email}</div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* 4. BROCHURE SELECTION & PREVIEW MODAL (MOBILE PERFECT)               */}
      {/* =================================================================== */}
      {showBrochureModal && !activeBrochure && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md sm:max-w-lg rounded-2xl sm:rounded-3xl bg-slate-900 border border-amber-400/40 text-white p-4 sm:p-6 shadow-2xl space-y-4 max-h-[92dvh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-0.5 text-center pr-6 pl-2">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                Official Corporate Collateral
              </span>
              <h3 className="font-display text-base sm:text-xl font-bold text-white">
                Select Brochure
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300">
                Choose a brochure to preview or download
              </p>
            </div>

            {/* The 2 Brochures Cards - Compact Mobile Row Layout */}
            <div className="space-y-3 pt-0.5">
              {brochures.map((item, index) => (
                <div 
                  key={item.id}
                  className="rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/60 transition-all p-3 space-y-2.5 group"
                >
                  <div className="flex gap-3 items-center">
                    
                    {/* Compact Mobile Thumbnail (Tap to view full) */}
                    <div 
                      onClick={() => {
                        setActiveBrochure(item);
                        setIsZoomed(false);
                      }}
                      className="relative w-24 sm:w-32 h-20 sm:h-22 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 shrink-0 cursor-pointer group-hover:border-amber-400/50 transition-all"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center gap-1 text-[10px] font-bold text-amber-300">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </div>
                    </div>

                    {/* Title and Details */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400">
                          Brochure {index + 1}
                        </span>
                      </div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-2 leading-snug">
                        {item.tagline}
                      </p>
                    </div>

                  </div>

                  {/* Actions Bar for Each Brochure */}
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-900/80">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveBrochure(item);
                        setIsZoomed(false);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={item.image}
                      download={item.downloadName}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Modal Helper */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => setShowBrochureModal(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer underline"
              >
                Back to Resources
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. FULL-SCREEN LIGHTBOX VIEWER FOR SELECTED BROCHURE (MOBILE FIT)    */}
      {/* =================================================================== */}
      {activeBrochure && (
        <div 
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/98 backdrop-blur-md p-2 sm:p-5 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Control Bar - Clean on Mobile */}
          <div className="flex items-center justify-between text-white pb-2.5 px-1 border-b border-slate-800">
            <div className="min-w-0 pr-2">
              <h3 className="font-display text-xs sm:text-base font-bold text-white truncate">
                {activeBrochure.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-amber-300 truncate">
                {activeBrochure.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Zoom Toggle */}
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1"
                title={isZoomed ? "Reset Zoom" : "Zoom in"}
              >
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">{isZoomed ? "Reset" : "Zoom"}</span>
              </button>

              <a
                href={activeBrochure.image}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                title="Open original file"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>Original</span>
              </a>

              <a
                href={activeBrochure.image}
                download={activeBrochure.downloadName}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveBrochure(null);
                  setIsZoomed(false);
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Full-View Image Container with Smooth Touch Panning & Zoom */}
          <div className="flex-1 flex items-center justify-center p-1 sm:p-3 overflow-auto touch-pan-x touch-pan-y">
            <img 
              src={activeBrochure.image} 
              alt={activeBrochure.title}
              onClick={() => setIsZoomed(!isZoomed)}
              className={`transition-all duration-300 rounded-lg shadow-2xl border border-slate-800 cursor-zoom-in ${
                isZoomed 
                  ? 'max-w-none w-[180%] sm:w-[150%] my-auto' 
                  : 'max-h-[75dvh] sm:max-h-[80vh] max-w-full w-auto object-contain'
              }`}
            />
          </div>

          {/* Mobile Helper Hint */}
          <div className="py-1 text-center text-[10px] text-slate-400">
            <span>💡 Tip: Tap image to zoom • Click Download for full HD file</span>
          </div>

          {/* Bottom Switcher Strip */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-center gap-2">
            {brochures.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => {
                  setActiveBrochure(b);
                  setIsZoomed(false);
                }}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer truncate max-w-[170px] sm:max-w-none ${
                  activeBrochure.id === b.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {b.title.replace('GROW ', '')}
              </button>
            ))}
          </div>

        </div>
      )}

    </PageLayout>
  );
}
