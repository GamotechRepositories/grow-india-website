/**
 * Central Configuration for GROW India Resources, Brochure & Questionnaire Portal
 *
 * This configuration controls:
 * 1. The dedicated landing page URL encoded in the single QR code.
 * 2. The Brochure PDF source, availability flag, and pending fallback messaging.
 * 3. The Questionnaire route integration.
 * 4. QR Code asset paths for PNG, SVG, and print-ready card.
 */

import { contactDetails } from '../data/contact';

// Public production site base URL (can be customized via VITE_PUBLIC_SITE_URL)
const DEFAULT_PRODUCTION_BASE = 'https://grow-india-website.onrender.com';

export const resourcesConfig = {
  // Base website URL - prioritizes Vite environment variable if set
  baseUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_PUBLIC_SITE_URL) || DEFAULT_PRODUCTION_BASE,

  // Dedicated landing page path
  landingPagePath: '/resources',

  // Full canonical landing page URL (this is the single URL encoded inside the QR Code)
  get landingPageUrl() {
    return `${this.baseUrl.replace(/\/$/, '')}${this.landingPagePath}`;
  },

  // Existing Questionnaire route
  questionnairePath: '/questionnaire',

  // Brochure configuration
  brochure: {
    /**
     * Asset Availability Flag:
     * Set to true once the brochure PDF is uploaded, or pass VITE_BROCHURE_AVAILABLE=true.
     * When false, the landing page gracefully displays a corporate advisory notice with
     * direct WhatsApp request and questionnaire options instead of throwing a 404 error.
     */
    isAvailable: (typeof import.meta !== 'undefined' && (import.meta.env?.VITE_BROCHURE_AVAILABLE === 'true' || Boolean(import.meta.env?.VITE_BROCHURE_URL))) || false,

    /**
     * Brochure PDF location:
     * When the actual PDF is ready, you can either:
     * a) Place the PDF file in `frontend/public/brochure.pdf` (default local path)
     * b) Provide an external hosted URL via the VITE_BROCHURE_URL environment variable
     */
    url: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BROCHURE_URL) || '/brochure.pdf',

    title: 'GROW India Corporate Brochure',
    subtitle: 'Institutional Profile, Governance Systems, SOP Architecture & Services Suite',
    description: 'Comprehensive 360° overview of Govind Raadhaa Organizational Wonders (GROW) consulting practices, 7 core divisions, frameworks, and institutional engagement models.',
    
    // Fallback advisory details when brochure is pending final upload
    pendingNotice: {
      badge: 'PDF Being Finalized',
      heading: 'Official Brochure Update in Progress',
      message: 'The official GROW India Corporate Brochure & Institutional Presentation is currently undergoing final review for the current fiscal cycle. It will be available for direct download shortly.',
      whatsappPrompt: `Hello GROW India advisory desk, I scanned the resources QR code and would like to request the latest Corporate Brochure & Service Suite presentation deck.`
    }
  },

  // Questionnaire card configuration
  questionnaire: {
    title: 'Free Corporate Health Check-Up',
    subtitle: 'GROW Free Audit Questionnaire • 2-Minute Diagnostic',
    description: 'Evaluate your organization across 12 strategic operating vectors including GRC, SOPs, Cash Controls, MIS, and KRAs. Receive an instant 2-page downloadable PDF certificate.',
    badge: '100% Free • Instant PDF'
  },

  // QR Code asset references (located in /public/qr/)
  qrCode: {
    pngPath: '/qr/grow-resources-qr.png',
    svgPath: '/qr/grow-resources-qr.svg',
    cardSvgPath: '/qr/grow-resources-qr-card.svg',
    cardPngPath: '/qr/grow-resources-qr-card.png',
    label: 'Scan to View Brochure & Questionnaire'
  },

  // Quick WhatsApp link helper
  getWhatsAppBrochureRequestUrl() {
    const phone = contactDetails.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(this.brochure.pendingNotice.whatsappPrompt);
    return `https://wa.me/${phone}?text=${text}`;
  }
};

export default resourcesConfig;
